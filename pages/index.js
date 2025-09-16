import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16">
        {/* HERO con imagen de fondo */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/fotoinicio1.png"
            alt="Psicólogo online en Granada - Psicopiloto"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="container mx-auto text-white z-20 relative">
            <div className="bg-black/40 p-8 rounded-lg max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Tu copiloto en el viaje hacia el bienestar
              </h1>
              <p className="mb-6 text-lg">
                ¿Te sientes superado por la ansiedad, el estrés o las dudas sobre ti mismo?
                En <strong>Psicopiloto</strong> encontrarás un espacio para recuperar la calma
                y retomar el control de tu vida.
              </p>
              <Link href="/contacto">
                <span className="inline-block px-6 py-3 rounded-lg bg-softorange-500 text-white">
                  Reserva tu primera consulta
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">¿Quién soy?</h2>
            <p>
              Soy <strong>psicólogo con Habilitación Sanitaria</strong>, especializado en{" "}
              <strong>trauma, EMDR y psicología aeronáutica</strong>. Durante más de
              18 años trabajé como <strong>piloto militar e instructor</strong>, donde
              aprendí que la gestión emocional, la toma de decisiones bajo presión y
              el trabajo en equipo son clave para mantener la seguridad.
            </p>
            <p>
              Hoy aplico esa experiencia en la consulta, combinando disciplina,
              empatía y herramientas prácticas para tu bienestar.
            </p>
          </div>
        </section>

        {/* EN QUÉ TE PUEDO AYUDAR */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">
              En qué te puedo ayudar
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Ansiedad y estrés:</strong> insomnio, tensión,
                    preocupaciones constantes.
                  </li>
                  <li>
                    <strong>Depresión y bajo estado de ánimo:</strong> falta de
                    motivación, tristeza, apatía.
                  </li>
                  <li>
                    <strong>Problemas de autoestima y apego:</strong> inseguridad,
                    dificultad para poner límites.
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Trauma y experiencias difíciles:</strong> recuerdos
                    dolorosos, bloqueos emocionales.
                  </li>
                  <li>
                    <strong>Terapia de pareja:</strong> conflictos, discusiones,
                    pérdida de confianza.
                  </li>
                  <li>
                    <strong>Psicología aeronáutica:</strong> gestión del estrés,
                    fatiga y rendimiento en profesionales de la aviación.
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/servicios">
                <span className="px-6 py-3 bg-psicopiloto-500 text-white rounded-lg">
                  Ver servicios
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CITA ONLINE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Beneficios de la terapia online
            </h2>
            <p>
              La consulta online te permite acceder a terapia desde tu casa, sin
              desplazamientos y con total comodidad. Solo necesitas un dispositivo
              con conexión a internet.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mayor flexibilidad horaria.</li>
              <li>Privacidad y confidencialidad garantizadas.</li>
              <li>Acceso desde cualquier lugar, ideal si viajas o vives fuera de Granada.</li>
              <li>La misma eficacia que la consulta presencial.</li>
            </ul>
            <div className="text-center mt-6">
              <Link href="/contacto">
                <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg">
                  Pide tu cita online
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* MI FORMA DE TRABAJAR */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Mi forma de trabajar
            </h2>
            <p>
              Uso un enfoque de <strong>psicoterapia breve e integradora</strong>,
              centrado en desbloquear experiencias pasadas y fomentar el
              crecimiento personal. Integro técnicas como{" "}
              <strong>EMDR</strong>, que ayudan a reducir la carga emocional de los
              recuerdos traumáticos y a recuperar el equilibrio.
            </p>
            <p>
              Mi objetivo: que te sientas acompañado, escuchado y con herramientas
              para afrontar los retos de tu día a día.
            </p>
          </div>
        </section>

        {/* MÁS ALLÁ DE LA CONSULTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Más allá de la consulta
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Profesor en el <strong>Experto en Psicología Aeronáutica</strong>{" "}
                del Colegio Oficial de la Psicología de Madrid.
              </li>
              <li>
                Tutor de <strong>Trabajos de Fin de Experto (TFE)</strong>.
              </li>
              <li>
                Psicólogo voluntario en <strong>Amalgama Social</strong>,
                atendiendo a personas en situaciones de vulnerabilidad.
              </li>
            </ul>
          </div>
        </section>

        {/* CIERRE / CTA */}
        <section className="py-20 bg-psicopiloto-500 text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu copiloto en el viaje hacia el bienestar
            </h2>
            <p className="mb-8 text-lg">
              Igual que un copiloto en cabina, estaré a tu lado en la turbulencia,
              ayudándote a recuperar el control y a volver a sentirte al mando de
              tu vida.
            </p>
            <Link href="/contacto">
              <span className="inline-block px-6 py-3 rounded-lg bg-white text-psicopiloto-600 font-semibold">
                Pide tu cita ahora
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

