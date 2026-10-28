import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = ["Home", "About", "Skills", "Projects", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#06110e]/85 backdrop-blur-2xl">
      <nav className="container-main flex h-[76px] items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 text-xl font-extrabold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="logo-mark">M</span>MEGASDHANISHWAR
          <span className="text-[#a6f18c]">.</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l} href={"#" + l.toLowerCase()} className="nav-link">
              {l}
            </a>
          ))}
        </div>
        <a
          className="hidden items-center gap-2 rounded-full border border-[#a6f18c]/35 px-5 py-2.5 text-sm font-semibold text-[#b9f7a6] transition hover:bg-[#a6f18c]/10 md:flex"
          href="#contact"
        >
          Let's talk <ArrowUpRight size={16} />
        </a>
        <button
          className="rounded-lg border border-white/15 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-nav md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={"#" + l.toLowerCase()}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
