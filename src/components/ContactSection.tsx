import React, { useState } from "react";
import { RESUME_DATA } from "../data/resumeData";
import { TiltCard3D } from "./3d/TiltCard3D";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  const p = RESUME_DATA.personal;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(p.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>CONNECT WITH MITHUN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Ready for software development, Java engineering, full stack, or AI/ML roles. Reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <TiltCard3D glowColor="cyan" className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-slate-400 uppercase">EMAIL ADDRESS</div>
                  <a
                    href={`mailto:${p.email}`}
                    className="text-slate-100 hover:text-cyan-300 font-semibold text-sm sm:text-base font-mono truncate block mt-0.5"
                  >
                    {p.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                    <span>{copiedEmail ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
                  </button>
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D glowColor="purple" className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">PHONE NUMBER</div>
                  <a
                    href={`tel:${p.phone}`}
                    className="text-slate-100 hover:text-purple-300 font-semibold text-sm sm:text-base font-mono block mt-0.5"
                  >
                    {p.phone}
                  </a>
                  <div className="text-xs text-slate-500 mt-1 font-mono">
                    Call / WhatsApp Available
                  </div>
                </div>
              </div>
            </TiltCard3D>

            <TiltCard3D glowColor="blue" className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">LOCATION</div>
                  <div className="text-slate-100 font-semibold text-sm sm:text-base font-sans mt-0.5">
                    {p.location}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">
                    Open for onsite, hybrid, and remote positions
                  </div>
                </div>
              </div>
            </TiltCard3D>

            {/* External Links Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GITHUB</span>
              </a>

              <a
                href={p.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500/50 text-slate-200 hover:text-purple-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LINKEDIN</span>
              </a>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <TiltCard3D glowColor="cyan" className="p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white font-sans">
                  Send Direct Message to Mithun
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Delivered</h4>
                  <p className="text-xs text-slate-400 font-sans max-w-sm mx-auto">
                    Thank you for reaching out! Mithun will review your message and reply via email promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Technical Recruiter / Hiring Manager"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-slate-100 placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-slate-100 placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      MESSAGE / JOB OPPORTUNITY
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Discuss potential software developer roles, interviews, or project collaboration..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-slate-100 placeholder-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-transform"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE NOW</span>
                  </button>
                </form>
              )}
            </TiltCard3D>
          </div>

        </div>
      </div>
    </section>
  );
};
