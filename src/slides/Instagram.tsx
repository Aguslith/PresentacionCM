import React from "react";
import { SlideShell } from "../components/SlideShell";
import { CheckCircle2, Factory, Layers, Settings, BookOpen } from "lucide-react";

export const Instagram: React.FC = () => {
  const highlights = [
    { label: "La Planta", icon: <Factory className="w-5 h-5 text-sky" /> },
    { label: "Productos", icon: <Layers className="w-5 h-5 text-sky" /> },
    { label: "Procesos", icon: <Settings className="w-5 h-5 text-sky" /> },
    { label: "Academia", icon: <BookOpen className="w-5 h-5 text-sky" /> },
  ];

  return (
    <SlideShell id="instagram" n={19} title="Perfil de Instagram" kind="social" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="max-w-2xl mx-auto w-full bg-navy/60 border border-sky/15 rounded-xl p-6 shadow-2xl text-left space-y-6 my-auto">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-sky/10">
            {/* Logo Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-navy border-2 border-sky flex items-center justify-center shrink-0 shadow-lg shadow-sky/20 overflow-hidden p-3 bg-gradient-to-b from-navy to-[#050D18]">
              <img
                src="/logotipo.png"
                alt="ALPACLADD Instagram Profile"
                className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(95,168,211,0.4)]"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold font-sans text-off tracking-wide">
                  alpacladd.hilados
                </h3>
                <CheckCircle2 className="w-4 h-4 text-sky fill-sky/20" />
                <span className="text-[10px] font-mono border border-sky/20 text-sky px-2 py-0.5 rounded bg-sky/5 uppercase">
                  B2B Brand
                </span>
              </div>

              {/* Stats */}
              <div className="flex space-x-6 text-xs font-mono">
                <div>
                  <span className="font-bold text-off">112</span> <span className="text-gray">posts</span>
                </div>
                <div>
                  <span className="font-bold text-off">8,421</span> <span className="text-gray">followers</span>
                </div>
                <div>
                  <span className="font-bold text-off">341</span> <span className="text-gray">following</span>
                </div>
              </div>

              {/* Bio */}
              <div className="text-xs text-gray space-y-1 font-sans">
                <span className="font-bold text-off block">ALPACLADD — Fábrica de Hilados</span>
                <p className="font-light leading-relaxed">
                  Precisión textil en hilados peinados y continuos. Algodón, Lana y Alpaca de grado industrial. 🏭 Planta automatizada en Buenos Aires. 🧶
                </p>
                <a
                  href="https://alpacladd.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky font-mono font-medium hover:underline block"
                >
                  linktr.ee/alpacladd.hilados
                </a>
              </div>
            </div>
          </div>

          {/* Highlights / Stories Destacadas */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-gray uppercase tracking-widest">
              HISTORIAS DESTACADAS
            </h4>
            <div className="flex space-x-6 overflow-x-auto no-scrollbar py-2">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-1.5 shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-navy border border-sky/20 flex items-center justify-center shadow hover:border-sky transition-colors duration-300">
                    <div className="p-2.5 bg-sky/5 rounded-full">{h.icon}</div>
                  </div>
                  <span className="text-[9px] font-mono text-gray tracking-wider uppercase">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-sky/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>SOCIAL MEDIA ESTRATEGIA</span>
          <span>PERFIL CORPORATIVO</span>
        </div>
      </div>
    </SlideShell>
  );
};
