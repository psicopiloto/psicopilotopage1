// pages/valoracion-gratuita.js
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo";
import { FaLaptop, FaRoute, FaShieldAlt, FaRegClock, FaCheckCircle } from "react-icons/fa";

export const getServerSideProps = async () => {
  return { props: {} };
};

export default function ValoracionGratuita() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    descubierto: "",
    motivo: "",
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
        setStatus("✅ ¡Mensaje recibido! Gracias por contactar. Te responderé personalmente en un plazo de 24-48 horas.");
        setForm({ nombre: "", edad: "", email: "", telefono: "", descubierto: "", motivo: "" });
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
        title="Sesión de Valoración Gratuita | Psicopiloto"
        description="Solicita tu primera toma de contacto de 30 minutos sin coste. Analizaremos tu situación clínica de forma confidencial antes de iniciar tu terapia."
        canonical="https://www.psicopiloto.com/valoracion-gratuita"
      />

      <BackgroundLogo />
      <Nav />

      <PageHeader
        title="Tu primera toma de contacto"
        subtitle="Un espacio de 30 minutos sin coste ni compromiso para evaluar tu caso, resolver tus dudas operativas y trazar un plan de ruta inicial."
        backgroundImage="/header-servicios.webp"
      />

      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto p-6 bg-white/40 rounded-2xl shadow-lg backdrop-blur-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
            
            {/* 🚀 BLOQUE 1: Texto persuasivo e inspiración clínica (Móvil: 1º | PC: Izquierda Superior) */}
            <div className="bg-white/70 p-6 md:p-8 rounded-xl shadow-md order-1 md:col-start-1 md:row-start-1">
              <h2 className="text-2xl font-bold text-psicopiloto-blue-600 mb-6 border-b border-gray-100 pb-2">
                ¿Por qué realizamos una sesión de valoración?
              </h2>
              <p className="text-base text-psicopiloto-gray-700 leading-relaxed text-justify">
                Iniciar un proceso terapéutico es una decisión crucial que requiere seguridad y compatibilidad. Esta primera consulta gratuita de 30 minutos nos permite conocernos cara a cara y asegurar que te sientes en un entorno seguro y protegido. Además, me servirá para realizar una evaluación preliminar de tu motivo de consulta y verificar si las intervenciones online y el protocolo EMDR son las herramientas metodológicas más eficaces para ti.
              </p>

              <h3 className="text-xl font-semibold text-psicopiloto-green-600 mt-8 mb-4">
                Ventajas de la Psicoterapia Online
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <FaShieldAlt className="text-xl text-psicopiloto-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base text-psicopiloto-gray-700">Privacidad y Regulación Somática</h4>
                    <p className="text-sm text-psicopiloto-gray-600 text-justify">Realizar el procesamiento desde tu propio entorno o un espacio privado que controlas facilita la apertura emocional y ayuda a regular la activación del sistema nervioso de forma más natural.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaRoute className="text-xl text-psicopiloto-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base text-psicopiloto-gray-700">Continuidad del Plan de Vuelo</h4>
                    <p className="text-sm text-psicopiloto-gray-600 text-justify">Elimina las barreras geográficas, los desplazamientos y los tiempos de espera. Mantiene la constancia semanal del tratamiento aunque viajes por motivos laborales o personales, algo indispensable en el reprocesamiento de traumas.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <FaLaptop className="text-xl text-psicopiloto-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base text-psicopiloto-gray-700">Eficacia Científica Equivalente</h4>
                    <p className="text-sm text-psicopiloto-gray-600 text-justify">La telepsicología aplicada mediante plataformas sanitarias cifradas cuenta con la misma validez, rigor y efectividad clínica que el formato presencial tradicional.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🚀 BLOQUE 2: Formulario idéntico al de contacto (Móvil: 2º | PC: Derecha Superior/Inferior) */}
            <div className="bg-white/70 p-6 rounded-xl shadow-md order-2 md:col-start-2 md:row-start-1 md:row-span-2">
              <h2 className="text-3xl font-bold text-psicopiloto-green-600 mb-4">Solicita tu valoración</h2>
              <p className="text-psicopiloto-gray-600 mb-4 text-base">Rellena el formulario de forma confidencial. Revisaré tu caso personalmente y me pondré en contacto contigo en un plazo de 24-48 horas para fijar el día y la hora de nuestro primer encuentro online.</p>
              
              <p className="text-sm bg-psicopiloto-sand-100/50 p-3 rounded-lg text-psicopiloto-gray-700 border-l-4 border-psicopiloto-green-600 mb-6 italic">
                "Este primer paso nos servirá para analizar tu situación de manera preliminar y comprobar si el protocolo EMDR online se adapta a lo que necesitas para recuperar el equilibrio."
              </p>

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
                  {status === "Enviando..." ? "Enviando..." : "Enviar consulta"}
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

            {/* 🚀 BLOQUE 3: Recordatorio e información técnica (Móvil: 3º | PC: Izquierda Inferior) */}
            <div className="bg-white/70 p-6 rounded-xl shadow-md order-3 md:col-start-1 md:row-start-2 space-y-4">
              <h3 className="text-lg font-semibold text-psicopiloto-gray-700 flex items-center gap-2">
                <FaRegClock className="text-psicopiloto-green-600" /> Cuestiones operativas de la sesión
              </h3>
              <ul className="space-y-2 text-sm text-psicopiloto-gray-600 pl-1">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-psicopiloto-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Duración:</strong> El encuentro tendrá un límite estricto de 20-30 minutos para garantizar la agilidad operativa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-psicopiloto-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Plataforma:</strong> Se realizará por videollamada cifrada de nivel sanitario. Te enviaré el enlace a tu correo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-psicopiloto-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Puntualidad:</strong> Al igual que en la cabina de un avión, el respeto por los tiempos programados garantiza la seguridad del proceso mutuo.</span>
                </li>
              </ul>
            </div>

            {/* Bloque Legal (Pie de página general) */}
            <div className="text-xs text-psicopiloto-gray-500 order-4 md:col-start-1 md:col-span-2 mt-4">
              <p><strong>Información básica sobre protección de datos:</strong> Tus datos de contacto serán tratados con absoluta confidencialidad con el único fin de agendar o resolver tu consulta sanitaria autorizada. Puedes ejercer tus derechos de acceso, rectificación o supresión escribiendo a info@psicopiloto.com.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
