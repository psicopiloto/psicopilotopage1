// pages/index.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";

const testimonialsData = [
  {
    stars: 5,
    text: "Aquí va el texto de tu primera reseña real. Bórra este texto de ejemplo y pega el de tu cliente.",
    author: "Nombre del Cliente 1",
  },
  {
    stars: 5,
    text: "Aquí va el texto de tu segunda reseña. Si tienes más, puedes copiar y pegar este bloque entero a continuación.",
    author: "Nombre del Cliente 2",
  },
];

export default function Home() {
  const googleReviewsLink = "https://share.google/7GKlTrF0YTfa8pGSq";

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
          description: "Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita.",
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
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">Ansiedad y Estrés</h3>
                <p className="text-psicopiloto-gray-700">Preocupación constante, tensión muscular, insomnio y la sensación de que algo malo va a pasar. Juntos podemos desactivar el "modo alerta".</p>
                <a href="/ansiedad" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Saber más sobre ansiedad →</a>
              </div>
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">Trauma y EMDR</h3>
                <p className="text-psicopiloto-gray-700">Recuerdos intrusivos, reacciones exageradas y el peso de experiencias pasadas. Con la terapia EMDR y un enfoque integrador, es posible sanar.</p>
                <a href="/servicios" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Descubre el EMDR →</a>
              </div>
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">Autoestima y Liderazgo</h3>
                {/* ✨ CORRECCIÓN DE TONO: Metáfora suavizada */}
                <p className="text-psicopiloto-gray-700">Dificultad para poner límites, inseguridad, o un síndrome del impostor. Gana la autoconfianza que necesitas para tomar las riendas de tu vida.</p>
                <a href="/sobre-mi" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Mi filosofía →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-psicopiloto-green-600">Un enfoque que te devuelve el control</h2>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-4">Como psicólogo y ex-piloto, sé lo que significa <strong>gestionar la presión, tomar decisiones difíciles</strong> y actuar con seguridad. Aplico esta filosofía a tu proceso terapéutico.</p>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-6">Mi terapia es <strong>integradora</strong>, adaptando las mejores herramientas (Terapia EMDR, cognitivo-conductual, humanista) a tus necesidades únicas, para que puedas <strong>recuperar la calma y la claridad</strong>.</p>
                <AnimatedCTA href="/servicios" text="Descubre mis servicios" color="blue" />
              </div>
              <div className="hidden md:block">
                <Image src="/filosofia.webp" alt="Psicopiloto, uniendo psicología y aviación para un enfoque integrador" width={600} height={400} className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">Terapia online: Comodidad y máxima eficacia</h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-10 max-w-3xl mx-auto">Mi enfoque es la terapia online, dándote la flexibilidad de hacer terapia desde la comodidad de tu casa en Granada, o desde donde tú elijas.</p>
            <div className="grid md:grid-cols-1 gap-8 text-left max-w-xl mx-auto">
              <div className="p-8 border-t-4 border-psicopiloto-green-500 bg-white/80 rounded-lg shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-gray-700">Terapia Online (Mi enfoque principal)</h3>
                <p className="mb-4 text-psicopiloto-gray-500">Ideal para ahorrar tiempo y costes. Mi experiencia garantiza la misma calidad y cercanía que la sesión presencial.</p>
                <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-500">
                  <li>Acceso desde cualquier lugar.</li>
                  <li><strong>Ahorro de tiempo y costes de desplazamiento.</strong></li>
                  <li>Máxima privacidad y comodidad en tu propio entorno.</li>
                  <li>Sesiones flexibles y adaptadas a tu ritmo de vida.</li>
                  <li>Eficacia demostrada, equivalente a la terapia presencial.</li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <AnimatedCTA href="/contacto" text="Empieza tu terapia online" color="blue" />
            </div>
          </div>
        </section>
        
      
        // ===================================================================
        // === GUÍA PARA AÑADIR TESTIMONIOS ===
        //
        // --> PASO 1: EDITA ESTE BLOQUE CON TUS RESEÑAS REALES
        // --> PASO 2: BORRA LA LÍNEA DE ABAJO ' {/* ' Y LA LÍNEA FINAL ' * / } ' PARA ACTIVAR LA SECCIÓN
        // ===================================================================


       
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-12 text-psicopiloto-blue-600">La confianza de quienes han volado conmigo</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="flex flex-col bg-white/70 p-6 rounded-lg shadow-lg border-l-4 border-psicopiloto-green-500">
                  <p className="text-2xl text-yellow-500 mb-2">{'⭐️'.repeat(testimonial.stars)}</p>
                  <blockquote className="italic text-psicopiloto-gray-700 mb-4 flex-grow">"{testimonial.text}"</blockquote>
                  <p className="font-bold text-right text-psicopiloto-gray-700">— {testimonial.author}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white border border-gray-300 text-psicopiloto-gray-700 rounded-lg font-semibold shadow-sm transition hover:bg-gray-50 hover:shadow-md">Ver todas las reseñas en Google</a>
            </div>
          </div>
        </section>
      

        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">Psicopiloto para Empresas</h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-8 max-w-3xl mx-auto">Transfiere la mentalidad de cabina (CRM, Liderazgo, Gestión del Estrés) a tu equipo. Mejora la comunicación, toma de decisiones bajo presión y el bienestar de tu organización.</p>
            <div className="md:w-2/3 mx-auto">
              <AnimatedCTA href="/servicios" text="Ver servicios de consultoría y formación" color="honey" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold mb-8 text-center text-psicopiloto-blue-600">Conoce el Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white/70 rounded-2xl shadow-xl transition transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">Sobre el Psicólogo</h3>
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-700">Soy Jose Carlos Rguez. Retamar, psicólogo y ex-piloto militar. Mi experiencia en aviación (gestión de crisis, factores humanos y liderazgo) se integra en la terapia para ofrecerte un enfoque sólido y práctico.</p>
                <div className="mt-auto pt-4">
                  <AnimatedCTA href="/sobre-mi" text="Conóceme mejor" color="blue" />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">La Filosofía Psicopiloto</h3>
                {/* ✨ CORRECCIÓN DE TONO: Metáfora suavizada */}
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-700">El objetivo es que recuperes la seguridad y la dirección en tu vida. Mi compromiso es ofrecerte un espacio de confianza, utilizando terapia integradora y EMDR para que recuperes el control de tus emociones.</p>
                <div className="mt-auto pt-4">
                  <AnimatedCTA href="/que-es-psicopiloto" text="Descubre la filosofía" color="blue" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-500">Áreas de Intervención</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Ansiedad y estrés", desc: "Insomnio, tensión, preocupaciones constantes. Recupera el control y la calma diaria con herramientas prácticas." },
                { title: "Depresión y ánimo bajo", desc: "Falta de motivación, tristeza o apatía. Vuelve a encontrar el sentido y la dirección en tu vida." },
                { title: "Autoestima y apego", desc: "Inseguridad, dificultad para poner límites. Fortalece tu identidad y establece relaciones sanas." },
                { title: "Terapia de pareja", desc: "Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión perdida." },
                { title: "Trauma y experiencias difíciles", desc: "Recuerdos dolorosos, bloqueos emocionales. Procesamiento con EMDR para sanar el pasado." },
                { title: "Si eres empresa", desc: "Liderazgo consciente y prevención de errores, gestión de equipos y factores humanos adaptada a las necesidades de tu empresa." },
              ].map((s, i) => (
                <div key={i} className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-sm border border-psicopiloto-gray-500/10 transition transform hover:-translate-y-1">
                  <h3 className="font-semibold text-xl mb-2 text-psicopiloto-honey-500">{s.title}</h3>
                  <p className="text-psicopiloto-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <AnimatedCTA href="/servicios" text="Descubre todos los servicios" color="honey" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-psicopiloto-sand-50 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            <Image
              src="/telefono.webp"
              alt="Contacto telefónico para iniciar terapia psicológica online"
              width={400}
              height={400}
              className={`w-[200px] h-auto mx-auto mb-6 md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-10 md:w-[350px] lg:w-[400px] lg:-left-20 z-30 drop-shadow-xl`}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8 bg-white rounded-2xl shadow-xl relative z-20">
              <div className="col-span-1 md:col-start-2 md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">Da el primer paso</h2>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">Has dado el paso más difícil: llegar hasta aquí. Tras una llamada o un mensaje encontrarás un espacio seguro y cercano para empezar a sanar tus preocupaciones.</p>
                <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
