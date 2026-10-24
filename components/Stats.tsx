"use client";

import React from "react";
import CountUp from "react-countup";
import { statsItems } from "@/constants/constant";

export default function Stats() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
          {statsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-2 p-4 rounded-2xl transition hover:scale-105"
            >
              <div className="flex items-end">
                <CountUp
                  end={item.num}
                  duration={3}
                  className="text-4xl md:text-5xl font-extrabold text-white"
                />
                <span className="text-2xl font-bold ml-1">+</span>
              </div>

              <p className="text-sm md:text-base text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
