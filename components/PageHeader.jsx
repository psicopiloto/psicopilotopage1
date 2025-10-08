// components/PageHeader.jsx

import Image from "next/image";
import AnimatedCTA from "./AnimatedCTA";

export default function PageHeader({ title, subtitle, backgroundImage, cta }) {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center"
      role="banner"
      // Aseguramos que el encabezado tiene una etiqueta de accesibilidad clara
      aria-label={`Encabezado principal: ${title}`} 
    >
      {/* Imagen de fondo optimizada (CRÍTICA para LCP) */}
      <Image
        src={backgroundImage} 
        // Es vital que el ALT describa visualmente la imagen para accesibilidad.
        alt="Psicólogo profesional, ex-piloto, sonriendo" // Usar una descripción visual y no solo SEO
        fill
        style={{ objectFit: "cover" }}
        priority 
      />

      {/* Capa oscura encima para mejorar contraste del texto blanco */}
      <div className="absolute inset-0 bg-psicopiloto-gray-700/40 z-10" />

      {/* Contenido de texto */}
      <div className="container mx-auto text-center text-white z-20 relative px-4">
        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}

        {cta && (
          <AnimatedCTA href={cta.href} text={cta.text} color={cta.color} />
        )}
      </div>
    </section>
  );
}
