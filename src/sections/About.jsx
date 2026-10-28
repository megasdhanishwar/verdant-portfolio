import React from "react";
import { Code2, Palette, Zap } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
const values = [
  {
    icon: Code2,
    title: "Clean code",
    desc: "Maintainable, reusable components built with care.",
  },
  {
    icon: Palette,
    title: "Thoughtful design",
    desc: "Beautiful interfaces that are intuitive to use.",
  },
  {
    icon: Zap,
    title: "Fast experiences",
    desc: "Responsive, accessible, performance-minded websites.",
  },
];
export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-main">
        <SectionHeading
          eyebrow="01 / ABOUT ME"
          title={
            <>
              More than just <span className="gradient-text">code.</span>
            </>
          }
          description="A little about the person behind the pixels."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="about-panel">
              <span className="text-xs tracking-[.3em] text-[#a6f18c]">
                MY PHILOSOPHY
              </span>
              <div className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Design with purpose.
                <br />
                <span className="text-[#a6f18c]">Develop with passion.</span>
              </div>
              <div className="about-panel-glow" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-9 text-[#b0c3b8]">
              I'm a frontend developer passionate about turning ideas into
              meaningful, polished web experiences. I enjoy combining visual
              design with modern React development to build interfaces that feel
              effortless.
            </p>
            <p className="mt-5 leading-8 text-[#81988b]">
              From dashboard interfaces to engaging landing pages, I focus on
              the details that make a product feel complete responsiveness,
              usability, performance and subtle motion.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="value-card">
                  <v.icon size={22} className="text-[#a6f18c]" />
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#8ba296]">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
