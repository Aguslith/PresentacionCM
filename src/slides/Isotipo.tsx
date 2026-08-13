import React from "react";
import { SlideShell } from "../components/SlideShell";
import { Plus, Equal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Isotipo: React.FC = () => {
  return (
    <SlideShell id="isotipo" n={11} title="Síntesis del Isotipo" kind="galeria" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-4 my-auto max-w-6xl mx-auto w-full">
          
          {/* Header Explanation */}
          <div className="text-left space-y-1 max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-sky/10 border border-sky/30 text-sky text-[10px] font-mono font-bold uppercase">
              <Sparkles className="w-3 h-3" />
              <span>GÉNESIS CONCEPTUAL DEL SÍMBOLO</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              El isotipo de <strong className="text-white font-bold">ALPACLADD</strong> nace de la fusión directa de los tres pilares de la hilandería: el soporte físico (el cono/carrete vacío), el filamento textil devanado en tensión y la inicial corporativa "A".
            </p>
          </div>

          {/* Conceptual Synthesis Flow (Cards with + and = operators) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative items-stretch">
            
            {/* 01. EL CARRETE / CONO VACÍO */}
            <div className="border border-sky/25 bg-navy/80 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-lg flex flex-col justify-between relative group">
              <div className="h-24 sm:h-28 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Detailed Empty Industrial Yarn Cone SVG */}
                <svg className="w-20 h-20 sm:w-24 sm:h-24 overflow-visible" viewBox="0 0 100 100">
                  {/* Top Spool Hole */}
                  <ellipse cx="50" cy="18" rx="14" ry="4.5" className="fill-[#081220] stroke-sky" strokeWidth="2.2" />
                  <ellipse cx="50" cy="18" rx="8" ry="2.5" className="fill-navy stroke-sky/40" strokeWidth="1" />
                  
                  {/* Conical Body */}
                  <path
                    d="M 36,18 L 18,80 Q 50,90 82,80 L 64,18 Z"
                    className="fill-sky/10 stroke-sky"
                    strokeWidth="2.2"
                  />

                  {/* Empty Cone Plastic Ribs / Texture Lines */}
                  <path d="M 28,50 Q 50,58 72,50" className="stroke-sky/40" strokeWidth="1.2" fill="none" strokeDasharray="3 3" />
                  <path d="M 22,68 Q 50,78 78,68" className="stroke-sky/40" strokeWidth="1.2" fill="none" strokeDasharray="3 3" />
                  <line x1="50" y1="18" x2="50" y2="85" className="stroke-sky/30" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Base Flange / Ring */}
                  <ellipse cx="50" cy="80" rx="32" ry="7" className="fill-none stroke-sky" strokeWidth="2.2" />
                  <path d="M 18,80 L 18,84 Q 50,94 82,84 L 82,80" className="fill-sky/20 stroke-sky" strokeWidth="2" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-1 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">01 // EL CARRETE</h4>
                  <span className="text-[9px] font-mono text-slate-400">SOPORTE</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  El cono plástico o carrete vacío sobre el cual se monta y embobina el hilado en la hilandería industrial.
                </p>
              </div>
            </div>

            {/* 02. EL HILO DEVANADO */}
            <div className="border border-sky/25 bg-navy/80 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-lg flex flex-col justify-between relative group">
              <div className="h-24 sm:h-28 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Winding Yarn Strands SVG */}
                <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 100 100">
                  {/* Flowing Yarn Spiral Bands */}
                  <path
                    d="M 15,32 Q 50,42 85,32"
                    className="stroke-sky"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 15,48 Q 50,60 85,48"
                    className="stroke-sky"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 15,66 Q 50,80 85,66"
                    className="stroke-sky"
                    strokeWidth="4.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Dynamic Thread Feed Line */}
                  <path
                    d="M 85,32 C 95,20 100,50 90,85"
                    className="stroke-white"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 3"
                  />

                  <circle cx="15" cy="32" r="3" className="fill-white" />
                  <circle cx="85" cy="66" r="3.5" className="fill-white" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-1 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">02 // EL FILAMENTO</h4>
                  <span className="text-[9px] font-mono text-slate-400">PRODUCTO</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  Las vueltas de hilo peinado devanadas en tensión continua y precisión milimétrica alrededor del cono.
                </p>
              </div>
            </div>

            {/* 03. LA INICIAL "A" */}
            <div className="border border-sky/25 bg-navy/80 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-lg flex flex-col justify-between relative group">
              <div className="h-24 sm:h-28 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Architectural Letter A Structure SVG */}
                <svg className="w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 100 100">
                  {/* Left Faceted Leg */}
                  <path
                    d="M 50,15 L 22,85 L 34,85 L 50,38 Z"
                    className="fill-sky/20 stroke-sky"
                    strokeWidth="2"
                  />
                  {/* Right Heavy Structural Leg */}
                  <path
                    d="M 50,15 L 78,85 L 66,85 L 50,38 Z"
                    className="fill-[#1b3d6d] stroke-sky"
                    strokeWidth="2"
                  />
                  {/* Crossbar */}
                  <rect x="33" y="58" width="34" height="6" rx="2" className="fill-sky stroke-white" strokeWidth="1.2" />
                  
                  {/* Geometric Apex Dot */}
                  <circle cx="50" cy="15" r="3" className="fill-white" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-1 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">03 // LA LETRA "A"</h4>
                  <span className="text-[9px] font-mono text-slate-400">IDENTIDAD</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  La inicial arquitectónica de ALPACLADD, cuya forma piramidal coincide naturalmente con la silueta cónica.
                </p>
              </div>
            </div>

            {/* 04. ISOTIPO 3D FINAL */}
            <div className="border-2 border-sky bg-gradient-to-b from-navy/90 to-[#0e1e36] p-4 rounded-2xl text-center space-y-3 shadow-2xl shadow-sky/20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky/20 rounded-full filter blur-xl group-hover:bg-sky/30 transition-colors" />

              <div className="h-24 sm:h-28 flex items-center justify-center relative z-10">
                <img
                  src="/logotipo.png"
                  alt="Isotipo Oficial ALPACLADD"
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_0_20px_rgba(95,168,211,0.6)] transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="text-left space-y-1 pt-1 border-t border-sky/30 relative z-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-black font-mono text-[11px] text-sky uppercase tracking-wider">04 // ISOTIPO 3D</h4>
                  <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded bg-sky text-navy">OFICIAL</span>
                </div>
                <p className="text-[10.5px] text-white font-sans font-medium leading-snug">
                  Fusión armónica: el carrete y el hilo enrollado construyen la "A" tridimensional de ALPACLADD.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SlideShell>
  );
};
