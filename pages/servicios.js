// pages/servicios.js
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";

import {
  FaBrain,
  FaSadTear,
  FaHeart,
  FaUsers,
  FaHeadSideVirus,
  FaBuilding,
  FaBalanceScale,
  FaFire,
} from "react-icons/fa";

export default function Servicios() {
  const serviciosPersonas = [
    {
      title: "Trauma y Reprocesamiento EMDR", 
      desc: "Las vivencias difíciles o los impactos emocionales del pasado mal cicatrizados siguen doliendo en el presente en forma de bloqueos, ansiedad o reacciones automáticas. A través del protocolo oficial <strong>EMDR</strong>, trabajamos de forma neurobiológica sobre tu sistema nervioso para <strong>procesar, liberar y recolocar esas memorias dolorosas</strong> en un lugar seguro, permitiéndote recuperar la calma y avanzar.",
      cta: "Inicia tu proceso de sanación",
      icon: <FaHeadSideVirus aria-hidden="true" />,
    },
    {
      title: "Ansiedad y Estrés",
      desc: "Vivir en 'modo alerta' constante agota el cuerpo, bloquea la mente y te quita el sueño. No se trata de luchar contra la alarma, sino de entender por qué se ha encendido. Te ofrezco <strong>herramientas prácticas y pautas estructuradas</strong> para calmar la activación fisiológica, desactivar los pensamientos catastróficos y recuperar la estabilidad en tu día a día.",
      cta: "Toma los mandos de tu calma",
      icon: <FaBrain aria-hidden="true" />,
    },
    {
      title: "Autoestima y Apego",
      desc: "La falta de confianza, la culpa y la dificultad para poner límites firmes suelen nacer de la forma en que aprendimos a vincularnos. En consulta exploraremos tus bases relacionales para ayudarte a <strong>desmantelar la autoexigencia destructiva</strong>, reconstruir tu seguridad interna y aprender a liderar tu vida desde el autorrespeto y la independencia.",
      cta: "Construye una seguridad sólida",
      icon: <FaHeart aria-hidden="true" />,
    },
    {
      title: "Gestión y Control de la Ira",
      desc: "La ira y la frustración descontroladas actúan como una tormenta inesperada que arrasa con tus relaciones, tu entorno laboral y tu paz mental. Aprenderás a <strong>identificar tus disparadores tempranos</strong>, a regular la respuesta impulsiva antes de que estalle y a canalizar esa energía de una manera constructiva, asertiva y bajo control.",
      cta: "Aprende a canalizar tu frustración",
      icon: <FaFire aria-hidden="true" />,
    },
    {
      title: "Trastornos Alimentarios (TCA)",
      desc: "Cuando la relación con la comida y el cuerpo se convierte en una batalla obsesiva de control, restricción o culpa, el sufrimiento es devastador. Trabajaremos de raíz sobre la desregulación emocional y el autorrechazo que sostienen este ciclo disfuncional, ayudándote a <strong>construir un espacio de paz con tu cuerpo</strong> y hábitos saludables sin castigo.",
      cta: "Sana la relación con tu cuerpo",
      icon: <FaBalanceScale aria-hidden="true" />,
    },
    {
      title: "Depresión y Estado de Ánimo",
      desc: "La apatía, la tristeza persistentente y la falta de motor vital te hacen sentir que eres un mero espectador de tu propia vida. Diseñaremos un <strong>plan de acción gradual y realista</strong> para recuperar el impulso, reconectar con tus valores y encontrar el sentido y la motivación necesarios para reactivar tu día a día.",
      cta: "Recupera tu dirección vital",
      icon: <FaSadTear aria-hidden="true" />,
    },
    {
      title: "Terapia de Pareja",
      desc: "Cuando los reproches sustituyen a la complicidad, la distancia y la incomunicación se instalan en casa. Os ofrezco un espacio neutral, seguro y libre de juicios para <strong>detectar los círculos viciosos de la relación</strong>, abrir canales de comunicación honestos, sanar los desencuentros y reconstruir (o redefinir) vuestro vínculo.",
      cta: "Restableced vuestra conexión",
      icon: <FaUsers aria-hidden="true" />,
    },
  ];

  const serviciosEmpresas = [
    {
      title: "Formación y Consultoría en Factores Humanos",
      desc: "Transfiero la mentalidad de cabina, la gestión de crisis y el análisis del error de la aviación militar al entorno corporativo. Ayudo a las organizaciones a optimizar su rendimiento y cuidar la salud mental de sus equipos bajo dinámicas de alta presión.",
      listaPuntos: [
        "Mitigación del error operativo y optimización de la toma de decisiones.",
        "Entrenamiento en Crew Resource Management (CRM) adaptado a mandos intermedios y directivos.",
        "Desarrollo de líderes resilientes, asertivos y con alta gestión del estrés.",
        "Implantación de una 'Cultura Justa' en la empresa, orientada al aprendizaje del fallo y no al castigo.",
      ],
      cta: "Potencia el rendimiento de tu equipo",
      color: "blue",
      icon: <FaBuilding aria-hidden="true" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Servicios de Psicoterapia Integradora y EMDR"
        description="Consulta de psicología online y presencial en Granada. Especialista en tratamiento de Trauma, reprocesamiento EMDR, Ansiedad, Gestión de la Ira y consultoría corporativa."
        canonical="https://psicopiloto.com/servicios"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "terapia emdr granada, psicologo emdr granada, especialista trauma granada, psicoterapia online, tratamiento ansiedad, gestion de la ira, trastornos alimentarios granada",
          },
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/servicios",
          title: "Servicios de Psicología Integradora y EMDR | Psicopiloto®",
          description: "Psicoterapia especializada para adultos y parejas. Enfoque centrado en el trauma y protocolo oficial EMDR en Granada.",
          images: [
            {
              url: "https://www.psicopiloto.com/header-servicios.webp",
              width: 1200,
              height: 630,
              alt: "Consultorio de psicología integradora y herramientas de intervención en trauma",
              type: "image/webp",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Servicios de Psicología"
        subtitle="Un enfoque terapéutico especializado en trauma y EMDR, combinado con la estructura y claridad de la mentalidad de cabina."
        backgroundImage="/header-servicios.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        <section
          className="py-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg"
          aria-labelledby="servicios-personas-title"
        >
          <div className="text-center mb-12">
            <h2 id="servicios-personas-title" className="text-3xl font-bold text-psicopiloto-green-600">
              Psicoterapia para Adultos y Parejas
            </h2>
            <p className="text-lg text-psicopiloto-gray-500 mt-2 max-w-2xl mx-auto">
              Cada proceso es único. Adapto las herramientas de la psicología integradora para diseñar un plan de vuelo a la medida de tu historia, utilizando el protocolo avanzado EMDR en mi consulta de Granada o de forma online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosPersonas.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-full backdrop-blur-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-psicopiloto-green-600 mr-3">{s.icon}</div>
                  <h3 className="font-semibold text-xl text-psicopiloto-green-600 leading-tight">{s.title}</h3>
                </div>
                <p className="mb-6 leading-relaxed text-psicopiloto-gray-700 text-base flex-grow" dangerouslySetInnerHTML={{ __html: s.desc }}></p>
                <div className="mt-auto">
                  <AnimatedCTA href="/contacto" text={s.cta} color="green" className="w-full text-center text-base py-3 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-24 h-1 bg-gradient-to-r from-psicopiloto-green-400 to-psicopiloto-blue-400 mx-auto my-16 rounded"></div>

        <section
          className="pb-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg"
          aria-labelledby="servicios-empresas-title"
        >
          <div className="text-center mb-10">
            <h2 id="servicios-empresas-title" className="text-3xl font-bold text-psicopiloto-blue-600">
              Consultoría Organizacional y Formación
            </h2>
            <p className="text-lg text-psicopiloto-gray-500 mt-2 max-w-2xl mx-auto">
              Llevamos los protocolos de seguridad, liderazgo y resiliencia de la aviación militar al corazón operativo de tu organización.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
            {serviciosEmpresas.map((s, i) => (
              <div
                key={i}
                className="p-8 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-full backdrop-blur-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-psicopiloto-blue-600 mr-3">{s.icon}</div>
                  <h3 className="font-semibold text-2xl text-psicopiloto-blue-600">{s.title}</h3>
                </div>
                <p className="mb-4 leading-relaxed text-psicopiloto-gray-700 text-base">{s.desc}</p>
                <ul className="list-disc list-inside mb-8 ml-2 space-y-2.5 text-psicopiloto-gray-700 text-base">
                  {s.listaPuntos && s.listaPuntos.map((punto, index) => (
                    <li key={index} className="leading-relaxed">{punto}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <AnimatedCTA href="/contacto" text={s.cta} color={s.color} className="w-full text-center text-base py-3 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
