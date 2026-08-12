import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { MockupCard } from "../components/MockupCard";
import { BrandLogo } from "../components/BrandLogo";
import { Grid, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Logo: React.FC = () => {
  const [variant, setVariant] = useState<"horizontal" | "vertical" | "isotype">("horizontal");
  const [showGrid, setShowGrid] = useState<boolean>(true);

  return (
    <SlideShell id="logo" n={5} title="Imagotipo Principal" kind="mockup" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Controls & Notes */}
          <div className="md:col-span-5 text-left space-y-5">
            <p className="text-sm text-gray font-light leading-relaxed">
              La marca <strong className="text-off font-semibold">ALPACLADD</strong> utiliza un imagotipo de alta recordación y arquitectura 3D. El isotipo integra tres elementos clave en su morfología: la silueta del cono de hilado, el devanado en bandas paralelas de hilos continuos en Sky Blue, y la inicial estructural "A" en azul institucional profundo.
            </p>

            {/* Select Switcher */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-gray uppercase tracking-widest">
                  VERSIÓN DE LOGOTIPO
                </span>
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`inline-flex items-center space-x-1 text-[9px] font-mono px-2 py-0.5 rounded border transition-all ${
                    showGrid
                      ? "border-sky/40 bg-sky/10 text-sky"
                      : "border-sky/15 bg-transparent text-gray hover:text-off"
                  }`}
                >
                  <Grid className="w-2.5 h-2.5" />
                  <span>{showGrid ? "Retícula: ON" : "Retícula: OFF"}</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "horizontal", label: "Horizontal" },
                  { id: "vertical", label: "Vertical" },
                  { id: "isotype", label: "Isotipo Solo" },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id as any)}
                    className={`py-2 px-1 text-[10px] font-mono uppercase tracking-wider rounded border transition-all duration-300 ${
                      variant === v.id
                        ? "bg-sky/20 border-sky text-sky shadow-lg shadow-sky/10 font-bold"
                        : "bg-navy/40 border-sky/15 text-gray hover:border-sky/40 hover:text-off"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Construction rules */}
            <div className="border border-sky/15 bg-sky/5 p-4 rounded-lg space-y-1.5">
              <div className="flex items-center space-x-2">
                <Layers className="w-3.5 h-3.5 text-sky" />
                <h4 className="text-xs font-mono font-bold text-sky uppercase">
                  DETALLES DE LOCKUP & TIPOGRAFÍA
                </h4>
              </div>
              <p className="text-[11px] text-gray/80 leading-relaxed font-light">
                La tipografía base es <strong className="text-off font-semibold">Raleway Bold</strong> con kerning expandido (+0.18em) para conferir escala corporativa, acompañada del descriptor <em>"Fábrica de Hilados"</em> en peso Medium y tracking técnico (+0.35em).
              </p>
            </div>
          </div>

          {/* Interactive Logo Canvas */}
          <div className="md:col-span-7 flex flex-col items-center">
            <MockupCard className="w-full flex flex-col items-center justify-center p-8 bg-navy/80 min-h-80 relative overflow-hidden group">
              {/* Background ambient lighting */}
              <div className="absolute w-72 h-72 bg-sky/10 rounded-full filter blur-3xl pointer-events-none" />

              {/* Technical Reticle grid overlay */}
              {showGrid && (
                <div className="absolute inset-0 pointer-events-none select-none">
                  <svg className="w-full h-full" fill="none">
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="stroke-sky/20" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" className="stroke-sky/20" strokeWidth="1" strokeDasharray="4 4" />
                    <rect x="10%" y="15%" width="80%" height="70%" fill="none" className="stroke-sky/10" strokeWidth="1" />
                    <circle cx="50%" cy="50%" r="90" className="stroke-sky/10" strokeWidth="0.5" strokeDasharray="2 4" />
                    <text x="12%" y="20%" className="fill-sky/40 text-[8px] font-mono">X = RATIO BASE</text>
                    <text x="88%" y="82%" className="fill-sky/40 text-[8px] font-mono" textAnchor="end">ALPACLADD GEOMETRÍA 3D</text>
                  </svg>
                </div>
              )}

              {/* Brand Logo Component with animated transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={variant}
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="z-10 py-6"
                >
                  <BrandLogo
                    variant={variant}
                    theme="navy"
                    size={variant === "isotype" ? "xl" : "lg"}
                    withGlow={true}
                  />
                </motion.div>
              </AnimatePresence>
            </MockupCard>
            <span className="text-[10px] text-gray uppercase tracking-widest font-mono mt-3">
              Fig. 5.1: Vectorización y arquitectura tridimensional oficial
            </span>
          </div>
        </div>

        <div className="border-t border-sky/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>IDENTIDAD CORPORATIVA</span>
          <span>ESTRUCTURA DE LOGO</span>
        </div>
      </div>
    </SlideShell>
  );
};
