/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "psicopiloto-green-50": "#E8F6F2",
        "psicopiloto-green-500": "#00A88F",
        "psicopiloto-green-600": "#00806B",
        "psicopiloto-blue-50": "#EAF4FF",
        "psicopiloto-blue-500": "#1D7CF2",
        "psicopiloto-blue-600": "#145CCB",
        "psicopiloto-gray-700": "#374151",
        "psicopiloto-sand-50": "#FFF8F0"
      }
    }
  },
  plugins: []
};
