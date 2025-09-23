import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { NextSeo } from "next-seo";
import AnimatedCTA from "../components/AnimatedCTA";

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Servicios de Psicología | Psicopiloto"
        description="Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas."
        canonical="https://psicopiloto.com/servicios"
        openGraph={{
          url: "https://psicopiloto.com/servicios",
          title: "Servicios de Psicología | Psicopiloto",
          description: "Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas.",
          images: [
            { url: "https://psicopiloto.com/images/seo/servicios.jpg", width: 1200, height: 630, alt: "Servicios de Psicología - Psicopiloto", type: "image/jpeg" },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <Nav />

      <PageHeader
        title="Servicios de Psicología"
        subtitle="Un espacio seguro para recuperar el equilibrio y afrontar tus retos con confianza. Si eres empresa, también formación en liderazgo y gestión de equipos inspirada en aviación."
        backgroundImage="/header-servicios.webp"
      />

      <main className="flex-grow py-16 container mx-auto max-w-5xl">
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">Ansiedad y Estrés</h3>
            <p>Comprender lo que te ocurre y desarrollar herramientas prácticas para reducir la ansiedad y mejorar tu descanso.</p>
            <AnimatedCTA href="/contacto" text="👉 Da el primer paso" color="green" />
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">Depresión y Ánimo Bajo</h3>
            <p>Acompañamiento cercano y respetuoso para recuperar energía y motivación.</p>
            <AnimatedCTA href="/contacto" text="👉 Contacta ahora" color="green" />
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">Autoestima y Apego</h3>
            <p>Reconocer necesidades, poner límites sanos y fortalecer tu confianza.</p>
            <AnimatedCTA href="/contacto" text="👉 Priorízate y construye autoestima" color="green" />
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">Terapia de Pareja</h3>
            <p>Espacio neutral y empático para recuperar la conexión con tu pareja.</p>
            <AnimatedCTA href="/contacto" text="👉 Recuperad vuestra conexión" color="green" />
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">Trauma y Experiencias Difíciles</h3>
            <p>Procesar y liberar memorias traumáticas de manera segura y progresiva.</p>
            <AnimatedCTA href="/contacto" text="🌱 Empieza hoy tu proceso" color="green" />
          </div>
        </section>

        {/* Empresas */}
        <section className="py-16 bg-psicopiloto-blue-50 rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-psicopiloto-blue-600 mb-8">Psicopiloto para Empresas</h2>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-psicopiloto-blue-600">Desarrollo Organizacional y Liderazgo</h3>
            <p>Reducción de errores, mejora de eficiencia y potenciación de comunicación clara en equipos y líderes.</p>
            <AnimatedCTA href="/contacto" text="🚀 Fortalece tu equipo hoy" color="blue" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
