import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import AnimatedCTA from "../components/AnimatedCTA";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NextSeo
        title="Psicopiloto | Psicología y aviación para transformar vidas"
        description="Psicopiloto une la psicología con la aviación para ofrecer terapia individual, programas de empresa y consultoría en factores humanos."
        canonical="https://psicopiloto.com/"
        openGraph={{
          url: "https://psicopiloto.com/",
          title: "Psicopiloto | Psicología y aviación para transformar vidas",
          description: "Psicopiloto une la psicología con la aviación para ofrecer terapia individual, programas de empresa y consultoría en factores humanos.",
          images: [
            {
              url: "https://psicopiloto.com/images/seo/index.jpg",
              width: 1200,
              height: 630,
              alt: "Psicopiloto - Psicología y aviación",
              type: "image/jpeg",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <Nav />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="relative">
          <Image
            src="/header-home.webp"
            alt="Psicopiloto - Psicología y aviación"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Psicopiloto
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white drop-shadow-md max-w-3xl">
              Psicología y aviación para ayudarte a transformar tu vida y tu equipo
            </p>
            <div className="mt-6">
              <AnimatedCTA href="/contacto" text="🚀 Empieza hoy tu proceso" color="green" />
            </div>
          </div>
        </section>

        {/* Secciones destacadas */}
        <section className="container mx-auto px-4 py-16 max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600 text-center">
            Servicios destacados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Terapia individual
              </h3>
              <p className="mb-4">
                Espacio seguro para gestionar ansiedad, estrés, autoestima y trauma.
              </p>
              <AnimatedCTA href="/servicios" text="Ver servicios" color="green" className="text-sm py-2 px-4"/>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Psicología para empresas
              </h3>
              <p className="mb-4">
                Formación en liderazgo, CRM, TEM y gestión de equipos inspirada en aviación.
              </p>
              <AnimatedCTA href="/servicios" text="Ver servicios" color="blue" className="text-sm py-2 px-4"/>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Consultoría en factores humanos
              </h3>
              <p className="mb-4">
                Mejora la seguridad, eficiencia y comunicación en tu equipo con métodos aeronáuticos.
              </p>
              <AnimatedCTA href="/contacto" text="Contacta ahora" color="green" className="text-sm py-2 px-4"/>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
