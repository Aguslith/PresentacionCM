import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { Heart, MessageCircle, X, Sparkles, Clock, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IGPost {
  id: number;
  type: "quote" | "product" | "blueprint" | "machinery" | "quality" | "eco";
  bgClass: string;
  preview: React.ReactNode;
  likes: string;
  comments: string;
  title: string;
  pillar: string;
  format: string;
  funnelStage: "TOFU (Atracción)" | "MOFU (Educación)" | "BOFU (Conversión)";
  bestTime: string;
  hook: string;
  caption: string;
  hashtags: string[];
}

export const Feed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<IGPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("TODOS");

  const posts: IGPost[] = [
    {
      id: 1,
      type: "quote",
      bgClass: "bg-navy text-off",
      preview: (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center select-none">
          <span className="text-[8px] font-mono text-sky tracking-[0.2em] mb-2 uppercase">PILAR 01 // BRANDING</span>
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider leading-snug">
            "LA PRECISIÓN ES EL VERDADERO TEJIDO DE LA CONFIANZA"
          </p>
          <div className="w-8 h-[1px] bg-sky/40 mt-3" />
        </div>
      ),
      likes: "184",
      comments: "19",
      title: "Filosofía y Manifiesto de Marca",
      pillar: "FILOSOFÍA",
      format: "Placa Tipográfica Minimalista",
      funnelStage: "TOFU (Atracción)",
      bestTime: "Lunes 09:00 hs (Apertura de semana productiva)",
      hook: "Detrás de cada prenda que resiste el tiempo, hay un cálculo matemático invisible.",
      caption:
        "En ALPACLADD no solo fabricamos hilados; tejemos la confianza operacional que mantiene en marcha los telares de nuestros clientes. La regularidad de torsión no es casualidad: es ingeniería aplicada a cada filamento.\n\n¿Buscás estabilidad para tu taller? Dejanos tu mensaje y coordinamos el envío de una bobina de muestra técnica.",
      hashtags: ["#PrecisionTextil", "#HiladosB2B", "#IndustriaTextil", "#CalidadIndustrial", "#ALPACLADD"],
    },
    {
      id: 2,
      type: "product",
      bgClass: "bg-slate-100 text-navy",
      preview: (
        <div className="flex flex-col items-center justify-center h-full p-4 relative select-none">
          <span className="text-[8px] font-mono text-blue tracking-[0.2em] mb-2 uppercase">PILAR 02 // PRODUCTO</span>
          <svg className="w-12 h-12" viewBox="0 0 100 100">
            <path d="M30,80 L70,80 L60,20 L40,20 Z" className="fill-blue/20 stroke-blue" strokeWidth="1.5" />
            <path d="M32,75 L68,75 M34,65 L66,65 M36,55 L64,55 M38,45 L62,45 M40,35 L60,35 M42,25 L58,25" className="stroke-blue/40" strokeWidth="1" />
          </svg>
          <span className="text-[9px] font-mono font-bold text-navy mt-2">ALGODÓN PEINADO 30/1</span>
        </div>
      ),
      likes: "312",
      comments: "34",
      title: "Ficha de Producto: Algodón Peinado 30/1",
      pillar: "PRODUCTO",
      format: "Carrusel Técnico (Ficha + Pruebas)",
      funnelStage: "MOFU (Educación)",
      bestTime: "Martes 11:30 hs (Búsqueda de insumos de compras)",
      hook: "¿Por qué el peinado marca la diferencia entre una prenda que hace pilling y una que dura años?",
      caption:
        "El algodón peinado título 30/1 de ALPACLADD pasa por peinadoras que extraen las fibras cortas inferiores a 12mm, alineando filamentos largos en paralelo. Resultado: un hilo suave, de resistencia constante en telar circular y sin motas superficiales.\n\n📌 Torsión: 650 TPM\n📌 Tensión: 14.5 cN/tex\n📌 Usos: Jersey premium, remería de exportación y ribb fino.\n\nDescargá la ficha técnica completa en el link de la bio.",
      hashtags: ["#AlgodonPeinado", "#Hilado30s", "#ConfeccionTextil", "#FichaTecnica", "#TejidoDePunto"],
    },
    {
      id: 3,
      type: "blueprint",
      bgClass: "bg-navy text-off",
      preview: (
        <div className="flex flex-col items-center justify-center h-full p-4 text-left select-none relative">
          <span className="text-[8px] font-mono text-sky tracking-[0.2em] mb-2 uppercase absolute top-2 left-2">PILAR 03 // IDENTIDAD</span>
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" fill="none" className="stroke-sky/20" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M50,15 L80,75 L20,75 Z" className="stroke-sky" strokeWidth="1.5" fill="none" />
            <path d="M50,28 L65,67 L35,67 Z" className="stroke-sky/50" strokeWidth="1" fill="none" />
            <path d="M20,75 C35,75 35,60 50,60 C65,60 65,75 80,75" className="stroke-off" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      ),
      likes: "245",
      comments: "22",
      title: "Geometría de Isotipo & Rebranding",
      pillar: "BRANDING",
      format: "Infografía de Construcción Visual",
      funnelStage: "TOFU (Atracción)",
      bestTime: "Miércoles 14:00 hs (Inspiración y diseño)",
      hook: "Un símbolo no solo decora; sintetiza la matriz productiva de toda una fábrica.",
      caption:
        "Nuestro isotipo desglosado bajo la retícula geométrica. Tres símbolos esenciales en un solo trazo:\n1️⃣ El Cono: Soporte del embobinado industrial.\n2️⃣ El Hilo: Curva sinuosa que representa la fibra continua en torsión.\n3️⃣ La Letra 'A': Inicial de ALPACLADD estructurada en ángulos de 60 grados.\n\nIdentidad sólida para una hilandería de precisión internacional.",
      hashtags: ["#BrandingB2B", "#IdentidadVisual", "#Logotipo", "#GraphicDesign", "#TextilBranding"],
    },
    {
      id: 4,
      type: "machinery",
      bgClass: "bg-slate-100 text-navy",
      preview: (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center select-none">
          <span className="text-[8px] font-mono text-blue tracking-[0.2em] mb-2 uppercase">PILAR 04 // TECNOLOGÍA</span>
          <svg className="w-12 h-12" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" rx="4" fill="none" className="stroke-blue" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="16" className="stroke-blue/40" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="30" x2="50" y2="70" className="stroke-blue" strokeWidth="1.5" />
            <line x1="30" y1="50" x2="70" y2="50" className="stroke-blue" strokeWidth="1.5" />
          </svg>
          <span className="text-[9px] font-mono font-bold text-navy mt-2">PURGADOR ÓPTICO SAVIO</span>
        </div>
      ),
      likes: "420",
      comments: "53",
      title: "Maquinaria: Conera Savio Eco-Spindle",
      pillar: "PROCESO",
      format: "Video Reel / Demostración Técnica",
      funnelStage: "MOFU (Educación)",
      bestTime: "Jueves 16:30 hs (Ingenieros de planta y jefes de taller)",
      hook: "0.02 segundos. Ese es el tiempo que tarda nuestro sensor en detectar y cortar una impureza.",
      caption:
        "Equipamos nuestras coneras automáticas con purgadores ópticos infrarrojos de última generación. Cada milímetro de hilo es escaneado antes de llegar a la bobina.\n\nSi el sensor detecta una variación de grosor o un nep, una cuchilla corta la sección defectuosa y un splicer neumático une los extremos sin nudos visibles.\n\nMenos paradas en tus telares, más metros producidos por turno. ⚙️",
      hashtags: ["#MaquinariaTextil", "#Automatizacion", "#SavioEcoSpindle", "#IngenieriaTextil", "#CeroFallas"],
    },
    {
      id: 5,
      type: "quality",
      bgClass: "bg-navy text-off",
      preview: (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center select-none">
          <span className="text-[8px] font-mono text-sky tracking-[0.2em] mb-2 uppercase">PILAR 05 // CALIDAD</span>
          <svg className="w-12 h-12" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="none" className="stroke-sky" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="25" fill="none" className="stroke-sky/40" strokeWidth="1" strokeDasharray="4 2" />
            <path d="M40,50 L47,57 L62,42" className="stroke-off" strokeWidth="2.5" fill="none" />
          </svg>
          <span className="text-[9px] font-mono font-bold text-sky mt-2">CONTROL DINÁMICO ISO</span>
        </div>
      ),
      likes: "298",
      comments: "27",
      title: "Laboratorio: Control de Tensión y Dinamometría",
      pillar: "CALIDAD",
      format: "Galería de Certificación de Lote",
      funnelStage: "BOFU (Conversión)",
      bestTime: "Viernes 10:00 hs (Cierre de órdenes de compra)",
      hook: "¿Llegó un lote de hilo y no resiste la velocidad de tus máquinas circulares?",
      caption:
        "En ALPACLADD cada partida sale con certificado de ensayo dinamométrico. Medimos tenacidad (cN/tex), elongación porcentual y regularidad Uster (CV%).\n\nGarantizamos que la bobina número 1 y la número 500 tengan exactamente el mismo comportamiento mecánico.\n\nPedí hoy tu muestra de 1kg sin cargo y testealo en tu propia planta.",
      hashtags: ["#ControlDeCalidad", "#NormasISO", "#LaboratorioTextil", "#UsterTester", "#GarantiaB2B"],
    },
    {
      id: 6,
      type: "eco",
      bgClass: "bg-slate-100 text-navy",
      preview: (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center select-none">
          <span className="text-[8px] font-mono text-blue tracking-[0.2em] mb-2 uppercase">PILAR 06 // ECO-SPUN</span>
          <svg className="w-12 h-12" viewBox="0 0 100 100">
            <path d="M50,15 C65,15 75,25 75,40 C75,65 50,85 50,85 C50,85 25,65 25,40 C25,25 35,15 50,15 Z" fill="none" className="stroke-blue" strokeWidth="1.5" />
            <path d="M50,30 Q60,35 62,45" className="stroke-blue/40" strokeWidth="1.2" fill="none" />
            <line x1="50" y1="15" x2="50" y2="85" className="stroke-blue/30" strokeWidth="1" />
          </svg>
          <span className="text-[9px] font-mono font-bold text-navy mt-2">LÍNEA SUSTENTABLE ECO-SPUN</span>
        </div>
      ),
      likes: "510",
      comments: "61",
      title: "Lanzamiento: Hilados Bio-Sustentables ECO-SPUN",
      pillar: "SUSTENTABILIDAD",
      format: "Lanzamiento / Fotografía de Producto",
      funnelStage: "TOFU (Atracción)",
      bestTime: "Sábado 12:00 hs (Marcas de moda con foco verde)",
      hook: "La sustentabilidad ya no es una opción de marketing; es la exigencia del consumidor global.",
      caption:
        "Presentamos formalmente ECO-SPUN: la nueva línea de hilados sustentables de ALPACLADD producida con un 60% de algodón orgánico certificado GOTS y un 40% de fibras de poliéster reciclado post-consumo.\n\n🌱 0% pesticidas en origen\n💧 45% menos agua en procesamiento\n♻️ Trazabilidad garantizada por lote\n\nAbastecé tu colección sustentable con hilados de grado industrial.",
      hashtags: ["#EcoSpun", "#ModaSustentable", "#AlgodonOrganicoGOTS", "#RecycledPolyester", "#TextilVerde"],
    },
  ];

  const filteredPosts =
    activeFilter === "TODOS"
      ? posts
      : posts.filter((p) => p.pillar.toUpperCase() === activeFilter.toUpperCase());

  return (
    <SlideShell id="feed" n={20} title="Estrategia de Contenido: Feed de Instagram" kind="social" bgType="off">
      <div className="h-full flex flex-col justify-between py-1 relative">
        <div className="space-y-3 my-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 max-w-4xl mx-auto">
            <p className="text-xs md:text-sm text-gray text-left font-light max-w-xl">
              Parrilla estratégica tipo <strong>damero</strong> (alternancia de placas de identidad y fichas técnicas). Cada post responde a un pilar y a una etapa del embudo de ventas B2B.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
              {["TODOS", "FILOSOFÍA", "PRODUCTO", "PROCESO", "CALIDAD", "SUSTENTABILIDAD"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-[8px] font-mono uppercase px-2 py-1 rounded transition-all ${
                    activeFilter === f
                      ? "bg-blue text-white font-bold shadow-sm"
                      : "bg-navy/5 text-gray hover:bg-navy/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout (3x2) */}
          <div className="grid grid-cols-3 gap-2.5 max-w-lg mx-auto bg-navy/5 p-3 rounded-2xl border border-navy/10 shadow-lg">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm border border-navy/5 ${post.bgClass} hover:shadow-xl transition-all duration-300 group`}
              >
                {post.preview}

                {/* Hover overlay stats */}
                <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center space-y-2 text-white font-mono text-xs transition-opacity duration-300 p-2 text-center">
                  <span className="text-[8px] text-sky uppercase tracking-wider font-bold">{post.pillar}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span className="text-[10px]">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span className="text-[10px]">{post.comments}</span>
                    </div>
                  </div>
                  <span className="text-[7px] text-gray bg-white/10 px-1.5 py-0.5 rounded">Clic para ver Copy CM</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-[10px] text-gray font-mono">
            Haz clic sobre cualquier publicación para abrir la ficha de Community Management y copy completo
          </div>
        </div>

        {/* Modal Overlay Detail with Senior CM Copywriting */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white text-navy rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-sky/20 flex flex-col md:flex-row relative max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-navy/10 text-navy hover:bg-navy/20 z-10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left Visual block */}
                <div className={`w-full md:w-5/12 aspect-square md:aspect-auto flex items-center justify-center border-r border-navy/10 p-6 ${selectedPost.bgClass}`}>
                  <div className="scale-110 w-full h-full flex items-center justify-center">
                    {selectedPost.preview}
                  </div>
                </div>

                {/* Right Details: Senior CM Breakdown */}
                <div className="w-full md:w-7/12 p-6 flex flex-col justify-between text-left overflow-y-auto max-h-[80vh] no-scrollbar space-y-4">
                  <div className="space-y-3">
                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-2 text-[9px] font-mono">
                      <span className="bg-blue/10 text-blue px-2 py-0.5 rounded font-bold uppercase">
                        {selectedPost.pillar}
                      </span>
                      <span className="bg-navy/5 text-gray px-2 py-0.5 rounded">
                        {selectedPost.funnelStage}
                      </span>
                      <span className="text-gray flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {selectedPost.bestTime}
                      </span>
                    </div>

                    <h4 className="text-base font-bold tracking-wide uppercase border-b border-navy/10 pb-2 text-navy">
                      {selectedPost.title}
                    </h4>

                    {/* Hook Section */}
                    <div className="bg-navy/5 p-2.5 rounded-lg border-l-2 border-blue space-y-1">
                      <span className="text-[8px] font-mono text-blue uppercase font-bold flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" /> GANCHO (HOOK DE RETENCIÓN)
                      </span>
                      <p className="text-xs font-semibold text-navy italic">
                        "{selectedPost.hook}"
                      </p>
                    </div>

                    {/* Full Caption */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-gray uppercase font-bold">COPY ESTRATÉGICO COMPLETO</span>
                      <p className="text-xs text-navy/80 font-light leading-relaxed whitespace-pre-line bg-slate-50 p-3 rounded-lg border border-navy/5 font-sans">
                        {selectedPost.caption}
                      </p>
                    </div>

                    {/* Hashtags */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-gray uppercase font-bold flex items-center">
                        <Hash className="w-3 h-3 mr-1" /> HASHTAGS B2B RECOMENDADOS
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selectedPost.hashtags.map((h, i) => (
                          <span key={i} className="text-[10px] font-mono text-blue bg-blue/5 px-2 py-0.5 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats & Handle */}
                  <div className="border-t border-navy/10 pt-3 flex justify-between items-center text-[10px] text-gray font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center text-red-600 font-bold">
                        <Heart className="w-3.5 h-3.5 mr-1 fill-red-600" /> {selectedPost.likes}
                      </span>
                      <span className="flex items-center text-blue font-bold">
                        <MessageCircle className="w-3.5 h-3.5 mr-1" /> {selectedPost.comments}
                      </span>
                    </div>
                    <span>@alpacladd.hilados</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="border-t border-navy/10 pt-3 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>COMMUNITY MANAGEMENT ESTRATÉGICO</span>
          <span>PLANIFICACIÓN DE FEED ORGÁNICO</span>
        </div>
      </div>
    </SlideShell>
  );
};
