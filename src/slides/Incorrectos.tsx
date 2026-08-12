import React from "react";
import { SlideShell } from "../components/SlideShell";
import { XCircle } from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

export const Incorrectos: React.FC = () => {
  return (
    <SlideShell id="incorrectos" n={13} title="Usos Incorrectos" kind="galeria" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-4 my-auto">
          <p className="text-sm text-gray text-left font-light max-w-3xl mx-auto">
            Para mantener la integridad y el valor de marca institucional, queda terminantemente prohibida cualquier alteración de la morfología, ángulos, proporciones o colores del imagotipo ALPACLADD.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            {/* Incorrect 1: Deformacion */}
            <div className="bg-navy/40 border border-red-500/20 p-2.5 sm:p-4 rounded-xl flex flex-col justify-between h-40 sm:h-48 md:h-52 relative overflow-hidden group hover:border-red-500/40 transition-colors">
              <div className="absolute top-2 right-2 text-red-400">
                <XCircle className="w-4 h-4" />
              </div>
              <div className="flex-grow flex items-center justify-center bg-navy/60 border border-dashed border-red-500/15 rounded-lg p-2 overflow-hidden">
                {/* Stretched logo */}
                <div className="transform scale-x-150 scale-y-75 select-none">
                  <BrandLogo
                    variant="horizontal"
                    theme="navy"
                    size="xs"
                    showTagline={false}
                  />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-[9px] font-mono text-red-400 font-bold block">01 // DEFORMACIÓN</span>
                <span className="text-[9px] text-gray/80 font-light leading-tight block mt-0.5">
                  Prohibido estirar o comprimir las proporciones del imagotipo.
                </span>
              </div>
            </div>

            {/* Incorrect 2: Rotacion */}
            <div className="bg-navy/40 border border-red-500/20 p-2.5 sm:p-4 rounded-xl flex flex-col justify-between h-40 sm:h-48 md:h-52 relative overflow-hidden group hover:border-red-500/40 transition-colors">
              <div className="absolute top-2 right-2 text-red-400">
                <XCircle className="w-4 h-4" />
              </div>
              <div className="flex-grow flex items-center justify-center bg-navy/60 border border-dashed border-red-500/15 rounded-lg p-2 overflow-hidden">
                {/* Rotated logo */}
                <div className="transform rotate-12 select-none">
                  <BrandLogo
                    variant="horizontal"
                    theme="navy"
                    size="xs"
                    showTagline={false}
                  />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-[9px] font-mono text-red-400 font-bold block">02 // ROTACIÓN</span>
                <span className="text-[9px] text-gray/80 font-light leading-tight block mt-0.5">
                  El logo debe aplicarse siempre a 0°, nunca en ángulo oblicuo.
                </span>
              </div>
            </div>

            {/* Incorrect 3: Colores incorrectos */}
            <div className="bg-navy/40 border border-red-500/20 p-2.5 sm:p-4 rounded-xl flex flex-col justify-between h-40 sm:h-48 md:h-52 relative overflow-hidden group hover:border-red-500/40 transition-colors">
              <div className="absolute top-2 right-2 text-red-400">
                <XCircle className="w-4 h-4" />
              </div>
              <div className="flex-grow flex items-center justify-center bg-navy/60 border border-dashed border-red-500/15 rounded-lg p-2 overflow-hidden">
                {/* Incorrect colors (Hue rotated to neon magenta) */}
                <div className="select-none filter hue-rotate-[140deg] contrast-150">
                  <BrandLogo
                    variant="horizontal"
                    theme="navy"
                    size="xs"
                    showTagline={false}
                  />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-[9px] font-mono text-red-400 font-bold block">03 // COLOR NO OFICIAL</span>
                <span className="text-[9px] text-gray/80 font-light leading-tight block mt-0.5">
                  Prohibido alterar la paleta cromática o aplicar degradés ajenos.
                </span>
              </div>
            </div>

            {/* Incorrect 4: Alteracion */}
            <div className="bg-navy/40 border border-red-500/20 p-2.5 sm:p-4 rounded-xl flex flex-col justify-between h-40 sm:h-48 md:h-52 relative overflow-hidden group hover:border-red-500/40 transition-colors">
              <div className="absolute top-2 right-2 text-red-400">
                <XCircle className="w-4 h-4" />
              </div>
              <div className="flex-grow flex items-center justify-center bg-navy/60 border border-dashed border-red-500/15 rounded-lg p-2 overflow-hidden">
                {/* Replaced positions / sizing */}
                <div className="flex items-center space-x-1 select-none">
                  <img src="/logotipo.png" alt="Isotipo" className="w-12 h-12 object-contain" />
                  <span className="text-[6px] text-off font-sans font-bold">ALPACLADD</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-[9px] font-mono text-red-400 font-bold block">04 // DESPROPORCIÓN</span>
                <span className="text-[9px] text-gray/80 font-light leading-tight block mt-0.5">
                  No alterar la escala relativa entre el isotipo y el logotipo.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>PAUTAS DE REPRODUCCIÓN</span>
          <span>ERRORES DE APLICACIÓN</span>
        </div>
      </div>
    </SlideShell>
  );
};
