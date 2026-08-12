import React, { useState } from "react";
import { RESUME_DATA } from "../../data/resumeData";
import { Sparkles, Terminal, Cpu, Globe, Wrench, BookOpen, X, Info } from "lucide-react";

export const SkillUniverse3D: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    description: string;
  } | null>(null);

  const skillCategories = RESUME_DATA.skills;

  const categoryIcons: Record<string, React.ReactNode> = {
    PROGRAMMING: <Terminal className="w-4 h-4 text-cyan-400" />,
    "AI & ML": <Cpu className="w-4 h-4 text-purple-400" />,
    "WEB DEVELOPMENT": <Globe className="w-4 h-4 text-blue-400" />,
    "TOOLS & CLOUD": <Wrench className="w-4 h-4 text-emerald-400" />,
    "CORE CONCEPTS": <BookOpen className="w-4 h-4 text-amber-400" />,
  };

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="relative w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 border ${
            activeCategory === "all"
              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-lg shadow-cyan-500/20"
              : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          ALL UNIVERSE ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
        </button>

        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 border ${
              activeCategory === cat.id
                ? "bg-purple-500/20 text-purple-300 border-purple-400/50 shadow-lg shadow-purple-500/20"
                : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            {categoryIcons[cat.category]}
            {cat.category}
          </button>
        ))}
      </div>

      {/* Floating 3D Skill Node Universe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((catGroup, groupIdx) => (
          <div
            key={catGroup.id}
            className="relative p-6 glass-panel hover:border-sky-400/30 transition-all duration-500 group"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {categoryIcons[catGroup.category]}
                </div>
                <h3 className="text-sm font-bold tracking-wider text-slate-100 uppercase">
                  {catGroup.category}
                </h3>
              </div>
              <span className="text-[11px] px-3 py-0.5 rounded-full bg-sky-500/10 text-sky-300 font-mono border border-sky-500/20">
                {catGroup.skills.length} Nodes
              </span>
            </div>

            {/* Floating Skill Node Badges */}
            <div className="flex flex-wrap gap-2.5">
              {catGroup.skills.map((skill, idx) => (
                <button
                  key={skill.name}
                  onClick={() =>
                    setSelectedSkill({
                      name: skill.name,
                      category: catGroup.category,
                      description: skill.description,
                    })
                  }
                  className="skill-node hover:scale-105 cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>{skill.name}</span>
                  <Info className="w-3 h-3 text-sky-400/70" />
                </button>
              ))}
            </div>

            {/* Glowing Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/5 rounded-bl-full pointer-events-none group-hover:bg-sky-500/10 transition-colors" />
          </div>
        ))}
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 glass-panel border border-sky-500/40 shadow-2xl text-slate-100">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                {categoryIcons[selectedSkill.category] || <Sparkles className="w-5 h-5" />}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-violet-400">
                  {selectedSkill.category}
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {selectedSkill.name}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 text-sm text-slate-300 leading-relaxed font-sans mb-5">
              {selectedSkill.description}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider transition-opacity"
              >
                CLOSE INSPECTION
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
