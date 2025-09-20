import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-10 text-center text-psicopiloto-green-600">
            Psicopiloto: uniendo aviación y psicología para transformar personas y organizaciones
          </h1>

          {/* ¿Qué es Psicopiloto? */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-gray-700">¿Qué es Psicopiloto?</h2>
                <p className="text-psicopiloto-gray-500">
                  Psicopiloto es un proyecto único que nace de la unión de mis dos grandes pasiones: la{" "}
                  <strong>aviación</strong> y la <strong>psicología</strong>. Tras más de 18 años de
                  experiencia como piloto militar, comandante en misiones de alto riesgo, instructor de vuelo
                  y formador en gestión de recursos de tripulación (CRM) y factores humanos, decidí dar un
                  paso más: trasladar todo ese conocimiento al ámbito de la psicología y el desarrollo humano.
                </p>
                <p className="mt-4 text-psicopiloto-gray-500">
                  Del mismo modo que en la cabina de un avión cada decisión puede marcar la diferencia, en la
                  vida personal y profesional también necesitamos herramientas para gestionar la presión,
                  comunicarnos eficazmente, tomar decisiones conscientes y trabajar en equipo.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Qué es Psicopiloto"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Misión y Visión */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Image
                src="/sobre2.jpg"
                alt="Misión y visión Psicopiloto"
                width={600}
                height={400}
                className="rounded-lg shadow-md order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-gray-700">Nuestra misión</h2>
                <p className="text-psicopiloto-gray-500">
                  Acompañar a las personas y organizaciones en su viaje, integrando lo mejor de la psicología
                  clínica con los valores y metodologías de la aviación. Buscamos que desarrolles habilidades
                  prácticas que te permitan afrontar retos, ganar confianza y vivir con mayor bienestar y
                  seguridad.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4 text-psicopiloto-gray-700">Nuestra visión</h2>
                <p className="text-psicopiloto-gray-500">
                  Convertirnos en un referente en psicología integradora y aplicada, reconocidos por un enfoque
                  humano, práctico y transformador, capaz de inspirar a las personas y a los equipos a superar
                  cualquier turbulencia con resiliencia y confianza.
                </p>
              </div>
            </div>
          </section>

          {/* Qué te ofrece Psicopiloto */}
          <section className="mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-gray-700">¿Qué te ofrece Psicopiloto?</h2>
              <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-500">
                <li>
                  <strong>Terapia individual:</strong> un espacio seguro para gestionar ansiedad, estrés,
                  autoestima, trauma o dificultades en las relaciones. Basado en un enfoque de terapia
                  integradora, con técnicas como la terapia cognitivo-conductual, humanista, sistémica y EMDR.
                </li>
                <li>
                  <strong>Psicología aplicada a empresas:</strong> programas de liderazgo, comunicación, gestión
                  de errores y trabajo en equipo, inspirados en los modelos CRM (Crew Resource Management) y TEM
                  (Threat and Error Management).
                </li>
                <li>
                  <strong>Asesoramiento en factores humanos:</strong> aplicamos metodologías de la aviación para
                  mejorar la seguridad, eficiencia y eficacia en entornos corporativos.
                </li>
              </ul>
            </div>
          </section>

          {/* Valores */}
          <section className="mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-gray-700">Valores que nos guían</h2>
              <p className="text-psicopiloto-gray-500">
                La aviación me enseñó principios que hoy aplico en psicoterapia y consultoría empresarial:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-psicopiloto-gray-500">
                <li>
                  <strong>Humildad:</strong> aprender siempre y reconocer los errores como oportunidad.
                </li>
                <li>
                  <strong>Trabajo en equipo:</strong> apoyar al compañero para lograr objetivos comunes.
                </li>
                <li>
                  <strong>Resiliencia:</strong> adaptarse y crecer tras la adversidad.
                </li>
                <li>
                  <strong>Cultura justa:</strong> aprender de los errores para mejorar la seguridad y la eficacia.
                </li>
              </ul>
            </div>
          </section>

          {/* Psicopiloto para empresas */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-gray-700">Psicopiloto para empresas</h2>
                <p className="text-psicopiloto-gray-500">
                  En un mundo empresarial cada vez más complejo, los equipos necesitan confianza, cohesión y
                  liderazgo positivo. Desde Psicopiloto ayudamos a las organizaciones a:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-psicopiloto-gray-500">
                  <li>Reducir errores y aumentar la eficiencia.</li>
                  <li>Fomentar una comunicación clara y honesta.</li>
                  <li>Desarrollar líderes resilientes y equipos colaborativos.</li>
                  <li>
                    Implantar una cultura organizacional basada en el aprendizaje, no en la culpa.
                  </li>
                </ul>
                <p className="mt-4 text-psicopiloto-gray-500">
                  Los mismos principios que hacen que un vuelo sea seguro y exitoso pueden transformar también tu
                  empresa, impulsando su rendimiento y reduciendo costes derivados de errores y falta de
                  coordinación.
                </p>
              </div>
              <Image
                src="/sobre3.jpg"
                alt="Psicopiloto para empresas"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Psicopiloto para ti */}
          <section className="mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-gray-700">Psicopiloto para ti</h2>
              <p className="text-psicopiloto-gray-500">
                Si lo que buscas es crecer a nivel personal, mejorar tu bienestar emocional o superar un momento
                difícil, en Psicopiloto encontrarás un acompañamiento cercano y práctico. El objetivo es que
                aprendas a pilotar tu vida con seguridad, ganando autoconfianza y herramientas aplicables a tu día
                a día.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-6 text-psicopiloto-gray-700">Da el primer paso</h2>
            <p className="mb-6 text-psicopiloto-gray-500">
              Ya sea para tu desarrollo personal o para fortalecer a tu equipo, Psicopiloto es el puente entre la
              psicología y la aviación que te ayudará a alcanzar tus objetivos.
            </p>
            <Link href="/contacto" legacyBehavior>
              <a className="px-6 py-3 bg-psicopiloto-green-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                👉 Contacta hoy mismo
              </a>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
