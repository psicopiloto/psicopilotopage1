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
        // --- OPTIMIZACIÓN A: SEO TITLE (Fusión de Keywords de servicio, ubicación y autoridad) ---
        title="Psicólogo General Sanitario en Granada | Terapia EMDR y CRM/TEM | Psicopiloto"
        // --- OPTIMIZACIÓN B: META DESCRIPTION (Destaca el PVU y el alcance dual) ---
        description="Entrenamiento para la alta complejidad. Terapia EMDR, apego y ACT para trauma y ansiedad. Consultoría de Factores Humanos (CRM/TEM) para liderazgo y seguridad operacional. ¡Recupera el control!"
        canonical="https://psicopiloto.com/"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicólogo Granada, psicólogo online, terapia ansiedad, depresión, trauma, EMDR, terapia de pareja, psicología integradora, gestión de crisis, CRM, TEM, liderazgo",
          },
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicólogo General Sanitario en Granada | Terapia EMDR y CRM/TEM | Psicopiloto",
          description:
            "Psicopiloto ofrece psicoterapia online y consultoría: ansiedad, trauma, EMDR, liderazgo y gestión de errores basados en factores humanos de aviación.",
          images: [
            {
              url: "/fotoinicio1.webp",
              width: 1200,
              height: 630,
              alt: "Psicólogo General Sanitario y experto en CRM/TEM - Jose Carlos Rodríguez Retamar",
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
          // --- OPTIMIZACIÓN C: H1 (El Slogan de mayor impacto) ---
          title="PSICOPILOTO: Dirige tu Vida y tu Empresa con la Precisión del Vuelo de Alta Seguridad"
          // --- OPTIMIZACIÓN C: Subtítulo (Establece el dolor y la autoridad dual) ---
          subtitle="¿Experimentando Turbulencias Personales u Organizacionales? Fusionamos 18 años de experiencia aeronáutica (CRM/TEM) con la Psicoterapia Integradora para que recuperes la eficacia y el control ejecutivo en entornos complejos."
          backgroundImage="/fotoinicio1.webp"
          cta={{
            href: "/contacto",
            // --- OPTIMIZACIÓN C: CTA de Mayor Impacto ---
            text: "Empieza a volar sin miedo",
            color: "green",
          }}
        />

        {/* SERVICIOS */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-600">
              Nuestras Rutas de Vuelo: Dos Ejes de Transformación
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                // --- OPTIMIZACIÓN D: Contenido - Enfoque en Beneficio y Técnicas ---
                {
                  title: "Psicopiloto para Ti: Bienestar y Regulación Emocional",
                  desc: "Terapia enfocada en superar **ansiedad, estrés, depresión y trauma** (APEGO). Utilizamos **EMDR, ACT** y técnicas de mentalización para lograr cambios profundos y duraderos en tu vida personal.",
                  link: "/servicios",
                },
                {
                  title: "Psicopiloto para Empresas: Liderazgo y Factores Humanos (CRM)",
                  desc: "Consultoría especializada en **liderazgo consciente, toma de decisiones** y **gestión de errores (TEM)**. Aplicamos el rigor y la metodología de la aviación para mejorar la **seguridad operacional** de tu equipo.",
                  link: "/servicios",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/40 rounded-lg shadow-sm border border-psicopiloto-gray-500/10"
                >
                  <h3 className="font-semibold text-xl mb-2 text-psicopiloto-honey-500">
                    {s.title}
                  </h3>
                  {/* --- CORRECCIÓN UX: Se sube el contraste del texto a gray-600 --- */}
                  <p className="text-psicopiloto-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <AnimatedCTA
                href="/servicios"
                text="Ver todas las Rutas de Vuelo y enfoques"
                color="honey"
              />
            </div>
          </div>
        </section>

        {/* TERAPIA ONLINE (El contenido es excelente, solo se ajusta el H2) */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              Psicología Online: Tu Consulta, Tu Espacio Seguro
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
                  <span className="flex-none w-10 h-10 rounded-full bg-psicopiloto-green-600 text-white inline-flex items-center justify-center">
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
                  <p className="leading-relaxed text-psicopiloto-gray-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl text-psicopiloto-gray-600 mb-4">
                ¿Listo para iniciar tu viaje de bienestar, estés donde estés?
              </p>
              <AnimatedCTA
                href="/contacto"
                text="Reservar mi sesión online"
                color="green"
              />
            </div>
          </div>
        </section>

        {/* SOBRE MÍ (Sección de Autoridad) */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white rounded-lg shadow-md">
              {/* Texto */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                  Mi Propuesta de Valor Única
                </h2>
                {/* --- OPTIMIZACIÓN E: Texto de Persuasión y Autoridad (E-A-T) --- */}
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-600">
                  Soy **Psicólogo General Sanitario** (M-30360) con una trayectoria atípica: fui **Piloto Militar Comandante e Instructor de CRM** durante 18 años. De la aviación aprendí la **gestión de amenazas (TEM)** y la toma de decisiones bajo presión.
                  <br />
                  <br />
                  Ahora aplico ese rigor a la **Psicoterapia Integradora** (EMDR, ACT, Apego) para ayudarte a **recuperar el control ejecutivo** de tu vida. Mi objetivo es que aprendas a **pilotar tus emociones** con la precisión de un profesional.
                </p>
                <AnimatedCTA
                  href="/sobre-mi"
                  text="Conóceme a fondo"
                  color="blue"
                />
              </div>
              {/* Imagen derecha */}
              <div className="order-1 md:order-2 flex justify-center">
                <Image
                  src="/filosofia.webp"
                  alt="Psicólogo experto en EMDR, trauma y psicología aeronáutica - Jose Carlos Rodríguez Retamar"
                  width={500}
                  height={350}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FILOSOFÍA (Sección de Conexión) */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white rounded-lg shadow-md">
              {/* Imagen izquierda centrada */}
              <div className="order-1 md:order-1 flex justify-center">
                <Image
                  src="/sobre2.webp"
                  alt="Filosofía de Psicopiloto: combinar la calma y el rigor de la aviación con la terapia"
                  width={300}
                  height={200}
                  className="rounded-lg w-auto h-auto object-cover"
                />
              </div>
              {/* Texto */}
              <div className="order-2 md:order-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
                  Mi Filosofía: El Control Ejecutivo Flexible
                </h2>
                {/* --- OPTIMIZACIÓN F: Texto con foco en Metáfora --- */}
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-600">
                  Mi enfoque se basa en la **humildad, el rigor y la seguridad operacional**. Cada persona, como cada vuelo, es única y requiere un **Plan de Vuelo Personalizado**.
                  <br />
                  <br />
                  Te ofrezco un espacio seguro y confidencial donde, juntos, trazaremos la ruta para que puedas enfrentar cualquier **turbulencia** (ansiedad, trauma, crisis) y realizar un **aterrizaje seguro** en la calma y el sentido.
                </p>
                <AnimatedCTA
                  href="/que-es-psicopiloto"
                  text="Descubre la filosofía completa"
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
              alt="Contacto telefónico para iniciar terapia psicológica online con Psicopiloto"
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
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
                  Inicia tu Plan de Vuelo
                </h2>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-600">
                  Has dado el paso más difícil: llegar hasta aquí. Tras una llamada o un mensaje encontrarás un espacio seguro y cercano donde ser escuchado. Estoy aquí para acompañarte en tu proceso y ayudarte a **recuperar el mando y la dirección** de tu vida.
                </p>
                <AnimatedCTA href="/contacto" text="Contacta y Agenda tu Cita" color="green" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
