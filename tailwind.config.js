// tailwind.config.js
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        psicopiloto: {
          green: { 500: "#4eae9b", 600: "#2a8371" },
          blue: { 500: "#5aa6c8", 600: "#3f89aa" },
          sand: { 50: "#f9f5f1" },
          gray: { 700: "#374151", 500: "#6b7280" },
          honey: { 500: "#f4b860", 600: "#d99842" },
          peach: { 500: "#f2a9a1" },
        },
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"], // Fuente principal consistente
      },
      spacing: {
        '128': '32rem', // Extensión opcional para layouts grandes
      },
      borderRadius: {
        'xl': '1rem', // Consistencia en bordes redondeados
      }
    },
  },
  plugins: [
    typography, // Mejora estilo de textos largos y SEO
    forms       // Mejora accesibilidad y consistencia de formularios
  ],
}
// Cambios realizados:
// - Consolidación de plugins Tailwind para evitar duplicados.
// - Comentarios claros sobre mejoras de accesibilidad y SEO.
// - Mantiene consistencia visual y tipográfica según auditoría.
// - Ajustes menores de estructura para legibilidad y mantenimiento.
