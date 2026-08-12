import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { Copy, Check } from "lucide-react";

interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  role: string;
  isLight: boolean;
}

export const Paleta: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const colors: ColorSwatch[] = [
    {
      name: "NAVY BLUE",
      hex: "#0D1D34",
      rgb: "RGB (13, 29, 52)",
      cmyk: "CMYK (95, 75, 45, 50)",
      role: "Fondo Principal / Texto Negativo",
      isLight: false,
    },
    {
      name: "CORPORATE BLUE",
      hex: "#1D5A8F",
      rgb: "RGB (29, 90, 143)",
      cmyk: "CMYK (88, 62, 18, 5)",
      role: "Marca Principal / Contraste Luz",
      isLight: false,
    },
    {
      name: "SKY BLUE",
      hex: "#5FA8D3",
      rgb: "RGB (95, 168, 211)",
      cmyk: "CMYK (58, 22, 5, 0)",
      role: "Acento / Iluminación de Hilos",
      isLight: true,
    },
    {
      name: "COOL GRAY",
      hex: "#666666",
      rgb: "RGB (102, 102, 102)",
      cmyk: "CMYK (0, 0, 0, 70)",
      role: "Textos Secundarios / Datos Técnicos",
      isLight: true,
    },
    {
      name: "OFF WHITE",
      hex: "#F2F2F2",
      rgb: "RGB (242, 242, 242)",
      cmyk: "CMYK (3, 2, 2, 0)",
      role: "Fondo Secundario / Texto Positivo",
      isLight: true,
    },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <SlideShell id="paleta" n={10} title="Paleta Cromática Oficial" kind="tabla" bgType="off">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="space-y-6 my-auto">
          {/* Swatches Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {colors.map((color) => (
              <div
                key={color.hex}
                className="border border-navy/10 bg-white rounded-lg p-2.5 sm:p-3 shadow-md flex flex-col justify-between text-left space-y-2 sm:space-y-4 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Visual Color block */}
                <div
                  className="w-full h-14 sm:h-20 md:h-24 rounded border border-navy/5 relative flex items-end justify-between p-1.5 sm:p-2 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                >
                  <button
                    onClick={() => handleCopy(color.hex)}
                    className={`p-1 sm:p-1.5 rounded bg-white/95 border border-navy/10 shadow hover:bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                      copiedHex === color.hex ? "opacity-100" : ""
                    }`}
                    title="Copiar HEX"
                  >
                    {copiedHex === color.hex ? (
                      <Check className="w-3 h-3 text-green-600" />
                    ) : (
                      <Copy className="w-3 h-3 text-navy" />
                    )}
                  </button>
                </div>

                {/* Color details */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="font-bold text-[10px] sm:text-xs tracking-wider text-navy font-mono truncate">
                    {color.name}
                  </h4>
                  <span className="block text-[10px] sm:text-[11px] font-bold text-blue font-mono">
                    {color.hex}
                  </span>
                  <div className="text-[8px] sm:text-[9px] font-mono text-gray space-y-0.5 hidden xs:block">
                    <div>{color.rgb}</div>
                    <div>{color.cmyk}</div>
                  </div>
                </div>

                {/* Role text */}
                <div className="border-t border-navy/10 pt-1.5 sm:pt-2 text-[8px] sm:text-[9px] font-mono text-gray/80 leading-tight truncate">
                  {color.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-navy/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>ESPECIFICACIONES DE COLOR</span>
          <span>VALORES HEX / RGB / CMYK</span>
        </div>
      </div>
    </SlideShell>
  );
};
