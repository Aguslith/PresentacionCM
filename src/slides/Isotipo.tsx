import React from "react";
import { SlideShell } from "../components/SlideShell";
import { Sparkles } from "lucide-react";

export const Isotipo: React.FC = () => {
  return (
    <SlideShell id="isotipo" n={11} title="Síntesis del Isotipo" kind="galeria" bgType="navy">
      <div className="h-full flex flex-col justify-between py-1">
        <div className="space-y-3.5 my-auto max-w-6xl mx-auto w-full">
          
          {/* Header Explanation */}
          <div className="text-left space-y-1 max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-sky/10 border border-sky/30 text-sky text-[10px] font-mono font-bold uppercase">
              <Sparkles className="w-3 h-3" />
              <span>GÉNESIS CONCEPTUAL DEL SÍMBOLO</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              La identidad de <strong className="text-white font-bold">ALPACLADD</strong> surge de una metamorfosis en 4 etapas: el soporte del carrete vacío, la hebra viva de hilado, la inicial "A" integrando las bandas cónicas, y la consolidación final en el isotipo 3D oficial.
            </p>
          </div>

          {/* 4 Progressive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
            
            {/* 01. EL CARRETE VACÍO */}
            <div className="border border-sky/25 bg-navy/85 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div className="h-28 sm:h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Empty Industrial Bobbin Spool on Creel Dish */}
                <svg className="w-24 h-24 sm:w-28 sm:h-28 overflow-visible" viewBox="0 0 120 120">
                  {/* Spindle Rod */}
                  <line x1="60" y1="12" x2="60" y2="105" className="stroke-sky/40" strokeWidth="1.5" strokeDasharray="3 2" />

                  {/* Circular Machine Base Plate */}
                  <ellipse cx="60" cy="98" rx="48" ry="11" className="fill-[#08182e] stroke-sky" strokeWidth="2" />
                  <ellipse cx="60" cy="97" rx="38" ry="7" className="fill-[#0d2342] stroke-sky/50" strokeWidth="1.2" />

                  {/* Pure Empty Conical Spool Body */}
                  <path
                    d="M 48,34 L 32,90 Q 60,100 88,90 L 72,34 Z"
                    className="fill-sky/10 stroke-sky"
                    strokeWidth="2.2"
                  />

                  {/* Spool Vertical Ribs & Hollow Perforations */}
                  <line x1="48" y1="34" x2="36" y2="88" className="stroke-sky/40" strokeWidth="1.2" strokeDasharray="2 3" />
                  <line x1="60" y1="34" x2="60" y2="92" className="stroke-sky/50" strokeWidth="1.5" strokeDasharray="2 3" />
                  <line x1="72" y1="34" x2="84" y2="88" className="stroke-sky/40" strokeWidth="1.2" strokeDasharray="2 3" />

                  {/* Hollow Top Opening Collar */}
                  <ellipse cx="60" cy="34" rx="14" ry="4.5" className="fill-[#0b1b33] stroke-sky" strokeWidth="2" />
                  <ellipse cx="60" cy="34" rx="7" ry="2.2" className="fill-[#050d1a] stroke-sky/60" strokeWidth="1.2" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">01 // EL CARRETE</h4>
                  <span className="text-[8.5px] font-mono text-slate-400">SOPORTE</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  El cono plástico vacío y el platillo base industrial donde se inicia el montaje de hilatura.
                </p>
              </div>
            </div>

            {/* 02. EL HILO (La materia viva en movimiento) */}
            <div className="border border-sky/25 bg-navy/85 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div className="h-28 sm:h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Flowing Yarn Strands & Filament Loops SVG */}
                <svg className="w-24 h-24 sm:w-28 sm:h-28 overflow-visible" viewBox="0 0 120 120">
                  {/* Flowing continuous yarn loops & waves */}
                  <path
                    d="M 10,40 C 35,15 45,95 75,45 C 95,10 115,70 95,95 C 75,115 35,80 50,60"
                    className="stroke-sky"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 15,48 C 38,25 48,100 78,52 C 98,20 118,75 98,100"
                    className="stroke-white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 5,65 Q 40,30 80,85 T 115,40"
                    className="stroke-sky/60"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 3"
                  />

                  {/* Thread Tension Origin Nodes */}
                  <circle cx="10" cy="40" r="3.5" className="fill-white drop-shadow-[0_0_6px_#ffffff]" />
                  <circle cx="115" cy="40" r="3" className="fill-sky drop-shadow-[0_0_6px_#5fa8d3]" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">02 // EL HILO</h4>
                  <span className="text-[8.5px] font-mono text-slate-400">MATERIA</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  El filamento peinado de algodón fluyendo en ondas continuas de alta regularidad y resistencia.
                </p>
              </div>
            </div>

            {/* 03. LA "A" ENTRANDO AL ISOTIPO (La letra A integrando las capas del hilado) */}
            <div className="border border-sky/25 bg-navy/85 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div className="h-28 sm:h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Letter A morphing and merging into the 3D conical thread facets */}
                <svg className="w-24 h-24 sm:w-28 sm:h-28 overflow-visible" viewBox="0 0 120 120">
                  {/* Dynamic Thread Guides Wrapping Around the Letter A */}
                  <path
                    d="M 12,90 C 25,65 40,40 60,18 C 80,40 95,65 108,90"
                    className="stroke-sky/40"
                    strokeWidth="1.2"
                    fill="none"
                    strokeDasharray="3 3"
                  />

                  {/* Letter A Outer Contour Blueprint */}
                  <path
                    d="M 60,18 L 26,98 L 40,98 L 60,42 L 80,98 L 94,98 Z"
                    className="stroke-white"
                    strokeWidth="1.8"
                    fill="none"
                  />

                  {/* 3 Winding Thread Facets Entering and Structuring the Letter A */}
                  <polygon
                    points="46,46 74,46 70,54 50,54"
                    className="fill-sky stroke-white"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="41,62 79,62 75,70 45,70"
                    className="fill-sky stroke-white"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="36,78 84,78 80,86 40,86"
                    className="fill-sky stroke-white"
                    strokeWidth="1.2"
                  />

                  {/* Dynamic Flow Arrows indicating the entry into the shape */}
                  <circle cx="60" cy="18" r="3.5" className="fill-white" />
                  <line x1="20" y1="94" x2="30" y2="84" className="stroke-sky" strokeWidth="1.5" />
                  <line x1="100" y1="94" x2="90" y2="84" className="stroke-sky" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">03 // LA LETRA "A"</h4>
                  <span className="text-[8.5px] font-mono text-slate-400">FUSIÓN</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  La inicial "A" absorbe las vueltas del hilo devanado, estructurando las facetas del isotipo.
                </p>
              </div>
            </div>

            {/* 04. ISOTIPO 3D OFICIAL (El símbolo completo con sus colores oficiales) */}
            <div className="border-2 border-sky bg-gradient-to-b from-navy/95 to-[#091629] p-4 rounded-2xl text-center space-y-3 shadow-2xl shadow-sky/25 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky/25 rounded-full filter blur-xl group-hover:bg-sky/40 transition-colors" />

              <div className="h-28 sm:h-32 flex flex-col items-center justify-center relative z-10 space-y-1.5">
                <img
                  src="/logotipo.png"
                  alt="Isotipo Oficial ALPACLADD"
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_0_25px_rgba(95,168,211,0.65)] transform group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Official Brandmark Subtitle */}
                <div className="text-center">
                  <span className="font-black font-sans text-xs tracking-wider text-white block">
                    ALPACLADD
                  </span>
                  <span className="text-[8px] font-mono text-sky tracking-widest uppercase block">
                    FÁBRICA DE HILADOS
                  </span>
                </div>
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/30 relative z-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-black font-mono text-[11px] text-sky uppercase tracking-wider">04 // ISOTIPO 3D</h4>
                  <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded bg-sky text-navy">OFICIAL</span>
                </div>
                <p className="text-[10.5px] text-white font-sans font-medium leading-snug">
                  Síntesis final: el carrete, el hilo y la letra "A" consolidados con los colores institucionales.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SlideShell>
  );
};
