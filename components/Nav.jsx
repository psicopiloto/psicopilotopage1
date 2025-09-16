"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur z-40 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo Psicopiloto" 
            width={120} 
            height={40} 
            className="h-10 w-auto"
          />
        </Link>

        {/* NAV: escritorio */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">Inicio</Link>
          <Link href="/que-es-psicopiloto">Qué es Psicopiloto</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/contacto">Contactar</Link>
        </nav>

        {/* Botón + Menú hamburguesa (solo móvil) */}
        <div className="flex items-center gap-4 md:hidden">
          <Link href="/contacto">
            <span className="px-3 py-2 bg-softorange-500 text-white rounded-md hover:bg-softorange-600 transition">
              Contactar
            </span>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col gap-4 p-4 text-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="/que-es-psicopiloto" onClick={() => setMenuOpen(false)}>Qué es Psicopiloto</Link>
            <Link href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link href="/sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contactar</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

