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
        // OPTIMIZACIÓN A: SEO Title centrado en la PVU y rigor técnico
        title="Filosofía Psicopiloto: Control Ejecutivo y Psicología Transdiagnóstica"
        description="Descubre la filosofía que fusiona la experiencia aeronáutica (Gestión de Crisis, CRM/TEM) con la Psicoterapia Integradora. Entrenamiento para recuperar el mando de tu vida."
        canonical="https://psicopiloto.com/que-es-psicopiloto"
      />

      <BackgroundLogo />

      <Nav />

      <PageHeader
        // OPTIMIZACIÓN B: H1 que define el método
        title="La Filosofía Psicopiloto: Rigor Aeronáutico Aplicado a tu Bienestar"
        subtitle="Un enfoque de precisión que integra la metodología de la aviación para la seguridad operacional con el análisis transdiagnóstico de la mente."
        backgroundImage="/header-quees.webp"
      />

      <main className="flex-grow pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl bg-white/40 p-8 rounded-2xl shadow-lg">
          
          {/* ¿Qué es Psicopiloto? (Se convierte en H2) */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center" aria-labelledby="que-es-title">
            <div>
              <h2 id="que-es-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
                ¿Qué es el Control Ejecutivo Flexible?
              </h2>
              <p className="text-psicopiloto-gray-700 leading-relaxed"> 
                Psicopiloto nace de una premisa central: el **control de la mente**, como el control de un avión, requiere **entrenamiento de alto nivel**. Mi experiencia como **Piloto Comandante e Instructor CRM** me enseñó el valor de la **conciencia situacional** y la **Gestión de Amenazas y Errores (TEM)**.
              </p>
              <p className="mt-4 text-psicopiloto-gray-700 leading-relaxed">
                Este conocimiento se traslada a la terapia. Te enseño a identificar y responder a las **amenazas internas** (ansiedad, trauma) con la **precisión transdiagnóstica** de un piloto, dotándote del **Control Ejecutivo Flexible** necesario para **dirigir tu vida** sin que las turbulencias te desvíen de tu ruta.
              </p>
            </div>
            <div>
              <Image
                src="/sobre1.webp"
                alt="Psicólogo aplicando principios de aviación al control emocional"
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
                alt="Principios de aviación en la misión de Psicopiloto"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                Misión y Visión: Seguridad Operacional
              </h2>
              
              <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">Nuestra Misión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                Acompañar a personas y organizaciones a alcanzar la **Seguridad Operacional** y el **Alto Rendimiento**. Esto se logra integrando la **Psicoterapia Basada en Evidencia (EMDR, ACT)** con las metodologías de **Gestión de Crisis (CRM/TEM)** de la aviación.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-3 text-psicopiloto-green-600">Nuestra Visión</h3>
              <p className="text-psicopiloto-gray-700 leading-relaxed">
                Ser el referente en la **Psicología de la Alta Complejidad**, formando a individuos y equipos para que superen cualquier **Plan de Contingencia** (crisis) con **Resiliencia, Liderazgo Situacional** y confianza absoluta en su propia capacidad de dirección.
              </p>
            </div>
          </section>

          {/* Qué te ofrece Psicopiloto (Usar H2) */}
          <section className="mb-16" aria-labelledby="que-ofrece-title">
            <h2 id="que-ofrece-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Servicios: Rutas de Vuelo para el Desarrollo
            </h2>
            <ul className="list-disc list-inside space-y-3 text-psicopiloto-gray-700 leading-relaxed">
              <li>
                <strong>Terapia individual (ACT, EMDR):</strong> Un **Plan de Vuelo Personalizado** para gestionar la **ansiedad, estrés y trauma**, centrado en la **regulación emocional** y el **apego seguro**.
              </li>
              <li>
                <strong>Psicología aplicada a empresas:</strong> Programas de **Liderazgo Situacional** y **Gestión de Equipos** inspirados en los modelos **CRM** y **TEM**, enfocados en la toma de decisiones y la prevención de fallos.
              </li>
              <li>
                <strong>Asesoramiento en Factores Humanos:</strong> Aplicación de la **Precisión Transdiagnóstica** para auditar y mejorar la **seguridad, eficiencia y eficacia** en entornos de alta demanda.
              </li>
            </ul>
          </section>

          {/* Valores (Usar H2) */}
          <section className="mb-16" aria-labelledby="valores-title">
            <h2 id="valores-title" className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Valores: El Manual de Procedimientos
            </h2>
            <p className="text-psicopiloto-gray-700 leading-relaxed">
              La aviación me enseñó principios que hoy son innegociables en la práctica clínica y empresarial:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 text-psicopiloto-gray-700 leading-relaxed">
              <li>
                <strong>Rigor y Precisión:</strong> Aplicación de la metodología basada en la evidencia (EBT/CBTA).
              </li>
              <li>
                <strong>Seguridad Operacional:</strong> Trabajar siempre para un **aterrizaje seguro** del cliente, priorizando la calma y la estabilidad.
              </li>
              <li>
                <strong>Cultura Justa:</strong> Ver el error o el síntoma como una **oportunidad de aprendizaje** y no como una culpa, esencial para el crecimiento.
              </li>
              <li>
                <strong>Liderazgo y Humildad:</strong> El compromiso de ser tu guía experto, reconociendo que tú eres el único **Piloto Comandante** de tu vida.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Inicia tu Plan de Vuelo Personal o Empresarial
            </h2>
            <p className="mb-6 text-psicopiloto-gray-700 leading-relaxed">
              Es el momento de dejar de ser pasajero. Contacta hoy mismo para agendar tu primera consulta y aprender a **pilotar tu vida con seguridad y dirección**.
            </p>
            <AnimatedCTA href="/contacto" text="Reservar mi primera consulta" color="green" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
