import React, { useState, useMemo } from "react";
import { SlideShell } from "../components/SlideShell";

export const Concepto: React.FC = () => {
  const [torsion, setTorsion] = useState(650); // Twist per meter (tpm)

  // Math to generate realistic 3D intertwining plies for the yarn
  const { plies, energySpiral } = useMemo(() => {
    const t = (torsion - 300) / (1200 - 300); // 0 to 1
    const minFreq = 2;
    const maxFreq = 25;
    const freq = minFreq + t * (maxFreq - minFreq);
    
    // As torsion increases, the yarn becomes tighter (smaller amplitude)
    const minAmp = 2.5;
    const maxAmp = 10;
    const amp = maxAmp - t * (maxAmp - minAmp);

    const startX = 130;
    const endX = 380;
    const width = endX - startX;
    const totalPlies = 3;

    // Generate path strings for the plies
    const generatedPlies = Array.from({ length: totalPlies }).map((_, i) => {
      const phase = (i / totalPlies) * Math.PI * 2;
      const points = [];
      for (let x = 0; x <= width; x += 2) {
        const angle = (x / width) * Math.PI * 2 * freq + phase;
        // Introduce a slight dampening at the start to connect with the draft fibers
        const damp = Math.min(1, x / 20); 
        const y = 75 + Math.sin(angle) * amp * damp;
        points.push(`${x === 0 ? "M" : "L"} ${startX + x},${y}`);
      }
      return points.join(" ");
    });

    // Generate an "energy spiral" that wraps around for an epic optical effect
    const energyPoints = [];
    for (let x = 0; x <= width; x += 4) {
      // Counter-rotating high-frequency spiral
      const angle = (x / width) * Math.PI * 2 * (freq * 1.5) - (Math.PI / 2);
      const damp = Math.min(1, x / 30);
      const y = 75 + Math.sin(angle) * (amp + 3) * damp;
      energyPoints.push(`${x === 0 ? "M" : "L"} ${startX + x},${y}`);
    }

    return { plies: generatedPlies, energySpiral: energyPoints.join(" ") };
  }, [torsion]);

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
            <h3 className="text-xl md:text-2xl font-bold text-sky">
              "Precisión que transforma fibras en hilos"
            </h3>
            <p className="text-sm md:text-base text-slate-200 font-normal leading-relaxed">
              El núcleo conceptual de ALPACLADD radica en la transición ordenada: de la materia cruda y dispersa (fibras sueltas) al producto estructurado y fuerte (hilos continuos). La precisión es nuestro vector clave; cada torsión, estirado y purgado de hilo responde a un cálculo milimétrico.
            </p>
            <p className="text-sm md:text-base text-slate-200 font-normal leading-relaxed">
              Esta transformación física se refleja en nuestra identidad: líneas paralelas que se consolidan, retículas limpias y una geometría que une simplicidad visual con rigor técnico.
            </p>

            {/* Interactive Control for demo */}
            <div className="border border-sky/20 bg-sky/5 p-4 rounded-lg space-y-3 relative overflow-hidden">
              {/* Subtle background glow based on torsion level */}
              <div 
                className="absolute inset-0 bg-sky/20 blur-2xl transition-opacity duration-300"
                style={{ opacity: (torsion - 300) / 1800 }}
              />
              
              <div className="relative z-10 flex justify-between text-[11px] font-mono text-slate-300">
                <span className="font-semibold text-slate-200">SIMULADOR DE TORSIÓN (3D)</span>
                <span className="text-sky font-bold drop-shadow-[0_0_5px_rgba(95,168,211,0.5)]">{torsion} TPM</span>
              </div>
              
              <input
                type="range"
                min="300"
                max="1200"
                value={torsion}
                onChange={(e) => setTorsion(Number(e.target.value))}
                className="relative z-10 w-full h-1.5 bg-[#081527] border border-sky/40 rounded-lg appearance-none cursor-pointer accent-sky outline-none focus:ring-1 focus:ring-sky/50"
              />
              <div className="relative z-10 text-[10px] sm:text-[11px] text-slate-300 font-light leading-relaxed">
                Ajusta la torsión para observar la <strong>densidad de espiras</strong> y el <strong>diámetro dinámico</strong> del hilo tridimensional.
              </div>
            </div>
          </div>

          {/* Interactive SVG Diagram */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="w-full bg-[#081527] border border-sky/30 rounded-xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              {/* Grid Background inside the diagram */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: 'linear-gradient(#5fa8d3 1px, transparent 1px), linear-gradient(90deg, #5fa8d3 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              </div>

              <div className="text-[10px] font-mono text-sky/80 absolute top-4 left-4 tracking-wider z-10">
                ANÁLISIS ESTRUCTURAL DE FIBRA
              </div>

              {/* Dynamic SVG twisted yarn */}
              <svg className="w-full h-48 md:h-56 relative z-10 overflow-visible" viewBox="0 0 400 150">
                {/* Fibers entering from left (dispersed) */}
                <g className="fibers-in">
                  <path d="M5,35 Q60,35 125,75" className="stroke-sky/30" strokeWidth="1" fill="none" />
                  <path d="M5,55 Q60,55 125,75" className="stroke-sky/50" strokeWidth="1.5" fill="none" />
                  <path d="M5,75 Q60,75 125,75" className="stroke-sky/70" strokeWidth="2" fill="none" />
                  <path d="M5,95 Q60,95 125,75" className="stroke-sky/50" strokeWidth="1.5" fill="none" />
                  <path d="M5,115 Q60,115 125,75" className="stroke-sky/30" strokeWidth="1" fill="none" />
                </g>

                {/* Drafting rolls representation */}
                <rect x="115" y="45" width="15" height="60" rx="4" fill="none" className="stroke-sky/40" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="122.5" y="38" className="fill-sky text-[8px] font-mono font-bold tracking-widest" textAnchor="middle">ZONA DE TORSION</text>

                {/* Epic 3D Twisted Yarn */}
                <g className="twisted-yarn" style={{ filter: `drop-shadow(0 0 ${2 + (torsion-300)/100}px rgba(95,168,211,0.6))` }}>
                  {/* Outer Energy Spiral (Techy effect) */}
                  <path
                    d={energySpiral}
                    className="stroke-white"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="4 6"
                    opacity="0.6"
                  />

                  {/* 3 Plies of the yarn */}
                  <path d={plies[0]} className="stroke-[#0284c7]" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={plies[1]} className="stroke-[#38bdf8]" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={plies[2]} className="stroke-[#bae6fd]" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Dark shading to give physical 3D volume */}
                  <path d={plies[0]} className="stroke-black/30" strokeWidth="3" fill="none" transform="translate(0, 1.5)" />
                </g>

                {/* Spindle head on the right */}
                <g className="spindle" transform="translate(380, 75)">
                  <circle cx="0" cy="0" r="5" className="fill-off shadow-lg" />
                  <circle cx="0" cy="0" r="2" className="fill-navy" />
                  <line x1="0" y1="-25" x2="0" y2="25" className="stroke-sky/60" strokeWidth="2" strokeLinecap="round" />
                  <text x="0" y="-32" className="fill-sky text-[8px] font-mono font-bold tracking-widest" textAnchor="middle">EJE</text>
                </g>
              </svg>

              <div className="flex justify-between items-center text-[11px] font-mono text-slate-300 mt-2 pt-4 border-t border-sky/20">
                <span className="flex items-center space-x-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky"></span>
                  </span>
                  <span>Estado: <strong className="text-white">Torsionado Continuo</strong></span>
                </span>
                <span className="text-sky font-bold px-2 py-1 bg-sky/10 rounded border border-sky/30">ESTRUCTURA: ÓPTIMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
