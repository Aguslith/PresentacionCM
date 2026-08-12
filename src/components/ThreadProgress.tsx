import React, { useState, useEffect } from "react";
import { SLIDES } from "../slides/types";
import { Play, Pause, RotateCcw, Clock, X, ChevronRight, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThreadProgressProps {
  progress: number; // Value between 0 and 1
  currentSlideName: string;
  currentSlideNumber: number;
  totalSlides: number;
  onSeek?: (progress: number) => void;
}

export const ThreadProgress: React.FC<ThreadProgressProps> = ({
  progress,
  onSeek,
}) => {
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(600); // 10 minutes = 600s
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeSpeakerTab, setActiveSpeakerTab] = useState<1 | 2>(1);

  // Timer countdown
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${String(mins).padStart(2, "0")}:${String(remSecs).padStart(2, "0")}`;
  };

  const clampedProgress = Math.max(0, Math.min(1, progress));

  return (
    <>
      {/* Ultra-minimal Top Progress Thread (Only a thin 2px line, NO obstructive header bar) */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] hover:h-[6px] cursor-pointer transition-all duration-200 bg-sky/10 group"
        onClick={(e) => {
          if (!onSeek) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
          onSeek(newProgress);
        }}
        title="Progreso de la presentación (Clic para saltar)"
      >
        {/* 50% Divider Mark for 5:00 Speaker Switch */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-sky/40 z-10"
          title="Cambio de Orador (Min 5:00)"
        />

        {/* Dynamic Progress Thread */}
        <div
          className="h-full bg-gradient-to-r from-blue to-sky shadow-[0_0_8px_#5fa8d3] transition-all duration-100 ease-out"
          style={{ width: `${clampedProgress * 100}%` }}
        />
      </div>

      {/* Floating 10-Min Timer & Speaker Guide Button (Discreet, bottom-right floating) */}
      <div className="fixed bottom-10 right-28 z-40 hidden sm:flex items-center">
        <button
          onClick={() => setShowGuideModal(true)}
          className="flex items-center space-x-2 py-2.5 px-3.5 rounded-full bg-navy/85 hover:bg-navy border border-sky/25 text-sky hover:text-white transition-all text-[10px] font-mono uppercase tracking-wider shadow-lg shadow-navy/50 backdrop-blur-md group"
          title="Abrir cronómetro de 10:00 y guía de oratoria"
        >
          <Clock className="w-3.5 h-3.5 text-sky group-hover:animate-pulse" />
          <span className="font-bold">{formatTimer(timerSeconds)}</span>
          <span className="opacity-60">| Guía 10 Min</span>
        </button>
      </div>

      {/* 10-Minute Speaker Guide Modal */}
      <AnimatePresence>
        {showGuideModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setShowGuideModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white text-navy rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-sky/20 flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Timer Controls */}
              <div className="p-5 bg-navy text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-sky/20">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-navy border border-sky/30 flex items-center justify-center p-1.5 shrink-0 shadow">
                    <img src="/logotipo.png" alt="ALPACLADD" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-wide uppercase">
                      Guía de Exposición: 10 Minutos (2 Oradores)
                    </h3>
                    <p className="text-xs text-sky/80 font-light">
                      5 minutos por persona // ~25 segundos por diapositiva
                    </p>
                  </div>
                </div>

                {/* Timer Widget */}
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  <span className="font-mono text-base font-bold text-sky">
                    {formatTimer(timerSeconds)}
                  </span>
                  <div className="flex space-x-1 border-l border-white/20 pl-2">
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className="p-1 hover:bg-white/20 rounded text-white transition-colors"
                      title={isTimerRunning ? "Pausar" : "Iniciar"}
                    >
                      {isTimerRunning ? (
                        <Pause className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setIsTimerRunning(false);
                        setTimerSeconds(600);
                      }}
                      className="p-1 hover:bg-white/20 rounded text-white transition-colors"
                      title="Reiniciar a 10:00"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Close Modal Button */}
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Speaker Tabs */}
              <div className="flex border-b border-navy/10 bg-slate-50 px-5 pt-3">
                <button
                  onClick={() => setActiveSpeakerTab(1)}
                  className={`pb-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-all flex items-center space-x-2 ${
                    activeSpeakerTab === 1
                      ? "border-blue text-blue"
                      : "border-transparent text-gray hover:text-navy"
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Orador 1: Manual de Marca (0:00 - 5:00)</span>
                </button>
                <button
                  onClick={() => setActiveSpeakerTab(2)}
                  className={`pb-2.5 px-4 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-all flex items-center space-x-2 ${
                    activeSpeakerTab === 2
                      ? "border-blue text-blue"
                      : "border-transparent text-gray hover:text-navy"
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Orador 2: Social Media & CM (5:00 - 10:00)</span>
                </button>
              </div>

              {/* Slides Script Breakdown */}
              <div className="p-5 overflow-y-auto max-h-[55vh] space-y-3 text-left">
                {SLIDES.filter((s) => s.speaker === activeSpeakerTab).map((s) => (
                  <div
                    key={s.id}
                    className="p-3 rounded-xl border border-navy/10 hover:border-blue/40 bg-white hover:bg-blue/[0.02] transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 group cursor-pointer"
                    onClick={() => {
                      if (onSeek) {
                        const targetProg = (s.n - 1) / (SLIDES.length - 1);
                        onSeek(targetProg);
                        setShowGuideModal(false);
                      }
                    }}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-white bg-blue px-2 py-0.5 rounded">
                          Slide {String(s.n).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-bold text-navy uppercase tracking-wide">
                          {s.title}
                        </span>
                        <span className="text-[10px] font-mono text-gray">
                          ({s.timeRange})
                        </span>
                      </div>
                      <ul className="text-[11px] text-gray list-disc list-inside space-y-0.5 font-light">
                        {s.keyPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-[9px] font-mono text-blue font-semibold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                      <span>Ir a slide</span>
                      <ChevronRight className="w-3 h-3 ml-0.5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer Tip */}
              <div className="p-4 bg-slate-50 border-t border-navy/10 flex justify-between items-center text-[10px] font-mono text-gray">
                <span>CONSEJO: Mantener un ritmo de 25 segundos por diapositiva.</span>
                <span className="text-blue font-bold">ALPACLADD — DEFENSA ACADÉMICA</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
