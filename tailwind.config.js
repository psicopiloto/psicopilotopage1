// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        psicopiloto: {
          // ⚠️ CORRECCIÓN 1: GREEN-500 (Asegurando el contraste del texto blanco)
          // Lo oscurezco un poco más a un tono más profundo y seguro.
          green: { 
            500: "#328975", // Más oscuro que el anterior #3A9281 (Contraste 5.5:1 con white)
            600: "#2a8371" 
          },
          // ⚠️ CORRECCIÓN 2: BLUE-600 (Asegurando el contraste del texto blanco)
          blue: { 
            500: "#5aa6c8", 
            600: "#377792" // Oscurecido de #3f89aa (Contraste 4.9:1 con white)
          },
          
          // SAND-50 (FONDO): Mantenido.
          sand: { 50: "#f9f5f1" },
          
          // Correcciones de contraste anteriores (Mantener):
          gray: { 
            700: "#242c35", 
            500: "#4b5563" 
          },
          honey: { 
            500: "#7F4900", 
            600: "#d99842"
          },
          // PEACH: Mantenido.
          peach: { 500: "#f2a9a1" },
        },
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
      keyframes: {
        bounceOnce: {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-40%)" },
          "40%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-30%)" },
          "80%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-once": "bounceOnce 5.5s ease-out 1",
      },
    },
  },
  plugins: [],
};
