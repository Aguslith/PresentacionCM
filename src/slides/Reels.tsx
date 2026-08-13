import React, { useState, useRef } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreVertical,
  Play,
  Music2,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Camera,
  Volume2,
  VolumeX,
  X,
  Smile,
} from "lucide-react";

interface ReelItem {
  id: number;
  title: string;
  shortTitle: string;
  bgImg: string;
  views: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: string;
  caption: string;
  audioName: string;
  comments: { user: string; text: string; time: string; avatarBg: string }[];
}

export const Reels: React.FC = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState<Record<number, boolean>>({});
  const [isBookmarked, setIsBookmarked] = useState<Record<number, boolean>>({});
  const [isFollowing, setIsFollowing] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [reelComments, setReelComments] = useState<Record<number, { user: string; text: string; time: string; avatarBg: string }[]>>({});
  const [floatingHeart, setFloatingHeart] = useState<{ id: number; x: number } | null>(null);

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

  const reelsData: ReelItem[] = [
    {
      id: 1,
      title: "De Algodón a Hilado 30/1: El Proceso",
      shortTitle: "Proceso Continuas",
      bgImg: "/instagram/post_5.jpg",
      views: "54.8K",
      likesCount: 3840,
      commentsCount: 142,
      sharesCount: "1.2K",
      caption: "De la paca de algodón crudo al filamento peinado de máxima tenacidad. Recorrido por nuestras continuas de hilar automatizadas en La Rioja. 🧶🏭 #IndustriaTextil #Hilanderia #Alpacladd #CalidadB2B",
      audioName: "Alpacladd • Sonido Original - Sala de Hilatura",
      comments: [
        { user: "textil_san_juan", text: "Qué regularidad de mecha! Usan bobinado automático?", time: "2 d", avatarBg: "bg-blue-600" },
        { user: "ingenieria_textil_ar", text: "Impresionante velocidad de huso por minuto 👏", time: "1 d", avatarBg: "bg-emerald-600" },
      ],
    },
    {
      id: 2,
      title: "Purgador Óptico Digital: Cero Fallas",
      shortTitle: "Purgador Óptico",
      bgImg: "/instagram/post_16.jpg",
      views: "72.3K",
      likesCount: 5210,
      commentsCount: 215,
      sharesCount: "2.4K",
      caption: "Así detecta y elimina el sensor óptico Uster cualquier nudo o impureza en milisegundos. Calidad certificada cono a cono. ⚡🧵 #Savio #ControlOptico #InnovacionTextil",
      audioName: "Alpacladd • Sonido Original - Coneras Savio",
      comments: [
        { user: "tejedurias_cordoba", text: "Por eso nunca tenemos roturas en telar circular! Impecable.", time: "3 d", avatarBg: "bg-indigo-600" },
        { user: "confecciones_norte", text: "Excelente tecnología aplicada al producto nacional.", time: "2 d", avatarBg: "bg-pink-600" },
      ],
    },
    {
      id: 3,
      title: "Laboratorio de Torsión y Tracción",
      shortTitle: "Laboratorio Calidad",
      bgImg: "/instagram/post_13.jpg",
      views: "39.1K",
      likesCount: 2690,
      commentsCount: 98,
      sharesCount: "860",
      caption: "Cargas de tracción dinámica y torsión milimétrica en laboratorio. Simulamos las condiciones más exigentes del telar industrial. 🔬📊 #LaboratorioTextil #Traccion #NormasISO",
      audioName: "Alpacladd • Sonido Original - Lab Ensayos",
      comments: [
        { user: "laboratorio_inti", text: "Gran estándar de control de dinamometría!", time: "4 d", avatarBg: "bg-purple-600" },
      ],
    },
  ];

  const currentReel = reelsData[currentReelIndex];

  const handleNextReel = () => {
    setCurrentReelIndex((prev) => (prev < reelsData.length - 1 ? prev + 1 : 0));
    setShowComments(false);
  };

  const handlePrevReel = () => {
    setCurrentReelIndex((prev) => (prev > 0 ? prev - 1 : reelsData.length - 1));
    setShowComments(false);
  };

  const handleLikeToggle = (id: number) => {
    const wasLiked = isLiked[id];
    setIsLiked((prev) => ({ ...prev, [id]: !wasLiked }));
    if (!wasLiked) {
      setFloatingHeart({ id: Date.now(), x: 0 });
      setTimeout(() => setFloatingHeart(null), 1000);
    }
  };

  const handleBookmarkToggle = (id: number) => {
    setIsBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddComment = (e: React.FormEvent, reelId: number) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newEntry = {
      user: "invitado",
      text: newComment.trim(),
      time: "Ahora",
      avatarBg: "bg-sky-600",
    };

    setReelComments((prev) => ({
      ...prev,
      [reelId]: [...(prev[reelId] || []), newEntry],
    }));

    setNewComment("");
  };

  return (
    <SlideShell id="reels" n={21} title="Estrategia: Video Reels" kind="social" bgType="navy">
      <div className="h-full flex flex-col justify-center items-center py-0 relative">
        
        {/* Reel Selector Pills */}
        <div className="flex items-center space-x-2 mb-2 z-20">
          {reelsData.map((r, idx) => (
            <button
              key={r.id}
              onClick={() => {
                setCurrentReelIndex(idx);
                setShowComments(false);
              }}
              className={`px-3 py-1 rounded-full text-[11px] font-sans font-semibold transition-all duration-200 flex items-center space-x-1.5 ${
                currentReelIndex === idx
                  ? "bg-sky text-navy font-bold shadow-md shadow-sky/20 scale-105"
                  : "bg-navy/80 text-slate-300 border border-sky/20 hover:border-sky/50 hover:text-white"
              }`}
            >
              <span>{r.shortTitle}</span>
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
          {/* Navigation Left/Right Arrows */}
          <button
            onClick={handlePrevReel}
            className="absolute -left-12 p-2 rounded-full bg-navy/80 hover:bg-sky/20 border border-sky/30 text-white transition-all hover:scale-110 z-30"
            title="Reel anterior"
          >
            <ChevronLeft className="w-5 h-5 text-sky" />
          </button>

          <button
            onClick={handleNextReel}
            className="absolute -right-12 p-2 rounded-full bg-navy/80 hover:bg-sky/20 border border-sky/30 text-white transition-all hover:scale-110 z-30"
            title="Siguiente Reel"
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
            {/* Hardware Buttons */}
            <div className="absolute -left-[6px] top-24 w-[3px] h-7 bg-slate-600 rounded-l-sm" />
            <div className="absolute -left-[6px] top-34 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
            <div className="absolute -left-[6px] top-48 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
            <div className="absolute -right-[6px] top-30 w-[3px] h-14 bg-slate-600 rounded-r-sm" />

            {/* Specular Glare Reflection */}
            <motion.div
              style={{ opacity: glareOpacity }}
              className="absolute inset-0 rounded-[44px] sm:rounded-[48px] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-40"
            />

            {/* Inner Smartphone Screen */}
            <div className="w-full h-full rounded-[40px] sm:rounded-[44px] overflow-hidden flex flex-col relative shadow-inner bg-black text-white">
              
              {/* 1. Full-bleed Video Background Media with Animated Zoom */}
              <div
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 z-0 cursor-pointer overflow-hidden"
              >
                <motion.img
                  key={currentReel.id}
                  src={currentReel.bgImg}
                  alt={currentReel.title}
                  initial={{ scale: 1 }}
                  animate={isPlaying ? { scale: 1.08 } : { scale: 1 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-full h-full object-cover select-none filter brightness-90"
                />

                {/* Video Darkness Gradients for UI readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />

                {/* Animated Play/Pause Center Indicator */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    >
                      <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Top Reels Header (Camera, Title, Audio Mute) */}
              <div className="relative z-20 px-4 pt-3 pb-1 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-extrabold font-sans text-white tracking-tight drop-shadow">
                    Reels
                  </h3>
                </div>

                <div className="flex items-center space-x-3 text-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="p-1 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <Camera className="w-4 h-4 cursor-pointer hover:opacity-80" />
                </div>
              </div>

              {/* 3. Floating Right-Side Action Sidebar */}
              <div className="absolute right-2.5 bottom-12 z-20 flex flex-col items-center space-y-3.5 text-white">
                
                {/* Like Button */}
                <div className="flex flex-col items-center space-y-0.5 relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeToggle(currentReel.id);
                    }}
                    className="p-1 hover:scale-125 transition-transform active:scale-90"
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors drop-shadow ${
                        isLiked[currentReel.id] ? "fill-red-500 text-red-500" : "text-white fill-white/20"
                      }`}
                    />
                  </button>
                  <span className="text-[9.5px] font-sans font-bold drop-shadow">
                    {(
                      currentReel.likesCount + (isLiked[currentReel.id] ? 1 : 0)
                    ).toLocaleString()}
                  </span>

                  {/* Floating Heart Animation */}
                  {floatingHeart && (
                    <motion.div
                      initial={{ opacity: 1, y: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -50, scale: 1.4 }}
                      transition={{ duration: 0.8 }}
                      className="absolute -top-4 text-red-500 text-lg pointer-events-none"
                    >
                      ❤️
                    </motion.div>
                  )}
                </div>

                {/* Comments Button */}
                <div className="flex flex-col items-center space-y-0.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowComments(!showComments);
                    }}
                    className="p-1 hover:scale-125 transition-transform active:scale-90"
                  >
                    <MessageCircle className="w-6 h-6 text-white fill-white/20 drop-shadow" />
                  </button>
                  <span className="text-[9.5px] font-sans font-bold drop-shadow">
                    {currentReel.commentsCount + ((reelComments[currentReel.id] || []).length)}
                  </span>
                </div>

                {/* Share Button */}
                <div className="flex flex-col items-center space-y-0.5">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 hover:scale-125 transition-transform active:scale-90"
                  >
                    <Send className="w-5 h-5 text-white drop-shadow" />
                  </button>
                  <span className="text-[9.5px] font-sans font-bold drop-shadow">
                    {currentReel.sharesCount}
                  </span>
                </div>

                {/* Bookmark Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmarkToggle(currentReel.id);
                  }}
                  className="p-1 hover:scale-125 transition-transform active:scale-90"
                >
                  <Bookmark
                    className={`w-5 h-5 transition-colors drop-shadow ${
                      isBookmarked[currentReel.id] ? "fill-white text-white" : "text-white fill-white/20"
                    }`}
                  />
                </button>

                {/* More Options */}
                <button className="p-1 hover:scale-125 transition-transform text-white/80">
                  <MoreVertical className="w-4 h-4 drop-shadow" />
                </button>

                {/* Spinning Audio Vinyl Disc with Music Notes */}
                <div className="pt-1 relative">
                  <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-7 h-7 rounded-full bg-slate-900 border-2 border-slate-700 p-0.5 shadow-md flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src="/logotipo.png"
                      alt="Soundtrack"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </motion.div>

                  {/* Floating Musical Note */}
                  {isPlaying && (
                    <motion.span
                      animate={{
                        opacity: [0, 1, 0],
                        y: [-2, -18],
                        x: [-2, -12],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -left-2 text-[10px] text-white/80 pointer-events-none"
                    >
                      🎵
                    </motion.span>
                  )}
                </div>
              </div>

              {/* 4. Bottom Author Info, Caption & Audio Ticker */}
              <div className="relative z-20 mt-auto px-3.5 pb-2 text-left space-y-1.5 pr-14">
                
                {/* Author row */}
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full p-[1px] bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 shrink-0">
                    <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden flex items-center justify-center">
                      <img src="/logotipo.png" alt="Avatar" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold font-sans tracking-tight text-white drop-shadow">
                    alpacladd
                  </span>
                  <BadgeCheck className="w-3 h-3 text-sky fill-sky stroke-white" />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFollowing(!isFollowing);
                    }}
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-sans border transition-all ${
                      isFollowing
                        ? "bg-white/20 border-white/40 text-white"
                        : "bg-sky hover:bg-sky-400 border-transparent text-navy font-extrabold"
                    }`}
                  >
                    {isFollowing ? "Siguiendo" : "Seguir"}
                  </button>
                </div>

                {/* Caption with line clamp */}
                <p className="text-[10px] text-white font-sans leading-snug line-clamp-2 drop-shadow">
                  {currentReel.caption}
                </p>

                {/* Audio Ticker Row */}
                <div className="flex items-center space-x-1.5 text-white/80 text-[9px] font-sans pt-0.5">
                  <Music2 className="w-3 h-3 shrink-0" />
                  <span className="truncate max-w-[170px] drop-shadow">
                    {currentReel.audioName}
                  </span>
                </div>
              </div>

              {/* 5. Looping Video Progress Bar */}
              <div className="relative z-20 w-full h-[2px] bg-white/20 overflow-hidden">
                <motion.div
                  key={`progress-${currentReel.id}-${isPlaying}`}
                  initial={{ width: "0%" }}
                  animate={isPlaying ? { width: "100%" } : {}}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="h-full bg-white shadow-[0_0_4px_#fff]"
                />
              </div>

              {/* 6. iOS Home Bar */}
              <div className="relative z-20 pb-1.5 flex justify-center bg-black/90">
                <div className="w-20 h-1 bg-white/40 rounded-full" />
              </div>

              {/* 7. Interactive Slide-Up Comments Drawer */}
              <AnimatePresence>
                {showComments && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className="absolute inset-x-0 bottom-0 top-24 bg-white text-slate-900 rounded-t-[28px] z-50 flex flex-col justify-between shadow-2xl p-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Drawer Handle & Header */}
                    <div className="border-b border-slate-100 pb-2">
                      <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-2" />
                      <div className="flex items-center justify-between px-1">
                        <span className="text-xs font-bold font-sans">Comentarios</span>
                        <button
                          onClick={() => setShowComments(false)}
                          className="p-1 text-slate-500 hover:text-slate-900"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="overflow-y-auto space-y-3 py-2 flex-grow text-left font-sans text-[10px] no-scrollbar">
                      {currentReel.comments.map((c, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <div className={`w-6 h-6 rounded-full ${c.avatarBg} text-white flex items-center justify-center font-bold text-[9px] shrink-0`}>
                            {c.user.charAt(0).toUpperCase()}
                          </div>
                          <div className="space-y-0.5 flex-grow">
                            <p className="leading-tight">
                              <strong className="text-slate-900 mr-1">{c.user}</strong>
                              <span className="text-slate-700">{c.text}</span>
                            </p>
                            <span className="text-[8.5px] text-slate-400 font-mono">{c.time}</span>
                          </div>
                        </div>
                      ))}

                      {/* User Added Comments */}
                      {(reelComments[currentReel.id] || []).map((c, i) => (
                        <div key={`user-${i}`} className="flex items-start space-x-2">
                          <div className={`w-6 h-6 rounded-full ${c.avatarBg} text-white flex items-center justify-center font-bold text-[9px] shrink-0`}>
                            {c.user.charAt(0).toUpperCase()}
                          </div>
                          <div className="space-y-0.5 flex-grow">
                            <p className="leading-tight">
                              <strong className="text-slate-900 mr-1">{c.user}</strong>
                              <span className="text-slate-700">{c.text}</span>
                            </p>
                            <span className="text-[8.5px] text-slate-400 font-mono">{c.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Comment Input Form */}
                    <form
                      onSubmit={(e) => handleAddComment(e, currentReel.id)}
                      className="border-t border-slate-100 pt-2 flex items-center space-x-2 bg-white"
                    >
                      <Smile className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Añade un comentario..."
                        className="w-full text-[10px] font-sans bg-transparent focus:outline-none placeholder-slate-400 text-slate-900"
                      />
                      <button
                        type="submit"
                        disabled={!newComment.trim()}
                        className="text-[10px] font-bold font-sans text-sky-600 hover:text-sky-700 disabled:opacity-40"
                      >
                        Publicar
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
};
