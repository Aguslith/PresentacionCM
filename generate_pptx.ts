import pptxgen from "pptxgenjs";
import { SLIDES } from "./src/slides/types.ts";

const pres = new pptxgen();

pres.author = "Alpacladd";
pres.company = "Alpacladd";
pres.revision = "1";
pres.subject = "Presentación B2B";
pres.title = "ALPACLADD — Fábrica de Hilados";


// Master slide setup without the problematic path dependency on image
// we will just exclude the logo image as suggested by the reviewer to be safe.
pres.defineSlideMaster({
  title: "MASTER_SLIDE",
  background: { color: "0D1D34" }, // Navy Blue
});

for (const slideData of SLIDES) {
  const slide = pres.addSlide({ masterName: "MASTER_SLIDE" });

  // Add title
  slide.addText(slideData.title, {
    x: 0.5,
    y: 0.5,
    w: "90%",
    h: 1,
    color: "F2F2F2", // Off-White
    fontSize: 28,
    bold: true,
    fontFace: "Arial",
    isTextBox: true,
    valign: "middle"
  });

  // Add metadata
  slide.addText(`${slideData.speakerName} | ${slideData.timeRange}`, {
    x: 0.5,
    y: 1.5,
    w: "90%",
    h: 0.5,
    color: "5FA8D3", // Sky Blue
    fontSize: 14,
    fontFace: "Arial",
  });

  // Add key points
  const bulletPoints = slideData.keyPoints.map(p => ({ text: p }));

  slide.addText(bulletPoints, {
    x: 0.5,
    y: 2.5,
    w: "90%",
    h: 4,
    color: "F2F2F2",
    fontSize: 20,
    fontFace: "Arial",
    bullet: { type: 'bullet' },
    valign: "top",
    lineSpacing: 32,
  });
}

pres.writeFile({ fileName: "Presentacion_CM_Alpacladd.pptx" }).then(fileName => {
  console.log(`created file: ${fileName}`);
});
