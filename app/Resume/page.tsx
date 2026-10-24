"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";

import { experains } from "@/constants/constant";
import Education from "./Education";
import Skills from "./Skills";
import About from "./About";

export default function Resume() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 1.6, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center w-full"
      >
        <div className="max-w-6xl mx-auto p-4 w-full">
          <Tabs defaultValue="experience" className="flex flex-col lg:flex-row gap-12">
            <TabsList className="flex flex-col w-full lg:max-w-[360px] max-w-[580px] mx-auto lg:mx-0 transition-all duration-300 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              {/* Experain */}
              <TabsContent value="experience" className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.2, duration: .2, ease: "easeIn" },
                  }}
                  className="flex flex-col gap-6 text-start xl:text-left">
                  {experains.map((item, index) => (
                    <div
                      key={index}
                      className=" shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex items-start  gap-4 mb-5">
                        <item.icon className="text-4xl" />
                        <h3 className="text-2xl font-semibold">
                          {item.tital}
                        </h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {item.descrip}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
                {/* Education */}
              <TabsContent value="education" className="w-full">
                <motion.div initial={{ opacity: 0 }} animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
                }}>
                  <Education />
                </motion.div>
              </TabsContent>
              {/* Skills */}
              <TabsContent value="skills" className="w-full">
                <motion.div initial={{ opacity: 0 }} animate={{
                  opacity: 1, transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
                }}>
                  <Skills />
                </motion.div>
              </TabsContent>
                {/* About */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <motion.div initial={{
                  opacity: 0,
                }} animate={{
                  opacity: 1, transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
                }}>
                  <About />
                </motion.div>
              </TabsContent>


            </div>
          </Tabs>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
