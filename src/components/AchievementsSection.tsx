import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { TiltCard3D } from "./3d/TiltCard3D";
import { Trophy, Medal, Users, Shield, Award } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const achs = RESUME_DATA.achievements;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>LEADERSHIP & SPORTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Demonstrated team leadership, resilience, strategy, and sportsmanship outside academics.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {achs.map((ach) => (
            <TiltCard3D key={ach.id} glowColor="purple" className="p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                
                {/* Sports 3D Trophy Visual Badge */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 via-purple-600 to-cyan-500 p-0.5 shadow-2xl shadow-amber-500/20">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
                      <Trophy className="w-10 h-10 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-slate-900 border border-amber-500/50 text-amber-300">
                    <Medal className="w-4 h-4" />
                  </div>
                </div>

                {/* Achievement Details */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                      {ach.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      {ach.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white tracking-wide">
                    {ach.title}
                  </h3>

                  <div className="text-sm font-semibold text-purple-300 font-sans">
                    {ach.organization}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {ach.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                    <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                      ✓ Team Strategy
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                      ✓ Athletic Endurance
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                      ✓ Zone Level Competition
                    </span>
                  </div>
                </div>

              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};
