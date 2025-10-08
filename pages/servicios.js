import Nav from "../components/Nav";
import Footer from "../components/Footer";
// 🛑 Asegúrate de que NO tienes import Head from "next/head"; en este archivo.
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";

// Iconos
import {
  FaBrain,
  FaSadTear,
  FaHeart,
  FaUsers,
  FaHeadSideVirus,
  FaBuilding,
} from "react-icons/fa";

export default function Servicios() {
  const serviciosPersonas = [
    {
      title: "Ansiedad y Estrés",
      desc: "La ansiedad y el estrés son respuestas naturales, pero constantes pueden causar insomnio, tensión y alerta. Te acompaño a desarrollar herramientas prácticas para **reducir la ansiedad y recuperar la calma**.",
      cta: "Da el primer paso y transforma tu relación con el estrés",
      icon: <FaBrain aria-hidden="true" />,
    },
    {
      title: "Depresión y Ánimo Bajo",
      desc: "Sentirse sin energía, desmotivado o con tristeza persistente afecta tu manera de pensar, sentir y relacionarte. Encontrarás un acompañamiento cercano para **recuperar motivación y bienestar**.",
      cta: "Contacta ahora y recupera tu bienestar emocional",
      icon: <FaSadTear aria-hidden="true" />,
    },
    {
      title: "Autoestima y Apego",
      desc: "Una autoestima baja o patrones de apego inseguro generan relaciones complicadas y malestar interno. Aprenderás a **reconocer tus necesidades, poner límites sanos y fortalecer tu confianza**.",
      cta: "Atrévete a priorizarte y construye una autoestima sólida",
      icon: <FaHeart aria-hidden="true" />,
    },
    {
      title: "Terapia de Pareja",
      desc: "Las relaciones pueden atravesar conflictos, pérdida de confianza o distanciamiento emocional. Ofrecemos un espacio empático para **abrir canales de comunicación y recuperar la conexión**.",
      cta: "Recuperad vuestra conexión: reservad una cita hoy",
      icon: <FaUsers aria-hidden="true" />,
    },
    {
      title: "Trauma y Experiencias Difíciles",
      desc: "Las experiencias dolorosas del pasado pueden dejar huellas profundas. Aplicamos **EMDR** y técnicas de regulación que ayudan a **procesar y liberar memorias traumáticas de manera segura**.",
      cta: "Empieza hoy tu proceso de sanación: agenda tu sesión de terapia",
      icon: <FaHeadSideVirus aria-hidden="true" />,
    },
  ];

  const serviciosEmpresas = [
    {
      title: "Desarrollo Organizacional y Liderazgo",
      desc: `Aplicamos principios de aviación al desarrollo organizacional y de liderazgo. En un mundo empresarial complejo, los equipos necesitan confianza, cohesión y liderazgo positivo.
      
      Los mismos principios que hacen que un vuelo sea seguro y exitoso pueden transformar también tu empresa, impulsando su rendimiento y reduciendo costes.

      Nuestros programas ayudan a las organizaciones a:
      `,
      listaPuntos: [
          "Reducir errores y aumentar la eficiencia.",
          "Fomentar una comunicación clara y honesta.",
          "Desarrollar líderes resilientes y equipos colaborativos.",
          "Implantar una cultura organizacional basada en el aprendizaje, no en la culpa.",
      ],
      cta: "Fortalece tu equipo hoy: solicita una sesión de asesoramiento",
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
            content:
              "psicología, ansiedad, depresión, terapia de pareja, trauma, EMDR, psicoterapia online, psicología para empresas, liderazgo",
          },
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/servicios",
          title: "Servicios de Psicología | Psicopiloto",
          description:
            "Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas. Un espacio seguro para recuperar tu bienestar emocional con Psicopiloto.",
          images: [
            {
              url: "/header-servicios.webp",
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
        subtitle="Un espacio seguro para recuperar el equilibrio y afrontar tus retos con confianza. Si eres empresa, también te acompaño con formación en factores humanos, liderazgo y gestión de equipos inspirada en la aviación."
        backgroundImage="/header-servicios.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        {/* Servicios para personas */}
        <section 
            className="py-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg"
            aria-labelledby="servicios-personas-title"
        >
          <h2 id="servicios-personas-title" className="text-3xl font-semibold text-center text-psicopiloto-green-600 mb-12">
            Psicopiloto para Ti
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {serviciosPersonas.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-full backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-psicopiloto-green-600 mr-3">{s.icon}</div>
                  <h3 className="font-semibold text-2xl text-psicopiloto-green-600">{s.title}</h3>
                </div>
                <p className="mb-6 leading-relaxed text-psicopiloto-gray-700">{s.desc}</p> 
                <div className="mt-auto">
                  <AnimatedCTA href="/contacto" text={s.cta} color="green" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-psicopiloto-green-400 to-psicopiloto-blue-400 mx-auto my-8 rounded"></div>

        {/* Servicios para empresas */}
        <section 
            className="py-12 md:py-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg"
            aria-labelledby="servicios-empresas-title"
        >
          <h2 id="servicios-empresas-title" className="text-3xl font-semibold text-center text-psicopiloto-blue-600 mb-10">
            Psicopiloto para Empresas
            </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {serviciosEmpresas.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/80 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-full backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-psicopiloto-blue-600 mr-3">{s.icon}</div>
                  <h3 className="font-semibold text-2xl text-psicopiloto-blue-600">{s.title}</h3>
                </div>
                
                {/* Contenido - Se usa la nueva estructura para la lista */}
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
