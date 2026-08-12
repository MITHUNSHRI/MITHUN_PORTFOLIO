import React from "react";
import { Bot, Sparkles } from "lucide-react";

interface FloatingAiWidgetProps {
  onOpen: () => void;
}

export const FloatingAiWidget: React.FC<FloatingAiWidgetProps> = ({ onOpen }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onOpen}
        className="group relative px-5 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold font-mono text-xs uppercase tracking-wider flex items-center gap-2.5 ai-glow hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
      >
        {/* Pulsing Status Dot */}
        <div className="indicator" />

        <Bot className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">ASK MITHUN AI</span>
        <span className="sm:hidden">AI AGENT</span>

        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full bg-violet-400/20 blur-md group-hover:blur-lg transition-all pointer-events-none -z-10" />
      </button>
    </div>
  );
};
