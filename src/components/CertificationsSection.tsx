import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { TiltCard3D } from "./3d/TiltCard3D";
import { Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  const certs = RESUME_DATA.certifications;

  const glowColors: Array<"cyan" | "purple" | "blue" | "emerald"> = [
    "cyan",
    "purple",
    "blue",
    "emerald",
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Verified certifications from NPTEL, GUVI, HackerRank, and national-level GATE 2026 examination preparation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <TiltCard3D key={cert.id} glowColor={glowColors[index % 4]} className="p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
                    {cert.badgeText}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-950 text-slate-400">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-purple-400 mb-4">
                  {cert.issuer}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  Key Knowledge Areas Verified:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
};
