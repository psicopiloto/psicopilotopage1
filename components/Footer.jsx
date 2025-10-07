import Image from "next/image";
import Link from "next/link"; 
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-psicopiloto-sand-50 border-t border-psicopiloto-gray-500/10" role="contentinfo">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-base md:text-lg text-psicopiloto-gray-700">
        
        {/* Logo con enlace a la home (Sin cambios estructurales) */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            aria-label="Ir a la página de inicio de Psicopiloto"
            className="transition transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-600 rounded"
          >
            <Image
              src="/logo.webp"
              alt="Logotipo de Psicopiloto" 
              width={120}
              height={40}
              priority 
            />
          </Link>
        </div>

        {/* Redes sociales (Se añade p-2 a los enlaces para aumentar el área táctil) */}
        <div
          className="flex gap-6 text-2xl md:text-3xl text-psicopiloto-green-600"
          aria-label="Redes sociales de Psicopiloto"
        >
          <a
            href="https://instagram.com/psicopi_loto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded **p-2**" // ✅ Área táctil aumentada
            aria-label="Instagram de Psicopiloto"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://x.com/@jcrr78"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded **p-2**" // ✅ Área táctil aumentada
            aria-label="Twitter de Jose Carlos Rodríguez (Psicopiloto)"
          >
            <FaTwitter aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/jose-carlos-rodríguez-retamar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded **p-2**" // ✅ Área táctil aumentada
            aria-label="LinkedIn de Jose Carlos Rodríguez (Psicopiloto)"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
        </div>

        {/* Email de contacto */}
        <div className="flex items-center gap-2 text-psicopiloto-gray-700 text-base md:text-lg">
          <FaEnvelope className="text-lg md:text-xl" aria-hidden="true" />
          <a
            href="mailto:info@psicopiloto.com"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-psicopiloto-blue-500 rounded"
          >
            info@psicopiloto.com
          </a>
        </div>

        {/* Enlaces legales (SOLUCIÓN WCAG: Usamos 'h' y 'my' en lugar de 'p') */}
        <nav aria-label="Enlaces legales y política" className="flex flex-col items-center text-xs text-psicopiloto-gray-600 mt-4 md:mt-0 gap-1">
          <a
            href="/aviso-legal"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-psicopiloto-blue-500 rounded **my-1**" // ✅ Añade margen vertical para espaciar
          >
            Aviso Legal y Política de Privacidad
          </a>
          <a
            href="/politica-cookies"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-psicopiloto-blue-500 rounded **my-1**" // ✅ Añade margen vertical para espaciar
          >
            Política de Cookies
          </a>
        </nav>
      </div>
    </footer>
  );
}
