import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { TiltCard3D } from "./3d/TiltCard3D";
import { UserCheck, FileText, Download, CheckCircle, Mail, Phone, MapPin, Briefcase, GraduationCap, Cpu } from "lucide-react";

interface RecruiterQuickViewProps {
  onOpenResumeModal: () => void;
  onOpenAiAgent: () => void;
}

export const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({
  onOpenResumeModal,
  onOpenAiAgent,
}) => {
  const p = RESUME_DATA.personal;

  return (
    <section id="recruiter" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <UserCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>EXECUTIVE SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Recruiter Quick View
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            High-density candidate summary designed for HR managers, engineering directors, and talent acquisition teams.
          </p>
        </div>

        {/* High Density Executive Card */}
        <div className="max-w-4xl mx-auto">
          <TiltCard3D glowColor="cyan" className="p-8 sm:p-10">
            
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
                  VERIFIED CANDIDATE DOSSIER
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-2">
                  {p.name}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-0.5">
                  {p.title}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenResumeModal}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW / DOWNLOAD RESUME</span>
                </button>

                <button
                  onClick={onOpenAiAgent}
                  className="px-5 py-3 rounded-xl bg-slate-950 border border-purple-500/50 hover:border-purple-400 text-purple-300 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-900 transition-all"
                >
                  <UserCheck className="w-4 h-4 text-purple-400" />
                  <span>INTERVIEW AI AGENT</span>
                </button>
              </div>
            </div>

            {/* Structured Recruiter Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-500 uppercase">DEGREE & COLLEGE</div>
                <div className="font-bold text-slate-200 text-sm mt-1">B.E. CSE</div>
                <div className="text-xs text-slate-400 mt-0.5">Sri Ramakrishna Inst.</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-500 uppercase">CUMULATIVE CGPA</div>
                <div className="font-extrabold text-cyan-300 text-lg mt-1 font-mono">7.9 / 10</div>
                <div className="text-xs text-slate-400 mt-0.5">Graduation: May 2027</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-500 uppercase">INDUSTRY EXPERIENCE</div>
                <div className="font-bold text-purple-300 text-sm mt-1">2 Internships</div>
                <div className="text-xs text-slate-400 mt-0.5">Yellow Networks & IO Solutions</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-500 uppercase">LOCATION</div>
                <div className="font-bold text-slate-200 text-sm mt-1">Coimbatore, TN</div>
                <div className="text-xs text-slate-400 mt-0.5">Open to Relocation</div>
              </div>

            </div>

            {/* Technical Toolkit & Target Roles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 mb-8">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  Primary Technologies:
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {["Java", "Python", "SQL", "JavaScript", "LangChain", "FAISS", "Hugging Face", "n8n", "REST APIs", "Git"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  Target Placement Roles:
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {p.targetRoles.map((role) => (
                    <span key={role} className="px-2.5 py-1 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-200">
                      ✓ {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Quick Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <a href={`mailto:${p.email}`} className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {p.email}
                </a>
                <a href={`tel:${p.phone}`} className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {p.phone}
                </a>
              </div>

              <div className="text-slate-500">
                Verified from official resume data
              </div>
            </div>

          </TiltCard3D>
        </div>

      </div>
    </section>
  );
};
