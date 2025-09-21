import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader"; // ✅ nuevo import

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NextSeo
        title="¿Qué es Psicopiloto? | Psicología y aviación para transformar vidas"
        description="Psicopiloto une la psicología con la aviación para ofrecer terapia individual, programas de empresa y consultoría en factores humanos. Un enfoque único para crecer personal y profesionalmente."
        canonical="https://psicopiloto.com/que-es-psicopiloto"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "qué es Psicopiloto, psicología aviación, psicólogo Granada, terapia individual, psicología empresas, factores humanos, CRM, TEM, desarrollo personal",
          },
          {
            name: "author",
            content: "Psicopiloto",
          },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/que-es-psicopiloto",
          title:
            "¿Qué es Psicopiloto? | Psicología y aviación para transformar vidas",
          description:
            "Psicopiloto une la psicología con la aviación para ofrecer terapia individual, programas de empresa y consultoría en factores humanos.",
          images: [
            {
              url: "https://psicopiloto.com/images/seo/que-es.jpg",
              width: 1200,
              height: 630,
              alt: "Qué es Psicopiloto - Psicología y aviación",
              type: "image/jpeg",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <Nav />

      {/* ✅ Cabecera con imagen de fondo, coherente con index */}
     <PageHeader
  title="Psicopiloto: uniendo aviación y psicología"
  subtitle="Un enfoque que combina la experiencia aeronáutica con la psicología para ayudarte a crecer a nivel personal o como empresa."
  backgroundImage="/header-quees.jpg"
/>

      <main className="flex-grow pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* ¿Qué es Psicopiloto? */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
                  ¿Qué es Psicopiloto?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Psicopiloto es un proyecto único que nace de la unión de mis
                  dos grandes pasiones: la <strong>aviación</strong> y la{" "}
                  <strong>psicología</strong>. Tras más de 18 años de
                  experiencia como piloto militar, comandante en misiones de
                  alto riesgo, instructor de vuelo y formador en gestión de
                  recursos de tripulación (CRM) y factores humanos, decidí dar
                  un paso más: trasladar todo ese conocimiento al ámbito de la
                  psicología y el desarrollo humano.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Del mismo modo que en la cabina de un avión cada decisión
                  puede marcar la diferencia, en la vida personal y profesional
                  también necesitamos herramientas para gestionar la presión,
                  comunicarnos eficazmente, tomar decisiones conscientes y
                  trabajar en equipo.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Qué es Psicopiloto"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
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
                className="rounded-xl shadow-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
                  Nuestra misión
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Acompañar a las personas y organizaciones en su viaje,
                  integrando lo mejor de la psicología clínica con los valores y
                  metodologías de la aviación. Buscamos que desarrolles
                  habilidades prácticas que te permitan afrontar retos, ganar
                  confianza y vivir con mayor bienestar y seguridad.
                </p>
                <h2 className="text-3xl font-semibold mt-8 mb-6 text-psicopiloto-green-600">
                  Nuestra visión
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Convertirnos en un referente en psicología integradora y
                  aplicada, reconocidos por un enfoque humano, práctico y
                  transformador, capaz de inspirar a las personas y a los
                  equipos a superar cualquier turbulencia con resiliencia y
                  confianza.
                </p>
              </div>
            </div>
          </section>

          {/* Qué te ofrece Psicopiloto */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              ¿Qué te ofrece Psicopiloto?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>Terapia individual:</strong> un espacio seguro para
                gestionar ansiedad, estrés, autoestima, trauma o dificultades en
                las relaciones. Basado en un enfoque de terapia integradora, con
                técnicas como la terapia cognitivo-conductual, humanista,
                sistémica y EMDR.
              </li>
              <li>
                <strong>Psicología aplicada a empresas:</strong> programas de
                liderazgo, comunicación, gestión de errores y trabajo en equipo,
                inspirados en los modelos CRM (Crew Resource Management) y TEM
                (Threat and Error Management).
              </li>
              <li>
                <strong>Asesoramiento en factores humanos:</strong> aplicamos
                metodologías de la aviación para mejorar la seguridad,
                eficiencia y eficacia en entornos corporativos.
              </li>
            </ul>
          </section>

          {/* Valores */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Valores que nos guían
            </h2>
            <p className="text-gray-700 leading-relaxed">
              La aviación me enseñó principios que hoy aplico en psicoterapia y
              consultoría empresarial:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 text-gray-700 leading-relaxed">
              <li>
                <strong>Humildad:</strong> aprender siempre y reconocer los
                errores como oportunidad.
              </li>
              <li>
                <strong>Trabajo en equipo:</strong> apoyar al compañero para
                lograr objetivos comunes.
              </li>
              <li>
                <strong>Resiliencia:</strong> adaptarse y crecer tras la
                adversidad.
              </li>
              <li>
                <strong>Cultura justa:</strong> aprender de los errores para
                mejorar la seguridad y la eficacia.
              </li>
            </ul>
          </section>

          {/* Psicopiloto para empresas */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
                  Psicopiloto para empresas
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  En un mundo empresarial cada vez más complejo, los equipos
                  necesitan confianza, cohesión y liderazgo positivo. Desde
                  Psicopiloto ayudamos a las organizaciones a:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li>Reducir errores y aumentar la eficiencia.</li>
                  <li>Fomentar una comunicación clara y honesta.</li>
                  <li>Desarrollar líderes resilientes y equipos colaborativos.</li>
                  <li>
                    Implantar una cultura organizacional basada en el
                    aprendizaje, no en la culpa.
                  </li>
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Los mismos principios que hacen que un vuelo sea seguro y
                  exitoso pueden transformar también tu empresa, impulsando su
                  rendimiento y reduciendo costes derivados de errores y falta
                  de coordinación.
                </p>
              </div>
              <Image
                src="/sobre3.jpg"
                alt="Psicopiloto para empresas"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </section>

          {/* Psicopiloto para ti */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Psicopiloto para ti
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Si lo que buscas es crecer a nivel personal, mejorar tu bienestar
              emocional o superar un momento difícil, en Psicopiloto encontrarás
              un acompañamiento cercano y práctico. El objetivo es que aprendas
              a pilotar tu vida con seguridad, ganando autoconfianza y
              herramientas aplicables a tu día a día.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Da el primer paso
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Ya sea para tu desarrollo personal o para fortalecer a tu equipo,
              Psicopiloto es el puente entre la psicología y la aviación que te
              ayudará a alcanzar tus objetivos.
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
