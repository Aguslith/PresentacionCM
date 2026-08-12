import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SLIDES } from "../slides/types";
import type { Slide } from "../slides/types";
import { ThreadProgress } from "./ThreadProgress";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalControllerProps {
  renderSlide: (slide: Slide) => React.ReactNode;
}

export const HorizontalController: React.FC<HorizontalControllerProps> = ({
  renderSlide,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // GSAP Horizontal Pin and ScrollTrigger setup
  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const totalSlides = SLIDES.length;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: "top top",
          end: () => `+=${(totalSlides - 1) * window.innerHeight}`,
          scrub: 0.3,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            const index = Math.min(
              totalSlides - 1,
              Math.max(0, Math.round(self.progress * (totalSlides - 1)))
            );
            setActiveIndex(index);
          },
        },
      });
    }, containerRef);

    // Force refresh ScrollTrigger to ensure correct bounding dimensions
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  // Reduced motion backup: native scroll listener to track progress/active index
  useEffect(() => {
    if (!prefersReducedMotion) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = window.innerHeight;
      const totalScrollHeight = (SLIDES.length - 1) * height;
      
      const progress = totalScrollHeight > 0 ? scrollTop / totalScrollHeight : 0;
      const index = Math.min(
        SLIDES.length - 1,
        Math.max(0, Math.round(scrollTop / height))
      );
      
      setScrollProgress(progress);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  // Horizontal wheel / trackpad swipe support
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleWheel = (e: WheelEvent) => {
      // If horizontal delta is dominant (trackpad sideways swipe or Shift+Wheel)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 5) {
        e.preventDefault();
        window.scrollBy({
          top: e.deltaX,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [prefersReducedMotion]);

  const scrollToSlide = useCallback((index: number) => {
    const targetScroll = index * window.innerHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }, []);

  const seekToProgress = useCallback((targetProgress: number) => {
    const totalScrollHeight = (SLIDES.length - 1) * window.innerHeight;
    window.scrollTo({
      top: targetProgress * totalScrollHeight,
      behavior: "smooth",
    });
  }, []);

  // Handle URL deep-linking on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#slide-")) {
      const slideId = hash.replace("#slide-", "");
      const index = SLIDES.findIndex((s) => s.id === slideId);
      if (index !== -1) {
        setTimeout(() => {
          scrollToSlide(index);
        }, 300);
      }
    }
  }, [scrollToSlide]);

  // Update hash when active index changes
  useEffect(() => {
    const activeSlide = SLIDES[activeIndex];
    if (activeSlide) {
      const newHash = `#slide-${activeSlide.id}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, "", newHash);
      }
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Right") {
        e.preventDefault();
        scrollToSlide(Math.min(SLIDES.length - 1, activeIndex + 1));
      } else if (e.key === "ArrowLeft" || e.key === "Left") {
        e.preventDefault();
        scrollToSlide(Math.max(0, activeIndex - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, scrollToSlide]);

  const currentSlide = (SLIDES[activeIndex] ?? SLIDES[0]) as Slide;

  return (
    <div className="relative min-h-screen">
      {/* Top Thread Progress Bar */}
      <ThreadProgress
        progress={scrollProgress}
        currentSlideName={currentSlide.title}
        currentSlideNumber={currentSlide.n}
        totalSlides={SLIDES.length}
        onSeek={seekToProgress}
      />

      {/* Main Slides Wrapper */}
      <div
        ref={containerRef}
        style={{
          width: prefersReducedMotion ? "100%" : `${SLIDES.length * 100}vw`,
        }}
        className={`${
          prefersReducedMotion
            ? "flex flex-col"
            : "flex flex-nowrap h-screen"
        }`}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="w-screen h-screen flex-shrink-0">
            {renderSlide(slide)}
          </div>
        ))}
      </div>

      {/* Floating UI: Navigation Arrows */}
      <div className="fixed bottom-10 right-10 z-40 flex space-x-3 pointer-events-auto">
        <button
          onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Diapositiva anterior"
          className="p-3 rounded-full bg-navy/80 border border-sky/20 text-sky hover:bg-sky/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-navy/50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, activeIndex + 1))}
          disabled={activeIndex === SLIDES.length - 1}
          aria-label="Diapositiva siguiente"
          className="p-3 rounded-full bg-navy/80 border border-sky/20 text-sky hover:bg-sky/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-navy/50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Technical Dot Navigation (Vertical Bar on Left) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-3 pointer-events-auto">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Ir al slide ${slide.n}: ${slide.title}`}
              className="group flex items-center focus:outline-none"
            >
              {/* Dot Shape */}
              <div
                className={`w-[6px] h-[6px] rounded-sm transition-all duration-300 ${
                  isActive
                    ? "bg-sky scale-150 rotate-45 shadow-[0_0_8px_#5fa8d3]"
                    : "bg-gray/40 group-hover:bg-sky/60"
                }`}
              />
              
              {/* Technical Indicator Label on Hover */}
              <span
                className={`ml-3 text-[9px] font-mono tracking-widest uppercase bg-navy/90 border border-sky/10 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0 ${
                  isActive ? "text-sky border-sky/30" : "text-gray"
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
