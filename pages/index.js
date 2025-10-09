// pages/index.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image"; // ✅ Necesario para las imágenes

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        // --- CAMBIO A: SEO TITLE (Mantiene la longitud óptima) ---
        title="Psicólogo online y presencial en Granada | Psicopiloto"
        // --- CAMBIO B: META DESCRIPTION (Se acorta y se añade CTA) ---
        description="Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita." // (Aprox. 158 caracteres)
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
          title="Psicólogo online y presencial en Granada"
          subtitle="Supera el estrés, la ansiedad o un trauma con un enfoque integrador. Recupera la calma, la autoconfianza y el control de tu vida."
          backgroundImage="/fotoinicio1.webp"
          cta={{
            href: "/contacto",
            text: "Quiero agendar mi cita",
            color: "green",
          }}
        />

        {/* SECCIÓN 1: ÉNFASIS EN EL PROBLEMA Y LA SOLUCIÓN */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
              ¿Te sientes así?
            </h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-8 max-w-3xl mx-auto">
              La ansiedad no tiene por qué pilotar tu vida. Te ofrezco un espacio
              seguro para transformar tus preocupaciones y recuperar tu bienestar.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">
                  Ansiedad y Estrés
                </h3>
                <p className="text-psicopiloto-gray-700">
                  Preocupación constante, tensión muscular, insomnio y la sensación
                  de que algo malo va a pasar. Juntos podemos desactivar el
                  "modo alerta".
                </p>
                <a href="/ansiedad" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Saber más sobre ansiedad →</a>
              </div>
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">
                  Trauma y EMDR
                </h3>
                <p className="text-psicopiloto-gray-700">
                  Recuerdos intrusivos, reacciones exageradas y el peso de
                  experiencias pasadas. Con la terapia EMDR y un enfoque
                  integrador, es posible sanar.
                </p>
                <a href="/servicios" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Descubre el EMDR →</a>
              </div>
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">
                  Autoestima y Liderazgo
                </h3>
                <p className="text-psicopiloto-gray-700">
                  Dificultad para poner límites, inseguridad, o un síndrome del
                  impostor. Gana autoconfianza para pilotar tu vida con decisión.
                </p>
                <a href="/sobre-mi" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Mi filosofía →</a>
              </div>
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
                  Mi terapia es **integradora**, adaptando las mejores herramientas
                  (Terapia EMDR, cognitivo-conductual, humanista) a tus necesidades
                  únicas, para que puedas **recuperar la calma y la claridad**.
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

        {/* SECCIÓN 3: TERAPIA ONLINE / PRESENCIAL */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
              Terapia donde la necesitas
            </h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-10 max-w-3xl mx-auto">
              Te ofrezco la flexibilidad para hacer terapia desde la comodidad de
              tu casa o en mi consulta privada en Granada.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Columna 1: Online */}
              <div className="p-8 border-t-4 border-psicopiloto-green-500 bg-white/80 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-gray-700">
                  Terapia Online
                </h3>
                <p className="mb-4 text-psicopiloto-gray-500">
                  Ideal si vives fuera de Granada, viajas mucho o prefieres la
                  comodidad. Total privacidad y flexibilidad horaria.
                </p>
                <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-500">
                  <li>Desde casa, oficina o donde te sientas cómodo.</li>
                  <li>Misma eficacia que la terapia presencial.</li>
                  <li>Adaptada a tu horario y ritmo de vida.</li>
                </ul>
              </div>

              {/* Columna 2: Presencial */}
              <div className="p-8 border-t-4 border-psicopiloto-blue-500 bg-white/80 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-gray-700">
                  Terapia Presencial (Granada)
                </h3>
                <p className="mb-4 text-psicopiloto-gray-500">
                  Un espacio físico dedicado, discreto y acogedor en el centro de
                  Granada para una conexión más directa y personal.
                </p>
                <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-500">
                  <li>Consulta privada en zona céntrica.</li>
                  <li>Ideal para quienes prefieren el contacto directo.</li>
                  <li>Fácil acceso y ambiente tranquilo.</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10">
                <AnimatedCTA
                    href="/contacto"
                    text="Elige tu modalidad y agenda"
                    color="blue"
                />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-psicopiloto-sand-50 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            {/* Imagen sobresaliente */}
            <Image
              src="/telefono.png"
              // --- CORRECCIÓN H: ALT más descriptivo ---
              alt="Contacto telefónico para iniciar terapia psicológica online"
              width={800}
              height={800}
              className={`
                w-[300px] h-auto mx-auto mb-6
                md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-10
                md:w-[500px] md:h-auto
                lg:w-[600px] lg:-left-32
              `}
            />

            {/* Grid solo para el texto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white/90 rounded-2xl shadow-xl backdrop-blur-sm">
              <div className="col-span-1 md:col-start-2 text-center md:text-left">
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
