// pages/index.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Psicólogo online y presencial en Granada | Psicopiloto"
        description="Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita." 
        canonical="https://psicopiloto.com/"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicólogo Granada, psicólogo online, terapia ansiedad, depresión, autoestima, trauma, EMDR, terapia de pareja, psicología integradora, josé carlos rodríguez",
          },
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicólogo online y presencial en Granada | Psicopiloto",
          description: "Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita.",
        }}
      />

      <BackgroundLogo />
      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        {/* HERO/HEADER */}
        <PageHeader
          title="Psicólogo online y presencial en Granada | Acompaño tu viaje hacia el bienestar"
          subtitle="Un espacio seguro, cercano y profesional para que recuperes control, calma y sentido en tu vida. Aquí encontrarás escucha, empatía y herramientas prácticas para afrontar tus retos con confianza."
          backgroundImage="/fotoinicio1.webp"
          cta={{
            href: "/contacto",
            text: "Agenda tu primera cita",
            color: "green",
          }}
        />

        {/* SECCIÓN 1: ÉNFASIS EN EL PROBLEMA Y LA SOLUCIÓN */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-500">
              Servicios
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Ansiedad y estrés",
                  desc: "Insomnio, tensión, preocupaciones constantes. Recupera el control y la calma diaria con herramientas prácticas.", 
                },
                {
                  title: "Depresión y ánimo bajo",
                  desc: "Falta de motivación, tristeza o apatía. Vuelve a encontrar el sentido y la dirección en tu vida.", 
                },
                {
                  title: "Autoestima y apego",
                  desc: "Inseguridad, dificultad para poner límites. Fortalece tu identidad y establece relaciones sanas.", 
                },
                {
                  title: "Terapia de pareja",
                  desc: "Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión perdida.",
                },
                {
                  title: "Trauma y experiencias difíciles",
                  desc: "Recuerdos dolorosos, bloqueos emocionales. Procesamiento con EMDR para sanar el pasado.", 
                },
                {
                  title: "Si eres empresa",
                  desc: "Liderazgo consciente y prevención de errores, gestión de equipos y factores humanos adaptada a las necesidades de tu empresa.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/40 rounded-lg shadow-sm border border-psicopiloto-gray-500/10"
                >
                  <h3 className="font-semibold text-xl mb-2 text-psicopiloto-honey-500">
                    {s.title}
                  </h3>
                  <p className="text-psicopiloto-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <AnimatedCTA
                href="/servicios"
                text="Descubre todos los servicios"
                color="honey"
              />
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: TÍTULO Y ENFOQUE */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Contenido de texto */}
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-psicopiloto-green-600">
                  Un enfoque que te devuelve el control
                </h2>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-4">
                  Como psicólogo y ex-piloto, sé lo que significa{" "}
                  <strong>gestionar la presión, tomar decisiones difíciles</strong>{" "}
                  y actuar con seguridad. Aplico esta filosofía a tu proceso
                  terapéutico.
                </p>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-6">
                  Mi terapia es <strong>integradora</strong>, adaptando las mejores herramientas
                  (Terapia EMDR, cognitivo-conductual, humanista) a tus necesidades
                  únicas, para que puedas <strong>recuperar la calma y la claridad</strong>.
                </p>
                <AnimatedCTA
                  href="/servicios"
                  text="Descubre mis servicios"
                  color="blue"
                />
              </div>

              {/* Imagen */}
              <div className="hidden md:block">
                <Image
                  src="/filosofia.webp"
                  alt="Psicopiloto, uniendo psicología y aviación para un enfoque integrador"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>


        {/* === NUEVA SECCIÓN COMPACTA: SOBRE EL PROYECTO === */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold mb-8 text-center text-psicopiloto-blue-600">
                Conoce el Proyecto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-psicopiloto-sand-50 rounded-2xl shadow-xl">
              
              {/* Columna 1: Sobre el Psicólogo */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">
                  Sobre el Psicólogo
                </h3>
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-700">
                  Soy Jose Carlos Rodríguez, psicólogo y ex-piloto militar. Mi experiencia en aviación
                  (gestión de crisis, factores humanos y liderazgo) se integra en
                  la terapia para ofrecerte un enfoque sólido y práctico, basado en la humildad y la toma de decisiones consciente.
                </p>
                <AnimatedCTA
                  href="/sobre-mi"
                  text="Conóceme mejor"
                  color="blue"
                  className="mt-4"
                />
              </div>

              {/* Columna 2: Filosofía del Proyecto */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">
                  La Filosofía Psicopiloto
                </h3>
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-700">
                  El objetivo es que vuelvas a pilotar tu vida con seguridad y dirección. Mi
                  compromiso es ofrecerte un espacio de confianza, utilizando
                  terapia integradora y EMDR para que recuperes el control de tus emociones.
                </p>
                <AnimatedCTA
                  href="/que-es-psicopiloto"
                  text="Descubre la filosofía"
                  color="blue"
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </section>


        {/* CTA FINAL (CON LA CORRECCIÓN DEL EFECTO 3D MANTENIDA) */}
        <section className="py-16 bg-psicopiloto-sand-50 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            {/* Imagen sobresaliente - Z-INDEX ALTO y SHADOW para el efecto 3D */}
            <Image
              src="/telefono.png"
              alt="Contacto telefónico para iniciar terapia psicológica online"
              width={400}
              height={400}
              className={`
                w-[200px] h-auto mx-auto mb-6
                md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-10
                md:w-[350px] md:h-auto
                lg:w-[400px] lg:-left-20
                z-30 
                drop-shadow-xl 
              `}
            />

            {/* Grid solo para el texto - Z-INDEX MEDIO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8 bg-white rounded-2xl shadow-xl relative z-20"> 
              <div className="col-span-1 md:col-start-2 md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">
                  Da el primer paso
                </h2>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">
                  Has dado el paso más difícil: llegar hasta aquí. Tras una llamada o un mensaje encontrarás un espacio seguro y cercano para empezar a sanar tus preocupaciones.
                </p>
                <AnimatedCTA
                  href="/contacto"
                  text="Reserva tu primera consulta"
                  color="green"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
