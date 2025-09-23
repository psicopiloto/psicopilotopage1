import Image from "next/image";

export default function PageHeader({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center"
      role="banner"
      aria-label={`Encabezado de página: ${title}`}
    >
      {/* Imagen de fondo optimizada */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
        sizes="100vw"
        className="z-0"
      />

      {/* Capa oscura encima para contraste */}
      <div
        className="absolute inset-0 bg-black/40 z-10"
        aria-hidden="true"
      />

      {/* Contenido de texto */}
      <div className="container mx-auto text-center text-white z-20 relative px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/* Cambios y optimizaciones aplicadas:
- Mantiene role="banner" y aria-label para accesibilidad.
- Imagen decorativa con alt="" y sizes="100vw" para responsive y LCP.
- Capa oscura con aria-hidden para no interferir con screen readers.
- Añadida clase z-0 a la imagen para claridad en capas.
Sugerencias opcionales:
- Breadcrumbs debajo del título para mejorar navegación y SEO.
- Microdata/JSON-LD de tipo WebPage en <Head> con el título de la página.
*/
