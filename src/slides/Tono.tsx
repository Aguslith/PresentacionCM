import React from "react";
import { SlideShell } from "../components/SlideShell";

export const Tono: React.FC = () => {
  return (
    <SlideShell id="tono" n={17} title="Personalidad y Tono de Voz" kind="texto" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Left info */}
          <div className="md:col-span-5 text-left space-y-4">
            <h3 className="text-xl font-bold text-sky">Sobriedad didáctica y precisión técnica</h3>
            <p className="text-sm text-slate-200 font-normal leading-relaxed">
              La voz de ALPACLADD no adorna; describe con rigurosidad y comparte el saber hacer de la industria. Nos comunicamos como ingenieros textiles apasionados por la perfección.
            </p>
            <div className="border border-sky/20 bg-sky/5 p-4 rounded-lg shadow-sm">
              <h4 className="text-xs font-mono font-bold text-sky uppercase mb-2">QUÉ SOMOS / QUÉ NO SOMOS</h4>
              <ul className="text-xs text-slate-200 space-y-1.5 font-mono">
                <li>• <strong className="text-white">Somos exactos</strong>, no pretenciosos.</li>
                <li>• <strong className="text-white">Somos modernos</strong>, no superficiales.</li>
                <li>• <strong className="text-white">Somos colaborativos</strong>, no arrogantes.</li>
              </ul>
            </div>
          </div>

          {/* Right interactive scale vectors */}
          <div className="md:col-span-7 space-y-6 text-left">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">VECTORES DE COMUNICACIÓN</h4>

            {/* Scale 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-semibold">
                <span className="text-sky">TÉCNICO / CIENTÍFICO</span>
                <span className="text-slate-400">LÍRICO / POÉTICO</span>
              </div>
              <div className="relative w-full h-[6px] bg-navy/80 border border-sky/30 rounded-full">
                <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-3 h-3 rounded-full bg-sky shadow-[0_0_8px_#5fa8d3]" />
              </div>
              <div className="text-[11px] text-slate-300 font-normal">
                Priorizamos datos técnicos, números de título (30s, 24/2), torsión por metro y origen de la fibra.
              </div>
            </div>

            {/* Scale 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-semibold">
                <span className="text-sky">DIDÁCTICO / EDUCATIVO</span>
                <span className="text-slate-400">NETAMENTE TRANSACCIONAL</span>
              </div>
              <div className="relative w-full h-[6px] bg-navy/80 border border-sky/30 rounded-full">
                <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-3 h-3 rounded-full bg-sky shadow-[0_0_8px_#5fa8d3]" />
              </div>
              <div className="text-[11px] text-slate-300 font-normal">
                Explicamos el proceso de peinado, purgado y bobinado para justificar el valor premium de nuestros hilados.
              </div>
            </div>

            {/* Scale 3 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-semibold">
                <span className="text-sky">CORPORATIVO B2B</span>
                <span className="text-slate-400">INFORMAL CONSUMIDOR FINAL</span>
              </div>
              <div className="relative w-full h-[6px] bg-navy/80 border border-sky/30 rounded-full">
                <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-3 h-3 rounded-full bg-sky shadow-[0_0_8px_#5fa8d3]" />
              </div>
              <div className="text-[11px] text-slate-300 font-normal">
                Mantenemos una interlocución directa con directores de compras y jefes de producción de marcas de indumentaria.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
