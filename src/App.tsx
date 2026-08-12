import React, { useState } from "react";
import { Language } from "./types";
import { ParticleBackground } from "./components/3d/ParticleBackground";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { RecruiterQuickView } from "./components/RecruiterQuickView";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AiAgentModal } from "./components/ai/AiAgentModal";
import { FloatingAiWidget } from "./components/ai/FloatingAiWidget";
import { ResumeModal } from "./components/ResumeModal";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenAiAgent = () => {
    setAiModalOpen(true);
  };

  const handleOpenRecruiterView = () => {
    const element = document.getElementById("recruiter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Mesh Radial Gradient Background */}
      <div className="mesh-bg" />

      {/* WebGL Animated Interactive Particle Background */}
      <ParticleBackground />

      {/* Top Scroll Progress Indicator Bar */}
      <ScrollProgress />

      {/* Futuristic Navigation Bar */}
      <Navbar
        currentLang={language}
        onSelectLang={(lang) => setLanguage(lang)}
        onOpenAiAgent={handleOpenAiAgent}
        onOpenRecruiterView={handleOpenRecruiterView}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero
          onOpenAiAgent={handleOpenAiAgent}
          onOpenRecruiterView={handleOpenRecruiterView}
        />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectsSection />

        <EducationSection />

        <CertificationsSection />

        <AchievementsSection />

        <RecruiterQuickView
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenAiAgent={handleOpenAiAgent}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      <AiAgentModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        initialLang={language}
      />

      {/* Floating AI Button Widget */}
      <FloatingAiWidget onOpen={handleOpenAiAgent} />

      {/* Printable Official Resume View Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Back To Top Floating Action */}
      <BackToTop />
    </div>
  );
}
