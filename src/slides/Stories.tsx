import React, { useState } from "react";
import { SlideShell } from "../components/SlideShell";
import { Award, Check, AlertCircle } from "lucide-react";

export const Stories: React.FC = () => {
  const [activeStory, setActiveStory] = useState<"encuesta" | "quiz">("encuesta");
  
  // Poll States
  const [pollVoted, setPollVoted] = useState(false);
  const [pollVotes, setPollVotes] = useState({ a: 58, b: 42 });

  // Quiz States
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const quizCorrectIndex = 1; // "Purgador óptico"

  const handlePollVote = (option: "a" | "b") => {
    if (pollVoted) return;
    setPollVotes((prev) => {
      const updated = { ...prev };
      if (option === "a") updated.a += 1;
      else updated.b += 1;
      return updated;
    });
    setPollVoted(true);
  };

  const handleQuizSelect = (index: number) => {
    if (quizSelected !== null) return;
    setQuizSelected(index);
  };

  // Percent calculation
  const totalPoll = pollVotes.a + pollVotes.b;
  const percentA = Math.round((pollVotes.a / totalPoll) * 100);
  const percentB = 100 - percentA;

  return (
    <SlideShell id="stories" n={21} title="Estrategia: Stories Interactivas" kind="social" bgType="navy">
      <div className="h-full flex flex-col justify-between py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
          {/* Info and tabs */}
          <div className="md:col-span-5 text-left space-y-5">
            <p className="text-sm text-gray font-light leading-relaxed">
              Las Stories de Instagram se planifican con stickers interactivos para incentivar la participación (engagement) de técnicos, confeccionistas y diseñadores de moda.
            </p>

            <div className="flex flex-col space-y-2">
              <span className="text-[10px] font-mono text-gray uppercase tracking-widest">SELECCIONAR STORY</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveStory("encuesta")}
                  className={`py-2 px-1 text-[10px] font-mono uppercase tracking-wider rounded border transition-all duration-300 ${
                    activeStory === "encuesta"
                      ? "bg-sky/20 border-sky text-sky"
                      : "bg-navy/40 border-sky/15 text-gray hover:border-sky/40"
                  }`}
                >
                  Story 1: Encuesta
                </button>
                <button
                  onClick={() => setActiveStory("quiz")}
                  className={`py-2 px-1 text-[10px] font-mono uppercase tracking-wider rounded border transition-all duration-300 ${
                    activeStory === "quiz"
                      ? "bg-sky/20 border-sky text-sky"
                      : "bg-navy/40 border-sky/15 text-gray hover:border-sky/40"
                  }`}
                >
                  Story 2: Trivia Quiz
                </button>
              </div>
            </div>

            <div className="border border-sky/15 bg-sky/5 p-4 rounded-lg">
              <h4 className="text-xs font-mono font-bold text-sky uppercase mb-1">STORY ESTRATEGIA B2B</h4>
              <p className="text-[11px] text-gray/80 leading-relaxed font-light font-mono">
                Preguntas orientadas a resolver dolores específicos del tejedor. Posicionamos a ALPACLADD como la solución obvia frente a los competidores tradicionales.
              </p>
            </div>
          </div>

          {/* Interactive Phone mockup */}
          <div className="md:col-span-7 flex flex-col items-center">
            {/* Phone Frame */}
            <div className="w-64 h-[440px] rounded-[36px] border-[6px] border-slate-700 bg-navy relative shadow-2xl overflow-hidden flex flex-col justify-between p-4 pb-6">
              {/* Speaker notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-700 rounded-full" />
              
              {/* Top info story */}
              <div className="flex items-center justify-between mt-2 z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full border border-sky/80 flex items-center justify-center bg-navy overflow-hidden p-0.5">
                    <img src="/logotipo.png" alt="ALPACLADD" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[8px] font-bold text-off font-mono">alpacladd.hilados</span>
                  <span className="text-[8px] text-gray font-mono">3 h</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-off/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-off/20" />
                </div>
              </div>

              {/* Story Content Area */}
              <div className="flex-grow flex flex-col items-center justify-center text-center px-2 py-4 z-10">
                {activeStory === "encuesta" ? (
                  /* Encuesta Content */
                  <div className="space-y-6 w-full">
                    <span className="inline-block border border-sky/20 bg-sky/5 px-2 py-0.5 rounded text-[7px] tracking-widest text-sky uppercase font-mono">
                      PREGUNTA DE PRECISIÓN
                    </span>
                    <h4 className="text-sm font-bold text-off uppercase tracking-wider leading-snug">
                      ¿Qué parámetro afecta más la rentabilidad de tu taller textil?
                    </h4>

                    {/* Interactive Poll Sticker */}
                    <div className="bg-white text-navy rounded-2xl p-4 shadow-xl border border-sky/20 space-y-3 mx-2">
                      <p className="text-[9px] font-mono font-bold text-gray uppercase tracking-wider">
                        VOTACIÓN ALPACLADD
                      </p>

                      <div className="flex flex-col space-y-2">
                        {/* Option A */}
                        <button
                          onClick={() => handlePollVote("a")}
                          className={`w-full py-2.5 px-3 rounded-lg border text-left text-xs font-semibold font-mono relative overflow-hidden transition-all duration-300 ${
                            pollVoted
                              ? "bg-sky/10 border-sky/20"
                              : "bg-navy/5 border-navy/10 hover:border-sky/40"
                          }`}
                        >
                          {pollVoted && (
                            <div
                              className="absolute top-0 left-0 bottom-0 bg-sky/25 transition-all duration-500"
                              style={{ width: `${percentA}%` }}
                            />
                          )}
                          <div className="flex justify-between items-center z-10 relative">
                            <span>Resistencia a la rotura</span>
                            {pollVoted && <span className="text-sky font-bold">{percentA}%</span>}
                          </div>
                        </button>

                        {/* Option B */}
                        <button
                          onClick={() => handlePollVote("b")}
                          className={`w-full py-2.5 px-3 rounded-lg border text-left text-xs font-semibold font-mono relative overflow-hidden transition-all duration-300 ${
                            pollVoted
                              ? "bg-sky/10 border-sky/20"
                              : "bg-navy/5 border-navy/10 hover:border-sky/40"
                          }`}
                        >
                          {pollVoted && (
                            <div
                              className="absolute top-0 left-0 bottom-0 bg-sky/25 transition-all duration-500"
                              style={{ width: `${percentB}%` }}
                            />
                          )}
                          <div className="flex justify-between items-center z-10 relative">
                            <span>Regularidad del espesor</span>
                            {pollVoted && <span className="text-sky font-bold">{percentB}%</span>}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Quiz Content */
                  <div className="space-y-4 w-full">
                    <span className="inline-block border border-sky/20 bg-sky/5 px-2 py-0.5 rounded text-[7px] tracking-widest text-sky uppercase font-mono">
                      TRIVIA TÉCNICA
                    </span>
                    <h4 className="text-xs font-bold text-off uppercase tracking-wider leading-snug">
                      ¿Qué sistema elimina neps y fallas ópticas en la conera?
                    </h4>

                    {/* Interactive Quiz Sticker */}
                    <div className="bg-white text-navy rounded-2xl p-4 shadow-xl border border-sky/20 space-y-2 mx-1">
                      {["Splicer neumático", "Purgador óptico", "Cardador rotativo"].map((opt, idx) => {
                        const isCorrect = idx === quizCorrectIndex;
                        const isSelected = quizSelected === idx;
                        let btnStyle = "bg-navy/5 border-navy/10 hover:border-sky/40";
                        
                        if (quizSelected !== null) {
                          if (isCorrect) {
                            btnStyle = "bg-green-100 border-green-500 text-green-700 shadow-inner";
                          } else if (isSelected) {
                            btnStyle = "bg-red-100 border-red-500 text-red-700 shadow-inner";
                          } else {
                            btnStyle = "bg-navy/5 border-navy/5 opacity-55";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => handleQuizSelect(idx)}
                            className={`w-full py-2 px-3 rounded-lg border text-left text-xs font-semibold font-mono flex items-center justify-between transition-all duration-300 ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSelected !== null && isCorrect && <Check className="w-3.5 h-3.5 text-green-600" />}
                            {quizSelected !== null && isSelected && !isCorrect && <AlertCircle className="w-3.5 h-3.5 text-red-600" />}
                          </button>
                        );
                      })}
                      
                      {quizSelected !== null && (
                        <div className="text-[8px] text-gray/80 text-left font-light mt-2 border-t border-navy/5 pt-1.5 font-sans leading-relaxed">
                          {quizSelected === quizCorrectIndex ? (
                            <span className="text-green-600 font-semibold flex items-center">
                              <Award className="w-3 h-3 mr-1" /> ¡Correcto! El purgador óptico detecta calibres defectuosos.
                            </span>
                          ) : (
                            <span className="text-red-500 font-semibold">
                              Incorrecto. El purgador óptico es el sensor encargado.
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom bar stories */}
              <div className="flex justify-between items-center text-[7px] text-gray font-mono border-t border-sky/10 pt-2 z-10">
                <span>ENVIAR MENSAJE...</span>
                <span>ALPACLADD LAB</span>
              </div>
            </div>
            <span className="text-[10px] text-gray uppercase tracking-widest font-mono mt-3">
              Fig. 21.1: Simulador móvil de stickers interactivos
            </span>
          </div>
        </div>

        <div className="border-t border-sky/10 pt-4 flex justify-between items-center text-[10px] text-gray font-mono">
          <span>SOCIAL MEDIA ESTRATEGIA</span>
          <span>HISTORIAS INTERACTIVAS</span>
        </div>
      </div>
    </SlideShell>
  );
};
