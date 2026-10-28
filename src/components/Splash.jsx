import React from "react";
import { motion } from "framer-motion";
export default function Splash() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06110e]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="splash-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="mt-8 text-xl font-bold tracking-[.35em] text-[#c6ffc0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        MEGASDHANISHWAR<span className="text-white">.</span>
      </motion.div>
      <p className="mt-3 text-xs tracking-[.25em] text-white/40">
        CRAFTING EXPERIENCES
      </p>
    </motion.div>
  );
}
