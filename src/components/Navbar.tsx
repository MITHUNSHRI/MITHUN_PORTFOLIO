import React, { useState, useEffect } from "react";
import { Language } from "../types";
import { Bot, Globe, Menu, X, Sparkles, UserCheck } from "lucide-react";

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenAiAgent: () => void;
  onOpenRecruiterView?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenAiAgent,
  onOpenRecruiterView,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EDUCATION", href: "#education" },
    { name: "CERTIFICATIONS", href: "#certifications" },
    { name: "ACHIEVEMENTS", href: "#achievements" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/70 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          : "bg-[#0f172a]/40 backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name & Floating Badge */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-violet-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-sm sm:text-base text-slate-100 group-hover:text-sky-300 transition-colors">
              MITHUN SHRI K M
            </span>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
              <div className="indicator" />
              <span>Active • AI Agent Online</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Utility Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Selector Pill */}
          <div className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 flex items-center gap-2 text-[10px] font-medium font-mono">
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            {(["en", "ta", "hi"] as Language[]).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="opacity-40 text-slate-500">|</span>}
                <button
                  onClick={() => onSelectLang(lang)}
                  className={`uppercase transition-colors ${
                    currentLang === lang
                      ? "text-sky-400 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {lang === "en" ? "EN" : lang === "ta" ? "தமிழ்" : "हिंदी"}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Recruiter View Shortcut */}
          {onOpenRecruiterView && (
            <button
              onClick={onOpenRecruiterView}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/50 text-slate-300 hover:text-violet-300 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-all shadow-md"
            >
              <UserCheck className="w-3.5 h-3.5 text-violet-400" />
              RECRUITER
            </button>
          )}

          {/* AI Agent CTA */}
          <button
            onClick={onOpenAiAgent}
            className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 rounded-full text-[11px] font-bold shadow-lg shadow-sky-500/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Bot className="w-4 h-4" />
            ASK MITHUN AI
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenAiAgent}
            className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300"
            title="Ask Mithun AI"
          >
            <Bot className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-300 z-50">
          <nav className="flex flex-col gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-600">→</span>
              </a>
            ))}
          </nav>

          {/* Mobile Language Selector */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <span className="text-xs font-mono text-slate-400">Language:</span>
            <div className="flex gap-1.5 font-mono text-xs">
              {(["en", "ta", "hi"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onSelectLang(lang);
                  }}
                  className={`px-3 py-1.5 rounded-lg border uppercase ${
                    currentLang === lang
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  {lang === "en" ? "English" : lang === "ta" ? "தமிழ்" : "हिंदी"}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            {onOpenRecruiterView && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiterView();
                }}
                className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-mono text-xs flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-purple-400" />
                Recruiter Quick View
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAgent();
              }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              Ask AI Agent
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
