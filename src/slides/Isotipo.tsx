import React from "react";
import { SlideShell } from "../components/SlideShell";
import { Plus, Equal } from "lucide-react";

export const Isotipo: React.FC = () => {
  return (
    <SlideShell id="isotipo" n={6} title="Síntesis del Isotipo" kind="galeria" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-5 my-auto">
          <p className="text-sm md:text-base text-gray text-left font-light max-w-3xl mx-auto">
            El símbolo unifica los tres ejes fundamentales de la marca en una arquitectura 3D facetada de alta legibilidad, equilibrando soporte industrial, filamento activo y nombre corporativo.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 max-w-6xl mx-auto">
            {/* Concept 1: Cono */}
            <div className="flex-1 w-full border border-sky/15 bg-navy/40 p-4 rounded-xl text-center space-y-3 hover:border-sky/40 transition-colors">
              <div className="h-24 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 100 100">
                  <path d="M50,15 L80,75 L20,75 Z" className="stroke-sky" strokeWidth="2" fill="none" />
                  <line x1="50" y1="15" x2="50" y2="75" className="stroke-sky/50" strokeWidth="1" strokeDasharray="3 3" />
                  <ellipse cx="50" cy="75" rx="30" ry="8" className="stroke-sky/50" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold font-mono text-xs text-sky uppercase">01 // EL CONO</h4>
                <p className="text-[11px] text-gray mt-1 font-light leading-relaxed">
                  Soporte cónico clásico de la hilandería industrial y la bobina de almacenamiento técnico.
                </p>
              </div>
            </div>

            {/* Plus Icon */}
            <div className="text-sky/60 flex items-center justify-center shrink-0">
              <Plus className="w-5 h-5" />
            </div>

            {/* Concept 2: Hilo */}
            <div className="flex-1 w-full border border-sky/15 bg-navy/40 p-4 rounded-xl text-center space-y-3 hover:border-sky/40 transition-colors">
              <div className="h-24 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 100 100">
                  {/* Woven bands simulation */}
                  <line x1="20" y1="30" x2="80" y2="50" className="stroke-sky" strokeWidth="3" />
                  <line x1="20" y1="45" x2="80" y2="65" className="stroke-sky" strokeWidth="3" />
                  <line x1="20" y1="60" x2="80" y2="80" className="stroke-sky" strokeWidth="3" />
                  <circle cx="20" cy="30" r="2.5" className="fill-white" />
                  <circle cx="80" cy="80" r="2.5" className="fill-white" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold font-mono text-xs text-sky uppercase">02 // EL FILAMENTO</h4>
                <p className="text-[11px] text-gray mt-1 font-light leading-relaxed">
                  Las bandas paralelas en Sky Blue representan las capas continuas de hilo devanado a tensión uniforme.
                </p>
              </div>
            </div>

            {/* Plus Icon */}
            <div className="text-sky/60 flex items-center justify-center shrink-0">
              <Plus className="w-5 h-5" />
            </div>

            {/* Concept 3: Letra A */}
            <div className="flex-1 w-full border border-sky/15 bg-navy/40 p-4 rounded-xl text-center space-y-3 hover:border-sky/40 transition-colors">
              <div className="h-24 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 100 100">
                  <path d="M50,15 L80,85 M50,15 L20,85 M30,62 L70,62" className="stroke-sky" strokeWidth="3.5" fill="none" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold font-mono text-xs text-sky uppercase">03 // LA INICIAL "A"</h4>
                <p className="text-[11px] text-gray mt-1 font-light leading-relaxed">
                  Estructura portante de ALPACLADD con arista posterior en Navy institucional (#0D1D34).
                </p>
              </div>
            </div>

            {/* Equal Icon */}
            <div className="text-sky flex items-center justify-center shrink-0">
              <Equal className="w-6 h-6 text-sky" />
            </div>

            {/* Consolidated 3D Isotype */}
            <div className="flex-1 w-full border-2 border-sky/40 bg-navy/70 p-4 rounded-xl text-center space-y-3 shadow-xl shadow-sky/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-sky/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-24 flex items-center justify-center relative z-10">
                <img
                  src="/logotipo.png"
                  alt="Isotipo Oficial ALPACLADD"
                  className="h-20 w-20 object-contain drop-shadow-[0_0_15px_rgba(95,168,211,0.5)] transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold font-mono text-xs text-sky uppercase tracking-wider">
                  SÍMBOLO 3D OFICIAL
                </h4>
                <p className="text-[11px] text-off font-medium mt-1 leading-relaxed">
                  Síntesis geométrica viva
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>ANÁLISIS MORFOLÓGICO</span>
          <span>SÍMBOLO CONSOLIDADO</span>
        </div>
      </div>
    </SlideShell>
  );
};
