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
  Camera,
  X,
  Smile,
} from "lucide-react";

export const Reels: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    { user: "tejedurias_cordoba", text: "Qué regularidad de mecha! Nunca tenemos roturas en telar circular.", time: "2 d", avatarBg: "bg-indigo-600" },
    { user: "ingenieria_textil_ar", text: "Excelente velocidad de husos y purgado óptico 👏", time: "1 d", avatarBg: "bg-emerald-600" },
    { user: "confecciones_norte", text: "Un orgullo la calidad industrial nacional.", time: "18 h", avatarBg: "bg-pink-600" },
  ]);
  const [floatingHeart, setFloatingHeart] = useState<{ id: number; x: number } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 3D Smartphone Tilt Physics
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const glareOpacity = useSpring(useTransform(mouseY, [-0.5, 0.5], [0.12, 0]), springConfig);

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

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleLikeToggle = () => {
    const nextState = !isLiked;
    setIsLiked(nextState);
    if (nextState) {
      setFloatingHeart({ id: Date.now(), x: 0 });
      setTimeout(() => setFloatingHeart(null), 900);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments((prev) => [
      ...prev,
      {
        user: "taller_textil_b2b",
        text: newComment.trim(),
        time: "Ahora",
        avatarBg: "bg-sky-600",
      },
    ]);
    setNewComment("");
  };

  return (
    <SlideShell id="reels" n={21} title="Estrategia: Video Reels" kind="social" bgType="navy">
      <div className="h-full flex flex-col justify-center items-center py-0 relative overflow-hidden select-none">
        
        {/* Main 3D Centered Smartphone Frame Container */}
        <div
          className="relative flex items-center justify-center"
          style={{ perspective: 1200 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={cardRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[270px] h-[555px] bg-[#000000] rounded-[44px] p-[8px] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(95,168,211,0.25)] border-[3px] border-[#2A3447] will-change-transform group select-none"
          >
            {/* Phone Hardware Side Buttons */}
            <div className="absolute -left-[5px] top-[95px] w-[3px] h-[24px] bg-[#1e2738] rounded-l-sm" />
            <div className="absolute -left-[5px] top-[128px] w-[3px] h-[40px] bg-[#1e2738] rounded-l-sm" />
            <div className="absolute -left-[5px] top-[176px] w-[3px] h-[40px] bg-[#1e2738] rounded-l-sm" />
            <div className="absolute -right-[5px] top-[120px] w-[3px] h-[55px] bg-[#1e2738] rounded-r-sm" />

            {/* Dynamic Glass Screen Glare Overlay */}
            <motion.div
              style={{ opacity: glareOpacity }}
              className="absolute inset-[8px] rounded-[36px] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-30"
            />

            {/* Inner Phone Screen Content */}
            <div className="w-full h-full bg-black rounded-[36px] overflow-hidden flex flex-col justify-between relative text-white font-sans">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-md border border-white/5 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky/40" />
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
              </div>

              {/* Top Navigation Bar */}
              <div className="absolute top-9 left-0 right-0 z-30 px-4 flex items-center justify-between pointer-events-auto">
                <span className="text-sm font-bold tracking-tight text-white drop-shadow-md">Reels</span>
                <button className="text-white hover:opacity-80 p-1 drop-shadow-md">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Main Full-Bleed Looping Reel Video */}
              <div
                onClick={handleVideoToggle}
                className="absolute inset-0 z-0 bg-slate-950 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <video
                  ref={videoRef}
                  src="/video_reel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Subtle Cinematic Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />

                {/* Play / Pause Indicator HUD on tap */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-2xl z-20 pointer-events-none"
                    >
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating Heart Animation on Like */}
                <AnimatePresence>
                  {floatingHeart && (
                    <motion.div
                      key={floatingHeart.id}
                      initial={{ scale: 0, opacity: 0.9, y: 0 }}
                      animate={{ scale: 1.6, opacity: 0, y: -80 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.75, ease: "easeOut" }}
                      className="absolute z-30 text-rose-500 pointer-events-none drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]"
                    >
                      <Heart className="w-16 h-16 fill-rose-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side Social Actions Column */}
              <div className="absolute right-2.5 bottom-16 z-20 flex flex-col items-center space-y-4 pointer-events-auto">
                
                {/* Like Button */}
                <div className="flex flex-col items-center space-y-0.5">
                  <button
                    onClick={handleLikeToggle}
                    className="p-1 hover:scale-110 active:scale-125 transition-transform drop-shadow-md"
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        isLiked ? "fill-rose-500 text-rose-500" : "text-white"
                      }`}
                    />
                  </button>
                  <span className="text-[10px] font-bold text-white font-sans drop-shadow-md">
                    {(3840 + (isLiked ? 1 : 0)).toLocaleString()}
                  </span>
                </div>

                {/* Comments Button */}
                <div className="flex flex-col items-center space-y-0.5">
                  <button
                    onClick={() => setShowComments(true)}
                    className="p-1 hover:scale-110 active:scale-95 transition-transform drop-shadow-md"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </button>
                  <span className="text-[10px] font-bold text-white font-sans drop-shadow-md">
                    {comments.length}
                  </span>
                </div>

                {/* Share Button */}
                <div className="flex flex-col items-center space-y-0.5">
                  <button className="p-1 hover:scale-110 active:scale-95 transition-transform drop-shadow-md">
                    <Send className="w-5 h-5 text-white" />
                  </button>
                  <span className="text-[10px] font-bold text-white font-sans drop-shadow-md">1.2K</span>
                </div>

                {/* Bookmark Button */}
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="p-1 hover:scale-110 active:scale-95 transition-transform drop-shadow-md"
                >
                  <Bookmark
                    className={`w-5 h-5 transition-colors ${
                      isBookmarked ? "fill-white text-white" : "text-white"
                    }`}
                  />
                </button>

                {/* More Options Button */}
                <button className="p-1 hover:scale-110 drop-shadow-md">
                  <MoreVertical className="w-5 h-5 text-white" />
                </button>

                {/* Spinning Audio Vinyl Disc */}
                <div className="pt-1">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-sky-900 border-2 border-white/80 p-0.5 flex items-center justify-center animate-spin [animation-duration:4s] shadow-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-black border border-white/50" />
                  </div>
                </div>
              </div>

              {/* Bottom Author & Audio Info Bar */}
              <div className="absolute left-0 right-14 bottom-3 z-20 px-3.5 text-left space-y-1.5 pointer-events-auto">
                {/* Author Profile Row */}
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-white p-[1px] shadow-md shrink-0 overflow-hidden flex items-center justify-center">
                    <img src="/logotipo.png" alt="Avatar" className="w-full h-full object-contain p-0.5" />
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-xs text-white drop-shadow-md truncate">alpacladd</span>
                    <BadgeCheck className="w-3.5 h-3.5 text-sky fill-sky stroke-white shrink-0" />
                  </div>

                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`text-[10px] font-bold py-0.5 px-2 rounded-md border transition-all ${
                      isFollowing
                        ? "bg-white/20 border-white/30 text-white"
                        : "bg-sky border-sky text-navy hover:bg-white"
                    }`}
                  >
                    {isFollowing ? "Siguiendo" : "Seguir"}
                  </button>
                </div>

                {/* Reel Caption */}
                <p className="text-[10.5px] text-white/95 leading-snug drop-shadow line-clamp-2">
                  De la paca de algodón crudo al filamento peinado de máxima tenacidad. Recorrido por nuestras continuas de hilar automatizadas en La Rioja. 🧶🏭
                </p>

                {/* Audio Track Marquee */}
                <div className="flex items-center space-x-1.5 text-[9.5px] text-white/80 drop-shadow">
                  <Music2 className="w-3 h-3 text-sky shrink-0 animate-bounce" />
                  <span className="truncate max-w-[160px]">Alpacladd • Sonido Original - Hilatura</span>
                </div>
              </div>

              {/* Bottom Sliding Comments Drawer */}
              <AnimatePresence>
                {showComments && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className="absolute inset-0 bg-navy/95 backdrop-blur-xl z-50 flex flex-col justify-between text-left p-3.5 font-sans"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-2">
                      <span className="font-bold text-xs text-white">Comentarios ({comments.length})</span>
                      <button
                        onClick={() => setShowComments(false)}
                        className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Comments List */}
                    <div className="flex-grow overflow-y-auto py-2 space-y-2.5 no-scrollbar text-xs">
                      {comments.map((cm, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-slate-200">
                          <div className={`w-5 h-5 rounded-full ${cm.avatarBg} text-white font-bold text-[9px] flex items-center justify-center shrink-0`}>
                            {cm.user.charAt(0).toUpperCase()}
                          </div>
                          <div className="space-y-0.5 flex-grow">
                            <div className="flex items-center space-x-1.5">
                              <span className="font-bold text-[10.5px] text-white">@{cm.user}</span>
                              <span className="text-[9px] text-slate-400">{cm.time}</span>
                            </div>
                            <p className="text-[10px] text-slate-300 leading-snug">{cm.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input Field */}
                    <form onSubmit={handleAddComment} className="pt-2 border-t border-white/15 flex items-center space-x-1.5">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Añade un comentario..."
                        className="flex-grow bg-black/60 border border-white/20 rounded-full px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky"
                      />
                      <button
                        type="submit"
                        disabled={!newComment.trim()}
                        className="p-1.5 rounded-full bg-sky text-navy disabled:opacity-40 hover:bg-white transition-colors"
                      >
                        <Smile className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full pointer-events-none z-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
};
