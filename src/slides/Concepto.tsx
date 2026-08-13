import React, { useState, useMemo, useEffect, useRef } from "react";
import { SlideShell } from "../components/SlideShell";
import { Play, Pause, RotateCcw, Sparkles, Activity } from "lucide-react";

export const Concepto: React.FC = () => {
  const [torsion, setTorsion] = useState(680); // Twist per meter (tpm)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [phaseOffset, setPhaseOffset] = useState(0);
  const userInteractedTimeoutRef = useRef<number | null>(null);
  const isUserDraggingRef = useRef<boolean>(false);

  // High-performance requestAnimationFrame loop for continuous spinning & automatic breathing
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Always advance yarn spinning phase for continuous mechanical flow
      setPhaseOffset((prev) => (prev + delta * 6) % (Math.PI * 200));

      // If autoplay is active and user is not manually interacting, modulate torsion
      if (isAutoPlaying && !isUserDraggingRef.current) {
        const timeSec = currentTime / 1000;
        // Smooth sine wave between 420 and 960 TPM
        const autoTorsion = Math.round(680 + Math.sin(timeSec * 0.9) * 260);
        setTorsion(autoTorsion);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoPlaying]);

  // Handle user manual interaction on slider
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isUserDraggingRef.current = true;
    setTorsion(Number(e.target.value));

    // Clear any previous timeout and set a timer to resume subtle auto-play after 4 seconds
    if (userInteractedTimeoutRef.current) {
      window.clearTimeout(userInteractedTimeoutRef.current);
    }
    userInteractedTimeoutRef.current = window.setTimeout(() => {
      isUserDraggingRef.current = false;
    }, 4000);
  };

  const handlePointerDown = () => {
    isUserDraggingRef.current = true;
  };

  const handlePointerUp = () => {
    if (userInteractedTimeoutRef.current) {
      window.clearTimeout(userInteractedTimeoutRef.current);
    }
    userInteractedTimeoutRef.current = window.setTimeout(() => {
      isUserDraggingRef.current = false;
    }, 3500);
  };

  // Math to generate realistic 3D intertwining plies for the yarn
  const { plies, energySpiral } = useMemo(() => {
    const t = (torsion - 300) / (1200 - 300); // 0 to 1
    const minFreq = 2;
    const maxFreq = 24;
    const freq = minFreq + t * (maxFreq - minFreq);

    // As torsion increases, the yarn becomes tighter (smaller amplitude)
    const minAmp = 3;
    const maxAmp = 11;
    const amp = maxAmp - t * (maxAmp - minAmp);

    const startX = 130;
    const endX = 380;
    const width = endX - startX;
    const totalPlies = 3;

    // Generate path strings for the 3 plies with continuous phase motion
    const generatedPlies = Array.from({ length: totalPlies }).map((_, i) => {
      const plyPhase = (i / totalPlies) * Math.PI * 2;
      const points = [];
      for (let x = 0; x <= width; x += 2) {
        const angle = (x / width) * Math.PI * 2 * freq + plyPhase - phaseOffset;
        const damp = Math.min(1, x / 22);
        const y = 75 + Math.sin(angle) * amp * damp;
        points.push(`${x === 0 ? "M" : "L"} ${startX + x},${y}`);
      }
      return points.join(" ");
    });

    // Outer optical energy spiral
    const energyPoints = [];
    for (let x = 0; x <= width; x += 3) {
      const angle = (x / width) * Math.PI * 2 * (freq * 1.4) - (Math.PI / 2) + phaseOffset * 1.5;
      const damp = Math.min(1, x / 30);
      const y = 75 + Math.sin(angle) * (amp + 3.5) * damp;
      energyPoints.push(`${x === 0 ? "M" : "L"} ${startX + x},${y}`);
    }

    return { plies: generatedPlies, energySpiral: energyPoints.join(" ") };
  }, [torsion, phaseOffset]);

  return (
    <SlideShell id="concepto" n={3} title="Concepto" kind="texto" bgType="navy">
      <div className="h-full flex flex-col justify-between py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full my-auto">
          
          {/* Left Column: Conceptual Description & Interactive Controls */}
          <div className="lg:col-span-6 text-left space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-sky font-bold tracking-widest uppercase flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NÚCLEO CONCEPTUAL DE MARCA</span>
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-sans text-white tracking-tight leading-tight">
                "Precisión que transforma <br />
                <span className="text-sky drop-shadow-[0_0_20px_rgba(95,168,211,0.4)]">
                  fibras en hilos
                </span>"
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              El corazón de <strong className="text-white">ALPACLADD</strong> reside en la transición ordenada: transformar la materia prima dispersa (fibras naturales de algodón) en una estructura continua de máxima tenacidad mediante torsión milimétrica, regularidad y purgado óptico suizo.
            </p>

            {/* Interactive Simulator Card */}
            <div className="border border-sky/30 bg-navy/90 p-4 rounded-2xl space-y-3 relative overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* Dynamic Glow Aura */}
              <div
                className="absolute inset-0 bg-sky/20 blur-2xl transition-opacity duration-300 pointer-events-none"
                style={{ opacity: (torsion - 300) / 1400 }}
              />

              {/* Card Header & TPM Counter */}
              <div className="relative z-10 flex justify-between items-center text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-sky animate-pulse" />
                  <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                    SIMULADOR DE TORSIÓN (3D)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-md bg-sky/15 border border-sky/40 text-sky font-bold text-xs tracking-wider shadow-[0_0_10px_rgba(95,168,211,0.3)]">
                    {torsion} TPM
                  </span>
                </div>
              </div>

              {/* Slider Control with Touch/Mouse events */}
              <div className="relative z-10 space-y-1">
                <input
                  type="range"
                  min="300"
                  max="1200"
                  value={torsion}
                  onChange={handleSliderChange}
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  className="w-full h-2 bg-[#060e1a] border border-sky/40 rounded-lg appearance-none cursor-pointer accent-sky outline-none focus:ring-2 focus:ring-sky/50 transition-all"
                />
                <div className="flex justify-between text-[8.5px] font-mono text-slate-400">
                  <span>300 TPM (Fibra Abierta)</span>
                  <span>750 TPM (Hilado 30/1 Óptimo)</span>
                  <span>1200 TPM (Máxima Torsión)</span>
                </div>
              </div>

              {/* Play / Pause / Reset Controls Bar */}
              <div className="relative z-10 flex items-center justify-between pt-1 border-t border-sky/15 text-[10.5px] font-sans">
                <p className="text-slate-300 text-[10px] leading-tight max-w-[260px]">
                  {isAutoPlaying && !isUserDraggingRef.current
                    ? "✨ Modo dinámico automático activo (desliza para ajustar manualmente)."
                    : "✋ Control manual activo."}
                </p>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => {
                      setIsAutoPlaying(!isAutoPlaying);
                      isUserDraggingRef.current = false;
                    }}
                    className="p-1.5 rounded-lg bg-sky/20 hover:bg-sky text-sky hover:text-navy border border-sky/40 transition-all font-mono text-[9px] font-bold flex items-center space-x-1"
                    title={isAutoPlaying ? "Pausar oscilación automática" : "Activar oscilación automática"}
                  >
                    {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isAutoPlaying ? "Auto" : "Pausado"}</span>
                  </button>

                  <button
                    onClick={() => {
                      setTorsion(680);
                      isUserDraggingRef.current = false;
                    }}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                    title="Restablecer valor óptimo"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Spinning Yarn Machine Visualization */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full bg-[#071120] border border-sky/30 rounded-3xl p-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(95,168,211,0.15)]">
              
              {/* Grid Background */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#5fa8d3 1px, transparent 1px), linear-gradient(90deg, #5fa8d3 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Technical Badge Header */}
              <div className="flex justify-between items-center relative z-10 pb-2 border-b border-sky/20">
                <div className="text-[10px] font-mono text-sky font-bold tracking-widest uppercase">
                  SIMULACIÓN DINÁMICA DE HILATURA CONTINUA
                </div>
                <div className="flex items-center space-x-1 text-[9px] font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-emerald-400">EN LÍNEA</span>
                </div>
              </div>

              {/* Dynamic SVG Twisted Yarn Machine */}
              <svg className="w-full h-44 sm:h-52 relative z-10 overflow-visible my-2" viewBox="0 0 400 150">
                {/* Fibers entering from left (roving / draft fibers) */}
                <g className="fibers-in">
                  <path d="M5,30 Q60,30 125,75" className="stroke-sky/30" strokeWidth="1.2" fill="none" />
                  <path d="M5,50 Q60,50 125,75" className="stroke-sky/50" strokeWidth="1.5" fill="none" />
                  <path d="M5,75 Q60,75 125,75" className="stroke-sky/80" strokeWidth="2.2" fill="none" />
                  <path d="M5,100 Q60,100 125,75" className="stroke-sky/50" strokeWidth="1.5" fill="none" />
                  <path d="M5,120 Q60,120 125,75" className="stroke-sky/30" strokeWidth="1.2" fill="none" />
                </g>

                {/* Drafting Rollers Representation */}
                <g transform="translate(118, 45)">
                  <rect x="0" y="0" width="14" height="60" rx="4" fill="#08182b" className="stroke-sky/60" strokeWidth="1.5" />
                  <line x1="7" y1="0" x2="7" y2="60" className="stroke-sky/40" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="7" y="-8" className="fill-sky text-[7.5px] font-mono font-bold tracking-wider" textAnchor="middle">
                    RODILLOS
                  </text>
                </g>

                {/* Live 3D Twisted Yarn Filaments */}
                <g className="twisted-yarn" style={{ filter: `drop-shadow(0 0 ${3 + (torsion - 300) / 120}px rgba(95,168,211,0.6))` }}>
                  {/* Outer Energy Spiral */}
                  <path
                    d={energySpiral}
                    className="stroke-white"
                    strokeWidth="0.9"
                    fill="none"
                    strokeDasharray="4 6"
                    opacity="0.6"
                  />

                  {/* 3 Intertwined Yarn Plies */}
                  <path d={plies[0]} className="stroke-[#0284c7]" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={plies[1]} className="stroke-[#38bdf8]" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={plies[2]} className="stroke-[#bae6fd]" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Shadow Depth Layer */}
                  <path d={plies[0]} className="stroke-black/40" strokeWidth="3" fill="none" transform="translate(0, 1.8)" />
                </g>

                {/* High Speed Spindle / Husillo on Right */}
                <g className="spindle" transform="translate(380, 75)">
                  <circle cx="0" cy="0" r="7" className="fill-sky stroke-white shadow-lg" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2.5" className="fill-navy" />
                  <line x1="0" y1="-30" x2="0" y2="30" className="stroke-sky/70" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="0" y="-36" className="fill-sky text-[7.5px] font-mono font-bold tracking-wider" textAnchor="middle">
                    HUSILLO
                  </text>
                </g>
              </svg>

              {/* Status Footer */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-300 pt-2 border-t border-sky/20">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky animate-ping" />
                  <span>Velocidad de Husillo: <strong className="text-white">12.500 RPM</strong></span>
                </span>
                <span className="text-sky font-bold px-2 py-0.5 bg-sky/10 rounded-md border border-sky/30">
                  TENSIÓN REGULADA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideShell>
  );
};
