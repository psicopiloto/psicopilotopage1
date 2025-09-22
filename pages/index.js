import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Psicólogo online y presencial en Granada | Psicopiloto"
        description="Psicopiloto ofrece psicoterapia online y presencial en Granada: ansiedad, estrés, depresión, autoestima, trauma, EMDR y terapia de pareja. Acompaño tu viaje hacia el bienestar emocional."
        canonical="https://psicopiloto.com/"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicólogo Granada, psicólogo online, terapia ansiedad, depresión, autoestima, trauma, EMDR, terapia de pareja, psicología integradora",
          },
          {
            name: "author",
            content: "Psicopiloto",
          },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicólogo online y presencial en Granada | Psicopiloto",
          description:
            "Psicopiloto ofrece psicoterapia online y presencial en Granada: ansiedad, estrés, depresión, autoestima, trauma, EMDR y terapia de pareja.",
          images: [
            {
              url: "https://psicopiloto.com/images/seo/home.jpg",
              width: 1200,
              height: 630,
              alt: "Psicólogo online y presencial en Granada - Psicopiloto",
              type: "image/jpeg",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

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
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Sobre mí</h2>
            <p className="leading-relaxed mb-4 text-psicopiloto-gray-500">
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

{/* FILOSOFÍA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Filosofía</h2>
            <p className="leading-relaxed mb-4 text-psicopiloto-gray-500">
              Igual que un copiloto apoya al piloto en momentos de turbulencia, yo estaré a tu lado para ayudarte a ver con más claridad, 
              tomar mejores decisiones y recuperar el rumbo. 
              La vida no siempre es un vuelo estable, pero con acompañamiento se hace más seguro y llevadero.
            </p>
            <Link href="/que-es-psicopiloto" legacyBehavior>
              <a className="px-6 py-2 bg-psicopiloto-blue-500 text-white rounded-lg font-medium shadow hover:bg-psicopiloto-blue-600 transition">
                Descubre la filosofía
              </a>
            </Link>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8 text-psicopiloto-gray-500">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Terapia individual</h3>
                <p>Ansiedad, estrés, duelo, autoestima. Sesiones de 45–60 minutos en modalidad online o presencial.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Terapia de pareja</h3>
                <p>Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Si eres empresa</h3>
                <p>Programas de bienestar, liderazgo consciente y prevención de errores, inspirados en valores de la aviación.</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/servicios" legacyBehavior>
                <a className="px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg font-medium shadow hover:bg-psicopiloto-green-600 transition">
                  Ver todos los servicios
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ÁREAS DE TRABAJO */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Ansiedad y estrés", desc: "Insomnio, tensión, preocupaciones constantes." },
                { title: "Depresión y ánimo bajo", desc: "Falta de motivación, tristeza o apatía." },
                { title: "Autoestima y apego", desc: "Inseguridad, dificultad para poner límites." },
                { title: "Terapia de pareja", desc: "Conflictos, discusiones, pérdida de confianza." },
                { title: "Trauma y experiencias difíciles", desc: "Recuerdos dolorosos, bloqueos emocionales, EMDR." },
                { title: "Si eres empresa", desc: "Ofrezco formación en factores humanos, liderazgo y gestión de equipos inspirada en la aviación (CRM, TEM, gestión del error), adaptada a las necesidades de tu organización. Mejorar la eficacia y eficiencia es posible." }
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg shadow-sm border border-psicopiloto-gray-500/10"
                >
                  <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                    {s.title}
                  </h3>
                  <p className="text-psicopiloto-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/servicios" legacyBehavior>
               <a className="px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg font-medium shadow hover:bg-psicopiloto-green-600 transition">
                  Descubre todos los servicios
                </a>
              </Link>
            </div>
          </div>
        </section>


        {/* TERAPIA ONLINE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Psicología online</h2>
            <p className="leading-relaxed mb-4 text-psicopiloto-gray-500">
              La terapia online no es un sustituto: es una alternativa igual de eficaz que la presencial, avalada por la experiencia y la evidencia científica. 
              Permite conectarte desde cualquier lugar, con horarios flexibles y la misma calidad profesional.
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
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-psicopiloto-sand-50 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="flex-none w-10 h-10 rounded-full bg-psicopiloto-green-500 text-white inline-flex items-center justify-center">
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
                  <p className="leading-relaxed text-psicopiloto-gray-500">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-psicopiloto-gray-500 mb-4">
                ¿Te interesa la comodidad y eficacia de la terapia online?
              </p>
              <Link href="/servicios#online" legacyBehavior>
                <a className="inline-block px-6 py-3 bg-psicopiloto-green-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  Quiero una consulta online
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Da el primer paso</h2>
            <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">
              No tienes que hacerlo todo hoy ni solo. A veces lo más difícil es animarse a empezar, pero también es el paso que abre nuevas posibilidades. 
              Estoy aquí para escucharte y acompañarte en tu viaje.
            </p>
            <Link href="/contacto" legacyBehavior>
              <a className="px-6 py-3 bg-psicopiloto-blue-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-psicopiloto-blue-600 transition">
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
