import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Mostrar el botón a los 3s
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    // Mostrar el tooltip a los 4s
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Ocultar el tooltip a los 10s
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip con aparición automática + hover */}
      <div
        className={`relative mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg shadow-lg transition-all duration-500 ${
          showTooltip || hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        Escríbeme por WhatsApp
        {/* Flecha */}
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>

      {/* Botón con aparición retrasada y rebote */}
      <a
        href="https://wa.me/34676230537"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform ${
          showButton
            ? "scale-100 animate-bounce"
            : "scale-0 opacity-0"
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
