import React from "react";
import { SlideShell } from "../components/SlideShell";
import { Layers, Cpu, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const Pilares: React.FC = () => {
  const pillarsList = [
    {
      num: "01",
      title: "PRODUCTO",
      icon: <Layers className="w-6 h-6 text-blue" />,
      desc: "Fibras de longitud óptima seleccionadas. Hilados peinados de torsión controlada que eliminan el pilling y aseguran un calibre uniforme.",
      label: "EXCELENCIA MATERIAL",
    },
    {
      num: "02",
      title: "PROCESO",
      icon: <Cpu className="w-6 h-6 text-blue" />,
      desc: "Purificación electrónica por espectro óptico en coneras automáticas. Detección y corte automático de cualquier neps o impureza.",
      label: "TECNOLOGÍA SUIZA",
    },
    {
      num: "03",
      title: "PERSONAS",
      icon: <Heart className="w-6 h-6 text-blue" />,
      desc: "Operarios altamente capacitados e ingenieros dedicados. Entorno seguro, sustentable y con foco en el desarrollo humano continuo.",
      label: "VALOR INTERNO",
    },
    {
      num: "04",
      title: "CONOCIMIENTO",
      icon: <BookOpen className="w-6 h-6 text-blue" />,
      desc: "Asistencia técnica personalizada para tejedores. Creación de la academia ALPACLADD para compartir la ciencia de la hilatura.",
      label: "APORTE DIDÁCTICO",
    },
  ];

  return (
    <SlideShell id="pilares" n={18} title="Nuestros Cuatro Pilares" kind="galeria" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 my-auto text-left">
          {pillarsList.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, borderColor: "#1D5A8F" }}
              className="border border-navy/15 bg-white p-3.5 sm:p-5 rounded-lg flex flex-col justify-between h-44 sm:h-56 md:h-64 shadow-md transition-shadow duration-300 hover:shadow-lg relative overflow-hidden"
            >
              {/* Technical background overlay */}
              <div className="absolute top-0 right-0 p-2 text-navy/[0.04] text-5xl font-mono font-bold leading-none select-none">
                {p.num}
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-navy/5 rounded">{p.icon}</div>
                  <h4 className="font-bold text-sm tracking-wider text-navy uppercase font-mono">
                    {p.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-700 font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="border-t border-navy/15 pt-2 flex justify-between items-center text-[10px] text-slate-600 font-mono font-semibold">
                <span>{p.label}</span>
                <span>SEC // {p.num}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
