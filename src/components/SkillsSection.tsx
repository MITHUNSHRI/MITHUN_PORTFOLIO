import React from "react";
import { SkillUniverse3D } from "./3d/SkillUniverse3D";
import { Cpu } from "lucide-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 font-mono text-xs uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE SKILL UNIVERSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Stack & Core Concepts
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Explore Mithun's verified technical competencies spanning Programming, AI/ML engineering, Full Stack web, and cloud automation tools.
          </p>
        </div>

        {/* 3D Skill Universe Filter & Nodes */}
        <SkillUniverse3D />

      </div>
    </section>
  );
};
