// components/Footer.jsx
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-psicopiloto-gray-700 text-white border-t border-psicopiloto-gray-600 font-sans relative z-30">
      {/* 🚀 Sección Principal del Footer */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Identidad y Acreditación Sanitaria (E-E-A-T de Google) */}
          <div className="flex flex-col space-y-4">
            <span className="text-xl font-bold tracking-wide text-white">
              Psicopiloto<span className="text-psicopiloto-green-400">.</span>
            </span>
            <p className="text-sm text-gray-300 leading-relaxed">
              Consulta de psicología integradora y reprocesamiento emocional profundo (EMDR) en Granada y modalidad online. 
            </p>
            <div className="pt-2 border-t border-psicopiloto-gray-600 text-xs text-gray-400 space-y-1">
              <p className="font-semibold text-gray-300 flex items-center gap-1.5">
                <FaShieldAlt className="text-psicopiloto-green-400" /> Consulta Sanitaria Autorizada
              </p>
              <p>Jose Carlos Rguez. Retamar</p>
              <p>Nº Colegiado: <span className="text-white font-medium">AO14457</span></p>
              <p className="text-[11px] italic">Colegio Oficial de Psicología de Andalucía Oriental</p>
            </div>
          </div>

          {/* Columna 2: Mapa de Vuelo (Tratamientos) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-psicopiloto-green-400 mb-4">
              Áreas de Consulta
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Trauma y Reprocesamiento EMDR
                </Link>
              </li>
              <li>
                <Link href="/ansiedad" className="text-gray-300 hover:text-white transition-colors">
                  Ansiedad, Estrés y Pánico
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Gestión de la Ira y Frustración
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Terapia y Crisis de Pareja
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Factores Humanos y Empresas
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: El Proyecto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-psicopiloto-green-400 mb-4">
              El Proyecto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/sobre-mi" className="text-gray-300 hover:text-white transition-colors">
                  Sobre José Carlos
                </Link>
              </li>
              <li>
                <Link href="/que-es-psicopiloto" className="text-gray-300 hover:text-white transition-colors">
                  ¿Qué es Psicopiloto?
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Agenda de Citas y Tarifas
                </Link>
              </li>
              <li>
                <a 
                  href="https://share.google/7GKlTrF0YTfa8pGSq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Opiniones de Pacientes ★★★★★
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Cabina de Contacto y Atención */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-psicopiloto-green-400 mb-4">
              Atención al Paciente
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-psicopiloto-green-400 flex-shrink-0" />
                <a href="tel:+34676230537" className="hover:text-white transition-colors">676 230 537</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-psicopiloto-green-400 flex-shrink-0" />
                <a href="mailto:info@psicopiloto.com" className="hover:text-white transition-colors">info@psicopiloto.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FaBrowse className="hidden" /> {/* Espaciador estético */}
                <span className="text-xs text-gray-400">Atención bajo cita previa.</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-psicopiloto-gray-600">
              <a
                href="https://wa.me/34676230537"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer"
              >
                <FaWhatsapp className="text-base" /> WhatsApp Directo
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 🚀 Franja Inferior: Legales y Copyright (RGPD Compliant) */}
      <div className="bg-psicopiloto-gray-800 py-6 border-t border-psicopiloto-gray-600 text-xs text-gray-400">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          <div>
            <p>&copy; {currentYear} Psicopiloto. Todos los derechos reservados.</p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Inscrita en el registro de Centros y Establecimientos Sanitarios de Andalucía.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-medium">
            <Link href="/aviso-legal" className="hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white">
              Aviso Legal y Privacidad
            </Link>
            <span className="text-gray-600 hidden md:inline">•</span>
            <Link href="/politica-cookies" className="hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white">
              Política de Cookies
            </Link>
            <span className="text-gray-600 hidden md:inline">•</span>
            <Link href="/consentimiento" className="hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white">
              Consentimiento Informado
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
