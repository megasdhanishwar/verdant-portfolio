import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mouse } from "lucide-react";
import { profile } from "../data/content.js";
export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="container-main relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="status-pill">
            <span className="status-dot" /> Available for exciting opportunities
          </div>
          <p className="mt-8 text-sm font-medium tracking-[.24em] text-[#a6f18c] uppercase">
            Hello, I'm {profile.name}
          </p>
          <h1 className="mt-5 text-[clamp(3.5rem,8vw,7.5rem)] leading-[.98] font-extrabold tracking-[-.065em]">
            Building <br />
            <span className="gradient-text">digital</span>
            <br />
            experiences<span className="text-[#a6f18c]">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#a4b9af] sm:text-lg">
            {profile.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 text-xs tracking-[.2em] text-white/40 uppercase">
            <Mouse size={17} /> Scroll to explore
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-[450px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="orb-wrap">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="orb-core">
              <span className="orb-initial">
                M<span>.</span>
              </span>
              <div className="orb-sub">DESIGN × CODE</div>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <div className="floating-tag top-[18%] -left-1 sm:-left-7">
            ✦ Creative thinking
          </div>
          <div className="floating-tag right-0 bottom-[18%] sm:-right-5">
            ⌘ Clean development
          </div>
        </motion.div>
      </div>
    </section>
  );
}
