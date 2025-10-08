// components/WhatsAppButton.jsx

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
// No hay import Head ni manipulación de DOM. Perfecto.

export default function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Mostrar el botón a los 1.5s
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    // Mostrar el tooltip a los 2.5s
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    // Ocultar el tooltip a los 8.5s
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8500);

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
        className={`relative mb-2 px-3 py-1 bg-psicopiloto-gray-700 text-white text-sm rounded-lg shadow-lg transition-all duration-500 ${
          showTooltip || hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        Escríbeme por WhatsApp
        {/* Flecha */}
        <div 
           className="absolute -bottom-1 right-4 w-2 h-2 bg-psicopiloto-gray-700 rotate-45"
           aria-hidden="true"
        ></div>
      </div>

      {/* Botón con aparición retrasada y rebote corto */}
      <a
        href="https://wa.me/34676230537"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          bg-psicopiloto-green-500 text-white p-4 rounded-full shadow-lg transition 
          hover:bg-psicopiloto-green-600 
          focus:outline-none focus:ring-4 focus:ring-psicopiloto-green-300 focus:ring-opacity-75
          transform
          ${showButton
            ? "scale-100 animate-bounce-once"
            : "scale-0 opacity-0"
          }
        `}
        aria-label="Contactar a Psicopiloto por WhatsApp para agendar una sesión"
      >
        <FaWhatsapp size={28} aria-hidden="true" />
      </a>
    </div>
  );
}
