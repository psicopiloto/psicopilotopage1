// pages/contacto.js

import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo"; // ✅ importamos logo de fondo

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
        setStatus(
          "❌ Error: " + (data?.error || "No se pudo enviar. Revisa la configuración.")
        );
      }
    } catch (err) {
      setStatus("❌ Error de red: " + String(err));
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      {/* SEO */}
      <NextSeo
        title="Contacto | Psicopiloto"
        description="Contacta con Psicopiloto y mejora tu bienestar emocional. Consulta online y presencial en Granada. Rellena el formulario o llama/WhatsApp directamente."
        canonical="https://www.psicopiloto.com/contacto"
        openGraph={{
          url: "https://www.psicopiloto.com/contacto",
          title: "Contacto | Psicopiloto",
          description:
            "Consulta psicológica online y presencial en Granada. Rellena el formulario o llama/WhatsApp directamente.",
          images: [
            {
              url: "https://www.psicopiloto.com/images/seo/contacto-og.jpg",
              width: 1200,
              height: 630,
              alt: "Formulario de contacto Psicopiloto",
            },
          ],
        }}
      />

      <BackgroundLogo /> {/* ✅ logo fijo de fondo */}

      <Nav />

      {/* Cabecera */}
      <PageHeader
        title="Contacto"
        subtitle="Rellena el formulario o contacta directamente y empieza a recuperar tu bienestar hoy."
        backgroundImage="/header-contacto.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto p-6 bg-white/40 rounded-2xl shadow-lg">
          <section className="grid md:grid-cols-3 gap-12 items-start">
            
            {/* Columna 1: Protección de datos */}
            <div>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Protección de datos:</strong> Tus datos serán tratados con confidencialidad y solo para responder a tu consulta. Consulta nuestra{" "}
                <a href="/aviso-legal" className="text-psicopiloto-green-600 underline">
                  política de privacidad
                </a>
                .
              </p>
            </div>

            {/* Columna 2: Beneficios + CTA */}
            <div className="space-y-8">
              <div className="bg-white/40 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-4">Por qué contactarme</h3>
                <ul className="list-disc list-inside text-psicopiloto-gray-700 space-y-2">
                  <li>📈 Terapia personalizada y centrada en tus objetivos.</li>
                  <li>🧘‍♀️ Reducción de ansiedad, estrés y mejora de autoestima.</li>
                  <li>💬 Apoyo online y presencial, flexible y cercano.</li>
                  <li>✈️ Enfoque único inspirado en psicología y aviación.</li>
                </ul>
              </div>
            </div>

            {/* Columna 3: Formulario */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold text-psicopiloto-green-600 mb-6">
                Reserva tu primera consulta
              </h2>
              <p className="text-psicopiloto-gray-600 mb-6">
                Completa este formulario y te responderé lo antes posible. 
                Consulta online o presencial en Granada, adaptada a tu ritmo y necesidades.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  required
                  name="nombre"
                  value={form.nombre}
                  onChange={update}
                  placeholder="Nombre completo *"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
                <input
                  required
                  name="edad"
                  value={form.edad}
                  onChange={update}
                  type="number"
                  placeholder="Edad *"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={update}
                  type="email"
                  placeholder="Email *"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={update}
                  placeholder="Teléfono"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
                <textarea
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
                >
                  Enviar consulta
                </button>
              </form>
              {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}

              <div className="bg-white/40 p-6 rounded-xl shadow-md space-y-4 mt-8">
                <h3 className="text-xl font-semibold text-psicopiloto-green-600">
                  Contacto directo
                </h3>
                <p>📞 Teléfono: <a href="tel:+34676230537" className="underline text-psicopiloto-green-600">676 230 537</a></p>
                <p>💬 WhatsApp: <a href="https://wa.me/34676230537" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600">Chatea ahora</a></p>
                <p>✉️ Email: <a href="mailto:info@psicopiloto.com" className="underline text-psicopiloto-green-600">info@psicopiloto.com</a></p>
              </div>

              <div className="bg-white/40 p-6 rounded-xl shadow-md mt-8">
                <h3 className="text-xl font-semibold text-psicopiloto-green-600">Horarios de atención</h3>
                <ul className="list-disc list-inside text-psicopiloto-gray-700">
                  <li>Lunes a viernes: 10:00 – 20:00</li>
                  <li>Sábados: 10:00 – 14:00</li>
                  <li>Domingos y festivos: cerrado</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Imagen ilustrativa full-width */}
          <div className="mt-16 relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/contacto.webp"
              alt="Consulta psicológica - Psicopiloto"
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
