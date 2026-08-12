import React from "react";
import { SlideShell } from "../components/SlideShell";
import { X, AlertTriangle } from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

export const Incorrectos: React.FC = () => {
  const incorrectCases = [
    {
      id: "01",
      title: "DEFORMACIÓN",
      subtitle: "Alteración de escala",
      desc: "Prohibido comprimir, estirar o modificar la relación de aspecto del imagotipo.",
      renderPreview: () => (
        <div className="transform scale-x-[1.65] scale-y-[0.65] select-none">
          <BrandLogo variant="horizontal" theme="light" size="sm" showTagline={false} />
        </div>
      ),
    },
    {
      id: "02",
      title: "ROTACIÓN",
      subtitle: "Ángulo no autorizado",
      desc: "El identificador debe colocarse siempre en posición horizontal a 0°.",
      renderPreview: () => (
        <div className="transform -rotate-[18deg] select-none">
          <BrandLogo variant="horizontal" theme="light" size="sm" showTagline={false} />
        </div>
      ),
    },
    {
      id: "03",
      title: "COLOR NO OFICIAL",
      subtitle: "Alteración cromática",
      desc: "No aplicar degradados ajenos ni colores fuera de la paleta institucional (Navy, Sky, Blanco).",
      renderPreview: () => (
        <div className="select-none filter hue-rotate-[130deg] saturate-200 contrast-125">
          <BrandLogo variant="horizontal" theme="light" size="sm" showTagline={false} />
        </div>
      ),
    },
    {
      id: "04",
      title: "DESPROPORCIÓN",
      subtitle: "Cambio de jerarquía",
      desc: "No alterar la escala relativa, distancia ni alineación entre el isotipo y el logotipo.",
      renderPreview: () => (
        <div className="flex items-center space-x-1 select-none">
          <img src="/logotipo.png" alt="Isotipo" className="w-16 h-16 object-contain" />
          <span className="text-[7px] text-navy font-bold tracking-widest uppercase font-sans">ALPACLADD</span>
        </div>
      ),
    },
  ];

  return (
    <SlideShell id="incorrectos" n={13} title="Usos Incorrectos" kind="galeria" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-5 my-auto max-w-6xl mx-auto w-full">
          {/* Header intro note */}
          <div className="flex items-center justify-between border-b border-sky/15 pb-3">
            <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed text-left">
              Para garantizar la coherencia y el valor de la identidad visual de <strong className="text-off font-semibold">ALPACLADD</strong>, queda estrictamente prohibida cualquier modificación morfológica o cromática.
            </p>
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] font-mono font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>4 REGLAS BÁSICAS</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {incorrectCases.map((item) => (
              <div
                key={item.id}
                className="bg-navy/70 border border-slate-700/60 hover:border-rose-500/50 rounded-xl p-3 sm:p-4 flex flex-col justify-between space-y-3 transition-all duration-300 shadow-lg group hover:shadow-rose-500/10 relative overflow-hidden"
              >
                {/* Preview Window (High-contrast canvas with subtle grid) */}
                <div className="relative w-full h-32 sm:h-36 bg-gradient-to-b from-white to-slate-50 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden shadow-inner p-2">
                  {/* Subtle technical background grid */}
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  {/* Logo violation preview */}
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    {item.renderPreview()}
                  </div>

                  {/* Prominent Red Prohibition Stamp / Badge */}
                  <div className="absolute top-2 right-2 z-20 flex items-center space-x-1 bg-rose-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shadow-md">
                    <X className="w-3 h-3 stroke-[3]" />
                    <span>NO</span>
                  </div>

                  {/* Diagonal subtle prohibition line */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-full h-[1.5px] bg-rose-500/30 -rotate-45 transform origin-center" />
                  </div>
                </div>

                {/* Explanation text */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-rose-400 tracking-wider">
                      {item.id} // {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-normal leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
