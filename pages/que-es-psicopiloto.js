// pages/que-es-psicopiloto.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo";
import AnimatedCTA from "../components/AnimatedCTA";

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      {/* 🚀 SEO INTEGRADO: Título y descripción alineados con la marca y especialidades sin términos de riesgo legal */}
      <NextSeo
        title="Filosofía Psicopiloto: Psicoterapia y Aviación | Granada"
        description="Descubre el origen de Psicopiloto. Fusión de experiencia aeronáutica en gestión de crisis (CRM) y psicoterapia integradora para superar el trauma y la ansiedad."
        canonical="https://psicopiloto.com/que-es-psicopiloto"
        openGraph={{
          url: "https://psicopiloto.com/que-es-psicopiloto",
          title: "La Filosofía Psicopiloto — Rigor Metodológico en Psicoterapia",
          description: "Cómo aplicamos los principios de los factores humanos y la cabina militar para estructurar un espacio seguro de sanación y liderazgo personal.",
        }}
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Filosofía Psicopiloto: Psicología con mentalidad de cabina"
        subtitle="Cómo aplico los principios de la aviación militar —gestión del estrés, checklists de seguridad y toma de decisiones— para acompañar tu proceso terapéutico."
        backgroundImage="/header-quees.webp"
      />

      <main className="flex-grow pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl bg-white/40 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
          
          {/* SECCIÓN 1: ¿QUÉ ES PSICOPILOTO? */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center" aria-labelledby="que-es-title">
            <div>
              <h2 id="que-es-title" className="text-3xl font-bold mb-6 text-psicopiloto-green-600">
                ¿Qué es Psicopiloto?
              </h2>
              <p className="text-psicopiloto-gray-700 leading-relaxed text-base">
                Psicopiloto es un espacio de intervención psicológica regulado donde fusiono mis dos grandes áreas de experiencia: la <strong>aviación militar</strong> y la <strong>psicoterapia integradora</strong>. Son dos entornos aparentemente distantes que, en realidad, persiguen un mismo objetivo: mantener la estabilidad y el control cuando las condiciones externas se vuelven hostiles.
              </p>
              <p className="mt-4 text-psicopiloto-gray-700 leading-relaxed text-base">
                Durante más de 18 años como piloto comandante en misiones de emergencia aprendí a sostener la presión, a aplicar procedimientos estrictos cuando todo se acelera y a regular el miedo para tomar decisiones seguras. Hoy pongo todo ese aprendizaje operativo al servicio de tu salud mental, combinándolo con una formación rigurosa en trauma, regulación del sistema nervioso y procesamiento emocional profundo mediante el protocolo oficial <strong>EMDR</strong>.
              </p>
            </div>
            <div>
              <Image
                src="/sobre1.webp"
                alt="Jose Carlos Rguez. Retamar aplicando principios de aviación a la psicoterapia integradora"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </section>

          {/* SECCIÓN 2: MISIÓN Y VISIÓN (CORREGIDO "EN TIERRA") */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center" aria-labelledby="mision-vision-title">
            <div className="order-2 md:order-1">
              <Image
                src="/sobre2.webp"
                alt="Principios de aviación aplicados a la consulta sanitaria de Psicopiloto"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 id="mision-vision-title" className="text-3xl font-bold mb-6 text-psicopiloto-blue-600">
                Misión y Visión
              </h2>
              <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Nuestra Misión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed text-base mb-6">
                Proporcionar a pacientes y organizaciones un marco de trabajo estructurado, predecible y seguro. Unimos las herramientas científicas de la psicología sanitaria con el rigor procedimental aeronáutico para que logres desactivar la alerta constante y lideres tu vida con total claridad.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Nuestra Visión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed text-base">
                Establecer un modelo de intervención de referencia en Granada y online, demostrando que los factores humanos que garantizan la supervivencia en el aire son plenamente trasladables a los procesos psicoterapéuticos en tierra, ofreciendo un mapa real frente a las turbulencias emocionales.
              </p>
            </div>
          </section>

          {/* SECCIÓN 3: MI PLAN DE VUELO PARA TI */}
          <section className="mb-16 bg-white/60 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm" aria-labelledby="que-ofrece-title">
            <h2 id="que-ofrece-title" className="text-3xl font-bold mb-6 text-psicopiloto-green-600">
              Mi Plan de Vuelo para Ti
            </h2>
            <p className="text-psicopiloto-gray-700 leading-relaxed text-base mb-4">
              No trabajamos desde la improvisación. Diseñamos una estrategia transparente adaptada a tus necesidades operativas:
            </p>
            <ul className="list-disc list-inside space-y-3.5 text-psicopiloto-gray-700 leading-relaxed text-base">
              <li><strong>Psicoterapia individualizada para adultos:</strong> Un plan de acción pautado para abordar la ansiedad, el estrés crónico, los problemas de apego o heridas complejas utilizando herramientas de procesamiento como el <strong>EMDR</strong>.</li>
              <li><strong>Formación estratégica para empresas:</strong> Programas avanzados de comunicación asertiva, mitigación del estrés y liderazgo adaptativo bajo dinámicas extremas.</li>
              <li><strong>Consultoría especializada en Factores Humanos:</strong> Transferencia directa del modelo CRM (Crew Resource Management) aeronáutico para optimizar la toma de decisiones y blindar la salud mental de los equipos en tu organización.</li>
            </ul>
          </section>

          {/* SECCIÓN 4: VALORES QUE NOS GUÍAN */}
          <section className="mb-16" aria-labelledby="valores-title">
            <h2 id="valores-title" className="text-3xl font-bold mb-6 text-psicopiloto-green-600">
              Valores que nos guían
            </h2>
            <p className="text-psicopiloto-gray-700 leading-relaxed text-base">
              La cabina militar asienta los pilares éticos y metodológicos que hoy dirigen mi consulta sanitaria y los procesos de consultoría corporativa:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-psicopiloto-sand-50 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-psicopiloto-blue-600 text-lg mb-1">Humildad Operativa</h4>
                <p className="text-psicopiloto-gray-600 text-sm leading-relaxed">Entender que los errores y los bloqueos no definen tu valía, sino que marcan el punto de partida exacto para reconfigurar el aprendizaje y avanzar.</p>
              </div>
              <div className="p-4 bg-psicopiloto-sand-50 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-psicopiloto-blue-600 text-lg mb-1">Cultura Justa</h4>
                <p className="text-psicopiloto-gray-600 text-sm leading-relaxed">Tanto en terapia como en la empresa, construimos un entorno de absoluta confianza libre de juicios y culpas, enfocado en comprender el origen de los fallos para solucionarlos.</p>
              </div>
              <div className="p-4 bg-psicopiloto-sand-50 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-psicopiloto-blue-600 text-lg mb-1">Estructura y Rigor</h4>
                <p className="text-psicopiloto-gray-600 text-sm leading-relaxed">Aplicación estricta de protocolos basados en la evidencia científica. Sabrás en todo momento en qué fase de tu plan terapéutico nos encontramos.</p>
              </div>
              <div className="p-4 bg-psicopiloto-sand-50 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-psicopiloto-blue-600 text-lg mb-1">Resiliencia Estructural</h4>
                <p className="text-psicopiloto-gray-600 text-sm leading-relaxed">Entrenamiento del sistema nervioso y la mente para absorber el impacto de la adversidad y salir fortalecido, recuperando el equilibrio interno.</p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 5: PSICOPILOTO PARA EMPRESAS */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center" aria-labelledby="empresas-title">
            <div>
              <h2 id="empresas-title" className="text-3xl font-bold mb-6 text-psicopiloto-blue-600">
                Psicopiloto para empresas
              </h2>
              <p className="text-psicopiloto-gray-700 leading-relaxed text-base">
                En mercados volátiles y de alta competitividad, la estabilidad psicológica de las tripulaciones de una organización determina su viabilidad operativa. Ayudo a blindar a tus equipos frente al desgaste:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2.5 text-psicopiloto-gray-700 leading-relaxed text-base">
                <li>Reducción del error humano y optimización de la eficiencia en procesos críticos.</li>
                <li>Desarrollo de canales de comunicación honesta y asertiva bajo situaciones de presión.</li>
                <li>Liderazgo resiliente enfocado a mitigar la fatiga mental y el 'burnout'.</li>
                <li>Implantación de una cultura interna basada en la solución colectiva del fallo, reduciendo costes de rotación.</li>
              </ul>
            </div>
            <div>
              <Image
                src="/sobre3.webp"
                alt="Consultoría de factores humanos, modelo CRM aeronáutico y desarrollo de líderes para empresas"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </section>

          {/* SECCIÓN FINAL - CTA */}
          <section className="text-center pt-8 border-t border-gray-200/60">
            <h2 className="text-3xl font-bold mb-4 text-psicopiloto-green-600">
              Inicia tu plan de vuelo
            </h2>
            <p className="mb-8 text-psicopiloto-gray-700 leading-relaxed text-base max-w-2xl mx-auto">
              Ya sea para reprogramar automatismos dolorosos del pasado, regular la ansiedad o consolidar la estructura operativa de tu organización, te ofrezco un entorno clínico riguroso adaptado a tus objetivos.
            </p>
            <AnimatedCTA href="/contacto" text="Reserva tu sesión de valoración gratuita" color="green" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
