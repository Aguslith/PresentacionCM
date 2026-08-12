import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { Heart, MessageCircle, Share2, Play, Eye } from "lucide-react";

type ReelType = "algodon" | "conera" | "calidad";

export const Reels: React.FC = () => {
  const [reel, setReel] = useState<ReelType>("algodon");

  const reelInfo = {
    algodon: {
      title: "Algodón a Hilo 30s: El Proceso",
      views: "34,210",
      likes: "2,410",
      comments: "112",
      desc: "De la paca de algodón crudo al filamento fino listo para tejer. Descubrí el estirado, peinado y torsión en este recorrido rápido de 15 segundos. #ProcesoTextil #AlgodonPeinado #Hilanderia",
      animation: (
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Fiber drafting roller rotation animation */}
          <circle cx="60" cy="80" r="15" className="fill-none stroke-blue" strokeWidth="1.5" />
          <circle cx="60" cy="80" r="2" className="fill-blue" />
          <line x1="60" y1="65" x2="60" y2="95" className="stroke-blue/40" strokeWidth="1" />
          
          <circle cx="140" cy="120" r="20" className="fill-none stroke-blue" strokeWidth="1.5" />
          <circle cx="140" cy="120" r="2" className="fill-blue" />
          <line x1="140" y1="100" x2="140" y2="140" className="stroke-blue/40" strokeWidth="1" />

          {/* Glowing thread flowing through */}
          <path
            d="M20,80 C80,80 80,120 180,120"
            className="stroke-blue"
            strokeWidth="3.5"
            fill="none"
            strokeDasharray="10 5"
            strokeDashoffset="10"
            style={{
              animation: "drawThread 2s linear infinite"
            }}
          />
          {/* Arrows showing movement */}
          <polygon points="100,90 108,93 100,96" className="fill-blue" />
        </svg>
      )
    },
    conera: {
      title: "Purgador Óptico: Cero Fallas",
      views: "48,950",
      likes: "4,120",
      comments: "189",
      desc: "Así funciona el sensor infrarrojo de nuestra conera automática Savio. Ante cualquier impureza, corta y une mediante splicer de aire en milisegundos. #TecnologiaTextil #Automatizacion #Savio",
      animation: (
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Bobbin on top */}
          <rect x="70" y="30" width="60" height="40" rx="3" className="fill-none stroke-blue" strokeWidth="1.5" />
          <ellipse cx="100" cy="30" rx="30" ry="4" className="stroke-blue" strokeWidth="1" />
          
          {/* Sensor scanner with laser light */}
          <rect x="85" y="100" width="30" height="20" rx="2" className="fill-blue/5 stroke-blue" strokeWidth="1.5" />
          <line x1="85" y1="110" x2="115" y2="110" className="stroke-red-500" strokeWidth="1" />
          <circle cx="100" cy="110" r="2" className="fill-red-500 animate-ping" />

          {/* Running thread */}
          <line x1="100" y1="10" x2="100" y2="180" className="stroke-blue" strokeWidth="2.5" />
          
          {/* Technical scanning box */}
          <rect x="40" y="90" width="120" height="40" rx="4" fill="none" className="stroke-red-500/20" strokeWidth="1" strokeDasharray="3 3" />
          <text x="100" y="145" className="fill-red-500 text-[6px] font-mono text-center" textAnchor="middle">DETECTOR DE NUDOS INFRARROJO</text>
        </svg>
      )
    },
    calidad: {
      title: "Laboratorio de Tensión y Torsión",
      views: "18,430",
      likes: "1,290",
      comments: "65",
      desc: "Fuerza constante en cN/tex. Sometemos nuestras bobinas de alpaca y lana a cargas de tracción dinámicas para simular el telar más exigente. #ControlDeCalidad #TextilLab #Ingenieria",
      animation: (
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Tension meter circle */}
          <circle cx="100" cy="100" r="40" className="fill-none stroke-blue" strokeWidth="2" />
          <circle cx="100" cy="100" r="2" className="fill-blue" />
          
          {/* Dial hand animating tension */}
          <line x1="100" y1="100" x2="80" y2="70" className="stroke-blue" strokeWidth="2" />
          
          {/* Bounding arrows of tension */}
          <path d="M100,30 L100,50" className="stroke-blue/40" strokeWidth="1" />
          <polygon points="100,30 97,35 103,35" className="fill-blue" />

          <path d="M100,150 L100,170" className="stroke-blue/40" strokeWidth="1" />
          <polygon points="100,170 97,165 103,165" className="fill-blue" />

          {/* Running thread */}
          <line x1="100" y1="30" x2="100" y2="170" className="stroke-blue" strokeWidth="1.5" strokeDasharray="4 4" />
          
          <text x="100" y="55" className="fill-blue font-bold text-[8px] font-mono" textAnchor="middle">TENSIÓN: 14.5 cN</text>
        </svg>
      )
    }
  };

  const activeReel = reelInfo[reel];

  return (
    <SlideShell id="reels" n={22} title="Estrategia: Video Reels" kind="social" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Description & selectors */}
          <div className="md:col-span-6 text-left space-y-5">
            <p className="text-sm text-gray font-light leading-relaxed">
              El contenido en formato Reel destaca la maquinaria pesada de la fábrica y los controles microscópicos de laboratorio. Atrae audiencias interesadas en el rigor operacional.
            </p>

            <div className="flex flex-col space-y-2">
              <span className="text-[10px] font-mono text-gray uppercase tracking-widest">TEMAS DE REEL B2B</span>
              <div className="flex flex-col space-y-2">
                {(["algodon", "conera", "calidad"] as ReelType[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setReel(r)}
                    className={`py-2 px-3 text-[10px] font-mono text-left uppercase tracking-wider rounded border transition-all duration-300 flex justify-between items-center ${
                      reel === r
                        ? "bg-blue border-blue text-white"
                        : "bg-navy/5 border-navy/10 text-gray hover:border-blue/40"
                    }`}
                  >
                    <span>{reelInfo[r].title}</span>
                    <Play className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reel Simulator Player mockup */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="w-56 h-[380px] rounded-[24px] border-[5px] border-slate-700 bg-white shadow-2xl relative overflow-hidden flex flex-col justify-between p-3">
              {/* Spinning loop simulator box */}
              <div className="absolute inset-0 bg-navy flex items-center justify-center">
                {activeReel.animation}
              </div>

              {/* Top View Count Indicator */}
              <div className="z-10 bg-black/45 backdrop-blur-sm rounded px-2 py-1 text-[8px] font-mono text-white flex items-center space-x-1 self-start">
                <Eye className="w-3.5 h-3.5" />
                <span>{activeReel.views} vistas</span>
              </div>

              {/* Floating Right Controls */}
              <div className="absolute right-3 bottom-16 z-10 flex flex-col space-y-4 text-white items-center">
                <button className="flex flex-col items-center space-y-0.5">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="text-[8px] font-mono">{activeReel.likes}</span>
                </button>
                <button className="flex flex-col items-center space-y-0.5">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span className="text-[8px] font-mono">{activeReel.comments}</span>
                </button>
                <button className="flex flex-col items-center">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="z-10 bg-gradient-to-t from-black via-black/70 to-transparent p-3 rounded-b-lg text-left text-white space-y-1 mt-auto w-full">
                <span className="text-[8px] font-bold text-sky uppercase">@alpacladd.hilados</span>
                <p className="text-[9px] text-off/80 font-sans leading-tight line-clamp-2">
                  {activeReel.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
