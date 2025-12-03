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
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">
                  Ansiedad y Estrés
                </h3>
                <p className="text-psicopiloto-gray-700">
                  Preocupación constante, tensión muscular, insomnio y la sensación
                  de que algo malo va a pasar. Juntos podemos desactivar el "modo alerta".
                </p>
                <a
                  href="/ansiedad"
                  className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block"
                >
                  Saber más sobre ansiedad &gt;
                </a>
              </div>

              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">
                  Ataques de ira, tristeza o soledad
                </h3>
                <p className="text-psicopiloto-gray-700">
                  Recuerdos intrusivos, reacciones exageradas y el peso de experiencias pasadas.
                  Con la terapia EMDR y un enfoque integrador, es posible sanar.
                </p>
                <a
                  href="/servicios"
                  className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block"
                >
                  Descubre el EMDR &gt;
                </a>
              </div>

              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">
                  Autoestima y Liderazgo
                </h3>
                <p className="text-psicopiloto-gray-700">
                  Dificultad para poner límites, inseguridad, o un síndrome del impostor.
                  Gana la autoconfianza que necesitas para tomar las riendas de tu vida.
                </p>
                <a
                  href="/sobre-mi"
                  className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block"
                >
                  Mi filosofía &gt;
                </a>
              </div>
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
                  Como psicólogo y ex-piloto, sé lo que significa gestionar la presión,
                  tomar decisiones difíciles y actuar con seguridad. Aplico esta filosofía
                  a tu proceso terapéutico.
                </p>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-6">
                  Mi terapia es integradora, adaptando las mejores herramientas
                  (Terapia EMDR, cognitivo-conductual, humanista) a tus necesidades únicas,
                  para que puedas recuperar la calma y la claridad.
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
        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
              Terapia online: Comodidad y máxima eficacia
            </h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-10 max-w-3xl mx-auto">
              Mi enfoque es la terapia online, dándote la flexibilidad de hacer terapia
              desde la comodidad de tu casa en Granada, o desde donde tú elijas.
            </p>
            <div className="grid md:grid-cols-1 gap-8 text-left max-w-xl mx-auto">
              <div className="p-8 border-t-4 border-psicopiloto-green-500 bg-white/80 rounded-lg shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-gray-700">
                  Terapia Online (Mi enfoque principal)
                </h3>
                <p className="mb-4 text-psicopiloto-gray-500">
                  Ideal para ahorrar tiempo y costes. Mi experiencia garantiza la misma
                  calidad y cercanía que la sesión presencial.
                </p>
                <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-500">
                  <li>Acceso desde cualquier lugar.</li>
                  <li><strong>Ahorro de tiempo y costes
