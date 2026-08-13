import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { BrandLogo } from "../components/BrandLogo";
import { Grid, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Logo: React.FC = () => {
  const [variant, setVariant] = useState<"imagotipo" | "isotipo" | "logotipo" | "isologo">("imagotipo");
  const [showGrid, setShowGrid] = useState<boolean>(true);

  // Dynamic description based on selected variant
  const getVariantDescription = () => {
    switch (variant) {
      case "imagotipo":
        return "El Imagotipo combina el símbolo (icono) con el texto. En esta versión conviven ambos elementos de forma separada pero equilibrada, ideal para firmas corporativas formales.";
      case "isotipo":
        return "El Isotipo integra la silueta del cono de hilado y la inicial estructural 'A' en azul institucional profundo. Posee alta recordación visual y funciona de manera independiente.";
      case "logotipo":
        return "El Logotipo utiliza únicamente la tipografía corporativa. Está compuesto por el nombre de la marca (Raleway Bold) proyectando escala corporativa y seriedad técnica.";
      case "isologo":
        return "El Isologo unifica el símbolo y el texto dentro de una misma forma indivisible o emblema. Ideal para sellos de calidad, etiquetas de producto o avatares de redes sociales.";
      default:
        return "";
    }
  };

  return (
    <SlideShell id="logo" n={5} title="Tipos de logos para Alpacladd" kind="mockup" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Controls & Notes */}
          <div className="md:col-span-5 text-left space-y-5">
            <p className="text-sm text-slate-200 font-normal leading-relaxed min-h-[80px]">
              {getVariantDescription()}
            </p>

            {/* Select Switcher */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest font-semibold">
                  VERSIÓN DE LOGOTIPO
                </span>
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`inline-flex items-center space-x-1 text-[9px] font-mono px-2 py-0.5 rounded border transition-all ${
                    showGrid
                      ? "border-sky/50 bg-sky/15 text-sky font-bold"
                      : "border-sky/20 bg-transparent text-slate-300 hover:text-white"
                  }`}
                >
                  <Grid className="w-2.5 h-2.5" />
                  <span>{showGrid ? "Retícula: ON" : "Retícula: OFF"}</span>
                </button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-2">
                {[
                  { id: "imagotipo", label: "Imagotipo" },
                  { id: "isotipo", label: "Isotipo" },
                  { id: "logotipo", label: "Logotipo" },
                  { id: "isologo", label: "Isologo" },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id as any)}
                    className={`py-2 px-1 text-[10px] font-mono uppercase tracking-wider rounded border transition-all duration-300 ${
                      variant === v.id
                        ? "bg-sky/25 border-sky text-sky shadow-lg shadow-sky/15 font-bold"
                        : "bg-navy/50 border-sky/20 text-slate-300 hover:border-sky/40 hover:text-white"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Construction rules */}
            <div className="border border-sky/20 bg-sky/5 p-4 rounded-lg space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2">
                <Layers className="w-3.5 h-3.5 text-sky" />
                <h4 className="text-xs font-mono font-bold text-sky uppercase">
                  DETALLES DE LOCKUP & TIPOGRAFÍA
                </h4>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                La tipografía base es <strong className="text-white font-bold">Raleway Bold</strong> con kerning expandido (+0.18em) para conferir escala corporativa, acompañada del descriptor <em className="text-sky/90">"Fábrica de Hilados"</em> en peso Medium y tracking técnico (+0.35em).
              </p>
            </div>
          </div>

          {/* Interactive Logo Canvas - Open Stage without box, Large scale, Floating Levitation */}
          <div className="md:col-span-7 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[420px] w-full select-none">
            {/* Background ambient lighting aura */}
            <div className="absolute w-80 sm:w-[500px] h-80 sm:h-[500px] bg-sky/15 rounded-full filter blur-[110px] pointer-events-none -z-10" />
            <div className="absolute w-52 sm:w-72 h-52 sm:h-72 bg-blue/20 rounded-full filter blur-[80px] pointer-events-none -z-10" />

            {/* Technical Reticle grid overlay without enclosed bounding box */}
            {showGrid && (
              <div className="absolute inset-0 pointer-events-none select-none overflow-visible flex items-center justify-center">
                <svg className="w-full h-full max-h-[380px]" viewBox="0 0 600 360" fill="none">
                  {/* Subtle Center Crosshairs */}
                  <line x1="10" y1="180" x2="590" y2="180" className="stroke-sky/15" strokeWidth="1" strokeDasharray="5 5" />
                  <line x1="300" y1="15" x2="300" y2="345" className="stroke-sky/15" strokeWidth="1" strokeDasharray="5 5" />
                  
                  {/* Radial Guides */}
                  <circle cx="300" cy="180" r="130" className="stroke-sky/15" strokeWidth="0.8" strokeDasharray="3 5" />
                  <circle cx="300" cy="180" r="170" className="stroke-sky/10" strokeWidth="0.6" strokeDasharray="2 6" />

                  {/* Technical Perimeter Labels */}
                  <text x="20" y="30" className="fill-sky/40 text-[9px] font-mono tracking-widest">X-AXIS // LOCKUP 1:1</text>
                  <text x="580" y="30" className="fill-sky/40 text-[9px] font-mono tracking-widest" textAnchor="end">ALPACLADD // ARCHITECTURE</text>
                  <text x="300" y="350" className="fill-sky/30 text-[8px] font-mono tracking-widest" textAnchor="middle">SISTEMA VECTORIAL DINÁMICO</text>
                </svg>
              </div>
            )}

            {/* Continuous Floating / Levitation Container */}
            <motion.div
              className="relative flex flex-col items-center justify-center w-full py-4 z-10"
              animate={{
                y: [-12, 12, -12],
                rotateZ: [-0.3, 0.3, -0.3],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Brand Logo Component with animated transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={variant}
                  initial={{ opacity: 0, scale: 0.88, y: 14, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.08, y: -14, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col items-center justify-center w-full ${
                    variant === "isotipo" ? "scale-110 sm:scale-125 py-4" : ""
                  }`}
                >
                  <BrandLogo
                    variant={variant === "isotipo" ? "isotype" : variant}
                    theme="navy"
                    size="2xl"
                    withGlow={true}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Pedestal / Ambient Floor Glow synchronised with levitation */}
              <motion.div
                className="absolute -bottom-8 w-56 sm:w-80 h-7 rounded-full bg-sky/30 filter blur-xl pointer-events-none"
                animate={{
                  scaleX: [1.2, 0.8, 1.2],
                  scaleY: [1.2, 0.75, 1.2],
                  opacity: [0.65, 0.25, 0.65],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
