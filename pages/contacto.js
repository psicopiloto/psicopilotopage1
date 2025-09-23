import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import AnimatedCTA from "../components/AnimatedCTA";
import PageHeader from "../components/PageHeader";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NextSeo
        title="Contacto | Psicopiloto"
        description="Ponte en contacto con Psicopiloto para reservar tu primera sesión de psicología online o presencial en Granada. Resolvemos dudas y orientamos sobre nuestras terapias."
        canonical="https://psicopiloto.com/contacto"
        openGraph={{
          url: "https://psicopiloto.com/contacto",
          title: "Contacto | Psicopiloto",
          description: "Reserva tu primera sesión de psicología online o presencial en Granada. Contáctanos y resolvemos tus dudas sobre terapias.",
          images: [
            { url: "https://psicopiloto.com/images/seo/contacto.jpg", width: 1200, height: 630, alt: "Contacto Psicopiloto", type: "image/jpeg" },
          ],
          site_name: "Psicopiloto",
        }}
        additionalMetaTags={[{ name: "keywords", content: "contacto psicólogo Granada, reservar sesión, psicología online, ansiedad, autoestima, trauma" }]}
      />

      <Nav />

      <PageHeader
        title="Contacto"
        subtitle="Escríbenos para resolver tus dudas o reservar tu primera sesión"
        backgroundImage="/header-contacto.webp"
      />

      <main className="flex-grow py-16 container mx-auto max-w-5xl space-y-12">
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-psicopiloto-green-600 mb-4">¿Hablamos?</h2>
          <p>Si tienes dudas o quieres reservar tu primera sesión, completa el formulario o contacta directamente.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-psicopiloto-green-600">Teléfono</h3>
            <p>+34 600 123 456</p>

            <h3 className="text-xl font-semibold text-psicopiloto-green-600">Correo</h3>
            <p>hola@psicopiloto.com</p>

            <h3 className="text-xl font-semibold text-psicopiloto-green-600">Dirección</h3>
            <p>Granada, España</p>
          </div>

          <form className="space-y-4 bg-white p-6 rounded-xl shadow">
            <div>
              <label htmlFor="nombre" className="block font-medium mb-1">Nombre</label>
              <input id="nombre" type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">Correo electrónico</label>
              <input id="email" type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="mensaje" className="block font-medium mb-1">Mensaje</label>
              <textarea id="mensaje" rows={5} className="w-full border rounded px-3 py-2" />
            </div>
            <AnimatedCTA href="#" text="Enviar mensaje" color="green" className="mt-2 w-full text-center" />
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
