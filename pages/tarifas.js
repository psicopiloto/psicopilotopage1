// pages/tarifas.js
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";
import { useEffect } from "react"; // ✨ Importación añadida para controlar el efecto
import { FaLaptop, FaUserAlt, FaRegClock, FaCalendarCheck, FaComments, FaWifi, FaHeadset, FaLock, FaCheckCircle, FaVideo } from "react-icons/fa";

export default function Tarifas() {
  const planesTarifas = [
    {
      title: "Psicoterapia Individual Online",
      icon: <FaLaptop aria-hidden="true" />,
      subtitle: "Tu consulta desde un espacio privado",
      // ✨ IMAGEN INTEGRADA: Header para Terapia Online
      imageSrc: "/psicopiloto-online-session-header.webp", 
      altImage: "Escritorio limpio con ordenador portátil mostrando la interfaz de Psicopiloto y auriculares para terapia online con total confidencialidad",
      price: "50€",
      duration: "55 minutos por sesión",
      desc: "Intervención psicoterapéutica especializada mediante plataformas homologadas con cifrado de nivel sanitario. Un proceso estructurado y a tu ritmo para abordar la ansiedad, el trauma, el duelo, los trastornos alimentarios (TCA), la gestión de la ira o los problemas de apego.",
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
      // ✨ IMAGEN INTEGRADA: Consulta en Granada
      imageSrc: "/psicopiloto-granada-consultation.webp", 
      altImage: "Interior cálido y acogedor de la consulta presencial de Psicopiloto en el centro médico Medifamilia de Granada",
      price: "55€",
      duration: "55 minutos por sesión",
      desc: "Sesiones presenciales en las instalaciones del centro médico Medifamilia en Granada. Un espacio de encuentro físico diseñado para trabajar con total tranquilidad, calidez y un rigor metodológico orientado a tus objetivos vitales.",
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

  // ✨ EFECTO DE REPLIEGUE AUTOMÁTICO EN PREGUNTAS FRECUENTES ✨
  useEffect(() => {
    // 1. Seleccionamos todos los elementos details de la página
    const detailsElements = document.querySelectorAll('details');
    
    // 2. Iteramos sobre cada uno y le añadimos un escuchador de eventos
    detailsElements.forEach((targetDetail) => {
      targetDetail.addEventListener('toggle', (event) => {
        // Solo actuamos si el elemento se está ABRIENDO
        if (targetDetail.open) {
          // Buscamos TODOS los details abiertos y los cerramos, EXCEPTO el que se acaba de abrir
          detailsElements.forEach((detail) => {
            if (detail !== targetDetail && detail.open) {
              detail.removeAttribute('open'); // Esto cierra el elemento
            }
          });
        }
      });
    });
  }, []); // El array vacío asegura que este código solo se ejecute una vez al montar la página

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Sesiones y Tarifas | Psicopiloto"
        description="Transparencia y claridad operativa en tu proceso terapéutico. Consulta las tarifas de las sesiones de psicología online y presencial en Granada."
        canonical="https://psicopiloto.com/tarifas"
        openGraph={{
          url: "https://psicopiloto.com/tarifas",
          title: "Sesiones y Tarifas Transparentes | Psicopiloto",
          description: "Conoce el coste de las sesiones de psicoterapia individual online y presencial. Un método de total confianza para recuperar tu bienestar.",
          images: [{ url: "https://www.psicopiloto.com/psicopiloto-online-session-header.webp", width: 1200, height: 630, alt: "Cabina de Psicopiloto preparada para sesión de terapia online segura" }],
        }}
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
          
          {/* 🚀 BLOQUE 1: Primer encuentro gratuito con imagen integrada */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <FaComments className="text-3xl text-psicopiloto-green-600" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-psicopiloto-gray-700">Primer Encuentro Online Gratuito (20-30 min)</h2>
              </div>
              <p className="text-md md:text-base text-psicopiloto-gray-600 mb-6 leading-relaxed text-justify">
                Antes de trazar cualquier plan de ruta, realizamos una primera toma de contacto gratuita. En mi etapa en la cabina militar, la base de la seguridad operativa dependía estrictamente de crear un ambiente de confianza absoluta donde la tripulación pudiera comunicarse con honestidad y expresar lo que pensaba sin el menor miedo a ser juzgado. Ese mismo pilar lo traslado a mi práctica psicoterapéutica en tierra.
              </p>
              <h3 className="font-bold text-psicopiloto-blue-600 mb-4 text-base md:text-md">¿De qué hablamos en este primer encuentro?</h3>
              <ol className="space-y-4 text-md md:text-base text-psicopiloto-gray-700 pl-2">
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-psicopiloto-green-600">1)</span>
                  <span>Es una oportunidad para conocernos cara a cara, establecer una primera toma de contacto y que te asegures de sentirte completamente cómodo o cómoda hablando conmigo, construyendo un entorno clínico seguro, protegido y libre de juicios.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-psicopiloto-green-600">2)</span>
                  <span>Me permite obtener una idea general del motivo de consulta o la situación que estás atravesando. Analizaremos tu caso de forma preliminar para valorar si el protocolo de terapia EMDR online es la mejor alternativa metodológica para ti.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold text-psicopiloto-green-600">3)</span>
                  <span>Puedes aclarar todas tus dudas operativas respecto al funcionamiento de las sesiones, la frecuencia, los honorarios o la confidencialidad sanitaria antes de tomar una decisión.</span>
                </li>
              </ol>
              <div className="mt-8 text-center md:text-left">
                <AnimatedCTA href="/contacto" text="Reservar valoración gratuita" color="green" className="px-8 py-3 text-base rounded-xl" />
              </div>
            </div>
            {/* ✨ IMAGEN INTEGRADA: Primer encuentro (Aparece a la derecha en escritorio, abajo en móvil) */}
            <div className="md:col-span-2 flex justify-center order-first md:order-last">
                <Image 
                    src="/psicopiloto-online-session-header.webp" 
                    alt="Laptop y headset preparados en un escritorio tranquilo para una sesión de valoración de Psicopiloto" 
                    width={400} 
                    height={400} 
                    className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-sm" 
                />
            </div>
          </section>

          {/* 🚀 BLOQUE 2: ¿Qué necesitas para hacer Terapia Online? (INTEGRACIÓN DIRECTA DEL DIAGRAMA) */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
            {/* ✨ IMAGEN INTEGRADA: Setup Técnico (Adaptada del diagrama referencial) */}
            <div className="md:col-span-2 flex justify-center">
                <Image 
                    src="/psicopiloto-online-setup.webp" 
                    alt="Ilustración gráfica estructurada del setup de terapia online de Psicopiloto" 
                    width={400} 
                    height={400} 
                    className="rounded-2xl w-full h-auto object-contain max-w-sm" 
                />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-left text-psicopiloto-blue-600">¿Qué necesitas para hacer Terapia EMDR Online?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left items-start mb-6">
                <div className="flex flex-col items-center md:items-start">
                  <FaWifi className="text-3xl text-psicopiloto-green-500 mb-2" aria-hidden="true" />
                  <h4 className="font-bold text-sm text-psicopiloto-gray-700 mb-1">Conexión a Internet</h4>
                  <p className="text-xs text-psicopiloto-gray-500 leading-relaxed">Estable y fluida para asegurar la calidad de la videollamada durante el procesamiento.</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <FaVideo className="text-3xl text-psicopiloto-green-500 mb-2" aria-hidden="true" />
                  <h4 className="font-bold text-sm text-psicopiloto-gray-700 mb-1">Dispositivo con cámara</h4>
                  <p className="text-xs text-psicopiloto-gray-500 leading-relaxed">Ordenador, tablet o móvil colocado en una posición fija y cómoda.</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <FaLock className="text-3xl text-psicopiloto-green-500 mb-2" aria-hidden="true" />
                  <h4 className="font-bold text-sm text-psicopiloto-gray-700 mb-1">Espacio Privado</h4>
                  <p className="text-xs text-psicopiloto-gray-500 leading-relaxed">Un lugar tranquilo, cómodo y libre de interrupciones o ruidos externos.</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <h4 className="font-bold text-sm text-psicopiloto-blue-600">Recomendaciones operativas:</h4>
                <ul className="space-y-2 text-xs text-psicopiloto-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-psicopiloto-green-500 mt-0.5 flex-shrink-0" />
                    <span>Haz lo posible para que nada pueda distraerte durante este tiempo de sesión de Terapia EMDR, para poder aprovecharla al máximo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-psicopiloto-green-500 mt-0.5 flex-shrink-0" />
                    <span>Asegúrate de poder estar en un espacio donde puedas sentirte libre para expresarte con total seguridad.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 🚀 BLOQUE 3: Cuadrícula de Tarifas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-psicopiloto-blue-600">Planes de Sesión Transparentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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

                  {/* ✨ IMAGEN INTEGRADA: Específica para cada plan */}
                  <div className="w-full h-48 mb-6 overflow-hidden rounded-xl shadow-inner bg-gray-50 border border-gray-100">
                      <Image 
                        src={plan.imageSrc} 
                        alt={plan.altImage} 
                        width={600} 
                        height={300} 
                        className="w-full h-full object-cover" 
                      />
                  </div>

                  <div className="my-4 pb-4 border-b border-gray-100 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-psicopiloto-gray-700">{plan.price}</span>
                    <span className="text-sm font-medium flex items-center gap-1 text-gray-400">
                      <FaRegClock aria-hidden="true" /> {plan.duration}
                    </span>
                  </div>

                  <p 
                    className="text-psicopiloto-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow text-justify"
                    dangerouslySetInnerHTML={{ __html: plan.desc }}
                  />

                  <ul className="space-y-3 mb-8 text-sm md:text-base text-psicopiloto-gray-700">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className={`flex-shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] ${plan.color === 'green' ? 'bg-psicopiloto-green-500' : 'bg-psicopiloto-blue-500'}`}>
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
                      className="w-full text-center text-base font-semibold py-3.5 rounded-xl" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 🚀 BLOQUE 4: Resource Group con imagen integrada */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto">
              <div className="md:col-span-3">
                  <h2 className="text-2xl font-bold mb-6 text-psicopiloto-blue-600">Selección y Evaluación de Pilotos Internacionales</h2>
                  <p className="text-sm md:text-base text-psicopiloto-gray-600 mb-4 leading-relaxed text-justify">
                      Además de mi práctica psicoterapéutica, ejerzo como psicólogo experto dentro de comités multidisciplinares para la selección y evaluación de pilotos en compañías aéreas internacionales de la mano de Resource Group. 
                  </p>
                  <p className="text-sm md:text-base text-psicopiloto-gray-600 mb-6 leading-relaxed text-justify">
                      Junto a los equipos de operaciones y recursos humanos, mi labor se centra en la evaluación de Factores Humanos, CRM (Crew Resource Management) y la aptitud conductual. Aplicamos metodologías basadas en la evidencia (EBT) y el entrenamiento por competencias, alineándonos con los exigentes criterios internacionales regulados por las autoridades de aviación civil.
                  </p>
                  <AnimatedCTA href="/sobre-mi" text="Conoce mi trayectoria aeronáutica" color="blue" className="px-8 py-3 text-base font-semibold rounded-xl" />
              </div>
              {/* ✨ IMAGEN INTEGRADA: Resource Group / AESA Committee (Aparece a la derecha) */}
              <div className="md:col-span-2 flex justify-center order-first md:order-last">
                  <Image 
                    src="/psicopiloto-crm-aesa-comité.webp" 
                    alt="Reunión del comité de selección multidisciplinar con comandante de aerolínea, recursos humanos y psicólogo evaluando perfiles" 
                    width={400} 
                    height={400} 
                    className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-sm" 
                  />
              </div>
          </section>

          {/* 🚀 BLOQUE 5: Preguntas Frecuentes Desplegables */}
          <section id="faq-section" className="mb-16 max-w-3xl mx-auto faq-accordion"> {/* ✨ Añadida ID y clase ✨ */}
            <h2 className="text-3xl font-bold mb-8 text-center text-psicopiloto-blue-600">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              
              <details className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none select-none text-base md:text-lg">
                  <span>¿Cuál es la frecuencia de las sesiones?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600 text-lg">▼</span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-psicopiloto-gray-600 leading-relaxed text-justify">
                  Para consolidar avances consistentes y mantener una evolución estable, la pauta de trabajo recomendada al inicio es de carácter semanal. Establecer este intervalo operativo evita la dispersión temporal entre sesiones y optimiza el tiempo de consulta, asegurando que cada encuentro se enfoque en el procesamiento profundo y no en resolver desajustes coyunturales por falta de continuidad.
                </p>
              </details>

              <details className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none select-none text-base md:text-lg">
                  <span>¿Por qué elegir la intervención en formato online?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600 text-lg">▼</span>
                </summary>
                <div className="mt-4 text-sm md:text-base text-psicopiloto-gray-600 leading-relaxed space-y-3 text-justify">
                  <p>La telepsicología aporta ventajas operativas clave sin perder el rigor ni la cercanía del formato tradicional:</p>
                  <ul className="list-disc list-inside space-y-2 pl-1">
                    <li><strong>Disponibilidad geográfica:</strong> Permite mantener el acceso a una intervención especializada con independencia de tu lugar de residencia o tus desplazamientos.</li>
                    <li><strong>Optimización del tiempo:</strong> Facilita la integración de las sesiones en tu rutina diaria al eliminar los tiempos muertos de traslado y esperas.</li>
                    <li><strong>Seguridad y privacidad:</strong> Favorece la apertura emocional al realizar el procesamiento desde un entorno propio, íntimo y completamente bajo tu control.</li>
                    <li><strong>Sostenibilidad del proceso:</strong> Protege la continuidad de las sesiones frente a imprevistos laborales, cambios de localización o viajes, consolidando una base de trabajo estable.</li>
                  </ul>
                  <p className="pt-2 italic">
                    En el ámbito del EMDR, los protocolos aplicados de forma online mantienen la misma equivalencia metodológica, rigor y efectividad que el formato presencial. Mi experiencia profesional constata que, al encontrarte en un espacio conocido y seguro para ti, resulta más sencillo regular la activación somática y consolidar el reprocesamiento de las memorias traumáticas.
                  </p>
                </div>
              </details>

              <details className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none select-none text-base md:text-lg">
                  <span>¿Cuál es la duración estimada del proceso?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600 text-lg">▼</span>
                </summary>
                <div className="mt-4 text-sm md:text-base text-psicopiloto-gray-600 leading-relaxed space-y-3 text-justify">
                  <p>La temporalidad del tratamiento está directamente vinculada a la naturaleza de la demanda. Un abordaje focalizado en un impacto emocional o trauma simple puede resolverse de forma ágil en pocas sesiones, mientras que las dinámicas asociadas a heridas de apego complejas o sufrimiento estructural requieren una ruta de trabajo más prolongada.</p>
                  <p>Cada plan psicoterapéutico es individualizado y responde a objetivos medibles. Mi enfoque está diseñado para ofrecer una intervención resolutiva, por lo que mantendremos el espacio de consulta únicamente durante el periodo estrictamente necesario para consolidar tu autonomía y estabilidad.</p>
                  <p className="pt-1">La ventaja estructural del Reprocesamiento EMDR es su impacto neurobiológico profundo: una vez que el cerebro procesa y archiva de forma adaptativa las memorias disfuncionales del pasado, los síntomas disminuyen notablemente, minimizando la necesidad de recurrir a intervenciones posteriores por las mismas causas.</p>
                </div>
              </details>

              <details className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none select-none text-md md:text-lg">
                  <span>¿Qué situaciones quedan excluidas de la consulta online?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600 text-lg">▼</span>
                </summary>
                <div className="mt-4 text-sm md:text-base text-psicopiloto-gray-600 leading-relaxed space-y-3 text-justify">
                  <p>Por estrictos criterios de seguridad clínica y deontológica, la modalidad a distancia no abarca los siguientes escenarios:</p>
                  <ul className="list-disc list-inside space-y-2 pl-1">
                    <li>Atención a menores de edad (la práctica se centra exclusivamente en población adulta).</li>
                    <li>Conducta suicida inminente o ideación autolítica activa aguda</li>
                    <li>Condiciones neurológicas graves o deterioro cognitivo orgánico severo</li>
                    <li>Cuadros de psicosis, brotes o pérdidas de la realidad activos</li>
                  </ul>
                  <p className="pt-2 font-semibold text-psicopiloto-gray-700">
                    Si te encuentras en una situación de emergencia médica o crisis clínica aguda que requiera asistencia inmediata, te recomiendo que acudas sin demora al servicio de urgencias hospitalario local o al centro hospitalario más cercano.
                  </p>
                </div>
              </details>

              <details className="group bg-white/80 rounded-xl p-5 shadow-sm border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-psicopiloto-gray-700 cursor-pointer list-none select-none text-md md:text-lg">
                  <span>¿De qué vías de abono dispongo?</span>
                  <span className="transition group-open:rotate-180 text-psicopiloto-green-600 text-lg">▼</span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-psicopiloto-gray-600 leading-relaxed text-justify">
                  Para facilitar la gestión administrativa y mantener la transparencia operativa, las sesiones pueden abonarse cómodamente a través de la plataforma Bizum o mediante transferencia bancaria directa. Los datos de facturación y plazos se coordinan de manera privada tras formalizar el encuadre inicial en las primeras sesiones.
                </p>
              </details>

            </div>
          </section>

          {/* Condiciones Generales del Marco Operativo */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-psicopiloto-blue-600 flex items-center gap-2">
              <FaCalendarCheck className="text-psicopiloto-green-500" aria-hidden="true" /> Condiciones de Gestión y Compromiso Operativo
            </h3>
            <div className="space-y-4 text-sm md:text-base text-psicopiloto-gray-600 leading-relaxed text-justify">
              <p>
                Para garantizar la viabilidad y el rigor de la intervención, la asignación de las citas se rige bajo un estricto criterio de respeto por el tiempo profesional mutuo.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Política de Modificaciones y Cancelaciones:</strong> Las citas reservadas implican la reserva exclusiva de tu tiempo profesional. Si necesitas modificar o cancelar tu cita, deberás comunicarlo con un mínimo de <strong>24 horas de antelación</strong>. Las cancelaciones fuera de este plazo o las ausencias no justificadas devengarán el coste íntegro de la sesión programada.
                </li>
                <li>
                  <strong>Consulta bajo Entorno Seguro:</strong> Toda la actividad presencial se realiza en las instalaciones autorizadas del centro médico Medifamilia de Granada, y la online opera bajo plataformas con estricto cumplimiento de la normativa de protección de datos de salud y secreto profesional en un espacio de total confianza y libre de juicios.
                </li>
              </ul>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
