import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed w-full bg-white/95 backdrop-blur z-40 shadow-sm"
      role="banner"
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-0">
        {/* Logo + Nombre, clickeable hacia Inicio */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-semibold text-psicopiloto.gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.honey-500"
          aria-label="Ir al inicio de Psicopiloto"
        >
          <Image
            src="/logo.png"
            alt="Logotipo de Psicopiloto"
            width={40}
            height={40}
            priority
            className="rounded"
          />
          Psicopiloto<span className="align-super text-xs">®</span>
        </Link>

        {/* Menú escritorio */}
        <nav
          className="hidden md:flex gap-6 text-psicopiloto.gray-700"
          role="navigation"
          aria-label="Menú principal"
        >
          {[
            { href: "/", label: "Inicio" },
            { href: "/que-es-psicopiloto", label: "Qué es Psicopiloto" },
            { href: "/servicios", label: "Servicios" },
            { href: "/sobre-mi", label: "Sobre mí" },
            { href: "/contacto", label: "Contactar" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-psicopiloto.honey-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.honey-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.honey-500"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="block w-6 h-0.5 bg-psicopiloto.gray-700"></span>
          <span className="block w-6 h-0.5 bg-psicopiloto.gray-700"></span>
          <span className="block w-6 h-0.5 bg-psicopiloto.gray-700"></span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200 flex flex-col p-4 space-y-4 text-psicopiloto.gray-700"
          role="navigation"
          aria-label="Menú móvil"
        >
          {[
            { href: "/", label: "Inicio" },
            { href: "/que-es-psicopiloto", label: "Qué es Psicopiloto" },
            { href: "/servicios", label: "Servicios" },
            { href: "/sobre-mi", label: "Sobre mí" },
            { href: "/contacto", label: "Contactar" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-psicopiloto.honey-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.honey-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

/* Cambios realizados:
- Colores de texto y focus actualizados a la paleta psicopiloto para consistencia.
- Menú mapeado con array para evitar repetición de código.
- Mantiene roles ARIA y atributos de accesibilidad.
- Focus-visible coherente con el resto de la web.
- Imagen del logo con priority para mejorar LCP.
- Sugerencia opcional: añadir un "skip link" al inicio de la página para accesibilidad.
*/
