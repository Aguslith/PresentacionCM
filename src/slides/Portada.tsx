import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SlideShell } from "../components/SlideShell";
import { BrandLogo } from "../components/BrandLogo";
import { motion } from "framer-motion";

// Realistic Bobbin Component on the right side
const RealisticBobbin: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Spinning effect for the wound threads
      gsap.to(".wound-thread", {
        strokeDashoffset: -40,
        ease: "none",
        duration: 0.8,
        repeat: -1,
      });

      // Flowing effect for the incoming thread
      gsap.to(".incoming-thread-dash", {
        strokeDashoffset: 40,
        ease: "none",
        duration: 0.8,
        repeat: -1,
      });

      // High-frequency vibration for tension
      gsap.to("#thread-path", {
        attr: { d: "M 40,0 C 150,120 400,280 1200,600" },
        duration: 0.08,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Generate threads wound around the core
  const wraps = Array.from({ length: 45 }).map((_, i) => {
    const y = 120 - i * 5.3;
    return (
      <path
        key={i}
        className="wound-thread"
        d={`M -40 ${y} A 40 12 0 0 0 40 ${y}`}
        fill="none"
        stroke="#5fa8d3"
        strokeWidth="3.5"
        strokeDasharray="20 20"
        opacity={y > -10 && y < 10 ? 1 : 0.85}
      />
    );
  });

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center relative overflow-visible">
      <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible drop-shadow-[0_0_25px_rgba(95,168,211,0.2)]">
        {/* Transform group to center the bobbin easily */}
        <g transform="translate(350, 300)">
          {/* Core background (the dark cylinder inside) */}
          <path d="M -40 -140 L -40 140 A 40 12 0 0 0 40 140 L 40 -140 Z" fill="#040b14" stroke="#122a42" strokeWidth="2" />

          {/* The wound threads */}
          <g id="wound-threads-group">{wraps}</g>

          {/* Top Flange */}
          <path d="M -90 -140 A 90 22 0 0 1 90 -140" fill="none" stroke="#254d6b" strokeWidth="2" />
          <path d="M -90 -140 L -90 -120 A 90 22 0 0 0 90 -120 L 90 -140 A 90 22 0 0 1 -90 -140 Z" fill="#081527" stroke="#387499" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="0" cy="-140" rx="90" ry="22" fill="#0b1b33" stroke="#488ab3" strokeWidth="1.5" />
          <ellipse cx="0" cy="-140" rx="14" ry="4" fill="#000" opacity="0.7" />

          {/* Bottom Flange */}
          <ellipse cx="0" cy="140" rx="90" ry="22" fill="#0b1b33" stroke="#254d6b" strokeWidth="1" />
          <path d="M -90 140 L -90 160 A 90 22 0 0 0 90 160 L 90 140 A 90 22 0 0 1 -90 140 Z" fill="#081527" stroke="#387499" strokeWidth="2" strokeLinejoin="round" />

          {/* Tangential Thread (taut) */}
          <g className="thread-connection">
            {/* Glow/Shadow base */}
            <path d="M 40,0 C 150,100 400,250 1200,600" fill="none" stroke="#5fa8d3" strokeWidth="1.5" opacity="0.5" />
            {/* Animated dashed thread */}
            <path
              id="thread-path"
              className="incoming-thread-dash"
              d="M 40,0 C 150,100 400,250 1200,600"
              fill="none"
              stroke="#5fa8d3"
              strokeWidth="3.5"
              strokeDasharray="20 20"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

// Clean Thread-Embroidered Names Component
const ThreadAuthorsBadge: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Flowing stitch dash animation
      gsap.to(".stitch-line", {
        strokeDashoffset: -50,
        duration: 2,
        repeat: -1,
        ease: "none",
      });

      // Needle gleam
      gsap.to(".needle-sparkle", {
        opacity: 1,
        scale: 1.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, badgeRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={badgeRef}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative inline-flex flex-col items-center sm:items-start group select-none pt-1"
    >
      {/* Embroidered Textile Ribbon / Patch (Snug Fit) */}
      <div className="relative w-fit px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#071324]/85 border border-sky/35 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.65),0_0_25px_rgba(95,168,211,0.15)] transition-all duration-300 hover:border-sky/55 hover:shadow-[0_15px_40px_rgba(0,0,0,0.75),0_0_35px_rgba(95,168,211,0.25)]">
        
        {/* Needle Gradient Defs */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <defs>
            <linearGradient id="needle-steel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="35%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
        </svg>

        {/* Outer Running Stitched Border */}
        <div className="absolute inset-1 rounded-lg border border-dashed border-sky/35 pointer-events-none animate-sewing-perimeter" />

        {/* Realistic Embroidery Needle pinned at the corner */}
        <div className="absolute -top-3.5 -right-3 pointer-events-none z-10">
          <svg width="48" height="48" viewBox="0 0 48 48" className="overflow-visible drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            <g transform="rotate(35 24 24)">
              {/* Thread line trailing from needle */}
              <path
                d="M -4,22 Q 10,14 22,23 Q 32,32 46,18"
                fill="none"
                stroke="#74C0FC"
                strokeWidth="2.2"
                strokeDasharray="4 2"
                className="stitch-line"
              />
              {/* Needle Body */}
              <path
                d="M 4,23.3 L 38,23.3 L 44,24 L 38,24.7 L 4,24.7 Q 1,24 4,23.3 Z"
                fill="url(#needle-steel-grad)"
                stroke="#1E293B"
                strokeWidth="0.5"
              />
              {/* Eye */}
              <ellipse cx="9" cy="24" rx="3" ry="0.9" fill="#040b14" stroke="#64748B" strokeWidth="0.5" />
              {/* Gleam */}
              <circle cx="9" cy="23" r="1.2" fill="#FFFFFF" className="needle-sparkle opacity-75" />
            </g>
          </svg>
        </div>

        {/* Names Layout: Pure, Clean Embroidered Typography */}
        <div className="flex flex-col space-y-2.5 z-10 relative pr-4">
          
          {/* Name 1: Herrera Agustin */}
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl md:text-2xl font-black font-sans tracking-wide uppercase leading-none bg-gradient-to-r from-sky-100 via-white to-sky-200 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 16px rgba(95,168,211,0.5), 0 2px 4px rgba(0,0,0,0.8)",
                letterSpacing: "0.08em",
              }}
            >
              Herrera Agustin
            </span>
            {/* Stitched Thread Accent */}
            <div className="w-full h-[3px] mt-1 overflow-hidden">
              <svg width="100%" height="3" className="overflow-visible">
                <line
                  x1="0"
                  y1="1.5"
                  x2="100%"
                  y2="1.5"
                  stroke="#74C0FC"
                  strokeWidth="1.8"
                  strokeDasharray="4 2.5"
                  className="stitch-line"
                />
              </svg>
            </div>
          </div>

          {/* Name 2: Yamila Avila Fuentes */}
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl md:text-2xl font-black font-sans tracking-wide uppercase leading-none bg-gradient-to-r from-sky-100 via-white to-sky-200 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 16px rgba(95,168,211,0.5), 0 2px 4px rgba(0,0,0,0.8)",
                letterSpacing: "0.08em",
              }}
            >
              Yamila Avila Fuentes
            </span>
            {/* Stitched Thread Accent */}
            <div className="w-full h-[3px] mt-1 overflow-hidden">
              <svg width="100%" height="3" className="overflow-visible">
                <line
                  x1="0"
                  y1="1.5"
                  x2="100%"
                  y2="1.5"
                  stroke="#74C0FC"
                  strokeWidth="1.8"
                  strokeDasharray="4 2.5"
                  className="stitch-line"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export const Portada: React.FC = () => {
  return (
    // Title is empty to avoid repeating the brand name in the header
    <SlideShell id="portada" n={1} title="" kind="portada" bgType="navy">
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-10 overflow-visible py-2">
        
        {/* Left Column: Brand Logo + Thread-Embroidered Presenters Badge */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start space-y-6 sm:space-y-8 text-center lg:text-left h-full z-10 relative">
          
          {/* Brand Logo - Uses vector BrandLogo */}
          <div className="transform origin-left">
            <BrandLogo variant="imagotipo" theme="navy" size="2xl" withGlow={true} />
          </div>

          {/* Thread Woven Names Component */}
          <ThreadAuthorsBadge />
        </div>

        {/* Right Column: GSAP Realistic Bobbin Animation */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-60 sm:h-72 lg:h-full z-0 overflow-visible">
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 bg-sky/15 rounded-full filter blur-[100px] pointer-events-none" />
          
          <RealisticBobbin />
        </div>
      </div>
    </SlideShell>
  );
};


