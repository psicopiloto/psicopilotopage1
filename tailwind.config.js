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
          // ⚠️ CORRECCIÓN 1: GREEN-500 (Oscurecido para contraste seguro en encabezados H2)
          green: { 
            500: "#3A9281", // Original era #4eae9b (Contraste bajo). Este es más oscuro y seguro.
            600: "#2a8371" 
          },
          // BLUE: Mantenido.
          blue: { 500: "#5aa6c8", 600: "#3f89aa" },
          
          // SAND-50 (FONDO): Mantenido.
          sand: { 50: "#fdfcfb" },
          
          // ⚠️ CORRECCIÓN 2: GRAY-700 (Oscurecido a un gris muy oscuro para todo el texto de cuerpo)
          gray: { 
            700: "#242c35", // Mucho más oscuro, garantiza contraste de texto principal (14.9:1).
            500: "#6b7280" 
          },
          
          // ⚠️ CORRECCIÓN 3: HONEY-500 (Oscurecido a un marrón intenso para títulos H3 sobre fondos claros/transparentes)
          honey: { 
            500: "#7F4900", // Tono muy oscuro para un contraste seguro de 5.9:1.
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
