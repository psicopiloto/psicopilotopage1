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
      title: "Ansiedad y Estrés (Gestión de Turbulencias)",
      // OPTIMIZACIÓN A: Metáfora de vuelo + Técnica + Beneficio.
      desc: "La ansiedad constante es una alarma que no se apaga. Desarrollarás **herramientas prácticas y eficaces** (Mindfulness, ACT) para recuperar el **control ejecutivo** de tus pensamientos y realizar un **aterrizaje seguro** en la calma.",
      cta: "Trazar mi ruta hacia la calma",
      icon: <FaBrain aria-hidden="true" />,
    },
    {
      title: "Depresión y Ánimo Bajo (Cambio de Rumbo)",
      // OPTIMIZACIÓN A: Foco en la Dirección y el Sentido.
      desc: "Cuando la vida se siente sin rumbo, la motivación se pierde. Te acompaño a **redefinir tu dirección** y a superar la inercia del desánimo, trabajando en la **activación conductual** para recuperar el sentido y el bienestar.",
      cta: "Recuperar el sentido y la motivación",
      icon: <FaSadTear aria-hidden="true" />,
    },
    {
      title: "Autoestima y Apego (Recuperando el Mando)",
      // OPTIMIZACIÓN A: Foco en la Inseguridad y el Liderazgo Personal.
      desc: "La inseguridad y los patrones de apego inseguro dificultan poner **límites sanos**. Aprenderás a ser el **piloto comandante de tu propio valor**, fortaleciendo tu identidad para **establecer relaciones seguras** y funcionales.",
      cta: "Atrévete a priorizarte y tomar el mando",
      icon: <FaHeart aria-hidden="true" />,
    },
    {
      title: "Terapia de Pareja (Coordinación de Cabina)",
      // OPTIMIZACIÓN A: Metáfora de trabajo en equipo.
      desc: "Una relación es una cabina de vuelo con dos tripulantes. Ofrezco un espacio empático para mejorar la **comunicación**, **reconstruir la confianza** y recuperar la conexión, logrando una **coordinación** fluida y eficaz.",
      cta: "Recuperad vuestra conexión hoy",
      icon: <FaUsers aria-hidden="true" />,
    },
    {
      title: "Trauma y Experiencias Difíciles (Despegando del Pasado)",
      // OPTIMIZACIÓN A: Técnica de alto valor + Beneficio de la Sanación.
      desc: "Las huellas del pasado (trauma, experiencias difíciles) se procesan. Aplicamos el rigor de la **terapia EMDR** y técnicas de **regulación de trauma** para **liberar memorias dolorosas** y realizar un **despegue seguro** hacia el presente.",
      cta: "Sanar el pasado con EMDR",
      icon: <FaHeadSideVirus aria-hidden="true" />,
    },
  ];

  const serviciosEmpresas = [
    {
      title: "Consultoría de Factores Humanos (CRM/TEM)",
      // OPTIMIZACIÓN B: Lenguaje de alto impacto organizacional.
      desc: `Aplicamos principios de aviación al **liderazgo** y la **seguridad operacional**. En un mundo empresarial complejo, los equipos necesitan **control ejecutivo** y **conciencia situacional**.
      
      Los mismos principios que hacen que un vuelo sea seguro y exitoso pueden transformar también tu empresa, **impulsando el rendimiento** y **reduciendo costes** derivados de errores.

      Nuestros programas, basados en **Crew Resource Management (CRM)** y **Threat and Error Management (TEM)**, ayudan a las organizaciones a:
      `,
      listaPuntos: [
          "Reducir errores y aumentar la **eficiencia operativa**.",
          "Fomentar una **comunicación clara y asertiva**.",
          "Desarrollar **líderes resilientes** y equipos colaborativos.",
          "Implantar una **cultura justa** basada en el aprendizaje, no en la culpa.",
      ],
      cta: "Solicita una propuesta personalizada",
      color: "blue",
      icon: <FaBuilding aria-hidden="true" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-psicopiloto-gray-700">
      <NextSeo
        // OPTIMIZACIÓN C: SEO Title con técnicas y alcance completo.
        title="Terapia EMDR, ACT y Liderazgo CRM | Psicólogo Online y Consultoría Empresarial"
        // OPTIMIZACIÓN C: Meta Description enfocada en el UVP y resultado.
        description="Psicoterapia online para Ansiedad, Trauma (EMDR/ACT) y Apego. Consultoría en Factores Humanos (CRM/TEM) y Liderazgo para empresas. Recupera el control y la seguridad operacional."
        canonical="https://psicopiloto.com/servicios"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicólogo, EMDR, ACT, terapia de pareja, trauma, psicoterapia online, psicología para empresas, CRM, TEM, liderazgo situacional",
          },
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/servicios",
          title: "Terapia EMDR, ACT y Liderazgo CRM | Psicólogo Online y Consultoría Empresarial",
          description:
            "Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas.",
          images: [
            {
              url: "/header-servicios.webp",
              width: 1200,
              height: 630,
              alt: "Psicólogo revisando programas de terapia EMDR, ACT y consultoría CRM",
              type: "image/webp",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <Nav />

      <PageHeader
        // OPTIMIZACIÓN D: H1 con foco en el método.
        title="Tus Rutas de Vuelo: Enfoque Intelegador y Alto Rendimiento"
        subtitle="Psicoterapia individual basada en la evidencia (EMDR, ACT) y formación en liderazgo y gestión de crisis inspirada en los Factores Humanos de la aviación."
        backgroundImage="/header-servicios.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        {/* Servicios para personas */}
        <section 
            className="py-16 container mx-auto max-w-6xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg"
            aria-labelledby="servicios-personas-title"
        >
          <h2 id="servicios-personas-title" className="text-3xl font-semibold text-center text-psicopiloto-green-600 mb-12">
            Psicopiloto para Ti: Regulación Emocional y Sanación de Trauma
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
            Psicopiloto para Empresas: Seguridad Operacional y Liderazgo
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
