// /components/BackgroundLogo.jsx
import Image from "next/image"; // ✨ CAMBIO CRÍTICO: Importar el componente Image de Next.js

export default function BackgroundLogo() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <Image // ✨ CAMBIO CRÍTICO: Usar <Image> en lugar de <img>
        src="/logo.webp"
        alt="Psicopiloto logo de fondo en marca de agua"
        width={500} // Se añade width/height para el placeholder y optimización
        height={500}
        className="max-w-[500px] w-2/3 h-auto"
        loading="lazy"
      />
    </div>
  );
}
