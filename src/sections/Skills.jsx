import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { skills } from "../data/content.js";
export default function Skills() {
  return (
    <section id="skills" className="section-pad section-tint">
      <div className="container-main">
        <SectionHeading
          eyebrow="02 / EXPERTISE"
          title={
            <>
              My creative <span className="gradient-text">toolkit.</span>
            </>
          }
          description="Technologies and practices I use to bring great ideas to life."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.category} delay={i * 0.08}>
              <div className="skill-card">
                <div className="mb-8 flex items-center justify-between">
                  <span className="skill-number">0{i + 1}</span>
                  <ArrowUpRight className="text-[#a6f18c]/70" size={20} />
                </div>
                <h3 className="mb-6 text-2xl font-bold">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
