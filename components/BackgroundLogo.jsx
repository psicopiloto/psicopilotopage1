// /components/BackgroundLogo.jsx
import Image from "next/image"; 

export default function BackgroundLogo() {
  return (
    <div
      // 🚀 CORRECCIÓN: Cambiado a opacity-10 para que el logo se vea MÁS (10% visible)
      className="fixed inset-0 flex items-center justify-center opacity-8 pointer-events-none select-none z-0" 
      aria-hidden="true"
    >
      <Image
        src="/logo.webp"
        alt="Psicopiloto logo de fondo en marca de agua"
        width={500} 
        height={500}
        className="max-w-[500px] w-2/3 h-auto"
        loading="lazy"
      />
    </div>
  );
}
