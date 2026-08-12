import React from "react";
import { motion } from "framer-motion";
import { TOKENS } from "../tokens";
import { useTheme } from "../context/ThemeContext";
import { ThreadFrameBackground } from "./ThreadFrameBackground";

interface SlideShellProps {
  id: string;
  n: number;
  title: string;
  kind?: string;
  bgType?: "navy" | "off";
  speaker?: 1 | 2;
  timeRange?: string;
  children: React.ReactNode;
}

export const SlideShell: React.FC<SlideShellProps> = ({
  id,
  n,
  title,
  bgType,
  children,
}) => {
  const { isBlackAndWhite } = useTheme();

  // Color mode resolution
  const isNavy = bgType ? bgType === "navy" : n % 2 !== 0;

  // Background and Text classes depending on theme
  const getThemeClasses = () => {
    if (isBlackAndWhite) {
      return "bg-[#050505] text-[#FAFAFA]";
    }
    return isNavy ? "bg-navy text-off" : "bg-off text-navy";
  };

  const getBulletColor = () => {
    if (isBlackAndWhite) return "bg-white";
    return isNavy ? "bg-sky" : "bg-blue";
  };

  // Motion variants matching TOKENS.motion
  const containerVariants = {
    hidden: { opacity: 0, x: 30 },
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
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id={`slide-${id}`}
      className={`slide-section w-full h-full min-h-[100dvh] max-h-[100dvh] flex flex-col justify-between p-4 sm:p-8 md:p-12 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 relative select-none overflow-hidden transition-colors duration-500 ${getThemeClasses()}`}
    >
      {/* Background Technical Grid & Framed Threads (Limpio, sin textos) */}
      <ThreadFrameBackground isNavy={isNavy} isBlackAndWhite={isBlackAndWhite} />

      {/* Top Header - Ultra Clean & Minimal */}
      <div className="flex justify-between items-center text-xs font-mono uppercase z-10 opacity-90 px-1">
        <div className="flex items-center space-x-2.5">
          <img
            src="/logotipo.png"
            alt="ALPACLADD"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain inline-block shrink-0"
          />
          <span className="font-bold tracking-widest text-[11px] sm:text-xs">ALPACLADD</span>
        </div>
      </div>

      {/* Main Slide Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="flex-grow flex flex-col justify-center max-w-6xl mx-auto w-full z-10 my-auto overflow-hidden"
      >
        {/* Slide Title */}
        <motion.h2
          variants={titleVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-technical mb-3 sm:mb-5 md:mb-6 flex items-center leading-tight shrink-0"
        >
          <span
            className={`inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 mr-2 sm:mr-3 rounded-full shrink-0 transition-colors duration-300 ${getBulletColor()}`}
          />
          <span className="truncate">{title}</span>
        </motion.h2>

        {/* Inner Content Area */}
        <div className="flex-grow py-1 flex flex-col justify-center overflow-y-auto no-scrollbar max-h-[calc(100dvh-120px)]">
          {children}
        </div>
      </motion.div>

      {/* Bottom Footer - Minimal & Clean */}
      <div className="z-10 h-2" />
    </section>
  );
};
