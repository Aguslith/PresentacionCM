import React from "react";
import { SlideShell } from "../components/SlideShell";
import { BrandLogo } from "../components/BrandLogo";
import { Minimize2 } from "lucide-react";

export const Reduccion: React.FC = () => {
  return (
    <SlideShell id="reduccion" n={9} title="Reducción Mínima" kind="texto" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Text Description */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center space-x-2">
              <Minimize2 className="w-5 h-5 text-sky" />
              <h3 className="text-xl font-bold text-sky">Garantía de Legibilidad</h3>
            </div>
            <p className="text-sm text-gray font-light leading-relaxed">
              Para preservar la definición de las facetas y los filamentos de la "A" y evitar el empastado tipográfico, se establecen los umbrales mínimos físicos y digitales para la marca.
            </p>
            <div className="border border-sky/15 bg-sky/5 p-4 rounded-lg space-y-3">
              <div>
                <h4 className="text-xs font-mono font-bold text-sky uppercase">01 // IMAGOTIPO COMPLETO</h4>
                <p className="text-[11px] text-gray mt-1 leading-relaxed">
                  El imagotipo principal completo (isotype + nombre) tiene una reducción mínima de <strong>25 mm de ancho</strong> en piezas impresas y <strong>120px</strong> en digital.
                </p>
              </div>
              <div className="border-t border-sky/10 pt-2">
                <h4 className="text-xs font-mono font-bold text-sky uppercase">02 // ISOTIPO INDEPENDIENTE</h4>
                <p className="text-[11px] text-gray mt-1 leading-relaxed">
                  Para piezas micro (como etiquetas cosidas en prenda o cabezal de bobina), el isotipo solo puede reducirse hasta <strong>8 mm de ancho</strong> en impresión y <strong>32px</strong> en digital.
                </p>
              </div>
            </div>
          </div>

          {/* Graphical comparison */}
          <div className="md:col-span-7 space-y-4">
            <div className="w-full bg-navy/40 border border-sky/15 rounded-xl p-6 relative overflow-hidden space-y-6">
              <div className="text-[8px] font-mono text-gray text-left">
                ESCALADO REALISTA (SIMULACIÓN 1:1)
              </div>

              {/* Box 1: Principal Lockup (25 mm) */}
              <div className="flex flex-col md:flex-row items-center justify-between border-b border-sky/10 pb-6 text-left">
                <div className="mb-4 md:mb-0">
                  <span className="text-[10px] font-mono text-sky font-bold block">IMAGOTIPO COMPLETO</span>
                  <span className="text-xs text-gray">Ancho mínimo: 25 mm / 120px</span>
                </div>

                <div className="bg-white p-4 rounded border border-sky/10 flex items-center justify-center min-w-[200px] shadow-md">
                  {/* 25mm Logo width in screen pixels */}
                  <BrandLogo
                    variant="horizontal"
                    theme="light"
                    size="sm"
                  />
                </div>
              </div>

              {/* Box 2: Isotipo Solo (8 mm) */}
              <div className="flex flex-col md:flex-row items-center justify-between text-left">
                <div className="mb-4 md:mb-0">
                  <span className="text-[10px] font-mono text-sky font-bold block">ISOTIPO AISLADO</span>
                  <span className="text-xs text-gray">Ancho mínimo: 8 mm / 32px</span>
                </div>

                <div className="bg-white p-4 rounded border border-sky/10 flex items-center justify-center min-w-[200px] shadow-md">
                  {/* 8mm Isotype width in screen pixels */}
                  <BrandLogo
                    variant="isotype"
                    theme="light"
                    size="sm"
                  />
                </div>
              </div>
            </div>
            <span className="text-[10px] text-gray uppercase tracking-widest font-mono block">
              Fig. 9.1: Medidas físicas mínimas para producción industrial
            </span>
          </div>
        </div>

        <div className="border-t border-sky/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>PAUTAS DE REPRODUCCIÓN</span>
          <span>REDUCCIÓN TÉCNICA</span>
        </div>
      </div>
    </SlideShell>
  );
};
