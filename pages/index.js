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
              Soy psicólogo con una trayectoria poco común: antes fui <strong>piloto militar de los aviones apagafuegos del 43 Grupo de FF.AA.</strong> 
              De la aviación aprendí valores como la humildad, el trabajo en equipo y la gestión de errores. 
              Ahora los aplico a la psicología para acompañarte en tu propio viaje vital. Hoy acompaño a personas en su camino de crecimiento personal y
              bienestar emocional, combinando mi formación en{" "}
              <strong>psicología integradora</strong>, <strong>trauma</strong> y{" "}
              <strong>EMDR</strong>, con una visión clara: cada persona es única y
              merece ser escuchada con respeto y cercanía.
            </p>
            <Link href="/sobre-mi">
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


  {/* SERVICIOS 2 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Ansiedad y estrés</h3>
                <p>Insomnio, tensión, preocupaciones constantes.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Depresión y ánimo bajo</h3>
                <p>Falta de motivación, tristeza o apatía.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Autoestima y apego</h3>
                <p>Inseguridad, dificultad para poner límites.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Terapia de pareja</h3>
                <p>Conflictos, discusiones, pérdida de confianza.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-2">
                <h3 className="font-semibold text-xl mb-2">Trauma y experiencias difíciles</h3>
                <p>Recuerdos dolorosos, bloqueos emocionales, EMDR.</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/servicios">
                <span className="px-5 py-3 bg-psicopiloto-500 text-white rounded-lg shadow hover:bg-psicopiloto-600 transition">
                  Descubre todos los servicios
                </span>
              </Link>
            </div>
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

        {/* TERAPIA ONLINE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Psicología online</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La terapia online no es un sustituto: es una alternativa igual de eficaz que la presencial, avalada por la experiencia y la evidencia científica. 
              Permite conectarte desde cualquier lugar, con horarios flexibles y la misma calidad profesional.
            </p>
            <ul className="text-gray-700 mb-6 list-disc list-inside text-left mx-auto max-w-md">
              <li>✔️Comodidad: conéctate desde tu casa o tu oficina.</li>
              <li>✔️Flexibilidad horaria y continuidad incluso en viajes.</li>
              <li>✔️ La misma confidencialidad y calidad que en persona.</li>
              <li>✔️Accesibilidad para personas en cualquier lugar.</li>
            </ul>
          <p className="text-gray-700">
              La distancia  y la mivilidad no son un obstáculo para tu bienestar. Con la terapia online, 
              el acompañamiento llega hasta donde tú estés.
            </p>

          
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        "Comodidad: conéctate desde casa, oficina o de viaje.",
        "Ahorro de tiempo: sin desplazamientos ni esperas.",
        "Flexibilidad horaria: sesiones adaptadas a tu agenda.",
        "Continuidad: no interrumpes la terapia aunque cambies de ciudad.",
        "Accesibilidad: ideal para zonas rurales o residentes en el extranjero.",
        "Confidencialidad garantizada con plataformas seguras.",
        "Evidencia científica: tan eficaz como la presencial en muchos casos.",
        "Menor ansiedad inicial al hablar desde un entorno familiar.",
        "Acceso a especialistas sin importar la distancia.",
        "Mayor regularidad: facilita mantener la frecuencia de sesiones.",
        "Reducción de costes indirectos: transporte y tiempo.",
        "Rapidez: a menudo hay citas disponibles con más inmediatez."
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <span className="flex-none w-10 h-10 rounded-full bg-softorange-500 text-white inline-flex items-center justify-center">
            {/* simple SVG check icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-gray-700 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>

    {/* pequeño separador y CTA centrado */}
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-500 mb-4">
        ¿Te interesa la comodidad y eficacia de la terapia online?
      </p>
      <Link href="/servicios#online">
        <a className="inline-block px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
          Quiero una consulta online
        </a>
      </Link>
    </div>
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
