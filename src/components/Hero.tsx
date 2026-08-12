import React from "react";
import { DeveloperCore3D } from "./3d/DeveloperCore3D";
import { RESUME_DATA } from "../data/resumeData";
import { Bot, ArrowRight, Sparkles, ShieldCheck, Cpu, Code2, GraduationCap } from "lucide-react";

interface HeroProps {
  onOpenAiAgent: () => void;
  onOpenRecruiterView?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiAgent, onOpenRecruiterView }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs shadow-lg backdrop-blur-md">
              <div className="indicator" />
              <span className="font-semibold tracking-wider">AI-POWERED PORTFOLIO</span>
              <span className="text-slate-600">|</span>
              <span className="text-violet-300">CGPA 7.9 / 10</span>
            </div>

            {/* Candidate Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                {RESUME_DATA.personal.name}
              </h1>
              <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent font-sans">
                Computer Science Engineer | Full Stack Developer | AI/ML Enthusiast
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Final-year B.E. Computer Science Engineering student with hands-on experience in full-stack development, SQL, AI-powered chatbots, workflow automation, and secure application development.
            </p>

            {/* Quick Resume Highlight Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-mono flex items-center gap-1.5 backdrop-blur-sm">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                Sri Ramakrishna Inst. of Tech
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-mono flex items-center gap-1.5 backdrop-blur-sm">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                Yellow Networks Intern
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-mono flex items-center gap-1.5 backdrop-blur-sm">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                IO Solutions Intern
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-mono flex items-center gap-1.5 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ISREL Hackathon Prototype
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#about"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 hover:scale-105 transition-all group"
              >
                <span>EXPLORE MY PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenAiAgent}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/50 text-sky-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all shadow-lg"
              >
                <Bot className="w-4 h-4 text-violet-400 animate-pulse" />
                <span>ASK MY AI AGENT</span>
              </button>
            </div>

            {/* Target Role Tags */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Target Roles:</span>
              <span className="text-cyan-400">Software Dev • Java Dev • Full Stack Dev • AI/ML Intern</span>
            </div>
          </div>

          {/* Right 3D Developer Core Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[420px]">
              <DeveloperCore3D />
              
              {/* Floating Holographic Info Overlay Card */}
              <div className="absolute -bottom-4 -left-2 sm:left-4 right-4 sm:right-auto p-4 rounded-2xl glass-card flex items-center gap-3 font-mono text-xs z-20">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold">Mithun's Interactive Core</div>
                  <div className="text-slate-400 text-[11px]">Hover or rotate 3D nodes & orbit</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
