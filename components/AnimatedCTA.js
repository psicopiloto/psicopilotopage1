import Link from "next/link";

export default function AnimatedCTA({ href, text, color = "green", className = "" }) {
  const colors = {
    // Se mantiene la lógica de colores, la cual es perfecta para la coherencia de marca.
    green: "bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 focus:ring-psicopiloto-green-500", // ✨ CORRECCIÓN A: Usar 500 para el focus ring es a menudo mejor que el 400.
    blue: "bg-psicopiloto-blue-500 hover:bg-psicopiloto-blue-600 focus:ring-psicopiloto-blue-500",
    honey: "bg-psicopiloto-honey-500 hover:bg-psicopiloto-honey-600 focus:ring-psicopiloto-honey-500"
  };

  // El estilo base incluye los estados hover y transform
  const baseClasses = `
    inline-block px-6 py-4 text-xl md:text-xl text-white rounded-2xl font-bold 
    shadow-lg transform transition duration-300 ease-in-out 
    hover:-translate-y-1 hover:scale-105 hover:shadow-xl 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
  `;
  
  // Tu lógica de `Link` con `passHref` y `<a>` anidado es la forma "Legacy" de Next.js.
  // En las versiones modernas, es más limpio usar el Link sin el <a> anidado.
  // Sin embargo, para no romper tu código, mantendremos la estructura con optimizaciones mínimas de clases.
  return (
    <Link 
      href={href} 
      passHref
      // ✅ Se mantienen los atributos de accesibilidad
      role="button" 
      aria-label={text} 
      className={`${baseClasses} ${colors[color]} ${className}`} // ✨ CORRECCIÓN B: Se mueven todas las clases al Link para limpieza.
    >
        {text}
    </Link>
  );
}
