import React from "react";
import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-main flex flex-col items-center justify-between gap-5 py-8 text-center text-sm text-[#80978a] sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Megasdhanishwar. Crafted with React & a
          little magic.
        </p>
        <a
          href="#home"
          className="flex items-center gap-2 text-[#c4efbc] hover:text-white"
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
