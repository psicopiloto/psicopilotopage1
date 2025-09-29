// components/PageHeader.jsx

import Image from "next/image";
import AnimatedCTA from "./AnimatedCTA";

export default function PageHeader({ title, subtitle, backgroundImage, cta }) {
  // Extraemos la parte comercial del H1 para un ALT más descriptivo y SEO
  const altText = title.includes('|') 
    ? title.split('|')[0].trim() + ' | Psicopiloto'
    : title;
  
  return (
    <section
      // La altura de 70vh es buena, pero asegúrate que el texto no se corte en móviles pequeños.
      className="relative h-[70vh] flex items-center justify-center"
      role="banner"
      // ✨ CORRECCIÓN A: Usar una descripción más específica para el rol banner, o el title.
      aria-label={`Encabezado principal: ${title}`} 
    >
      {/* Imagen de fondo optimizada */}
      <Image
        // Tu lógica de .webp es buena, pero Next.js ya lo gestiona con 'fill'.
        src={backgroundImage} 
        // ✨ CORRECCIÓN B: El 'alt' debe describir la imagen visualmente para A11Y. 
        // Ya tienes el SEO en el H1. Si la imagen muestra un avión/piloto, descríbelo:
        alt="Psicólogo profesional, ex-piloto, sonriendo | Psicopiloto" // Reemplaza esto con una descripción visual real de la foto.
        fill
        style={{ objectFit: "cover" }}
        priority 
        // ✅ MUY BIEN: 'priority' es CRUCIAL aquí para el LCP.
      />

      {/* Capa oscura encima para mejorar contraste */}
      {/* ✨ CORRECCIÓN C: Usar un color de la paleta para la coherencia (Ej: el gris de tu paleta). */}
      {/* El 40% de opacidad es bueno para el contraste del texto blanco. */}
      <div className="absolute inset-0 bg-psicopiloto-gray-700/40 z-10" />

      {/* Contenido de texto */}
      <div className="container mx-auto text-center text-white z-20 relative px-4">
        {/* H1 ya corregido en pages/index.js: Psicólogo online... */}
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
