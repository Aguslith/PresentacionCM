import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Layers, ShieldCheck, Check } from "lucide-react";
import { BrandLogo, type LogoTheme } from "../components/BrandLogo";

type VersionId = "oscuro" | "claro" | "grises" | "bn" | "bordado" | "kraft";

interface VersionItem {
  id: VersionId;
  name: string;
  tag: string;
  category: "Monocromático" | "Fondos" | "Texturas";
  theme: LogoTheme;
  containerBg: string;
  ambientGlow: string;
  sustrato: string;
  tecnica: string;
  contraste: string;
  descripcion: string;
  thumbBg: string;
}

export const Versiones: React.FC = () => {
  const [selectedId, setSelectedId] = useState<VersionId>("oscuro");
  const [showGrid, setShowGrid] = useState<boolean>(true);

  const versions: VersionItem[] = [
    {
      id: "oscuro",
      name: "Fondo Oscuro (Invertido Institucional)",
      tag: "FONDO OSCURO",
      category: "Fondos",
      theme: "navy",
      containerBg: "#0D1D34",
      ambientGlow: "rgba(95, 168, 211, 0.25)",
      sustrato: "Pantallas digitales, stands industriales y uniformes oscuros",
      tecnica: "RGB Digital / Serigrafía plastisol con base blanca",
      contraste: "Ratio 14.2:1 (Contraste Máximo)",
      descripcion:
        "Versión primaria para aplicaciones sobre fondo institucional Navy (#0D1D34). El isotipo resplandece en Sky Blue (#5FA8D3) con bandas blancas y la tipografía en Off-White (#F2F2F2), otorgando sofisticación tecnológica y presencia corporativa.",
      thumbBg: "bg-[#0D1D34] border-sky/30",
    },
    {
      id: "claro",
      name: "Fondo Claro (Positivo Papelería)",
      tag: "FONDO CLARO",
      category: "Fondos",
      theme: "light",
      containerBg: "#F9FAFB",
      ambientGlow: "rgba(29, 90, 143, 0.1)",
      sustrato: "Papelería institucional, hojas membretadas, remitos y manual impreso",
      tecnica: "Offset a 4 colores / Impresión digital CMYK",
      contraste: "Ratio 12.8:1 (Alta Claridad)",
      descripcion:
        "Versión primaria para soportes claros y fondos blancos. El isotipo 3D y la tipografía se presentan en Navy (#0D1D34) y Corporate Blue (#1D5A8F), conservando máxima sobriedad y nitidez en documentos comerciales.",
      thumbBg: "bg-slate-100 border-navy/20",
    },
    {
      id: "grises",
      name: "Escala de Grises (Monocromo)",
      tag: "ESCALA DE GRISES",
      category: "Monocromático",
      theme: "grayscale",
      containerBg: "#ECEFF1",
      ambientGlow: "rgba(102, 102, 102, 0.12)",
      sustrato: "Impresiones monocromáticas de taller, fotocopias técnicas y remitos internos",
      tecnica: "Offset 1 tinta (Negro K en porcentajes del 100%, 60% y 20%)",
      contraste: "Ratio 10.5:1 (Optimizado para Grises)",
      descripcion:
        "Desarrollada para entornos donde no se dispone de tintas de color. Mantiene la diferenciación de planos entre el soporte de la 'A' (gris 70%), el facetado de filamentos (gris 40%) y la tipografía en negro puro.",
      thumbBg: "bg-slate-200 border-gray/40",
    },
    {
      id: "bn",
      name: "Blanco y Negro Puro (100% Contraste)",
      tag: "BLANCO Y NEGRO",
      category: "Monocromático",
      theme: "monochrome-white",
      containerBg: "#050505",
      ambientGlow: "rgba(255, 255, 255, 0.15)",
      sustrato: "Sellos de goma para expedición, micrograbado láser en conos y esténcil",
      tecnica: "Tinta 100% plana sin trama ni degradados / Grabado térmico",
      contraste: "Ratio 21:1 (Máximo Teórico)",
      descripcion:
        "Solución de contraste puro para procesos de un solo impacto. Toda la geometría se traduce a silueta blanca sobre negro absoluto, garantizando que el imagotipo sea reconocible a cualquier distancia y en micrograbado.",
      thumbBg: "bg-black border-slate-700",
    },
    {
      id: "bordado",
      name: "Textura Textil (Bordado Industrial)",
      tag: "BORDADO TEXTIL",
      category: "Texturas",
      theme: "embroidery",
      containerBg: "#1E293B",
      ambientGlow: "rgba(95, 168, 211, 0.25)",
      sustrato: "Gabardina y piqué de uniformes de operario, gorras de planta y etiquetas tejidas",
      tecnica: "Bordado computarizado con hilo de seda poliéster a 4.200 puntadas",
      contraste: "Relieve táctil 3D con pespunte perimetral",
      descripcion:
        "Simulación de aplicación sobre soporte textil real. El imagotipo incorpora relieve de puntada satinada en hilo Sky Blue con pespunte blanco perimetral y sombra volumétrica que replica el comportamiento del hilo bordado.",
      thumbBg: "bg-slate-800 border-slate-600",
    },
    {
      id: "kraft",
      name: "Textura Papel Kraft (Embalaje Eco)",
      tag: "PAPEL KRAFT",
      category: "Texturas",
      theme: "kraft",
      containerBg: "#E8D8C0",
      ambientGlow: "rgba(180, 83, 9, 0.15)",
      sustrato: "Bolsas de muestras de 1kg, fajas de bobina y cajas de cartón corrugado",
      tecnica: "Serigrafía a 1 tinta al agua sin solventes sintéticos",
      contraste: "Absorción natural en fibra celulósica reciclada",
      descripcion:
        "Diseñada específicamente para la línea ecológica ECO-SPUN y envíos de muestras. La tinta azul marino mate se aplica directamente sobre papel kraft reciclado sin plastificados, reflejando el compromiso sustentable de la fábrica.",
      thumbBg: "bg-amber-100 border-amber-800/30",
    },
  ];

  const currentVersion: VersionItem = versions.find((v) => v.id === selectedId) ?? (versions[0] as VersionItem);

  return (
    <SlideShell id="versiones" n={12} title="Presentación Versátil del Logotipo" kind="galeria" bgType="off">
      <div className="h-full flex flex-col justify-between py-1">
        <div className="space-y-3 my-auto">
          {/* Main Interactive Stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch max-w-6xl mx-auto">
            {/* Left: Dynamic Live Canvas Showcase */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-2">
              <div
                className="w-full h-52 sm:h-64 rounded-2xl border border-navy/15 relative overflow-hidden shadow-xl flex items-center justify-center transition-colors duration-500"
                style={{
                  backgroundColor: currentVersion.containerBg,
                  backgroundImage:
                    selectedId === "bordado"
                      ? "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)"
                      : selectedId === "kraft"
                      ? "radial-gradient(circle, rgba(120,53,15,0.08) 1px, transparent 1px)"
                      : showGrid
                      ? "linear-gradient(to right, rgba(95,168,211,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(95,168,211,0.06) 1px, transparent 1px)"
                      : "none",
                  backgroundSize: selectedId === "bordado" ? "4px 4px" : selectedId === "kraft" ? "6px 6px" : "32px 32px",
                }}
              >
                {/* Ambient Soft Glow Behind Logo */}
                <motion.div
                  key={currentVersion.id + "-glow"}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-56 h-56 rounded-full filter blur-3xl pointer-events-none"
                  style={{ backgroundColor: currentVersion.ambientGlow }}
                />

                {/* Technical Coordinates & Watermark */}
                <div className="absolute top-3 left-4 text-[8px] font-mono opacity-50 uppercase tracking-widest pointer-events-none">
                  STAGE // {currentVersion.tag}
                </div>

                <div className="absolute top-3 right-4 flex items-center space-x-2">
                  <button
                    onClick={() => setShowGrid(!showGrid)}
                    className="py-1 px-2 rounded bg-black/20 hover:bg-black/40 text-white/80 text-[8px] font-mono uppercase tracking-wider backdrop-blur-sm transition-all flex items-center space-x-1"
                    title="Alternar retícula técnica"
                  >
                    <Eye className="w-2.5 h-2.5" />
                    <span>{showGrid ? "Retícula: ON" : "Retícula: OFF"}</span>
                  </button>
                </div>

                {/* Central Morphing Logo Animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVersion.id}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative z-10 p-4"
                  >
                    <BrandLogo
                      variant="horizontal"
                      theme={currentVersion.theme}
                      size="lg"
                      withGlow={selectedId === "oscuro"}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Substrate tag on bottom-left */}
                <div className="absolute bottom-3 left-4 text-[8px] font-mono opacity-60 tracking-wider">
                  DELTA-E: &lt; 0.4 TOLERANCIA
                </div>
              </div>

              {/* Technical Description Bar */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVersion.id + "-desc"}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-navy/10 p-3 rounded-xl shadow-sm text-left flex justify-between items-center text-xs"
                >
                  <p className="text-[11px] text-gray leading-relaxed font-light max-w-xl">
                    {currentVersion.descripcion}
                  </p>
                  <span className="hidden sm:inline-block text-[9px] font-mono text-blue font-bold px-2 py-1 bg-blue/5 rounded border border-blue/15 shrink-0 ml-3">
                    {currentVersion.contraste}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: The 6 Interactive Selector Cards */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-gray uppercase tracking-widest font-bold flex items-center">
                  <Layers className="w-3.5 h-3.5 mr-1.5 text-blue" />
                  SELECCIONAR VARIANTE (6 CASOS)
                </span>
                <span className="text-[9px] font-mono text-blue font-semibold">Clic para animar</span>
              </div>

              {/* 3x2 Grid of Variation Cards */}
              <div className="grid grid-cols-2 gap-2">
                {versions.map((v) => {
                  const isSelected = selectedId === v.id;
                  return (
                    <motion.button
                      key={v.id}
                      onClick={() => setSelectedId(v.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-2.5 rounded-xl border text-left flex flex-col justify-between h-24 transition-all duration-300 relative overflow-hidden ${
                        isSelected
                          ? "bg-white border-blue shadow-md ring-2 ring-blue/30"
                          : "bg-navy/5 border-navy/10 hover:border-navy/30 hover:bg-white"
                      }`}
                    >
                      {/* Selected checkmark pill */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-blue text-white flex items-center justify-center shadow">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}

                      {/* Mini Logo Preview Thumbnail */}
                      <div
                        className={`w-full h-11 rounded-lg flex items-center justify-center p-1 border ${v.thumbBg}`}
                        style={{
                          backgroundImage:
                            v.id === "bordado"
                              ? "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)"
                              : v.id === "kraft"
                              ? "radial-gradient(circle, rgba(120,53,15,0.08) 1px, transparent 1px)"
                              : "none",
                          backgroundSize: v.id === "bordado" ? "3px 3px" : v.id === "kraft" ? "4px 4px" : "auto",
                        }}
                      >
                        <BrandLogo
                          variant="horizontal"
                          theme={v.theme}
                          size="xs"
                          showTagline={false}
                        />
                      </div>

                      {/* Card Title and Tag */}
                      <div className="mt-1 flex justify-between items-center">
                        <span
                          className={`text-[9px] font-mono font-bold tracking-tight uppercase truncate ${
                            isSelected ? "text-blue" : "text-navy"
                          }`}
                        >
                          {v.tag}
                        </span>
                        <span className="text-[8px] font-mono text-gray/80 uppercase">{v.category}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Technical Norm Footer Spec */}
              <div className="bg-navy/[0.03] border border-navy/10 p-2.5 rounded-xl text-left text-[9px] font-mono text-gray space-y-1">
                <div className="flex items-center space-x-1.5 text-navy font-bold">
                  <ShieldCheck className="w-3 h-3 text-blue" />
                  <span>NORMA ISO 12647 — REPRODUCCIÓN MULTISOPORTE</span>
                </div>
                <p className="font-light text-gray/80 leading-tight">
                  Sustrato: <strong>{currentVersion.sustrato}</strong>. Técnica recomendada: <strong>{currentVersion.tecnica}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Footer */}
        <div className="border-t border-navy/10 pt-3 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>MANUAL DE MARCA // ESPECIFICACIÓN TÉCNICA</span>
          <span>VERSATILIDAD Y REPRODUCCIÓN DE IDENTIDAD</span>
        </div>
      </div>
    </SlideShell>
  );
};
