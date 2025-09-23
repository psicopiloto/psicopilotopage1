// pages/contacto.js

import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";

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
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      {/* SEO */}
      <NextSeo
        title="Contacto | Psicopiloto"
        description="Ponte en contacto con Psicopiloto. Consulta psicológica online y presencial en Granada. Rellena el formulario o llama/WhatsApp directamente."
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

      <Nav />

      {/* Cabecera consistente */}
      <PageHeader
        title="Contacto"
        subtitle="Rellena el formulario, llama o envía un WhatsApp y te responderé lo antes posible."
        backgroundImage="/header-contacto.webp"
      />

      <main className="flex-grow py-16">
        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <div>
            <p className="text-psicopiloto-gray-600 mb-6">
              Estoy aquí para escucharte y ayudarte a recuperar bienestar. Consulta online o presencial en Granada.
            </p>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="flex flex-col">
                Nombre *
                <input
                  required
                  name="nombre"
                  value={form.nombre}
                  onChange={update}
                  placeholder="Tu nombre completo"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
              </label>

              <label className="flex flex-col">
                Edad *
                <input
                  required
                  name="edad"
                  value={form.edad}
                  onChange={update}
                  type="number"
                  placeholder="Tu edad"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
              </label>

              <label className="flex flex-col">
                Email *
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={update}
                  type="email"
                  placeholder="tu@correo.com"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
              </label>

              <label className="flex flex-col">
                Teléfono
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={update}
                  placeholder="Opcional"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                />
              </label>

              <label className="flex flex-col">
                Motivo de consulta *
                <textarea
                  required
                  name="motivo"
                  value={form.motivo}
                  onChange={update}
                  placeholder="Cuéntame brevemente tu motivo de consulta"
                  rows="5"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400"
                ></textarea>
              </label>

              <button
                type="submit"
                className="px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                Enviar consulta
              </button>
            </form>

            {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}

            {/* Datos de contacto directos */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-psicopiloto-green-600">
                También puedes contactarme directamente:
              </h3>
              <p>
                📞 Teléfono:{" "}
                <a href="tel:+34676230537" className="underline text-psicopiloto-green-600">
                  676 230 537
                </a>
              </p>
              <p>
                💬 WhatsApp:{" "}
                <a
                  href="https://wa.me/34676230537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-psicopiloto-green-600"
                >
                  Chatea ahora
                </a>
              </p>
              <p>
                ✉️ Email:{" "}
                <a href="mailto:info@psicopiloto.com" className="underline text-psicopiloto-green-600">
                  info@psicopiloto.com
                </a>
              </p>
            </div>

            {/* Horarios de atención */}
            <div className="mt-6 text-sm text-gray-500">
              <strong>Horarios de atención:</strong>
              <ul className="list-disc list-inside">
                <li>Lunes a viernes: 10:00 – 20:00</li>
                <li>Sábados: 10:00 – 14:00</li>
                <li>Domingos y festivos: cerrado</li>
              </ul>
            </div>

            {/* Protección de datos */}
            <div className="mt-4 text-sm text-gray-500">
              <strong>Protección de datos:</strong> Los datos que envíes serán tratados con confidencialidad y solo para responder a tu petición. Consulta nuestra{" "}
              <a href="/aviso-legal" className="text-psicopiloto-green-600 underline">
                política de privacidad
              </a>
              .
            </div>
          </div>

          {/* Imagen ilustrativa */}
          <div className="relative w-full h-[500px] hidden md:block rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/contacto.webp"
              alt="Consulta psicológica - Psicopiloto"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
