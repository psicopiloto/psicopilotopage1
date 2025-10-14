// pages/contacto.js
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// ✨ CAMBIO: Ya no se necesita 'useState'
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo";
import Script from "next/script";

export default function Contacto() {
  // ✨ CAMBIO: Toda la lógica de 'useState' y 'handleSubmit' ha sido eliminada
  // para simplificar el componente, ya que Formspree gestionará el envío.

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Contacto | Psicopiloto"
        description="Contacta con Psicopiloto y mejora tu bienestar emocional. Consulta online y presencial en Granada. Rellena el formulario o llama/WhatsApp directamente."
        canonical="https://www.psicopiloto.com/contacto"
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Contacto"
        subtitle="Rellena el formulario, agenda tu cita online o contacta directamente y empieza a recuperar tu bienestar hoy."
        backgroundImage="/header-contacto.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto p-6 bg-white/40 rounded-2xl shadow-lg">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda → Motivación + Formulario */}
            <div className="space-y-6">
              {/* Motivación */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-psicopiloto-blue-600 mb-4">
                  Tu bienestar emocional es lo primero
                </h2>
                <p className="text-lg text-psicopiloto-gray-700">
                  Estoy aquí para acompañarte en tu proceso. Da el primer paso y descubre cómo la psicología puede ayudarte a recuperar tu equilibrio.
                </p>
                <br />
                <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-4">
                  Por qué contactarme
                </h3>
                <ul className="list-disc list-inside text-psicopiloto-gray-700 space-y-2">
                  <li>📈 Terapia personalizada y centrada en tus objetivos.</li>
                  <li>🧘‍♀️ Reducción de ansiedad, estrés y mejora de autoestima.</li>
                  <li>💬 Apoyo online y presencial, flexible y cercano.</li>
                  <li>✈️ Enfoque único inspirado en psicología y aviación.</li>
                </ul>
              </div>

              {/* Formulario */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md">
                <h2 className="text-3xl font-semibold text-psicopiloto-green-600 mb-6">
                  Reserva tu primera consulta
                </h2>
                <p className="text-psicopiloto-gray-600 mb-6">
                  Completa este formulario y te responderé lo antes posible. Consulta online o presencial en Granada, adaptada a tu ritmo y necesidades.
                </p>

                {/* ✨ CAMBIO CRÍTICO: El formulario ahora apunta a tu endpoint de Formspree */}
                <form
                  action="https://formspree.io/f/xzzjybkg" // 👈 PEGA TU URL DE FORMSPREE AQUÍ
                  method="POST"
                  className="grid gap-4"
                  aria-label="Formulario de contacto para primera consulta"
                >
                  <label htmlFor="nombre" className="sr-only">Nombre completo *</label>
                  <input
                    id="nombre"
                    required
                    name="nombre"
                    placeholder="Nombre completo *"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />

                  <label htmlFor="edad" className="sr-only">Edad *</label>
                  <input
                    id="edad"
                    required
                    name="edad"
                    type="number"
                    placeholder="Edad *"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />

                  {/* El 'name' del email es importante para que Formspree pueda usarlo en 'Reply-To' */}
                  <label htmlFor="email" className="sr-only">Email *</label>
                  <input
                    id="email"
                    required
                    name="email"
                    type="email"
                    placeholder="Email *"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />

                  <label htmlFor="telefono" className="sr-only">Teléfono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />

                  <label htmlFor="motivo" className="sr-only">Cuéntame brevemente tu motivo de consulta *</label>
                  <textarea
                    id="motivo"
                    required
                    name="motivo"
                    placeholder="Cuéntame brevemente tu motivo de consulta *"
                    rows="5"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  ></textarea>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Enviar consulta
                  </button>
                </form>
                {/* ✨ CAMBIO: El mensaje de estado ya no es necesario */}
              </div>
            </div>

            {/* Columna derecha (sin cambios) */}
            <div className="space-y-6">
              {/* Contacto directo */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md space-y-2 order-2 md:order-1">
                <h3 className="text-xl font-semibold text-psicopiloto-green-600">
                  Contacto directo
                </h3>
                <p>
                  📞 Teléfono:{" "}
                  <a href="tel:+34676230537" className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded">
                    676 230 537
                  </a>
                </p>
                <p>
                  💬 WhatsApp:{" "}
                  <a
                    href="https://wa.me/34676230537"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded"
                  >
                    Chatea ahora
                  </a>
                </p>
                <p>
                  ✉️ Email:{" "}
                  <a
                    href="mailto:info@psicopiloto.com"
                    className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded"
                  >
                    info@psicopiloto.com
                  </a>
                </p>
              </div>

              {/* Google Calendar */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md order-1 md:order-3">
                <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-4">
                  Agenda tu cita ONLINE directamente
                </h3>
                <div className="w-full h-[400px] md:h-[600px] overflow-auto">
                  <iframe
                    title="Calendario de citas online de Psicopiloto"
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3TLXLFOovykq6hop3UczOKvHCWc8oPtXbRNyrBby0asXzyaYPZu5ngp4vhB-bn0vPjE0qhEuSR?gv=true"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    frameBorder="0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              <div className="text-sm text-psicopiloto-gray-700 order-3 md:order-2">
                <p>
                  <strong>Protección de datos:</strong> Tus datos serán tratados con confidencialidad y solo para responder a tu consulta. Consulta nuestra{" "}
                  <a href="/aviso-legal" className="text-psicopiloto-green-600 underline hover:text-psicopiloto-green-700 focus:ring-1 focus:ring-psicopiloto-green-400 rounded">
                    política de privacidad
                  </a>
                  .
                </p>
              </div>

            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
