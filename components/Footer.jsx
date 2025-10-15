// components/Footer.jsx

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-psicopiloto-sand-50 border-t border-psicopiloto-gray-500/10" role="contentinfo">
      {/* SECCIÓN SUPERIOR: Logo, Redes y Email */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-base md:text-lg text-psicopiloto-gray-700 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            aria-label="Ir a la página de inicio de Psicopiloto"
            className="transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-600 rounded"
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
          <a
            href="https://www.instagram.com/psicopiloto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psicopiloto-green-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded"
            aria-label="Instagram de Psicopiloto"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com/jcrodriguezret"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psicopiloto-green-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded"
            aria-label="Twitter de Jose Carlos Rguez. Retamar"
          >
            <FaTwitter aria-hidden="true" />
          </a>
          {/* ✨ CORRECCIÓN: URL de LinkedIn y aria-label actualizados a la versión de marca */}
          <a
            href="https://www.linkedin.com/in/psicopiloto/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psicopiloto-green-600 focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 rounded"
            aria-label="LinkedIn de Psicopiloto"
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
      </div>

      {/* SECCIÓN INFERIOR: SEO Local y Enlaces Legales */}
      <div className="container mx-auto text-center mt-10 pt-6 border-t border-psicopiloto-gray-500/10 px-4">
        {/* Línea de SEO Local con el nombre y número de colegiado */}
        <div className="text-sm text-psicopiloto-gray-600 mb-4">
          <p>Psicopiloto® | Jose Carlos Rguez. Retamar - Psicólogo online con servicio en Granada | Col. AO14457</p>
        </div>

        {/* Enlaces legales en una sola línea */}
        <nav aria-label="Enlaces legales y política" className="flex justify-center items-center gap-2 text-xs text-psicopiloto-gray-600">
          <a
            href="/aviso-legal"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-psicopiloto-blue-500 rounded"
          >
            Aviso Legal y Política de Privacidad
          </a>
          <span className="text-gray-400 select-none">|</span>
          <a
            href="/politica-cookies"
            className="hover:underline focus:outline-none focus:ring-1 focus:ring-psicopiloto-blue-500 rounded"
          >
            Política de Cookies
          </a>
        </nav>

        {/* Copyright */}
        <div className="mt-6 text-xs text-psicopiloto-gray-500">
          &copy; {new Date().getFullYear()} Psicopiloto®. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
