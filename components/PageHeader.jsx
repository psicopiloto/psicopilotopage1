// components/PageHeader.jsx

import Image from "next/image";
import AnimatedCTA from "./AnimatedCTA";

export default function PageHeader({ title, subtitle, backgroundImage, cta }) {
  // Este es un alt genérico de ejemplo, cámbialo por una descripción visual real de la foto:
  const finalAltText = title.includes('Psicólogo') 
    ? "Psicólogo profesional, ex-piloto, sonriendo | Psicopiloto" 
    : "Imagen de fondo para la sección principal";


  return (
    <section
      // ✨ CAMBIO: Añadir pt-16 para evitar que el nav fijo lo tape.
      className="relative h-[70vh] flex items-center justify-center pt-16" 
      role="banner"
      aria-label={`Encabezado principal: ${title}`} 
    >
      {/* Imagen de fondo optimizada (Componente Image) */}
      <Image
        src={backgroundImage} 
        alt={finalAltText} 
        fill
        style={{ objectFit: "cover" }}
        priority // CRUCIAL para el LCP (Largest Contentful Paint)
      />

      {/* Capa oscura encima para mejorar contraste */}
      <div className="absolute inset-0 bg-psicopiloto-gray-700/40 z-10" />

      {/* Contenido de texto */}
      <div className="container mx-auto text-center text-white z-20 relative px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl font-medium mb-8 drop-shadow-md">
            {subtitle}
          </p>
        )}

        {cta && (
          <AnimatedCTA
            href={cta.href}
            text={cta.text}
            color={cta.color || "green"}
          />
        )}
      </div>
    </section>
  );
}
