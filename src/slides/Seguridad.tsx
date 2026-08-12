import React from "react";
import { SlideShell } from "../components/SlideShell";
import { BrandLogo } from "../components/BrandLogo";
import { ShieldCheck } from "lucide-react";

export const Seguridad: React.FC = () => {
  return (
    <SlideShell id="seguridad" n={8} title="Área de Seguridad" kind="texto" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Instructions */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-blue" />
              <h3 className="text-xl font-bold text-navy">Protección del Imagotipo</h3>
            </div>
            <p className="text-sm text-gray font-light leading-relaxed">
              Para garantizar la legibilidad y el impacto visual del imagotipo en soportes físicos e interfaces digitales, se define un área de protección mínima donde ningún otro elemento gráfico (textos secundarios, bordes, fotografías u otros logos) puede ingresar.
            </p>
            <div className="border border-navy/15 bg-navy/[0.02] p-4 rounded-lg space-y-2">
              <h4 className="text-xs font-mono font-bold text-navy uppercase">CÁLCULO DEL MÁRGEN</h4>
              <p className="text-[11px] text-gray/80 leading-relaxed font-light">
                La unidad de medida <strong>X</strong> equivale al ancho del facetado central de la "A". La zona de exclusión a cada uno de los cuatro lados del imagotipo debe ser de al menos <strong>1X</strong>.
              </p>
            </div>
          </div>

          {/* Technical Diagram Card */}
          <div className="md:col-span-7 flex flex-col items-center">
            <div className="w-full bg-white border border-navy/10 rounded-xl p-4 sm:p-8 shadow-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[220px] sm:min-h-[280px]">
              <div className="absolute top-3 left-3 text-[8px] font-mono text-gray">
                BLUEPRINT: CLEARSPACE MARGINS (1X)
              </div>

              {/* Vector Logo + Clearspace dashed line overlays */}
              <div className="relative border border-dashed border-blue/40 p-4 sm:p-8 md:p-10 bg-navy/[0.02] rounded-lg">
                {/* Labels indicating clear space around */}
                <div className="absolute top-1 sm:top-2.5 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-mono text-blue font-bold">1X</div>
                <div className="absolute bottom-1 sm:bottom-2.5 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-mono text-blue font-bold">1X</div>
                <div className="absolute left-1 sm:left-2.5 top-1/2 -translate-y-1/2 text-[8px] sm:text-[9px] font-mono text-blue font-bold">1X</div>
                <div className="absolute right-1 sm:right-2.5 top-1/2 -translate-y-1/2 text-[8px] sm:text-[9px] font-mono text-blue font-bold">1X</div>
                
                {/* Inside actual logo bounding box */}
                <div className="border border-sky/30 bg-white px-3 sm:px-6 py-2 sm:py-4 rounded shadow-sm flex items-center justify-center">
                  <BrandLogo
                    variant="horizontal"
                    theme="light"
                    size="sm"
                  />
                </div>
              </div>

              {/* External margin lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                {/* Horizontal arrows */}
                <line x1="30" y1="150" x2="50" y2="150" className="stroke-blue" strokeWidth="1" />
                <polygon points="30,150 35,147 35,153" className="fill-blue" />
                <polygon points="50,150 45,147 45,153" className="fill-blue" />

                <line x1="350" y1="150" x2="370" y2="150" className="stroke-blue" strokeWidth="1" />
                <polygon points="350,150 355,147 355,153" className="fill-blue" />
                <polygon points="370,150 365,147 365,153" className="fill-blue" />
              </svg>

              <div className="text-[9px] font-mono text-gray mt-4">
                MEDIDA BÁSICA: X = ANCHO DEL FACETADO DINÁMICO DEL ISOTIPO
              </div>
            </div>
            <span className="text-[10px] text-gray uppercase tracking-widest font-mono mt-3">
              Fig. 8.1: Bounding boxes y áreas de protección mínima obligatoria
            </span>
          </div>
        </div>

        <div className="border-t border-navy/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>PAUTAS DE REPRODUCCIÓN</span>
          <span>ZONA DE EXCLUSIÓN</span>
        </div>
      </div>
    </SlideShell>
  );
};
