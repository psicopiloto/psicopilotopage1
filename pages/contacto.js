// pages/contacto.js
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo"; 

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
      <NextSeo
        // OPTIMIZACIÓN A: Title enfocado en la acción y el profesionalismo
        title="Contacto Profesional: Agenda tu Cita de Psicoterapia en Granada u Online"
        description="Elige tu vía de contacto: Agendamiento directo, WhatsApp o formulario. Confidencialidad y rigor profesional para iniciar tu proceso de bienestar."
        canonical="https://www.psicopiloto.com/contacto"
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        // OPTIMIZACIÓN B: H1 que promueve la decisión (el inicio del proceso)
        title="Toma la Decisión: Inicia tu Proceso de Consulta"
        subtitle="Confidencialidad, rigor y cercanía para tu bienestar. Elige la vía de contacto que te resulte más cómoda."
        backgroundImage="/header-contacto.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto p-6 bg-white/40 rounded-2xl shadow-lg">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda → Motivación + Formulario */}
            <div className="space-y-6">
              {/* Motivación */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-psicopiloto-blue-600 mb-4"> 
                  Mi Compromiso Profesional Contigo
                </h3>
                <p className="text-lg text-psicopiloto-gray-700">
                  Contactar es una decisión de alto valor. Yo me comprometo a ofrecerte un espacio de **máxima confidencialidad** y **rigor ético y metodológico**.
                </p>
                <br />
                <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-4">
                  Lo que te ofrezco:
                </h3>
                <ul className="list-disc list-inside text-psicopiloto-gray-700 space-y-2">
                  {/* OPTIMIZACIÓN C: Títulos profesionales y habilidades reales */}
                  <li>🎯 **Rigor Metodológico:** Terapia basada en la evidencia (EMDR, ACT, Terapia Integradora).</li>
                  <li>🧠 **Comprensión Profunda:** Análisis de apego, trauma y procesos causales (no solo síntomas).</li>
                  <li>✈️ **Habilidades No Técnicas:** Desarrollo de la asertividad, regulación emocional y liderazgo personal.</li>
                  <li>⭐ **Autoridad Sanitaria:** Psicólogo General Sanitario Colegiado.</li>
                </ul>
              </div>

              {/* Formulario */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md">
                <h2 className="text-3xl font-semibold text-psicopiloto-green-600 mb-6">
                  Formulario: Envía tu Consulta Confidencial
                </h2>
                <p className="text-psicopiloto-gray-600 mb-6">
                  Completa este formulario con tu información. Te responderé personalmente para coordinar tu primera sesión (Online o Presencial en Granada).
                </p>

                <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Formulario de consulta profesional confidencial"> 
                  
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
                  
                  <label htmlFor="motivo" className="sr-only">Motivo de consulta *</label>
                  <textarea
                    id="motivo"
                    required
                    name="motivo"
                    value={form.motivo}
                    onChange={update}
                    placeholder="Motivo de consulta *"
                    rows="5"
                    className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg font-semibold transition-colors"
                    disabled={status === "Enviando..."} 
                  >
                    {status === "Enviando..." ? "Enviando..." : "Confirmar Envío"}
                  </button>
                </form>
                {status && <p className={`mt-4 text-sm ${status.startsWith("✅") ? 'text-psicopiloto-green-600' : 'text-red-600'}`}>{status}</p>} 
              </div>
            </div>

            {/* Columna derecha */}
            <div className="space-y-6">
              {/* Contacto directo */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md space-y-2 order-2 md:order-1">
                <h3 className="text-xl font-semibold text-psicopiloto-blue-600">
                  Opciones de Contacto Directo
                </h3>
                {/* OPTIMIZACIÓN D: Uso de lenguaje CTA profesional */}
                <p>
                  📞 Teléfono Directo:{" "}
                  <a href="tel:+34676230537" className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded">
                    Llamar ahora
                  </a>
                </p>
                <p>
                  💬 WhatsApp Profesional:{" "}
                  <a
                    href="https://wa.me/34676230537"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded"
                  >
                    Enviar mensaje (Respuesta rápida)
                  </a>
                </p>
                <p>
                  ✉️ Email Corporativo:{" "}
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
                <h3 className="text-xl font-semibold text-psicopiloto-blue-600 mb-4">
                  Agendamiento Online (Selecciona tu Horario)
                </h3>
                <div className="w-full h-[400px] md:h-[600px] overflow-auto">
                  <iframe
                    title="Calendario de citas online de Psicopiloto" 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3TLXLFOovykq6hop3UczOKvHCWc8oPtXbRNyrBby0asXzyaYPZu5ngp4vhB-bn0vPjE0qhEuSR?gv=true"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
              
              {/* Protección de datos (Contraste) */}
              <div className="text-sm text-psicopiloto-gray-700 order-3 md:order-2">
                <p>
                  <strong>Seguridad y Ética Profesional:</strong> Tus datos son confidenciales y solo se utilizarán para responder a tu consulta. Mi práctica se adhiere a la ética del **Colegio Oficial de Psicología de Andalucía Oriental (M-30360)**. Consulta nuestra{" "}
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
