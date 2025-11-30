// components/AnimatedCTA.js
import Link from "next/link";

export default function AnimatedCTA({ href, text, color = "green", className = "", isExternal = false }) {
  const colors = {
    green: "bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 focus:ring-psicopiloto-green-500",
    blue: "bg-psicopiloto-blue-500 hover:bg-psicopiloto-blue-600 focus:ring-psicopiloto-blue-500",
    honey: "bg-psicopiloto-honey-500 hover:bg-psicopiloto-honey-600 focus:ring-psicopiloto-honey-500"
  };

  // Seleccionamos el color, por defecto green si no existe
  const selectedColor = colors[color] || colors.green;

  // Tu estilo base original se mantiene intacto
  const baseClasses = `
    inline-block px-6 py-4 text-xl md:text-xl text-white rounded-2xl font-bold 
    shadow-lg transform transition duration-300 ease-in-out 
    hover:-translate-y-1 hover:scale-105 hover:shadow-xl 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${selectedColor}
    ${className}
  `;
  
  // ✨ LÓGICA AÑADIDA: Si es externo, usa <a> con target="_blank"
  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={baseClasses}
      >
        {text}
      </a>
    );
  }

  // Si es interno, usa el Link de Next.js (comportamiento normal)
  return (
    <Link 
      href={href} 
      className={baseClasses}
    >
      {text}
    </Link>
  );
}
