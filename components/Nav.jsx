import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
     <header className="fixed w-full bg-white/95 backdrop-blur z-40 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-0">
        {/* Logo + Nombre, clickeable hacia Inicio */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-psicopiloto-700">
          <Image
            src="/logo.png"
            alt="Logo Psicopiloto"
            width={32}
            height={32}
            className="rounded"
          />
          Psicopiloto<span className="align-super text-xs">®</span>
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">Inicio</Link>
          <Link href="/que-es-psicopiloto">Qué es Psicopiloto</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/contacto">Contactar</Link>
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-200 flex flex-col p-4 space-y-4 text-gray-700">
          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/que-es-psicopiloto" onClick={() => setOpen(false)}>Qué es Psicopiloto</Link>
          <Link href="/servicios" onClick={() => setOpen(false)}>Servicios</Link>
          <Link href="/sobre-mi" onClick={() => setOpen(false)}>Sobre mí</Link>
          <Link href="/contacto" onClick={() => setOpen(false)}>Contactar</Link>
        </nav>
      )}
    </header>
  );
}
