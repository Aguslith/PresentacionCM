import { HorizontalController } from "./components/HorizontalController";
import type { Slide } from "./slides/types";
import { ThemeProvider } from "./context/ThemeContext";
import { Portada } from "./slides/Portada";
import { Intro } from "./slides/Intro";
import { Concepto } from "./slides/Concepto";
import { Mision } from "./slides/Mision";
import { Publico } from "./slides/Publico";
import { Estrategia } from "./slides/Estrategia";
import { Pilares } from "./slides/Pilares";
import { Logo } from "./slides/Logo";
import { Construccion } from "./slides/Construccion";
import { Isotipo } from "./slides/Isotipo";
import { Seguridad } from "./slides/Seguridad";
import { Reduccion } from "./slides/Reduccion";
import { Paleta } from "./slides/Paleta";
import { Tipos } from "./slides/Tipos";
import { Versiones } from "./slides/Versiones";
import { Incorrectos } from "./slides/Incorrectos";
import { Mockups } from "./slides/Mockups";
import { Instagram } from "./slides/Instagram";
import { Stories } from "./slides/Stories";
import { Reels } from "./slides/Reels";
import { Publicidad } from "./slides/Publicidad";
import { Cierre } from "./slides/Cierre";

function App() {
  const renderSlide = (slide: Slide) => {
    switch (slide.id) {
      case "portada":
        return <Portada />;
      case "intro":
        return <Intro />;
      case "concepto":
        return <Concepto />;
      case "mision":
        return <Mision />;
      case "publico":
        return <Publico />;
      case "estrategia":
        return <Estrategia />;
      case "pilares":
        return <Pilares />;
      case "logo":
        return <Logo />;
      case "construccion":
        return <Construccion />;
      case "isotipo":
        return <Isotipo />;
      case "seguridad":
        return <Seguridad />;
      case "reduccion":
        return <Reduccion />;
      case "paleta":
        return <Paleta />;
      case "tipos":
        return <Tipos />;
      case "versiones":
        return <Versiones />;
      case "incorrectos":
        return <Incorrectos />;
      case "mockups":
        return <Mockups />;
      case "instagram":
        return <Instagram />;
      case "stories":
        return <Stories />;
      case "reels":
        return <Reels />;
      case "publicidad":
        return <Publicidad />;
      case "cierre":
        return <Cierre />;
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-navy text-off">
            Slide {slide.n}: {slide.title}
          </div>
        );
    }
  };

  return (
    <ThemeProvider>
      <HorizontalController renderSlide={renderSlide} />
    </ThemeProvider>
  );
}

export default App;
