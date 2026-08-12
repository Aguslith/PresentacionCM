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
                <p className="text-sm text-navy/80 font-light leading-relaxed">
                  {stepsInfo[step]?.desc}
                </p>
                <div className="text-[10px] text-gray font-mono bg-navy/5 p-2 rounded inline-block">
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
                      : "bg-navy/5 border-navy/10 text-gray hover:border-blue/40 hover:text-navy"
                  }`}
                >
                  PASO 0{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Graphic Area */}
          <div className="md:col-span-7 flex flex-col items-center">
            <div className="w-full bg-white border border-navy/10 rounded-xl p-4 sm:p-6 shadow-xl h-48 sm:h-60 md:h-72 flex justify-center items-center relative overflow-hidden">
              <div className="absolute top-3 left-3 text-[8px] font-mono text-gray">
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
                    <svg className="w-48 h-48" viewBox="0 0 100 100">
                      <path d="M50,15 L80,75 L20,75 Z" className="stroke-gray/40" strokeWidth="0.5" fill="none" />
                      <path
                        d="M50,18 L76,73 L24,73 Z M50,28 L64,65 L36,65 Z"
                        className="stroke-navy/60"
                        strokeWidth="1.2"
                        strokeDasharray="1 1"
                        fill="none"
                      />
                      <line x1="25" y1="40" x2="75" y2="55" className="stroke-navy/40" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="25" y1="52" x2="75" y2="67" className="stroke-navy/40" strokeWidth="1" strokeDasharray="2 2" />
                      
                      <circle cx="50" cy="50" r="30" className="stroke-blue/20" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
                      <line x1="50" y1="5" x2="50" y2="95" className="stroke-blue/20" strokeWidth="0.5" />
                    </svg>
                  )}

                  {step === 1 && (
                    /* Mathematical grid construction rendering */
                    <svg className="w-48 h-48" viewBox="0 0 100 100">
                      <line x1="10" y1="50" x2="90" y2="50" className="stroke-blue/20" strokeWidth="0.5" />
                      <line x1="50" y1="10" x2="50" y2="90" className="stroke-blue/20" strokeWidth="0.5" />
                      
                      <path d="M50,15 L80,75 L20,75 Z" className="stroke-blue/50" strokeWidth="0.8" fill="none" />
                      <polygon points="50,15 78,80 62,80 38,30" className="stroke-navy/70 fill-navy/10" strokeWidth="1" />
                      <polygon points="20,80 45,20 60,20 35,80" className="stroke-blue fill-blue/15" strokeWidth="1" />
                      
                      <line x1="28" y1="40" x2="68" y2="52" className="stroke-blue" strokeWidth="1.5" />
                      <line x1="25" y1="52" x2="65" y2="64" className="stroke-blue" strokeWidth="1.5" />
                      <line x1="22" y1="64" x2="62" y2="76" className="stroke-blue" strokeWidth="1.5" />
                      
                      <text x="82" y="78" className="fill-blue text-[5px] font-mono">60°</text>
                      <text x="18" y="78" className="fill-blue text-[5px] font-mono">60°</text>
                    </svg>
                  )}

                  {step === 2 && (
                    /* Final polished brand logo rendering */
                    <div className="flex flex-col items-center justify-center p-4">
                      <BrandLogo
                        variant="horizontal"
                        theme="light"
                        size="md"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="text-[10px] text-gray uppercase tracking-widest font-mono mt-3">
              Fig. 7.1: Simulación interactiva del proceso de diseño
            </span>
          </div>
        </div>

        <div className="border-t border-navy/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>DESARROLLO DE BRANDING</span>
          <span>SÍNTESIS GEOMÉTRICA</span>
        </div>
      </div>
    </SlideShell>
  );
};
