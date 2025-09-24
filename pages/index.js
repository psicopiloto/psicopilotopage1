// pages/index.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo"; // ✅ importamos logo de fondo

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Psicólogo online y presencial en Granada | Psicopiloto"
        description="Psicopiloto ofrece psicoterapia online y presencial en Granada: ansiedad, estrés, depresión, autoestima, trauma, EMDR y terapia de pareja. Acompaño tu viaje hacia el bienestar emocional."
        canonical="https://psicopiloto.com/"
        additionalMetaTags={[
          { name: "keywords", content: "psicólogo Granada, psicólogo online, terapia ansiedad, depresión, autoestima, trauma, EMDR, terapia de pareja, psicología integradora" },
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicólogo online y presencial en Granada | Psicopiloto",
          description: "Psicopiloto ofrece psicoterapia online y presencial en Granada: ansiedad, estrés, depresión, autoestima, trauma, EMDR y terapia de pareja.",
          images: [
            {
              url: "/fotoinicio1.webp",
              width: 1200,
              height: 630,
              alt: "Psicólogo online y presencial en Granada - Psicopiloto",
              type: "image/webp",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <BackgroundLogo /> {/* ✅ logo fijo de fondo */}

      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        {/* HERO */}
        <PageHeader
          title="Psicopiloto — Acompaño tu viaje hacia el bienestar"
          subtitle="Un espacio seguro, cercano y profesional para que recuperes control, calma y sentido en tu vida. Aquí encontrarás escucha, empatía y herramientas prácticas para afrontar tus retos con confianza."
          backgroundImage="/fotoinicio1.webp"
          cta={{ href: "/contacto", text: "Agenda tu primera cita", color: "green" }}
        />

        {/* SOBRE MÍ */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Sobre mí</h2>
            <p className="leading-relaxed mb-4 text-psicopiloto-gray-500">
              Soy psicólogo con una trayectoria poco común: antes fui <strong>piloto militar de los aviones apagafuegos del 43 Grupo de FF.AA.</strong> 
              De la aviación aprendí valores como la humildad, el trabajo en equipo y la gestión de errores. 
              Ahora los aplico a la psicología para acompañarte en tu propio viaje vital, combinando mi formación en <strong>psicología integradora</strong>, <strong>trauma</strong> y <strong>EMDR</strong> con una visión clara: cada persona es única y merece ser escuchada con respeto y cercanía.
            </p>
            <AnimatedCTA href="/sobre-mi" text="Conóceme mejor" color="blue" />
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Filosofía</h2>
            <p className="leading-relaxed mb-4 text-psicopiloto-gray-500">
              Igual que un copiloto apoya al piloto en momentos de turbulencia, yo estaré a tu lado para ayudarte a ver con más claridad, tomar mejores decisiones y recuperar el rumbo. La vida no siempre es un vuelo estable, pero con acompañamiento se hace más seguro y llevadero.
            </p>
            <AnimatedCTA href="/que-es-psicopiloto" text="Descubre la filosofía" color="blue" />
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8 text-psicopiloto-green-500">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Terapia individual</h3>
                <p>Ansiedad, estrés, duelo, autoestima. Sesiones de 45–60 minutos en modalidad online o presencial.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Terapia de pareja</h3>
                <p>Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-psicopiloto-green-600">Si eres empresa</h3>
                <p>Programas de bienestar, liderazgo consciente y prevención de errores, inspirados en valores de la aviación.</p>
              </div>
            </div>
            <div className="mt-8">
              <AnimatedCTA href="/servicios" text="Ver todos los servicios" color="green" />
            </div>
          </div>
        </section>

        {/* ÁREAS DE TRABAJO */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Áreas de trabajo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Ansiedad y estrés", desc: "Insomnio, tensión, preocupaciones constantes." },
                { title: "Depresión y ánimo bajo", desc: "Falta de motivación, tristeza o apatía." },
                { title: "Autoestima y apego", desc: "Inseguridad, dificultad para poner límites." },
                { title: "Terapia de pareja", desc: "Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión." },
                { title: "Trauma y experiencias difíciles", desc: "Recuerdos dolorosos, bloqueos emocionales, EMDR." },
                { title: "Si eres empresa", desc: "liderazgo consciente y prevención de errores, gestión de equipos y factores humanos adaptada a las necesidades de tu empresa." }
              ].map((s, i) => (
                <div key={i} className="p-6 bg-white/40 rounded-lg shadow-sm border border-psicopiloto-gray-500/10">
                  <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">{s.title}</h3>
                  <p className="text-psicopiloto-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <AnimatedCTA href="/servicios" text="Descubre todos los servicios" color="green" />
            </div>
          </div>
        </section>

        {/* TERAPIA ONLINE */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Psicología online</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Comodidad: conéctate desde casa, oficina o de viaje.",
                "Ahorro de tiempo: sin desplazamientos ni esperas.",
                "Flexibilidad horaria: sesiones adaptadas a tu agenda.",
                "Continuidad: no interrumpes la terapia aunque cambies de ciudad.",
                "Accesibilidad: ideal para zonas rurales o residentes en el extranjero.",
                "Confidencialidad garantizada con plataformas seguras.",
                "Evidencia científica: tan eficaz como la presencial en muchos casos.",
                "Menor ansiedad inicial al hablar desde un entorno familiar.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-psicopiloto-sand-50 rounded-lg shadow-sm hover:shadow-md transition">
                  <span className="flex-none w-10 h-10 rounded-full bg-psicopiloto-green-500 text-white inline-flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="leading-relaxed text-psicopiloto-gray-500">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl text-psicopiloto-gray-500 mb-4">¿Te interesa la comodidad y eficacia de la terapia online?</p>
              <AnimatedCTA href="/servicios#online" text="Quiero una consulta online" color="green" />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-gray-700">Da el primer paso</h2>
            <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">
              No tienes que hacerlo todo hoy ni solo. A veces lo más difícil es animarse a empezar, pero también es el paso que abre nuevas posibilidades. Estoy aquí para escucharte y acompañarte en tu viaje.
            </p>
            <AnimatedCTA href="/contacto" text="Contacta" color="blue" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
