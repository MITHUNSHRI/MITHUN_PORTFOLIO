import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { TiltCard3D } from "./3d/TiltCard3D";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

export const EducationSection: React.FC = () => {
  const edu = RESUME_DATA.education;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Formal Computer Science & Engineering degree coursework combined with strong academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Floating University Card */}
          <div className="lg:col-span-8">
            <TiltCard3D glowColor="purple" className="p-8">
              
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                    UNDERGRADUATE DEGREE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                    {edu.institution}
                  </h3>
                  <p className="text-slate-300 font-semibold font-sans mt-1">
                    {edu.degree}
                  </p>
                  <p className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {edu.location}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">CUMULATIVE CGPA</div>
                  <div className="text-2xl font-extrabold text-cyan-300 font-mono">7.9 / 10</div>
                </div>
              </div>

              {/* Education Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans mb-6">
                
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Expected Completion</div>
                    <div className="font-bold text-slate-200">{edu.expected}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Core Specialization</div>
                    <div className="font-bold text-slate-200">Computer Science & Engg</div>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                Coursework focus: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming in Java & Python, Operating Systems, Computer Networks, Software Engineering & Web Architecture.
              </div>

            </TiltCard3D>
          </div>

          {/* Secondary Class XII Card */}
          <div className="lg:col-span-4">
            <TiltCard3D glowColor="cyan" className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                  CLASS XII SCHOOLING
                </div>

                <h4 className="text-xl font-bold text-white mb-1">
                  {edu.school}
                </h4>
                <p className="text-xs font-mono text-slate-400 mb-6">
                  {edu.board} ({edu.year})
                </p>

                <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-cyan-950/30 border border-slate-800 text-center mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                    AGGREGATE PERCENTAGE
                  </div>
                  <div className="text-4xl font-extrabold text-cyan-300 font-mono">
                    {edu.percentage}
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-500 text-center pt-4 border-t border-slate-800/80">
                Completed with distinction in Mathematics & Computer Science
              </div>
            </TiltCard3D>
          </div>

        </div>
      </div>
    </section>
  );
};
