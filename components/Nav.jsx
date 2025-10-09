// components/Nav.jsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from 'clsx'; // Importado para las clases condicionales

export default function Nav() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-psicopiloto-sand-50/95 backdrop-blur z-40 shadow-md" aria-label="Navegación principal del sitio">
      <div className="container flex items-center justify-between h-16 px-4 md:px-0 mx-auto">
        
        {/* Logo + Nombre, clickeable hacia Inicio */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-2xl font-semibold text-psicopiloto-gray-700 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded"
          onClick={() => setOpen(false)}
        >
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
        <div className="hidden md:flex gap-6 text-lg">
          <Link href="/" className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Inicio</Link>
          <Link href="/que-es-psicopiloto" className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Filosofía</Link>
          <Link href="/servicios" className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Servicios</Link>
          <Link href="/sobre-mi" className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Sobre Mí</Link>
          
          {/* CTA Contacto (Botón) */}
          <Link
            href="/contacto"
            className="px-4 py-1 bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 text-white rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto-green-500"
          >
            Contacto
          </Link>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú principal" : "Abrir menú principal"}
        >
          <svg
            className="w-6 h-6 text-psicopiloto-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Icono de X o Hamburger */}
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable móvil */}
      <div
        id="mobile-menu"
        className={clsx("md:hidden bg-psicopiloto-sand-50 border-t border-psicopiloto-gray-200 overflow-hidden transition-all duration-300 ease-in-out", {
          "max-h-0": !open,
          "max-h-screen": open, // Permite la animación de despliegue
        })}
      >
        <nav className="flex flex-col p-4 space-y-4 text-psicopiloto-gray-700" aria-label="Menú principal desplegado">
          <Link href="/" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Inicio</Link>
          <Link href="/que-es-psicopiloto" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Filosofía</Link>
          <Link href="/servicios" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Servicios</Link>
          <Link href="/sobre-mi" onClick={() => setOpen(false)} className="py-1 hover:text-psicopiloto-blue-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-500 rounded px-1">Sobre Mí</Link>
          
          {/* CTA Contacto (Botón móvil) */}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-4 px-4 py-2 bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 text-white rounded-md font-semibold text-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto-green-500"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </nav>
  );
}
