import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";

export const Concepto: React.FC = () => {
  const [torsion, setTorsion] = useState(650); // Twist per meter (tpm)

  return (
    <SlideShell
      id="concepto"
      n={3}
      title="Concepto"
      kind="texto"
      bgType="navy"
    >
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text Description */}
          <div className="md:col-span-6 text-left space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-sky">
              "Precisión que transforma fibras en hilos"
            </h3>
            <p className="text-sm md:text-base text-gray font-light leading-relaxed">
              El núcleo conceptual de ALPACLADD radica en la transición ordenada: de la materia cruda y dispersa (fibras sueltas) al producto estructurado y fuerte (hilos continuos). La precisión es nuestro vector clave; cada torsión, estirado y purgado de hilo responde a un cálculo milimétrico.
            </p>
            <p className="text-sm md:text-base text-gray font-light leading-relaxed">
              Esta transformación física se refleja en nuestra identidad: líneas paralelas que se consolidan, retículas limpias y una geometría que une simplicidad visual con rigor técnico.
            </p>

            {/* Interactive Control for demo */}
            <div className="border border-sky/15 bg-sky/5 p-4 rounded-lg space-y-3">
              <div className="flex justify-between text-[11px] font-mono text-gray">
                <span>SIMULADOR DE TORSIÓN</span>
                <span className="text-sky">{torsion} TPM (Vueltas/m)</span>
              </div>
              <input
                type="range"
                min="300"
                max="1200"
                value={torsion}
                onChange={(e) => setTorsion(Number(e.target.value))}
                className="w-full h-1 bg-navy border border-sky/20 rounded-lg appearance-none cursor-pointer accent-sky"
              />
              <div className="text-[10px] text-gray/70">
                Ajuste la torsión para observar la densidad y el ángulo de espiral resultante del hilo de algodón peinado.
              </div>
            </div>
          </div>

          {/* Interactive SVG Diagram */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="w-full bg-navy/50 border border-sky/10 rounded-xl p-6 relative overflow-hidden">
              <div className="text-[9px] font-mono text-gray/80 absolute top-3 left-3">
                ANÁLISIS ESTRUCTURAL DE FIBRA
              </div>

              {/* Dynamic SVG twisted yarn */}
              <svg className="w-full h-44" viewBox="0 0 400 150">
                {/* Fibers entering from left (dispersed) */}
                <path
                  d="M10,40 Q60,38 120,60"
                  className="stroke-sky/30"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M10,65 Q60,60 120,70"
                  className="stroke-sky/20"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M10,85 Q60,82 120,80"
                  className="stroke-sky/40"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M10,110 Q60,95 120,90"
                  className="stroke-sky/20"
                  strokeWidth="1.6"
                  fill="none"
                />

                {/* Drafting rolls representation */}
                <rect x="110" y="45" width="20" height="60" rx="3" fill="none" className="stroke-sky/20" strokeWidth="1" strokeDasharray="2 2" />
                <text x="120" y="40" className="fill-sky/40 text-[7px] font-mono" textAnchor="middle">ESTIRADO</text>

                {/* Twisted fiber consolidation (middle to right) */}
                {/* Helix path based on state 'torsion' */}
                <path
                  d={`M130,75 C160,${75 - torsion/40} 180,${75 + torsion/40} 210,75 C240,${75 - torsion/40} 260,${75 + torsion/40} 290,75 T380,75`}
                  className="stroke-sky"
                  strokeWidth="3.5"
                  fill="none"
                  strokeDasharray={torsion > 800 ? "none" : "8 2"}
                />

                {/* Highlight threads wrapped around */}
                <path
                  d={`M130,75 T170,75 T210,75 T250,75 T290,75 T330,75 T370,75`}
                  className="stroke-sky/80"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Spindle head on the right */}
                <circle cx="380" cy="75" r="4" className="fill-off" />
                <path d="M380,50 L380,100" className="stroke-sky/40" strokeWidth="1.5" />
                <text x="380" y="45" className="fill-sky/60 text-[7px] font-mono" textAnchor="middle">HILADO</text>
              </svg>

              <div className="flex justify-between items-center text-[10px] font-mono text-gray mt-2 pt-2 border-t border-sky/10">
                <span>Estado: Torsionado</span>
                <span className="text-sky font-semibold">Tensión: OK</span>
              </div>
            </div>
            <span className="text-[10px] text-gray uppercase tracking-widest font-mono mt-3">
              Fig. 3.1: Proceso de torsión de filamento continuo
            </span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
