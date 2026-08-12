import React from "react";
import { motion } from "framer-motion";
import { TOKENS } from "../tokens";
import { UserCheck } from "lucide-react";

interface SlideShellProps {
  id: string;
  n: number;
  title: string;
  kind: string;
  bgType?: "navy" | "off";
  speaker?: 1 | 2;
  timeRange?: string;
  children: React.ReactNode;
}

export const SlideShell: React.FC<SlideShellProps> = ({
  id,
  n,
  title,
  kind,
  bgType,
  speaker,
  timeRange,
  children,
}) => {
  // Alternate background if not explicitly provided
  const isNavy = bgType ? bgType === "navy" : n % 2 !== 0;
  const currentSpeaker = speaker ?? (n <= 14 ? 1 : 2);
  const currentSpeakerRole = currentSpeaker === 1 ? "Branding & Identidad" : "Social Media & CM";

  // Grid background style dynamically set for optimal contrast
  const gridStyle = isNavy
    ? {
        backgroundImage:
          "linear-gradient(to right, rgba(95, 168, 211, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(95, 168, 211, 0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }
    : {
        backgroundImage:
          "linear-gradient(to right, rgba(13, 29, 52, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(13, 29, 52, 0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      };

  // Motion variants matching TOKENS.motion
  const containerVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: TOKENS.motion.ease,
        duration: TOKENS.motion.duration,
        when: "beforeChildren",
        staggerChildren: TOKENS.motion.stagger,
      },
    },
  };

  const titleVariants = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      transition: {
        ease: TOKENS.motion.ease,
        duration: 1.0,
      },
    },
  };

  return (
    <section
      id={`slide-${id}`}
      className={`slide-section w-screen h-screen flex-shrink-0 flex flex-col justify-between p-6 md:p-12 pt-5 md:pt-7 relative select-none overflow-hidden ${
        isNavy ? "bg-navy text-off" : "bg-off text-navy"
      }`}
    >
      {/* Background Technical Grid */}
      <div className="absolute inset-0 pointer-events-none" style={gridStyle} />

      {/* Decorative SVG background thread vector that weaves across the slide bounds */}
      <div className="absolute top-[20%] right-[-10%] w-[120%] h-[60%] pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none">
          <path
            d="M-100,300 C300,100 500,500 800,200 C1100,-100 1300,400 1600,250"
            className={isNavy ? "stroke-sky/20" : "stroke-blue/20"}
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      {/* Top Header Label */}
      <div className="flex justify-between items-center text-[10px] tracking-[0.15em] font-mono uppercase z-10 opacity-75">
        <span className="flex items-center space-x-2">
          <img src="/logotipo.png" alt="ALPACLADD" className="w-3.5 h-3.5 object-contain inline-block shrink-0" />
          <span>ALPACLADD // {kind.toUpperCase()}</span>
        </span>

        {/* Current Speaker Pill Indicator */}
        <div className={`hidden sm:flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-mono font-semibold ${
          currentSpeaker === 1
            ? "border-sky/40 bg-sky/10 text-sky"
            : "border-blue/40 bg-blue/10 text-blue"
        }`}>
          <UserCheck className="w-3 h-3" />
          <span>Orador {currentSpeaker}: {currentSpeakerRole}</span>
          {timeRange && <span className="opacity-60 font-normal">({timeRange})</span>}
        </div>

        <span className="font-bold font-mono">
          SEC. {String(n).padStart(2, "0")} / 24
        </span>
      </div>

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex-grow flex flex-col justify-center max-w-6xl mx-auto w-full z-10 my-2"
      >
        {/* Slide Title */}
        <motion.h2
          variants={titleVariants}
          className="text-2xl md:text-4xl font-bold uppercase tracking-technical mb-4 md:mb-6 flex items-center leading-none"
        >
          <span className={`inline-block w-2.5 h-2.5 mr-3 rounded-full ${
            isNavy ? "bg-sky" : "bg-blue"
          }`} />
          {title}
        </motion.h2>

        {/* Slide Content */}
        <div className="flex-grow py-1 flex flex-col justify-center overflow-y-auto md:overflow-visible no-scrollbar">
          {children}
        </div>
      </motion.div>

      {/* Bottom Footer Label */}
      <div className="flex justify-between items-center text-[9px] tracking-widest opacity-50 font-mono uppercase z-10 border-t border-sky/10 pt-2">
        <span>ESTRATEGIA DIGITAL DE MARCA — PRESENTACIÓN 10 MIN</span>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">2 ORADORES (5:00 MIN C/U)</span>
          <span>DESLIZA PARA CONTINUAR →</span>
        </div>
      </div>
    </section>
  );
};
