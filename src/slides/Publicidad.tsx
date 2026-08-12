import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence } from "framer-motion";

type AdCampaignType = "muestras" | "tecnologia" | "retargeting";

export const Publicidad: React.FC = () => {
  const [activeAd, setActiveAd] = useState<AdCampaignType>("muestras");

  const campaigns = {
    muestras: {
      tag: "CAMPAÑA 01 // LEAD GENERATION (TOFU)",
      title: "Muestra Técnica Gratuita 1kg",
      objective: "Generación de clientes potenciales calificados (Directores de compras y jefes de taller).",
      channel: "Meta Ads (Instagram Feed & Reels) + LinkedIn Sponsored Content",
      headline: "¿Paradas de máquina por hilos con impurezas? Pedí 1kg de muestra sin cargo.",
      copy: "Enviamos una bobina de hilado peinado título 30/1 a tu taller para que compruebes la regularidad en tus propios telares circulares. Cero costo, máxima confianza operacional.",
      cta: "Solicitar Muestra Gratis",
      kpis: [
        { label: "CPL Estimado", value: "$2.10 USD" },
        { label: "CTR Esperado", value: "3.4%" },
        { label: "Conv. Muestra a Orden", value: "38%" },
      ],
      adPreview: (
        <div className="w-full bg-navy text-off p-5 rounded-xl border border-sky/20 shadow-xl space-y-3 text-left">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-navy border border-sky/40 flex items-center justify-center overflow-hidden p-1 shrink-0 shadow">
              <img src="/logotipo.png" alt="ALPACLADD" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xs font-bold font-mono text-off block">alpacladd.hilados</span>
              <span className="text-[9px] text-gray font-mono">Publicidad • Patrocinado</span>
            </div>
          </div>

          <p className="text-xs text-off/90 font-light leading-relaxed">
            🧵 ¿Cansado del pilling y las roturas en telar? Descubrí la regularidad milimétrica de nuestros hilados peinados con purgado electrónico.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-navy/80 border border-sky/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/60 to-transparent" />
            <div className="relative z-10 text-center p-4">
              <span className="text-[8px] font-mono text-sky tracking-[0.2em] uppercase block mb-1">PROGRAMA DE TESTEO INDUSTRIAL</span>
              <h4 className="text-base font-bold text-white uppercase tracking-wider">MUESTRA TÉCNICA 1KG SIN CARGO</h4>
              <span className="text-[10px] text-sky/90 font-mono mt-1 block">Para talleres y confeccionistas B2B</span>
            </div>
          </div>

          <div className="flex justify-between items-center bg-navy/90 border border-sky/15 p-2.5 rounded-lg">
            <div>
              <span className="text-[8px] font-mono text-gray block uppercase">ALPACLADD.COM/MUESTRAS</span>
              <span className="text-[11px] font-bold text-off uppercase font-mono">Prueba de Torsión en Máquina</span>
            </div>
            <button className="py-1.5 px-3 bg-sky text-navy text-[10px] font-bold font-mono uppercase rounded hover:bg-white transition-colors">
              Registrarme
            </button>
          </div>
        </div>
      ),
    },
    tecnologia: {
      tag: "CAMPAÑA 02 // BRAND AWARENESS TÉCNICO (MOFU)",
      title: "Tecnología Savio & Cero Neps",
      objective: "Educar a la industria sobre la superioridad técnica del purgado óptico suizo.",
      channel: "Meta Ads (Instagram Video Reels 9:16)",
      headline: "Así detectamos una falla de 0.2mm a 12,000 RPM.",
      copy: "Nuestras coneras automáticas cortan impurezas en milisegundos con splicer de aire. Menos nudos, mayor productividad en telar rectilíneo.",
      cta: "Ver Ficha de Calidad",
      kpis: [
        { label: "Costo por Vista (CPV)", value: "$0.02 USD" },
        { label: "Tasa de Retención Video", value: "62%" },
        { label: "Engagement Rate", value: "4.8%" },
      ],
      adPreview: (
        <div className="w-full bg-slate-900 text-off p-5 rounded-xl border border-blue/40 shadow-xl space-y-3 text-left">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-slate-950 border border-blue/40 flex items-center justify-center overflow-hidden p-1 shrink-0 shadow">
              <img src="/logotipo.png" alt="ALPACLADD" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xs font-bold font-mono text-off block">alpacladd.hilados</span>
              <span className="text-[9px] text-gray font-mono">Publicidad • Video Reel</span>
            </div>
          </div>

          <p className="text-xs text-off/90 font-light leading-relaxed">
            ⚡ Precisión que no se detiene. Mirá cómo el sensor infrarrojo purifica cada metro de hilo antes de ser embobinado.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-navy/90 border border-blue/30 flex items-center justify-center p-4">
            <div className="text-center space-y-2">
              <span className="text-[8px] font-mono text-sky tracking-widest uppercase">LABORATORIO ÓPTICO</span>
              <div className="text-sm font-bold font-mono text-white">REDUCCIÓN DEL 98% EN IMPUREZAS</div>
              <div className="inline-block py-1 px-2.5 bg-blue/20 border border-blue/40 rounded text-[9px] font-mono text-sky">
                CONERA SAVIO ECO-SPINDLE
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center bg-navy/90 border border-blue/20 p-2.5 rounded-lg">
            <div>
              <span className="text-[8px] font-mono text-gray block uppercase">ALPACLADD.COM/TECNOLOGIA</span>
              <span className="text-[11px] font-bold text-off uppercase font-mono">Reporte de Laboratorio ISO</span>
            </div>
            <button className="py-1.5 px-3 bg-blue text-white text-[10px] font-bold font-mono uppercase rounded hover:bg-sky transition-colors">
              Descargar PDF
            </button>
          </div>
        </div>
      ),
    },
    retargeting: {
      tag: "CAMPAÑA 03 // RETARGETING DE CIERRE (BOFU)",
      title: "Garantía de Lotes Homologados",
      objective: "Convertir visitas web y solicitantes de muestras en clientes con contratos anuales.",
      channel: "LinkedIn Ads + Meta Retargeting (Público personalizado)",
      headline: "Estabilidad de lote garantizada por espectrofotometría.",
      copy: "¿Tu proveedor actual cambia el tono entre partidas? En ALPACLADD garantizamos Delta-E menor a 0.5 en todas las tinturas y calibres.",
      cta: "Cotizar Partida B2B",
      kpis: [
        { label: "ROAS Estimado", value: "8.5x" },
        { label: "Costo por Conversión", value: "$18.50 USD" },
        { label: "Ticket Promedio", value: "$4,200 USD" },
      ],
      adPreview: (
        <div className="w-full bg-white text-navy p-5 rounded-xl border border-navy/15 shadow-xl space-y-3 text-left">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-[#0D1D34] border border-navy/30 flex items-center justify-center overflow-hidden p-1 shrink-0 shadow">
              <img src="/logotipo.png" alt="ALPACLADD" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xs font-bold font-mono text-navy block">ALPACLADD Hilados</span>
              <span className="text-[9px] text-gray font-mono">Promocionado • LinkedIn B2B</span>
            </div>
          </div>

          <p className="text-xs text-navy/80 font-light leading-relaxed">
            🏭 Abastecimiento continuo para talleres de confección y marcas consolidadas. Cotizá tu partida con condiciones comerciales a 30/60 días.
          </p>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-navy p-4 flex flex-col justify-center text-center text-white">
            <span className="text-[8px] font-mono text-sky tracking-[0.2em] uppercase">CONFIANZA OPERACIONAL</span>
            <div className="text-base font-bold uppercase mt-1">LOTES CERTIFICADOS SIN VARIACIÓN</div>
            <span className="text-[9px] text-gray font-mono mt-1">Garantía de reposición en 48hs</span>
          </div>

          <div className="flex justify-between items-center bg-navy/5 border border-navy/10 p-2.5 rounded-lg">
            <div>
              <span className="text-[8px] font-mono text-gray block uppercase">ALPACLADD.COM/COTIZADOR</span>
              <span className="text-[11px] font-bold text-navy uppercase font-mono">Lista de Precios Mayoristas</span>
            </div>
            <button className="py-1.5 px-3 bg-navy text-white text-[10px] font-bold font-mono uppercase rounded hover:bg-blue transition-colors">
              Cotizar Ahora
            </button>
          </div>
        </div>
      ),
    },
  };

  const currentCamp = campaigns[activeAd];

  return (
    <SlideShell id="publicidad" n={23} title="Publicidad y Paid Media B2B" kind="social" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Strategy Details Column */}
          <div className="md:col-span-6 text-left space-y-4">
            <p className="text-xs md:text-sm text-gray font-light leading-relaxed">
              Estrategia de <strong>Paid Media B2B</strong> diseñada con un embudo de 3 etapas en Meta Ads y LinkedIn para captar directores de producción y confeccionistas textiles.
            </p>

            {/* Campaign Selector Buttons */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-gray uppercase tracking-widest block">ETAPAS DEL EMBUDO PUBLICITARIO</span>
              <div className="grid grid-cols-3 gap-2">
                {(["muestras", "tecnologia", "retargeting"] as AdCampaignType[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveAd(c)}
                    className={`py-2 px-1.5 text-[9px] font-mono uppercase tracking-wider rounded border transition-all duration-300 ${
                      activeAd === c
                        ? "bg-blue border-blue text-white shadow-md"
                        : "bg-navy/5 border-navy/10 text-gray hover:border-blue/40"
                    }`}
                  >
                    {c === "muestras" && "01. Muestras (TOFU)"}
                    {c === "tecnologia" && "02. Tecnología (MOFU)"}
                    {c === "retargeting" && "03. Cierre (BOFU)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Campaign Breakdown Info Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAd}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="border border-navy/15 bg-white p-4 rounded-xl shadow-sm space-y-3"
              >
                <div className="flex justify-between items-center text-[9px] font-mono border-b border-navy/10 pb-1.5">
                  <span className="font-bold text-blue uppercase">{currentCamp.tag}</span>
                  <span className="text-gray">{currentCamp.channel}</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy uppercase font-sans">
                    {currentCamp.title}
                  </h4>
                  <p className="text-xs text-gray font-light mt-1 leading-relaxed">
                    {currentCamp.objective}
                  </p>
                </div>

                {/* KPIs Row */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-navy/10">
                  {currentCamp.kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-navy/5 p-2 rounded text-center">
                      <span className="block text-[8px] font-mono text-gray uppercase tracking-wider">{kpi.label}</span>
                      <span className="text-xs font-bold font-mono text-blue mt-0.5 block">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Ad Mockup Interactive Preview Column */}
          <div className="md:col-span-6 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAd}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm"
              >
                {currentCamp.adPreview}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
