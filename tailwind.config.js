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
          // GREEN: Mantenido.
          green: { 500: "#4eae9b", 600: "#2a8371" }, 
          // BLUE: Mantenido.
          blue: { 500: "#5aa6c8", 600: "#3f89aa" },
          
          // SAND-50 (FONDO): Mantenido súper claro.
          sand: { 50: "#fdfcfb" },
          
          // GRAY-700 (TEXTO PRINCIPAL): REFORZADO a un gris muy oscuro (casi negro) para garantizar el contraste WCAG AA/AAA.
          gray: { 
            700: "#242c35", // Mucho más oscuro que antes (el anterior era #404b57)
            500: "#6b7280" 
          },
          
          // HONEY-500 (TÍTULOS): REFORZADO a un tono miel oscuro/marrón para asegurar el contraste sobre cualquier fondo claro o transparente.
          // (Es crucial para los elementos sobre <div class="p-6 bg-white/40">)
          honey: { 
            500: "#A8681A", // Tono muy oscuro y seguro para encabezados
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
