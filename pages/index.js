// pages/index.js
import { useState, useEffect, useMemo, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";

const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);
  const days = Math.floor(diffInSeconds / (3600 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (days < 1) return "Hace un momento";
  if (days === 1) return "Hace 1 día";
  if (days < 7) return `Hace ${days} días`;
  if (weeks === 1) return "Hace 1 semana";
  if (weeks < 4) return `Hace ${weeks} semanas`;
  if (months === 1) return "Hace 1 mes";
  if (months < 12) return `Hace ${months} meses`;
  if (years === 1) return "Hace 1 año";
  return `Hace ${years} años`;
};

const getPastDate = (daysAgo) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
};

const testimonialsData = [
  {
    stars: 5,
    author: "Luna",
    date: getPastDate(63), 
    text: "No es fácil encontrar a alguien con tanta calidad humana y profesionalidad. Desde el primer momento me sentí escuchada y comprendida. Su forma de trabajar transmite confianza y seguridad, y eso ha sido clave en mi proceso. Estoy muy agradecida por todo lo que he aprendido y avanzado gracias a su acompañamiento.",
  },
  {
    stars: 5,
    author: "Lucía Alejandre",
    date: getPastDate(21), 
    text: "No tengo las suficientes palabras positivas para describir mi experiencia y lo muchísimo que ha cambiado mi vida desde que decidí empezar con José Carlos. Es una persona maravillosa que se esfuerza en ayudarte a encontrar una solución. Siempre agradecida y feliz de haber confiado en él para poner orden a mi vida y a mi cabeza.",
  },
  {
    stars: 5,
    author: "Lolicci lolicci",
    date: getPastDate(7), 
    text: "Desde que empecé a trabajar con Jose Carlos, supe que estaba en las mejores manos. Su enfoque empático y profesional, me han ayudado a entender y superar muchos de mis desafíos personales. Cada sesión es un espacio seguro donde puedo expresar mis pensamientos y emociones sin juicios. Gracias a su orientación, he logrado avances significativos en mi bienestar emocional. Lo recomiendo a cualquiera que busque apoyo psicológico de calidad.",
  },
  {
    stars: 5,
    author: "Eve",
    date: getPastDate(8), 
    text: "Para nosotros fue una experiencia de 10, comprometido y muy profesional. Nos ha ayudado muchísimo a comprender las cosas en una situación muy complicada para nosotros. Estamos muy agradecidos por su atención e implicación.",
  },
  {
    stars: 5,
    author: "Ana",
    date: getPastDate(9),
    text: "Estoy super agradecida por la ayuda que me ha dado José Carlos. Me encontraba muy frustrada por un problema del que no sabía cómo salir y él, con su eterna paciencia y profesionalidad, ha sabido dar en el clavo con sus consejos, ayudándome a salir del agujero. Buena persona y excelente profesional. Lo recomiendo 100%.",
  },
  {
    stars: 5,
    author: "Eva Maria Figueroa",
    date: getPastDate(10),
    text: "Desde el primer día José Carlos hizo que me sientiera en confianza, en cada sesión me he sentido escuchada, acompañada y comprendida, lo que me ha permitido avanzar realmente en mi proceso. Su forma de trabajar transmite seguridad y cercanía a la vez. Lo recomiendo de todo corazón.",
  },
  {
    stars: 5,
    author: "Lola y Miguel Ángel",
    date: getPastDate(14),
    text: "Cuando encuentras un buen profesional es algo estupendo. Y cuando se da con un profesional de la psicología como José Carlos es algo que no se puede describir. Al hablar con un psicólogo desnudas tu mente y para ello has de confiar, sentirte a gusto y lo más importante, que te ayude. Eso me pasó con él. Muchas gracias José Carlos.",
  },
];

const avatarColors = [
  "bg-[#1a73e8]", "bg-[#a142f4]", "bg-[#d93025]", "bg-[#1e8e3e]", "bg-[#f9ab00]", "bg-[#e37400]", "bg-[#00acc1]"
];

