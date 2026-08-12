import React from "react";
import { SlideShell } from "../components/SlideShell";

export const Publico: React.FC = () => {
  return (
    <SlideShell id="publico" n={15} title="Público Objetivo B2B" kind="tabla" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray text-left font-light max-w-3xl">
            Abordamos el mercado B2B segmentando según el uso de la materia prima y los dolores específicos del proceso productivo textil. Nuestra propuesta mitiga directamente los fallos en máquina.
          </p>

          {/* Technical B2B Segment Table */}
          <div className="w-full overflow-hidden rounded-lg border border-sky/15 bg-navy/40 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs md:text-sm font-light text-off/80">
              <thead>
                <tr className="border-b border-sky/20 bg-sky/5 font-mono text-[10px] text-sky tracking-wider">
                  <th className="p-3 uppercase">Segmento</th>
                  <th className="p-3 uppercase">Buyer Persona</th>
                  <th className="p-3 uppercase">Puntos de Dolor (Pains)</th>
                  <th className="p-3 uppercase">Solución ALPACLADD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky/10">
                <tr className="hover:bg-sky/5 transition-colors duration-200">
                  <td className="p-3 font-semibold text-off">Tejedurías Industriales</td>
                  <td className="p-3 font-mono text-[11px]">Dir. Operaciones / Compras</td>
                  <td className="p-3 text-gray">Roturas de hilo frecuentes que detienen telares circulares y rectilíneos.</td>
                  <td className="p-3 text-sky/90">Hilado purificado electrónicamente con alta resistencia a la tracción constante.</td>
                </tr>
                <tr className="hover:bg-sky/5 transition-colors duration-200">
                  <td className="p-3 font-semibold text-off">Marcas de Moda Premium</td>
                  <td className="p-3 font-mono text-[11px]">Diseñador Jefe / Calidad</td>
                  <td className="p-3 text-gray">Pilling en prendas finales, irregularidad del color e inconsistencia de lotes.</td>
                  <td className="p-3 text-sky/90">Uso de fibras largas (peinado) y procesos de tintura homologados con espectrofotómetro.</td>
                </tr>
                <tr className="hover:bg-sky/5 transition-colors duration-200">
                  <td className="p-3 font-semibold text-off">Talleres de Bordado y Confección</td>
                  <td className="p-3 font-mono text-[11px]">Jefe de Taller</td>
                  <td className="p-3 text-gray">Enhebrado deficiente, deshilachado y variación de espesor de hilo.</td>
                  <td className="p-3 text-sky/90">Hilados lisos gaseados con terminación suave (libre de vellosidades) y calibre constante.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
