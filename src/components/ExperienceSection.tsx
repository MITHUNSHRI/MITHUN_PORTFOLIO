import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { TiltCard3D } from "./3d/TiltCard3D";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Zap, ShieldCheck } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const internships = RESUME_DATA.experience;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>3D CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry Internships & Work Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Hands-on engineering contributions across AI workflow automation, full-stack application development, Agile sprint reviews, and web application security.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-12 space-y-12">
          
          {internships.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Glowing Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
                {index === 0 ? <Zap className="w-4 h-4 text-cyan-400" /> : <ShieldCheck className="w-4 h-4 text-purple-400" />}
              </div>

              {/* Floating Glass Experience Card */}
              <TiltCard3D glowColor={index === 0 ? "cyan" : "purple"} className="p-6 sm:p-8">
                
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider border border-cyan-500/30">
                        {exp.type}
                      </span>
                      {exp.location && (
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-extrabold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                      {exp.company}
                    </h3>
                    <div className="text-base font-semibold text-slate-300 font-sans">
                      {exp.role}
                    </div>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-xs flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Responsibilities List */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Responsibilities & Deliverables:
                  </div>
                  <ul className="space-y-2.5 font-sans text-sm text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights Badges */}
                {exp.highlights && (
                  <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-wider flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      Key Achievement Highlights:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-mono">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono text-xs flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3 text-cyan-400" />
                      {tech}
                    </span>
                  ))}
                </div>

              </TiltCard3D>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
