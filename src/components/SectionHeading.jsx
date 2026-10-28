import React from "react";
import Reveal from "./Reveal.jsx";
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-12">
      <div className="eyebrow">
        <span className="mini-line" />
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </Reveal>
  );
}
