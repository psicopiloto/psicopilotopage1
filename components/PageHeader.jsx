import Image from "next/image";

export default function PageHeader({ title, subtitle, backgroundImage }) {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center"
      role="banner"
      aria-label={`Encabezado de página: ${title}`}
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
        sizes="100vw"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
      <div className="container mx-auto text-center text-white z-20 relative px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
