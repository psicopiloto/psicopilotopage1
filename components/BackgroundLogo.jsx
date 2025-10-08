// /components/BackgroundLogo.jsx

import Image from "next/image"; // ⬅️ AÑADIDA IMPORTACIÓN

export default function BackgroundLogo() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 🚀 CORRECCIÓN: Usar el componente Image de Next.js 🚀 */}
      <Image
        src="/logo.webp"
        alt="Psicopiloto logo de fondo"
        width={500} // Definición de ancho necesaria
        height={500} // Definición de alto necesaria
        className="max-w-[500px] w-2/3 h-auto"
        loading="lazy" // Es un fondo, la carga diferida es adecuada
      />
    </div>
  );
}
