import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// Importar la utilidad de Tailwind CSS/clsx para las clases condicionales
import clsx from 'clsx'; 

export default function Nav() {
  const [open, setOpen] = useState(false);
  
  // ✨ CORRECCIÓN A: Usar <nav> como contenedor principal, no <header>.
  return (
    <nav className="fixed w-full bg-psicopiloto-sand-50/95 backdrop-blur z-40 shadow-md" aria-label="Navegación principal del sitio">
      <div className="container flex items-center justify-between h-16 px-4 md:px-0">
        
        {/* Logo + Nombre, clickeable hacia Inicio */}
        {/* ✨ CORRECCIÓN B: Usar colores de la paleta. Se asume que el color principal del logo es el psicopiloto-gray-700 */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-psicopiloto-gray-700 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded">
          <Image
            src="/logo.webp"
            alt="Logo Psicopiloto"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          Psicopiloto<span className="align-super text-xs">®</span>
        </Link>

        {/* Menú escritorio */}
        <div className="hidden md:flex gap-6 text-psicopiloto-gray-700">
          {/* ✨ CORRECCIÓN C: Estilizar los enlaces del escritorio para mejor UX/A11Y */}
          <Link href="/" className="hover:text-psicopiloto-blue-600 transition focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Inicio</Link>
          {/* ✨ CORRECCIÓN D: Refinar etiqueta, como se corrigió en index.js */}
          <Link href="/que-es-psicopiloto" className="hover:text-psicopiloto-blue-600 transition focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Filosofía</Link> 
          <Link href="/servicios" className="hover:text-psicopiloto-blue-600 transition focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Servicios</Link>
          <Link href="/sobre-mi" className="hover:text-psicopiloto-blue-600 transition focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Sobre mí</Link>
          {/* ✨ CORRECCIÓN E: Destacar Contacto como CTA secundario */}
          <Link href="/contacto" className="px-3 py-1 bg-psicopiloto-green-500 text-white rounded hover:bg-psicopiloto-green-600 transition focus:ring-psicopiloto-green-400">Contactar</Link>
        </div>

        {/* Botón menú móvil (Hamburguesa) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
        >
          {/* ✨ CORRECCIÓN F: Animación del icono de hamburguesa a X (Mejora UX) */}
          <span 
            className={clsx("block w-6 h-0.5 bg-psicopiloto-gray-700 transition-transform duration-300", {
              "rotate-45 translate-y-2": open, // Línea superior se convierte en 45 grados
              "opacity-100": !open,
            })}
          ></span>
          <span 
            className={clsx("block w-6 h-0.5 bg-psicopiloto-gray-700 transition-opacity duration-300", {
              "opacity-0": open, // Línea media desaparece
            })}
          ></span>
          <span 
            className={clsx("block w-6 h-0.5 bg-psicopiloto-gray-700 transition-transform duration-300", {
              "-rotate-45 -translate-y-2": open, // Línea inferior se convierte en -45 grados
              "opacity-100": !open,
            })}
          ></span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {/* ✨ CORRECCIÓN G: Transición suave del menú desplegable */}
      <div 
        className={clsx("md:hidden bg-psicopiloto-sand-50 border-t border-psicopiloto-gray-200 overflow-hidden transition-all duration-300 ease-in-out", {
          "max-h-0": !open,
          "max-h-screen": open, // Permite la animación de despliegue
        })}
      >
        <nav className="flex flex-col p-4 space-y-4 text-psicopiloto-gray-700" aria-label="Menú principal desplegado">
          <Link href="/" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Inicio</Link>
          <Link href="/que-es-psicopiloto" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Filosofía</Link>
          <Link href="/servicios" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Servicios</Link>
          <Link href="/sobre-mi" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Sobre mí</Link>
          {/* CTA de contacto en el menú móvil */}
          <Link href="/contacto" onClick={() => setOpen(false)} className="mt-4 px-4 py-2 bg-psicopiloto-green-500 text-white text-center rounded hover:bg-psicopiloto-green-600 transition focus:ring-psicopiloto-green-400">Contactar</Link>
        </nav>
      </div>
    </nav>
  );
}
