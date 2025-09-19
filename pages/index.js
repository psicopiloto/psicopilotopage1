import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Agenda tu primera cita
              </span>
            </Link>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soy psicólogo clínico con una trayectoria poco común: antes fui piloto militar e instructor. 
              De la aviación aprendí valores como la humildad, el trabajo en equipo y la gestión de errores. 
              Ahora los aplico a la psicología para acompañarte en tu propio viaje vital.
            </p>
            <Link href="/sobre">
              <span className="px-6 py-2 bg-softorange-500 text-white rounded-lg font-medium shadow hover:bg-softorange-600 transition">
                Conóceme mejor
              </span>
            </Link>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-2">Terapia individual</h3>
                <p className="mb-4">
                  Ansiedad, estrés, duelo, autoestima. Sesiones de 45–60 minutos en modalidad online o presencial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Terapia de pareja</h3>
                <p className="mb-4">
                  Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Infancia y adolescencia</h3>
                <p className="mb-4">
                  Acompañamiento emocional y educativo, con la familia y la escuela como parte activa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Si eres empresa</h3>
                <p className="mb-4">
                  Programas de bienestar, liderazgo consciente y prevención de errores, inspirados en valores de la aviación.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/servicios">
                <span className="px-6 py-2 bg-softorange-500 text-white rounded-lg font-medium shadow hover:bg-softorange-600 transition">
                  Ver todos los servicios
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* TERAPIA ONLINE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Psicología online</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La terapia online no es un sustituto: es una alternativa igual de eficaz que la presencial, avalada por la experiencia y la evidencia científica. 
              Permite conectarte desde cualquier lugar, con horarios flexibles y la misma calidad profesional.
            </p>
            <ul className="text-gray-700 mb-6 list-disc list-inside text-left inline-block">
              <li>Comodidad: conéctate desde tu casa o tu oficina.</li>
              <li>Flexibilidad horaria y continuidad incluso en viajes.</li>
              <li>Confidencialidad total con plataformas seguras.</li>
              <li>Accesibilidad para personas en cualquier lugar.</li>
            </ul>
            <Link href="/servicios#online">
              <span className="px-6 py-2 bg-softorange-500 text-white rounded-lg font-medium shadow hover:bg-softorange-600 transition">
                Quiero una consulta online
              </span>
            </Link>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Filosofía</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Igual que un copiloto apoya al piloto en momentos de turbulencia, yo estaré a tu lado para ayudarte a ver con más claridad, 
              tomar mejores decisiones y recuperar el rumbo. 
              La vida no siempre es un vuelo estable, pero con acompañamiento se hace más seguro y llevadero.
            </p>
            <Link href="/que-es-psicopiloto">
              <span className="px-6 py-2 bg-softorange-500 text-white rounded-lg font-medium shadow hover:bg-softorange-600 transition">
                Descubre la filosofía
              </span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Da el primer paso</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              No tienes que hacerlo todo hoy ni solo. A veces lo más difícil es animarse a empezar, pero también es el paso que abre nuevas posibilidades. 
              Estoy aquí para escucharte y acompañarte en tu viaje.
            </p>
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Contacta
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
