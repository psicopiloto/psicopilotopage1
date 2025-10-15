// pages/servicios.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";

import {
  FaBrain,
  FaSadTear,
  FaHeart,
  FaUsers,
  FaHeadSideVirus,
  FaBuilding,
} from "react-icons/fa";

export default function Servicios() {
  // ✨ CORRECCIÓN: Sintaxis de negrita cambiada de Markdown (**) a HTML (<strong>)
  const serviciosPersonas = [
    {
      title: "Ansiedad y Estrés",
      desc: "La ansiedad constante te mantiene en 'modo alerta', causando insomnio y tensión. Te enseño <strong>técnicas prácticas y directas</strong> para reducir los síntomas, gestionar tus pensamientos y recuperar la calma.",
      cta: "Agenda una sesión y toma el control",
      icon: <FaBrain aria-hidden="true" />,
    },
    {
      title: "Depresión y Ánimo Bajo",
      desc: "La falta de energía y motivación afecta a cómo piensas y sientes. Diseñaremos un <strong>plan de acción</strong> para que recuperes el impulso, la motivación y el bienestar en tu día a día.",
      cta: "Recupera tu motivación",
      icon: <FaSadTear aria-hidden="true" />,
    },
    {
      title: "Autoestima y Apego",
      desc: "Una autoestima baja genera relaciones complicadas. Aprenderás a <strong>identificar tus necesidades</strong>, a establecer <strong>límites firmes</strong> y a construir la confianza que necesitas para liderar tu vida.",
      cta: "Construye una autoestima sólida",
      icon: <FaHeart aria-hidden="true" />,
    },
    {
      title: "Terapia de Pareja",
      desc: "Cuando la comunicación falla, aparecen los conflictos y la distancia. Ofrezco un espacio neutral para <strong>identificar los problemas de raíz</strong>, abrir canales de comunicación y <strong>reconstruir la conexión</strong>.",
      cta: "Recuperad vuestra conexión",
      icon: <FaUsers aria-hidden="true" />,
    },
    {
      title: "Trauma y Experiencias Difíciles",
      desc: "Las heridas del pasado pueden limitar tu presente. Mediante <strong>EMDR</strong> y otras técnicas de regulación, trabajaremos para <strong>procesar y liberar esas memorias</strong> de forma segura y controlada.",
      cta: "Inicia tu proceso de sanación",
      icon: <FaHeadSideVirus aria-hidden="true" />,
    },
  ];

  const serviciosEmpresas = [
    {
      title: "Formación y Consultoría para Empresas",
      desc: `Aplicamos los principios de la aviación (CRM, Factores Humanos) para potenciar a tus equipos. En un entorno complejo, la cohesión, el liderazgo y la gestión de errores son críticos para el éxito.`,
      listaPuntos: [
        "Reducir errores operativos y aumentar la eficiencia.",
        "Fomentar una comunicación clara y directa.",
        "Desarrollar líderes resilientes y equipos cohesionados.",
        "Implantar una 'Cultura Justa', basada en el aprendizaje y no en la culpa.",
      ],
      cta: "Fortalece a tu equipo",
      color: "blue",
      icon: <FaBuilding aria-hidden="true" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-psicopiloto-gray-700">
      <NextSeo
        title="Terapia para Ansiedad, Trauma y Pareja | Psicólogo Online y Empresas"
        description="Servicios de psicoterapia online y presencial para Ansiedad, Depresión, Trauma (EMDR) y Terapia de Pareja. También ofrecemos formación en Liderazgo y Factores Humanos para empresas."
        canonical="https://psicopiloto.com/servicios"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "psicología, ansiedad, depresión, terapia de pareja, trauma, EMDR, psicoterapia online, psicología para empresas, liderazgo",
          },
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/servicios",
          title: "Servicios de Psicología | Psicopiloto",
          description: "Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas.",
          images: [
            {
              url: "https://www.psicopiloto.com/header-servicios.webp",
              width: 1200,
              height: 630,
              alt: "Psicólogo revisando programas de terapia para ansiedad, depresión y empresas",
              type: "image/webp",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <Nav />

      <PageHeader
        title="Servicios de Psicología"
        subtitle="Herramientas prácticas para pilotar tu vida. Terapia individual y formación para empresas con un enfoque directo y resolutivo, inspirado en la aviación."
        backgroundImage="/header-servicios.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        <section
          className="py-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg"
          aria-labelledby="servicios-personas-title"
        >
          <h2 id="servicios-personas-title" className="text-3xl font-semibold text-center text-psicopiloto-green-600 mb-12">
            Psicopiloto para Ti
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosPersonas.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-full backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-psicopiloto-green-600 mr-3">{s.icon}</div>
                  <h3 className="font-semibold text-2xl text-psicopiloto-green-600">{s.title}</h3>
                </div>
                {/* ✨ CORRECCIÓN: Usar dangerouslySetInnerHTML para renderizar las etiquetas <strong> */}
                <p className="mb-6 leading-relaxed text-psicopiloto-gray-700" dangerouslySetInnerHTML={{ __html: s.desc }}></p>
                <div className="mt-auto">
                  <AnimatedCTA href="/contacto" text={s.cta} color="green" />
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
          <h2 id="servicios-empresas-title" className="text-3xl font-semibold text-center text-psicopiloto-blue-600 mb-10">
            Psicopiloto para Empresas
          </h2>
          <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
            {serviciosEmpresas.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/80 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-full backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-psicopiloto-blue-600 mr-3">{s.icon}</div>
                  <h3 className="font-semibold text-2xl text-psicopiloto-blue-600">{s.title}</h3>
                </div>
                
                <p className="mb-3 leading-relaxed">{s.desc}</p>
                <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-psicopiloto-gray-700">
                    {s.listaPuntos && s.listaPuntos.map((punto, index) => (
                        <li key={index} className="leading-relaxed">{punto}</li>
                    ))}
                </ul>
                
                <div className="mt-auto">
                  <AnimatedCTA href="/contacto" text={s.cta} color={s.color} />
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
