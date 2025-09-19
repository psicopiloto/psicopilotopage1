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
            Psicopiloto: uniendo aviación y psicología para transformar personas y organizaciones
          </h1>

          {/* Intro */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p>
                  <strong>Psicopiloto</strong> es un proyecto innovador que nace
                  de la unión de dos mundos que me definen: la{" "}
                  <strong>aviación</strong> y la <strong>psicología</strong>.
                  Después de más de 18 años de experiencia como piloto militar,
                  comandante en misiones de extinción de incendios forestales y
                  formador en gestión de tripulaciones (CRM), decidí dar un paso
                  más: aplicar todos esos aprendizajes en el ámbito de la
                  psicología y el desarrollo humano.
                </p>
                <p className="mt-4">
                  Mi visión es clara: del mismo modo que en la cabina de un avión
                  cada decisión puede marcar la diferencia, en la vida personal y
                  profesional también necesitamos herramientas que nos ayuden a
                  gestionar la presión, tomar decisiones conscientes,
                  comunicarnos eficazmente y trabajar en equipo.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto - experiencia en psicología"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Qué aporto */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Image
                src="/sobre2.jpg"
                alt="Qué aporta Psicopiloto"
                width={600}
                height={400}
                className="rounded-lg shadow-md order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">
                  ¿Qué aporto con Psicopiloto?
                </h2>
                <p>
                  Gracias a mi formación como{" "}
                  <strong>psicólogo con habilitación sanitaria</strong> y a mi
                  experiencia en psicoterapia integradora y técnicas como EMDR,
                  ayudo a las personas a superar bloqueos, gestionar la ansiedad,
                  fortalecer su autoestima y desarrollar resiliencia.
                </p>
                <p className="mt-4">
                  Pero mi propuesta va más allá: traslado los valores y
                  metodologías de la aviación —seguridad, humildad, trabajo en
                  equipo, gestión de errores y amenazas— al mundo de la
                  psicología y de las empresas.
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li>
                    Terapia individual: gestión emocional, ansiedad, estrés,
                    relaciones personales y experiencias traumáticas.
                  </li>
                  <li>
                    Psicología aplicada a empresas: liderazgo, comunicación,
                    gestión de errores y trabajo en equipo basados en CRM y TEM.
                  </li>
                  <li>
                    Asesoramiento en factores humanos: mejorar eficacia,
                    seguridad y eficiencia en entornos laborales.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Por qué confiar */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  ¿Por qué confiar en Psicopiloto?
                </h2>
                <p>
                  Mi recorrido profesional me ha permitido acumular más de{" "}
                  <strong>2.500 horas de vuelo</strong>, muchas de ellas como
                  comandante en operaciones de alto riesgo, además de formar a
                  pilotos y mecánicos en competencias críticas como la toma de
                  decisiones bajo presión o la gestión del estrés.
                </p>
                <p className="mt-4">
                  Esa experiencia, unida a mi formación como psicólogo licenciado
                  y especializado en psicología integradora, trauma y psicología
                  aeronáutica, me permite ofrecer un enfoque único y
                  diferenciador.
                </p>
                <p className="mt-4">
                  En un mundo donde las personas y las organizaciones se
                  enfrentan a un ritmo de cambio constante,{" "}
                  <strong>Psicopiloto</strong> aporta claridad, resiliencia y
                  herramientas prácticas para avanzar con seguridad.
                </p>
              </div>
              <Image
                src="/sobre3.jpg"
                alt="Experiencia en aviación y psicología"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Psicopiloto para empresas */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Psicopiloto para empresas
                </h2>
                <p>
                  Hoy más que nunca, las empresas necesitan equipos cohesionados,
                  líderes capaces y culturas organizativas que favorezcan la
                  confianza y la innovación. Con <strong>Psicopiloto</strong>{" "}
                  aplico los principios de la aviación al entorno corporativo,
                  ayudando a:
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li>Reducir errores y mejorar la eficiencia.</li>
                  <li>Fomentar la comunicación y el liderazgo positivo.</li>
                  <li>Desarrollar equipos resilientes y colaborativos.</li>
                  <li>
                    Generar una “cultura justa” donde aprender del error es la
                    clave de la mejora.
                  </li>
                </ul>
              </div>
              <Image
                src="/sobre2.jpg"
                alt="Psicología aplicada a empresas"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Psicopiloto para ti */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Psicopiloto para ti
                </h2>
                <p>
                  Si lo que buscas es un espacio seguro donde trabajar tu
                  bienestar, la psicología aplicada desde la experiencia práctica
                  puede marcar la diferencia. Con un enfoque cercano y humano, te
                  acompaño a descubrir tus propios recursos y a aplicar
                  herramientas que funcionan en la vida real, igual que en una
                  cabina de vuelo.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto para tu bienestar"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* CTA final */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Da el primer paso con Psicopiloto
            </h2>
            <p className="text-center max-w-3xl mx-auto">
              Tanto si eres una persona que busca crecer a nivel personal, como
              si eres una empresa interesada en fortalecer a tu equipo,{" "}
              <strong>Psicopiloto</strong> es el puente entre la psicología y la
              aviación que puede ayudarte a alcanzar tus objetivos.
            </p>
            <div className="mt-8 text-center">
              <Link href="/contacto">
                <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                  Contacta conmigo hoy mismo
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
