import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image";
import { NextSeo } from "next-seo";
// 🛑 IMPORTACIONES LIMPIAS: No hay import Head from 'next/head'; ni Script.

export default function Ansiedad() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Tratamiento psicológico para la ansiedad | Psicopiloto"
        description="Supera la ansiedad con sesiones online personalizadas. Psicopiloto te ofrece un espacio seguro, cercano y profesional para recuperar tu bienestar."
        canonical="https://psicopiloto.com/ansiedad"
        additionalMetaTags={[
          { name: "keywords", content: "terapia ansiedad, psicólogo ansiedad online, tratamiento ansiedad Granada, psicología online" },
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
      />

      <BackgroundLogo />
      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        <PageHeader
          title="Tratamiento psicológico para la ansiedad"
          subtitle="¿Sientes que la ansiedad te supera? Te acompaño con herramientas prácticas y un enfoque cercano para recuperar tu calma y bienestar."
          backgroundImage="/fotoinicio1.webp"
          cta={{
            href: "/contacto",
            text: "Solicita tu primera sesión",
            color: "green",
          }}
        />

        {/* Beneficios */}
        <section className="py-16 bg-white/40">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-500">
              ¿Cómo te ayuda la terapia para la ansiedad?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Reducción de síntomas físicos como insomnio, tensión muscular y palpitaciones.",
                "Mejora del control emocional y gestión de pensamientos intrusivos.",
                "Técnicas prácticas para afrontar situaciones que generan ansiedad.",
                "Espacio seguro para expresar tus miedos sin juicio.",
                "Acompañamiento profesional adaptado a tu ritmo.",
                "Sesiones online cómodas y confidenciales desde tu entorno.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-psicopiloto-sand-50 rounded-lg shadow-sm hover:shadow-md transition">
                  <span className="flex-none w-10 h-10 rounded-full bg-psicopiloto-green-500 text-white inline-flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="leading-relaxed text-psicopiloto-gray-500">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonio */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">
              Lo que dicen quienes han superado la ansiedad
            </h2>
            <blockquote className="italic text-psicopiloto-gray-500">
              “Gracias a Psicopiloto, aprendí a entender mi ansiedad y a vivir con más calma. Las sesiones online fueron clave para mí.”
            </blockquote>
            <p className="mt-4 text-psicopiloto-honey-500 font-semibold">— Marta, 29 años</p>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-white/40 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-500">
            ¿Listo para recuperar tu bienestar?
          </h2>
          <p className="text-xl text-psicopiloto-gray-500 mb-4">
            Agenda tu primera sesión gratuita y empieza a transformar tu relación con la ansiedad.
          </p>
          <AnimatedCTA href="/contacto" text="Solicita tu sesión ahora" color="green" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
