import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip con flecha */}
      <div
        className={`relative mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg shadow-lg transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        Escríbeme por WhatsApp
        {/* Flecha */}
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>

      {/* Botón */}
      <a
        href="https://wa.me/34676230537"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
