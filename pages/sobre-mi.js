import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { NextSeo } from "next-seo";
import AnimatedCTA from "../components/AnimatedCTA";

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
          description: "Conoce mi trayectoria como psicólogo y piloto militar. Descubre cómo combino aviación y psicología para un enfoque único en ansiedad, autoestima, trauma y terapia.",
          images: [
            { url: "https://psicopiloto.com/images/seo/sobre-mi.jpg", width: 1200, height: 630, alt: "Sobre mí - Psicopiloto", type: "image/jpeg" },
          ],
          site_name: "Psicopiloto",
        }}
        additionalMetaTags={[{ name: "keywords", content: "psicólogo Granada, psicólogo online, ansiedad, autoestima, trauma, terapia EMDR, psicología aeronáutica, piloto militar" }]}
      />

      <Nav />

      <PageHeader
        title="Sobre mí"
        subtitle="Una trayectoria entre la aviación y la psicología para ayudarte a volar con seguridad en tu vida."
        backgroundImage="/header-sobremi.webp"
      />

      <main className="flex-grow py-16 container mx-auto max-w-5xl space-y-20">
        {/* Intro */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p>
              Mi nombre es <strong>Jose Carlos Rodríguez Retamar</strong> y soy <strong>psicólogo con Habilitación Sanitaria</strong> y <strong>piloto militar</strong>. Psicopiloto nace de la unión de mis pasiones: la <strong>aviación</strong> y la <strong>psicología</strong>.
            </p>
            <p className="mt-4">
              Tanto en el aire como en tierra, la clave para afrontar turbulencias está en la <strong>preparación mental</strong>, la <strong>gestión de emociones</strong> y la <strong>toma de decisiones bajo presión</strong>.
            </p>
          </div>
          <Image src="/sobre1.webp" alt="Psicopiloto - experiencia en psicología" width={600} height={400} className="rounded-2xl shadow-lg" priority />
        </section>

        {/* Fases */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <Image src="/sobre2.webp" alt="Vocación por la psicología" width={600} height={400} className="rounded-2xl shadow-lg order-2 md:order-1" priority />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">Fase 1: El inicio – vocación por la psicología</h2>
            <p>Me licencié en Psicología por la Universidad de Granada en 2003. Durante esa etapa realicé prácticas con personas en procesos de drogodependencia, comprendiendo la importancia de la <strong>escucha y el acompañamiento</strong>.</p>
            <p className="mt-4">Tras mi formación inicial, cursé el <strong>Curso de Adaptación Pedagógica</strong>, adquiriendo visión educativa y de orientación.</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">Fase 2: La aviación – disciplina, liderazgo y seguridad</h2>
            <p>En 2007 ingresé en la Academia General del Aire y me formé como piloto militar, acumulando más de <strong>2.500 horas de vuelo</strong> en aviones como ENAER T-35C Pillán, Aviocar C-212, Canadair CL-215T y CL-415.</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Piloto comandante en misiones de incendios en España, Grecia y Portugal.</li>
              <li>Instructor de vuelo y simulador, formando nuevas generaciones de pilotos.</li>
              <li>Jefe de Crew Resource Management (CRM), desarrollando programas de entrenamiento en factores humanos.</li>
              <li>Facilitador CRM e impulsor de EBT y CBTA en simuladores en Milán.</li>
            </ul>
            <p className="mt-4">Esta etapa me enseñó el valor de la calma en la adversidad, el trabajo en equipo y la resiliencia.</p>
          </div>
          <Image src="/sobre3.webp" alt="Psicología y aviación unidas" width={600} height={400} className="rounded-2xl shadow-lg" priority />
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <Image src="/sobre1.webp" alt="Psicólogo con habilitación sanitaria" width={600} height={400} className="rounded-2xl shadow-lg order-2 md:order-1" priority />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">Fase 3: El regreso a la psicología – volver a la esencia</h2>
            <p>Retomé mi vocación inicial y me habilité como psicólogo con Habilitación Sanitaria en 2015, especializándome en Psicología aeronáutica, Psicología integradora y terapia breve, y Trauma y EMDR.</p>
            <p className="mt-4">En 2019 colaboré con Edades Granada, dedicada al cuidado de personas mayores y ayuda a domicilio, aplicando aprendizajes de aviación y factores humanos para mejorar eficiencia y eficacia.</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">Fase 4: El voluntariado – la parte más humana</h2>
            <p>El voluntariado ha sido un pilar en mi vida. Colaboré con Solidarios para el Desarrollo, apoyando a personas mayores con demencia.</p>
            <p className="mt-4">Desde 2024 ejerzo como psicólogo voluntario en Amalgama Social, atendiendo casos de ansiedad, estrés, gestión emocional, duelo, autoestima y trauma.</p>
          </div>
          <Image src="/sobre2.webp" alt="Voluntariado y atención humana" width={600} height={400} className="rounded-2xl shadow-lg" priority />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">Hoy: Psicopiloto</h2>
          <p>En Psicopiloto uno lo aprendido en aviación con psicología para ofrecer un acompañamiento diferente. Te ayudo a ganar confianza, manejar la ansiedad y recuperar el control de tu vida.</p>
        </section>

        <div className="mt-12 text-center">
          <AnimatedCTA href="/contacto" text="👉 Reserva tu primera consulta" color="green" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
