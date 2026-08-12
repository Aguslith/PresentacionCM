import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SlideShell } from "../components/SlideShell";
import { BrandLogo } from "../components/BrandLogo";

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
        attr: { d: "M 40,0 C 150,120 400,280 1200,600" }, // Slightly lower sag
        duration: 0.08,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Generate threads wound around the core
  // Bobbin center is at (0,0) in the group.
  // Core radius is 40. Height is from -130 to 130.
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
          <g id="wound-threads-group">
            {wraps}
          </g>

          {/* Top Flange */}
          <path d="M -90 -140 A 90 22 0 0 1 90 -140" fill="none" stroke="#254d6b" strokeWidth="2" />
          <path d="M -90 -140 L -90 -120 A 90 22 0 0 0 90 -120 L 90 -140 A 90 22 0 0 1 -90 -140 Z" fill="#081527" stroke="#387499" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="0" cy="-140" rx="90" ry="22" fill="#0b1b33" stroke="#488ab3" strokeWidth="1.5" />
          <ellipse cx="0" cy="-140" rx="14" ry="4" fill="#000" opacity="0.7" />

          {/* Bottom Flange */}
          <ellipse cx="0" cy="140" rx="90" ry="22" fill="#0b1b33" stroke="#254d6b" strokeWidth="1" />
          <path d="M -90 140 L -90 160 A 90 22 0 0 0 90 160 L 90 140 A 90 22 0 0 1 -90 140 Z" fill="#081527" stroke="#387499" strokeWidth="2" strokeLinejoin="round" />

          {/* Tangential Thread (taut) - Originating exactly from the right edge of the core (x=40, y=0) */}
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

export const Portada: React.FC = () => {
  return (
    // Title is empty to avoid repeating the brand name in the header
    <SlideShell id="portada" n={1} title="" kind="portada" bgType="navy">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 overflow-visible">
        
        {/* Brand Logo - Uses vector BrandLogo to respect exactly the brand colors on dark bg */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-10 text-center md:text-left h-full z-10 relative">
          <BrandLogo variant="imagotipo" theme="navy" size="2xl" withGlow={true} />
        </div>

        {/* GSAP Realistic Bobbin Animation */}
        <div className="relative flex justify-center items-center h-64 sm:h-80 md:h-full z-0 overflow-visible">
          {/* Subtle Ambient Glow */}
          <div className="absolute w-64 h-64 bg-sky/10 rounded-full filter blur-[100px] pointer-events-none" />
          
          <RealisticBobbin />
        </div>
      </div>
    </SlideShell>
  );
};

