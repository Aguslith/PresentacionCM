import React from "react";

interface ThreadFrameBackgroundProps {
  isNavy: boolean;
  isBlackAndWhite?: boolean;
}

export const ThreadFrameBackground: React.FC<ThreadFrameBackgroundProps> = ({
  isNavy,
  isBlackAndWhite = false,
}) => {
  // Determine stroke and accent colors depending on theme
  const strokeColor = isBlackAndWhite
    ? "rgba(255, 255, 255, "
    : isNavy
    ? "rgba(95, 168, 211, "
    : "rgba(29, 90, 143, ";

  const accentColor = isBlackAndWhite
    ? "#FFFFFF"
    : isNavy
    ? "#5FA8D3"
    : "#1D5A8F";

  const gridColor = isBlackAndWhite
    ? "rgba(255, 255, 255, 0.03)"
    : isNavy
    ? "rgba(95, 168, 211, 0.04)"
    : "rgba(13, 29, 52, 0.035)";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Base Subtle Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. Framed Technical Thread Perimeter (Sin textos técnicos) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id={`thread-glow-${isBlackAndWhite ? "bw" : isNavy ? "dark" : "light"}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={accentColor} stopOpacity={isBlackAndWhite ? "0.2" : "0.3"} />
            <stop offset="50%" stopColor={accentColor} stopOpacity="0.08" />
            <stop offset="100%" stopColor={accentColor} stopOpacity={isBlackAndWhite ? "0.2" : "0.25"} />
          </linearGradient>
        </defs>

        {/* Framing Thread Rectangle */}
        <rect
          x="16"
          y="14"
          width="calc(100% - 32px)"
          height="calc(100% - 28px)"
          fill="none"
          stroke={`${strokeColor}0.18)`}
          strokeWidth="1"
          strokeDasharray="6 4"
        />

        {/* Corner Crosshairs */}
        {/* Top-Left */}
        <g>
          <path
            d="M 10 28 L 10 10 L 28 10"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeOpacity={isBlackAndWhite ? "0.4" : "0.5"}
          />
          <circle cx="10" cy="10" r="1.5" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.6" : "0.7"} />
        </g>

        {/* Top-Right */}
        <g transform="translate(calc(100% - 38px), 0)">
          <path
            d="M 28 28 L 28 10 L 10 10"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeOpacity={isBlackAndWhite ? "0.4" : "0.5"}
          />
          <circle cx="28" cy="10" r="1.5" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.6" : "0.7"} />
        </g>

        {/* Bottom-Left */}
        <g transform="translate(0, calc(100% - 38px))">
          <path
            d="M 10 10 L 10 28 L 28 28"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeOpacity={isBlackAndWhite ? "0.4" : "0.5"}
          />
          <circle cx="10" cy="28" r="1.5" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.6" : "0.7"} />
        </g>

        {/* Bottom-Right */}
        <g transform="translate(calc(100% - 38px), calc(100% - 38px))">
          <path
            d="M 28 10 L 28 28 L 10 28"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeOpacity={isBlackAndWhite ? "0.4" : "0.5"}
          />
          <circle cx="28" cy="28" r="1.5" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.6" : "0.7"} />
        </g>

        {/* Dynamic Sinuous Thread Weave across Slide */}
        <path
          d="M -100 280 C 250 80, 480 480, 800 180 C 1120 -80, 1340 380, 1680 220"
          fill="none"
          stroke={`url(#thread-glow-${isBlackAndWhite ? "bw" : isNavy ? "dark" : "light"})`}
          strokeWidth="1.4"
          strokeDasharray="5 7"
        />
      </svg>
    </div>
  );
};
