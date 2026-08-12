import React from "react";
import { SlideShell } from "../components/SlideShell";

export const Tipos: React.FC = () => {
  return (
    <SlideShell id="tipos" n={11} title="Tipografía Institucional" kind="texto" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Specimen Description */}
          <div className="md:col-span-5 text-left space-y-4">
            <h3 className="text-xl font-bold text-sky font-sans">Raleway Google Font</h3>
            <p className="text-sm text-slate-200 font-normal leading-relaxed">
              La familia tipográfica institucional elegida para ALPACLADD es <strong className="text-white">Raleway</strong>, una tipografía de estilo Sans-Serif geométrica, moderna y de trazado limpio.
            </p>
            <p className="text-sm text-slate-200 font-normal leading-relaxed">
              Se seleccionó por su neutralidad técnica y su excelente legibilidad en soportes analógicos (bobinas de hilados, remitos comerciales) y digitales (paneles web, redes sociales).
            </p>
            <div className="border border-sky/20 bg-sky/5 p-4 rounded-lg shadow-sm">
              <h4 className="text-xs font-mono font-bold text-sky uppercase mb-1">REGLAS DE PESOS</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                <strong className="text-white">Bold (700):</strong> Exclusivo para títulos, logotipos y variables numéricas destacadas.<br />
                <strong className="text-white">Regular (400):</strong> Para párrafos descriptivos y datos de fichas técnicas.
              </p>
            </div>
          </div>

          {/* Typographic Visual Specimen */}
          <div className="md:col-span-7 text-left space-y-6 bg-navy/60 border border-sky/20 p-6 rounded-xl relative overflow-hidden shadow-lg">
            <div className="absolute top-3 left-3 text-[9px] font-mono text-slate-300 tracking-wider">
              SPECIMEN BOARD: RALEWAY
            </div>

            {/* Bold Specimen */}
            <div className="border-b border-sky/15 pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-sky font-bold">RALEWAY BOLD (700) — TÍTULOS</span>
                <span className="text-[9px] font-mono text-slate-300">font-weight: 700</span>
              </div>
              <div className="text-3xl font-bold text-off tracking-wider uppercase mb-1">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </div>
              <div className="text-[11px] font-mono text-slate-300">
                0 1 2 3 4 5 6 7 8 9 & % @ # ( ) [ ]
              </div>
            </div>

            {/* Regular Specimen */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-sky font-bold">RALEWAY REGULAR (400) — PÁRRAFO</span>
                <span className="text-[9px] font-mono text-slate-300">font-weight: 400</span>
              </div>
              <div className="text-2xl text-off mb-1 leading-relaxed">
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </div>
              <p className="text-xs text-slate-200 font-normal leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis risus sed justo interdum, id lacinia lectus scelerisque. Proin id pretium lectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
