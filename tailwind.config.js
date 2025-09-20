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
          green: { 500: "#2e7d6c", 600: "#256659" },
          blue: { 500: "#5aa6c8", 600: "#3f89aa" },
          sand: { 50: "#f9f5f1" },
          gray: { 700: "#374151", 500: "#6b7280" },
          honey: { 500: "#f4b860", 600: "#d99842" },
          peach: { 500: "#f2a9a1" },
        },
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"], // Cambié Inter por Nunito
      },
    },
  },
  plugins: [],
}

