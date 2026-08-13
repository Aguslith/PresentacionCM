import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, Video, Image as ImageIcon } from "lucide-react";

interface VerticalMockupItem {
  id: number;
  title: string;
  tag: string;
  badge: string;
  type: "video" | "image";
  src: string;
  altSrc?: string; // Alternative photo/video if toggleable
  material: string;
  tecnica: string;
  target: string;
  description: string;
}

export const Mockups: React.FC = () => {
  const [selectedMockup, setSelectedMockup] = useState<VerticalMockupItem | null>(null);
  const [viewModes, setViewModes] = useState<Record<number, "video" | "image">>({
    1: "video",
    2: "video",
    3: "video",
    4: "image",
  });

  const mockups: VerticalMockupItem[] = [
    {
      id: 1,
      title: "Remera Corporativa & Modelos",
      tag: "01 // INDUMENTARIA",
      badge: "INDUMENTARIA",
      type: "video",
      src: "/mockups/modelos_remera.mp4",
      material: "Jersey de algodón peinado 30/1 (100% hilado ALPACLADD)",
      tecnica: "Estampado al agua + bordado de alta definición",
      target: "Uniformes de equipo comercial, ferias textiles y directivos",
      description:
        "Demostración de indumentaria textil confeccionada íntegramente con hilados peinados ALPACLADD. Caída suave, resistencia a lavados industriales y máxima durabilidad.",
    },
    {
      id: 2,
      title: "Mochila Técnica Impermeable",
      tag: "02 // MOCHILA TÉCNICA",
      badge: "ACCESORIOS",
      type: "video",
      src: "/mockups/mochila_loop.mp4",
      altSrc: "/mockups/mochila_foto.jpeg",
      material: "Poliéster técnico impermeable 600D balístico",
      tecnica: "Bordado computarizado en hilo Sky Blue reflectivo",
      target: "Kit de bienvenida para ingenieros de planta y ejecutivos",
      description:
        "Mochila técnica impermeable con bordado de alta definición del imagotipo ALPACLADD en contraste con tejido balístico.",
    },
    {
      id: 3,
      title: "Termo Inox Institucional",
      tag: "03 // TERMO INOX",
      badge: "MERCHANDISING",
      type: "video",
      src: "/mockups/termo_rotando.mp4",
      material: "Acero inoxidable 304 bicapa con vacío térmico",
      tecnica: "Grabado láser de fibra óptica con acabado mate",
      target: "Merchandising de fidelización para clientes B2B recurrentes",
      description:
        "Termo institucional grabado en láser de fibra perimetral, altamente resistente al desgaste y diseñado para uso industrial y corporativo.",
    },
    {
      id: 4,
      title: "Set Matero & Termo ALPACLADD",
      tag: "04 // KIT MERCHANDISING",
      badge: "KIT COMPLETO",
      type: "image",
      src: "/mockups/termo_mate_foto.jpeg",
      material: "Mate térmico inox con bombilla y termo de 1L en caja rígida",
      tecnica: "Grabado láser de precisión + caja rígida azul institucional",
      target: "Regalo de fin de año y acuerdos con tejedurías e hilanderías",
      description:
        "Composición en planta industrial del set matero institucional. Aplicación sobria del imagotipo respetando áreas de seguridad y contraste.",
    },
  ];

  const toggleViewMode = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setViewModes((prev) => ({
      ...prev,
      [id]: prev[id] === "video" ? "image" : "video",
    }));
  };

  return (
    <SlideShell id="mockups" n={14} title="Aplicaciones de Marca (Mockups)" kind="galeria" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-4 my-auto max-w-6xl mx-auto w-full">
          {/* 4 Vertical Columns Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {mockups.map((m) => {
              const currentMode = viewModes[m.id] || m.type;
              const currentSrc =
                currentMode === "image" && m.altSrc ? m.altSrc : m.src;
              const isVideo = currentMode === "video" && !m.altSrc ? true : currentMode === "video";

              return (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: m.id * 0.08 }}
                  onClick={() => setSelectedMockup(m)}
                  className="bg-white border border-navy/15 p-2 sm:p-3 rounded-2xl flex flex-col justify-between h-[280px] sm:h-[360px] md:h-[400px] shadow-sm hover:shadow-2xl hover:border-blue/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Vertical Media Container */}
                  <div className="flex-grow rounded-xl overflow-hidden bg-navy/95 relative flex items-center justify-center h-44 sm:h-60 md:h-72 border border-navy/10">
                    {isVideo ? (
                      <video
                        src={currentSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={currentSrc}
                        alt={m.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}

                    {/* Optional Toggle Button for Mochila */}
                    {m.altSrc && (
                      <button
                        onClick={(e) => toggleViewMode(e, m.id)}
                        className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-[7.5px] font-mono font-semibold uppercase backdrop-blur-md transition-all shadow border border-white/20 z-10"
                        title="Alternar vista"
                      >
                        {currentMode === "video" ? "Ver Foto" : "Ver Video"}
                      </button>
                    )}

                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-navy/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-1.5 text-white font-mono text-[9px] p-2 text-center">
                      <div className="w-8 h-8 rounded-full bg-blue/40 flex items-center justify-center border border-sky/40 shadow-lg">
                        <Eye className="w-4 h-4 text-sky" />
                      </div>
                      <span className="font-bold tracking-wider">VER DETALLES</span>
                      <span className="text-[7.5px] text-sky/80">Clic para ficha técnica</span>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="mt-3 px-1 space-y-0.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[8.5px] font-mono text-blue font-bold tracking-tight uppercase">
                        {m.tag}
                      </span>
                      {isVideo ? (
                        <Video className="w-3 h-3 text-sky/80" />
                      ) : (
                        <ImageIcon className="w-3 h-3 text-sky/80" />
                      )}
                    </div>
                    <h4 className="text-[11px] font-sans font-bold text-navy truncate leading-tight">
                      {m.title}
                    </h4>
                    <p className="text-[9px] text-slate-600 truncate font-normal">
                      {m.material}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center text-[10px] text-slate-500 font-mono">
            Haz clic en cualquier producto para ver su ficha de producción técnica
          </div>
        </div>

        {/* Modal: Fullscreen / Large Inspection View */}
        <AnimatePresence>
          {selectedMockup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedMockup(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white text-navy rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-sky/20 flex flex-col md:flex-row relative max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMockup(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-navy/10 text-navy hover:bg-navy/20 z-20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left: Large Media Display */}
                <div className="w-full md:w-1/2 bg-navy flex items-center justify-center p-3 relative">
                  {selectedMockup.type === "video" ? (
                    <video
                      src={selectedMockup.src}
                      autoPlay
                      loop
                      controls
                      playsInline
                      className="w-full h-full max-h-[480px] object-contain rounded-xl shadow-inner"
                    />
                  ) : (
                    <img
                      src={selectedMockup.src}
                      alt={selectedMockup.title}
                      className="w-full h-full max-h-[480px] object-contain rounded-xl shadow-inner"
                    />
                  )}
                </div>

                {/* Right: Technical Specification Breakdown */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between text-left space-y-4 overflow-y-auto max-h-[85vh] no-scrollbar">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-[10px] font-mono">
                      <span className="bg-blue/10 text-blue font-bold px-2 py-0.5 rounded uppercase">
                        {selectedMockup.tag}
                      </span>
                      <span className="bg-navy/5 text-slate-600 px-2 py-0.5 rounded uppercase font-semibold">
                        {selectedMockup.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-sans text-navy uppercase leading-snug">
                      {selectedMockup.title}
                    </h3>

                    <p className="text-xs text-slate-700 font-normal leading-relaxed">
                      {selectedMockup.description}
                    </p>

                    {/* Specs Box */}
                    <div className="bg-slate-50 border border-navy/10 rounded-xl p-3.5 space-y-2.5 text-xs">
                      <div>
                        <span className="text-[9px] font-mono text-slate-500 font-bold block uppercase">
                          SUSTRATO / MATERIALIDAD
                        </span>
                        <span className="text-navy font-semibold text-[11px]">
                          {selectedMockup.material}
                        </span>
                      </div>

                      <div className="border-t border-navy/10 pt-2">
                        <span className="text-[9px] font-mono text-slate-500 font-bold block uppercase">
                          TÉCNICA DE MARCAJE Y APLICACIÓN
                        </span>
                        <span className="text-blue font-bold text-[11px]">
                          {selectedMockup.tecnica}
                        </span>
                      </div>

                      <div className="border-t border-navy/10 pt-2">
                        <span className="text-[9px] font-mono text-slate-500 font-bold block uppercase">
                          FINALIDAD Y DESTINO B2B
                        </span>
                        <span className="text-slate-800 text-[11px] font-normal">
                          {selectedMockup.target}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-navy/10 pt-3 flex justify-between items-center text-[10px] text-slate-500 font-mono font-semibold">
                    <span>ALPACLADD MERCHANDISING 2026</span>
                    <span>MANUAL DE IDENTIDAD VISUAL</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
};
