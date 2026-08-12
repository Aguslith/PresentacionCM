import React from "react";
import { SlideShell } from "../components/SlideShell";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

export const Cierre: React.FC = () => {
  return (
    <SlideShell id="cierre" n={24} title="ALPACLADD — Fin de Presentación" kind="cierre" bgType="navy">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Contact info and CTA */}
        <div className="space-y-6 text-left">
          <span className="inline-block border border-sky/30 bg-sky/5 px-3 py-1 text-[10px] tracking-[0.2em] text-sky uppercase font-mono rounded">
            CENTRO DE ATENCIÓN INDUSTRIAL
          </span>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-off leading-tight">
            INNOVACIÓN <br />
            <span className="text-sky">TEXTIL B2B</span>
          </h1>
          <p className="text-sm text-gray max-w-md font-light leading-relaxed">
            Estamos listos para abastecer su línea de confección con hilados de máxima resistencia y regularidad. Solicite su muestra técnica sin cargo para testeo en máquina.
          </p>

          <div className="space-y-3 pt-2 text-xs text-off/90 font-mono">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-sky shrink-0" />
              <span>ventas@alpacladd.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-sky shrink-0" />
              <span>+54 11 4872-9900 (Líneas Rotativas)</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-sky shrink-0" />
              <span>Parque Industrial Pilar, Buenos Aires, Argentina</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="mailto:ventas@alpacladd.com?subject=Solicitud de Muestras de Hilado ALPACLADD"
              className="inline-flex items-center space-x-2 py-3 px-6 bg-sky border border-sky text-navy font-bold uppercase tracking-widest text-xs rounded hover:bg-transparent hover:text-sky transition-all duration-300 shadow-lg shadow-sky/20"
            >
              <span>Solicitar Muestra Técnica</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Large Logo Hero Card */}
        <div className="relative flex flex-col justify-center items-center h-72 md:h-96 text-center space-y-4">
          <div className="absolute w-72 h-72 bg-sky/15 rounded-full filter blur-3xl animate-pulse" />
          
          {/* Pulsing large final symbol */}
          <div className="w-full max-w-xs flex flex-col items-center justify-center p-8 bg-navy/70 border border-sky/20 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-sm group hover:border-sky/40 transition-colors">
            <div className="relative z-10 py-2">
              <BrandLogo
                variant="vertical"
                theme="navy"
                size="lg"
                withGlow={true}
              />
            </div>
          </div>

          <div className="text-[10px] text-sky/80 font-mono uppercase tracking-[0.3em] font-medium">
            Precisión que transforma fibras en hilos
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
