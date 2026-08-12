import React from "react";
import { SlideShell } from "../components/SlideShell";
import { Target, Compass, ShieldCheck } from "lucide-react";

export const Mision: React.FC = () => {
  return (
    <SlideShell id="mision" n={4} title="Misión, Visión y Valores" kind="tabla" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch my-auto">
          {/* Misión Card */}
          <div className="border border-navy/20 bg-white p-6 rounded-xl flex flex-col justify-between text-left transition-all duration-300 hover:border-blue hover:shadow-xl shadow-sm">
            <div>
              <div className="flex items-center space-x-3 text-blue mb-4">
                <Target className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-wider text-xs font-mono">01 // MISIÓN</h3>
              </div>
              <p className="text-sm text-slate-800 font-normal leading-relaxed">
                Fabricar y proveer hilados premium combinando materias primas ecológicas y tecnología robótica avanzada, garantizando regularidad absoluta en cada partida para potenciar la competitividad de nuestros clientes textiles.
              </p>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-6 border-t border-navy/10 pt-2 font-semibold">
              TARGET: EXCELENCIA TÉCNICA
            </div>
          </div>

          {/* Visión Card */}
          <div className="border border-navy/20 bg-white p-6 rounded-xl flex flex-col justify-between text-left transition-all duration-300 hover:border-blue hover:shadow-xl shadow-sm">
            <div>
              <div className="flex items-center space-x-3 text-blue mb-4">
                <Compass className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-wider text-xs font-mono">02 // VISIÓN</h3>
              </div>
              <p className="text-sm text-slate-800 font-normal leading-relaxed">
                Ser la hilandería de referencia en América Latina hacia 2030, liderando la transición hacia la sostenibilidad material y la automatización industrial, catalogada por nuestros aliados como el eslabón de máxima confianza de su cadena de valor.
              </p>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-6 border-t border-navy/10 pt-2 font-semibold">
              TARGET: LIDERAZGO REGIONAL
            </div>
          </div>

          {/* Valores Card */}
          <div className="border border-navy/20 bg-white p-6 rounded-xl flex flex-col justify-between text-left transition-all duration-300 hover:border-blue hover:shadow-xl shadow-sm">
            <div>
              <div className="flex items-center space-x-3 text-blue mb-4">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-wider text-xs font-mono">03 // VALORES</h3>
              </div>
              <ul className="text-sm text-slate-800 space-y-2 font-normal">
                <li className="flex items-start">
                  <span className="text-blue font-bold mr-2">•</span>
                  <span><strong className="text-navy">Precisión Estructural:</strong> Cero tolerancia a defectos físicos del hilo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue font-bold mr-2">•</span>
                  <span><strong className="text-navy">Sustentabilidad:</strong> Procesos limpios y materiales trazables orgánicos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue font-bold mr-2">•</span>
                  <span><strong className="text-navy">Socio Estratégico:</strong> El cliente B2B es un socio de largo plazo.</span>
                </li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-6 border-t border-navy/10 pt-2 font-semibold">
              TARGET: PILARES CULTURALES
            </div>
          </div>
        </div>

        {/* Blueprint Table Specs */}
        <div className="w-full overflow-x-auto mt-4">
          <table className="w-full text-left text-[11px] font-mono text-slate-600 border-t border-navy/15">
            <thead>
              <tr className="border-b border-navy/15 text-navy font-bold">
                <th className="py-2">PARÁMETRO</th>
                <th className="py-2">MISIÓN</th>
                <th className="py-2">VISIÓN</th>
                <th className="py-2">VALORES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 font-bold text-navy">TIPO DE IMPACTO</td>
                <td>Operativo Diario</td>
                <td>Direccional Largo Plazo</td>
                <td>Criterio de Decisión</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SlideShell>
  );
};
