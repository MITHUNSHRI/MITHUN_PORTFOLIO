import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 shadow-xl backdrop-blur-md hover:scale-110 transition-all duration-300"
      title="Scroll Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
