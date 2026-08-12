import React, { useEffect, useState, useCallback, useRef } from "react";
import { SLIDES } from "../slides/types";
import type { Slide } from "../slides/types";
import { ThreadProgress } from "./ThreadProgress";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalControllerProps {
  renderSlide: (slide: Slide) => React.ReactNode;
}

export const HorizontalController: React.FC<HorizontalControllerProps> = ({
  renderSlide,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalSlides = SLIDES.length;
  const isNavigatingRef = useRef<boolean>(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Navigate to specific slide with bounds check
  const goToSlide = useCallback((index: number) => {
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
  }, [totalSlides]);

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
      // Ignore if user is inside an input, textarea or interactive field
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
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
      // Check if mouse is inside an internally scrollable element that has room to scroll
      let currentEl = e.target as HTMLElement | null;
      let isInsideScrollable = false;
      while (currentEl && currentEl !== document.body) {
        if (
          currentEl.scrollHeight > currentEl.clientHeight &&
          (window.getComputedStyle(currentEl).overflowY === "auto" ||
            window.getComputedStyle(currentEl).overflowY === "scroll")
        ) {
          // If the element can still scroll in the wheel direction, let it scroll internally
          const isAtTop = currentEl.scrollTop === 0;
          const isAtBottom = currentEl.scrollHeight - currentEl.scrollTop <= currentEl.clientHeight + 2;
          if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
            isInsideScrollable = true;
            break;
          }
        }
        currentEl = currentEl.parentElement;
      }

      if (isInsideScrollable) return;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // Threshold to trigger slide change
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

        // Lock for 500ms to guarantee single slide transition per wheel gesture
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 500);
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

      // Minimum swipe distance of 40px and maximum time of 800ms
      if (timeDiff < 800) {
        // Horizontal swipe dominance
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
        // Vertical swipe fallback on mobile if dominant
        else if (Math.abs(diffY) > 50 && Math.abs(diffY) > Math.abs(diffX)) {
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

  const currentSlide = (SLIDES[activeIndex] ?? SLIDES[0]) as Slide;
  const progressRatio = totalSlides > 1 ? activeIndex / (totalSlides - 1) : 0;

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden select-none bg-navy">
      {/* Top Thread Progress Bar */}
      <ThreadProgress
        progress={progressRatio}
        currentSlideName={currentSlide.title}
        currentSlideNumber={currentSlide.n}
        totalSlides={totalSlides}
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

      {/* Floating UI: Navigation Arrows (Responsive for Mobile & Desktop) */}
      <div className="fixed bottom-3 right-3 sm:bottom-8 sm:right-8 z-40 flex space-x-2 pointer-events-auto">
        <button
          onClick={prevSlide}
          disabled={activeIndex === 0}
          aria-label="Diapositiva anterior"
          className="p-2 sm:p-3 rounded-full bg-navy/85 hover:bg-navy border border-sky/25 text-sky hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-navy/60 backdrop-blur-md"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={activeIndex === totalSlides - 1}
          aria-label="Diapositiva siguiente"
          className="p-2 sm:p-3 rounded-full bg-navy/85 hover:bg-navy border border-sky/25 text-sky hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-navy/60 backdrop-blur-md"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Technical Dot Navigation (Vertical Bar on Left) */}
      <div className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-2.5 pointer-events-auto">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Ir al slide ${slide.n}: ${slide.title}`}
              className="group flex items-center focus:outline-none p-1"
            >
              {/* Dot Shape */}
              <div
                className={`w-1.5 h-1.5 rounded-sm transition-all duration-300 ${
                  isActive
                    ? "bg-sky scale-150 rotate-45 shadow-[0_0_8px_#5fa8d3]"
                    : "bg-gray/40 group-hover:bg-sky/60"
                }`}
              />

              {/* Technical Indicator Label on Hover */}
              <span
                className={`ml-3 text-[9px] font-mono tracking-widest uppercase bg-navy/90 border border-sky/15 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0 ${
                  isActive ? "text-sky border-sky/40" : "text-gray"
                }`}
              >
                {String(slide.n).padStart(2, "0")}. {slide.id}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
