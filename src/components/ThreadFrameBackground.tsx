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

      {/* 2. Framed Technical Thread Perimeter & Infinite Sewing Machine Stitches */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id={`thread-glow-${isBlackAndWhite ? "bw" : isNavy ? "dark" : "light"}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={accentColor} stopOpacity={isBlackAndWhite ? "0.35" : "0.45"} />
            <stop offset="50%" stopColor={accentColor} stopOpacity={isBlackAndWhite ? "0.15" : "0.2"} />
            <stop offset="100%" stopColor={accentColor} stopOpacity={isBlackAndWhite ? "0.35" : "0.4"} />
          </linearGradient>

          <filter id="stitch-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Framing Thread Rectangle with continuous infinite perimeter stitching */}
        <rect
          x="16"
          y="14"
          width="calc(100% - 32px)"
          height="calc(100% - 28px)"
          fill="none"
          stroke={`${strokeColor}0.25)`}
          strokeWidth="1.2"
          strokeDasharray="6 5"
          className="animate-sewing-perimeter"
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
          <circle cx="10" cy="10" r="2" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.7" : "0.85"} className="animate-needle-pulse" />
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
          <circle cx="28" cy="10" r="2" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.7" : "0.85"} className="animate-needle-pulse" style={{ animationDelay: "0.5s" }} />
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
          <circle cx="10" cy="28" r="2" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.7" : "0.85"} className="animate-needle-pulse" style={{ animationDelay: "1s" }} />
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
          <circle cx="28" cy="28" r="2" fill={accentColor} fillOpacity={isBlackAndWhite ? "0.7" : "0.85"} className="animate-needle-pulse" style={{ animationDelay: "1.5s" }} />
        </g>

        {/* 1. Sinuous Thread Wave 1 - Main Infinite Sewing Stitch */}
        <path
          d="M -100 280 C 250 80, 480 480, 800 180 C 1120 -80, 1340 380, 1680 220"
          fill="none"
          stroke={`url(#thread-glow-${isBlackAndWhite ? "bw" : isNavy ? "dark" : "light"})`}
          strokeWidth="1.8"
          strokeDasharray="8 6"
          strokeLinecap="round"
          className="animate-sewing-flow"
        />

        {/* 2. Secondary Interlaced Parallel Stitch (Pespunte doble / Costura de refuerzo) */}
        <path
          d="M -80 300 C 270 100, 500 500, 820 200 C 1140 -60, 1360 400, 1700 240"
          fill="none"
          stroke={`${strokeColor}0.18)`}
          strokeWidth="1.2"
          strokeDasharray="4 7"
          strokeLinecap="round"
          className="animate-sewing-flow-fast"
        />

        {/* 3. Subtle Reverse Needle Thread (Costura en cadeneta) */}
        <path
          d="M -120 260 C 230 60, 460 460, 780 160 C 1100 -100, 1320 360, 1660 200"
          fill="none"
          stroke={`${strokeColor}0.12)`}
          strokeWidth="1"
          strokeDasharray="3 9"
          className="animate-sewing-flow"
          style={{ animationDirection: "reverse", animationDuration: "8s" }}
        />

        {/* 4. Active Sewing Needle Puncture Nodes (Puntos de perforación de aguja) */}
        <g>
          {[
            { cx: "18%", cy: "22%", delay: "0s" },
            { cx: "32%", cy: "48%", delay: "0.6s" },
            { cx: "52%", cy: "28%", delay: "1.2s" },
            { cx: "72%", cy: "15%", delay: "1.8s" },
            { cx: "88%", cy: "38%", delay: "2.4s" },
          ].map((pt, idx) => (
            <g key={idx} className="animate-needle-pulse" style={{ animationDelay: pt.delay }}>
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r="3"
                fill={accentColor}
                fillOpacity={isBlackAndWhite ? "0.2" : "0.35"}
              />
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r="1.2"
                fill={accentColor}
                fillOpacity={isBlackAndWhite ? "0.7" : "0.9"}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};
