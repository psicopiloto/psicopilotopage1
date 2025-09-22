import Image from "next/image";

export default function PageHeader({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="
        relative 
        h-[55vh] md:h-[70vh]   /* móvil un poco más bajo */
        flex items-center justify-center
      "
    >
      {/* Imagen de fondo */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="
          object-cover 
          object-bottom md:object-center   /* móvil abajo, desktop centrado */
        "
        priority
      />

      {/* Capa oscura encima */}
      <div className="absolute inset-0 bg-black/40 z-10" />

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
