// components/CuadroContacto.js
import Link from "next/link";

export default function CuadroContacto() {
  return (
    <div className="relative bg-white/80 shadow-lg rounded-2xl p-8 max-w-3xl mx-auto mt-16">
      {/* Imagen flotante */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden md:block">
        <img
          src="/telefono.webp" // 📌 coloca aquí tu imagen en /public
          alt="Teléfono contacto Psicopiloto"
          className="w-40 h-40 object-contain drop-shadow-xl"
        />
      </div>

      {/* Contenido */}
      <h2 className="text-3xl font-bold text-psicopiloto-blue-900 mb-4 text-center md:text-left">
        Da el primer paso hacia tu bienestar
      </h2>
      <p className="text-lg text-psicopiloto-gray-700 leading-relaxed mb-6 text-center md:text-left">
        Has dado el paso más difícil, llegar hasta aquí. Tras una llamada o un mensaje encontrarás un espacio
    seguro y cercano donde ser escuchado. Estoy aquí para acompañarte en tu
    proceso y ayudarte a recuperar la calma.
      </p>

      {/* CTA */}
      <div className="text-center md:text-left">
        <Link href="/contacto">
          <span className="px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg text-lg font-semibold shadow transition">
            Ponte en contacto hoy mismo
          </span>
        </Link>
      </div>
    </div>
  );
}
