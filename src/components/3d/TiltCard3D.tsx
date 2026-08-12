import React, { useState, useRef } from "react";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "blue" | "emerald";
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  className = "",
  glowColor = "cyan",
}) => {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const glowBorderMap = {
    cyan: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
    purple: "hover:border-purple-500/50 hover:shadow-purple-500/20",
    blue: "hover:border-blue-500/50 hover:shadow-blue-500/20",
    emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl bg-[#0f172a]/60 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 ${glowBorderMap[glowColor]} ${className}`}
    >
      {/* Dynamic Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-20"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
          opacity: glare.opacity,
        }}
      />
      {children}
    </div>
  );
};
