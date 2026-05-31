// pages/contacto.js
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import BackgroundLogo from "../components/BackgroundLogo";
import Script from "next/script";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    email: "",
    telefono: "",
    motivo: "",
    _gotcha: "", // Añadido para que Formspree procese correctamente el filtro antispam
  });
  const [aceptoPrivacidad, setAceptoPrivacidad] = useState(false);
  const [status, setStatus] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();

    // VALIDACIÓN DE PRIVACIDAD OBLIGATORIA (RGPD)
    if (!aceptoPrivacidad) {
      setStatus("❌ Debes leer y aceptar la política de privacidad para enviar tu consulta.");
      return;
    }

    // VALIDACIÓN AVANZADA
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
      const res = await fetch("https://formspree.io/f/xzzjybkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ ¡Mensaje recibido! Gracias por contactar. Te responderé personalmente en un plazo de 24-48 horas.");
        setForm({ nombre: "", edad: "", email: "", telefono: "", motivo: "", _gotcha: "" });
        setAceptoPrivacidad(false);
      } else {
        setStatus(`❌ Error ${res.status}: No se pudo enviar el mensaje. Inténtalo de nuevo.`);
      }
    } catch (err) {
      setStatus("❌ Error de red. Comprueba tu conexión e inténtalo de nuevo.");
    }
  }

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
          
          {/* GRID PRINCIPAL */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
            
            {/* 1. TEXTO INTRO (Móvil: 1º | Desktop: Izquierda Arriba) */}
            <div className="bg-white/70 p-6 rounded-xl shadow-md order-1 md:col-start-1">
              <h2 className="text-2xl font-bold text-psicopiloto-blue-600 mb-4">Tu bienestar emocional es lo primero</h2>
              <p className="text-lg text-psicopiloto-gray-700">Estoy aquí para acompañarte en tu proceso. Da el primer paso y descubre cómo la psicología puede ayudarte a recuperar tu equilibrio.</p>
              <br />
              <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-4">Por qué contactarme</h3>
              <ul className="list-disc list-inside text-psicopiloto-gray-700 space-y-2">
                <li>📈 Terapia personalizada y centrada en tus objetivos.</li>
                <li>🧘‍♀️ Reducción de ansiedad, estrés y mejora de autoestima.</li>
                <li>💬 Apoyo online y presencial, flexible y cercano.</li>
                <li>✈️ Enfoque único inspirado en psicología y aviación.</li>
              </ul>
            </div>

            {/* CONTENEDOR DERECHO AGRUPADO (Para evitar el espacio vacío en Desktop) */}
            <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col gap-6">
              
              {/* CALENDARIO */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md order-1 md:order-2">
                <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-4">Agenda tu cita ONLINE</h3>
                <div className="w-full h-[1150px]">
                  <iframe 
                    title="Calendario de citas online de Psicopiloto" 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3TLXLFOovykq6hop3UczOKvHCWc8oPtXbRNyrBby0asXzyaYPZu5ngp4vhB-bn0vPjE0qhEuSR?gv=true" 
                    style={{ border: 0, width: "100%", height: "100%" }} 
                    frameBorder="0" 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* CONTACTO DIRECTO */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md space-y-2 order-2 md:order-1">
                <h3 className="text-xl font-semibold text-psicopiloto-green-600">Contacto directo</h3>
                <p>📞 Teléfono:{" "}<a href="tel:+34676230537" className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded">676 230 537</a></p>
                <p>💬 WhatsApp:{" "}<a href="https://wa.me/34676230537" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded">Chatea ahora</a></p>
                <p>✉️ Email:{" "}<a href="mailto:info@psicopiloto.com" className="underline text-psicopiloto-green-600 hover:text-psicopiloto-green-700 focus:outline-none focus:ring-1 focus:ring-psicopiloto-green-400 rounded">info@psicopiloto.com</a></p>
              </div>

            </div>

            {/* 3. FORMULARIO (Móvil: 3º | Desktop: Izquierda Abajo) */}
            <div className="bg-white/70 p-6 rounded-xl shadow-md order-3 md:col-start-1">
              <h2 className="text-3xl font-semibold text-psicopiloto-green-600 mb-6">Reserva tu primera consulta</h2>
              <p className="text-psicopiloto-gray-600 mb-4">Si es tu primera vez, completa este formulario y te responderé lo antes posible. Primera sesión de valoración gratuita (30 minutos).</p>
              
              {/* FRASE ESTRATÉGICA DE TARIFAS E INVITACIÓN AL DIÁLOGO VERBAL */}
              <p className="text-sm bg-psicopiloto-sand-100/50 p-3 rounded-lg text-psicopiloto-gray-700 border-l-4 border-psicopiloto-green-600 mb-6 italic">
                "Cada proceso clínico online es único y adapto la intervención por completo a tus necesidades particulares. Escríbeme y evaluaremos tu situación para ofrecerte un plan de sesiones y condiciones a tu medida."
              </p>

              <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Formulario de contacto para primera consulta">
                <label htmlFor="nombre" className="sr-only">Nombre completo *</label>
                <input id="nombre" required name="nombre" value={form.nombre} onChange={update} placeholder="Nombre completo *" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                
                <label htmlFor="edad" className="sr-only">Edad *</label>
                <input id="edad" required name="edad" value={form.edad} onChange={update} type="number" placeholder="Edad *" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                
                <label htmlFor="email" className="sr-only">Email *</label>
                <input id="email" required name="email" value={form.email} onChange={update} type="email" placeholder="Email *" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                
                <label htmlFor="telefono" className="sr-only">Teléfono</label>
                <input id="telefono" name="telefono" value={form.telefono} onChange={update} placeholder="Teléfono (opcional)" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white" />
                
                <label htmlFor="motivo" className="sr-only">Cuéntame brevemente tu motivo de consulta *</label>
                <textarea id="motivo" required name="motivo" value={form.motivo} onChange={update} placeholder="Cuéntame brevemente tu motivo de consulta *" rows="5" className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 bg-white"></textarea>
                
                {/* Input oculto antispam correctamente enlazado al state */}
                <input type="text" name="_gotcha" value={form._gotcha} onChange={update} style={{ display: 'none' }} />

                {/* CHECKBOX DE PRIVACIDAD OBLIGATORIO (Exigido por la AEPD) */}
                <div className="flex items-start gap-2 mt-2 p-2 bg-white/50 rounded border border-gray-100">
                  <input 
                    id="aceptoPrivacidad" 
                    type="checkbox" 
                    checked={aceptoPrivacidad}
                    onChange={(e) => setAceptoPrivacidad(e.target.checked)}
                    className="mt-1 w-4 h-4 text-psicopiloto-green-600 rounded focus:ring-psicopiloto-green-400 cursor-pointer" 
                  />
                  <label htmlFor="aceptoPrivacidad" className="text-xs text-psicopiloto-gray-600 cursor-pointer select-none">
                    He leído y acepto que mis datos sean tratados conforme a la <a href="/politica-privacidad" className="text-psicopiloto-green-600 underline hover:text-psicopiloto-green-700">política de privacidad</a> para gestionar mi solicitud de consulta. *
                  </label>
                </div>

                <button type="submit" className="mt-2 px-6 py-3 bg-psicopiloto-green-600 hover:bg-psicopiloto-green-700 text-white rounded-lg font-semibold transition-colors shadow-sm disabled:opacity-50" disabled={status === "Enviando..."}>
                  {status === "Enviando..." ? "Enviando..." : "Enviar consulta"}
                </button>
              </form>
              {status && <p className={`mt-4 text-sm font-medium ${status.startsWith("✅") ? 'text-psicopiloto-green-600' : 'text-red-600'}`}>{status}</p>}
            </div>

            {/* LEGAL INFRAESTRUCTURA */}
            <div className="text-xs text-psicopiloto-gray-500 order-4 md:col-start-1">
              <p><strong>Información básica sobre protección de datos:</strong> Tus datos de contacto serán tratados con absoluta confidencialidad con el único fin de agendar o resolver tu consulta clínica. Puedes ejercer tus derechos de acceso, rectificación o supresión escribiendo a info@psicopiloto.com.</p>
            </div>

          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
