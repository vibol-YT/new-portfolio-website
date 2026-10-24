import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../public/logo12.png";

export default function Photo() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        className="
          relative
          w-[260px] h-[260px]
          sm:w-[300px] sm:h-[300px]
          lg:w-[360px] lg:h-[360px]
        "
      >
        {/* Circle 1 */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="50"
            fill="none"
            stroke="#3A9AFF"
            strokeWidth=".1"
            strokeLinecap="round"
            strokeDasharray="8 12"
            animate={{ rotate: 360, strokeDashoffset: 100 }}
            transition={{
              rotate: { repeat: Infinity, duration: 25, ease: "linear" },
              strokeDashoffset: { repeat: Infinity, duration: 25, ease: "linear" },
            }}
            style={{ transformOrigin: "50% 50%" }}
          />
        </motion.svg>

        {/* Circle 2 */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3A9AFF"
            strokeWidth=".1"
            strokeLinecap="round"
            strokeDasharray="6 10"
            animate={{ rotate: -360, strokeDashoffset: 80 }}
            transition={{
              rotate: { repeat: Infinity, duration: 30, ease: "linear" },
              strokeDashoffset: { repeat: Infinity, duration: 30, ease: "linear" },
            }}
            style={{ transformOrigin: "50% 50%" }}
          />
        </motion.svg>

        {/* Circle 3 */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#0066ff"
            strokeWidth=".1"
            strokeLinecap="round"
            strokeDasharray="4 8"
            animate={{ rotate: 360, strokeDashoffset: 60 }}
            transition={{
              rotate: { repeat: Infinity, duration: 20, ease: "linear" },
              strokeDashoffset: { repeat: Infinity, duration: 20, ease: "linear" },
            }}
            style={{ transformOrigin: "50% 50%" }}
          />
        </motion.svg>

        {/* Circle 4 */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#ffcc00"
            strokeWidth=".1"
            strokeLinecap="round"
            strokeDasharray="1 2"
            animate={{ rotate: -360, strokeDashoffset: 40 }}
            transition={{
              rotate: { repeat: Infinity, duration: 15, ease: "linear" },
              strokeDashoffset: { repeat: Infinity, duration: 15, ease: "linear" },
            }}
            style={{ transformOrigin: "50% 50%" }}
          />
        </motion.svg>

        {/* Image */}
        <div className="absolute inset-4 rounded-full overflow-hidden">
          <Image
            src={Logo}
            fill
            priority
            quality={100}
            alt="Logo"
            className="object-cover rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}