// pages/index.js

import { useState, useEffect, useMemo, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";

// ========================================================================
// DATOS DE LOS TESTIMONIOS REALES
// ========================================================================
const testimonialsData = [
  {
    stars: 5,
    text: "Desde el primer día José Carlos hizo que me sintiera en confianza. En cada sesión me he sentido escuchada, acompañada y comprendida. Su forma de trabajar transmite seguridad y cercanía a la vez. Lo recomiendo de todo corazón.",
    author: "Eva",
  },
  {
    stars: 5,
    text: "No tengo palabras suficientes para describir mi experiencia y lo muchísimo que ha cambiado mi vida desde que decidí empezar con José Carlos. Siempre agradecida y feliz de haber confiado en él para poner orden a mi vida.",
    author: "Lucía",
  },
  {
    stars: 5,
    text: "Estoy super agradecida. Me encontraba muy frustrada por un problema del que no sabía cómo salir y él, con su eterna paciencia y profesionalidad, ha sabido dar en el clavo con sus consejos. Buena persona y excelente profesional.",
    author: "Ana",
  },
  {
    stars: 5,
    text: "Cuando encuentras un buen profesional es algo estupendo. Al hablar con un psicólogo desnudas tu mente y para ello has de confiar, sentirte a gusto y lo más importante, que te ayude. Eso me pasó con él.",
    author: "Lola",
  },
];

// ========================================================================
// COMPONENTE CARRUSEL INFINITO (Estilo Rueda + Iniciales)
// ========================================================================
const TestimonialCarousel = ({ data }) => {
  const originalLength = data.length;
  // Triplicamos los datos para crear el efecto de bucle infinito
  const extendedData = useMemo(() => [...data, ...data, ...data], [data]);
  
  // Empezamos en el inicio del segundo set de datos
  const [currentIndex, setCurrentIndex] = useState(originalLength);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionTimeoutRef = useRef(null);
  const transitionDurationStr = '500ms';
  const transitionDurationNum = 500;

  useEffect(() => {
    const handleResize = () => {
      // Ajustamos para que en tablets grandes ya se vean 3, o mantenemos 1 en móvil
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lógica del "salto" infinito
  useEffect(() => {
    // Limpiamos timeouts anteriores si el usuario hace clic rápido
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    // Si estamos en el tercer set (muy a la derecha), saltamos atrás al segundo set
    if (currentIndex >= originalLength * 2) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false); // Desactivar transición para el salto
        setCurrentIndex(currentIndex - originalLength);
      }, transitionDurationNum);
    }
    // Si estamos en el primer set (muy a la izquierda), saltamos adelante al segundo set
    else if (currentIndex < originalLength) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false); // Desactivar transición para el salto
        setCurrentIndex(currentIndex + originalLength);
      }, transitionDurationNum);
    }
  }, [currentIndex, originalLength]);


  // Reactivar la transición después del salto instantáneo
  useEffect(() => {
    if (!isTransitioning) {
        // Usamos un pequeño timeout para asegurar que el DOM se actualizó sin transición
        // antes de volver a activarla
        setTimeout(() => {
            setIsTransitioning(true);
        }, 50);
    }
  }, [isTransitioning]);


  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );

  // Calcular el índice real para los puntos indicadores
  const actualIndex = currentIndex % originalLength;

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-12">
      
      {/* HEADER GOOGLE */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 transform transition hover:scale-105">
          <GoogleLogo />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Valoración Google</span>
            <div className="flex items-center">
              <span className="font-bold text-gray-800 text-lg mr-2">5.0</span>
              <div className="flex text-yellow-400 text-lg">
                {'★'.repeat(5)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARRUSEL */}
      <div className="overflow-hidden relative py-4">
        <div 
          className={`flex ${isTransitioning ? `transition-transform ease-out` : ''}`}
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            transitionDuration: isTransitioning ? transitionDurationStr : '0ms'
          }}
        >
          {extendedData.map((item, index) => (
            // Usamos index como key aquí porque los datos están duplicados
            <div 
              key={index} 
              className="flex-shrink-0 px-4 w-full lg:w-1/3"
              style={{ flexBasis: itemsPerPage === 1 ? '100%' : '33.333%' }}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow relative">
                
                {/* Logo G marca de agua */}
                <div className="absolute top-6 right-6 opacity-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-6 h-6"/>
                </div>

                <div className="flex items-center mb-6">
                  {/* AVATAR CON INICIAL - Estilo Google estándar (color sólido) */}
                  <div className="bg-psicopiloto-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 shadow-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{item.author}</h4>
                    <div className="flex text-yellow-400 text-base">
                        {'★'.repeat(item.stars)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic font-medium">
                  "{item.text}"
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTONES */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-psicopiloto-blue-600 shadow-lg hover:bg-gray-50 z-10 focus:outline-none transition-transform hover:scale-110"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-psicopiloto-blue-600 shadow-lg hover:bg-gray-50 z-10 focus:outline-none transition-transform hover:scale-110"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* INDICADORES (Puntos) */}
      <div className="flex justify-center space-x-3 mt-8">
        {data.map((_, idx) => (
          <div 
            key={idx}
            // Comparamos el índice real (módulo) para activar el punto correcto
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${idx === actualIndex ? 'bg-psicopiloto-blue-600 scale-125' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

// ========================================================================
// PÁGINA PRINCIPAL
// ========================================================================

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
            content:
              "psicólogo Granada, psicólogo online, terapia ansiedad, depresión, autoestima, trauma, EMDR, terapia de pareja, psicología integradora, josé carlos rodríguez",
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
          title="Psicólogo Online en Granada | Un enfoque práctico para tu bienestar"
          subtitle="Un espacio seguro, cercano y profesional para que recuperes el control, la calma y el sentido en tu vida. Aquí encontrarás escucha, empatía y herramientas prácticas para afrontar tus retos con confianza."
          backgroundImage="/fotoinicio1.webp"
          cta={{
            href: "/contacto",
            text: "Agenda tu primera cita",
            color: "green", // ✅ VERDE: Acción principal
          }}
        />

        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">
              ¿Te sientes así?
            </h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-8 max-w-3xl mx-auto">
              La ansiedad no tiene por qué pilotar tu vida. Te ofrezco un espacio
              seguro para transformar tus preocupaciones y recuperar tu bienestar.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">Ansiedad y Estrés</h3>
                <p className="text-psicopiloto-gray-700">Preocupación constante, tensión muscular, insomnio y la sensación de que algo malo va a pasar. Juntos podemos desactivar el "modo alerta".</p>
                <a href="/ansiedad" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Saber más sobre ansiedad →</a>
              </div>
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">Ataques de ira, tristeza o soledad</h3>
                <p className="text-psicopiloto-gray-700">Recuerdos intrusivos, reacciones exageradas y el peso de experiencias pasadas. Con la terapia EMDR y un enfoque integrador, es posible sanar.</p>
                <a href="/servicios" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Descubre el EMDR →</a>
              </div>
              <div className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2 text-psicopiloto-green-500">Autoestima y Liderazgo</h3>
                <p className="text-psicopiloto-gray-700">Dificultad para poner límites, inseguridad, o un síndrome del impostor. Gana la autoconfianza que necesitas para tomar las riendas de tu vida.</p>
                <a href="/sobre-mi" className="text-sm text-psicopiloto-blue-600 hover:underline mt-2 inline-block">Mi filosofía →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-psicopiloto-green-600">Un enfoque que te devuelve el control</h2>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-4">Como psicólogo y ex-piloto, sé lo que significa <strong>gestionar la presión, tomar decisiones difíciles</strong> y actuar con seguridad. Aplico esta filosofía a tu proceso terapéutico.</p>
                <p className="text-psicopiloto-gray-700 leading-relaxed mb-6">Mi terapia es <strong>integradora</strong>, adaptando las mejores herramientas (Terapia EMDR, cognitivo-conductual, humanista) a tus necesidades únicas, para que puedas <strong>recuperar la calma y la claridad</strong>.</p>
                <AnimatedCTA 
                  href="/servicios" 
                  text="Descubre mis servicios" 
                  color="honey" // ✅ MIEL: Exploración de Servicios
                />
              </div>
              <div className="hidden md:block">
                <Image src="/filosofia.webp" alt="Psicopiloto, uniendo psicología y aviación para un enfoque integrador" width={600} height={400} className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">Terapia online: Comodidad y máxima eficacia</h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-10 max-w-3xl mx-auto">Mi enfoque es la terapia online, dándote la flexibilidad de hacer terapia desde la comodidad de tu casa en Granada, o desde donde tú elijas.</p>
            <div className="grid md:grid-cols-1 gap-8 text-left max-w-xl mx-auto">
              <div className="p-8 border-t-4 border-psicopiloto-green-500 bg-white/80 rounded-lg shadow-xl transition transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-3 text-psicopiloto-gray-700">Terapia Online (Mi enfoque principal)</h3>
                <p className="mb-4 text-psicopiloto-gray-500">Ideal para ahorrar tiempo y costes. Mi experiencia garantiza la misma calidad y cercanía que la sesión presencial.</p>
                <ul className="list-disc list-inside space-y-2 text-psicopiloto-gray-500">
                  <li>Acceso desde cualquier lugar.</li>
                  <li><strong>Ahorro de tiempo y costes de desplazamiento.</strong></li>
                  <li>Máxima privacidad y comodidad en tu propio entorno.</li>
                  <li>Sesiones flexibles y adaptadas a tu ritmo de vida.</li>
                  <li>Eficacia demostrada, equivalente a la terapia presencial.</li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <AnimatedCTA 
                href="/contacto" 
                text="Empieza tu terapia online" 
                color="green" // ✅ VERDE: Acción principal
              />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white/40">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-blue-600">Psicopiloto para Empresas</h2>
            <p className="text-xl text-psicopiloto-gray-500 mb-8 max-w-3xl mx-auto">Transfiere la mentalidad de cabina (CRM, Liderazgo, Gestión del Estrés) a tu equipo. Mejora la comunicación, toma de decisiones bajo presión y el bienestar de tu organización.</p>
            <div className="md:w-2/3 mx-auto">
              <AnimatedCTA 
                href="/servicios" 
                text="Ver servicios de consultoría y formación" 
                color="honey" // ✅ MIEL: Exploración de Servicios
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold mb-8 text-center text-psicopiloto-blue-600">Conoce el Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white/70 rounded-2xl shadow-xl transition transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">Sobre el Psicólogo</h3>
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-700">Soy Jose Carlos Rguez. Retamar, psicólogo y ex-piloto militar. Mi experiencia en aviación (gestión de crisis, factores humanos y liderazgo) se integra en la terapia para ofrecerte un enfoque sólido y práctico.</p>
                <div className="mt-auto pt-4">
                  <AnimatedCTA 
                    href="/sobre-mi" 
                    text="Conóceme mejor" 
                    color="blue" // ✅ AZUL: Información
                  />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-3 text-psicopiloto-green-600">La Filosofía Psicopiloto</h3>
                <p className="leading-relaxed mb-4 text-psicopiloto-gray-700">El objetivo es que recuperes la seguridad y la dirección en tu vida. Mi compromiso es ofrecerte un espacio de confianza, utilizando terapia integradora y EMDR para que recuperes el control de tus emociones.</p>
                <div className="mt-auto pt-4">
                  <AnimatedCTA 
                    href="/que-es-psicopiloto" 
                    text="Descubre la filosofía" 
                    color="blue" // ✅ AZUL: Información
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-500">Áreas de Intervención</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Ansiedad y estrés", desc: "Insomnio, tensión, preocupaciones constantes. Recupera el control y la calma diaria con herramientas prácticas." },
                { title: "Depresión y ánimo bajo", desc: "Falta de motivación, tristeza o apatía. Vuelve a encontrar el sentido y la dirección en tu vida." },
                { title: "Autoestima y apego", desc: "Inseguridad, dificultad para poner límites. Fortalece tu identidad y establece relaciones sanas." },
                { title: "Terapia de pareja", desc: "Espacio para mejorar la comunicación, reconstruir la confianza y recuperar la conexión perdida." },
                { title: "Trauma y experiencias difíciles", desc: "Recuerdos dolorosos, bloqueos emocionales. Procesamiento con EMDR para sanar el pasado." },
                { title: "Si eres empresa", desc: "Liderazgo consciente y prevención de errores, gestión de equipos y factores humanos adaptada a las necesidades de tu empresa." },
              ].map((s, i) => (
                <div key={i} className="p-6 bg-psicopiloto-sand-50 rounded-lg shadow-sm border border-psicopiloto-gray-500/10 transition transform hover:-translate-y-1">
                  <h3 className="font-semibold text-xl mb-2 text-psicopiloto-honey-500">{s.title}</h3>
                  <p className="text-psicopiloto-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <AnimatedCTA 
                href="/servicios" 
                text="Descubre todos los servicios" 
                color="honey" // ✅ MIEL: Exploración de Servicios
              />
            </div>
          </div>
        </section>

        {/* ======================================================================== */}
        {/* SECCIÓN DE TESTIMONIOS (CARRUSEL INFINITO ESTILO RUEDA) */}
        {/* ======================================================================== */}
        <section className="py-20 bg-psicopiloto-sand-50 overflow-hidden">
          <div className="container mx-auto max-w-full text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-psicopiloto-blue-600">
              Lo que dicen quienes han confiado en mí
            </h2>
            <p className="text-lg text-psicopiloto-gray-500 mb-12 max-w-2xl mx-auto">
              La experiencia real de pacientes que han pasado por el proceso terapéutico.
            </p>

            <TestimonialCarousel data={testimonialsData} />

            <div className="mt-16">
              <AnimatedCTA 
                href={googleReviewsLink} 
                text="Leer más reseñas en Google" 
                color="blue" 
                isExternal={true} 
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/40 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            <Image
              src="/telefono.webp"
              alt="Contacto telefónico para iniciar terapia psicológica online"
              width={400}
              height={400}
              className={`w-[200px] h-auto mx-auto mb-6 md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-10 md:w-[350px] lg:w-[400px] lg:-left-20 z-30 drop-shadow-xl`}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8 bg-psicopiloto-sand-50 rounded-2xl shadow-xl relative z-20">
              <div className="col-span-1 md:col-start-2 md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">Da el primer paso</h2>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">Has dado el paso más difícil: llegar hasta aquí. Tras una llamada o un mensaje encontrarás un espacio seguro y cercano para empezar a sanar tus preocupaciones.</p>
                <AnimatedCTA 
                  href="/contacto" 
                  text="Reserva tu primera consulta" 
                  color="green" // ✅ VERDE: Acción principal
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
