// pages/index.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";

// ======================================================
// 1. DATOS DE LOS TESTIMONIOS
// Cuando tengas reseñas reales de Google, simplemente edita este bloque.
// Puedes añadir o quitar testimonios fácilmente.
// ======================================================
const testimonialsData = [
  {
    stars: 5,
    text: "Jose Carlos es un profesional excepcional. Su enfoque único, combinando su experiencia como piloto con la psicología, me dio herramientas prácticas que no había encontrado en ninguna otra terapia. He aprendido a gestionar mi ansiedad de una forma completamente nueva. Totalmente recomendable.",
    author: "Marta G.",
  },
  {
    stars: 5,
    text: "Llevaba años lidiando con un bloqueo a raíz de una experiencia difícil. La terapia EMDR con Jose Carlos ha sido transformadora. Es un terapeuta cercano, empático y muy profesional. Por primera vez siento que he podido procesar y dejar atrás el pasado.",
    author: "David R.",
  },
  // Puedes añadir un tercer testimonio aquí si quieres
  // {
  //   stars: 5,
  //   text: "Texto del tercer testimonio...",
  //   author: "Nombre Apellido",
  // },
];

export default function Home() {
  const googleReviewsLink = "https://share.google/7GKlTrF0YTfa8pGSq"; // Tu enlace de Google

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

        {/* === SECCIÓN 1: ÉNFASIS EN EL PROBLEMA Y LA SOLUCIÓN === */}
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

        {/* === SECCIÓN 2: TÍTULO Y ENFOQUE === */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
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
              Terapia online: Comodidad y máxima eficacia
            </h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-10 max-w-3xl mx-auto">
              Mi enfoque es la terapia online, dándote la flexibilidad de hacer terapia desde la comodidad de tu casa en Granada, o desde donde tú elijas...
            </p>

            <div className="grid md:grid-cols-1 gap-8 text-left max-w-xl mx-auto">
              <div className="p-8 border-t-4 border-psicopiloto-green-500 bg-white/80 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-gray-700">
                  Terapia Online (Mi enfoque principal)
                </h3>
                <p className="mb-4 text-psicopiloto-gray-500">
                  Ideal para ahorrar tiempo y costes. Mi experiencia garantiza la misma calidad y cercanía que la sesión presencial.
                </p>
                <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-500">
                  <li>Acceso desde cualquier parte del mundo.</li>
                  <li><strong>Ahorro total de tiempo y costes de desplazamiento.</strong></li>
                  <li>Máxima privacidad y sensación de control en tu propio entorno.</li>
                  <li>Sesiones flexibles y ajustadas a tu ritmo de vida.</li>
                  <li>Misma eficacia y herramientas que la terapia presencial.</li>
                </ul>
              </div>

              <div className="p-8 border-t-4 border-psicopiloto-blue-500 bg-white/80 rounded-lg shadow-xl hidden">
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
                text="Empieza tu terapia online hoy"
                color="blue"
              />
            </div>
          </div>
        </section>

        {/* ... (Otras secciones como Empresas, Conoce el Proyecto, Servicios se mantienen igual) ... */}
        
        {/*
        // ===================================================================
        // ✨ NUEVA SECCIÓN DE TESTIMONIOS (OCULTA POR DEFECTO) ✨
        // ===================================================================
        // Para ACTIVAR esta sección cuando tengas reseñas:
        // 1. Edita los datos de ejemplo en 'testimonialsData' al principio de este archivo.
        // 2. BORRA la línea de comentario de abajo que empieza con '{/*'
        // 3. BORRA la línea de comentario de abajo que empieza con '*}'
        // ===================================================================
        */}
        
   
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-12 text-psicopiloto-blue-600">
              La confianza de quienes han volado conmigo
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="flex flex-col bg-white/70 p-6 rounded-lg shadow-lg border-l-4 border-psicopiloto-green-500">
                  <p className="text-2xl text-yellow-500 mb-2">
                    {'⭐️'.repeat(testimonial.stars)}
                  </p>
                  <blockquote className="italic text-psicopiloto-gray-700 mb-4 flex-grow">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="font-bold text-right text-psicopiloto-gray-700">— {testimonial.author}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href={googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white border border-gray-300 text-psicopiloto-gray-700 rounded-lg font-semibold shadow-sm transition hover:bg-gray-50 hover:shadow-md"
              >
                Ver todas las reseñas en Google
              </a>
            </div>
          </div>
        </section>
        
        {/* CTA FINAL */}
        <section className="py-16 bg-white/40 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            <Image
              src="/telefono.webp"
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
        
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8 bg-psicopiloto-sand-50 rounded-2xl shadow-xl relative z-20">
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
