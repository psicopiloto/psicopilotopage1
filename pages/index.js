// pages/index.js
// ... (omito imports y NextSeo por brevedad)

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import BackgroundLogo from "../components/BackgroundLogo";
import Image from "next/image"; // ✅ Importación de Image

export default function Home() {
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
          { name: "author", content: "Jose Carlos Rodríguez Retamar" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicólogo online y presencial en Granada | Psicopiloto",
          description: "Psicólogo online y presencial en Granada. Supera ansiedad, estrés, depresión o trauma con el enfoque integral de Psicopiloto. ¡Recupera el control de tu vida! Agenda tu cita.",
        }}
      />

      <BackgroundLogo />
      <Nav />
      
      <main className="flex-grow relative z-10">
        <PageHeader
          title="Psicólogo online y presencial en Granada | Psicopiloto"
          subtitle="Terapia integradora, EMDR y enfoque basado en factores humanos. Recupera la calma, la confianza y el control de tu vida."
          backgroundImage="/filosofia.webp"
          cta={{
            href: "/contacto",
            text: "Quiero recuperar mi calma",
            color: "green",
          }}
        />

        {/* ... (Otras secciones de la Home) */}
        
        {/* CTA FINAL */}
        <section className="py-16 bg-white/40 relative overflow-visible">
          <div className="container mx-auto max-w-5xl relative">
            {/* Imagen sobresaliente */}
            <Image // ✨ CAMBIO CRÍTICO: Usar <Image> en lugar de <img>
              src="/telefono.png"
              alt="Contacto telefónico para iniciar terapia psicológica online"
              width={800} // Se añaden width/height para el placeholder
              height={800}
              className={`
                w-[300px] h-auto mx-auto mb-6
                md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-10
                md:w-[500px] md:h-auto
                lg:w-[600px] lg:-left-32
              `}
            />

            {/* Grid solo para el texto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 bg-white rounded-lg shadow-md">
              <div className="col-span-1 md:col-start-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-500">
                  Da el primer paso
                </h2>
                <p className="leading-relaxed mb-6 text-psicopiloto-gray-500">
                  Has dado el paso más difícil: llegar hasta aquí. Tras una llamada o un mensaje encontrarás un espacio seguro y cercano para empezar a descansar de tus preocupaciones y recuperar tu bienestar.
                </p>
                <AnimatedCTA
                  href="/contacto"
                  text="Reserva tu cita hoy"
                  color="blue"
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
