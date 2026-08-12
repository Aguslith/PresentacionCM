import React from "react";

interface ThreadProgressProps {
  progress: number; // Value between 0 and 1
  currentSlideName?: string;
  currentSlideNumber?: number;
  totalSlides?: number;
  onSeek?: (progress: number) => void;
}

export const ThreadProgress: React.FC<ThreadProgressProps> = ({
  progress,
  onSeek,
}) => {
  const clampedProgress = Math.max(0, Math.min(1, progress));

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] hover:h-[5px] cursor-pointer transition-all duration-200 bg-white/10 group"
      onClick={(e) => {
        if (!onSeek) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
        onSeek(newProgress);
      }}
      title="Progreso de la presentación"
    >
      {/* Dynamic Progress Indicator */}
      <div
        className="h-full bg-sky transition-all duration-150 ease-out"
        style={{ width: `${clampedProgress * 100}%` }}
      />
    </div>
  );
};
