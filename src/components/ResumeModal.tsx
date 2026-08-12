import React from "react";
import { RESUME_DATA } from "../data/resumeData";
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const p = RESUME_DATA.personal;
  const edu = RESUME_DATA.education;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10 text-slate-100 font-sans">
        
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase">
              OFFICIAL RESUME VIEW
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-xs font-bold uppercase flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="space-y-8 bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 text-slate-200">
          
          {/* Header */}
          <div className="text-center sm:text-left border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              {p.name}
            </h1>
            <p className="text-cyan-400 font-semibold text-sm mt-1">
              {p.title}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {p.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {p.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {p.location}
              </span>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 border-b border-slate-800 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 font-sans">
              {p.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3 font-sans">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-white text-base">
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="text-cyan-300 font-bold">CGPA: {edu.cgpa}</div>
                  <div className="text-slate-500">Expected: {edu.expected}</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Class XII: {edu.school} ({edu.board})</span>
                <span className="font-mono text-purple-300">Percentage: {edu.percentage} ({edu.year})</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-1">
              WORK EXPERIENCE & INTERNSHIPS
            </h2>
            <div className="space-y-6 font-sans">
              {RESUME_DATA.experience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-white text-base">
                        {exp.company}
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono font-semibold">
                        {exp.role} ({exp.type})
                      </p>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-1 text-xs text-slate-300 list-disc pl-4">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-1">
              KEY TECHNICAL PROJECTS
            </h2>
            <div className="space-y-4 font-sans">
              {RESUME_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-purple-300">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-cyan-400 pt-1">
                    Technologies: {proj.techStack.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 border-b border-slate-800 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs font-mono text-slate-300">
                <div><strong className="text-purple-300">Programming:</strong> Java, Python, SQL, JavaScript</div>
                <div><strong className="text-purple-300">AI & ML:</strong> LangChain, FAISS, Sentence-Transformers, RAG</div>
                <div><strong className="text-purple-300">Web Dev:</strong> Full-Stack, HTML/CSS, Backend Logic</div>
                <div><strong className="text-purple-300">Tools:</strong> Git, GitHub, n8n, Cloud Computing</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 border-b border-slate-800 pb-1">
                CERTIFICATIONS & ACHIEVEMENTS
              </h2>
              <ul className="space-y-1 text-xs text-slate-300 font-sans">
                <li>• Cloud Computing (NPTEL Certified)</li>
                <li>• Java Programming (GUVI Certified Professional)</li>
                <li>• SQL (HackerRank Certified)</li>
                <li>• GATE 2026 Preparedness</li>
                <li>• Captain & Zone Runner-Up (College Kho-Kho Team)</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
