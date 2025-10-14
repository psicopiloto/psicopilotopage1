// components/CuadroContacto.js
import Link from "next/link";
import Image from "next/image"; // ✨ CAMBIO CRÍTICO: Importar Image

export default function CuadroContacto() {
  return (
    <div className="relative bg-white/80 shadow-lg rounded-2xl p-10 max-w-3xl mx-auto mt-20 overflow-visible">
      {/* Imagen flotante en la esquina inferior derecha */}
      <div className="absolute -bottom-12 -left-50 hidden md:block z-0">
        <Image // ✨ CAMBIO CRÍTICO: Usar <Image> en lugar de <img>
          src="/telefono.webp" // 📌 pon aquí tu imagen (mejor .png con transparencia)
          alt="Teléfono contacto Psicopiloto"
          width={220} // Se estima un tamaño
          height={220} // Se estima un tamaño
          className="w-55 h-55 object-contain drop-shadow-xl opacity-90"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-psicopiloto-blue-900 mb-4">
          Da el primer paso hacia tu bienestar
        </h2>
        <p className="text-lg text-psicopiloto-gray-700 leading-relaxed mb-6">
          Tras una llamada o un mensaje encontrarás la ayuda que necesitas.
          Aquí te espera un espacio seguro y cercano para empezar a descansar
          de tus preocupaciones.
        </p>

        {/* CTA */}
        <div>
          {/* ✨ CAMBIO CRÍTICO: Estructura moderna de Link (sin <a> anidada) */}
          <Link 
            href="/contacto"
            className="px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg text-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto-green-500"
          >
            Reserva tu primera consulta
          </Link>
        </div>
      </div>
    </div>
  );
}
