// pages/contacto.js
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo"; 
import Script from "next/script"; // ✨ CAMBIO: Importar Script para scripts de terceros

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    motivo: "",
  });
  const [status, setStatus] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Enviando...");
    // Validación básica antes de enviar (ejemplo)
    if (!form.nombre || !form.email || !form.motivo) {
        setStatus("❌ Por favor, completa los campos obligatorios.");
        return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Enviado correctamente. Te responderé pronto.");
        setForm({ nombre: "", edad: "", email: "", telefono: "", motivo: "" });
      } else {
        setStatus("❌ Error: " + (data?.error || "No se pudo enviar."));
      }
    } catch (err) {
      setStatus("❌ Error de red: " + String(err));
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      {/* 🚀 OPTIMIZACIÓN: Carga diferida de scripts de terceros (ej: reCAPTCHA) 🚀 */}
      {/* Si implementas reCAPTCHA, el script va aquí con lazyOnLoad */}
      {/*
      <Script 
        src="https://www.google.com/recaptcha/api.js?render=6LeQgtsaA...&trustedtypes=true"
        strategy="lazyOnLoad"
      />
      */}
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
                {/* ✨ CAMBIO CRÍTICO (ACCESIBILIDAD): Cambiado de h3 a h2 para mantener la secuencia de encabezados */}
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

                <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Formulario de contacto para primera consulta">
                  
                  {/* ✨ MEJORA: Etiquetas de accesibilidad (sr-only) para inputs */}
                  <label htmlFor="nombre" className="sr-only">Nombre completo *</label>
                  <input
                    id="nombre"
                    required
                    name="nombre"
                    value={form.nombre}
                    onChange={update}
                    placeholder="Nombre completo *"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />
                  
                  <label htmlFor="edad" className="sr-only">Edad *</label>
                  <input
                    id="edad"
                    required
                    name="edad"
                    value={form.edad}
                    onChange={update}
                    type="number"
                    placeholder="Edad *"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />
                  
                  <label htmlFor="email" className="sr-only">Email *</label>
                  <input
                    id="email"
                    required
                    name="email"
                    value={form.email}
                    onChange={update}
                    type="email"
                    placeholder="Email *"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />
                  
                  <label htmlFor="telefono" className="sr-only">Teléfono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    value={form.telefono}
                    onChange={update}
                    placeholder="Teléfono"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  />
                  
                  <label htmlFor="motivo" className="sr-only">Cuéntame brevemente tu motivo de consulta *</label>
                  <textarea
                    id="motivo"
                    required
                    name="motivo"
                    value={form.motivo}
                    onChange={update}
                    placeholder="Cuéntame brevemente tu motivo de consulta *"
                    rows="5"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg font-semibold transition-colors"
                    disabled={status === "Enviando..."}
                  >
                    {status === "Enviando..." ? "Enviando..." : "Enviar consulta"}
                  </button>
                </form>
                {status && <p className={`mt-4 text-sm ${status.startsWith("✅") ? 'text-psicopiloto-green-600' : 'text-red-600'}`}>{status}</p>}
              </div>
            </div>

            {/* Columna derecha */}
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
                    loading="lazy" // ✨ MEJORA: Carga perezosa para el iframe
                  ></iframe>
                </div>
              </div>
              
              {/* Protección de datos (Contraste) */}
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

          {/* Imagen ilustrativa full-width */}
          <div className="mt-16 relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/contacto.webp"
              alt="Sala de espera o despacho de psicología para terapia presencial en Granada"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
