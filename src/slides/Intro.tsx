import React from "react";
import { SlideShell } from "../components/SlideShell";

export const Intro: React.FC = () => {
  return (
    <SlideShell id="intro" n={2} title="Introducción" kind="texto" bgType="off">
      <div className="h-full flex flex-col justify-between py-4">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Paragraph */}
          <div className="md:col-span-7 space-y-6 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-navy tracking-wide">
              Hilados de ingeniería para la industria del futuro.
            </h3>
            <p className="text-sm md:text-base text-gray font-light leading-relaxed">
              ALPACLADD nace para redefinir el estándar en la producción de hilados de alta calidad. Combinando materias primas naturales seleccionadas (algodón, lana, alpaca) y fibras sintéticas avanzadas, abastecemos a marcas y fábricas textiles con productos caracterizados por su regularidad, resistencia y torsión óptimas.
            </p>
            <p className="text-sm md:text-base text-gray font-light leading-relaxed">
              Nuestra planta industrial cuenta con maquinaria europea de última generación, permitiendo controles electrónicos purificadores en tiempo real. Esta presentación expone tanto la identidad visual de la marca como las estrategias de marketing diseñadas para captar el segmento B2B premium.
            </p>
          </div>

          {/* Highlights Sidebar */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="border border-navy/10 bg-navy/5 p-4 rounded-lg text-left">
              <span className="block text-2xl font-bold text-blue font-mono">100%</span>
              <span className="block text-[10px] text-gray uppercase tracking-widest font-mono mt-1">Control de Calidad</span>
              <span className="text-[11px] text-gray/80 mt-1 block">Purificadores ópticos en coneras automáticas.</span>
            </div>
            <div className="border border-navy/10 bg-navy/5 p-4 rounded-lg text-left">
              <span className="block text-2xl font-bold text-blue font-mono">B2B</span>
              <span className="block text-[10px] text-gray uppercase tracking-widest font-mono mt-1">Foco de Mercado</span>
              <span className="text-[11px] text-gray/80 mt-1 block">Distribución a hilanderías, tejedurías y confeccionistas.</span>
            </div>
            <div className="border border-navy/10 bg-navy/5 p-4 rounded-lg text-left">
              <span className="block text-2xl font-bold text-blue font-mono">RALWAY</span>
              <span className="block text-[10px] text-gray uppercase tracking-widest font-mono mt-1">Tipografía Base</span>
              <span className="text-[11px] text-gray/80 mt-1 block">Raleway Regular/Bold asegura sobriedad técnica.</span>
            </div>
            <div className="border border-navy/10 bg-navy/5 p-4 rounded-lg text-left">
              <span className="block text-2xl font-bold text-blue font-mono">23</span>
              <span className="block text-[10px] text-gray uppercase tracking-widest font-mono mt-1">Puntos Clave</span>
              <span className="text-[11px] text-gray/80 mt-1 block">Estrategia y manual integrados en un único recorrido.</span>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
