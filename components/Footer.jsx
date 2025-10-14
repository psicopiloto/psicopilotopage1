import Image from "next/image";
import Link from "next/link"; 
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-psicopiloto-sand-50 border-t border-psicopiloto-gray-500/10" role="contentinfo">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-base md:text-lg text-psicopiloto-gray-700 px-4">

     <div className="text-center text-sm text-psicopiloto-gray-600 mb-4">
  <p>Psicopiloto® | Jose Carlos Rodríguez Retamar - Psicólogo online con servicio en Granada.</p>
</div>
        
        {/* Logo con enlace a la home */}
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

        {/* Redes sociales */}
        <div
          className="flex gap-6 text-2xl text-psicopiloto-gray-700"
          aria-label="Redes sociales de Psicopiloto"
        >
          {/* ✨ MEJORA: Estandarizar focus ring a color Green */}
          <a
            href="https://www.instagram.com/psicopiloto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psicopiloto-green-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded"
            aria-label="Instagram de Jose Carlos Rodríguez (Psicopiloto)"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com/jcrodriguezret"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psicopiloto-green-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded"
            aria-label="Twitter de Jose Carlos Rodríguez (Psicopiloto)"
          >
            <FaTwitter aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/jcrodriguezret"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psicopiloto-green-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded"
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

        {/* Enlaces legales (NAVEGACIÓN SEMÁNTICA) */}
        <nav aria-label="Enlaces legales y política" className="flex flex-col items-center text-xs text-psicopiloto-gray-600 mt-4 md:mt-0 gap-1">
          {/* ✨ MEJORA: Estandarizar focus ring a color Blue */}
          <a
            href="/aviso-legal"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-psicopiloto-blue-500 rounded"
          >
            Aviso Legal y Política de Privacidad
          </a>
          <a
            href="/politica-cookies"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-psicopiloto-blue-500 rounded"
          >
            Política de Cookies
          </a>
        </nav>
      </div>
      
      {/* Copyright */}
      <div className="container mx-auto text-center mt-6 pt-4 border-t border-psicopiloto-gray-500/10 text-xs text-psicopiloto-gray-500 px-4">
        &copy; {new Date().getFullYear()} Psicopiloto®. Todos los derechos reservados.
      </div>
    </footer>
  );
}
