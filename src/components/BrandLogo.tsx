import React from "react";

export type LogoVariant = "horizontal" | "vertical" | "isotype";
export type LogoTheme = "navy" | "light" | "grayscale" | "monochrome-white" | "monochrome-black" | "embroidery" | "kraft";
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface BrandLogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: LogoSize;
  className?: string;
  showTagline?: boolean;
  withGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  theme = "navy",
  size = "md",
  className = "",
  showTagline = true,
  withGlow = false,
}) => {
  // Sizing mappings
  const sizeConfig = {
    xs: {
      isotype: "w-5 h-5",
      title: "text-xs tracking-[0.15em]",
      tagline: "text-[5px] tracking-[0.25em]",
      gap: "gap-1.5",
    },
    sm: {
      isotype: "w-8 h-8",
      title: "text-base tracking-[0.16em]",
      tagline: "text-[7px] tracking-[0.3em]",
      gap: "gap-2.5",
    },
    md: {
      isotype: "w-12 h-12",
      title: "text-xl sm:text-2xl tracking-[0.18em]",
      tagline: "text-[8px] sm:text-[9px] tracking-[0.35em]",
      gap: "gap-3 sm:gap-4",
    },
    lg: {
      isotype: "w-16 h-16 sm:w-20 sm:h-20",
      title: "text-2xl sm:text-4xl tracking-[0.18em]",
      tagline: "text-[9px] sm:text-[11px] tracking-[0.4em]",
      gap: "gap-4 sm:gap-5",
    },
    xl: {
      isotype: "w-24 h-24 sm:w-32 sm:h-32",
      title: "text-4xl sm:text-5xl tracking-[0.2em]",
      tagline: "text-[11px] sm:text-[13px] tracking-[0.45em]",
      gap: "gap-5 sm:gap-6",
    },
    "2xl": {
      isotype: "w-36 h-36 sm:w-48 sm:h-48",
      title: "text-5xl sm:text-6xl tracking-[0.22em]",
      tagline: "text-xs sm:text-sm tracking-[0.5em]",
      gap: "gap-6 sm:gap-8",
    },
  }[size];

  // Theme-specific styles
  const getThemeStyles = () => {
    switch (theme) {
      case "light":
        return {
          titleClass: "text-navy",
          taglineClass: "text-blue font-semibold",
          imgFilter: "drop-shadow(0 2px 8px rgba(13,29,52,0.12))",
        };
      case "grayscale":
        return {
          titleClass: "text-gray-900",
          taglineClass: "text-gray-600 font-semibold",
          imgFilter: "grayscale(100%) contrast(110%)",
        };
      case "monochrome-white":
        return {
          titleClass: "text-white",
          taglineClass: "text-white/80 font-semibold",
          imgFilter: "brightness(0) invert(1)",
        };
      case "monochrome-black":
        return {
          titleClass: "text-black",
          taglineClass: "text-black/80 font-semibold",
          imgFilter: "brightness(0)",
        };
      case "embroidery":
        return {
          titleClass: "text-off",
          taglineClass: "text-sky font-semibold",
          imgFilter: "drop-shadow(0 4px 12px rgba(95,168,211,0.5)) contrast(120%)",
        };
      case "kraft":
        return {
          titleClass: "text-[#241711]",
          taglineClass: "text-[#4A3525] font-semibold",
          imgFilter: "sepia(70%) hue-rotate(170deg) contrast(140%) brightness(0.8)",
        };
      case "navy":
      default:
        return {
          titleClass: "text-off",
          taglineClass: "text-sky font-semibold",
          imgFilter: withGlow
            ? "drop-shadow(0 0 18px rgba(95,168,211,0.45))"
            : "drop-shadow(0 2px 10px rgba(0,0,0,0.3))",
        };
    }
  };

  const themeStyle = getThemeStyles();

  const isotypeNode = (
    <div className={`relative shrink-0 flex items-center justify-center ${sizeConfig.isotype}`}>
      <img
        src="/logotipo.png"
        alt="ALPACLADD Isotipo"
        className="w-full h-full object-contain select-none pointer-events-none transition-all duration-300"
        style={{ filter: themeStyle.imgFilter }}
        loading="eager"
      />
    </div>
  );

  if (variant === "isotype") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {isotypeNode}
      </div>
    );
  }

  const typographyNode = (
    <div
      className={`flex flex-col select-none ${
        variant === "vertical" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span
        className={`font-bold font-sans uppercase leading-none ${sizeConfig.title} ${themeStyle.titleClass}`}
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        ALPACLADD
      </span>
      {showTagline && (
        <span
          className={`font-mono uppercase ${sizeConfig.tagline} ${themeStyle.taglineClass} mt-1`}
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Fábrica de Hilados
        </span>
      )}
    </div>
  );

  return (
    <div
      className={`inline-flex ${
        variant === "vertical" ? "flex-col items-center text-center" : "flex-row items-center"
      } ${sizeConfig.gap} ${className}`}
    >
      {isotypeNode}
      {typographyNode}
    </div>
  );
};
