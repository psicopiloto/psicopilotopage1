import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    motivo: "",
  });
  const [status, setStatus] = useState("");
  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
        setStatus("Enviado correctamente. Gracias.");
        setForm({ nombre: "", edad: "", email: "", telefono: "", motivo: "" });
      } else {
        setStatus(
          "Error: " + (data?.error || "No se pudo enviar. Revisa la configuración.")
        );
      }
    } catch (err) {
      setStatus("Error de red: " + String(err));
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16">
        <section className="py-16 bg-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: texto + formulario */}
            <div>
              <h1 className="text-3xl font-bold mb-4">Contacto</h1>
              <p className="text-gray-700 mb-6">
                Rellena el formulario y te responderé lo antes posible. Consulta
                online y presencial en Granada.
              </p>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  required
                  name="nombre"
                  value={form.nombre}
                  onChange={update}
                  placeholder="Nombre"
                  className="p-3 rounded-lg border"
                />
                <input
                  required
                  name="edad"
                  value={form.edad}
                  onChange={update}
                  placeholder="Edad"
                  type="number"
                  className="p-3 rounded-lg border"
                />
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="Email"
                  type="email"
                  className="p-3 rounded-lg border"
                />
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={update}
                  placeholder="Teléfono"
                  className="p-3 rounded-lg border"
                />
                <textarea
                  required
                  name="motivo"
                  value={form.motivo}
                  onChange={update}
                  placeholder="Explica brevemente el motivo de consulta"
                  rows="5"
                  className="p-3 rounded-lg border"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-softorange-500 text-white rounded-lg"
                >
                  Enviar
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-600">{status}</p>
              <div className="mt-6 text-sm text-gray-500">
                <strong>Protección de datos:</strong> Los datos que envíes serán
                tratados con confidencialidad y se usarán solo para responder a tu
                petición. Consulta la política de privacidad en /aviso-legal.
              </div>
            </div>

            {/* Columna derecha: imagen ilustrativa */}
            <div className="relative w-full h-[500px] hidden md:block">
              <Image
                src="/ponaquituimagen.jpg"
                alt="Consulta psicológica - Psicopiloto"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
