import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const p = RESUME_DATA.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0f172a]/60 backdrop-blur-md py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-sm font-extrabold text-white tracking-wider font-sans">
            {p.name}
          </div>
          <div className="text-sky-400 text-xs font-mono flex items-center gap-1.5">
            <div className="indicator" />
            <span>Building with Code • AI • Curiosity</span>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
          <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
          <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </div>

        {/* Right Copyright & Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-slate-500 text-[11px]">
            © 2026 Mithun Shri K M
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
