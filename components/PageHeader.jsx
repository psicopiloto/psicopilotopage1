import Image from "next/image";

export default function PageHeader({ title, subtitle, image }) {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center text-center">
      {/* Imagen de fondo */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover brightness-50"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-psicopiloto-green-900/40" />
      {/* Texto */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
