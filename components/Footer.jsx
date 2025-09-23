import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-gray-50 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 text-sm text-gray-600">

        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logo.webp"
            alt="Psicopiloto Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Marca */}
        <div className="font-semibold text-gray-800 text-center">
          © {new Date().getFullYear()} Psicopiloto
          <span className="align-super text-xs">®</span>. Todos los derechos reservados.
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 text-xl" aria-label="Redes sociales">
          <a
            href="https://instagram.com/psicopi_loto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-softorange-500 focus:outline-none focus:ring-2 focus:ring-softorange-500 rounded"
            aria-label="Instagram Psicopiloto"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/@jcrr78"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-softorange-500 focus:outline-none focus:ring-2 focus:ring-softorange-500 rounded"
            aria-label="Twitter Psicopiloto"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/jose-carlos-rodríguez-retamar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-softorange-500 focus:outline-none focus:ring-2 focus:ring-softorange-500 rounded"
            aria-label="LinkedIn Psicopiloto"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Email de contacto */}
        <div className="flex items-center gap-2 text-gray-700">
          <FaEnvelope className="text-base" />
          <a
            href="mailto:joseretamar@psicopiloto.com"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-gray-400 rounded"
          >
            joseretamar@psicopiloto.com
          </a>
        </div>

        {/* Enlaces útiles */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs text-gray-500 text-center">
          <a
            href="/contacto"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-gray-400 rounded"
          >
            Contacto
          </a>
          <span>·</span>
          <a
            href="/aviso-legal"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-gray-400 rounded"
          >
            Aviso Legal y Política de Privacidad
          </a>
        </div>

      </div>
    </footer>
  );
}
