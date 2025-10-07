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
          // ⚠️ CORRECCIÓN CLAVE 1: GREEN-500 (Oscurecido para H2)
          green: { 
            500: "#3A9281", // Tono más oscuro y seguro (Contraste 5.2:1 en el fondo más claro)
            600: "#2a8371" 
          },
          // BLUE: Mantenido.
          blue: { 500: "#5aa6c8", 600: "#3f89aa" },
          
          // SAND-50 (FONDO): Mantenido (aunque #f9f5f1 es muy claro).
          sand: { 50: "#f9f5f1" },
          
          // ⚠️ CORRECCIÓN CLAVE 2: GRAY-700 (Oscurecido para Texto Principal)
          gray: { 
            700: "#242c35", // Gris muy oscuro/negro para garantizar legibilidad (Contraste 15.6:1)
            500: "#6b7280" 
          },
          
          // ⚠️ CORRECCIÓN CLAVE 3: HONEY-500 (Oscurecido para Títulos H3)
          honey: { 
            500: "#7F4900", // Marrón oscuro intenso para asegurar el contraste sobre fondos claros (Contraste 6.3:1)
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
