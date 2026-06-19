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
      title: "La Vocación Inicial: Entender la mente humana",
      img: "/Facu.webp",
      alt: "Jose Carlos Rguez. Retamar en su etapa de formación en psicología en la Universidad de Granada",
      content: [
        "Mi viaje comenzó en la Universidad de Granada, donde me licencié en Psicología en 2003. Desde el principio sentí la necesidad de bajar la teoría a la realidad social: pasé mis primeras prácticas acompañando a personas en procesos complejos de drogodependencia, donde aprendí el valor de la escucha limpia y el respeto absoluto por la historia de cada individuo.",
        "Durante cuatro años, compaginé mis estudios siendo voluntario con personas mayores en fases iniciales de demencia. Utilizando la Terapia de la Reminiscencia, descubrí cómo el trabajo con las emociones y los recuerdos puede devolver la dignidad y la conexión a un sistema nervioso vulnerable. Esta etapa asentó las bases de mi sensibilidad en el ámbito de la salud.",
      ],
    },
    {
      title: "La Cabina Militar: Disciplina y gestión de crisis en el aire",
      img: "/sobre4.webp",
      alt: "Piloto comandante militar acumulando experiencia en gestión de crisis y factores humanos",
      content: [
        "En 2007 mi vida dio un giro de 180 grados y entré en la Academia General del Aire. He acumulado más de 2.500 horas de vuelo como piloto comandante en misiones de alto riesgo de extinción de incendios forestales en España, Grecia y Portugal. En esa cabina, rodeado de condiciones extremas, la supervivencia dependía de dos cosas: aplicar procedimientos estrictos y mantener una calma mental absoluta cuando el cuerpo te pide entrar en pánico.",
        "Como instructor de vuelo y simulador, y posteriormente como Jefe de Crew Resource Management (CRM), mi prioridad en Factores Humanos era liderar un espacio seguro. Aprendí que la verdadera seguridad en cabina nace de construir un ambiente de confianza absoluta donde cada miembro de la tripulación pueda comunicarse con honestidad y expresar lo que piensa sin el menor miedo a ser juzgado, optimizando la toma de decisiones ante la incertidumbre.",
      ],
    },
    {
      title: "El Regreso a la Esencia: Uniendo dos mundos en Psicopiloto",
      img: "/emdr.webp",
      alt: "Psicólogo General Sanitario especialista en psicoterapia del trauma y reprocesamiento EMDR",
      content: [
        "A pesar de la intensidad del vuelo, sabía que mi verdadera misión estaba en tierra. Para el ejercicio de la Psicología General Sanitaria en 2015, obtuve mi habilitación oficial en Madrid y decidí volcar toda mi experiencia en factores humanos, gestión de crisis y liderazgo en el campo de la psicoterapia profunda.",
        "Consolidé mi formación de postgrado como Experto en Psicopatología Integradora (UDIMA) y Experto Universitario en Intervención en Trauma y EMDR (UNIR). En septiembre de 2025 regresé definitivamente a Granada para estructurar una práctica psicoterapéutica rigurosa que responde al sufrimiento emocional, los trastornos de la conducta alimentaria (TCA) y las heridas de apego.",
        "Hoy divido mi actividad profesional entre la psicoterapia presencial en el centro médico <a href='https://medifamilia.es/' target='_blank' rel='noopener noreferrer' class='font-bold text-psicopiloto-green-600 hover:underline'>Medifamilia</a> en Granada —donde acompaño a adultos a procesar el trauma, el duelo, los trastornos alimentarios (TCA) o a resolver problemas de ansiedad, baja autoestima y heridas de apego—, mi consulta sanitaria online <strong>Psicopiloto</strong> —enfocada en esos mismos pilares de intervención a través de la telepsicología—, y mi participación como psicólogo experto en el área de CRM y Factores Humanos dentro de comités multidisciplinares para la selección y evaluación de pilotos en compañías aéreas internacionales de la mano de Resource Group. En estos comités, junto a los equipos de operaciones y recursos humanos, aplico evaluaciones basadas en la evidencia (EBT) y el entrenamiento por competencias conforme a los exigentes criterios regulados por las autoridades de aviación civil.",
        "Además, sigo vinculado a la docencia especializada como profesor titular y tutor de proyectos de investigación (TFE) en el programa de Experto en Psicología Aeronáutica del Colegio Oficial de la Psicología de Madrid.",
        "<strong>Psicopiloto</strong> es la unión exacta de mis dos pasiones. En la cabina aprendí a sostener la presión; en la psicología, a sanar las tormentas internas.",
      ],
    },
    {
      title: "El Compromiso Social y el Trabajo en Comunidad",
      img: "/voluntariado.webp",
      alt: "Jose Carlos Rguez. Retamar realizando intervenciones terapéuticas voluntarias",
      content: [
        "Para mí, la psicología es un servicio que debe transformar realidades. Sostengo este compromiso a través del voluntariado activo, ofreciendo psicoterapia integradora online y abordaje con EMDR a pacientes en situación de vulnerabilidad dentro de la organización <strong>Amalgama Social</strong>, tratando duelos, dependencia emocional, ansiedad, control de la ira y secuelas de experiencias traumáticas.",
        "Asimismo, colaboro en el área de la psico-gerontología con la entidad <a href='https://granayuda.es/' target='_blank' rel='noopener noreferrer' class='font-bold text-psicopiloto-green-600 hover:underline'>Granayuda</a>, donde diseño e implemento programas de estimulación cognitiva para la prevención del deterioro neuropsicológico y demencias, además de brindar acompañamiento psicológico y pautas de regulación a cuidadores principales expuestos al estrés crónico, el burnout familiar y el duelo.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Sobre Mí | Jose Carlos Rguez. Retamar"
        description="Conoce a Jose Carlos Rguez. Retamar, Psicólogo General Sanitario y ex-piloto comandante militar. Especializado en terapia integradora, trauma y reprocesamiento EMDR en Granada."
        canonical="https://psicopiloto.com/sobre-mi"
        openGraph={{
          title: "Jose Carlos Rguez. Retamar | Psicólogo General Sanitario y Especialista EMDR",
          description: "De la gestión de crisis en cabina militar a la psicoterapia integradora. Descubre cómo aplico el rigor y el protocolo EMDR para sanar el trauma en Granada.",
          images: [{ url: "https://www.psicopiloto.com/foto-copao.webp", width: 800, height: 600, alt: "Retrato profesional de Jose Carlos Rguez. Retamar, fundador de Psicopiloto" }],
        }}
      />
      
      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Jose Carlos Rguez. Retamar"
        subtitle="Psicólogo General Sanitario (Col. Nº AO-14457). Una trayectoria diseñada para ayudarte a recuperar el control de tu vida."
        backgroundImage="/header-sobremi.webp"
      />

      <main className="flex-grow py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl leading-relaxed bg-white/40 p-8 rounded-2xl shadow-lg">
          
          {/* INTRODUCCIÓN DE IMPACTO */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-psicopiloto-blue-600">¿Por qué un piloto militar decide bajar a tierra a escuchar el dolor humano?</h2>
              <p className="text-psicopiloto-gray-700 text-base leading-relaxed">
                Mi nombre es <strong>Jose Carlos Rguez. Retamar</strong>. Durante casi dos décadas operé en entornos de alta exigencia, gobernando aviones en misiones críticas de emergencia. Esa experiencia me enseñó algo que no se estudia en las facultades: que las peores turbulencias, las tormentas más devastadoras y los incendios más difíciles de apagar no ocurren ahí arriba, sino <strong>dentro del mundo interno de las personas</strong>.
              </p>
              <p className="text-psicopiloto-gray-700 text-base leading-relaxed mt-4">
                En una cabina de vuelo aprendes a analizar los sistemas de alarma sin dejarte arrastrar por el pánico. Pero la lección más profunda que trasladé a tierra es que la estabilidad real depende de la confianza. Del mismo modo que un vuelo seguro exige una cabina libre de amenazas donde la tripulación pueda hablar con total transparencia, en mi consulta construyo un vínculo clínico idéntico: un espacio de absoluta seguridad donde puedas desnudarte emocionalmente, comprender tus alarmas somáticas y procesar tu historia con la total certeza de que no vas a ser juzgado. Mi labor es darte ese entorno protegido y un procedimiento estructurado para recuperar el rumbo.
              </p>
            </div>
            <div className="flex justify-center mt-6 md:mt-0">
              <Image
                src="/jc-psicopiloto.webp"
                alt="Retrato profesional de Jose Carlos Rguez. Retamar, Psicólogo General Sanitario especialista en EMDR"
                width={400}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </section>

          {/* BUCLE DINÁMICO DE LA TRAYECTORIA */}
          {fasesTrayectoria.map((fase, i) => (
            <section
              key={i}
              className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              aria-labelledby={`fase-title-${i}`}
            >
              {/* BLOQUE DE TEXTO */}
              <div 
                className={clsx("order-1", {
                    "md:order-2": i % 2 === 0, 
                    "md:order-1": i % 2 !== 0, 
                })}
              >
                <h3 id={`fase-title-${i}`} className="text-2xl font-bold mb-4 text-psicopiloto-green-600">
                  {fase.title}
                </h3>
                {fase.content.map((p, idx) => (
                  <p
                    key={idx}
                    className="mt-4 text-psicopiloto-gray-700 text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
              
              {/* BLOQUE DE IMAGEN */}
              <div 
                className={clsx("order-2", {
                    "md:order-1": i % 2 === 0, 
                    "md:order-2": i % 2 !== 0, 
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

          {/* SECCIÓN DE ENFOQUE TERAPÉUTICO */}
          <section className="mb-20" aria-labelledby="hoy-psicopiloto-title">
            <h2 id="hoy-psicopiloto-title" className="text-2xl font-bold mb-4 text-psicopiloto-blue-600">
              Mi Compromiso en Consulta
            </h2>
            <p className="text-psicopiloto-gray-700 text-base leading-relaxed">
              En la consulta de <strong>Psicopiloto</strong> no vas a encontrar teorías abstractas ni consejos motivacionales genéricos. Mi trabajo se asienta sobre las bases de una relación terapéutica transparente, proporcionando un espacio completamente seguro y cercano donde no vas a ser juzgado, permitiéndote abordar tus dificultades con total libertad.
            </p>
            <p className="text-psicopiloto-gray-700 text-base leading-relaxed mt-4">
              Mi formación y mi práctica diaria se centran en el tratamiento integrador de la ansiedad, los bloqueos por trauma, los duelos y las heridas de apego, así como en pautas estructuradas para el abordaje de trastornos de la conducta alimentaria (TCA) y herramientas de alta eficacia para los problemas de ira o control de las emociones. Para conseguirlo, utilizo de forma preferente el protocolo oficial de <strong>Reprocesamiento EMDR</strong>, ayudando a tu sistema nervioso a asimilar y vaciar la carga emocional de los recuerdos dolorosos. Si en la cabina de un avión entrenábamos de forma metódica ante lo inesperado, en terapia te ofrezco esa misma estructura y predictibilidad para que desactives el estado de alerta constante y recuperes, por fin, el mando absoluto de tu vida.
            </p>
            <p className="text-psicopiloto-gray-700 text-base leading-relaxed mt-4 font-semibold text-psicopiloto-green-600">
              Porque todos merecemos volar con una base segura. También en nuestro camino personal.
            </p>
          </section>

          {/* LLAMADA A LA ACCIÓN */}
          <div className="mt-12 text-center">
            <AnimatedCTA href="/contacto" text="Reserva tu sesión de valoración gratuita" color="green" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
