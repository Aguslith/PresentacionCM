import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  Send,
  X,
  ShieldCheck,
} from "lucide-react";

export const Cierre: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sampleSubmitted, setSampleSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    yarnType: "Algodón Peinado 30/1",
  });

  const handleSubmitSample = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSubmitted(true);
    setTimeout(() => {
      setSampleSubmitted(false);
      setModalOpen(false);
      setFormData({ name: "", company: "", email: "", phone: "", yarnType: "Algodón Peinado 30/1" });
    }, 2200);
  };

  return (
    <SlideShell id="cierre" n={23} title="ALPACLADD — Fin de Presentación" kind="cierre" bgType="navy">
      <div className="h-full flex flex-col justify-between py-1 relative">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky/10 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-[80px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          
          {/* Left Column: Commercial Hook, Contact Channels & CTAs */}
          <div className="lg:col-span-7 text-left space-y-4">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky/10 border border-sky/30 text-sky text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CIERRE DE PRESENTACIÓN // ESPACIO DE PREGUNTAS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans text-white tracking-tight uppercase leading-none">
                HILOS QUE TEJEN <br />
                <span className="text-sky drop-shadow-[0_0_25px_rgba(95,168,211,0.4)]">
                  FUTURO INDUSTRIAL
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-lg leading-relaxed pt-1">
                La combinación de tecnología suiza de purgado óptico, fibra natural seleccionada y una sólida identidad digital para posicionar a <strong className="text-white">ALPACLADD</strong> como el socio estratégico indispensable de la confección argentina.
              </p>
            </div>

            {/* Interactive Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              
              <a
                href="mailto:ventas@alpacladd.com.ar"
                className="bg-navy/80 hover:bg-navy border border-sky/20 hover:border-sky/50 p-3 rounded-xl transition-all duration-200 group flex items-start space-x-3 shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-sky/10 border border-sky/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-sky" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Atención Comercial</span>
                  <strong className="text-xs text-white font-sans font-bold block truncate group-hover:text-sky transition-colors">
                    ventas@alpacladd.com.ar
                  </strong>
                </div>
              </a>

              <a
                href="tel:+543804123456"
                className="bg-navy/80 hover:bg-navy border border-sky/20 hover:border-sky/50 p-3 rounded-xl transition-all duration-200 group flex items-start space-x-3 shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-sky/10 border border-sky/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-sky" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Línea Directa B2B</span>
                  <strong className="text-xs text-white font-sans font-bold block truncate group-hover:text-sky transition-colors">
                    +54 (380) 442-9900
                  </strong>
                </div>
              </a>

              <div className="bg-navy/80 border border-sky/20 p-3 rounded-xl flex items-start space-x-3 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-sky/10 border border-sky/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-sky" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Planta Industrial</span>
                  <strong className="text-xs text-white font-sans font-bold block truncate">
                    Parque Industrial • La Rioja
                  </strong>
                </div>
              </div>

              <a
                href="https://alpacladd.com.ar"
                target="_blank"
                rel="noreferrer"
                className="bg-navy/80 hover:bg-navy border border-sky/20 hover:border-sky/50 p-3 rounded-xl transition-all duration-200 group flex items-start space-x-3 shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-sky/10 border border-sky/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-4 h-4 text-sky" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">Portal Web Oficial</span>
                  <strong className="text-xs text-white font-sans font-bold block truncate group-hover:text-sky transition-colors">
                    alpacladd.com.ar
                  </strong>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="py-3 px-5 bg-sky hover:bg-white text-navy font-black text-xs font-sans uppercase tracking-wider rounded-xl transition-all duration-200 shadow-xl shadow-sky/20 flex items-center space-x-2 group active:scale-95"
              >
                <PackageCheck className="w-4 h-4" />
                <span>Solicitar Muestra Técnica 1kg</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1.5 pl-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ensayos certificados bajo norma Uster</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Brand Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-sm bg-gradient-to-b from-navy/90 to-[#0c1424] border border-sky/30 rounded-3xl p-7 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(95,168,211,0.2)] text-center space-y-5 backdrop-blur-md overflow-hidden group"
            >
              {/* Subtle Aura Reflection */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-sky/20 rounded-full filter blur-2xl group-hover:bg-sky/30 transition-all duration-700 pointer-events-none" />

              {/* Verified Factory Pill */}
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-sky" />
                <span>ORIGEN LA RIOJA, ARGENTINA</span>
              </div>

              {/* Large Brand Visual */}
              <div className="py-3 flex flex-col items-center justify-center">
                <div className="w-48 sm:w-56 h-32 flex items-center justify-center p-2">
                  <img
                    src="/imagotipo.png"
                    alt="ALPACLADD Hilados"
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Slogan & Value Pillars */}
              <div className="space-y-3 pt-1 border-t border-sky/15">
                <p className="text-xs font-mono font-bold text-sky uppercase tracking-widest">
                  PRECISIÓN QUE TRANSFORMA FIBRAS EN HILOS
                </p>

                <div className="grid grid-cols-3 gap-1 text-[9.5px] font-sans font-semibold text-slate-300">
                  <div className="bg-navy/80 py-1.5 rounded-lg border border-sky/15">CALIDAD ISO</div>
                  <div className="bg-navy/80 py-1.5 rounded-lg border border-sky/15">SAVIO 2026</div>
                  <div className="bg-navy/80 py-1.5 rounded-lg border border-sky/15">STOCK 48HS</div>
                </div>
              </div>

              {/* Team Closing Footer */}
              <div className="pt-2 text-[10px] font-mono text-slate-400">
                <span>Equipo de Comunicación & Marketing Digital</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Sample Request Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-navy text-white border border-sky/30 rounded-3xl max-w-md w-full p-6 shadow-2xl relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {sampleSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white">¡Solicitud Registrada!</h3>
                  <p className="text-xs text-slate-300 font-sans max-w-xs mx-auto">
                    Nuestro equipo técnico de planta se pondrá en contacto para coordinar el despacho del hilado a su taller.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitSample} className="space-y-4">
                  <div>
                    <div className="inline-flex items-center space-x-1 text-sky text-[10px] font-mono font-bold uppercase mb-1">
                      <PackageCheck className="w-3.5 h-3.5" />
                      <span>PROGRAMA DE TESTEO INDUSTRIAL</span>
                    </div>
                    <h3 className="text-lg font-black font-sans text-white uppercase tracking-wide">
                      Solicitud de Muestra Técnica 1kg
                    </h3>
                    <p className="text-xs text-slate-300 font-sans">
                      Envío sin cargo para evaluación en telares circulares o rectilíneos.
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs font-sans">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-300 uppercase mb-1">
                        Nombre y Apellido
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Martín García"
                        className="w-full bg-navy/90 border border-sky/30 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky placeholder-slate-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-300 uppercase mb-1">
                          Empresa / Taller
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Tejeduría..."
                          className="w-full bg-navy/90 border border-sky/30 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky placeholder-slate-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-slate-300 uppercase mb-1">
                          WhatsApp / Teléfono
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+54 9..."
                          className="w-full bg-navy/90 border border-sky/30 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky placeholder-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-300 uppercase mb-1">
                        Email Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="compras@empresa.com"
                        className="w-full bg-navy/90 border border-sky/30 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-300 uppercase mb-1">
                        Hilado de Interés
                      </label>
                      <select
                        value={formData.yarnType}
                        onChange={(e) => setFormData({ ...formData, yarnType: e.target.value })}
                        className="w-full bg-[#0c1424] border border-sky/30 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky"
                      >
                        <option value="Algodón Peinado 30/1">Algodón Peinado 30/1 (Alta Tenacidad)</option>
                        <option value="Algodón Peinado 24/1">Algodón Peinado 24/1 (Jersey Pesado)</option>
                        <option value="Mezcla Alpaca & Algodón">Mezcla Alpaca & Algodón (Línea Premium)</option>
                        <option value="Hilado Teñido Deep Navy">Hilado Teñido Deep Navy (Tintura Reactiva)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-sky hover:bg-white text-navy font-black text-xs font-sans uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-sky/20 flex items-center justify-center space-x-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar Solicitud Sin Cargo</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideShell>
  );
};
