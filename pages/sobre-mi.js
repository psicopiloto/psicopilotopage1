import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
// ✨ CORRECCIÓN A: Importar Next Image para optimización de rendimiento
import Image from "next/image"; 

export default function SobreMi() {
  const fasesTrayectoria = [ // Renombramos 'fases' a 'fasesTrayectoria' para claridad
      {/* Fases de trayectoria */}
          {fasesTrayectoria.map((fase, i) => (
            <section 
                key={i} 
                className="mb-20 grid md:grid-cols-2 gap-12 items-center"
                aria-labelledby={`fase-title-${i}`} 
            >
              {/* ... (Div de la imagen) ... */}
              
              <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <h3 id={`fase-title-${i}`} className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
                  {fase.title}
                </h3>
                {fase.content.map((p, idx) => (
                  <p 
                    key={idx} 
                    className="mt-4"
                    // ✨ CORRECCIÓN CLAVE: Usamos dangerouslySetInnerHTML para renderizar el <strong>
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
            </section>
          ))}
    {
      title: "Fase 1: El inicio – vocación por la psicología",
      img: "/sobre2.webp",
      alt: "Jose Carlos Rodríguez estudiando psicología en la Universidad de Granada", // Alt descriptivo
      content: [
        "Me licencié en Psicología por la Universidad de Granada en 2003. Durante esa etapa trabajé en prácticas con personas en procesos de drogodependencia, aprendiendo la importancia de la escucha y el acompañamiento.",
        "Cursé el Curso de Adaptación Pedagógica, adquiriendo visión educativa y de orientación.",
      ],
    },
    {
      title: "Fase 2: La aviación – disciplina, liderazgo y seguridad",
      img: "/sobre3.webp",
      alt: "Piloto militar en la Academia General del Aire acumulando horas de vuelo y experiencia en aviación", // Alt descriptivo
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
      img: "/sobre1.webp",
      alt: "Psicólogo con habilitación sanitaria, especializado en trauma y EMDR", // Alt descriptivo y SEO
      content: [
        // ✨ CORRECCIÓN B: Reforzar las certificaciones con etiquetas semánticas
        "Retomé mi vocación en psicología, habilitándome como <strong>Psicólogo con Habilitación Sanitaria</strong> en 2015 y especializándome en psicología aeronáutica, integradora, terapia breve, trauma y <strong>EMDR</strong>.",
        "Colaboré en la creación de Edades Granada, asesorando en gestión y manejo de errores aplicando lo aprendido en aviación.",
      ],
    },
    {
      title: "Fase 4: El voluntariado – la parte más humana",
      img: "/sobre2.webp",
      alt: "Jose Carlos Rodríguez haciendo voluntariado en Amalgama Social", // Alt descriptivo
      content: [
        "El voluntariado ha sido siempre un pilar en mi vida, colaborando con Solidarios para el Desarrollo y actualmente en Amalgama Social, atendiendo ansiedad, estrés, duelo, autoestima y trauma.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        // ✨ CORRECCIÓN C: SEO Title optimizado para E-A-T y keywords
        title="Jose Carlos Rodríguez, Psicólogo y Piloto Militar | Psicopiloto"
        // ✨ CORRECCIÓN C: Meta Description optimizada para E-A-T
        description="Conoce la trayectoria de Jose Carlos Rodríguez, psicólogo con Habilitación Sanitaria y ex-piloto militar. Liderazgo, gestión de estrés y EMDR. Experiencia única."
        canonical="https://psicopiloto.com/sobre-mi"
        // ✨ CORRECCIÓN D: Añadir OpenGraph para compartir
        openGraph={{
          title: "Jose Carlos Rodríguez, Psicólogo y Piloto Militar | Psicopiloto",
          description: "Psicólogo con Habilitación Sanitaria y ex-piloto militar...",
          // Usar una imagen de retrato profesional
          images: [{ url: "/sobre1.webp", width: 800, height: 600, alt: "Retrato profesional de Jose Carlos Rodríguez" }],
        }}
      />
      
      <BackgroundLogo />

      <Nav />

      <PageHeader
        // ✨ CORRECCIÓN E: H1 debe ser el título principal. Se mantiene la claridad del H1 de tu PageHeader.
        title="Conoce al Psicopiloto: Jose Carlos Rodríguez Retamar" 
        subtitle="Una trayectoria entre la aviación y la psicología para ayudarte a volar con seguridad en tu vida."
        backgroundImage="/header-sobremi.webp"
      />

      <main className="flex-grow py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl leading-relaxed bg-white/40 p-8 rounded-2xl shadow-lg">
          {/* Intro */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* ✨ CORRECCIÓN F: Usar H2 para el subtítulo clave, si no hay otro H1 en la página */}
              <h2 className="text-xl font-semibold mb-4 text-psicopiloto-blue-600">Mi historia: De la cabina al diván</h2>
              <p>
                Mi nombre es <strong>Jose Carlos Rodríguez Retamar</strong> y soy <strong>psicólogo con Habilitación Sanitaria</strong> y <strong>piloto militar</strong>. 
                <strong>Psicopiloto</strong> nace de la unión de mis dos pasiones: la <strong>aviación</strong> y la <strong>psicología</strong>.
              </p>
              <p className="mt-4">
                He aprendido que tanto en el aire como en tierra, la clave para afrontar las turbulencias está en la <strong>preparación mental</strong>, 
                la <strong>gestión de las emociones</strong> y la <strong>toma de decisiones bajo presión</strong>.
              </p>
            </div>
            <div className="flex justify-center">
              {/* ✨ CORRECCIÓN A/G: Usar Next/Image para optimización (Rendimiento) */}
              <Image 
                src="/sobre1.webp"
                alt="Retrato de Jose Carlos Rodríguez, psicólogo"
                width={400} // Dimensiones aproximadas, ajusta según el diseño
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md"
              />
            </div>
          </section>

          {/* Fases de trayectoria */}
          {fasesTrayectoria.map((fase, i) => (
            <section 
                key={i} 
                className="mb-20 grid md:grid-cols-2 gap-12 items-center"
                // ✨ CORRECCIÓN H: Usar el título como referencia para A11Y
                aria-labelledby={`fase-title-${i}`} 
            >
              <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                {/* ✨ CORRECCIÓN A/G: Usar Next/Image para optimización */}
                <Image
                  src={fase.img}
                  alt={fase.alt} // Usamos el ALT definido en el array
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md mx-auto"
                />
              </div>
              <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
                {/* ✨ CORRECCIÓN I: Usar H3 para las subsecciones (ya tenemos H1 y H2) */}
                <h3 id={`fase-title-${i}`} className="text-2xl font-semibold mb-4 text-psicopiloto-green-600">
                  {fase.title}
                </h3>
                {fase.content.map((p, idx) => (
                  <p key={idx} className="mt-4">{p}</p>
                ))}
                {fase.list && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {fase.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {/* Hoy */}
          <section className="mb-20" aria-labelledby="hoy-psicopiloto-title">
            {/* ✨ CORRECCIÓN J: Usar H2 para esta sección final clave */}
            <h2 id="hoy-psicopiloto-title" className="text-2xl font-semibold mb-4 text-psicopiloto-blue-600">
              Hoy: El Enfoque Psicopiloto
            </h2>
            <p>
              Hoy, en <strong>Psicopiloto</strong>, uno lo aprendido en aviación con la psicología para ofrecer un acompañamiento diferente. 
              Si en la cabina de un avión entrenábamos la mente para afrontar lo inesperado, en la terapia aplico la misma filosofía: ayudarte a ganar <strong>confianza</strong>, manejar la <strong>ansiedad</strong> y recuperar el <strong>control de tu vida</strong>.
            </p>
            <p className="mt-4">Porque todos merecemos <strong>volar con seguridad</strong>, también en nuestro propio camino personal.</p>
          </section>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
