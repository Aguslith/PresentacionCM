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

      {/* 2. Framed Technical Thread Perimeter & Sewing Stitches */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
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
        </defs>

        {/* Framing Thread Rectangle */}
        <rect
          x="16"
          y="14"
          width="calc(100% - 32px)"
          height="calc(100% - 28px)"
          fill="none"
          stroke={`${strokeColor}0.2)`}
          strokeWidth="1.2"
          strokeDasharray="6 5"
          className="animate-sewing-perimeter"
        />

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

        {/* 2. Secondary Parallel Stitch */}
        <path
          d="M -80 300 C 270 100, 500 500, 820 200 C 1140 -60, 1360 400, 1700 240"
          fill="none"
          stroke={`${strokeColor}0.15)`}
          strokeWidth="1.2"
          strokeDasharray="4 7"
          strokeLinecap="round"
          className="animate-sewing-flow-fast"
        />

        {/* 3. Subtle Reverse Needle Thread */}
        <path
          d="M -120 260 C 230 60, 460 460, 780 160 C 1100 -100, 1320 360, 1660 200"
          fill="none"
          stroke={`${strokeColor}0.1)`}
          strokeWidth="1"
          strokeDasharray="3 9"
          className="animate-sewing-flow"
          style={{ animationDirection: "reverse", animationDuration: "8s" }}
        />

        {/* 4. Active Sewing Needle Nodes */}
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

      {/* 3. Clean CSS Corner Crosshairs (No SVG calc errors) */}
      {/* Top-Left */}
      <div className="absolute top-3.5 left-4 pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 2 18 L 2 2 L 18 2" fill="none" stroke={accentColor} strokeWidth="1.2" strokeOpacity={0.4} />
          <circle cx="2" cy="2" r="2" fill={accentColor} fillOpacity={0.8} />
        </svg>
      </div>

      {/* Top-Right */}
      <div className="absolute top-3.5 right-4 pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 18 18 L 18 2 L 2 2" fill="none" stroke={accentColor} strokeWidth="1.2" strokeOpacity={0.4} />
          <circle cx="18" cy="2" r="2" fill={accentColor} fillOpacity={0.8} />
        </svg>
      </div>

      {/* Bottom-Left */}
      <div className="absolute bottom-3.5 left-4 pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 2 2 L 2 18 L 18 18" fill="none" stroke={accentColor} strokeWidth="1.2" strokeOpacity={0.4} />
          <circle cx="2" cy="18" r="2" fill={accentColor} fillOpacity={0.8} />
        </svg>
      </div>

      {/* Bottom-Right */}
      <div className="absolute bottom-3.5 right-4 pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 18 2 L 18 18 L 2 18" fill="none" stroke={accentColor} strokeWidth="1.2" strokeOpacity={0.4} />
          <circle cx="18" cy="18" r="2" fill={accentColor} fillOpacity={0.8} />
        </svg>
      </div>
    </div>
  );
};
