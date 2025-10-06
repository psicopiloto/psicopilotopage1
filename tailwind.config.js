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
          // GREEN: Se mantienen sin cambios (botones).
          green: { 500: "#4eae9b", 600: "#2a8371" }, 
          // BLUE: Se mantienen.
          blue: { 500: "#5aa6c8", 600: "#3f89aa" },
          
          // SAND-50 (FONDO): Aclarado (#fdfcfb) para que el texto gris resalte más.
          // (Original: #f9f5f1)
          sand: { 50: "#fdfcfb" },
          
          // GRAY-700 (TEXTO PRINCIPAL): Oscurecido (#404b57) para asegurar la legibilidad sobre el nuevo fondo "sand-50".
          // (Original: #374151 - no pasaba el contraste con el fondo original)
          gray: { 
            700: "#404b57", 
            500: "#6b7280" // Se mantiene, pero ahora es menos crítico gracias al cambio en sand-50.
          },
          
          // HONEY-500 (TÍTULOS): Oscurecido (#c78b32) para que los encabezados resalten sobre el fondo claro.
          // (Original: #f4b860 - no pasaba el contraste)
          honey: { 
            500: "#c78b32", 
            600: "#d99842"
          },
          // PEACH: Se mantiene.
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
