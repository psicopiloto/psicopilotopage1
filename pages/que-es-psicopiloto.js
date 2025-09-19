import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Psicopiloto: uniendo aviación y psicología
          </h1>

          {/* Intro */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p>
                  <strong>Psicopiloto</strong> es un proyecto único que nace de
                  la unión de mis dos grandes pasiones: la{" "}
                  <strong>aviación</strong> y la <strong>psicología</strong>.
                  Tras más de 18 años de experiencia como piloto militar,
                  comandante en misiones de alto riesgo, instructor de vuelo y
                  formador en{" "}
                  <strong>
                    gestión de recursos de tripulación (CRM) y factores humanos
                  </strong>
                  , decidí dar un paso más: trasladar todo ese conocimiento al
                  ámbito de la psicología y el desarrollo humano.
                </p>
                <p className="mt-4">
                  Del mismo modo que en la cabina de un avión cada decisión
                  puede marcar la diferencia, en la vida personal y profesional
                  también necesitamos herramientas para{" "}
                  <strong>
                    gestionar la presión, comunicarnos eficazmente, tomar
                    decisiones conscientes y trabajar en equipo
                  </strong>
                  .
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto - psicología y aviación"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Misión y visión */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Image
                src="/sobre2.jpg"
                alt="Misión y visión de Psicopiloto"
                width={600}
                height={400}
                className="rounded-lg shadow-md order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">Nuestra misión</h2>
                <p>
                  Acompañar a las personas y organizaciones en su viaje,
                  integrando lo mejor de la{" "}
                  <strong>psicología clínica</strong> con los{" "}
                  <strong>valores y metodologías de la aviación</strong>.
                  Buscamos que desarrolles habilidades prácticas que te permitan
                  afrontar retos, ganar confianza y vivir con mayor bienestar y
                  seguridad.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">
                  Nuestra visión
                </h2>
                <p>
                  Convertirnos en un referente en{" "}
                  <strong>psicología integradora y aplicada</strong>,
                  reconocidos por un enfoque{" "}
                  <strong>humano, práctico y transformador</strong>, capaz de
                  inspirar a las personas y a los equipos a superar cualquier
                  turbulencia con resiliencia y confianza.
                </p>
              </div>
            </div>
          </section>

          {/* Servicios */}
          <section className="mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                ¿Qué te ofrece Psicopiloto?
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <strong>Terapia individual</strong>: un espacio seguro para
                  gestionar ansiedad, estrés, autoestima, trauma o dificultades
                  en las relaciones. Basado en un enfoque de{" "}
                  <strong>terapia integradora</strong>.
                </li>
                <li className="mb-2">
                  <strong>Psicología aplicada a empresas</strong>: programas de
                  liderazgo, comunicación, gestión de errores y trabajo en
                  equipo, inspirados en CRM (Crew Resource Management) y TEM
                  (Threat and Error Management).
                </li>
                <li>
                  <strong>Asesoramiento en factores humanos</strong>: aplicamos
                  metodologías de la aviación para mejorar la seguridad y la
                  eficiencia en entornos corporativos.
                </li>
              </ul>
            </div>
          </section>

          {/* Valores */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Valores que nos guían
                </h2>
                <p>
                  La aviación me enseñó principios que hoy aplico en
                  psicoterapia y consultoría empresarial:
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li>
                    <strong>Humildad</strong>: aprender siempre y reconocer los
                    errores como oportunidad.
                  </li>
                  <li>
                    <strong>Trabajo en equipo</strong>: apoyar al compañero para
                    lograr objetivos comunes.
                  </li>
                  <li>
                    <strong>Resiliencia</strong>: adaptarse y crecer tras la
                    adversidad.
                  </li>
                  <li>
                    <strong>Cultura justa</strong>: aprender de los errores para
                    mejorar la seguridad y la eficacia.
                  </li>
                </ul>
              </div>
              <Image
                src="/sobre3.jpg"
                alt="Valores de Psicopiloto"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Empresas */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Psicopiloto para empresas
            </h2>
            <p>
              En un mundo empresarial cada vez más complejo, los equipos
              necesitan <strong>confianza, cohesión y liderazgo positivo</strong>
              . Desde Psicopiloto ayudamos a las organizaciones a:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Reducir errores y aumentar la eficiencia.</li>
              <li>Fomentar una comunicación clara y honesta.</li>
              <li>Desarrollar líderes resilientes y equipos colaborativos.</li>
              <li>
                Implantar una cultura organizacional basada en el aprendizaje,
                no en la culpa.
              </li>
            </ul>
            <p className="mt-4">
              Los mismos principios que hacen que un vuelo sea seguro y exitoso
              pueden transformar también tu empresa, impulsando su rendimiento y
              reduciendo costes derivados de errores y falta de coordinación.
            </p>
          </section>

          {/* Personas */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto para ti"
                width={600}
                height={400}
                className="rounded-lg shadow-md order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">
                  Psicopiloto para ti
                </h2>
                <p>
                  Si lo que buscas es crecer a nivel personal, mejorar tu
                  bienestar emocional o superar un momento difícil, en{" "}
                  <strong>Psicopiloto</strong> encontrarás un acompañamiento
                  cercano y práctico. El objetivo es que aprendas a{" "}
                  <strong>pilotar tu vida con seguridad</strong>, ganando
                  autoconfianza y herramientas aplicables a tu día a día.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-se
