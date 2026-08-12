import React, { useState } from "react";
import { RESUME_DATA } from "../data/resumeData";
import { Project } from "../types";
import { TiltCard3D } from "./3d/TiltCard3D";
import { FolderGit2, ArrowRight, X, ExternalLink, Cpu, CheckCircle, ShieldCheck, Zap, Layers } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = RESUME_DATA.projects;

  const categoryGlow: Record<string, "cyan" | "purple" | "emerald"> = {
    "AI/ML": "cyan",
    Automation: "purple",
    "Cybersecurity & Full Stack": "emerald",
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
            <span>INTERACTIVE PROJECT GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Interactive breakdown of Mithun's software projects, complete with architecture pipelines, workflow triggers, and security mechanisms.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <TiltCard3D
              key={project.id}
              glowColor={categoryGlow[project.category] || "cyan"}
              className="p-6 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider border border-slate-800">
                    {project.category}
                  </span>
                  {project.eventOrContext && (
                    <span className="text-[11px] font-mono text-purple-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      {project.eventOrContext}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Pipeline / Workflow Preview Diagram */}
                {project.pipelineOrWorkflow && (
                  <div className="mb-6 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1">
                      <Layers className="w-3 h-3 text-cyan-400" />
                      Architecture Pipeline:
                    </div>
                    <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-cyan-300">
                      {project.pipelineOrWorkflow.map((step, idx) => (
                        <React.Fragment key={step.step}>
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                            {step.step}
                          </span>
                          {idx < project.pipelineOrWorkflow!.length - 1 && (
                            <span className="text-slate-600">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono text-[11px] border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand Modal Trigger Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <span>INSPECT PROJECT DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 glass-panel border border-sky-500/40 shadow-2xl text-slate-100 font-sans">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold uppercase">
                  {selectedProject.category}
                </span>
                {selectedProject.eventOrContext && (
                  <span className="text-xs font-mono text-purple-300">
                    • {selectedProject.eventOrContext}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                {selectedProject.description}
              </p>

              {/* Pipeline Step-by-Step Breakdown */}
              {selectedProject.pipelineOrWorkflow && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    Detailed Execution Pipeline:
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.pipelineOrWorkflow.map((step, idx) => (
                      <div
                        key={step.step}
                        className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200 font-mono">
                            {step.step}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  Key Technical Features:
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-950 text-cyan-300 border border-slate-800 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  CLOSE INSPECTION
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c0 4.5-3.5 8-8 8 4.5 0 8 3.5 8 8 0-4.5 3.5-8 8-8-4.5 0-8-3.5-8-8z" />
    </svg>
  );
}
