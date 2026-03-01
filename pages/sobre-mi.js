// pages/sobre-mi.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";
import clsx from 'clsx'; 

export default function SobreMi() {
  const fasesTrayectoria = [
    {
      title: "Fase 1: El inicio – vocación por la psicología",
      img: "/Facu.webp",
      alt: "Jose Carlos Rguez. Retamar estudiando psicología en la Universidad de Granada",
      content: [
        "Me licencié en Psicología por la Universidad de Granada en 2003. Durante esa etapa trabajé en prácticas con personas en procesos de drogodependencia, aprendiendo la importancia de la escucha y el acompañamiento.",
        "Fui voluntario durante 4 años trabajando con personas mayores en fases iniciales de demencia con terapias como la Terapia de la Reminiscencia, ayudándoles y acompañándoles a trabajar así la memoria y las emociones.",
        "Cursé el Curso de Adaptación Pedagógica, adquiriendo visión educativa y de orientación.",
      ],
    },
    {
      title: "Fase 2: La aviación – disciplina, liderazgo y seguridad",
      img: "/sobre4.webp",
      alt: "Piloto militar en la Academia General del Aire acumulando horas de vuelo y experiencia en aviación",
      content: [
        "Ingresé en la Academia General del Aire en 2007, acumulando más de 2.500 horas de vuelo en aviones como ENAER T-35C Pillán, Aviocar C-212, Canadair CL-215T y CL-415.",
      ],
      list: [
        "Piloto comandante en misiones de incendios en España, Grecia y Portugal.",
        "Instructor de vuelo y simulador, formando a nuevas generaciones.",
        "Jefe de Crew Resource Management (CRM), desarrollando programas en factores humanos.",
        "Facilitador CRM e impulsor de EBT y CBTA en simuladores en Milán.",
      ],
    },
    {
      title: "Fase 3: El regreso a la psicología – volver a la esencia",
      img: "/emdr.webp",
      alt: "Psicólogo con habilitación sanitaria, especializado en trauma y EMDR",
      content: [
        "Retomé mi vocación en psicología, habilitándome como <strong>Psicólogo con Habilitación Sanitaria</strong> en 2015 en Madrid y especializándome en psicología aeronáutica, integradora, terapia breve, trauma y <strong>EMDR</strong>.",
        "Colaboré en la creación de Edades Granada, asesorando en gestión y manejo de errores aplicando lo aprendido en aviación.",
        "Tras la intensa campaña de incendios forestales de 2025, una de las más exigentes de la historia reciente de España, regresé a Granada en septiembre para volcarme de lleno en la psicología, integrando la experiencia de liderazgo y gestión de crisis aprendida como piloto.",
        "<strong>PSICOPILOTO</strong> nace de la unión de mis dos pasiones: la <strong>Psicología</strong> y la <strong>aviación</strong>.",
      ],
    },
    {
      title: "Fase 4: El voluntariado",
      img: "/voluntariado.webp",
      alt: "Jose Carlos Rguez. Retamar haciendo voluntariado en Amalgama Social",
      content: [
        "El voluntariado ha sido siempre un pilar en mi vida, colaborando con Solidarios para el Desarrollo trabajando con personas mayores y actualmente en Amalgama Social, atendiendo ansiedad, estrés, duelo, autoestima y trauma.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Jose Carlos Rguez. Retamar, Psicólogo y Piloto Militar | Psicopiloto"
        description="Conoce la trayectoria de Jose Carlos Rguez. Retamar, psicólogo con Habilitación Sanitaria y ex-piloto militar. Liderazgo, gestión de estrés y EMDR. Experiencia única."
        canonical="https://psicopiloto.com/sobre-mi"
        openGraph={{
          title: "Jose Carlos Rguez. Retamar, Psicólogo y Piloto Militar | Psicopiloto",
          description: "Conoce la trayectoria de Jose Carlos Rguez. Retamar, psicólogo con Habilitación Sanitaria y ex-piloto militar. Liderazgo, gestión de estrés y EMDR.",
          images: [{ url: "https://www.psicopiloto.com/foto-copao.webp", width: 800, height: 600, alt: "Retrato profesional de Jose Carlos Rguez. Retamar" }],
        }}
      />
      
      <BackgroundLogo />

      <Nav />

      <PageHeader
        title="Conóceme: Jose Carlos Rguez. Retamar"
        subtitle="Una trayectoria entre la aviación y la psicología para ayudarte a volar con seguridad en tu vida."
        backgroundImage="/header-sobremi.webp"
      />

      <main className="flex-grow py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl leading-relaxed bg-white/40 p-8 rounded-2xl shadow-lg">
          
          {/* INTRODUCCIÓN - ORDEN FIJO */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-psicopiloto-blue-600">Mi historia: De la cabina al consultorio</h2>
              <p>
                Mi nombre es <strong>Jose Carlos Rguez. Retamar</strong> y soy <strong>psicólogo</strong> colegiado nº AO14457 con Habilitación Sanitaria y durante muchos años,<strong>piloto militar</strong>.
              </p>
              <p className="mt-4">
               Esa doble vida me enseñó algo que no aparece en los manuales: que las turbulencias más difíciles no siempre están en el aire, sino dentro de cada persona. En la cabina aprendí a sostener la presión cuando todo se acelera, 
            a decidir con claridad cuando el cuerpo tiembla y a mantener la humildad incluso en los momentos de mayor control. En la psicología descubrí que esas mismas fuerzas actúan en nuestra historia, 
            en nuestros vínculos y en las heridas que arrastramos sin darnos cuenta. Hoy trabajo desde esa mirada integradora, uniendo trauma, apego y regulación emocional para ayudar a recuperar seguridad interna, 
            comprender los patrones que nos bloquean y encontrar un modo de vivir más estable, más consciente y más fiel a uno mismo
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/jc-psicopiloto.webp"
                alt="Retrato de Jose Carlos Rguez. Retamar, psicólogo"
                width={400}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </section>

          {/* BUCLE DE LA TRAYECTORIA (SOLUCIÓN ORDEN MÓVIL/DESKTOP) */}
          {fasesTrayectoria.map((fase, i) => (
            <section
              key={i}
              className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              aria-labelledby={`fase-title-${i}`}
            >
              {/* === CAJA DEL TEXTO === */}
              <div 
                // ⬇️ MÓVIL: order-1 (Texto va arriba)
                // ⬇️ DESKTOP: Alterna order-2 (derecha) si es par; order-1 (izquierda) si es impar.
                className={clsx("order-1", {
                    "md:order-2": i % 2 === 0, // Par (0, 2): Texto a la derecha
                    "md:order-1": i % 2 !== 0, // Impar (1, 3): Texto a la izquierda
                })}
              >
                <h3 id={`fase-title-${i}`} className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
                  {fase.title}
                </h3>
                {fase.content.map((p, idx) => (
                  <p
                    key={idx}
                    className="mt-4"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
                {fase.list && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {fase.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* === CAJA DE LA IMAGEN === */}
              <div 
                // ⬇️ MÓVIL: order-2 (Imagen va abajo, después del texto)
                // ⬇️ DESKTOP: Alterna order-1 (izquierda) si es par; order-2 (derecha) si es impar.
                className={clsx("order-2", {
                    "md:order-1": i % 2 === 0, // Par (0, 2): Imagen a la izquierda (1, 3)
                    "md:order-2": i % 2 !== 0, // Impar (1, 3): Imagen a la derecha (2, 4)
                })}
              >
                <Image
                  src={fase.img}
                  alt={fase.alt}
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </section>
          ))}

          {/* SECCIÓN FINAL */}
          <section className="mb-20" aria-labelledby="hoy-psicopiloto-title">
            <h2 id="hoy-psicopiloto-title" className="text-2xl font-semibold mb-4 text-psicopiloto-blue-600">
              Hoy: El Enfoque Psicopiloto
            </h2>
            <p>
              Hoy, en <strong>Psicopiloto</strong>, uno lo aprendido en aviación con la psicología para ofrecer un acompañamiento diferente.
              Mi trabajo terapéutico se apoya en una formación sólida en trauma psicológico, apego y procesos de regulación emocional, entendidos desde una perspectiva integradora. Me he especializado en comprender cómo las experiencias tempranas, los vínculos significativos y los eventos críticos moldean la forma en que pensamos, sentimos y actuamos en el presente.
En consulta, acompaño a las personas a reconstruir seguridad interna, identificar patrones que se originan en heridas pasadas y desarrollar nuevas formas de relacionarse consigo mismas y con los demás. Trabajo desde modelos basados en la evidencia —incluyendo enfoques centrados en el trauma, la teoría del apego y la integración de técnicas de procesamiento emocional— siempre adaptados a la historia y ritmo de cada persona.
Mi experiencia en aviación, donde la gestión del estrés, la anticipación y la toma de decisiones bajo presión son esenciales, me permite ofrecer una mirada especialmente sensible a cómo el trauma afecta al cuerpo, la mente y la capacidad de mantener el control en situaciones complejas. Esta combinación me ayuda a crear un espacio terapéutico seguro, claro y orientado a recuperar la confianza, la estabilidad y la capacidad de avanzar.
                Si en la cabina de un avión entrenábamos la mente para afrontar lo inesperado, en la terapia aplico la misma filosofía: ayudarte a ganar <strong>confianza</strong>, manejar la <strong>ansiedad</strong> y recuperar el <strong>control de tu vida</strong>.
            </p>
            <p className="mt-4">Porque todos merecemos <strong>volar con seguridad</strong>, también en nuestro propio camino personal.</p>
          </section>

          {/* CTA */}
          <div className="mt-12 text-center">
            <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
