import React, { useEffect, useState, useCallback, useRef } from "react";
import { SLIDES } from "../slides/types";
import type { Slide } from "../slides/types";
import { ThreadProgress } from "./ThreadProgress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface HorizontalControllerProps {
  renderSlide: (slide: Slide) => React.ReactNode;
}

export const HorizontalController: React.FC<HorizontalControllerProps> = ({
  renderSlide,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { isBlackAndWhite } = useTheme();
  const totalSlides = SLIDES.length;
  const isNavigatingRef = useRef<boolean>(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Navigate to specific slide with bounds check
  const goToSlide = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(totalSlides - 1, index));
      setActiveIndex(clampedIndex);

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
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  // Smart Mouse Wheel / Trackpad listener with precise cooldown lock
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
        }, 450);
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
          transition: "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
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

      {/* Floating Navigation Arrows */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex space-x-2 pointer-events-auto">
        <button
          onClick={prevSlide}
          disabled={activeIndex === 0}
          aria-label="Diapositiva anterior"
          className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 shadow-xl backdrop-blur-md"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={activeIndex === totalSlides - 1}
          aria-label="Diapositiva siguiente"
          className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 shadow-xl backdrop-blur-md"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Clean Minimalist Dot Navigation (Left edge) */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-2 pointer-events-auto">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Ir al slide ${slide.n}`}
              className="p-1 focus:outline-none"
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
    </div>
  );
};
