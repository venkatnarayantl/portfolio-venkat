/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hackerGreen: "#00FF41",
        hackerBlack: "#0f0f0f",
        neonGreen: "#39FF14",
        cyanGlow: "#0ff",
      },
      boxShadow: {
        neon: "0 0 20px #0ff",
      },
    },
  },
  plugins: [],
};
