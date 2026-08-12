import React from "react";

interface ThreadFrameBackgroundProps {
  isNavy: boolean;
}

export const ThreadFrameBackground: React.FC<ThreadFrameBackgroundProps> = ({ isNavy }) => {
  const strokeColor = isNavy ? "rgba(95, 168, 211, " : "rgba(29, 90, 143, ";
  const accentColor = isNavy ? "#5FA8D3" : "#1D5A8F";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Base Technical Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isNavy
            ? "linear-gradient(to right, rgba(95, 168, 211, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(95, 168, 211, 0.04) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(13, 29, 52, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(13, 29, 52, 0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* 2. Framed Technical Thread Perimeter (Hilos Encuadrados) */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`thread-grid-${isNavy ? 'dark' : 'light'}`} width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M 72 0 L 0 0 0 72"
              fill="none"
              stroke={`${strokeColor}0.05)`}
              strokeWidth="0.8"
            />
          </pattern>
          <linearGradient id={`thread-glow-${isNavy ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.3" />
            <stop offset="50%" stopColor={accentColor} stopOpacity="0.1" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Framing Thread Rectangle (Inscribed within margins) */}
        <rect
          x="20"
          y="18"
          width="calc(100% - 40px)"
          height="calc(100% - 36px)"
          fill="none"
          stroke={`${strokeColor}0.25)`}
          strokeWidth="1"
          strokeDasharray="6 4"
        />

        {/* Secondary Inner Framing Thread */}
        <rect
          x="26"
          y="24"
          width="calc(100% - 52px)"
          height="calc(100% - 48px)"
          fill="none"
          stroke={`${strokeColor}0.12)`}
          strokeWidth="0.75"
        />

        {/* Corner Brackets / Crosshairs (Hilos de Tensión en Esquinas) */}
        {/* Top-Left */}
        <g>
          <path
            d="M 12 36 L 12 12 L 36 12"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity={isNavy ? "0.6" : "0.5"}
          />
          <circle cx="12" cy="12" r="2" fill={accentColor} fillOpacity={isNavy ? "0.8" : "0.6"} />
          <line x1="6" y1="12" x2="18" y2="12" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="12" y1="6" x2="12" y2="18" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="24" y="32" fill={accentColor} fillOpacity="0.35" fontSize="7" fontFamily="monospace">
            [HILO-T1]
          </text>
        </g>

        {/* Top-Right */}
        <g transform="translate(calc(100% - 48px), 0)">
          <path
            d="M 36 36 L 36 12 L 12 12"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity={isNavy ? "0.6" : "0.5"}
          />
          <circle cx="36" cy="12" r="2" fill={accentColor} fillOpacity={isNavy ? "0.8" : "0.6"} />
          <line x1="30" y1="12" x2="42" y2="12" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="36" y1="6" x2="36" y2="18" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="0" y="32" fill={accentColor} fillOpacity="0.35" fontSize="7" fontFamily="monospace" textAnchor="end">
            [HILO-T2]
          </text>
        </g>

        {/* Bottom-Left */}
        <g transform="translate(0, calc(100% - 48px))">
          <path
            d="M 12 12 L 12 36 L 36 36"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity={isNavy ? "0.6" : "0.5"}
          />
          <circle cx="12" cy="36" r="2" fill={accentColor} fillOpacity={isNavy ? "0.8" : "0.6"} />
          <line x1="6" y1="36" x2="18" y2="36" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="12" y1="30" x2="12" y2="42" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="24" y="24" fill={accentColor} fillOpacity="0.35" fontSize="7" fontFamily="monospace">
            [HILO-T3]
          </text>
        </g>

        {/* Bottom-Right */}
        <g transform="translate(calc(100% - 48px), calc(100% - 48px))">
          <path
            d="M 36 12 L 36 36 L 12 36"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity={isNavy ? "0.6" : "0.5"}
          />
          <circle cx="36" cy="36" r="2" fill={accentColor} fillOpacity={isNavy ? "0.8" : "0.6"} />
          <line x1="30" y1="36" x2="42" y2="36" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="36" y1="30" x2="36" y2="42" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="0" y="24" fill={accentColor} fillOpacity="0.35" fontSize="7" fontFamily="monospace" textAnchor="end">
            [HILO-T4]
          </text>
        </g>

        {/* Framing Thread Guides (Urdimbre & Trama) */}
        {/* Horizontal Guide Thread across middle-top */}
        <line
          x1="20"
          y1="85"
          x2="calc(100% - 20px)"
          y2="85"
          stroke={`${strokeColor}0.1)`}
          strokeWidth="0.75"
          strokeDasharray="2 6"
        />

        {/* Horizontal Guide Thread across middle-bottom */}
        <line
          x1="20"
          y1="calc(100% - 60px)"
          x2="calc(100% - 20px)"
          y2="calc(100% - 60px)"
          stroke={`${strokeColor}0.1)`}
          strokeWidth="0.75"
          strokeDasharray="2 6"
        />

        {/* Vertical Guide Threads */}
        <line
          x1="120"
          y1="18"
          x2="120"
          y2="calc(100% - 18px)"
          stroke={`${strokeColor}0.08)`}
          strokeWidth="0.75"
          strokeDasharray="3 9"
        />
        <line
          x1="calc(100% - 120px)"
          y1="18"
          x2="calc(100% - 120px)"
          y2="calc(100% - 18px)"
          stroke={`${strokeColor}0.08)`}
          strokeWidth="0.75"
          strokeDasharray="3 9"
        />

        {/* Dynamic Continuous Sinuous Thread Weave across Slide */}
        <path
          d="M -100 280 C 250 80, 480 480, 800 180 C 1120 -80, 1340 380, 1680 220"
          fill="none"
          stroke={`url(#thread-glow-${isNavy ? 'dark' : 'light'})`}
          strokeWidth="1.6"
          strokeDasharray="5 7"
        />

        {/* Second interlacing micro-thread */}
        <path
          d="M -50 360 C 300 200, 600 520, 950 260 C 1250 80, 1450 420, 1720 310"
          fill="none"
          stroke={`${strokeColor}0.12)`}
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>
    </div>
  );
};