const ReviewCard = ({ item, avatarColorClass }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeAgoText = timeAgo(item.date);
  const CHAR_LIMIT = 150; 
  const shouldTruncate = item.text.length > CHAR_LIMIT;

  const toggleReadMore = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setIsExpanded(!isExpanded);
  };

  const ColoredGIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );

  return (
    <div className={`bg-white p-6 rounded-[20px] shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-transparent flex flex-col relative text-left transition-all duration-300 ${isExpanded ? 'h-auto z-20 absolute top-0 left-0 right-0 shadow-2xl' : 'h-full relative z-0'}`}>
      <div className="absolute top-6 right-6"><ColoredGIcon /></div>
      <div className="flex items-center mb-2 pr-8">
        <div className={`${avatarColorClass} text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-lg mr-3`}>
          {item.author.charAt(0)}
        </div>
        <div className="flex flex-col">
          {/* 🚀 SEO CORRECCIÓN: Eliminada etiqueta H4 para mantener jerarquía semántica limpia */}
          <span className="font-bold text-[#202124] text-[16px] leading-snug">{item.author}</span>
          <span className="text-[12px] text-[#70757a]">{timeAgoText}</span>
        </div>
      </div>
      <div className="flex text-[#fbbc04] text-[14px] mb-3 ml-[52px]">{'★'.repeat(item.stars)}</div>
      <div className="text-[#202124] text-[16px] leading-[1.6] relative">
        {shouldTruncate && !isExpanded ? (
          <>
            "{item.text.substring(0, CHAR_LIMIT)}..."
            <button onClick={toggleReadMore} className="text-[#70757a] hover:text-[#202124] font-medium ml-1 text-[14px] focus:outline-none cursor-pointer">Leer más</button>
          </>
        ) : (
          <>
            "{item.text}"
            {shouldTruncate && (
              <button onClick={toggleReadMore} className="text-[#70757a] hover:text-[#202124] font-medium ml-1 text-[14px] focus:outline-none block mt-2 cursor-pointer">Leer menos</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const TestimonialCarousel = ({ data }) => {
  const originalLength = data.length;
  const extendedData = useMemo(() => [...data, ...data, ...data, ...data], [data]);
  const [currentIndex, setCurrentIndex] = useState(originalLength);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionTimeoutRef = useRef(null);
  const transitionDuration = 500;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50; 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(3);
      else if (width >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    const totalItems = extendedData.length;
    if (currentIndex >= totalItems - itemsPerPage) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(originalLength);
      }, transitionDuration);
    } else if (currentIndex <= 0) {
       transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalItems - itemsPerPage * 2);
      }, transitionDuration);
    }
  }, [currentIndex, itemsPerPage, extendedData.length, originalLength]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setTimeout(() => setIsTransitioning(true), 50));
    }
  }, [isTransitioning]);

  const nextSlide = () => setCurrentIndex(prev => prev + 1);
  const prevSlide = () => setCurrentIndex(prev => prev - 1);
  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <div className="relative w-full max-w-[1300px] mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200">
          <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-none mb-0.5">Valoración Google</span>
            <div className="flex items-center leading-none">
              <span className="font-bold text-[#202124] text-base mr-1.5">5.0</span>
              <div className="flex text-yellow-400 text-sm">{'★'.repeat(5)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden relative pb-10 pt-4" style={{ minHeight: '350px' }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className={`flex items-start ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`} style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
          {extendedData.map((item, index) => {
             const avatarColorClass = avatarColors[(index % originalLength) % avatarColors.length];
             return (
              <div key={index} className="flex-shrink-0 px-3 w-full relative" style={{ flexBasis: `${100 / itemsPerPage}%` }}>
                <ReviewCard item={item} avatarColorClass={avatarColorClass} />
              </div>
             );
          })}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-gray-600 shadow-lg z-30 hover:bg-gray-50 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-gray-600 shadow-lg z-30 hover:bg-gray-50 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="flex justify-center space-x-2 mt-4">
        {data.map((_, idx) => (
          <div key={idx} className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === (currentIndex % originalLength) ? 'bg-[#1a73e8]' : 'bg-[#e0e0e0]'}`} />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const googleReviewsLink = "https://share.google/7GKlTrF0YTfa8pGSq";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Psicólogo online y presencial en Granada | Psicopiloto"
        description="Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita."
        canonical="https://psicopiloto.com/"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "psicólogo Granada, psicólogo online, terapia ansiedad, depresión, autoestima, trauma, EMDR, terapia de pareja, psychology, josé carlos rodríguez",
          },
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicólogo online y presencial en Granada | Psicopiloto",
          description: "Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita.",
        }}
      />

      <BackgroundLogo />
      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        <PageHeader
          title="Toma los mandos de tu bienestar emocional"
          subtitle="Consulta sanitaria en Granada especializada en Reprocesamiento EMDR y Trauma. Un espacio estructurado para procesar el pasado y recuperar el control de tu presente."
          backgroundImage="/fotoinicio1.webp"
          cta={{ href: "/contacto", text: "Inicia tu plan de vuelo", color: "green" }}
        />

        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-psicopiloto-blue-600">¿Sientes que el pasado o la alerta bloquean tu rumbo?</h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-10 max-w-3xl mx-auto">Cuando sufrimos un impacto emocional o vivimos bajo estrés continuado, nuestro sistema nervioso se congestiona. Te acompaño a desbloquearlo con un método claro y profesional.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              
              <div className="p-6 bg-psicopiloto-sand-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-2 border-psicopiloto-green-500/30">
                <div className="flex items-center mb-3">
                  <span className="bg-psicopiloto-green-500 text-white font-bold text-xs px-2.5 py-1 rounded-full uppercase mr-2 tracking-wider animate-pulse">Especialidad</span>
                  <h3 className="text-xl font-bold text-psicopiloto-green-600">Trauma y EMDR</h3>
                </div>
                <p className="text-psicopiloto-gray-700 text-base leading-relaxed">Bloqueos, recuerdos difíciles que regresan, fobias o reacciones desproporcionadas. A través del protocolo oficial <strong>EMDR</strong>, ayudamos al cerebro a reprocesar y archivar esas memorias traumáticas almacenadas de forma disfuncional para que dejen de doler hoy.</p>
                <a href="/servicios" className="text-sm font-bold text-psicopiloto-green-600 hover:underline mt-4 inline-block">Ver tratamiento EMDR →</a>
              </div>

              <div className="p-6 bg-psicopiloto-sand-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-psicopiloto-blue-600">Ansiedad y Alerta Constante</h3>
                <p className="text-psicopiloto-gray-700 text-base leading-relaxed">Taquicardias, insomnio, rumiación obsesiva y la sensación permanente de peligro inminente. Pautaremos checklists emocionales y pautas de regulación somática para apagar el 'modo supervivencia' y recuperar la calma.</p>
                <a href="/ansiedad" className="text-sm font-semibold text-psicopiloto-blue-600 hover:underline mt-4 inline-block">Tratamiento de la ansiedad →</a>
              </div>

              <div className="p-6 bg-psicopiloto-sand-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100">
                {/* 🚀 CORRECCIÓN: Subsanada errata de Autoesteem */}
                <h3 className="text-xl font-bold mb-3 text-psicopiloto-blue-600">Autoestima y Vínculos</h3>
                <p className="text-psicopiloto-gray-700 text-base leading-relaxed">Inseguridad permanente, autoexigencia destructiva o dificultad para poner límites firmes. Analizaremos tu estilo de apego temprano para desmantelar automatismos y ayudarte a liderar tus relaciones desde el autorrespeto.</p>
                <a href="/sobre-mi" className="text-sm font-semibold text-psicopiloto-blue-600 hover:underline mt-4 inline-block">Conoce mi enfoque de consulta →</a>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-psicopiloto-green-600">Rigor y estructura frente a la tormenta</h2>
                <p className="text-psicopiloto-gray-700 text-base leading-relaxed mb-4">Como psicólogo con habilitación sanitaria y ex-piloto militar de misiones de emergencia (18 años de carrera), sé que las crisis no se resuelven con improvisación. En cabina entrenábamos procedimientos estrictos para mantener el control bajo presión extrema; en psicoterapia aplico esa misma <strong>estructura y claridad operativa</strong>.</p>
                <p className="text-psicopiloto-gray-700 text-base leading-relaxed mb-6">Fusiono el protocolo neurobiológico del <strong>EMDR</strong> con enfoques de la teoría del apego y psicoterapia integradora. Trazamos un plan de vuelo transparente y medible para que comprendas en todo momento en qué fase de tu recuperación te encuentras.</p>
                <AnimatedCTA href="/servicios" text="Explora las áreas de intervención" color="honey" />
              </div>
              <div className="hidden md:block">
                <Image src="/filosofia.webp" alt="Terapia EMDR y trauma en Granada con el método estructurado de Psicopiloto" width={600} height={400} className="rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-psicopiloto-blue-600">Flexibilidad sin perder cercanía</h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-10 max-w-3xl mx-auto">Tú eliges cómo hacer el camino. Diseñamos un entorno adaptado a tu ritmo de vida garantizando la confidencialidad de una consulta de salud autorizada.</p>
            <div className="grid md:grid-cols-1 gap-8 text-left max-w-xl mx-auto">
              <div className="p-8 border-t-4 border-psicopiloto-green-500 bg-white/80 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-gray-700">Terapia Online o Presencial en Granada</h3>
                <p className="mb-4 text-psicopiloto-gray-500">Operamos bajo entornos digitales seguros con cifrado de nivel sanitario. El formato online te permite realizar el reprocesamiento y las sesiones desde un espacio completamente seguro y privado para ti, optimizando tus tiempos semanales.</p>
                <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-600 text-base">
                  <li>Plataformas homologadas con total protección de datos sanitarios.</li>
                  <li>Evita interrupciones y optimiza tu agenda semanal.</li>
                  <li>Consulta presencial en Granada disponible para sesiones intensivas.</li>
                  <li>Intervención psicoterapéutica enfocada a objetivos específicos y medibles.</li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <AnimatedCTA href="/contacto" text="Inicia tu consulta de valoración" color="green" />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-psicopiloto-blue-600">Psicopiloto para Organizaciones</h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-8 max-w-3xl mx-auto">Transferimos la metodología aeronáutica CRM (Crew Resource Management) y el factor humano al entorno de la empresa. Programas estructurados de liderazgo bajo presión, cultura justa ante el error y blindaje de la salud mental de equipos de alta responsabilidad.</p>
            <div className="md:w-2/3 mx-auto">
              <AnimatedCTA href="/servicios" text="Ver consultoría y formación corporativa" color="honey" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-psicopiloto-blue-600">El origen de la metodología</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white/70 rounded-2xl shadow-xl">
              <div className="flex flex-col h-full p-4">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-green-600">Trayectoria Sanitaria</h3>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-700 text-base">Soy Jose Carlos Rguez. Retamar, psicólogo con habilitación sanitaria colegiado nº AO14457. Mi labor se asienta sobre el marco regulado del ejercicio sanitario, especializándome en herramientas de procesamiento emocional profundo como el EMDR para deshacer nudos psicoterapéuticos complejos.</p>
                <div className="mt-auto pt-4">
                  <AnimatedCTA href="/sobre-mi" text="Conoce mi perfil sanitario" color="blue" />
                </div>
              </div>
              <div className="flex flex-col h-full p-4">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-green-600">La Filosofía Psicopiloto</h3>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-700 text-base">Buscamos una meta clara: que recuperes una base interna de seguridad firme para tomar tus propias decisiones. Trabajamos con rigor metodológico protegiendo tu intimidad para desactivar automatismos dolorosos.</p>
                <div className="mt-auto pt-4">
                  <AnimatedCTA href="/que-es-psicopiloto" text="Descubre la filosofía" color="blue" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-psicopiloto-honey-500">Áreas de Intervención Psicoterapéutica</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Trauma y reprocesamiento EMDR", desc: "Abordaje neurobiológico oficial para liberar recuerdos dolorosos, duelos congelados, fobias o vivencias que sabotean tu calma actual." },
                { title: "Ansiedad, estrés y pánico", desc: "Técnicas de regulación somática y reestructuración de pensamientos para frenar la rumiación y desactivar el bucle de alerta." },
                { title: "Depresión y estancamiento vital", desc: "Automotivación y activación gradual centrada en tus valores esenciales para salir de la apatía y recuperar el motor interno." },
                { title: "Seguridad interna y apego", desc: "Trabajo profundo de autoconfianza y asertividad para sanar la baja autoestima y reconfigurar tus patrones relacionales." },
                { title: "Terapia y crisis de pareja", desc: "Intervención orientada a desenredar los círculos viciosos de comunicación, sanar desencuentros y reconstruir la confianza." },
                { title: "Consultoría y Factores Humanos", desc: "Asesoramiento corporativo especializado en gestión del estrés laboral, optimización del liderazgo y cultura organizativa justa." },
              ].map((s, i) => (
                <div key={i} className="p-6 bg-psicopiloto-sand-50 rounded-2xl shadow-sm border border-gray-100 transition transform hover:-translate-y-1">
                  <h3 className="font-bold text-xl mb-2 text-psicopiloto-honey-500">{s.title}</h3>
                  <p className="text-psicopiloto-gray-600 text-base leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <AnimatedCTA href="/servicios" text="Detalles de los servicios" color="honey" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-psicopiloto-sand-50 overflow-hidden">
          <div className="container mx-auto max-w-full text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-psicopiloto-blue-600">La experiencia real de mis pacientes</h2>
            <p className="text-lg text-psicopiloto-gray-500 mb-16 max-w-2xl mx-auto">Opiniones verificadas de personas que han completado su proceso en consulta.</p>
            <TestimonialCarousel data={testimonialsData} />
            <div className="mt-20">
              <AnimatedCTA href={googleReviewsLink} text="Leer más reseñas en Google" color="blue" isExternal={true} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            <Image src="/telefono.webp" alt="Llamada a la consulta de Psicopiloto" width={400} height={400} className="w-[200px] h-auto mx-auto mb-6 md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-10 md:w-[350px] lg:w-[400px] lg:-left-20 z-30 drop-shadow-xl" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8 bg-psicopiloto-sand-50 rounded-2xl shadow-xl relative z-20 border border-gray-100">
              <div className="col-span-1 md:col-start-2 md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-psicopiloto-green-500">Da el primer paso hacia la estabilidad</h2>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-600 text-base">Escribir o solicitar ayuda suele ser el paso más costoso, y ya estás aquí. Te ofrezco una <strong>primera sesión de valoración gratuita de 30 minutos</strong> para que me cuentes tu situación y tracemos juntos tu plan psicoterapéutico basado en EMDR e integración clínica.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
