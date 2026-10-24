"use client";

import React from "react";
import { skills } from "@/constants/constant";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Skills() {
  return (
    <TooltipProvider>
      {skills.map((group, index) => (
        <div key={index} className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col gap-4 text-center xl:text-left">
            <h3 className="text-4xl font-bold">{group.title}</h3>
            <p className="text-gray-500 max-w-[600px] mx-auto xl:mx-0">
              {group.description}
            </p>
          </div>

          {/* Skills */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-2 xl:py-10 w-full rounded-xl">
            {group.skillList.map((skill, idx) => {
              const Icon = skill.icon;

              return (
                <li key={idx} className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="p-4 rounded bg-white/10
                                   cursor-pointer hover:scale-110
                                   transition"
                      >
                        <Icon className="text-4xl text-white/80 hover:text-cyan-500" />
                      </div>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p className="text-cyan-400">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </TooltipProvider>
  );
}
