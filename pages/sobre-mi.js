import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";

export default function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Sobre mí | Psicopiloto"
        description="Soy psicólogo con habilitación sanitaria y piloto militar. En Psicopiloto uno aviación y psicología para ayudarte a manejar la ansiedad, el estrés y recuperar tu confianza."
        canonical="https://psicopiloto.com/sobre-mi"
        openGraph={{
          url: "https://psicopiloto.com/sobre-mi",
          title: "Sobre mí | Psicopiloto",
          description:
            "Conoce mi trayectoria como psicólogo y piloto militar. Descubre cómo combino aviación y psicología para un enfoque único en ansiedad, autoestima, trauma y terapia.",
          images: [
            {
              url: "/header-sobremi.webp",
              width: 1200,
              height: 630,
              alt: "Sobre mí - Psicopiloto",
              type: "image/webp",
            },
          ],
          site_name: "Psicopiloto",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicólogo Granada, psicólogo online, ansiedad, autoestima, trauma, terapia EMDR, psicología aeronáutica, piloto militar",
          },
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
      />

      <Nav />

      <PageHeader
        title="Sobre mí"
        subtitle="Una trayectoria entre la aviación y la psicología para ayudarte a volar con seguridad en tu vida."
        backgroundImage="/header-sobremi.webp"
      />

      <main className="flex-grow py-16">
  <div className="container mx-auto px-6 max-w-5xl leading-relaxed">
          {/* Intro */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p>
                Mi nombre es <strong>Jose Carlos Rodríguez Retamar</strong> y soy <strong>psicólogo con Habilitación Sanitaria</strong> y <strong>piloto militar</strong>. 
                <strong>Psicopiloto</strong> nace de la unión de mis dos pasiones: la <strong>aviación</strong> y la <strong>psicología</strong>.
              </p>
              <p className="mt-4">
                He aprendido que tanto en el aire como en tierra, la clave para afrontar las turbulencias está en la <strong>preparación mental</strong>, 
                la <strong>gestión de las emociones</strong> y la <strong>toma de decisiones bajo presión</strong>.
              </p>
            </div>
            <div>
              <img
                src="/sobre1.webp"
                alt="Psicopiloto - experiencia en psicología"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </section>

          {/* Fases de trayectoria */}
          {[
            {
              title: "Fase 1: El inicio – vocación por la psicología",
              img: "/sobre2.webp",
              content: [
                "Me licencié en Psicología por la Universidad de Granada en 2003. Durante esa etapa trabajé en prácticas con personas en procesos de drogodependencia, aprendiendo la importancia de la escucha y el acompañamiento.",
                "Cursé el Curso de Adaptación Pedagógica, adquiriendo visión educativa y de orientación.",
              ],
            },
            {
              title: "Fase 2: La aviación – disciplina, liderazgo y seguridad",
              img: "/sobre3.webp",
              content: [
                "Ingresé en la Academia General del Aire en 2007, acumulando más de 2.500 horas de vuelo en aviones como ENAER T-35C Pillán, Aviocar C-212, Canadair CL-215T y CL-415.",
              ],
              list: [
                "Piloto comandante en misiones de incendios en España, Grecia y Portugal.",
                "Instructor de vuelo y simulador, formando a nuevas generaciones.",
                "Jefe de Crew Resource Management (CRM), desarrollando programas en factores humanos.",
                "Facilitador CRM e impulsor de EBT y CBTA en simuladores en Milán.",
              ],
            },
            {
              title: "Fase 3: El regreso a la psicología – volver a la esencia",
              img: "/sobre1.webp",
              content: [
                "Retomé mi vocación en psicología, habilitándome como psicólogo con Habilitación Sanitaria en 2015 y especializándome en psicología aeronáutica, integradora, terapia breve, trauma y EMDR.",
                "Colaboré en la creación de Edades Granada, asesorando en gestión y manejo de errores aplicando lo aprendido en aviación.",
              ],
            },
            {
              title: "Fase 4: El voluntariado – la parte más humana",
              img: "/sobre2.webp",
              content: [
                "El voluntariado ha sido siempre un pilar en mi vida, colaborando con Solidarios para el Desarrollo y actualmente en Amalgama Social, atendiendo ansiedad, estrés, duelo, autoestima y trauma.",
              ],
            },
          ].map((fase, i) => (
            <section key={i} className="mb-20 grid md:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 0 ? "" : "order-2 md:order-1"}>
                <img
                  src={fase.img}
                  alt={fase.title}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div className={i % 2 === 0 ? "" : "order-1 md:order-2"}>
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">{fase.title}</h2>
                {fase.content.map((p, idx) => (
                  <p key={idx} className="mt-4">{p}</p>
                ))}
                {fase.list && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {fase.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {/* Hoy */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">Hoy: Psicopiloto</h2>
            <p>
              Hoy, en <strong>Psicopiloto</strong>, uno lo aprendido en aviación con la psicología para ofrecer un acompañamiento diferente. 
              Si en la cabina de un avión entrenábamos la mente para afrontar lo inesperado, en la terapia aplico la misma filosofía: ayudarte a ganar <strong>confianza</strong>, manejar la <strong>ansiedad</strong> y recuperar el <strong>control de tu vida</strong>.
            </p>
            <p className="mt-4">Porque todos merecemos <strong>volar con seguridad</strong>, también en nuestro propio camino personal.</p>
          </section>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
