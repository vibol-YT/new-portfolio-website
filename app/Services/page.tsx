"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/constants/constant";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            My Services
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed text-center md:text-left">
            I provide professional services in Web Development and UX/UI Design,
            creating modern, responsive, and user-focused digital experiences
            that help businesses grow and engage their audience.
          </p>
        </div>

        <ScrollArea className="h-100 pr-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.4, duration: 1.6, ease: "backInOut" }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 cursor-pointer hover:scale-95 duration-500 p-6 border border-white/10 rounded-2xl hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-white/20">
                    {item.num}
                  </span>

                  <Link
                    href={item.path}
                    className="text-2xl group-hover:text-cyan-400 p-2 hover:scale-105 bg-white/20 rounded-full hover:-rotate-45 flex items-center justify-center duration-500 transition-all"
                  >
                    <BsArrowDownRight className="text-cyan-400 hover:text-cyan-600 transition-all duration-300" />
                  </Link>
                </div>

                <h2 className="text-2xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>

                <div className="border-b border-white/20 w-full mt-4"></div>
              </div>
            ))}
          </motion.div>
        </ScrollArea>

      </div>
    </section>
  );
}
