'use client';

import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

export default function Page() {
  return (
    <section className=" flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full px-4">

        {/* HERO */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Text Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <TypeAnimation
              sequence={[
                'Web Developer', 1500,
                'Front-End Developer', 1500,
                'Back-End Developer', 1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl font-medium text-cyan-400"
            />

            <h1 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-bold">
              Hello, I&apos;m <span className="text-cyan-400">Sim Vibol</span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-lg mx-auto lg:mx-0">
              I&apos;m a passionate Web Developer focused on building clean,
              scalable, and user-friendly web applications. I transform ideas
              into high-performance digital experiences using modern technologies.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-black hover:scale-95 transition-all duration-300"
              >
                Download CV
                <FiDownload className="text-lg" />
              </Button>

              {/* Social */}
              <Social
                containerStyles="flex items-center gap-4"
                iconStyles="text-xl text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 lg:order-2">
            <Photo />
          </div>

        </div>

        {/* STATS */}
        <div className="mt-20">
          <Stats />
        </div>

      </div>
    </section>
  );
}
