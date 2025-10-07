// pages/index.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo"; // <-- Mantenemos NextSeo para el SEO de la página
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image"; 
// 🚨 NO ES NECESARIO IMPORTAR HEAD NI SCRIPT AQUÍ.

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        // --- CONTENIDO SEO CORRECTO ---
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
          description:
            "Psicopiloto ofrece psicoterapia online y presencial en Granada: ansiedad, estrés, depresión, autoestima, trauma, EMDR y terapia de pareja.",
          images: [
            {
              url: "/fotoinicio1.webp",
              width: 1200,
              height: 630,
              alt: "Psicólogo online y presencial en Granada - Jose Carlos Rodríguez Retamar",
              type: "image/webp",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <BackgroundLogo />
      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        {/* HERO */}
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

        {/* SERVICIOS */}
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

        {/* TERAPIA ONLINE */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">
              Psicología online
            </h2>
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
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-psicopiloto-sand-50 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="flex-none w-10 h-10 rounded-full bg-psicopiloto-green-500 text-white inline-flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <p className="leading-relaxed text-psicopiloto-gray-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl text-psicopiloto-gray-500 mb-4">
                ¿Te interesa la comodidad y eficacia de la terapia online?
              </p>
              <AnimatedCTA
                href="/contacto"
                text="Quiero una consulta online"
                color="green"
              />
            </div>
          </div>
        </section>

        
        {/* SOBRE MÍ */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white rounded-lg shadow-md">
              {/* Texto */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                  Sobre mí
                </h2>
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-500">
                  Soy psicólogo con una trayectoria poco común: antes fui{" "}
                  <strong>
                    piloto militar de los aviones apagafuegos del 43 Grupo de
                    FF.AA.
                  </strong>
                  . De la aviación aprendí valores como la humildad, el trabajo
                  en equipo y la gestión de errores. Ahora los aplico a la
                  psicología para acompañarte en tu propio viaje vital,
                  combinando mi formación en <strong>psicología integradora</strong>,{" "}
                  <strong>trauma</strong> y <strong>EMDR</strong> con una visión
                  clara: cada persona es única y merece ser escuchada con respeto
                  y cercanía.
                </p>
                <AnimatedCTA
                  href="/sobre-mi"
                  text="Conóceme mejor"
                  color="blue"
                />
              </div>
              {/* Imagen derecha */}
              <div className="order-1 md:order-2 flex justify-center">
                <Image
                  src="/filosofia.webp"
                  alt="Psicólogo experto en EMDR y trauma con pasado de piloto militar"
                  width={500}
                  height={350}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

      {/* FILOSOFÍA */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white rounded-lg shadow-md">
              {/* Imagen izquierda centrada */}
              <div className="order-1 md:order-1 flex justify-center">
                <Image
                  src="sobre2.webp"
                  alt="Jose Carlos Rodríguez aplicando filosofía de la aviación a la terapia"
                  width={300}
                  height={200}
                  className="rounded-lg w-auto h-auto object-cover"
                />
              </div>
              {/* Texto */}
              <div className="order-2 md:order-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                  Filosofía
                </h2>
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-500">
                  Hoy combino todo lo aprendido —en la aviación, en la psicología
                  y en el voluntariado— para acompañar a quienes buscan recuperar
                  el control de su vida. No hay dos personas iguales: cada
                  proceso es único, con su propio ritmo y sus tiempos. Mi
                  compromiso es ofrecerte un espacio seguro, de confianza y
                  confidencialidad total, donde juntos podamos trabajar para que
                  vuelvas a pilotar tu vida con calma y dirección.
                </p>
                <AnimatedCTA
                  href="/que-es-psicopiloto"
                  text="Descubre la filosofía"
                  color="blue"
                />
              </div>
            </div>
          </div>
        </section>

{/* CTA FINAL */}
<section className="py-16 bg-white/40 relative overflow-visible">
  <div className="container mx-auto max-w-5xl relative">
    {/* Imagen sobresaliente */}
    <Image
      src="/telefono.png"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white rounded-lg shadow-md">
      <div className="col-span-1 md:col-start-2 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">
          Da el primer paso
        </h2>
        <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">
          Has dado el paso más difícil: llegar hasta aquí. Tras una llamada o un mensaje encontrarás un espacio seguro y cercano donde ser escuchado. Estoy aquí para acompañarte en tu proceso y ayudarte a recuperar la calma.
        </p>
        <AnimatedCTA href="/contacto" text="Contacta" color="green" />
      </div>
        </div>
      </div>
    </div>
</section>

      </main>

      <Footer />
    </div>
  );
}
