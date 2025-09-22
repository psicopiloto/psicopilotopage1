import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader"; // ✅ coherencia con otras páginas

export default function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
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
              url: "https://psicopiloto.com/images/seo/sobre-mi.jpg",
              width: 1200,
              height: 630,
              alt: "Sobre mí - Psicopiloto",
              type: "image/jpeg",
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
        ]}
      />

      <Nav />

      {/* ✅ Cabecera coherente con el resto del site */}
      <PageHeader
        title="Sobre mí"
        subtitle="Una trayectoria entre la aviación y la psicología para ayudarte a volar con seguridad en tu vida."
        backgroundImage="/header-sobremi.webp"
      />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-5xl leading-relaxed text-gray-800">
          {/* Intro */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p>
                  Mi nombre es <strong>[Tu Nombre]</strong> y soy{" "}
                  <strong>psicólogo con Habilitación Sanitaria</strong> y{" "}
                  <strong>piloto militar</strong>. El proyecto{" "}
                  <strong>Psicopiloto</strong> nace de la unión de mis dos
                  pasiones: la <strong>aviación</strong> y la{" "}
                  <strong>psicología</strong>.
                </p>
                <p className="mt-4">
                  A lo largo de mi vida he aprendido que tanto en el aire como
                  en tierra, la clave para afrontar las turbulencias está en la{" "}
                  <strong>preparación mental</strong>, la{" "}
                  <strong>gestión de las emociones</strong> y la{" "}
                  <strong>toma de decisiones bajo presión</strong>.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto - experiencia en psicología"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </section>

          {/* Fase 1 */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Image
                src="/sobre2.jpg"
                alt="Vocación por la psicología"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
                  Fase 1: El inicio – vocación por la psicología
                </h2>
                <p>
                  Me licencié en <strong>Psicología por la Universidad de Granada</strong> en 2003. 
                  Durante esa etapa trabajé en prácticas con personas en procesos de drogodependencia, 
                  lo que me acercó al sufrimiento humano y me mostró la importancia de la{" "}
                  <strong>escucha y el acompañamiento</strong>.
                </p>
                <p className="mt-4">
                  Tras mi formación inicial, cursé el{" "}
                  <strong>Curso de Adaptación Pedagógica</strong>, que me permitió adquirir una visión educativa y de orientación.
                </p>
              </div>
            </div>
          </section>

          {/* Fase 2 */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
                  Fase 2: La aviación – disciplina, liderazgo y seguridad
                </h2>
                <p>
                  En 2007 ingresé en la <strong>Academia General del Aire</strong>, donde me formé como piloto militar. 
                  Durante casi dos décadas acumulé más de <strong>2.500 horas de vuelo</strong> en aviones como el{" "}
                  <em>ENAER T-35C Pillán, Aviocar C-212, Canadair CL-215T y CL-415</em>.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Piloto comandante</strong> en misiones de incendios en España, Grecia y Portugal.</li>
                  <li><strong>Instructor de vuelo y simulador</strong>, formando a nuevas generaciones de pilotos.</li>
                  <li><strong>Jefe de Crew Resource Management (CRM)</strong>, desarrollando programas de entrenamiento en factores humanos.</li>
                  <li><strong>Facilitador CRM</strong> e impulsor de <strong>EBT</strong> y <strong>CBTA</strong> en simuladores en Milán.</li>
                </ul>
                <p className="mt-4">
                  Esta etapa me enseñó el valor de la <strong>calma en la adversidad</strong>, 
                  el <strong>trabajo en equipo</strong> y la <strong>resiliencia</strong>.
                </p>
              </div>
              <Image
                src="/sobre3.jpg"
                alt="Psicología y aviación unidas"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </section>

          {/* Fase 3 */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Image
                src="/sobre1.jpg"
                alt="Psicólogo con habilitación sanitaria"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
                  Fase 3: El regreso a la psicología – volver a la esencia
                </h2>
                <p>
                  En paralelo a mi carrera aeronáutica, retomé mi vocación primera: la psicología. 
                  Me habilité como <strong>psicólogo con Habilitación Sanitaria</strong> en 2015 y me especialicé en:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Psicología aeronáutica</strong>.</li>
                  <li><strong>Psicología integradora y terapia breve</strong>.</li>
                  <li><strong>Trauma y EMDR</strong>.</li>
                </ul>
                 <p className="mt-4">
                  Más tarde, en 2019, colaboré con la creación de <strong>Edades Granada</strong>, dedicada al cuidado de personas mayores y 
                  ayuda a domicilio. Desde entonces asesoro a dicha empresa en la gestión del trabajo y manejo de errores, 
                  aplicando lo aprendido en aviación y factores humanos para mejorar la eficacia y eficiencia.
                </p>
              </div>
            </div>
          </section>

          {/* Fase 4 */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
                  Fase 4: El voluntariado – la parte más humana
                </h2>
                <p>
                  El voluntariado ha sido siempre un pilar en mi vida. En mi juventud colaboré con{" "}
                  <strong>Solidarios para el Desarrollo</strong>, trabajando con personas mayores en fases iniciales de demencia.
                </p>
                <p className="mt-4">
                  Desde 2024 ejerzo como <strong>psicólogo voluntario en Amalgama Social</strong>, atendiendo casos de ansiedad, 
                  estrés, gestión emocional, duelo, autoestima y trauma.
                </p>
                <p className="mt-4">
                  Estas experiencias me han recordado que detrás de cada historia hay alguien que merece ser escuchado con respeto y cercanía.
                </p>
              </div>
              <Image
                src="/sobre2.jpg"
                alt="Voluntariado y atención humana"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </section>

          {/* Hoy */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
              Hoy: Psicopiloto
            </h2>
            <p>
              Hoy, en <strong>Psicopiloto</strong>, uno lo aprendido en la aviación con la psicología para ofrecer un acompañamiento diferente. 
              Si en la cabina de un avión entrenábamos la mente para afrontar lo inesperado y mantener la seguridad, 
              en la terapia aplico esa misma filosofía: ayudarte a ganar <strong>confianza</strong>, manejar la <strong>ansiedad</strong> 
              y recuperar el <strong>control de tu vida</strong>.
            </p>
            <p className="mt-4">
              Porque todos merecemos <strong>volar con seguridad</strong>, también en su propio camino personal.
            </p>
          </section>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <Link href="/contacto">
              <span className="px-6 py-3 bg-psicopiloto-green-500 text-white rounded-xl text-lg font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                👉 Reserva tu primera consulta
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
