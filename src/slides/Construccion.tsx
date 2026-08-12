import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2, LayoutGrid, Award } from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

export const Construccion: React.FC = () => {
  const [step, setStep] = useState(0);

  const stepsInfo = [
    {
      title: "BOCETOS PRELIMINARES",
      icon: <Edit2 className="w-5 h-5 text-blue" />,
      desc: "Búsqueda morfológica dibujada a mano. Se ensayaron combinaciones de las iniciales 'A' cruzadas con husos de hilandería. La idea del cono facetado y el devanado en planos superpuestos emergió como la representación más fiel.",
      meta: "Lápiz sobre papel, digitalización de trazos libres",
    },
    {
      title: "CONSTRUCCIÓN RETICULAR & PLANOS 3D",
      icon: <LayoutGrid className="w-5 h-5 text-blue" />,
      desc: "Traducción de bocetos a geometría vectorizada. Se estructuró un prisma triangular con facetas en torsión de 60°. Las bandas diagonales del filamento marcan la tensión dinámica entre los vértices.",
      meta: "Adobe Illustrator, grillado técnico, espaciado uniforme",
    },
    {
      title: "ISOTIPO & LOCKUP FINAL",
      icon: <Award className="w-5 h-5 text-blue" />,
      desc: "Consolidación de volúmenes e iluminación. El símbolo final unifica la solidez estructural del soporte Navy con el dinamismo cromático del hilo Sky Blue y la tipografía corporativa Raleway.",
      meta: "Vectores consolidados, color corporativo #5FA8D3 y #0D1D34",
    },
  ];

  return (
    <SlideShell id="construccion" n={7} title="Proceso de Construcción" kind="galeria" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Step description */}
          <div className="md:col-span-5 text-left space-y-6">
            <div className="flex items-center space-x-2">
              {stepsInfo[step]?.icon}
              <h3 className="font-mono font-bold text-xs uppercase text-blue tracking-widest">
                ETAPA 0{step + 1} // {stepsInfo[step]?.title}
              </h3>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-sm text-slate-800 font-normal leading-relaxed">
                  {stepsInfo[step]?.desc}
                </p>
                <div className="text-[11px] text-slate-600 font-mono bg-navy/5 p-2 rounded-lg inline-block border border-navy/10">
                  SISTEMA: {stepsInfo[step]?.meta}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stepper buttons */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`py-2 px-3 text-[10px] font-mono tracking-widest rounded border transition-all duration-300 ${
                    step === i
                      ? "bg-blue border-blue text-white shadow-md font-bold"
                      : "bg-white border-navy/15 text-slate-600 hover:border-blue/60 hover:text-navy font-medium shadow-sm"
                  }`}
                >
                  PASO 0{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Graphic Area */}
          <div className="md:col-span-7 flex flex-col items-center">
            <div className="w-full bg-white border border-navy/15 rounded-xl p-4 sm:p-6 shadow-xl h-48 sm:h-60 md:h-72 flex justify-center items-center relative overflow-hidden">
              <div className="absolute top-3 left-3 text-[9px] font-mono text-slate-500 font-semibold">
                ESTADO: {stepsInfo[step]?.title}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex justify-center items-center"
                >
                  {step === 0 && (
                    /* Sketch rendering */
                    <svg className="w-48 h-48 sm:w-56 sm:h-56" viewBox="0 0 100 100">
                      {/* Background circular guides */}
                      <circle cx="50" cy="55" r="35" className="stroke-slate-300/40" strokeWidth="0.5" strokeDasharray="2 4" fill="none" />
                      <circle cx="50" cy="55" r="25" className="stroke-slate-300/40" strokeWidth="0.5" strokeDasharray="2 4" fill="none" />
                      
                      {/* Right leg sketch (Navy part) */}
                      <path d="M50,20 L75,80 M52,20 L78,80 M48,20 L72,80 M50,20 L58,80 M55,20 L70,80" className="stroke-slate-600" strokeWidth="0.6" fill="none" />
                      <path d="M60,40 L70,40 M65,50 L75,50 M70,60 L80,60 M62,80 L78,80" className="stroke-slate-400" strokeWidth="0.4" fill="none" />
                      
                      {/* Left leg sketch (Sky part) */}
                      <path d="M50,20 L25,80 M50,20 L30,80 M48,20 L28,80" className="stroke-slate-400" strokeWidth="0.6" fill="none" />
                      
                      {/* Horizontal threads / bands sketch (Tension threads) */}
                      <path d="M35,40 L65,45 M34,42 L64,47 M33,44 L63,49" className="stroke-blue/40" strokeWidth="0.8" fill="none" />
                      <path d="M30,55 L70,60 M28,57 L68,62 M26,59 L66,64" className="stroke-blue/40" strokeWidth="0.8" fill="none" />
                      <path d="M25,70 L75,75 M23,72 L73,77" className="stroke-blue/40" strokeWidth="0.8" fill="none" />
                      
                      {/* Perspective lines */}
                      <line x1="10" y1="90" x2="90" y2="20" className="stroke-blue/20" strokeWidth="0.5" strokeDasharray="1 3" />
                      <line x1="10" y1="20" x2="90" y2="90" className="stroke-blue/20" strokeWidth="0.5" strokeDasharray="1 3" />
                    </svg>
                  )}

                  {step === 1 && (
                    /* Mathematical grid construction rendering */
                    <svg className="w-48 h-48 sm:w-56 sm:h-56" viewBox="0 0 100 100">
                      {/* Grid */}
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(95,168,211,0.15)" strokeWidth="0.3" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                      
                      {/* Axes */}
                      <line x1="50" y1="0" x2="50" y2="100" className="stroke-blue/30" strokeWidth="0.5" />
                      <line x1="0" y1="80" x2="100" y2="80" className="stroke-blue/30" strokeWidth="0.5" />
                      
                      {/* Blueprint "A" Shapes */}
                      {/* Right leg solid blueprint (Navy) */}
                      <polygon points="50,20 65,20 85,80 65,80" className="stroke-navy/80 fill-navy/10" strokeWidth="1" />
                      
                      {/* Left leg solid blueprint (Sky) */}
                      <polygon points="50,20 35,20 15,80 35,80" className="stroke-sky/80 fill-sky/10" strokeWidth="1" />
                      
                      {/* The cuts/bands over the left leg representing thread */}
                      <polygon points="28,40 55,45 52,52 24,47" className="stroke-sky fill-white" strokeWidth="1" />
                      <polygon points="22,55 50,60 47,67 19,62" className="stroke-sky fill-white" strokeWidth="1" />
                      
                      {/* Angle annotations & Guides */}
                      <path d="M 65,80 A 15 15 0 0 0 75,70" className="stroke-blue" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                      <text x="75" y="65" className="fill-blue text-[4px] font-mono">60°</text>
                      
                      <path d="M 35,80 A 15 15 0 0 1 25,70" className="stroke-blue" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                      <text x="15" y="65" className="fill-blue text-[4px] font-mono">60°</text>
                      
                      {/* Measurement nodes */}
                      <circle cx="50" cy="20" r="1.5" className="fill-blue" />
                      <circle cx="15" cy="80" r="1.5" className="fill-blue" />
                      <circle cx="85" cy="80" r="1.5" className="fill-blue" />
                    </svg>
                  )}

                  {step === 2 && (
                    /* Final polished brand logo rendering (Isotype ONLY per user request) */
                    <div className="flex flex-col items-center justify-center p-4">
                      <BrandLogo
                        variant="isotype"
                        theme="light"
                        size="2xl"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
