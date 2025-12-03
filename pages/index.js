// pages/index.js
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";
import GoogleReviews from "../components/GoogleReviews"; // Nuevo componente dinámico

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
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicólogo online y presencial en Granada | Psicopiloto",
          description:
            "Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita.",
        }}
      />

      <BackgroundLogo />
      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        <PageHeader
          title="Psicólogo Online en Granada | Un enfoque práctico para tu bienestar"
          subtitle="Un espacio seguro, cercano y profesional para que recuperes el control, la calma y el sentido en tu vida. Aquí encontrarás escucha, empatía y herramientas prácticas para afrontar tus retos con confianza."
          backgroundImage="/fotoinicio1.webp"
          cta={{
            href: "/contacto",
            text: "Agenda tu primera cita",
            color: "green",
          }}
        />

        {/* Sección: ¿Te sientes así? */}
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
              {/* Bloques de ansiedad, ira/tristeza, autoestima */}
              {/* ... */}
            </div>
          </div>
        </section>

        {/* Sección: Un enfoque que te devuelve el control */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-psicopiloto-green-600">
                  Un enfoque que te devuelve el control
                </h2>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-4">
                  Como psicólogo y ex-piloto, sé lo que significa gestionar la
                  presión, tomar decisiones difíciles y actuar con seguridad.
                  Aplico esta filosofía a tu proceso terapéutico.
                </p>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-6">
                  Mi terapia es integradora, adaptando las mejores herramientas
                  (Terapia EMDR, cognitivo-conductual, humanista) a tus necesidades
                  únicas, para que puedas recuperar la calma y la claridad.
                </p>
                <AnimatedCTA
                  href="/servicios"
                  text="Descubre mis servicios"
                  color="honey"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src="/filosofia.webp"
                  alt="Psicopiloto, uniendo psicología y aviación para un enfoque integrador"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Terapia online */}
        {/* ... resto de secciones originales ... */}

        {/* Sección dinámica de reseñas desde Google */}
        <GoogleReviews />

        {/* Sección: Da el primer paso */}
        <section className="py-16 bg-white/40 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            <Image
              src="/telefono.webp"
              alt="Contacto telefónico para iniciar terapia psicológica online"
              width={400}
              height={400}
              className="w-[200px] h-auto mx-auto mb-6 md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-10 md:w-[350px] lg:w-[400px] lg:-left-20 z-30 drop-shadow-xl"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8 bg-psicopiloto-sand-50 rounded-2xl shadow-xl relative z-20">
              <div className="col-span-1 md:col-start-2 md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">
                  Da el primer paso
                </h2>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">
                  Has dado el paso más difícil: llegar hasta aquí. Tras una llamada
                  o un mensaje encontrarás un espacio seguro y cercano para empezar
                  a sanar tus preocupaciones.
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
