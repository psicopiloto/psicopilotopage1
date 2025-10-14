// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        psicopiloto: {
          green: {
            500: "#4fad9b",
            600: "#2a8371",
          },
          blue: {
            500: "#5aa6c8",
            600: "#377792",
          },
          sand: { 50: "#f9f5f1" },
          gray: {
            700: "#242c35",
            500: "#4b5563",
          },
          honey: {
            500: "#7F4900",
            600: "#d99842",
          },
          peach: { 500: "#f2a9a1" },
        },
      },
      // ✨ MEJORA: La fuente 'sans' ahora usa la variable CSS optimizada
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
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
