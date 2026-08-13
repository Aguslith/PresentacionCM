import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
  Layers,
  ThumbsUp,
  Share2,
} from "lucide-react";

type FunnelStage = "tofu" | "mofu" | "bofu";

export const Publicidad: React.FC = () => {
  const [activeStage, setActiveStage] = useState<FunnelStage>("tofu");
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const funnelData = {
    tofu: {
      stageNum: "01",
      stageName: "TOFU // ATRACCIÓN & LEADS",
      platform: "Meta Ads (Instagram Feed)",
      title: "Campaña Muestra Técnica 1kg Sin Cargo",
      badgeColor: "bg-sky text-navy",
      objective: "Generar prospectos calificados (Jefes de Taller, Diseñadores y Dueños de Marcas) eliminando la barrera de prueba.",
      kpis: [
        { label: "CPL Estimado", value: "$2.10 USD", desc: "Costo por lead calificado" },
        { label: "CTR Esperado", value: "3.85%", desc: "Tasa de clics en anuncio" },
        { label: "Conv. Muestra a Pedido", value: "42%", desc: "Cierre comercial post-prueba" },
      ],
      insights: [
        "Segmentación por intereses: Fabricación textil, Confección B2B, Telar circular, Tejido de punto.",
        "Oferta irresistible: Envío de bobina técnica peinada 30/1 para testeo en máquina propia.",
        "Formulario instantáneo de Meta integrado con WhatsApp Business para contacto en < 15 min.",
      ],
    },
    mofu: {
      stageNum: "02",
      stageName: "MOFU // CONSIDERACIÓN TÉCNICA",
      platform: "LinkedIn Ads B2B",
      title: "Campaña de Autoridad & Tecnología Savio",
      badgeColor: "bg-blue-500 text-white",
      objective: "Demostrar superioridad técnica operacional frente a hilanderías tradicionales sin control óptico.",
      kpis: [
        { label: "CPV Promedio", value: "$0.03 USD", desc: "Costo por visualización" },
        { label: "Tasa de Finalización", value: "58%", desc: "Video técnico de 20s" },
        { label: "Descargas de Ficha", value: "+340/mes", desc: "Reportes Uster descargados" },
      ],
      insights: [
        "Segmentación por cargos: Gerentes de Planta, Directores de Operaciones, Ingenieros Textiles.",
        "Contenido de valor: Demostración de purgado óptico infrarrojo (reducción del 98% en nudos).",
        "Lead Magnet: Descarga de Ficha Técnica Homologada con tolerancias de dinamometría.",
      ],
    },
    bofu: {
      stageNum: "03",
      stageName: "BOFU // CIERRE & RETARGETING",
      platform: "Meta Ads & LinkedIn Retargeting",
      title: "Campaña Garantía de Partida Homologada",
      badgeColor: "bg-emerald-500 text-white",
      objective: "Convertir visitas a la web y solicitantes de muestras en clientes con contratos de abastecimiento continuo.",
      kpis: [
        { label: "ROAS Estimado", value: "9.2x", desc: "Retorno de inversión publicitaria" },
        { label: "Costo por Adquisición", value: "$16.40 USD", desc: "Costo por cliente cerrado" },
        { label: "Ticket Promedio B2B", value: "$4,500 USD", desc: "Orden inicial de producción" },
      ],
      insights: [
        "Público personalizado: Visitantes del catálogo, usuarios que interactuaron con el Reel y receptores de muestra.",
        "Garantía comercial: Despacho prioritario en 48hs y compensación ante variación de tonalidad (Delta-E < 0.5).",
        "CTA directo a cotizador con condiciones de pago a 30/60 días para cuentas corrientes.",
      ],
    },
  };

  const current = funnelData[activeStage];

  return (
    <SlideShell id="publicidad" n={22} title="Publicidad y Paid Media B2B" kind="social" bgType="navy">
      <div className="h-full flex flex-col justify-between py-1">
        <div className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Funnel Strategy & Live KPIs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-4">
            
            {/* Funnel Stage Selector Tabs */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-sky font-bold tracking-widest uppercase flex items-center space-x-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>EMBUDO PUBLICITARIO B2B</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Pauta Segmentada</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(["tofu", "mofu", "bofu"] as FunnelStage[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => setActiveStage(st)}
                    className={`py-2 px-2 rounded-xl text-[10px] font-sans font-bold border transition-all duration-200 flex flex-col items-center justify-center space-y-0.5 ${
                      activeStage === st
                        ? "bg-sky text-navy border-sky shadow-lg shadow-sky/20 scale-[1.02]"
                        : "bg-navy/60 text-slate-300 border-sky/20 hover:border-sky/40 hover:text-white"
                    }`}
                  >
                    <span className="text-[8.5px] opacity-80 uppercase tracking-wider font-mono">
                      {st === "tofu" ? "01. TOFU" : st === "mofu" ? "02. MOFU" : "03. BOFU"}
                    </span>
                    <span className="leading-tight">
                      {st === "tofu" ? "Muestras 1kg" : st === "mofu" ? "Tecnología" : "Retargeting"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Strategic Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-navy/80 border border-sky/25 rounded-2xl p-4 shadow-xl space-y-3 backdrop-blur-sm"
              >
                {/* Header Tag & Platform */}
                <div className="flex items-center justify-between border-b border-sky/15 pb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-black uppercase tracking-wider ${current.badgeColor}`}>
                    {current.stageName}
                  </span>
                  <span className="text-[10px] font-mono text-sky font-semibold flex items-center space-x-1">
                    <Layers className="w-3 h-3" />
                    <span>{current.platform}</span>
                  </span>
                </div>

                {/* Title & Objective */}
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-sans text-white tracking-tight leading-snug">
                    {current.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal mt-1 leading-relaxed">
                    {current.objective}
                  </p>
                </div>

                {/* KPI Metrics Dashboard Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {current.kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="bg-navy/90 border border-sky/20 rounded-xl p-2 text-center flex flex-col justify-center space-y-0.5"
                    >
                      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block">
                        {kpi.label}
                      </span>
                      <strong className="text-xs sm:text-sm font-black font-mono text-sky block">
                        {kpi.value}
                      </strong>
                      <span className="text-[7.5px] text-slate-300 font-sans leading-tight">
                        {kpi.desc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Strategic Execution Bullet Points */}
                <div className="pt-2 border-t border-sky/15 space-y-1.5 text-left font-sans">
                  {current.insights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-[10.5px] text-slate-200 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Hyper-Realistic Interactive Social Media Ad Preview */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* 1. INSTAGRAM FEED SPONSORED AD (TOFU) */}
              {activeStage === "tofu" && (
                <motion.div
                  key="ad-tofu"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[340px] bg-white text-slate-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(95,168,211,0.2)] border border-slate-200 overflow-hidden text-left font-sans select-none"
                >
                  {/* Top Bar / Ad Sponsor Header */}
                  <div className="px-3.5 py-2.5 flex items-center justify-between border-b border-slate-100 bg-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 shadow-sm shrink-0">
                        <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden flex items-center justify-center">
                          <img src="/logotipo.png" alt="Avatar" className="w-full h-full object-contain p-0.5" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-bold text-xs text-slate-900">alpacladd</span>
                          <BadgeCheck className="w-3.5 h-3.5 text-sky-500 fill-sky-500 stroke-white" />
                        </div>
                        <span className="text-[9px] text-slate-500 font-medium block leading-tight">
                          Publicidad • Patrocinado
                        </span>
                      </div>
                    </div>

                    <button className="text-slate-600 hover:text-slate-900 p-1">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Primary High-Resolution Ad Creative Media */}
                  <div className="relative aspect-square bg-slate-950 overflow-hidden group">
                    <img
                      src="/instagram/post_1.jpg"
                      alt="Muestra Técnica 1kg"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Industrial Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur-md border border-sky/40 text-white px-2.5 py-1 rounded-lg text-[9px] font-mono font-bold uppercase shadow-lg flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky" />
                      <span>PROGRAMA DE TESTEO B2B</span>
                    </div>

                    {/* Free Sample Callout Badge */}
                    <div className="absolute bottom-3 right-3 bg-sky text-navy px-3 py-1.5 rounded-xl font-sans font-black text-xs shadow-xl uppercase tracking-wider">
                      Muestra 100% Sin Cargo
                    </div>
                  </div>

                  {/* High-Impact Native Meta CTA Banner */}
                  <div className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2.5 flex items-center justify-between cursor-pointer transition-colors shadow-inner">
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-blue-100 font-mono uppercase tracking-wider block">alpacladd.com.ar/muestras</span>
                      <strong className="text-xs font-bold block leading-none">Pedí 1kg de Hilado para tu Taller</strong>
                    </div>
                    <div className="flex items-center space-x-1 text-xs font-bold bg-white/20 px-2.5 py-1 rounded-md">
                      <span>Solicitar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Social Action Bar */}
                  <div className="px-3.5 pt-2.5 pb-1 flex items-center justify-between text-slate-800">
                    <div className="flex items-center space-x-3.5">
                      <button onClick={() => setIsLiked(!isLiked)} className="hover:opacity-70 transition-transform active:scale-125">
                        <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-slate-800"}`} />
                      </button>
                      <button className="hover:opacity-70">
                        <MessageCircle className="w-5 h-5 text-slate-800" />
                      </button>
                      <button className="hover:opacity-70">
                        <Send className="w-5 h-5 text-slate-800" />
                      </button>
                    </div>

                    <button onClick={() => setIsSaved(!isSaved)} className="hover:opacity-70">
                      <Bookmark className={`w-5 h-5 ${isSaved ? "fill-slate-900 text-slate-900" : "text-slate-800"}`} />
                    </button>
                  </div>

                  {/* Caption & Likes */}
                  <div className="px-3.5 pb-3 text-left space-y-1">
                    <div className="text-[10px] font-bold text-slate-900">
                      {(2410 + (isLiked ? 1 : 0)).toLocaleString()} Me gusta
                    </div>
                    <p className="text-[10.5px] text-slate-800 leading-snug">
                      <strong className="font-bold text-slate-900 mr-1.5">alpacladd</strong>
                      ¿Roturas constantes en telar circular? Enviamos una bobina de hilado peinado 30/1 a tu planta para prueba técnica sin costo.
                    </p>
                    <span className="text-[9px] text-sky-600 font-medium block">#HiladosB2B #PrecisionTextil #IndustriaArgentina</span>
                  </div>
                </motion.div>
              )}

              {/* 2. LINKEDIN B2B SPONSORED AD (MOFU) */}
              {activeStage === "mofu" && (
                <motion.div
                  key="ad-mofu"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[350px] bg-white text-slate-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(59,130,246,0.2)] border border-slate-200 overflow-hidden text-left font-sans select-none"
                >
                  {/* LinkedIn Header */}
                  <div className="p-3 border-b border-slate-100 flex items-start justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#0077B5] p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                        <img src="/logotipo.png" alt="Alpacladd Logo" className="w-full h-full object-contain filter brightness-200" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-bold text-xs text-slate-900">ALPACLADD Hilados B2B</span>
                          <span className="text-[9px] text-slate-400">• 1er</span>
                        </div>
                        <span className="text-[9px] text-slate-500 block leading-tight">14.820 seguidores</span>
                        <span className="text-[8.5px] text-slate-400 block mt-0.5">Promocionado • 🌐</span>
                      </div>
                    </div>

                    <button className="text-slate-500 hover:text-slate-800 p-1">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Professional Copy */}
                  <div className="px-3 pt-2 pb-2 text-[10.5px] text-slate-800 leading-snug space-y-1">
                    <p>
                      ⚡ <strong>¿Cómo garantizar cero paradas en líneas de tejido de alta velocidad?</strong>
                    </p>
                    <p className="text-slate-600 text-[10px]">
                      Nuestras coneras automáticas incorporan purgado óptico digital suizo. Mirá el informe de laboratorio ISO sobre reducción de imperfecciones.
                    </p>
                  </div>

                  {/* Media Banner */}
                  <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden group">
                    <img
                      src="/instagram/post_5.jpg"
                      alt="Tecnología Savio"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-white text-xs font-bold font-mono uppercase drop-shadow">
                        Sensor Infrarrojo: 12.000 RPM
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Bottom Link Bar & CTA */}
                  <div className="bg-slate-50 p-3 flex items-center justify-between border-t border-slate-200">
                    <div className="space-y-0.5 max-w-[200px]">
                      <span className="text-[8.5px] text-slate-500 font-mono uppercase block">alpacladd.com.ar/tecnologia</span>
                      <strong className="text-[11px] font-bold text-slate-900 block leading-tight truncate">
                        Ficha Técnica & Ensayos Uster 2026
                      </strong>
                    </div>

                    <button className="py-1.5 px-3 bg-[#0077B5] hover:bg-[#005f93] text-white text-[10.5px] font-bold rounded-full transition-colors shrink-0 flex items-center space-x-1 shadow-sm">
                      <span>Descargar</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  {/* LinkedIn Reactions Row */}
                  <div className="px-3 py-2 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[9px] font-medium">
                    <div className="flex items-center space-x-1">
                      <span className="flex -space-x-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[7px]">👍</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[7px]">💡</span>
                      </span>
                      <span>482 recomendaciones</span>
                    </div>
                    <span>38 comentarios</span>
                  </div>
                </motion.div>
              )}

              {/* 3. RETARGETING & BOFU CONVERSION AD */}
              {activeStage === "bofu" && (
                <motion.div
                  key="ad-bofu"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-[340px] bg-white text-slate-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.2)] border border-slate-200 overflow-hidden text-left font-sans select-none"
                >
                  {/* Header */}
                  <div className="px-3.5 py-2.5 flex items-center justify-between border-b border-slate-100 bg-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-emerald-400 via-teal-500 to-sky-600 shadow-sm shrink-0">
                        <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden flex items-center justify-center">
                          <img src="/logotipo.png" alt="Avatar" className="w-full h-full object-contain p-0.5" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-bold text-xs text-slate-900">alpacladd</span>
                          <BadgeCheck className="w-3.5 h-3.5 text-sky-500 fill-sky-500 stroke-white" />
                        </div>
                        <span className="text-[9px] text-slate-500 font-medium block leading-tight">
                          Publicidad • Retargeting Exclusivo
                        </span>
                      </div>
                    </div>

                    <button className="text-slate-600 hover:text-slate-900 p-1">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Creative Media */}
                  <div className="relative aspect-square bg-slate-950 overflow-hidden group">
                    <img
                      src="/instagram/post_16.jpg"
                      alt="Lotes Homologados"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur-md border border-emerald-400/40 text-emerald-300 px-2.5 py-1 rounded-lg text-[9px] font-mono font-bold uppercase shadow-lg flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>GARANTÍA DE LOTE CERTIFICADA</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md p-2.5 rounded-xl border border-white/20 text-white space-y-0.5">
                      <span className="text-[9px] font-mono text-sky uppercase">CONTRATO DE SUMINISTRO B2B</span>
                      <p className="text-xs font-bold">Entrega en 48hs • Cuenta Corriente 30/60 Días</p>
                    </div>
                  </div>

                  {/* CTA Bar */}
                  <div className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 flex items-center justify-between cursor-pointer transition-colors shadow-inner">
                    <div className="space-y-0.5">
                      <span className="text-[9px] text-emerald-100 font-mono uppercase tracking-wider block">alpacladd.com.ar/cotizador</span>
                      <strong className="text-xs font-bold block leading-none">Cotizá tu Partida Mayorista</strong>
                    </div>
                    <div className="flex items-center space-x-1 text-xs font-bold bg-white/20 px-2.5 py-1 rounded-md">
                      <span>Cotizar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Social Action Bar */}
                  <div className="px-3.5 pt-2 pb-3 text-left space-y-1">
                    <p className="text-[10.5px] text-slate-800 leading-snug">
                      <strong className="font-bold text-slate-900 mr-1.5">alpacladd</strong>
                      ¿Probaste nuestra muestra y comprobaste la calidad? Asegurá tu stock mensual con precios mayoristas congelados.
                    </p>
                    <span className="text-[9px] text-emerald-600 font-semibold block">💬 Atención directa con ejecutivos de cuenta B2B</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
