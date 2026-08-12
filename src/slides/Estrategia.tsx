import React from "react";
import { SlideShell } from "../components/SlideShell";
import { TrendingUp, Users, Leaf } from "lucide-react";

export const Estrategia: React.FC = () => {
  return (
    <SlideShell id="estrategia" n={16} title="Objetivos de Marketing" kind="texto" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-6 my-auto text-left">
          <p className="text-sm md:text-base text-slate-800 font-normal max-w-2xl leading-relaxed">
            Nuestros objetivos de marketing están alineados a consolidar a ALPACLADD como sinónimo de confianza operacional, atrayendo prospectos a través del valor técnico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Objective 1 */}
            <div className="border-l-4 border-blue bg-white p-5 rounded-r-xl border border-navy/10 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-blue">
                <TrendingUp className="w-5 h-5" />
                <h4 className="font-bold text-xs font-mono uppercase tracking-wider">OBJETIVO 1: POSICIONAMIENTO</h4>
              </div>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Lograr un <strong className="text-navy">25% de cuota de menciones</strong> en el segmento de tejedurías premium de indumentaria urbana durante los próximos 12 meses.
              </p>
              <div className="text-[10px] text-slate-600 font-mono bg-navy/5 p-2 rounded-lg border border-navy/5">
                KPI: Encuestas trimestrales de recordación de marca.
              </div>
            </div>

            {/* Objective 2 */}
            <div className="border-l-4 border-blue bg-white p-5 rounded-r-xl border border-navy/10 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-blue">
                <Users className="w-5 h-5" />
                <h4 className="font-bold text-xs font-mono uppercase tracking-wider">OBJETIVO 2: LEAD GENERATION</h4>
              </div>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Incrementar en un <strong className="text-navy">40% las cuentas B2B activas</strong> a través de estrategias de embudo (muestras técnicas gratis para talleres).
              </p>
              <div className="text-[10px] text-slate-600 font-mono bg-navy/5 p-2 rounded-lg border border-navy/5">
                KPI: Tasa de conversión de muestra técnica a orden de compra.
              </div>
            </div>

            {/* Objective 3 */}
            <div className="border-l-4 border-blue bg-white p-5 rounded-r-xl border border-navy/10 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-blue">
                <Leaf className="w-5 h-5" />
                <h4 className="font-bold text-xs font-mono uppercase tracking-wider">OBJETIVO 3: SUSTENTABILIDAD</h4>
              </div>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Colocar <strong className="text-navy">15 toneladas de la nueva línea orgánica y reciclada ECO-SPUN</strong> en grandes talleres industriales en el primer semestre.
              </p>
              <div className="text-[10px] text-slate-600 font-mono bg-navy/5 p-2 rounded-lg border border-navy/5">
                KPI: Toneladas de hilo despachado con certificado GOTS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
