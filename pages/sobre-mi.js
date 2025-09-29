import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image"; 

export default function SobreMi() {
  // ======================================================
  // 1. DEFINICIÓN DE DATOS (Array JavaScript puro)
  // ======================================================
  const fasesTrayectoria = [ 
    {
      title: "Fase 1: El Inicio – Trazando la Vocación Psicológica",
      img: "/sobre2.webp",
      alt: "Jose Carlos Rodríguez estudiando psicología en la Universidad de Granada",
      content: [
        "Me licencié en Psicología por la Universidad de Granada en 2003. Durante esa etapa trabajé en prácticas con personas en procesos de drogodependencia, sentando las bases de la **escucha empática** y el **acompañamiento respetuoso**.",
        "Cursé el Curso de Adaptación Pedagógica, adquiriendo visión educativa y de orientación, esencial para el desarrollo de programas de formación.",
      ],
    },
    {
      title: "Fase 2: La Aviación – Dominando el Liderazgo y la Gestión de Crisis",
      img: "/sobre3.webp",
      alt: "Piloto militar instructor de Crew Resource Management (CRM) en la Academia General del Aire",
      content: [
        "Ingresé en la Academia General del Aire en 2007, acumulando más de **2.500 horas de vuelo** como **PILOTO COMANDANTE**. Esta etapa fue mi entrenamiento de alto nivel en **Liderazgo Situacional** y toma de decisiones bajo presión.",
      ],
      list: [
        "**Piloto Comandante** en misiones de incendios en España y Europa.",
        "**Instructor de Vuelo y Simulador**, formando a nuevas generaciones con rigor y precisión.",
        "**Jefe de Crew Resource Management (CRM)**, diseñando programas de Factores Humanos y **Gestión de Errores (TEM)**.",
        "**Facilitador EBT/CBTA** en simuladores, aplicando la metodología de entrenamiento basado en la evidencia.",
      ],
    },
    {
      title: "Fase 3: El Regreso a la Esencia – Psicoterapia de Alto Nivel",
      img: "/sobre1.webp",
      alt: "Retrato de Jose Carlos Rodríguez, Psicólogo General Sanitario especialista en trauma y EMDR",
      content: [
        "Retomé mi vocación en psicología, habilitándome como **Psicólogo General Sanitario** (M-30360) en 2015. Me especialicé en **Psicoterapia Integradora** (Trauma y Apego) y la técnica de reprocesamiento **EMDR**.",
        "Colaboré en la creación de Edades Granada, aplicando directamente los modelos de **gestión de errores de la aviación** a la dinámica organizacional.",
      ],
    },
    {
      title: "Fase 4: La Humanidad – Compromiso Social y Voluntariado",
      img: "/sobre2.webp",
      alt: "Jose Carlos Rodríguez haciendo voluntariado social en Granada",
      content: [
        "El voluntariado ha sido siempre un pilar. Actualmente colaboro en **Amalgama Social**, ofreciendo psicoterapia a personas con **ansiedad, estrés, trauma y duelo**, reforzando la parte más humana y cercana de la práctica clínica.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        // OPTIMIZACIÓN A: H1 potente para E-A-T
        title="Jose Carlos Rodríguez, Psicólogo General Sanitario y Ex-Piloto Militar | Psicopiloto"
        description="Conoce la Autoridad Dual de Jose Carlos Rodríguez: Psicólogo General Sanitario experto en EMDR y Ex-Piloto Comandante. Liderazgo, gestión de estrés y Planificación de Rutas Personales."
        canonical="https://psicopiloto.com/sobre-mi"
        openGraph={{
          title: "Jose Carlos Rodríguez, Psicólogo General Sanitario y Ex-Piloto Militar | Psicopiloto",
          description: "Psicólogo con Habilitación Sanitaria y ex-piloto militar...",
          images: [{ url: "/sobre1.webp", width: 800, height: 600, alt: "Retrato profesional de Jose Carlos Rodríguez" }],
        }}
      />
      
      <BackgroundLogo />

      <Nav />

      <PageHeader
        // H1 reforzado
        title="Conoce al Psicólogo General Sanitario que te Enseñará a Pilotar tu Vida" 
        subtitle="Mi trayectoria profesional combina la precisión de la aviación con la profundidad de la psicoterapia para un acompañamiento único y eficaz."
        backgroundImage="/header-sobremi.webp"
      />

      <main className="flex-grow py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl leading-relaxed bg-white/40 p-8 rounded-2xl shadow-lg">
          {/* Intro */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-psicopiloto-blue-600">Mi Propuesta: Del Control Aéreo al Control Emocional</h2>
              <p>
                Mi nombre es <strong>Jose Carlos Rodríguez Retamar</strong> y soy el profesional detrás de Psicopiloto. Mi **autoridad dual** se basa en:
                <br />
                <br />
                1. Ser **PSICÓLOGO GENERAL SANITARIO** especialista en trauma y apego.
                <br />
                2. Haber sido **PILOTO COMANDANTE E INSTRUCTOR CRM** durante 18 años.
              </p>
              <p className="mt-4">
                He aprendido que, en una cabina de vuelo o en una crisis vital, la clave está en el **Control Ejecutivo Flexible**. Te enseño a diseñar tu **Plan de Contingencia Emocional**, gestionar las **Turbulencias** (ansiedad, crisis) y tomar **decisiones conscientes** para un **Aterrizaje Seguro**.
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/sobre1.webp"
                alt="Retrato de Jose Carlos Rodríguez, Psicólogo General Sanitario"
                width={400} 
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md"
              />
            </div>
          </section>

          {/* Fases de trayectoria (Lógica de renderizado) */}
          {fasesTrayectoria.map((fase, i) => ( 
            <section 
                key={i} 
                className="mb-20 grid md:grid-cols-2 gap-12 items-center"
                aria-labelledby={`fase-title-${i}`} 
            >
              <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <Image
                  src={fase.img}
                  alt={fase.alt} 
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md mx-auto"
                />
              </div>
              <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
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
            </section>
          ))}

          {/* Hoy */}
          <section className="mb-20" aria-labelledby="hoy-psicopiloto-title">
            <h2 id="hoy-psicopiloto-title" className="text-2xl font-semibold mb-4 text-psicopiloto-blue-600">
              Hoy: Mi Compromiso con tu Control Ejecutivo
            </h2>
            <p>
              En **Psicopiloto**, mi compromiso es ofrecerte un **acompañamiento de precisión**. Fusiono el rigor de la planificación aeronáutica con la profundidad de la psicoterapia para que desarrolles habilidades no técnicas vitales: **asertividad, regulación emocional y toma de decisiones**.
            </p>
            <p className="mt-4">Mi misión es clara: ayudarte a ganar la **Confianza y Autoridad** necesarias para **dirigir tu vida** con calma y efectividad.</p>
          </section>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <AnimatedCTA href="/contacto" text="Inicia tu Plan de Vuelo Personal" color="green" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
