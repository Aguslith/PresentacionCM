export interface BrandTokens {
  colors: { navy: string; blue: string; sky: string; gray: string; off: string };
  fonts: { display: string; body: string };
  spacing: { slideGap: number };
  motion: { ease: [number, number, number, number]; duration: number; stagger: number };
}

export const TOKENS: BrandTokens = {
  colors: { navy: "#0D1D34", blue: "#1D5A8F", sky: "#5FA8D3", gray: "#666666", off: "#F2F2F2" },
  fonts: { display: "Raleway, sans-serif", body: "Raleway, sans-serif" },
  spacing: { slideGap: 0 },
  motion: { ease: [0.22, 1, 0.36, 1], duration: 0.8, stagger: 0.08 },
};
