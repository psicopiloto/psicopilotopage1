import Link from "next/link";

export default function AnimatedCTA({ href, text, color = "green", className = "" }) {
  const colors = {
    // Usamos el color de marca para el fondo y un tono más suave para el anillo de enfoque.
    green: "bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 focus:ring-psicopiloto-green-500",
    blue: "bg-psicopiloto-blue-600 hover:bg-psicopiloto-blue-700 focus:ring-psicopiloto-blue-600", // Aseguramos el tono 600 si es el principal del botón
    honey: "bg-psicopiloto-honey-500 hover:bg-psicopiloto-honey-600 focus:ring-psicopiloto-honey-500"
  };

  // El estilo base incluye los estados hover y transform
  const baseClasses = `
    inline-block px-6 py-4 text-xl md:text-xl text-white rounded-2xl font-bold
    shadow-lg transform transition duration-300 ease-in-out
    hover:-translate-y-1 hover:scale-105 hover:shadow-xl
    focus:outline-none focus:ring-2 focus:ring-offset-2
    cursor-pointer
  `;

  // En Next.js moderno (v13+), el componente Link recibe todas las props.
  return (
    <Link
      href={href}
      role="button"
      aria-label={text}
      // Se combinan las clases base, el esquema de color y las clases adicionales pasadas por prop.
      className={`${baseClasses} ${colors[color]} ${className}`}
    >
      {text}
    </Link>
  );
}
