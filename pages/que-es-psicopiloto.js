// pages/que-es-psicopiloto.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo";
import AnimatedCTA from "../components/AnimatedCTA";

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Filosofía Psicopiloto: Psicología y Aviación | Jose Carlos Rguez. Retamar"
        description="Descubre la filosofía de Psicopiloto. Aplico la experiencia aeronáutica (CRM, Liderazgo) a la psicología para enseñarte a gestionar la presión, tomar decisiones y volar con seguridad."
        canonical="https://psicopiloto.com/que-es-psicopiloto"
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Filosofía Psicopiloto: Psicología con mentalidad de piloto"
        subtitle="Cómo aplico los principios de la aviación —disciplina, gestión de la presión y toma de decisiones— para ayudarte a tomar el control."
        backgroundImage="/header-quees.webp"
      />

      <main className="flex-grow pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl bg-white/40 p-8 rounded-2xl shadow-lg">
          
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center" aria-labelledby="que-es-title">
            <div>
              <h2 id="que-es-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
                ¿Qué es Psicopiloto?
              </h2>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                Psicopiloto es mi proyecto personal, donde fusiono mis dos grandes pasiones: la <strong>aviación</strong> y la <strong>psicología</strong>. Tras más de 18 años como piloto militar, comandante en misiones de alto riesgo e instructor de vuelo, decidí aplicar todo ese conocimiento sobre factores humanos, CRM y gestión de la presión al campo de la psicología.
              </p>
              {/* ✨ CORRECCIÓN: Sintaxis de negrita cambiada de Markdown (**) a HTML (<strong>) */}
              <p className="mt-4 text-psicopiloto-gray-700 leading-relaxed">
                En la cabina de un avión, cada decisión es crítica. En la vida y en la empresa, también. Mi trabajo es darte las herramientas para <strong>gestionar la presión</strong>, <strong>comunicarte eficazmente</strong> y <strong>tomar decisiones conscientes</strong>.
              </p>
            </div>
            <div>
              <Image
                src="/sobre1.webp"
                alt="Jose Carlos Rguez. Retamar aplicando principios de aviación a la psicología"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/sobre2.webp"
                alt="Principios de aviación aplicados a la misión de Psicopiloto"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                Misión y Visión
              </h2>
              <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">Mi Misión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                Enseñar a personas y equipos las herramientas de la psicología y la aviación para que afronten sus retos con seguridad, confianza y un plan claro.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-3 text-psicopiloto-green-600">Mi Visión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                Ser un referente en psicología aplicada, demostrando que los principios que garantizan un vuelo seguro pueden ayudarte a navegar las turbulencias de la vida y la empresa.
              </p>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="que-ofrece-title">
            <h2 id="que-ofrece-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Mi Plan de Vuelo para Ti
            </h2>
            <ul className="list-disc list-inside space-y-3 text-psicopiloto-gray-700 leading-relaxed">
              <li><strong>Terapia individual directa:</strong> Un plan de acción para gestionar ansiedad, estrés, autoestima o trauma, usando técnicas probadas como la Terapia Cognitivo-Conductual, Humanista, Sistémica y EMDR.</li>
              <li><strong>Entrenamiento para empresas:</strong> Programas de liderazgo, comunicación y gestión de errores basados en los modelos CRM y TEM de la aviación para optimizar el rendimiento de tu equipo.</li>
              <li><strong>Consultoría en Factores Humanos:</strong> Aplicación de metodologías aeronáuticas para mejorar la seguridad, la eficiencia y la cultura de tu organización.</li>
            </ul>
          </section>

          <section className="mb-16" aria-labelledby="valores-title">
            <h2 id="valores-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Valores que nos guían
            </h2>
            <p className="text-psicopiloto-gray-700 leading-relaxed">
              La aviación me enseñó principios que hoy son el pilar de mi terapia y consultoría:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 text-psicopiloto-gray-700 leading-relaxed">
              <li><strong>Humildad:</strong> Reconocer los errores como la mayor oportunidad de aprendizaje.</li>
              <li><strong>Trabajo en equipo:</strong> La confianza y el apoyo mutuo son la base para lograr cualquier objetivo.</li>
              <li><strong>Resiliencia:</strong> Adaptarse y salir fortalecido de la adversidad.</li>
              <li><strong>Cultura Justa:</strong> Fomentar un entorno donde se aprende del error, no se castiga.</li>
            </ul>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                Psicopiloto para empresas
              </h2>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                En un entorno empresarial complejo, la confianza y la cohesión son clave. Ayudo a las organizaciones a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-3 text-psicopiloto-gray-700 leading-relaxed">
                <li>Reducir errores y aumentar la eficiencia.</li>
                <li>Fomentar una comunicación clara y honesta.</li>
                <li>Desarrollar líderes resilientes y equipos colaborativos.</li>
                <li>Implantar una cultura organizacional basada en el aprendizaje, no en la culpa.</li>
              </ul>
              <p className="mt-4 text-psicopiloto-gray-700 leading-relaxed">
                Los mismos principios que garantizan un vuelo seguro pueden transformar tu empresa, impulsando su rendimiento y reduciendo costes.
              </p>
            </div>
            <div>
              <Image
                src="/sobre3.webp"
                alt="Consultoría de factores humanos y liderazgo para empresas"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Da el primer paso
            </h2>
            <p className="mb-6 text-psicopiloto-gray-700 leading-relaxed max-w-2xl mx-auto">
              Ya sea para tu crecimiento personal o para fortalecer a tu equipo, Psicopiloto es el enfoque práctico que necesitas para alcanzar tus objetivos.
            </p>
            <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
