import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo";
// ✨ CORRECCIÓN CRÍTICA: Se añade la importación faltante
import AnimatedCTA from "../components/AnimatedCTA"; 

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Filosofía Psicopiloto: Psicología y Aviación Aplicada | Jose Carlos Rodríguez"
        description="Descubre la filosofía de Psicopiloto. Unimos la experiencia aeronáutica (CRM, Liderazgo) con la psicología para ayudarte a gestionar la presión, tomar decisiones y volar con seguridad."
        canonical="https://psicopiloto.com/que-es-psicopiloto"
      />

      <BackgroundLogo />

      <Nav />

      <PageHeader
        title="La Filosofía de Psicopiloto: Uniendo Aviación y Psicología"
        subtitle="Un enfoque que combina la experiencia aeronáutica con la psicología para ayudarte a crecer a nivel personal o como empresa."
        backgroundImage="/header-quees.webp"
      />

      <main className="flex-grow pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl bg-white/40 p-8 rounded-2xl shadow-lg">
          
          {/* ¿Qué es Psicopiloto? (Se convierte en H2) */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center" aria-labelledby="que-es-title">
            <div>
              <h2 id="que-es-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
                ¿Qué es Psicopiloto?
              </h2>
              <p className="text-psicopiloto-gray-700 leading-relaxed"> 
                Psicopiloto es un proyecto único que nace de la unión de mis
                dos grandes pasiones: la <strong>aviación</strong> y la <strong>psicología</strong>. Tras más de 18 años de
                experiencia como piloto militar, comandante en misiones de
                alto riesgo, instructor de vuelo y formador en gestión de
                recursos de tripulación (CRM) y factores humanos, decidí dar
                un paso más: trasladar todo ese conocimiento al ámbito de la
                psicología y el desarrollo humano.
              </p>
              <p className="mt-4 text-psicopiloto-gray-700 leading-relaxed">
                Del mismo modo que en la cabina de un avión cada decisión
                puede marcar la diferencia, en la vida personal y profesional
                también necesitamos herramientas para **gestionar la presión**,
                **comunicarnos eficazmente**, tomar **decisiones conscientes** y
                trabajar en equipo.
              </p>
            </div>
            <div>
              <Image
                src="/sobre1.webp"
                alt="Jose Carlos Rodríguez aplicando principios de aviación a la psicología"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Misión y Visión (Usar H2) */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/sobre2.webp"
                alt="Principios de aviación aplicados a la misión de Psicopiloto"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                Misión y Visión
              </h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">Nuestra Misión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                Acompañar a las personas y organizaciones en su viaje,
                integrando lo mejor de la psicología clínica con los valores y
                metodologías de la aviación. Buscamos que desarrolles
                habilidades prácticas que te permitan afrontar retos, ganar
                confianza y vivir con mayor bienestar y seguridad.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-3 text-psicopiloto-green-600">Nuestra Visión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                Convertirnos en un referente en psicología integradora y
                aplicada, reconocidos por un enfoque humano, práctico y
                transformador, capaz de inspirar a las personas y a los
                equipos a superar cualquier turbulencia con resiliencia y
                confianza.
              </p>
            </div>
          </section>

          {/* Qué te ofrece Psicopiloto (Usar H2) */}
          <section className="mb-16" aria-labelledby="que-ofrece-title">
            <h2 id="que-ofrece-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              ¿Qué te ofrece Psicopiloto?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-psicopiloto-gray-700 leading-relaxed">
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

          {/* Valores (Usar H2) */}
          <section className="mb-16" aria-labelledby="valores-title">
            <h2 id="valores-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Valores que nos guían
            </h2>
            <p className="text-psicopiloto-gray-700 leading-relaxed">
              La aviación me enseñó principios que hoy aplico en psicoterapia y
              consultoría empresarial:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 text-psicopiloto-gray-700 leading-relaxed">
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

          {/* Psicopiloto para empresas (Reutilización de contenido, se mantiene H2) */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                Psicopiloto para empresas
              </h2>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                En un mundo empresarial cada vez más complejo, los equipos
                necesitan confianza, cohesión y liderazgo positivo. Desde
                Psicopiloto ayudamos a las organizaciones a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-3 text-psicopiloto-gray-700 leading-relaxed">
                <li>Reducir errores y aumentar la eficiencia.</li>
                <li>Fomentar una comunicación clara y honesta.</li>
                <li>Desarrollar líderes resilientes y equipos colaborativos.</li>
                <li>
                  Implantar una cultura organizacional basada en el aprendizaje,
                  no en la culpa.
                </li>
              </ul>
              <p className="mt-4 text-psicopiloto-gray-700 leading-relaxed">
                Los mismos principios que hacen que un vuelo sea seguro y
                exitoso pueden transformar también tu empresa, impulsando su
                rendimiento y reduciendo costes derivados de errores y falta
                de coordinación.
              </p>
            </div>
            <div>
              <Image
                src="/sobre3.webp"
                alt="Consultoría de factores humanos y liderazgo para empresas"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Psicopiloto para ti (Reutilización de contenido, se mantiene H2) */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Psicopiloto para ti
            </h2>
            <p className="text-psicopiloto-gray-700 leading-relaxed">
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
            <p className="mb-6 text-psicopiloto-gray-700 leading-relaxed">
              Ya sea para tu desarrollo personal o para fortalecer a tu equipo,
              Psicopiloto es el puente entre la psicología y la aviación que te
              ayudará a alcanzar tus objetivos.
            </p>
            <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
