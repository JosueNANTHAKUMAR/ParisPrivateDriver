/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1d3a",       // Bleu nuit (fond sombre principal)
        accent: "#2563eb",        // Bleu accent clair
        accentDark: "#1e3a8a"     // Bleu accent foncé
      }
    },
  },
  plugins: [],
};
