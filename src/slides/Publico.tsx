import React from "react";
import { SlideShell } from "../components/SlideShell";

export const Publico: React.FC = () => {
  return (
    <SlideShell id="publico" n={15} title="Público Objetivo B2B" kind="tabla" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-4">
          <p className="text-sm md:text-base text-slate-200 text-left font-normal max-w-3xl leading-relaxed">
            Abordamos el mercado B2B segmentando según el uso de la materia prima y los dolores específicos del proceso productivo textil. Nuestra propuesta mitiga directamente los fallos en máquina.
          </p>

          {/* Technical B2B Segment Table */}
          <div className="w-full overflow-hidden rounded-xl border border-sky/25 bg-navy/60 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs md:text-sm font-normal text-slate-100">
              <thead>
                <tr className="border-b border-sky/25 bg-sky/10 font-mono text-[11px] text-sky tracking-wider font-bold">
                  <th className="p-3.5 uppercase">Segmento</th>
                  <th className="p-3.5 uppercase">Buyer Persona</th>
                  <th className="p-3.5 uppercase">Puntos de Dolor (Pains)</th>
                  <th className="p-3.5 uppercase">Solución ALPACLADD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky/15">
                <tr className="hover:bg-sky/10 transition-colors duration-200">
                  <td className="p-3.5 font-bold text-white">Tejedurías Industriales</td>
                  <td className="p-3.5 font-mono text-[11px] text-slate-300">Dir. Operaciones / Compras</td>
                  <td className="p-3.5 text-slate-200">Roturas de hilo frecuentes que detienen telares circulares y rectilíneos.</td>
                  <td className="p-3.5 text-sky font-medium">Hilado purificado electrónicamente con alta resistencia a la tracción constante.</td>
                </tr>
                <tr className="hover:bg-sky/10 transition-colors duration-200">
                  <td className="p-3.5 font-bold text-white">Marcas de Moda Premium</td>
                  <td className="p-3.5 font-mono text-[11px] text-slate-300">Diseñador Jefe / Calidad</td>
                  <td className="p-3.5 text-slate-200">Pilling en prendas finales, irregularidad del color e inconsistencia de lotes.</td>
                  <td className="p-3.5 text-sky font-medium">Uso de fibras largas (peinado) y procesos de tintura homologados con espectrofotómetro.</td>
                </tr>
                <tr className="hover:bg-sky/10 transition-colors duration-200">
                  <td className="p-3.5 font-bold text-white">Talleres de Bordado y Confección</td>
                  <td className="p-3.5 font-mono text-[11px] text-slate-300">Jefe de Taller</td>
                  <td className="p-3.5 text-slate-200">Enhebrado deficiente, deshilachado y variación de espesor de hilo.</td>
                  <td className="p-3.5 text-sky font-medium">Hilados lisos gaseados con terminación suave (libre de vellosidades) y calibre constante.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
