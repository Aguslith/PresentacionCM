import React from "react";
import { motion, type Variants } from "framer-motion";
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

  // Hardware-accelerated motion variants with explicit Framer Motion typing
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.25, 1, 0.35, 1],
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.04,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.25, 1, 0.35, 1],
        duration: 0.25,
      },
    },
  };

  return (
    <section
      id={`slide-${id}`}
      className={`slide-section w-full h-full min-h-[100dvh] max-h-[100dvh] flex flex-col justify-between p-3 sm:p-6 md:p-8 lg:p-10 pt-4 sm:pt-6 md:pt-8 pb-3 sm:pb-5 relative select-none overflow-hidden transition-colors duration-500 ${getThemeClasses()}`}
    >
      {/* Background Technical Grid & Framed Threads */}
      <ThreadFrameBackground isNavy={isNavy} isBlackAndWhite={isBlackAndWhite} />

      {/* Top Header - Ultra Clean & Minimal */}
      <div className="flex justify-between items-center text-xs font-mono uppercase z-10 opacity-90 px-1 shrink-0">
        <div className="flex items-center space-x-2">
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
        viewport={{ once: false, amount: 0.1 }}
        className="flex-grow flex flex-col justify-center max-w-6xl mx-auto w-full z-10 my-auto overflow-hidden"
      >
        {/* Slide Title */}
        <motion.h2
          variants={titleVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-technical mb-2 sm:mb-4 md:mb-5 flex items-center leading-tight shrink-0"
        >
          <span
            className={`inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 mr-2 sm:mr-3 rounded-full shrink-0 transition-colors duration-300 ${getBulletColor()}`}
          />
          <span className="truncate">{title}</span>
        </motion.h2>

        {/* Inner Content Area */}
        <div className="flex-grow py-0.5 flex flex-col justify-center overflow-y-auto no-scrollbar max-h-[calc(100dvh-100px)]">
          {children}
        </div>
      </motion.div>

      {/* Bottom Footer Spacing */}
      <div className="z-10 h-1 shrink-0" />
    </section>
  );
};
