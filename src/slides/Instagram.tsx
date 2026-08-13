import React, { useState, useRef } from "react";
import { SlideShell } from "../components/SlideShell";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Grid,
  Tv,
  Smile,
  BadgeCheck,
  Wifi,
  Battery,
  ChevronDown,
  Bell,
  Layers,
  Factory,
  Settings,
  BookOpen,
} from "lucide-react";

interface InstagramPost {
  id: number;
  img: string;
  likes: number;
  commentsCount: number;
  caption: string;
  timeAgo: string;
  location: string;
  comments: { user: string; text: string; time: string; avatarBg: string }[];
}

export const Instagram: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<number, boolean>>({});
  const [newComment, setNewComment] = useState("");
  const [postComments, setPostComments] = useState<Record<number, { user: string; text: string; time: string; avatarBg: string }[]>>({});

  // 3D Smartphone Mouse Tilt Physics
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

  const postsData: InstagramPost[] = [
    {
      id: 1,
      img: "/instagram/post_1.jpg",
      likes: 412,
      commentsCount: 28,
      location: "Fábrica ALPACLADD • La Rioja",
      timeAgo: "HACE 2 DÍAS",
      caption: "Hilos que tejen futuro. La precisión técnica y la calidad de nuestra materia prima definen cada metro de hilado que producimos. 🧶✨\n\n#Alpacladd #InnovacionTextil #Hilanderia #TextilArgentino",
      comments: [
        { user: "tejedurias_argentinas", text: "Excelente calidad de hilados, siempre rindiendo al 100%! 👏", time: "1 d", avatarBg: "bg-blue-600" },
        { user: "confecciones_norte", text: "El mejor título 30/1 del mercado. Saludos al equipo!", time: "18 h", avatarBg: "bg-indigo-600" },
      ],
    },
    {
      id: 2,
      img: "/instagram/post_2.jpg",
      likes: 589,
      commentsCount: 44,
      location: "Planta Industrial ALPACLADD",
      timeAgo: "HACE 3 DÍAS",
      caption: "Entrando a planta con la energía al 100%. Nuestro equipo comercial y técnico listo para una nueva jornada de producción y desarrollo continuo. 🏭🤝\n\n#SomosEquipo #FamiliaAlpacladd #IndustriaNacional #LaRioja",
      comments: [
        { user: "mariana_textil", text: "Qué lindo ver crecer la industria nacional! Abrazo grande 🙌", time: "2 d", avatarBg: "bg-pink-600" },
        { user: "martin_ing", text: "Orgulloso de ser parte de este equipo 💪", time: "1 d", avatarBg: "bg-emerald-600" },
      ],
    },
    {
      id: 3,
      img: "/instagram/post_3.jpg",
      likes: 367,
      commentsCount: 19,
      location: "La Rioja, Argentina",
      timeAgo: "HACE 4 DÍAS",
      caption: "Detalles que marcan la diferencia. El nuevo termo institucional ALPACLADD grabado en láser de fibra óptica. Fidelidad y calidad que acompañan en cada mate. 🧉💙\n\n#MerchandisingB2B #Alpacladd #TermoInox #Fidelizacion",
      comments: [
        { user: "hilanderia_cuyo", text: "Queremos uno para la oficina! Quedó tremendo 🧉🔥", time: "3 d", avatarBg: "bg-amber-600" },
      ],
    },
    {
      id: 4,
      img: "/instagram/post_4.jpg",
      likes: 521,
      commentsCount: 35,
      location: "Sede Central ALPACLADD",
      timeAgo: "HACE 5 DÍAS",
      caption: "SOMOS EQUIPO. SOMOS ALPACLADD. Cada proceso, cada bobina y cada entrega lleva el compromiso y la pasión de nuestra gente. 👥🇦🇷\n\n#CulturaCorporativa #OrgulloTextil #Alpacladd2026",
      comments: [
        { user: "lucas_tejidos", text: "Un placer trabajar juntos como proveedores estratégicos!", time: "4 d", avatarBg: "bg-sky-600" },
      ],
    },
    {
      id: 5,
      img: "/instagram/post_5.jpg",
      likes: 398,
      commentsCount: 22,
      location: "Sector Continuas de Hilar",
      timeAgo: "HACE 6 DÍAS",
      caption: "Supervisión milimétrica en nuestras continuas de hilar. Control de torsión, resistencia a la tracción y pureza en cada huso. 🧵⚡\n\n#ControlDeCalidad #HiladosPeinados #TextilLaRioja",
      comments: [
        { user: "laboratorio_textil", text: "Esa regularidad Uster es de nivel de exportación!", time: "5 d", avatarBg: "bg-purple-600" },
      ],
    },
    {
      id: 6,
      img: "/instagram/post_6.jpg",
      likes: 476,
      commentsCount: 31,
      location: "Confección e Imagen Institucional",
      timeAgo: "HACE 1 SEMANA",
      caption: "Bordado 3D de alta definición sobre nuestras chombas corporativas confeccionadas con hilado peinado 30/1 propio. Identidad que se viste con orgullo. 👔🧵\n\n#IndumentariaAlpacladd #BordadoTecnico #IdentidadVisual",
      comments: [
        { user: "diseno_textil_ar", text: "Impecable definición en la puntada del isotipo!", time: "6 d", avatarBg: "bg-rose-600" },
      ],
    },
    {
      id: 7,
      img: "/instagram/post_7.jpg",
      likes: 632,
      commentsCount: 56,
      location: "Planta Industrial ALPACLADD",
      timeAgo: "HACE 1 SEMANA",
      caption: "La fuerza de nuestra empresa está en las personas. Compartir, aprender y avanzar juntos hacia un estándar internacional. 💙🙌\n\n#EquipoAlpacladd #HilanderiaArgentina #CompromisoIndustrial",
      comments: [
        { user: "claudia_rrhh", text: "Gran equipo humano! Felicitaciones a todos 🎉", time: "6 d", avatarBg: "bg-teal-600" },
      ],
    },
    {
      id: 8,
      img: "/instagram/post_8.jpg",
      likes: 345,
      commentsCount: 14,
      location: "La Rioja, Argentina",
      timeAgo: "HACE 2 SEMANAS",
      caption: "Nuestros cuatro pilares: Calidad, Compromiso, Innovación y Sustentabilidad. La base sólida sobre la que construimos el futuro textil. 🎖️💡🍃\n\n#ValoresDeMarca #Alpacladd #PilaresEstrategicos",
      comments: [
        { user: "camara_textil", text: "Valores fundamentales para el desarrollo de la cadena de valor.", time: "1 sem", avatarBg: "bg-blue-800" },
      ],
    },
    {
      id: 9,
      img: "/instagram/post_9.jpg",
      likes: 489,
      commentsCount: 27,
      location: "Gestión Ambiental ALPACLADD",
      timeAgo: "HACE 2 SEMANAS",
      caption: "Cuidamos lo que nos conecta: nuestro planeta. Procesos energéticamente eficientes, reducción de huella hídrica y aprovechamiento integral de fibras naturales. 🌱🌎\n\n#SustentabilidadTextil #HiladosEco #CompromisoVerde",
      comments: [
        { user: "eco_textiles", text: "El camino hacia una hilandería sustentable. Gran iniciativa!", time: "1 sem", avatarBg: "bg-green-700" },
      ],
    },
    {
      id: 10,
      img: "/instagram/post_10.jpg",
      likes: 512,
      commentsCount: 33,
      location: "Depósito y Logística",
      timeAgo: "HACE 3 SEMANAS",
      caption: "Conos listos para despacho a tejedurías de todo el país. Hilados de algodón, mezclas y alpaca con regularidad garantizada bobina a bobina. 📦🚛\n\n#HiladosB2B #TejidosDePunto #LogisticaTextil",
      comments: [
        { user: "tejidos_cordoba", text: "Recibimos el lote hoy a la mañana, impecable embalaje!", time: "2 sem", avatarBg: "bg-orange-600" },
      ],
    },
    {
      id: 11,
      img: "/instagram/post_11.jpg",
      likes: 420,
      commentsCount: 25,
      location: "La Rioja, Argentina",
      timeAgo: "HACE 3 SEMANAS",
      caption: "Rumbo a la feria textil internacional con nuestra mochila técnica impermeable ALPACLADD. Diseñada para resistir y acompañar a nuestros ingenieros en cada viaje. 🎒🚶‍♂️\n\n#EquipamientoAlpacladd #InnovacionB2B #MochilaTecnica",
      comments: [
        { user: "eventos_textiles", text: "Nos vemos en el stand de La Rioja! Éxitos 🚀", time: "2 sem", avatarBg: "bg-violet-600" },
      ],
    },
    {
      id: 12,
      img: "/instagram/post_12.jpg",
      likes: 610,
      commentsCount: 49,
      location: "Planta Industrial ALPACLADD",
      timeAgo: "HACE 1 MES",
      caption: "Detrás de cada hilo hay historias, esfuerzo y pasión. Décadas tejiendo confianza en el mercado nacional e impulsando el desarrollo regional. 🧵💫\n\n#HistoriaTextil #PasiónPorElHilado #IndustriaArgentina",
      comments: [
        { user: "federacion_textil", text: "Un orgullo para la industria del norte argentino!", time: "3 sem", avatarBg: "bg-blue-700" },
      ],
    },
    {
      id: 13,
      img: "/instagram/post_13.jpg",
      likes: 543,
      commentsCount: 38,
      location: "Parque Industrial • La Rioja",
      timeAgo: "HACE 1 MES",
      caption: "Nuestra planta en La Rioja: tecnología automatizada y capacidad productiva en constante expansión para responder a la demanda de todo el cono sur. 🏭🇦🇷\n\n#PlantaIndustrial #LaRiojaProduce #Expansion2026",
      comments: [
        { user: "industrias_ar", text: "Excelente infraestructura!", time: "4 sem", avatarBg: "bg-slate-700" },
      ],
    },
    {
      id: 14,
      img: "/instagram/post_14.jpg",
      likes: 894,
      commentsCount: 72,
      location: "Planta Industrial ALPACLADD",
      timeAgo: "HACE 1 MES",
      caption: "La gran familia ALPACLADD reunida en planta. Gracias a cada colaborador por hacer posible este estándar de excelencia y liderazgo textil. 👥❤️\n\n#OrgulloNacional #EquipoUnido #GenteAlpacladd",
      comments: [
        { user: "valeria_soto", text: "Los mejores compañeros de trabajo! Hermosa foto ❤️", time: "4 sem", avatarBg: "bg-pink-700" },
      ],
    },
    {
      id: 15,
      img: "/instagram/post_15.jpg",
      likes: 467,
      commentsCount: 29,
      location: "La Rioja, Argentina",
      timeAgo: "HACE 1 MES",
      caption: "Gracias a cada tejeduría, marca de indumentaria y confeccionista que confía en nosotros día a día para materializar sus colecciones. 🤝💙\n\n#GraciasPorConfiar #ClientesB2B #AlpacladdHilados",
      comments: [
        { user: "marca_indumentaria", text: "Gracias a ustedes por la constante calidad y puntualidad!", time: "1 m", avatarBg: "bg-fuchsia-700" },
      ],
    },
    {
      id: 16,
      img: "/instagram/post_16.jpg",
      likes: 531,
      commentsCount: 36,
      location: "Sector Enconado y Tintorería",
      timeAgo: "HACE 1 MES",
      caption: "Perspectiva de devanado en conos teñidos en Deep Navy. Tintura con alta solidez a la luz y al lavado para las prendas más exigentes. 🧵🔷\n\n#HiladoTeñido #NavyAlpacladd #CalidadSuperior",
      comments: [
        { user: "diseno_indumentaria", text: "Ese color Navy es perfecto, uniforme y súper saturado.", time: "1 m", avatarBg: "bg-blue-900" },
      ],
    },
  ];

  const highlights = [
    { label: "Planta", icon: <Factory className="w-4 h-4 text-sky" /> },
    { label: "Productos", icon: <Layers className="w-4 h-4 text-sky" /> },
    { label: "Procesos", icon: <Settings className="w-4 h-4 text-sky" /> },
    { label: "Academia", icon: <BookOpen className="w-4 h-4 text-sky" /> },
  ];

  const handleLikeToggle = (id: number) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBookmarkToggle = (id: number) => {
    setBookmarkedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddComment = (e: React.FormEvent, postId: number) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newEntry = {
      user: "invitado",
      text: newComment.trim(),
      time: "Ahora",
      avatarBg: "bg-sky-600",
    };

    setPostComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newEntry],
    }));

    setNewComment("");
  };

  const navigatePost = (direction: "prev" | "next") => {
    if (!selectedPost) return;
    const currentIndex = postsData.findIndex((p) => p.id === selectedPost.id);
    if (direction === "prev" && currentIndex > 0) {
      setSelectedPost(postsData[currentIndex - 1] || null);
    } else if (direction === "next" && currentIndex < postsData.length - 1) {
      setSelectedPost(postsData[currentIndex + 1] || null);
    }
  };

  return (
    <SlideShell id="instagram" n={18} title="Perfil de Instagram" kind="social" bgType="navy">
      <div className="h-full flex flex-col justify-center items-center py-0">
        {/* Centered 3D Smartphone Mockup (Exact 9:19.5 iPhone Pro Aspect Ratio) */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center items-center my-auto py-1"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[255px] sm:w-[270px] md:w-[280px] h-[525px] sm:h-[555px] md:h-[575px] bg-[#0c121e] rounded-[48px] sm:rounded-[52px] p-[8px] sm:p-[9px] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_35px_rgba(95,168,211,0.25)] border-[3.5px] border-[#253754] select-none"
          >
            {/* Outer Metallic Hardware Buttons */}
            <div className="absolute -left-[6px] top-24 w-[3px] h-7 bg-slate-600 rounded-l-sm" />
            <div className="absolute -left-[6px] top-34 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
            <div className="absolute -left-[6px] top-48 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
            <div className="absolute -right-[6px] top-30 w-[3px] h-14 bg-slate-600 rounded-r-sm" />

            {/* Glass Specular Glare Reflection */}
            <motion.div
              style={{ opacity: glareOpacity }}
              className="absolute inset-0 rounded-[44px] sm:rounded-[48px] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-30"
            />

            {/* Inner Smartphone OLED Screen */}
            <div className="w-full h-full bg-white text-slate-900 rounded-[40px] sm:rounded-[44px] overflow-hidden flex flex-col relative shadow-inner">
              
              {/* 1. iOS Top Bar & Dynamic Island */}
              <div className="bg-white px-5 pt-3 pb-1 flex items-center justify-between shrink-0 relative z-20">
                <span className="text-[10px] font-bold text-slate-900 font-sans tracking-tight">
                  9:41
                </span>

                {/* Dynamic Island Notch */}
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 space-x-1 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#151515] border border-slate-800" />
                  <div className="w-1 h-1 rounded-full bg-blue-950/90" />
                </div>

                <div className="flex items-center space-x-1.5 text-slate-900">
                  <Wifi className="w-2.5 h-2.5" />
                  <Battery className="w-3 h-3" />
                </div>
              </div>

              {/* 2. Instagram Mobile App Header */}
              <div className="px-3.5 py-1.5 flex items-center justify-between border-b border-slate-100 shrink-0 bg-white z-10">
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-xs font-sans tracking-tight text-slate-900">
                    alpacladd
                  </span>
                  <BadgeCheck className="w-3.5 h-3.5 text-sky-500 fill-sky-500 stroke-white" />
                  <ChevronDown className="w-3 h-3 text-slate-600" />
                </div>

                <div className="flex items-center space-x-2.5 text-slate-700">
                  <Bell className="w-3.5 h-3.5 cursor-pointer hover:text-slate-900" />
                  <MoreHorizontal className="w-3.5 h-3.5 cursor-pointer hover:text-slate-900" />
                </div>
              </div>

              {/* 3. Screen Body (Scrollable Profile & Grid) */}
              <div className="overflow-y-auto no-scrollbar flex-grow bg-white text-left p-3 space-y-2.5">
                
                {/* Profile Header & Stats */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    {/* Avatar with Story Gradient Ring */}
                    <div className="relative cursor-pointer shrink-0">
                      <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 shadow-sm">
                        <div className="w-full h-full rounded-full bg-white p-[1.5px] overflow-hidden flex items-center justify-center">
                          <img
                            src="/logotipo.png"
                            alt="ALPACLADD"
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 text-center font-sans">
                      <div>
                        <strong className="text-xs font-bold text-slate-900 block leading-tight">126</strong>
                        <span className="text-[9px] text-slate-500">posts</span>
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-slate-900 block leading-tight">2.456</strong>
                        <span className="text-[9px] text-slate-500">seguidores</span>
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-slate-900 block leading-tight">180</strong>
                        <span className="text-[9px] text-slate-500">seguidos</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="text-[10px] font-sans text-slate-800 space-y-0.5 leading-snug">
                    <div className="flex items-center space-x-1.5">
                      <span className="font-bold text-slate-900">ALPACLADD</span>
                      <span className="text-slate-500 text-[9px]">• Fábrica de Hilados</span>
                    </div>
                    <p className="text-slate-700">🧶 Hilos que tejen futuro.</p>
                    <p className="text-slate-700">👥 Somos equipo.</p>
                    <p className="text-slate-600">🌱 Compromiso y calidad industrial. 📍 La Rioja</p>
                    <a
                      href="https://alpacladd.com.ar"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-600 font-semibold block text-[9.5px]"
                    >
                      🔗 alpacladd.com.ar
                    </a>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-1.5 pt-0.5">
                    <button
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={`flex-1 py-1 rounded-md text-[10px] font-bold font-sans transition-all duration-200 ${
                        isFollowing
                          ? "bg-slate-100 text-slate-800"
                          : "bg-sky-500 hover:bg-sky-600 text-white shadow-sm"
                      }`}
                    >
                      {isFollowing ? "Siguiendo" : "Seguir"}
                    </button>

                    <button className="flex-1 py-1 rounded-md text-[10px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors">
                      Mensaje
                    </button>

                    <button className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors">
                      <MoreHorizontal className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Story Highlights Bubbles */}
                  <div className="pt-1">
                    <div className="flex space-x-2.5 overflow-x-auto no-scrollbar pb-0.5">
                      {highlights.map((h, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-1 shrink-0 cursor-pointer">
                          <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center p-0.5 shadow-sm hover:border-sky-400 transition-colors">
                            <div className="w-full h-full rounded-full bg-sky-50 flex items-center justify-center">
                              {h.icon}
                            </div>
                          </div>
                          <span className="text-[8.5px] font-sans text-slate-700 font-medium">
                            {h.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feed Tabs Bar */}
                <div className="flex items-center border-t border-b border-slate-200 py-1 text-slate-600 shrink-0">
                  <div className="flex-1 flex justify-center text-slate-900">
                    <Grid className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 flex justify-center text-slate-400">
                    <Tv className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 4x4 Grid of 16 Interactive Posts (Authentic Mobile Square Tiles) */}
                <div className="grid grid-cols-4 gap-[2px] p-[1px] bg-slate-100 rounded-md overflow-hidden">
                  {postsData.map((post) => {
                    const isLiked = likedPosts[post.id];
                    return (
                      <div
                        key={post.id}
                        onClick={() => setSelectedPost(post)}
                        className="aspect-square bg-slate-200 overflow-hidden relative group cursor-pointer"
                      >
                        <img
                          src={post.img}
                          alt={`Post ${post.id}`}
                          className="w-full h-full object-cover select-none group-hover:scale-110 transition-transform duration-200"
                          loading="lazy"
                        />

                        {/* Hover Heart Indicator */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center text-white text-[9px] font-bold">
                          <Heart className={`w-3 h-3 ${isLiked ? "fill-red-500 text-red-500" : "fill-white text-white"}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Bottom iOS Home Bar */}
              <div className="bg-white py-1.5 shrink-0 flex justify-center z-20">
                <div className="w-20 h-1 bg-slate-900/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Realistic Instagram Desktop/Mobile Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md"
              onClick={() => setSelectedPost(null)}
            >
              {/* Previous Post Arrow */}
              {postsData.findIndex((p) => p.id === selectedPost.id) > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePost("prev");
                  }}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-50 backdrop-blur-md"
                  title="Publicación anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Post Arrow */}
              {postsData.findIndex((p) => p.id === selectedPost.id) < postsData.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePost("next");
                  }}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-50 backdrop-blur-md"
                  title="Siguiente publicación"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.94, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 15 }}
                className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Side: High-res Square Post Media */}
                <div className="w-full md:w-[55%] bg-black flex items-center justify-center relative select-none">
                  <img
                    src={selectedPost.img}
                    alt={`Post ${selectedPost.id}`}
                    className="w-full h-full max-h-[75vh] object-contain"
                  />
                </div>

                {/* Right Side: Instagram Post Sidebar (Header, Caption, Comments, Actions) */}
                <div className="w-full md:w-[45%] flex flex-col justify-between h-[480px] md:h-[75vh] bg-white text-left">
                  
                  {/* 1. Header (Author Profile) */}
                  <div className="px-4 py-3.5 border-b border-slate-200 flex items-center justify-between shrink-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600">
                        <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden">
                          <img src="/logotipo.png" alt="Avatar" className="w-full h-full object-contain p-0.5" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-bold text-xs font-sans text-slate-900">alpacladd</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 fill-sky-500 stroke-white" />
                          <span className="text-slate-400 text-xs">•</span>
                          <button
                            onClick={() => setIsFollowing(!isFollowing)}
                            className="text-xs font-bold text-sky-600 hover:text-sky-700 font-sans"
                          >
                            {isFollowing ? "Siguiendo" : "Seguir"}
                          </button>
                        </div>
                        <span className="text-[10px] text-slate-500 font-sans block">{selectedPost.location}</span>
                      </div>
                    </div>

                    <button className="text-slate-600 hover:text-slate-900 p-1">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 2. Comments & Caption Scrollable Feed */}
                  <div className="px-4 py-3 overflow-y-auto space-y-4 text-xs font-sans flex-grow no-scrollbar">
                    {/* Post Caption */}
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-full bg-navy/10 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                        <img src="/logotipo.png" alt="Avatar" className="w-5 h-5 object-contain" />
                      </div>
                      <div className="space-y-1">
                        <p className="leading-relaxed">
                          <strong className="font-bold text-slate-900 mr-1.5">alpacladd</strong>
                          <span className="text-slate-800 whitespace-pre-line">{selectedPost.caption}</span>
                        </p>
                        <span className="text-[10px] text-slate-400 font-mono block">{selectedPost.timeAgo}</span>
                      </div>
                    </div>

                    {/* Pre-existing Comments */}
                    {selectedPost.comments.map((c, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className={`w-7 h-7 rounded-full ${c.avatarBg} text-white flex items-center justify-center shrink-0 font-bold text-[10px] uppercase shadow-sm`}>
                          {c.user.charAt(0)}
                        </div>
                        <div className="space-y-0.5 flex-grow">
                          <p className="leading-relaxed">
                            <strong className="font-bold text-slate-900 mr-1.5">{c.user}</strong>
                            <span className="text-slate-700">{c.text}</span>
                          </p>
                          <div className="flex items-center space-x-3 text-[10px] text-slate-400 font-mono">
                            <span>{c.time}</span>
                            <button className="hover:text-slate-600 font-semibold">Responder</button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Dynamic User Added Comments */}
                    {(postComments[selectedPost.id] || []).map((c, i) => (
                      <div key={`dynamic-${i}`} className="flex items-start space-x-3">
                        <div className={`w-7 h-7 rounded-full ${c.avatarBg} text-white flex items-center justify-center shrink-0 font-bold text-[10px] uppercase shadow-sm`}>
                          {c.user.charAt(0)}
                        </div>
                        <div className="space-y-0.5 flex-grow">
                          <p className="leading-relaxed">
                            <strong className="font-bold text-slate-900 mr-1.5">{c.user}</strong>
                            <span className="text-slate-700">{c.text}</span>
                          </p>
                          <div className="flex items-center space-x-3 text-[10px] text-slate-400 font-mono">
                            <span>{c.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 3. Action Bar (Likes, Comments, Share, Bookmark) */}
                  <div className="border-t border-slate-200 px-4 pt-3 pb-2 space-y-2 shrink-0 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLikeToggle(selectedPost.id)}
                          className="hover:opacity-70 transition-transform active:scale-125"
                        >
                          <Heart
                            className={`w-6 h-6 transition-colors ${
                              likedPosts[selectedPost.id] ? "fill-red-500 text-red-500" : "text-slate-800"
                            }`}
                          />
                        </button>
                        <button className="hover:opacity-70 text-slate-800">
                          <MessageCircle className="w-6 h-6" />
                        </button>
                        <button className="hover:opacity-70 text-slate-800">
                          <Send className="w-6 h-6" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleBookmarkToggle(selectedPost.id)}
                        className="hover:opacity-70"
                      >
                        <Bookmark
                          className={`w-6 h-6 transition-colors ${
                            bookmarkedPosts[selectedPost.id] ? "fill-slate-900 text-slate-900" : "text-slate-800"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Likes Count */}
                    <div className="text-xs font-sans">
                      <span className="text-slate-600">Les gusta a </span>
                      <strong className="font-bold text-slate-900">tejedurias_argentinas</strong>
                      <span className="text-slate-600"> y </span>
                      <strong className="font-bold text-slate-900">
                        {selectedPost.likes + (likedPosts[selectedPost.id] ? 1 : 0)} personas más
                      </strong>
                    </div>

                    <span className="text-[10px] text-slate-400 font-mono block uppercase">
                      {selectedPost.timeAgo}
                    </span>
                  </div>

                  {/* 4. Add Comment Input Form */}
                  <form
                    onSubmit={(e) => handleAddComment(e, selectedPost.id)}
                    className="border-t border-slate-200 px-4 py-2.5 flex items-center space-x-2 shrink-0 bg-white"
                  >
                    <Smile className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" />
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Añade un comentario..."
                      className="w-full text-xs font-sans bg-transparent focus:outline-none placeholder-slate-400 text-slate-900"
                    />
                    <button
                      type="submit"
                      disabled={!newComment.trim()}
                      className="text-xs font-bold font-sans text-sky-600 hover:text-sky-700 disabled:opacity-40 disabled:hover:text-sky-600 transition-opacity"
                    >
                      Publicar
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
};
