import React, { useState, useRef } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Heart,
  Send,
  MoreHorizontal,
  X,
  Check,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BarChart2,
  Smile,
  BadgeCheck,
} from "lucide-react";

interface QuizOption {
  letter: string;
  text: string;
  percent: number;
}

export const Stories: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Story 1: Quiz State (4 options)
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const quizCorrectIndex = 1; // "Purgado óptico digital"
  const quizOptions: QuizOption[] = [
    { letter: "A", text: "Cardado convencional", percent: 8 },
    { letter: "B", text: "Purgado óptico digital", percent: 82 },
    { letter: "C", text: "Devanado manual", percent: 4 },
    { letter: "D", text: "Torsión libre de huso", percent: 6 },
  ];

  // Story 2: Poll State (2 options)
  const [pollVoted, setPollVoted] = useState<"a" | "b" | null>(null);
  const [pollVotes, setPollVotes] = useState({ a: 64, b: 36 });

  // Story 3: Emoji Slider State
  const [sliderValue, setSliderValue] = useState(85);
  const [sliderMoved, setSliderMoved] = useState(false);

  // Story Interaction State
  const [isLiked, setIsLiked] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  // 3D Smartphone Tilt Physics
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const glareOpacity = useSpring(useTransform(mouseY, [-0.5, 0.5], [0.15, 0]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const storiesData = [
    {
      id: 0,
      title: "Quiz Técnico B2B",
      bgImg: "/instagram/post_5.jpg",
      tag: "TRIVIA TEXTIL",
    },
    {
      id: 1,
      title: "Encuesta de Calidad",
      bgImg: "/instagram/post_1.jpg",
      tag: "VOTACIÓN EN VIVO",
    },
    {
      id: 2,
      title: "Reacción y Feedback",
      bgImg: "/instagram/post_7.jpg",
      tag: "EMOJI SLIDER",
    },
  ];

  const handleNextStory = () => {
    setCurrentStoryIndex((prev) => (prev < storiesData.length - 1 ? prev + 1 : 0));
  };

  const handlePrevStory = () => {
    setCurrentStoryIndex((prev) => (prev > 0 ? prev - 1 : storiesData.length - 1));
  };

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
    const newHeart = { id: Date.now(), x: Math.random() * 40 - 20 };
    setFloatingHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  const handlePollVote = (opt: "a" | "b") => {
    if (pollVoted) return;
    setPollVoted(opt);
    setPollVotes((prev) => ({
      ...prev,
      [opt]: prev[opt] + 1,
    }));
  };

  const totalPoll = pollVotes.a + pollVotes.b;
  const percentA = Math.round((pollVotes.a / totalPoll) * 100);
  const percentB = 100 - percentA;

  return (
    <SlideShell id="stories" n={20} title="Estrategia: Stories Interactivas" kind="social" bgType="navy">
      <div className="h-full flex flex-col justify-center items-center py-0 relative">
        
        {/* Story Selector Pills */}
        <div className="flex items-center space-x-2 mb-2 z-20">
          {storiesData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentStoryIndex(idx)}
              className={`px-3 py-1 rounded-full text-[11px] font-sans font-semibold transition-all duration-200 flex items-center space-x-1.5 ${
                currentStoryIndex === idx
                  ? "bg-sky text-navy font-bold shadow-md shadow-sky/20 scale-105"
                  : "bg-navy/80 text-slate-300 border border-sky/20 hover:border-sky/50 hover:text-white"
              }`}
            >
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* 3D Smartphone Mockup (9:19.5 iPhone Pro Aspect Ratio) */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center items-center my-auto relative"
          style={{ perspective: 1200 }}
        >
          {/* Slide Navigation Left/Right Arrows */}
          <button
            onClick={handlePrevStory}
            className="absolute -left-12 p-2 rounded-full bg-navy/80 hover:bg-sky/20 border border-sky/30 text-white transition-all hover:scale-110 z-30"
            title="Story anterior"
          >
            <ChevronLeft className="w-5 h-5 text-sky" />
          </button>

          <button
            onClick={handleNextStory}
            className="absolute -right-12 p-2 rounded-full bg-navy/80 hover:bg-sky/20 border border-sky/30 text-white transition-all hover:scale-110 z-30"
            title="Siguiente story"
          >
            <ChevronRight className="w-5 h-5 text-sky" />
          </button>

          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[255px] sm:w-[270px] md:w-[280px] h-[525px] sm:h-[555px] md:h-[575px] bg-[#0c121e] rounded-[48px] sm:rounded-[52px] p-[8px] sm:p-[9px] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_35px_rgba(95,168,211,0.25)] border-[3.5px] border-[#253754] select-none"
          >
            {/* Outer Hardware Buttons */}
            <div className="absolute -left-[6px] top-24 w-[3px] h-7 bg-slate-600 rounded-l-sm" />
            <div className="absolute -left-[6px] top-34 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
            <div className="absolute -left-[6px] top-48 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
            <div className="absolute -right-[6px] top-30 w-[3px] h-14 bg-slate-600 rounded-r-sm" />

            {/* Glass Specular Glare */}
            <motion.div
              style={{ opacity: glareOpacity }}
              className="absolute inset-0 rounded-[44px] sm:rounded-[48px] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-40"
            />

            {/* Inner Smartphone Screen */}
            <div className="w-full h-full rounded-[40px] sm:rounded-[44px] overflow-hidden flex flex-col relative shadow-inner bg-black text-white">
              
              {/* Full-bleed Story Background Media */}
              <div className="absolute inset-0 z-0">
                <img
                  src={storiesData[currentStoryIndex]?.bgImg}
                  alt="Story Background"
                  className="w-full h-full object-cover select-none scale-105 filter brightness-75"
                />
                {/* Subtle Contrast Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />
              </div>

              {/* Tap navigation zones (Left 30% prev, Right 30% next) */}
              <div
                onClick={handlePrevStory}
                className="absolute left-0 top-16 bottom-16 w-[30%] z-20 cursor-pointer"
              />
              <div
                onClick={handleNextStory}
                className="absolute right-0 top-16 bottom-16 w-[30%] z-20 cursor-pointer"
              />

              {/* 1. Top Story Progress Bars (Segments) */}
              <div className="relative z-30 px-3 pt-2.5 flex items-center space-x-1">
                {storiesData.map((_, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-[2px] bg-white/30 rounded-full overflow-hidden"
                  >
                    <div
                      className={`h-full transition-all duration-300 ${
                        idx < currentStoryIndex
                          ? "w-full bg-white"
                          : idx === currentStoryIndex
                          ? "w-full bg-white shadow-[0_0_6px_#fff]"
                          : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* 2. Story Header (Avatar, Username, Time, Actions) */}
              <div className="relative z-30 px-3 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {/* Story Avatar with Gradient Ring */}
                  <div className="w-7 h-7 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600">
                    <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden flex items-center justify-center">
                      <img src="/logotipo.png" alt="Avatar" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="text-[11px] font-bold font-sans tracking-tight text-white drop-shadow">
                        alpacladd
                      </span>
                      <BadgeCheck className="w-3.5 h-3.5 text-sky fill-sky stroke-white" />
                      <span className="text-[10px] text-white/70 font-sans">2 h</span>
                    </div>
                    <span className="text-[8.5px] text-white/80 font-sans block leading-none">
                      📍 Planta Industrial • La Rioja
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-white/90">
                  <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-white" />
                  <X className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>

              {/* 3. Interactive Story Content Area */}
              <div className="relative z-30 flex-grow flex flex-col justify-center items-center px-3.5 py-2 text-center pointer-events-auto">
                <AnimatePresence mode="wait">
                  
                  {/* STORY 1: AUTHENTIC INSTAGRAM QUIZ STICKER */}
                  {currentStoryIndex === 0 && (
                    <motion.div
                      key="quiz-story"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full space-y-2.5"
                    >
                      {/* Floating Prompt Pill */}
                      <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                        <span>TRIVIA INDUSTRIAL B2B</span>
                      </div>

                      {/* Instagram Native Quiz Sticker Card */}
                      <div className="w-full bg-white text-slate-900 rounded-[22px] p-3.5 shadow-2xl border border-white/40 space-y-2.5 text-left">
                        {/* Sticker Header */}
                        <div className="bg-gradient-to-r from-sky via-blue to-indigo-600 -mx-3.5 -mt-3.5 p-3 rounded-t-[21px] text-white text-center shadow-sm">
                          <div className="flex justify-center mb-1">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                              <HelpCircle className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <h4 className="text-[11.5px] font-extrabold font-sans leading-tight tracking-tight px-1">
                            ¿Qué proceso garantiza la eliminación total de imperfecciones y nudos en el hilado?
                          </h4>
                        </div>

                        {/* Quiz Options A, B, C, D */}
                        <div className="space-y-1.5 pt-0.5 font-sans">
                          {quizOptions.map((opt, idx) => {
                            const isSelected = quizSelected === idx;
                            const isCorrect = idx === quizCorrectIndex;
                            const hasAnswered = quizSelected !== null;

                            let bgStyle = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100";
                            let letterBg = "bg-slate-200 text-slate-700";

                            if (hasAnswered) {
                              if (isCorrect) {
                                bgStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-sm";
                                letterBg = "bg-emerald-500 text-white";
                              } else if (isSelected && !isCorrect) {
                                bgStyle = "bg-rose-50 border-rose-500 text-rose-900 font-bold shadow-sm";
                                letterBg = "bg-rose-500 text-white";
                              } else {
                                bgStyle = "bg-slate-50/70 border-slate-100 text-slate-400 opacity-60";
                                letterBg = "bg-slate-100 text-slate-400";
                              }
                            }

                            return (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (quizSelected === null) setQuizSelected(idx);
                                }}
                                className={`w-full py-1.5 px-2 rounded-xl border text-[10px] font-medium flex items-center justify-between relative overflow-hidden transition-all duration-200 ${bgStyle}`}
                              >
                                {/* Option Progress Percentage Bar */}
                                {hasAnswered && (
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${opt.percent}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className={`absolute left-0 top-0 bottom-0 ${
                                      isCorrect ? "bg-emerald-200/50" : "bg-slate-200/40"
                                    } z-0`}
                                  />
                                )}

                                <div className="flex items-center space-x-2 z-10 relative">
                                  <span
                                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${letterBg}`}
                                  >
                                    {opt.letter}
                                  </span>
                                  <span className="leading-tight text-left">{opt.text}</span>
                                </div>

                                {hasAnswered && (
                                  <div className="z-10 relative flex items-center space-x-1 pl-1">
                                    <span className="font-bold text-[9.5px]">
                                      {opt.percent}%
                                    </span>
                                    {isCorrect && (
                                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                                    )}
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Educational Feedback Message */}
                        {quizSelected !== null && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="pt-1 border-t border-slate-100 text-[9.5px] font-sans leading-tight text-slate-600"
                          >
                            {quizSelected === quizCorrectIndex ? (
                              <span className="text-emerald-700 font-bold flex items-center">
                                🎉 ¡Correcto! El purgado óptico sensoriza y descarta fallas micrométricas.
                              </span>
                            ) : (
                              <span className="text-rose-600 font-medium">
                                💡 El <strong>purgado óptico digital</strong> es el sensor de precisión en hilatura.
                              </span>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* STORY 2: AUTHENTIC INSTAGRAM POLL STICKER */}
                  {currentStoryIndex === 1 && (
                    <motion.div
                      key="poll-story"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full space-y-3"
                    >
                      <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
                        <BarChart2 className="w-3 h-3 text-sky" />
                        <span>CONSULTA DE MERCADO</span>
                      </div>

                      {/* Instagram Native Poll Sticker */}
                      <div className="w-full bg-white text-slate-900 rounded-[24px] p-4 shadow-2xl border border-white/40 space-y-3 text-center">
                        <p className="text-[12px] font-extrabold font-sans leading-snug text-slate-900 px-1">
                          ¿Qué parámetro priorizás más en tu tejeduría para la nueva temporada?
                        </p>

                        {/* Two Big Split Buttons with Live Percentage Fill */}
                        <div className="grid grid-cols-2 gap-2 font-sans pt-1">
                          {/* Option A */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePollVote("a");
                            }}
                            className={`py-3 px-2 rounded-2xl border text-center relative overflow-hidden transition-all duration-200 ${
                              pollVoted
                                ? "border-sky-500 bg-sky-50"
                                : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                            }`}
                          >
                            {pollVoted && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${percentA}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute bottom-0 left-0 right-0 bg-sky/20 z-0"
                              />
                            )}
                            <div className="relative z-10 flex flex-col items-center justify-center space-y-0.5">
                              <span className="text-[10.5px] font-bold text-slate-900 leading-tight">
                                🧵 Cero Roturas
                              </span>
                              <span className="text-[8px] text-slate-500">Alta Tenacidad</span>
                              {pollVoted && (
                                <motion.strong
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="text-sm font-black text-sky-700 block pt-1"
                                >
                                  {percentA}%
                                </motion.strong>
                              )}
                            </div>
                          </button>

                          {/* Option B */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePollVote("b");
                            }}
                            className={`py-3 px-2 rounded-2xl border text-center relative overflow-hidden transition-all duration-200 ${
                              pollVoted
                                ? "border-sky-500 bg-sky-50"
                                : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                            }`}
                          >
                            {pollVoted && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${percentB}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute bottom-0 left-0 right-0 bg-sky/20 z-0"
                              />
                            )}
                            <div className="relative z-10 flex flex-col items-center justify-center space-y-0.5">
                              <span className="text-[10.5px] font-bold text-slate-900 leading-tight">
                                ✨ Cero Pilling
                              </span>
                              <span className="text-[8px] text-slate-500">Peinado Soft</span>
                              {pollVoted && (
                                <motion.strong
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="text-sm font-black text-sky-700 block pt-1"
                                >
                                  {percentB}%
                                </motion.strong>
                              )}
                            </div>
                          </button>
                        </div>

                        {pollVoted && (
                          <p className="text-[9px] text-slate-500 font-sans font-medium pt-0.5">
                            ✅ ¡Voto registrado! Participaron 1.480 profesionales.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* STORY 3: EMOJI SLIDER STICKER */}
                  {currentStoryIndex === 2 && (
                    <motion.div
                      key="slider-story"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full space-y-3"
                    >
                      <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
                        <Smile className="w-3 h-3 text-rose-300" />
                        <span>REACCIÓN DE AUDIENCIA</span>
                      </div>

                      {/* Emoji Slider Card */}
                      <div className="w-full bg-white text-slate-900 rounded-[24px] p-4 shadow-2xl border border-white/40 space-y-3 text-center">
                        <p className="text-[12px] font-extrabold font-sans leading-snug text-slate-900">
                          ¿Qué te parece la suavidad y brillo de nuestro nuevo hilado peinado?
                        </p>

                        {/* Interactive Range Slider with Big Floating Emoji */}
                        <div
                          className="pt-2 pb-1 px-2 relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="relative flex items-center">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={sliderValue}
                              onChange={(e) => {
                                setSliderValue(Number(e.target.value));
                                setSliderMoved(true);
                              }}
                              className="w-full h-3 bg-gradient-to-r from-yellow-300 via-rose-400 to-red-500 rounded-full appearance-none cursor-pointer accent-white"
                            />
                            {/* Animated Floating Fire/Heart Emoji */}
                            <motion.div
                              style={{ left: `calc(${sliderValue}% - 14px)` }}
                              animate={{ scale: [1, 1.25, 1] }}
                              transition={{ repeat: Infinity, duration: 1 }}
                              className="absolute -top-6 text-2xl pointer-events-none drop-shadow"
                            >
                              🔥
                            </motion.div>
                          </div>

                          <div className="flex justify-between items-center text-[9px] font-bold font-sans text-slate-400 pt-2">
                            <span>0%</span>
                            <span className="text-rose-600 font-extrabold text-[11px]">
                              {sliderValue}% FIRE
                            </span>
                            <span>100%</span>
                          </div>
                        </div>

                        {sliderMoved && (
                          <p className="text-[9px] text-slate-500 font-sans font-medium">
                            ❤️ Calificación promedio: <strong>94% de satisfacción</strong>
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Story Bottom Bar (Send Message, Heart, Share) */}
              <div className="relative z-30 px-3.5 py-2.5 flex items-center space-x-2 bg-gradient-to-t from-black/80 to-transparent">
                {/* Input placeholder */}
                <div className="flex-1 py-1.5 px-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-between text-white/70 text-[10px] font-sans">
                  <span>Enviar mensaje...</span>
                </div>

                {/* Heart Button with Floating Reaction */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHeartClick();
                    }}
                    className="p-1.5 text-white hover:scale-125 transition-transform active:scale-90"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        isLiked ? "fill-red-500 text-red-500" : "text-white"
                      }`}
                    />
                  </button>

                  {/* Floating hearts */}
                  {floatingHearts.map((h) => (
                    <motion.div
                      key={h.id}
                      initial={{ opacity: 1, y: 0, scale: 0.8, x: h.x }}
                      animate={{ opacity: 0, y: -70, scale: 1.4 }}
                      transition={{ duration: 1 }}
                      className="absolute bottom-6 left-1 text-red-500 text-base pointer-events-none"
                    >
                      ❤️
                    </motion.div>
                  ))}
                </div>

                {/* Share Button */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 text-white hover:scale-125 transition-transform"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* 5. iOS Home Bar */}
              <div className="relative z-30 pb-1.5 flex justify-center bg-black">
                <div className="w-20 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
};
