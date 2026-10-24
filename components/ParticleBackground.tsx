"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesNeural() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,

      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.6 },
          },
        },
      },

      particles: {
        number: {
          value: 90,
          density: { enable: true, area: 1000 },
        },

        color: {
          value: ["#22d3ee", "#38bdf8", "#0ea5e9"],
        },

        shape: { type: "circle" },

        opacity: {
          value: 1,
        },

        size: {
          value: { min: 2, max: 2 },
        },

        move: {
          enable: true,
          speed: 1.2,
          outModes: { default: "out" },
        },

        links: {
          enable: true,
          distance: 260,
          color: "#22d3ee",
          opacity: 0.25,
          width: 2,
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="neural-particles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}
