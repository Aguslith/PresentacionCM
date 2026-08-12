import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface MockupCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const MockupCard: React.FC<MockupCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(95, 168, 211, 0.15)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse positions normalized from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high performance damping
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  // Translation values for the shadow and light reflection glow
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ["-20%", "20%"]), springConfig);
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ["-20%", "20%"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Map mouse position to range [-0.5, 0.5]
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-xl border border-sky/10 bg-navy/80 p-1 shadow-2xl transition-shadow duration-300 hover:shadow-sky/5 ${className}`}
    >
      {/* Glare effect overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-color-dodge transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 250px at calc(50% + ${glowX}) calc(50% + ${glowY}), ${glowColor}, transparent)`,
        }}
      />
      
      {/* Child Container preserving 3D space */}
      <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
