// components/WhatsAppButton.jsx

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
// Importar 'Link' de Next.js si se necesita navegación interna,
// pero aquí usamos 'a' ya que es un enlace externo (WhatsApp).

export default function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // La estrategia de retraso y tooltip es excelente para la conversión.

    // Mostrar el botón a los 1.5s (reducido para LCP y UX)
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1500); // ✨ CORRECCIÓN A: Se reduce el delay de 3s a 1.5s para aparecer más rápido.

    // Mostrar el tooltip a los 2.5s (después de que aparece el botón)
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500); // ✨ CORRECCIÓN A: Se reduce el delay.

    // Ocultar el tooltip a los 8.5s (después de 6s de visibilidad)
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8500); // Reducir a 8.5s para no saturar.

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
        // ✨ CORRECCIÓN B: Se mejora el contraste del texto para accesibilidad (WCAG AA). 
        // Se utiliza 'bg-psicopiloto-gray-700' si existe, o un negro puro.
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
           aria-hidden="true" // ✨ CORRECCIÓN C: La flecha es decorativa, ocultar de lectores de pantalla.
        ></div>
      </div>

      {/* Botón con aparición retrasada y rebote corto */}
      <a
        href="https://wa.me/34676230537"
        target="_blank"
        rel="noopener noreferrer"
        // ✨ CORRECCIÓN D: Mejoras de diseño y accesibilidad (foco/contraste)
        // Se usa `psicopiloto-green-500` para coherencia con tu paleta.
        // Se añade `focus:ring` para accesibilidad con teclado.
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
        aria-label="Contactar a Psicopiloto por WhatsApp para agendar una sesión" // ✨ CORRECCIÓN E: Mejora la descripción del aria-label.
      >
        <FaWhatsapp size={28} aria-hidden="true" /> {/* ✨ CORRECCIÓN C: El icono es decorativo. */}
      </a>
    </div>
  );
}
