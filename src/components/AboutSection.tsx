import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { TiltCard3D } from "./3d/TiltCard3D";
import { MapPin, GraduationCap, Award, Briefcase, Target, ShieldCheck, Cpu, Database } from "lucide-react";

export const AboutSection: React.FC = () => {
  const p = RESUME_DATA.personal;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Floating Interactive Profile
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Final-year Computer Science Engineer specializing in full-stack web applications, AI automation workflows, secure SQL practices, and RAG architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main 3D Floating Profile Card */}
          <div className="lg:col-span-7 flex flex-col">
            <TiltCard3D glowColor="cyan" className="p-8 h-full flex flex-col justify-between">
              
              <div>
                {/* Header Profile Title */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                      {p.name}
                    </h3>
                    <p className="text-cyan-400 font-mono text-xs mt-1">
                      Final-year B.E. Computer Science Engineering Student
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-sm font-bold flex flex-col items-end">
                    <span className="text-[10px] text-slate-400 uppercase">CGPA SCORE</span>
                    <span>7.9 / 10</span>
                  </div>
                </div>

                {/* Key Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm font-sans">
                  
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Expected Graduation</div>
                      <div className="font-semibold text-slate-200">{p.expectedGraduation}</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Location</div>
                      <div className="font-semibold text-slate-200">{p.location}</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Class XII Result</div>
                      <div className="font-semibold text-slate-200">{p.class12} ({p.class12Year})</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Internships Completed</div>
                      <div className="font-semibold text-slate-200">2 Industry Internships</div>
                    </div>
                  </div>

                </div>

                {/* Target Roles Section */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                    <Target className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Target Professional Roles:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.targetRoles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 font-mono text-xs font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 text-sm leading-relaxed font-sans">
                  "{p.summary}"
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Full-Time Roles & Internships
                </span>
                <span className="text-slate-500">Coimbatore, TN</span>
              </div>

            </TiltCard3D>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <TiltCard3D glowColor="purple" className="p-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">AI & RAG Chatbot Development</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Hands-on experience deploying Retrieval-Augmented Generation (RAG) pipelines using Python, LangChain, FAISS vector embeddings, Hugging Face SentenceTransformers, and Qwen LLM.
                  </p>
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D glowColor="emerald" className="p-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Secure SQL & Vulnerability Defense</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    HackerRank SQL certified. Practical internship experience constructing parameterized queries and server-side validation to defeat SQL injection cyber attacks.
                  </p>
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D glowColor="blue" className="p-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Full-Stack & Workflow Automation</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Proficient in Java, JavaScript, Python, HTML/CSS, n8n workflow triggers, REST API integration, and Agile sprint review collaboration at Yellow Networks.
                  </p>
                </div>
              </div>
            </TiltCard3D>

          </div>

        </div>
      </div>
    </section>
  );
};
