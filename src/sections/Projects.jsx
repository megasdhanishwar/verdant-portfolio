import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/content.js";
export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-main">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title={
            <>
              Projects with <span className="gradient-text">purpose.</span>
            </>
          }
          description="A selection of concepts and interfaces I've enjoyed building."
        />
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <article className="project-card">
                <div
                  className={"project-visual bg-gradient-to-br " + p.gradient}
                >
                  <div className="project-visual-grid" />
                  <span className="project-symbol">{p.symbol}</span>
                  <span className="project-visual-label">
                    {p.id} / FEATURED PROJECT
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-xs tracking-[.18em] text-[#a6f18c] uppercase">
                    {p.type}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <span className="rounded-full border border-white/15 p-2 text-[#a6f18c]">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#91a79a]">
                    {p.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {/* <p className="mt-6 text-sm text-[#81988b]">
          Project previews are illustrative. Add your live demo and repository
          URLs in <code>src/data/content.js</code> when available.
        </p> */}
      </div>
    </section>
  );
}
