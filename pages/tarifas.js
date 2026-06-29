// pages/tarifas.js
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import { FaLaptop, FaUserAlt, FaRegClock, FaCalendarCheck, FaShieldAlt } from "react-icons/fa";

export default function Tarifas() {
  const planesTarifas = [
    {
      title: "Psicoterapia Individual Online",
      icon: <FaLaptop aria-hidden="true" />,
      subtitle: "Tu consulta desde un espacio privado",
      price: "70€",
      duration: "55 minutos por sesión",
      desc: "Intervención psicoterapéutica especializada mediante plataformas homologadas con cifrado de nivel sanitario. Un proceso estructurado y a tu ritmo para abordar la ansiedad, el trauma, el duelo, los trastornos alimentarios (TCA), el control de las emociones o los problemas de apego.",
      features: [
        "Entorno digital 100% seguro y confidencial",
        "Protocolo avanzado de Reprocesamiento EMDR",
        "Herramientas de regulación somática y checklists prácticos",
        "Sin costes ni tiempos de desplazamiento"
      ],
      ctaText: "Iniciar terapia online",
      color: "green"
    },
    {
      title: "Psicoterapia Presencial (Granada)",
      icon: <FaUserAlt aria-hidden="true" />,
      subtitle: "Atención directa en entorno médico",
      price: "70€",
      duration: "55 minutos por sesión",
      desc: "Sesiones presenciales en las instalaciones del centro médico <a href='https://medifamilia.es/' target='_blank' rel='noopener noreferrer' class='font-bold text-psicopiloto-green-600 hover:underline'>Medifamilia</a> en Granada. Un espacio de encuentro físico diseñado para trabajar con total tranquilidad, calidez y un rigor metodológico orientado a tus objetivos vitales.",
      features: [
        "Consulta en centro sanitario autorizado",
        "Abordaje integrador de la historia de desarrollo",
        "Tratamiento profundo del sufrimiento estructural",
        "Espacio de total confianza y libre de juicios"
      ],
      ctaText: "Solicitar cita presencial",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Sesiones y Tarifas | Psicopiloto"
        description="Transparencia y claridad operativa en tu proceso terapéutico. Consulta las tarifas de las sesiones de psicología online y presencial en Granada."
        canonical="https://psicopiloto.com/tarifas"
        openGraph={{
          url: "https://psicopiloto.com/tarifas",
          title: "Sesiones y Tarifas Transparentes | Psicopiloto",
          description: "Conoce el coste de las sesiones de psicoterapia individual online y presencial. Un método estructurado con objetivos medibles para recuperar tu bienestar.",
        }}
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Sesiones y Tarifas"
        subtitle="Claridad, transparencia y estructura desde el primer momento. Tu plan de ruta hacia la estabilidad emocional sin sorpresas."
        backgroundImage="/header-servicios.webp"
      />

      <main className="flex-grow py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Bloque Introductorio: El valor del espacio seguro */}
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-psicopiloto-blue-600">Un método estructurado, un espacio sin juicios</h2>
            <p className="text-lg text-psicopiloto-gray-500 leading-relaxed">
              Iniciar un proceso psicoterapéutico es una inversión en tu salud mental y en tu seguridad interna. Al igual que en la cabina de un avión la prioridad es trazar una ruta predecible y segura, aquí te ofrezco total transparencia en las condiciones de nuestro marco de trabajo, construyendo un vínculo de confianza donde puedas expresarte con total libertad y sin miedo a ser juzgado.
            </p>
          </section>

          {/* Cuadrícula de Tarifas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
            {planesTarifas.map((plan, i) => (
              <div 
                key={i} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-3xl ${plan.color === 'green' ? 'text-psicopiloto-green-600' : 'text-psicopiloto-blue-600'}`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-xl leading-tight ${plan.color === 'green' ? 'text-psicopiloto-green-600' : 'text-psicopiloto-blue-600'}`}>
                      {plan.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="my-4 pb-4 border-b border-gray-100 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-psicopiloto-gray-700">{plan.price}</span>
                  <span className="text-sm text-gray-400 font-medium flex items-center gap-1">
                    <FaRegClock aria-hidden="true" /> {plan.duration}
                  </span>
                </div>

                <p 
                  className="text-psicopiloto-gray-600 text-sm leading-relaxed mb-6 flex-grow"
                  dangerouslySetInnerHTML={{ __html: plan.desc }}
                />

                <ul className="space-y-2.5 mb-8 text-sm text-psicopiloto-gray-700">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] ${plan.color === 'green' ? 'bg-psicopiloto-green-500' : 'bg-psicopiloto-blue-500'}`}>
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <AnimatedCTA 
                    href="/contacto" 
                    text={plan.ctaText} 
                    color={plan.color} 
                    className="w-full text-center text-base py-3.5 rounded-xl" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Sección Informativa: Normas y Políticas de la Cabina */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-psicopiloto-blue-600 flex items-center gap-2">
              <FaCalendarCheck className="text-psicopiloto-green-500" aria-hidden="true" /> Condiciones de Gestión y Compromiso Operativo
            </h3>
            <div className="space-y-4 text-sm text-psicopiloto-gray-600 leading-relaxed">
              <p>
                Para garantizar la viabilidad y el rigor del tratamiento, la asignación de las citas se rige bajo un estricto criterio de disponibilidad y respeto por el tiempo profesional mutuo.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Política de Modificaciones y Cancelaciones:</strong> Las sesiones reservadas implican un compromiso exclusivo de tiempo en la agenda de la consulta. Si necesitas modificar o cancelar una cita, deberás comunicarlo con un mínimo de <strong>24 horas de antelación</strong>. Las cancelaciones o ausencias que se notifiquen fuera de este plazo devengarán el importe íntegro de la sesión como coste de disponibilidad.
                </li>
                <li>
                  <strong>Sesión de Valoración Inicial Gratuita:</strong> Si es tu primera vez, puedes solicitar a través del formulario de contacto una sesión de valoración previa de 30 minutos de forma complementaria. Servirá para analizar tu caso, aclarar dudas sobre el método terapéutico y diseñar tu plan psicoterapéutico inicial.
                </li>
                <li>
                  <strong>Garantía de Regulación Sanitaria:</strong> Todas las intervenciones individuales se realizan al amparo del marco regulado de la Psicología General Sanitaria, cumpliendo de forma estricta con el secreto profesional del código deontológico y la confidencialidad en el tratamiento de datos personales de categoría especial.
                </li>
              </ul>
              <p className="text-xs italic text-gray-400 mt-2">
                * Nota: Si se requiere la tramitación del Consentimiento Informado digital con firma manuscrita para telepsicología, te facilitaré el enlace de acceso privado tras nuestra primera toma de contacto.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
