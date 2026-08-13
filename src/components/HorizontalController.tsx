import React, { useEffect, useState, useCallback, useRef } from "react";
import { SLIDES } from "../slides/types";
import type { Slide } from "../slides/types";
import { ThreadProgress } from "./ThreadProgress";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid,
  HelpCircle,
  X,
  Layers,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface HorizontalControllerProps {
  renderSlide: (slide: Slide) => React.ReactNode;
}

export const HorizontalController: React.FC<HorizontalControllerProps> = ({
  renderSlide,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const { isBlackAndWhite } = useTheme();
  const totalSlides = SLIDES.length;
  const isNavigatingRef = useRef<boolean>(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Navigate to specific slide with bounds check
  const goToSlide = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(totalSlides - 1, index));
      setActiveIndex(clampedIndex);
      setIsGridOpen(false);

      // Update URL hash
      const targetSlide = SLIDES[clampedIndex];
      if (targetSlide) {
        const newHash = `#slide-${targetSlide.id}`;
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, "", newHash);
        }
      }
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Fullscreen Toggle
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Handle URL deep-linking on mount & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#slide-")) {
        const slideId = hash.replace("#slide-", "");
        const index = SLIDES.findIndex((s) => s.id === slideId);
        if (index !== -1 && index !== activeIndex) {
          goToSlide(index);
        }
      }
    };

    handleHashChange();
    window.addEventListener("popstate", handleHashChange);
    return () => window.removeEventListener("popstate", handleHashChange);
  }, [goToSlide, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "Escape") {
        setIsGridOpen(false);
        setIsHelpOpen(false);
        return;
      }

      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
        return;
      }

      if (e.key === "g" || e.key === "G" || e.key === "m" || e.key === "M") {
        e.preventDefault();
        setIsGridOpen((prev) => !prev);
        return;
      }

      if (e.key === "?") {
        e.preventDefault();
        setIsHelpOpen((prev) => !prev);
        return;
      }

      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " "
      ) {
        e.preventDefault();
        nextSlide();
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, toggleFullscreen]);

  // Mouse Wheel / Trackpad listener with cooldown lock
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      let currentEl = e.target as HTMLElement | null;
      let isInsideScrollable = false;
      while (currentEl && currentEl !== document.body) {
        if (
          currentEl.scrollHeight > currentEl.clientHeight &&
          (window.getComputedStyle(currentEl).overflowY === "auto" ||
            window.getComputedStyle(currentEl).overflowY === "scroll")
        ) {
          const isAtTop = currentEl.scrollTop === 0;
          const isAtBottom =
            currentEl.scrollHeight - currentEl.scrollTop <=
            currentEl.clientHeight + 2;
          if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
            isInsideScrollable = true;
            break;
          }
        }
        currentEl = currentEl.parentElement;
      }

      if (isInsideScrollable) return;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (Math.abs(delta) > 20) {
        if (isNavigatingRef.current) {
          e.preventDefault();
          return;
        }

        e.preventDefault();
        isNavigatingRef.current = true;

        if (delta > 0) {
          nextSlide();
        } else {
          prevSlide();
        }

        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 280);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  // Mobile Touch Swipe Listener
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (touch) {
          touchStartRef.current = {
            x: touch.clientX,
            y: touch.clientY,
            time: Date.now(),
          };
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || e.changedTouches.length === 0) return;

      const touch = e.changedTouches[0];
      if (!touch) return;

      const diffX = touch.clientX - touchStartRef.current.x;
      const diffY = touch.clientY - touchStartRef.current.y;
      const timeDiff = Date.now() - touchStartRef.current.time;

      touchStartRef.current = null;

      if (timeDiff < 800) {
        if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        } else if (Math.abs(diffY) > 45 && Math.abs(diffY) > Math.abs(diffX)) {
          if (diffY < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const progressRatio = totalSlides > 1 ? activeIndex / (totalSlides - 1) : 0;
  const currentSlide = SLIDES[activeIndex];

  return (
    <div
      className={`relative w-screen h-[100dvh] overflow-hidden select-none transition-colors duration-500 ${
        isBlackAndWhite ? "bg-black" : "bg-navy"
      }`}
    >
      {/* Top Thread Progress Bar */}
      <ThreadProgress
        progress={progressRatio}
        onSeek={(targetProgress) => {
          const targetIndex = Math.round(targetProgress * (totalSlides - 1));
          goToSlide(targetIndex);
        }}
      />

      {/* Main Slides Track - Discrete 100vw Step Transition */}
      <div
        className="flex flex-nowrap h-full w-full will-change-transform"
        style={{
          transform: `translate3d(-${activeIndex * 100}vw, 0, 0)`,
          transition: "transform 0.38s cubic-bezier(0.25, 1, 0.35, 1)",
        }}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="w-screen h-full flex-shrink-0 relative overflow-hidden"
          >
            {renderSlide(slide)}
          </div>
        ))}
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="fixed bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-40 flex items-center justify-between pointer-events-none">
        
        {/* Left: Current Slide Pill & Quick Navigator Trigger */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          <button
            onClick={() => setIsGridOpen(true)}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black border border-white/20 text-white transition-all shadow-xl backdrop-blur-md text-xs font-mono group"
            title="Ver índice de diapositivas (G)"
          >
            <span className="w-2 h-2 rounded-full bg-sky animate-pulse" />
            <span className="font-bold">
              {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
            <span className="hidden md:inline text-slate-400 font-sans border-l border-white/20 pl-2 max-w-[180px] truncate">
              {currentSlide?.title}
            </span>
          </button>
        </div>

        {/* Right: Quick Action Controls (Grid, Fullscreen, Shortcuts, Prev/Next) */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 pointer-events-auto">
          
          {/* Grid Overview Button */}
          <button
            onClick={() => setIsGridOpen(true)}
            aria-label="Índice de diapositivas"
            title="Vista de cuadrícula (G)"
            className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all shadow-xl backdrop-blur-md"
          >
            <Grid className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            aria-label="Pantalla completa"
            title="Pantalla completa (F)"
            className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all shadow-xl backdrop-blur-md"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            ) : (
              <Maximize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            )}
          </button>

          {/* Help Button */}
          <button
            onClick={() => setIsHelpOpen(true)}
            aria-label="Atajos de teclado"
            title="Atajos de teclado (?)"
            className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all shadow-xl backdrop-blur-md hidden sm:flex"
          >
            <HelpCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Previous Slide Arrow */}
          <button
            onClick={prevSlide}
            disabled={activeIndex === 0}
            aria-label="Diapositiva anterior"
            title="Anterior (←)"
            className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-xl backdrop-blur-md"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next Slide Arrow */}
          <button
            onClick={nextSlide}
            disabled={activeIndex === totalSlides - 1}
            aria-label="Diapositiva siguiente"
            title="Siguiente (→ / Espacio)"
            className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-xl backdrop-blur-md"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Clean Minimalist Dot Navigation (Left edge) */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-1.5 pointer-events-auto">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Ir al slide ${slide.n}: ${slide.title}`}
              title={`Slide ${slide.n}: ${slide.title}`}
              className="p-1 focus:outline-none group relative flex items-center"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? isBlackAndWhite
                      ? "bg-white scale-150 shadow-[0_0_6px_#ffffff]"
                      : "bg-sky scale-150 shadow-[0_0_6px_#5fa8d3]"
                    : "bg-white/25 hover:bg-white/60"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Interactive Full Slides Overview Grid Modal */}
      <AnimatePresence>
        {isGridOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex flex-col p-4 sm:p-8"
            onClick={() => setIsGridOpen(false)}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between max-w-6xl mx-auto w-full pb-4 border-b border-white/15">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-8 h-8 rounded-lg bg-sky/20 border border-sky/40 flex items-center justify-center text-sky">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-white">
                    Índice de Diapositivas
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {totalSlides} Diapositivas • Selecciona para saltar directamente
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsGridOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slides Grid List */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl mx-auto w-full flex-grow overflow-y-auto py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 no-scrollbar"
            >
              {SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between space-y-2 transition-all duration-200 group ${
                      isActive
                        ? "bg-sky/20 border-sky text-white shadow-lg shadow-sky/20 scale-[1.02]"
                        : "bg-navy/80 border-sky/15 text-slate-300 hover:border-sky/40 hover:bg-navy hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/40 text-sky border border-sky/30">
                        SLIDE {String(slide.n).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] font-mono uppercase text-slate-400">
                        {slide.section}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold font-sans leading-snug line-clamp-2">
                      {slide.title}
                    </h4>

                    <div className="text-[9px] font-mono text-slate-400 flex items-center justify-between pt-1 border-t border-white/10">
                      <span>{slide.speakerName || "Alpacladd"}</span>
                      {isActive && <span className="text-sky font-bold">Activo</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Helper Modal */}
      <AnimatePresence>
        {isHelpOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsHelpOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy border border-sky/30 text-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 text-left font-sans relative"
            >
              <button
                onClick={() => setIsHelpOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2 text-sky">
                <Sparkles className="w-4 h-4" />
                <h3 className="text-base font-bold uppercase tracking-wide font-sans">
                  Atajos de Teclado
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-sky/15">
                  <span className="text-slate-300">Siguiente diapositiva</span>
                  <kbd className="px-2 py-0.5 rounded bg-black/60 border border-sky/30 font-mono text-sky">
                    → / Espacio / Rueda
                  </kbd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-sky/15">
                  <span className="text-slate-300">Diapositiva anterior</span>
                  <kbd className="px-2 py-0.5 rounded bg-black/60 border border-sky/30 font-mono text-sky">
                    ← / RePág
                  </kbd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-sky/15">
                  <span className="text-slate-300">Índice / Vista general</span>
                  <kbd className="px-2 py-0.5 rounded bg-black/60 border border-sky/30 font-mono text-sky">
                    G / M
                  </kbd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-sky/15">
                  <span className="text-slate-300">Pantalla completa</span>
                  <kbd className="px-2 py-0.5 rounded bg-black/60 border border-sky/30 font-mono text-sky">
                    F / F11
                  </kbd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-sky/15">
                  <span className="text-slate-300">Primera / Última</span>
                  <kbd className="px-2 py-0.5 rounded bg-black/60 border border-sky/30 font-mono text-sky">
                    Inicio / Fin
                  </kbd>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
