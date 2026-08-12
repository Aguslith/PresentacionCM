import React from "react";
import { SlideShell } from "../components/SlideShell";

export const Isotipo: React.FC = () => {
  return (
    <SlideShell id="isotipo" n={6} title="Síntesis del Isotipo" kind="galeria" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-5 my-auto">
          <p className="text-sm md:text-base text-slate-200 text-left font-normal max-w-3xl mx-auto leading-relaxed">
            El símbolo unifica los tres ejes fundamentales de la marca en una arquitectura 3D facetada de alta legibilidad, equilibrando soporte industrial, filamento activo y nombre corporativo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-6xl mx-auto">
            {/* Concept 1: Cono */}
            <div className="w-full border border-sky/20 bg-navy/60 p-2.5 sm:p-4 rounded-xl text-center space-y-2 hover:border-sky/50 transition-colors shadow-sm">
              <div className="h-16 sm:h-20 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 overflow-visible" viewBox="0 0 100 100">
                  {/* Top opening */}
                  <ellipse cx="50" cy="20" rx="12" ry="4" className="stroke-sky" strokeWidth="2" fill="none" />
                  {/* Bottom base */}
                  <ellipse cx="50" cy="80" rx="35" ry="10" className="stroke-sky" strokeWidth="2" fill="none" />
                  
                  {/* Sides */}
                  <line x1="38" y1="20" x2="15" y2="80" className="stroke-sky" strokeWidth="2" strokeLinecap="round" />
                  <line x1="62" y1="20" x2="85" y2="80" className="stroke-sky" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Center structural axis */}
                  <line x1="50" y1="5" x2="50" y2="95" className="stroke-sky/40" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* 3D wireframe contour lines */}
                  <path d="M 23,60 Q 50,70 77,60" className="stroke-sky/40" strokeWidth="1" fill="none" />
                  <path d="M 31,40 Q 50,48 69,40" className="stroke-sky/40" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold font-mono text-[10px] sm:text-xs text-sky uppercase">01 // EL CONO</h4>
                <p className="text-[9px] sm:text-[11px] text-slate-300 mt-0.5 font-normal leading-snug">
                  Soporte cónico de la hilandería industrial y la bobina de hilado.
                </p>
              </div>
            </div>

            {/* Concept 2: Hilo */}
            <div className="w-full border border-sky/20 bg-navy/60 p-2.5 sm:p-4 rounded-xl text-center space-y-2 hover:border-sky/50 transition-colors shadow-sm">
              <div className="h-16 sm:h-20 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 100 100">
                  <line x1="20" y1="30" x2="80" y2="50" className="stroke-sky" strokeWidth="3" />
                  <line x1="20" y1="45" x2="80" y2="65" className="stroke-sky" strokeWidth="3" />
                  <line x1="20" y1="60" x2="80" y2="80" className="stroke-sky" strokeWidth="3" />
                  <circle cx="20" cy="30" r="2.5" className="fill-white" />
                  <circle cx="80" cy="80" r="2.5" className="fill-white" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold font-mono text-[10px] sm:text-xs text-sky uppercase">02 // EL FILAMENTO</h4>
                <p className="text-[9px] sm:text-[11px] text-slate-300 mt-0.5 font-normal leading-snug">
                  Bandas paralelas en Sky Blue que representan el hilo devanado a tensión.
                </p>
              </div>
            </div>

            {/* Concept 3: Letra A */}
            <div className="w-full border border-sky/20 bg-navy/60 p-2.5 sm:p-4 rounded-xl text-center space-y-2 hover:border-sky/50 transition-colors shadow-sm">
              <div className="h-16 sm:h-20 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 100 100">
                  <path d="M50,15 L80,85 M50,15 L20,85 M30,62 L70,62" className="stroke-sky" strokeWidth="3.5" fill="none" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold font-mono text-[10px] sm:text-xs text-sky uppercase">03 // INICIAL "A"</h4>
                <p className="text-[9px] sm:text-[11px] text-slate-300 mt-0.5 font-normal leading-snug">
                  Estructura portante con arista posterior en Navy institucional.
                </p>
              </div>
            </div>

            {/* Consolidated 3D Isotype */}
            <div className="w-full border-2 border-sky/40 bg-navy/70 p-2.5 sm:p-4 rounded-xl text-center space-y-2 shadow-xl shadow-sky/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-sky/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-16 sm:h-20 flex items-center justify-center relative z-10">
                <img
                  src="/logotipo.png"
                  alt="Isotipo Oficial ALPACLADD"
                  className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-[0_0_15px_rgba(95,168,211,0.5)] transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold font-mono text-[10px] sm:text-xs text-sky uppercase tracking-wider">
                  04 // SÍMBOLO 3D
                </h4>
                <p className="text-[9px] sm:text-[11px] text-off font-medium mt-0.5 leading-snug">
                  Síntesis geométrica viva oficial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
