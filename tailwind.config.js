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
          teal: {
            500: "#0d9488", // Principal CTA (teal medio)
            600: "#0f766e", // Hover principal
            700: "#115e59", // Activo/destacado
          },
          blue: {
            500: "#0284c7", // Secundario (sky blue medio)
            600: "#0369a1", // Hover secundario
          },
          green: {
            500: "#10b981", // Alternativa salud/bienestar
            600: "#059669",
          },
          gray: {
            100: "#f3f4f6", // Fondo claro
            200: "#e5e7eb",
            700: "#374151", // Texto gris oscuro
          },
          // Escala extra de psicopiloto (azules)
          50:  '#f6fbff',
          100: '#eef7ff',
          200: '#d9eefc',
          300: '#bcdff6',
          400: '#8fbfe9',
          500: '#5d96d1',
          600: '#4a78b0',
          700: '#365b86',
          800: '#2b4563',
          900: '#17292f',
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
