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
              El isotipo de <strong className="text-white font-bold">ALPACLADD</strong> nace directamente del proceso industrial: la estructura del carrete textil, las capas de hilo devanado en tensión y la geometría arquitectónica de la inicial "A".
            </p>
          </div>

          {/* 4-Step Progressive Visual Synthesis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative items-stretch">
            
            {/* 01. EL CARRETE VACÍO (Soporte Base y Platillo) */}
            <div className="border border-sky/25 bg-navy/85 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between relative group">
              <div className="h-28 sm:h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Empty Cone Spool & Dish Plate SVG (Mirroring the photo) */}
                <svg className="w-24 h-24 sm:w-28 sm:h-28 overflow-visible" viewBox="0 0 120 120">
                  {/* Creel Spindle Rod */}
                  <line x1="60" y1="10" x2="60" y2="105" className="stroke-sky/40" strokeWidth="1.5" strokeDasharray="3 2" />

                  {/* Circular Base Dish / Creel Plate (Platillo blanco de la foto) */}
                  <ellipse cx="60" cy="96" rx="46" ry="11" className="fill-[#08172c] stroke-sky" strokeWidth="2" />
                  <ellipse cx="60" cy="95" rx="36" ry="7" className="fill-[#0d223f] stroke-sky/50" strokeWidth="1.2" />

                  {/* Empty Conical Body */}
                  <path
                    d="M 48,32 L 32,88 Q 60,98 88,88 L 72,32 Z"
                    className="fill-sky/15 stroke-sky"
                    strokeWidth="2.2"
                  />

                  {/* Internal Cone Ribs & Calibration Rings */}
                  <path d="M 44,50 Q 60,56 76,50" className="stroke-sky/40" strokeWidth="1.2" fill="none" strokeDasharray="3 3" />
                  <path d="M 38,70 Q 60,78 82,70" className="stroke-sky/40" strokeWidth="1.2" fill="none" strokeDasharray="3 3" />

                  {/* Top Colored Spool Collar (Anillo superior rojo/celeste) */}
                  <ellipse cx="60" cy="32" rx="14" ry="4.5" className="fill-sky stroke-white" strokeWidth="1.5" />
                  <ellipse cx="60" cy="32" rx="7" ry="2.2" className="fill-[#050c17] stroke-sky/60" strokeWidth="1" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">01 // EL CARRETE</h4>
                  <span className="text-[8.5px] font-mono text-slate-400">SOPORTE</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  El cono plástico y platillo base porta-bobina sobre el cual se monta la producción de hilandería.
                </p>
              </div>
            </div>

            {/* 02. EL HILO FORMADO / BOBINADO (Cono cargado con hilo y filamento saliente) */}
            <div className="border border-sky/25 bg-navy/85 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between relative group">
              <div className="h-28 sm:h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Loaded Yarn Cone Spool with Thread Winding & Exit Filament */}
                <svg className="w-24 h-24 sm:w-28 sm:h-28 overflow-visible" viewBox="0 0 120 120">
                  {/* Single Thread Line Rising Vertically from Top (como en la foto) */}
                  <line x1="60" y1="0" x2="60" y2="28" className="stroke-white animate-pulse" strokeWidth="1.5" />
                  <circle cx="60" cy="4" r="2" className="fill-sky" />

                  {/* Circular Base Dish */}
                  <ellipse cx="60" cy="96" rx="46" ry="11" className="fill-[#08172c] stroke-sky/70" strokeWidth="1.8" />
                  <ellipse cx="60" cy="95" rx="36" ry="7" className="fill-[#0d223f] stroke-sky/40" strokeWidth="1" />

                  {/* Solid White/Celeste Wound Yarn Body (Cuerpo de hilo bobinado) */}
                  <path
                    d="M 47,30 L 28,90 Q 60,102 92,90 L 73,30 Z"
                    className="fill-white stroke-sky"
                    strokeWidth="2"
                  />

                  {/* Realistic Horizontal/Diagonal Winding Layers (Capas de hilo) */}
                  <path d="M 43,45 Q 60,52 77,45" className="stroke-slate-300" strokeWidth="1.5" fill="none" />
                  <path d="M 38,60 Q 60,68 82,60" className="stroke-slate-300" strokeWidth="1.5" fill="none" />
                  <path d="M 33,75 Q 60,84 87,75" className="stroke-slate-300" strokeWidth="1.5" fill="none" />

                  {/* Diagonal Winding Texture Overlays */}
                  <path d="M 47,32 L 87,75" className="stroke-sky/50" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path d="M 73,32 L 33,75" className="stroke-sky/50" strokeWidth="1.2" strokeDasharray="3 3" />

                  {/* Top Red Collar Ring from Photo */}
                  <ellipse cx="60" cy="28" rx="14" ry="4.5" className="fill-[#e11d48] stroke-white" strokeWidth="1.5" />
                  <ellipse cx="60" cy="28" rx="7" ry="2.2" className="fill-white stroke-[#e11d48]" strokeWidth="1" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">02 // EL DEVANADO</h4>
                  <span className="text-[8.5px] font-mono text-slate-400">PRODUCTO</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  Las capas concéntricas de hilo peinado devanadas en tensión formando la bobina cónica final.
                </p>
              </div>
            </div>

            {/* 03. LA GEOMETRÍA VECTORIAL (La forma del cono y los hilos convertidos en la 'A') */}
            <div className="border border-sky/25 bg-navy/85 p-4 rounded-2xl text-center space-y-3 hover:border-sky/50 transition-all duration-300 shadow-xl flex flex-col justify-between relative group">
              <div className="h-28 sm:h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-sky/5 rounded-xl filter blur-sm" />
                
                {/* Structural Letter A Vector Breakdown */}
                <svg className="w-24 h-24 sm:w-28 sm:h-28 overflow-visible" viewBox="0 0 120 120">
                  {/* Conical Blueprint Background Mesh */}
                  <path
                    d="M 60,18 L 26,96 Q 60,105 94,96 Z"
                    className="fill-sky/5 stroke-sky/30"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Left Faceted Structural Leg */}
                  <path
                    d="M 60,18 L 30,94 L 44,94 L 60,42 Z"
                    className="fill-sky/25 stroke-sky"
                    strokeWidth="2"
                  />

                  {/* Right Solid Navy Leg */}
                  <path
                    d="M 60,18 L 90,94 L 76,94 L 60,42 Z"
                    className="fill-[#143159] stroke-sky"
                    strokeWidth="2"
                  />

                  {/* 3 Transversal Thread Facets (Las 3 franjas de hilo devanado) */}
                  <polygon points="44,46 76,46 72,53 48,53" className="fill-sky stroke-white" strokeWidth="1" />
                  <polygon points="39,62 81,62 77,69 43,69" className="fill-sky stroke-white" strokeWidth="1" />
                  <polygon points="34,78 86,78 82,85 38,85" className="fill-sky stroke-white" strokeWidth="1" />

                  {/* Apex Node */}
                  <circle cx="60" cy="18" r="3.5" className="fill-white" />
                </svg>
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/15">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-mono text-[11px] text-sky uppercase">03 // LA LETRA "A"</h4>
                  <span className="text-[8.5px] font-mono text-slate-400">GEOMETRÍA</span>
                </div>
                <p className="text-[10.5px] text-slate-200 font-sans leading-snug">
                  Las bandas de hilado y la arista cónica se sintetizan en los trazos de la inicial corporativa "A".
                </p>
              </div>
            </div>

            {/* 04. ISOTIPO 3D OFICIAL (El Símbolo Final Alpacladd) */}
            <div className="border-2 border-sky bg-gradient-to-b from-navy/95 to-[#0b182d] p-4 rounded-2xl text-center space-y-3 shadow-2xl shadow-sky/25 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky/25 rounded-full filter blur-xl group-hover:bg-sky/40 transition-colors" />

              <div className="h-28 sm:h-32 flex items-center justify-center relative z-10">
                <img
                  src="/logotipo.png"
                  alt="Isotipo Oficial ALPACLADD"
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_0_25px_rgba(95,168,211,0.65)] transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="text-left space-y-1 pt-2 border-t border-sky/30 relative z-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-black font-mono text-[11px] text-sky uppercase tracking-wider">04 // ISOTIPO 3D</h4>
                  <span className="text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded bg-sky text-navy">OFICIAL</span>
                </div>
                <p className="text-[10.5px] text-white font-sans font-medium leading-snug">
                  Fusión perfecta: la bobina industrial y el devanado dan vida al isotipo vivo de ALPACLADD.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SlideShell>
  );
};
