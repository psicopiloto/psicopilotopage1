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
          // CORRECCIÓN: Verde más oscuro para asegurar contraste con texto blanco
          green: { 
            500: "#4fad9b", // Contraste OK
            600: "#2a8371" 
          },
          // CORRECCIÓN: Azul más oscuro para asegurar contraste con texto blanco
          blue: { 
            500: "#5aa6c8", 
            600: "#377792" // Contraste OK con texto blanco
          },
          
          sand: { 50: "#f9f5f1" },
          
          // CORRECCIÓN: Grises y Miel oscurecidos para asegurar contraste en textos y títulos
          gray: { 
            700: "#242c35", // Texto principal muy oscuro
            500: "#4b5563" // Texto secundario oscuro
          },
          honey: { 
            500: "#7F4900", // Títulos oscuros
            600: "#d99842"
          },
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
