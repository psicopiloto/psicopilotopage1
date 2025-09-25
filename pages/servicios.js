import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
      desc: "La ansiedad y el estrés son respuestas naturales del cuerpo, pero cuando se vuelven constantes pueden causar insomnio, tensión muscular y sensación de alerta.",
      extra: "En Psicopiloto te acompaño a comprender lo que te ocurre y a desarrollar herramientas prácticas para reducir la ansiedad, mejorar tu descanso y recuperar la calma.",
      cta: "Da el primer paso y transforma tu relación con el estrés",
      icon: <FaBrain />,
    },
    {
      title: "Depresión y Ánimo Bajo",
      desc: "Sentirse sin energía, desmotivado o con tristeza persistente no es simplemente “estar de bajón”. La depresión puede afectar a tu manera de pensar, sentir y relacionarte.",
      extra: "Encontrarás un acompañamiento cercano y respetuoso para recuperar motivación y bienestar en tu día a día.",
      cta: "Contacta ahora y recupera tu bienestar emocional",
      icon: <FaSadTear />,
    },
    {
      title: "Autoestima y Apego",
      desc: "Una autoestima baja o patrones de apego inseguro pueden generar relaciones complicadas y malestar interno.",
      extra: "Aprenderás a reconocer tus necesidades, poner límites sanos y fortalecer tu confianza.",
      cta: "Atrévete a priorizarte y construye una autoestima sólida",
      icon: <FaHeart />,
    },
    {
      title: "Terapia de Pareja",
      desc: "Las relaciones de pareja pueden atravesar conflictos, pérdida de confianza o distanciamiento emocional.",
      extra: "La terapia de pareja ofrece un espacio empático para abrir canales de comunicación y recuperar la conexión.",
      cta: "Recuperad vuestra conexión: reservad una cita hoy",
      icon: <FaUsers />,
    },
    {
      title: "Trauma y Experiencias Difíciles",
      desc: "Las experiencias dolorosas del pasado pueden dejar huellas profundas en la memoria y en el cuerpo.",
      extra: "Aplicamos EMDR y técnicas de regulación que ayudan a procesar y liberar memorias traumáticas de manera segura.",
      cta: "Empieza hoy tu proceso de sanación: agenda tu sesión de terapia",
      icon: <FaHeadSideVirus />,
    },
  ];

  const serviciosEmpresas = [
    {
      title: "Desarrollo Organizacional y Liderazgo",
      desc: "Los equipos necesitan cohesión, confianza y liderazgo positivo para alcanzar sus objetivos. Aplicamos principios de aviación al desarrollo organizacional. En un mundo empresarial cada vez más complejo, los equipos necesitan confianza, cohesión y liderazgo positivo. Desde Psicopiloto ayudamos a las organizaciones a:
Reducir errores y aumentar la eficiencia.
Fomentar una comunicación clara y honesta.
Desarrollar líderes resilientes y equipos colaborativos.
Implantar una cultura organizacional basada en el aprendizaje, no en la culpa.
👉 Los mismos principios que hacen que un vuelo sea seguro y exitoso pueden transformar también tu empresa, impulsando su rendimiento y reduciendo costes derivados de errores y falta de coordinación.
.",
      extra: "Programas de psicología aplicada a empresas que reducen errores, mejoran eficiencia y fomentan comunicación clara.",
      cta: "Fortalece tu equipo hoy: solicita una sesión de asesoramiento",
      color: "blue",
      icon: <FaBuilding />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-psicopiloto-gray-700">
      <NextSeo
        title="Servicios de Psicología | Psicopiloto"
        description="Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas. Un espacio seguro para recuperar tu bienestar emocional con Psicopiloto."
        canonical="https://psicopiloto.com/servicios"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicología, ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma, EMDR, psicoterapia online, psicología para empresas",
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
              alt: "Servicios de Psicología - Psicopiloto",
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
        <section className="py-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-psicopiloto-green-600 mb-12">
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
                <p className="mb-3 leading-relaxed">{s.desc}</p>
                <p className="mb-6 leading-relaxed text-psicopiloto-gray-600">{s.extra}</p>
                <div className="mt-auto">
                  <AnimatedCTA href="/contacto" text={s.cta} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-psicopiloto-green-400 to-psicopiloto-blue-400 mx-auto my-8 rounded"></div>

        {/* Servicios para empresas */}
        <section className="py-12 md:py-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-psicopiloto-blue-600 mb-10">
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
                <p className="mb-3 leading-relaxed">{s.desc}</p>
                <p className="mb-6 leading-relaxed text-psicopiloto-gray-600">{s.extra}</p>
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
