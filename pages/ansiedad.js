// pages/ansiedad.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import { NextSeo } from "next-seo";

export default function Ansiedad() {
  // ✨ CORRECCIÓN DE TONO: Lista de objetivos reescrita con un lenguaje más profesional y cercano
  const objetivosTerapia = [
    "<strong>Reducir los síntomas físicos:</strong> Aprenderás técnicas de regulación para calmar las palpitaciones, la tensión muscular y mejorar la calidad de tu sueño.",
    "<strong>Gestionar los pensamientos intrusivos:</strong> Te daré herramientas para identificar y detener los bucles de preocupación, recuperando el control de tu mente.",
    "<strong>Afrontar situaciones de forma gradual:</strong> Desarrollarás la confianza y las habilidades para enfrentarte a los escenarios que hoy te generan ansiedad.",
    "<strong>Entender el origen de tu ansiedad:</strong> Identificaremos juntos qué activa tus respuestas de ansiedad para poder trabajar sobre la raíz del problema.",
    "<strong>Un espacio de total confianza:</strong> Tendrás un entorno 100% confidencial y sin juicios donde puedes expresarte con total libertad.",
    "<strong>Flexibilidad y comodidad:</strong> Las sesiones online se adaptan a tu horario y te permiten realizar la terapia desde un lugar seguro para ti.",
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Terapia Psicológica para la Ansiedad | Psicopiloto"
        description="Supera la ansiedad con sesiones online personalizadas. Psicopiloto te ofrece un plan de acción y herramientas prácticas para recuperar tu bienestar y tomar el control."
        canonical="https://psicopiloto.com/ansiedad"
        additionalMetaTags={[
          { name: "keywords", content: "terapia ansiedad, psicólogo ansiedad online, tratamiento ansiedad Granada, psicología online" },
          // ✨ CORRECCIÓN: Nombre de autor actualizado
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
      />

      <BackgroundLogo />
      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        <PageHeader
          // ✨ CORRECCIÓN DE TONO: Título y subtítulo más directos y profesionales
          title="Terapia para la Ansiedad: Recupera tu Calma"
          subtitle="¿Sientes que la ansiedad te supera? Te ofrezco un plan de acción claro y herramientas prácticas para que recuperes el control y el bienestar."
          backgroundImage="/fotoinicio1.webp"
          cta={{
            href: "/contacto",
            text: "Solicita tu primera sesión",
            color: "green",
          }}
        />

        {/* ✨ CORRECCIÓN DE TONO: Sección de beneficios renombrada y con contenido enfocado en el proceso terapéutico */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-12 text-psicopiloto-honey-500">
              Objetivos de la Terapia: ¿Qué conseguiremos juntos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {objetivosTerapia.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-4 bg-psicopiloto-sand-50 rounded-lg shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <span className="flex-none w-10 h-10 rounded-full bg-psicopiloto-green-500 text-white inline-flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="leading-relaxed text-psicopiloto-gray-700" dangerouslySetInnerHTML={{ __html: item }}></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonio */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">
              Lo que dicen quienes han recuperado la calma
            </h2>
            <blockquote className="italic text-lg text-psicopiloto-gray-700">
              “Gracias a Psicopiloto, aprendí a entender mi ansiedad y a vivir con más calma. Las sesiones online fueron clave para mí.”
            </blockquote>
            <p className="mt-4 text-psicopiloto-honey-500 font-semibold">— Marta, 29 años</p>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-white/40 text-center">
          {/* ✨ CORRECCIÓN DE TONO: Textos del CTA final más cercanos y realistas */}
          <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-500">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-psicopiloto-gray-500 mb-8 max-w-2xl mx-auto">
            El primer paso es el más difícil, y ya estás aquí. Agenda una sesión y empecemos a trabajar juntos para que recuperes tu bienestar.
          </p>
          <AnimatedCTA href="/contacto" text="Solicita tu sesión ahora" color="green" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
