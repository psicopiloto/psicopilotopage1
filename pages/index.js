import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />
      <main className="flex-grow pt-16">
        
        {/* HERO */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/fotoinicio1.jpg"
            alt="Psicólogo online en Granada - Psicopiloto"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="container mx-auto text-center text-white z-20 relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Psicopiloto — Acompaño tu viaje hacia el bienestar
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Un espacio seguro, cercano y profesional para que recuperes control, calma y sentido en tu vida. 
              Aquí encontrarás escucha, empatía y herramientas prácticas para afrontar tus retos con confianza.
            </p>
            <Link href="/contacto" legacyBehavior>
              <a className="px-6 py-3 bg-psicopiloto-green-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                Agenda tu primera cita
              </a>
            </Link>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-psicopiloto-gray-700 mb-6">Sobre mí</h2>
            <p className="text-psicopiloto-gray-500 leading-relaxed mb-4">
              Soy psicólogo con una trayectoria poco común: antes fui <strong>piloto militar de los aviones apagafuegos del 43 Grupo de FF.AA.</strong> 
              De la aviación aprendí valores como la humildad, el trabajo en equipo y la gestión de errores. 
              Ahora los aplico a la psicología para acompañarte en tu propio viaje vital. Hoy acompaño a personas en su camino de crecimiento personal y
              bienestar emocional, combinando mi formación en{" "}
              <strong>psicología integradora</strong>, <strong>trauma</strong> y{" "}
              <strong>EMDR</strong>, con una visión clara: cada persona es única y
              merece ser escuchada con respeto y cercanía.
            </p>
            <Link href="/sobre-mi" legacyBehavior>
              <a className="px-6 py-2 bg-psicopiloto-blue-500 text-white rounded-lg font-medium shadow hover:bg-psicopiloto-blue-600 transition">
                Conóceme mejor
              </a>
            </Link>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold text-psicopiloto-gray-700 mb-6">Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8 text-psicopiloto-gray-500">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Terapia individual</h3>
                <p className="mb-4">
                  Ansiedad, estrés, duelo, autoestima. Sesiones de 45–60 minutos en modalidad online o presencial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Terapia de pareja</h3>
                <p className="mb-4">
                  Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Si eres empresa</h3>
                <p className="mb-4">
                  Programas de bienestar, liderazgo consciente y prevención de errores, inspirados en valores de la aviación.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/servicios" legacyBehavior>
                <a className="px-6 py-2 bg-psicopiloto-blue-500 text-white rounded-lg font-medium shadow hover:bg-psicopiloto-blue-600 transition">
                  Ver todos los servicios
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-psicopiloto-gray-700 mb-6">Da el primer paso</h2>
            <p className="text-psicopiloto-gray-500 leading-relaxed mb-6">
              No tienes que hacerlo todo hoy ni solo. A veces lo más difícil es animarse a empezar, pero también es el paso que abre nuevas posibilidades. 
              Estoy aquí para escucharte y acompañarte en tu viaje.
            </p>
            <Link href="/contacto" legacyBehavior>
              <a className="px-6 py-3 bg-psicopiloto-green-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                Contacta
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
