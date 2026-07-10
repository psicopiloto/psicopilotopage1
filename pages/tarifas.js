// pages/tarifas.js
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";
import { 
  FaLaptop, FaUserAlt, FaRegClock, FaCalendarCheck, 
  FaComments, FaWifi, FaLock, FaBoxes, FaPenFancy, 
  FaSmile, FaVideo, FaCheckCircle 
} from "react-icons/fa";

export default function Tarifas() {
  const planesTarifas = [
    {
      title: "Psicoterapia Individual Online",
      icon: <FaLaptop aria-hidden="true" />,
      subtitle: "Tu consulta desde un espacio privado",
      imageSrc: "/psicopiloto-online-session.webp", 
      altImage: "Escritorio preparado para sesión de terapia online confidencial",
      price: "55€",
      duration: "55 minutos por sesión",
      desc: "Intervención psicoterapéutica especializada mediante plataformas homologadas con cifrado de nivel sanitario. Un proceso estructurado para abordar ansiedad, trauma (EMDR), duelo o problemas de apego.",
      features: [
        "Entorno digital 100% seguro",
        "Protocolo avanzado EMDR",
        "Herramientas de regulación somática",
        "Sin costes de desplazamiento"
      ],
      ctaText: "Iniciar terapia online",
      color: "green",
      fullWidth: false
    },
    {
      title: "Bono Psicoterapia Online",
      icon: <FaBoxes aria-hidden="true" />,
      subtitle: "Planificación y continuidad",
      imageSrc: "/psicopiloto-online-setup.webp", 
      altImage: "Materiales y herramientas digitales para el bono de terapia online",
      price: "250€",
      duration: "Bono de 5 sesiones",
      desc: "Diseñado para asegurar el compromiso operativo que requiere el procesamiento profundo. Optimiza tu plan de ruta establecido con una tarifa preferente.",
      features: [
        "Pack de 5 sesiones individuales",
        "Ahorro en el coste por consulta",
        "Preferencia en reserva de horarios",
        "Ideal para procesos EMDR constantes"
      ],
      ctaText: "Adquirir bono online",
      color: "green",
      fullWidth: false
    },
    {
      title: "Psicoterapia Presencial (Granada)",
      icon: <FaUserAlt aria-hidden="true" />,
      subtitle: "Atención directa en entorno médico",
      imageSrc: "/psicopiloto-granada-consultation.webp", 
      altImage: "Consulta presencial de Psicopiloto en Medifamilia Granada",
      price: "55€",
      duration: "55 minutos por sesión",
      desc: "Sesiones en las instalaciones del centro médico <a href='https://medifamilia.es/' target='_blank' rel='noopener noreferrer' class='font-bold text-psicopiloto-green-600 hover:underline'>Medifamilia</a> en Granada. Un espacio de encuentro físico diseñado para trabajar con total tranquilidad, calidez y rigor metodológico.",
      features: [
        "Consulta en centro sanitario autorizado",
        "Abordaje integrador presencial",
        "Tratamiento de sufrimiento estructural",
        "Espacio libre de juicios"
      ],
      ctaText: "Solicitar cita presencial",
      color: "blue",
      fullWidth: true // Esta propiedad activará el ancho completo
    }
  ];

  const pasosPreparacion = [
    { icon: <FaVideo />, text: "Un dispositivo con cámara y micrófono" },
    { icon: <FaWifi />, text: "Conexión a internet estable" },
    { icon: <FaLock />, text: "Un espacio tranquilo y privado" },
    { icon: <FaPenFancy />, text: "Papel y bolígrafo listos" },
    { icon: <FaSmile />, text: "Una actitud relajada y abierta" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Sesiones y Tarifas | Psicopiloto"
        description="Transparencia operativa en tu proceso terapéutico. Consulta las tarifas de las sesiones de psicología online y presencial en Granada."
        canonical="https://psicopiloto.com/tarifas"
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Sesiones y Tarifas"
        subtitle="Claridad, transparencia y estructura desde el primer momento. Tu plan de ruta hacia la estabilidad emocional sin sorpresas."
        backgroundImage="/header-tarifas.webp" 
      />

      <main className="flex-grow py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* 🚀 BLOQUE 1: Primer encuentro gratuito */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <FaComments className="text-3xl text-psicopiloto-green-600" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-psicopiloto-gray-700">Primer Encuentro Online gratuito (20-30 min)</h2>
              </div>
              <p className="text-md md:text-base text-psicopiloto-gray-600 mb-6 leading-relaxed">
                Antes de trazar cualquier plan de ruta, realizamos una primera toma de contacto gratuita. En mi etapa en la cabina militar, la base de la seguridad operativa dependía de crear un ambiente de confianza absoluta. Ese mismo pilar lo traslado a mi práctica psicoterapéutica.
              </p>
              <h3 className="font-bold text-psicopiloto-blue-600 mb-4 text-md md:text-base">¿De qué hablamos en este encuentro?</h3>
              <ol className="space-y-4 text-md md:text-base text-psicopiloto-gray-700 pl-2">
                <li className="flex gap-3 items-start"><span className="font-bold text-psicopiloto-green-600">1)</span><span>Asegurarnos de que te sientas cómodo o cómoda trabajando conmigo en un entorno clínico seguro.</span></li>
                <li className="flex gap-3 items-start"><span className="font-bold text-psicopiloto-green-600">2)</span><span>Analizaremos si el protocolo EMDR online es la mejor alternativa para tu caso particular.</span></li>
                <li className="flex gap-3 items-start"><span className="font-bold text-psicopiloto-green-600">3)</span><span>Aclarar dudas operativas sobre frecuencia, honorarios y confidencialidad.</span></li>
              </ol>
              <div className="mt-8 text-center md:text-left">
                <AnimatedCTA href="/contacto" text="Reservar valoración gratuita" color="green" className="px-8 py-3 text-base font-semibold rounded-xl" />
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center order-first md:order-last">
                <Image src="/psicopiloto-online-session.webp" alt="Sesión online" width={400} height={400} className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-sm" />
            </div>
          </section>

          {/* 🚀 BLOQUE 2: ¿Cómo prepararte para tu sesión online? (CONTENIDO DE LA IMAGEN) */}
          <section className="mb-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-md border border-gray-100 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-psicopiloto-blue-600">
              ¿Cómo prepararte para tu primera sesión de terapia online?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {pasosPreparacion.map((paso, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-psicopiloto-sand-100 rounded-full flex items-center justify-center text-psicopiloto-green-600 text-2xl shadow-sm group-hover:bg-psicopiloto-green-500 group-hover:text-white transition-colors duration-300">
                    {paso.icon}
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="text-xl font-bold text-psicopiloto-blue-600/40">{idx + 1}</span>
                    <p className="text-base md:text-lg font-medium text-psicopiloto-gray-700 leading-tight">
                      {paso.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-start gap-4 text-sm text-psicopiloto-gray-500 italic">
              <FaCheckCircle className="text-psicopiloto-green-500 mt-1 flex-shrink-0" />
              <p>Para maximizar el beneficio del procesamiento EMDR, asegúrate de estar en un lugar donde puedas expresarte con total libertad y sin interrupciones.</p>
            </div>
          </section>

          {/* 🚀 BLOQUE 3: Cuadrícula de Tarifas (CORREGIDA PARA ANCHO COMPLETO) */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-psicopiloto-blue-600">Planes de Sesión Transparentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {planesTarifas.map((plan, i) => (
                <div 
                  key={i} 
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 ${plan.fullWidth ? 'md:col-span-2' : ''}`}
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

                  {/* Imagen del plan (Adaptada para el formato ancho si es presencial) */}
                  <div className={`w-full overflow-hidden rounded-xl shadow-inner bg-gray-50 border border-gray-100 mb-6 ${plan.fullWidth ? 'h-64' : 'h-48'}`}>
                      <Image src={plan.imageSrc} alt={plan.altImage} width={800} height={400} className="w-full h-full object-cover" />
                  </div>

                  <div className="my-4 pb-4 border-b border-gray-100 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-psicopiloto-gray-700">{plan.price}</span>
                    <span className="text-sm md:text-base text-gray-400 font-medium flex items-center gap-1">
                      <FaRegClock aria-hidden="true" /> {plan.duration}
                    </span>
                  </div>

                  <p className="text-psicopiloto-gray-600 text-md md:text-base leading-relaxed mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: plan.desc }} />

                  <ul className={`space-y-3 mb-8 text-md md:text-base text-psicopiloto-gray-700 grid ${plan.fullWidth ? 'md:grid-cols-2 gap-x-8' : 'grid-cols-1'}`}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className={`flex-shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] ${plan.color === 'green' ? 'bg-psicopiloto-green-500' : 'bg-psicopiloto-blue-500'}`}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <AnimatedCTA href="/contacto" text={plan.ctaText} color={plan.color} className={`text-center text-base font-semibold py-3.5 rounded-xl ${plan.fullWidth ? 'md:w-1/3 mx-auto' : 'w-full'}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 🚀 BLOQUE 4: Resource Group */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
              <div className="md:col-span-3">
                  <h2 className="text-2xl font-bold mb-6 text-psicopiloto-blue-600">Selección y Evaluación de Pilotos Internacionales</h2>
                  <p className="text-md md:text-base text-psicopiloto-gray-600 mb-4 leading-relaxed">
                      Ejerzo como psicólogo experto en comités multidisciplinares para la selección de pilotos en compañías internacionales con <strong>Resource Group</strong>. 
                  </p>
                  <p className="text-md md:text-base text-psicopiloto-gray-600 mb-6 leading-relaxed">
                      Evaluamos Factores Humanos y CRM bajo metodologías basadas en la evidencia (EBT), alineándonos con los criterios de las autoridades de aviación civil.
                  </p>
                  <AnimatedCTA href="/sobre-mi" text="Trayectoria aeronáutica" color="blue" className="px-8 py-3 text-base font-semibold rounded-xl" />
              </div>
              <div className="md:col-span-2 flex justify-center order-first md:order-last">
                  <Image src="/psicopiloto-crm-resource.webp" alt="Comité de selección" width={400} height={400} className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-sm" />
              </div>
          </section>

          {/* 🚀 BLOQUE 5: FAQs */}
          <section className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-psicopiloto-blue-600">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              <details name="faq-acordeon" className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none text-md md:text-lg">
                  <span>¿Cuál es la frecuencia de las sesiones?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600">▼</span>
                </summary>
                <p className="mt-4 text-md text-psicopiloto-gray-600">La pauta recomendada al inicio es semanal para optimizar el procesamiento profundo y consolidar avances estables.</p>
              </details>

              <details name="faq-acordeon" className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none text-md md:text-lg">
                  <span>¿Por qué elegir el formato online?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600">▼</span>
                </summary>
                <p className="mt-4 text-md text-psicopiloto-gray-600">Permite disponibilidad geográfica, optimización de tiempo y realizar el proceso desde un entorno propio e íntimo bajo tu control.</p>
              </details>

              <details name="faq-acordeon" className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none text-md md:text-lg">
                  <span>¿Qué situaciones quedan excluidas?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600">▼</span>
                </summary>
                <p className="mt-4 text-md text-psicopiloto-gray-600">Riesgo suicida inminente, patologías neurológicas graves o brotes psicóticos activos requieren atención presencial de urgencia.</p>
              </details>
            </div>
          </section>

          {/* Condiciones Generales */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-psicopiloto-blue-600 flex items-center gap-2">
              <FaCalendarCheck className="text-psicopiloto-green-500" aria-hidden="true" /> Gestión y Compromiso Operativo
            </h3>
            <div className="space-y-4 text-sm text-psicopiloto-gray-600">
              <p><strong>Cancelaciones:</strong> Debe comunicarse con un mínimo de 24 horas de antelación. En caso contrario, devengará el coste íntegro de la sesión.</p>
              <p><strong>Entorno Seguro:</strong> Toda la actividad cumple estrictamente con la normativa de protección de datos de salud y secreto profesional.</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
