/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1D34",
        blue: "#1D5A8F",
        sky: "#5FA8D3",
        gray: "#666666",
        off: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        display: ["Raleway", "sans-serif"],
      },
      letterSpacing: {
        technical: "0.08em",
      }
    },
  },
  plugins: [],
}
