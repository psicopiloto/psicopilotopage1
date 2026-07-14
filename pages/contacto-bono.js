// pages/contacto-bono.js
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo";

export const getServerSideProps = async () => {
  return { props: {} };
};

export default function ContactoBono() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    descubierto: "",
    motivo: "",
    tipoServicio: "Bono 5 Sesiones Online" // Campo preestablecido para tu API
  });
  const [aceptoPrivacidad, setAceptoPrivacidad] = useState(false);
  const [status, setStatus] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!aceptoPrivacidad) {
      setStatus("❌ Debes leer y aceptar la política de privacidad para enviar tu consulta.");
      return;
    }

    if (form.nombre.trim().length < 3) {
      setStatus("❌ El nombre debe tener al menos 3 caracteres.");
      return;
    }
    const age = parseInt(form.edad, 10);
    if (isNaN(age) || age < 16 || age > 99) {
      setStatus("❌ Por favor, introduce una edad válida (entre 16 y 99).");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("❌ Por favor, introduce un email con un formato válido.");
      return;
    }
    if (form.telefono && !/^[6789]\d{8}$/.test(form.telefono.replace(/\s/g, ''))) {
      setStatus("❌ Por favor, introduce un número de teléfono español válido (9 dígitos).");
      return;
    }
    if (form.motivo.trim().length < 10) {
      setStatus("❌ El motivo de consulta debe ser un poco más detallado (mín. 10 caracteres).");
      return;
    }
    
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        // Mensaje enfocado en el contacto personalizado y posterior envío de datos de pago
        setStatus("✅ ¡Solicitud de bono recibida! Me pondré en contacto contigo personalmente en un plazo de 24-48 horas para formalizar el alta y facilitarte de forma segura los datos de Bizum o transferencia bancaria.");
        setForm({ nombre: "", edad: "", email: "", telefono: "", descubierto: "", motivo: "", tipoServicio: "Bono 5 Sesiones Online" });
        setAceptoPrivacidad(false);
      } else {
        setStatus(`❌ Error: ${data.error || "No se pudo procesar el envío."}`);
      }
    } catch (err) {
      setStatus("❌ Error de red. Comprueba tu conexión e inténtalo de nuevo.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Reserva de Bono Online | Psicopiloto"
        description="Solicita la adquisición de tu Bono de 5 sesiones de psicoterapia online. Compromiso operativo y continuidad para tu proceso."
        canonical="https://www.psicopiloto.com/contacto-bono"
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Reserva de Bono Online"
        subtitle="Inicia la solicitud de tu pack de 5 sesiones. Un compromiso firme con la estabilidad de tu proceso psicoterapéutico profundo."
        backgroundImage="/header-contacto.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto p-6 bg-white/40 rounded-2xl shadow-lg backdrop-blur-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
            
            {/* Bloque Izquierdo: Información del Bono y Proceso */}
            <div className="bg-white/70 p-6 rounded-xl shadow-md order-1 md:col-start-1 md:row-start-1">
              <h2 className="text-2xl font-bold text-psicopiloto-blue-600 mb-4">
                Compromiso y Continuidad en tu Proceso
              </h2>
              <p className="text-base text-psicopiloto-gray-700 leading-relaxed">
                Has seleccionado el **Bono de Psicoterapia Online (250€)**. Este formato está diseñado específicamente para proteger la regularidad semanal que requiere el reprocesamiento profundo mediante el protocolo EMDR, optimizando la planificación de tus sesiones sin interrupciones temporales.
              </p>
              <br />
              <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-3">
                ¿Cuáles son los siguientes pasos operativos?
              </h3>
              <ul className="list-none text-psicopiloto-gray-700 space-y-3 text-base">
                <li>
                  <strong>1. Envío del formulario:</strong> Rellena los datos obligatorios de la derecha de forma totalmente confidencial.
                </li>
                <li>
                  <strong>2. Validación clínica:</strong> Me pondré en contacto contigo en un plazo de 24-48 horas para confirmar la viabilidad de la intervención a distancia.
                </li>
                <li>
                  <strong>3. Abono seguro:</strong> En esa misma comunicación personal, te facilitaré el número de cuenta y el teléfono asignado para realizar el Bizum o transferencia.
                </li>
              </ul>
            </div>

            {/* Bloque Derecho: Formulario Estructurado */}
            <div className="bg-white/70 p-6 rounded-xl shadow-md order-2 md:col-start-2 md:row-start-1 md:row-span-2">
              <h2 className="text-3xl font-bold text-psicopiloto-green-600 mb-4">Datos para la asignación del Bono</h2>
              <p className="text-psicopiloto-gray-600 mb-6 text-base">Por favor, introduce tus datos reflejando en el último apartado el motivo principal por el que decides iniciar este proceso.</p>

              <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Formulario de contacto para primera consulta">
                <input required name="nombre" value={form.nombre} onChange={update} placeholder="Nombre completo *" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                <input required name="edad" value={form.edad} onChange={update} type="number" placeholder="Edad *" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                <input required name="email" value={form.email} onChange={update} type="email" placeholder="Email *" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                <input name="telefono" value={form.telefono} onChange={update} placeholder="Teléfono (opcional)" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                
                <select name="descubierto" value={form.descubierto} onChange={update} className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white text-psicopiloto-gray-500 text-sm cursor-pointer">
                  <option value="" disabled>¿Cómo me has conocido? (Opcional)</option>
                  <option value="Google / Buscadores">Buscando en Google</option>
                  <option value="Redes Sociales">Redes Sociales</option>
                  <option value="Recomendación">Recomendación de un conocido o profesional</option>
                  <option value="Colegio Profesional / Directorios">Doctoralia / Directorios de psicología</option>
                  <option value="Otros">Otros motivos</option>
                </select>

                <textarea required name="motivo" value={form.motivo} onChange={update} placeholder="Cuéntame brevemente qué te ocurre o qué te gustaría trabajar en consulta *" rows="5" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white"></textarea>

                <div className="flex items-start gap-2 mt-2 p-2 bg-white/50 rounded border border-gray-100">
                  <input 
                    id="aceptoPrivacidad" 
                    type="checkbox" 
                    checked={aceptoPrivacidad}
                    onChange={(e) => setAceptoPrivacidad(e.target.checked)}
                    className="mt-1 w-4 h-4 text-psicopiloto-green-600 rounded focus:ring-psicopiloto-green-400 cursor-pointer" 
                  />
                  <label htmlFor="aceptoPrivacidad" className="text-xs text-psicopiloto-gray-600 cursor-pointer select-none">
                    He leído y acepto que mis datos sean tratados conforme a la <a href="/aviso-legal#proteccion-datos" className="text-psicopiloto-green-600 underline hover:text-psicopiloto-green-700">política de privacidad</a> para gestionar mi solicitud de consulta. *
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="mt-2 px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg font-semibold transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={status === "Enviando..."}
                >
                  {status === "Enviando..." ? "Enviando..." : "Solicitar Bono"}
                </button>
              </form>
              
              {status && (
                <p 
                  role="alert" 
                  className={`mt-4 text-sm font-medium ${
                    status === "Enviando..." ? "text-psicopiloto-gray-500 animate-pulse" : status.startsWith("✅") ? "text-psicopiloto-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>

            {/* Información de Protección de Datos */}
            <div className="text-xs text-psicopiloto-gray-500 order-3 md:col-start-1">
              <p><strong>Información básica sobre protección de datos:</strong> Tus datos de contacto serán tratados con absoluta confidencialidad con el único fin de gestionar la asignación de tu bono sanitario autorizado. Puedes ejercer tus derechos escribiendo a info@psicopiloto.com.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
