import React from "react";
import { SlideShell } from "../components/SlideShell";
import { TrendingUp, Users, Leaf } from "lucide-react";

export const Estrategia: React.FC = () => {
  return (
    <SlideShell id="estrategia" n={16} title="Objetivos de Marketing" kind="texto" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-6 my-auto text-left">
          <p className="text-sm md:text-base text-gray font-light max-w-2xl">
            Nuestros objetivos de marketing están alineados a consolidar a ALPACLADD como sinónimo de confianza operacional, atrayendo prospectos a través del valor técnico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Objective 1 */}
            <div className="border-l-4 border-blue bg-navy/[0.02] p-5 rounded-r space-y-3">
              <div className="flex items-center space-x-2 text-blue">
                <TrendingUp className="w-5 h-5" />
                <h4 className="font-bold text-xs font-mono uppercase tracking-wider">OBJETIVO 1: POSICIONAMIENTO</h4>
              </div>
              <p className="text-sm text-navy/80 font-light">
                Lograr un <strong>25% de cuota de menciones</strong> en el segmento de tejedurías premium de indumentaria urbana durante los próximos 12 meses.
              </p>
              <div className="text-[10px] text-gray font-mono bg-navy/5 p-2 rounded">
                KPI: Encuestas trimestrales de recordación de marca.
              </div>
            </div>

            {/* Objective 2 */}
            <div className="border-l-4 border-blue bg-navy/[0.02] p-5 rounded-r space-y-3">
              <div className="flex items-center space-x-2 text-blue">
                <Users className="w-5 h-5" />
                <h4 className="font-bold text-xs font-mono uppercase tracking-wider">OBJETIVO 2: LEAD GENERATION</h4>
              </div>
              <p className="text-sm text-navy/80 font-light">
                Incrementar en un <strong>40% las cuentas B2B activas</strong> a través de estrategias de embudo (muestras técnicas gratis para talleres).
              </p>
              <div className="text-[10px] text-gray font-mono bg-navy/5 p-2 rounded">
                KPI: Tasa de conversión de muestra técnica a orden de compra.
              </div>
            </div>

            {/* Objective 3 */}
            <div className="border-l-4 border-blue bg-navy/[0.02] p-5 rounded-r space-y-3">
              <div className="flex items-center space-x-2 text-blue">
                <Leaf className="w-5 h-5" />
                <h4 className="font-bold text-xs font-mono uppercase tracking-wider">OBJETIVO 3: SUSTENTABILIDAD</h4>
              </div>
              <p className="text-sm text-navy/80 font-light">
                Colocar <strong>15 toneladas de la nueva línea orgánica y reciclada ECO-SPUN</strong> en grandes talleres industriales en el primer semestre.
              </p>
              <div className="text-[10px] text-gray font-mono bg-navy/5 p-2 rounded">
                KPI: Toneladas de hilo despachado con certificado GOTS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
