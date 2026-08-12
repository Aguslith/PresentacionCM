import React from "react";
import { SlideShell } from "../components/SlideShell";
import animStyles from "../animations.module.css";

export const Portada: React.FC = () => {
  return (
    <SlideShell id="portada" n={1} title="ALPACLADD" kind="portada" bgType="navy">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Title and Info */}
        <div className="space-y-6 text-left">
          <div className="flex items-center space-x-3">
            <img src="/logotipo.png" alt="ALPACLADD" className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(95,168,211,0.5)]" />
            <div className="inline-block border border-sky/30 bg-sky/5 px-3 py-1 text-[10px] tracking-[0.2em] text-sky uppercase font-mono rounded">
              FÁBRICA DE HILADOS DESDE 2026
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-wider text-off leading-none">
            PRECISIÓN <br />
            <span className="text-sky">TEXTIL</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray max-w-md font-light leading-relaxed">
            Estructura de marca, manual de identidad visual y planeamiento de marketing estratégico B2B para la hilandería líder en calidad y tecnología de hilado.
          </p>
          <div className="pt-2 sm:pt-4 flex items-center space-x-4 sm:space-x-6">
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] text-gray uppercase tracking-widest font-mono">Diseño de Experiencia</span>
              <span className="text-[11px] sm:text-xs text-sky font-semibold">Creative Dev Team</span>
            </div>
            <div className="w-[1px] h-6 sm:h-8 bg-sky/20" />
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] text-gray uppercase tracking-widest font-mono">Navegación</span>
              <span className="text-[11px] sm:text-xs text-sky font-semibold">Teclas / Swipe / Rueda</span>
            </div>
          </div>
        </div>

        {/* Large 3D Spinning Cone Graphic */}
        <div className="relative flex justify-center items-center h-48 sm:h-72 md:h-96">
          {/* Animated Glow behind graphic */}
          <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-sky/5 rounded-full filter blur-3xl animate-pulse" />
          
          <div className={`${animStyles.animFloat} relative w-44 h-44 sm:w-60 sm:h-60`}>
            {/* Spinning Spindle Lines */}
            <svg
              className={`${animStyles.animSpin3D} w-full h-full`}
              viewBox="0 0 200 200"
              fill="none"
            >
              {/* Spinning Cone Skeleton */}
              <path
                d="M100,20 L130,150 A30,10 0 0,1 70,150 Z"
                className="stroke-sky/40"
                strokeWidth="1.5"
              />
              {/* Weaving Threads around cone */}
              <ellipse cx="100" cy="150" rx="30" ry="10" className="stroke-sky" strokeWidth="1" />
              <ellipse cx="100" cy="120" rx="24" ry="8" className="stroke-sky/80" strokeWidth="1" />
              <ellipse cx="100" cy="90" rx="18" ry="6" className="stroke-sky/60" strokeWidth="1.2" />
              <ellipse cx="100" cy="60" rx="12" ry="4" className="stroke-sky/40" strokeWidth="1.5" />
              
              {/* Spindle Core */}
              <line x1="100" y1="10" x2="100" y2="180" className="stroke-sky" strokeWidth="2" />
            </svg>
            
            {/* Thread coming off the cone */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
              <path
                d="M100,20 Q180,60 140,120 T220,180"
                className="stroke-sky"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
