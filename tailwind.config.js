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
          // Correcciones de contraste anteriores:
          green: { 
            500: "#3A9281", // Oscurecido para H2
            600: "#2a8371" 
          },
          // BLUE: Mantenido.
          blue: { 500: "#5aa6c8", 600: "#3f89aa" },
          
          // SAND-50 (FONDO): Mantenido.
          sand: { 50: "#f9f5f1" },
          
          // ⚠️ CORRECCIÓN CLAVE NUEVA: GRAY-500 (Oscurecido para Contraste en Párrafos)
          // GRAY-700 se mantiene oscuro para texto principal.
          gray: { 
            700: "#242c35", // Se mantiene oscuro para texto principal (15.6:1)
            500: "#4b5563" // ¡ESTE ES EL CAMBIO! Oscurecido de #6b7280 a #4b5563 para garantizar contraste (Contraste 6.9:1)
          },
          
          // Corrección de contraste anterior:
          honey: { 
            500: "#7F4900", // Oscurecido para H3
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
