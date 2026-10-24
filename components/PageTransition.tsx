"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Pagetransaction: React.FC<React.PropsWithChildren> = ({ children }) => {
  const patname = usePathname();
  return (
    <AnimatePresence>
      <div key={patname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: .8, duration: 1.5, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default Pagetransaction;
