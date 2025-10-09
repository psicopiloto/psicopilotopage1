// components/AnimatedCTA.js
import Link from "next/link";

export default function AnimatedCTA({ href, text, color = "green", className = "" }) {
  const colors = {
    // Se mantiene la lógica de colores
    green: "bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 focus:ring-psicopiloto-green-500",
    blue: "bg-psicopiloto-blue-500 hover:bg-psicopiloto-blue-600 focus:ring-psicopiloto-blue-500",
    honey: "bg-psicopiloto-honey-500 hover:bg-psicopiloto-honey-600 focus:ring-psicopiloto-honey-500"
  };

  // El estilo base incluye los estados hover y transform
  const baseClasses = `
    inline-block px-6 py-4 text-xl md:text-xl text-white rounded-2xl font-bold 
    shadow-lg transform transition duration-300 ease-in-out 
    hover:-translate-y-1 hover:scale-105 hover:shadow-xl 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${colors[color]}
    ${className}
  `;
  
  // ✨ CAMBIO CRÍTICO: Usar la sintaxis moderna de Next.js Link
  return (
    <Link 
      href={href} 
      className={baseClasses} // Se aplican las clases directamente al componente Link/<a>
    >
      {text}
    </Link>
  );
}
