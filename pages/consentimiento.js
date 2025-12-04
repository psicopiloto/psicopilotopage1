// pages/consentimiento.js

import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import SignatureCanvas from "react-signature-canvas";

// --- CONFIGURACIÓN DE DATOS DEL PROFESIONAL ---
const PROFESIONAL = {
  nombre: "Jose Carlos Rguez. Retamar",
  marca: "Psicopiloto",
  colegiado: "AO14457",
  nif: "74658149-B", 
  email: "info@psicopiloto.com",
  // ⬇️ DEJA ESTO VACÍO ("") SI NO TIENES DIRECCIÓN FÍSICA PÚBLICA.
  // Si en el futuro tienes consulta, escríbela aquí y aparecerá automáticamente en el texto legal.
  direccion_datos: "" 
};

export default function Consentimiento() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    dni: "",
    direccion: "",
    telefono: "",
    cp: "",
    ciudad: "",
    pais: "España",
    fecha: new Date().toISOString().split("T")[0],
  });

  const [status, setStatus] = useState("");
  const [acepto, setAcepto] = useState(false);
  
  const sigCanvas = useRef({});

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const clearSignature = (e) => {
    e.preventDefault();
    sigCanvas.current.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!acepto) {
      setStatus("❌ Debes leer y aceptar las condiciones para continuar.");
      return;
    }
    if (sigCanvas.current.isEmpty()) {
      setStatus("❌ Por favor, firma el documento en el recuadro correspondiente.");
      return;
    }

    setStatus("Enviando documento firmado...");

    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    const dataToSend = {
      ...form,
      documento: "Consentimiento Informado Terapia Online",
      _subject: `Nuevo Consentimiento Firmado: ${form.nombre}`,
      _gotcha: "", 
      firma_codigo: signatureData 
    };

    try {
      const res = await fetch("https://formspree.io/f/xzzjybkg", { 
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Documento enviado y procesado correctamente. Muchas gracias.");
        // Reseteamos el formulario
        setForm({ 
            nombre: "", email: "", dni: "", direccion: "", telefono: "", cp: "", ciudad: "", pais: "España", 
            fecha: new Date().toISOString().split("T")[0] 
        });
        setAcepto(false);
        sigCanvas.current.clear();
      } else {
        console.error("Error Formspree:", data);
        setStatus("❌ Hubo un error al enviar. Por favor, inténtalo de nuevo.");
      }
    } catch (err) {
      console.error("Error Red:", err);
      setStatus("❌ Error de red. Comprueba tu conexión.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Consentimiento Informado | Psicopiloto"
        description="Documento de consentimiento informado para la terapia psicológica online."
        noindex={true} 
      />

      <Nav />
      
      <div className="bg-white pt-24 pb-8 shadow-sm">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-psicopiloto-blue-600">Consentimiento Informado</h1>
            <p className="mt-2 text-psicopiloto-gray-500">Terapia Psicológica Online</p>
        </div>
      </div>

      <main className="flex-grow py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-md border border-gray-200 mb-10">
            
            <div className="prose prose-sm md:prose-base max-w-none text-justify text-psicopiloto-gray-700 mb-8">
                <h3 className="text-xl font-bold mb-6 text-psicopiloto-green-600 text-center uppercase border-b pb-4">
                    Acuerdo de Terapia Psicológica Online
                </h3>
                
                <p>Por favor, lea y firme el siguiente consentimiento informado para realizar terapia online.</p>
                
                <p><strong>Manifiesto que:</strong></p>
                <p>
                    He recibido de <strong>{PROFESIONAL.nombre} ({PROFESIONAL.marca})</strong>, toda la información necesaria, de forma clara, comprensible y satisfactoria sobre la naturaleza y propósito de los objetivos, procedimientos, temporalidad y honorarios para la evaluación e intervención psicológica que solicito. Se aplica al efecto la obligación de confidencialidad y el resto de los preceptos que rigen en el Código Deontológico y normas de deontología profesional de la Psicología.
                </p>

                <h4 className="font-bold text-psicopiloto-blue-600 mt-6">1. Características de la Terapia Online</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Diferencias con la presencialidad:</strong> La terapia a distancia difiere de las sesiones presenciales. El contacto puede ser menos cercano y la captación de señales no verbales más difícil. Por ello, se evaluará constantemente si esta modalidad es adecuada para su caso.
                    </li>
                    <li>
                        <strong>Situaciones de crisis:</strong> Esta modalidad <strong>no es apropiada</strong> si está experimentando una crisis aguda, pérdida de realidad o tiene pensamientos suicidas u homicidas activos. Si esto ocurre, debe acudir inmediatamente a un servicio de urgencias presencial.
                    </li>
                    <li>
                        <strong>Plataforma Segura:</strong> Las sesiones se realizarán a través de plataformas que permiten trabajar desde un entorno seguro y confidencial, ajustándose a la legislación vigente de privacidad.
                    </li>
                    <li>
                        <strong>Entorno del paciente:</strong> Usted se compromete a realizar la sesión en un entorno privado, sin la presencia de terceras personas (salvo acuerdo explícito) y evitando interrupciones.
                    </li>
                </ul>

                <h4 className="font-bold text-psicopiloto-blue-600 mt-6">2. Confidencialidad y Grabaciones</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Prohibición de grabación:</strong> No se permiten grabaciones de las sesiones (audio o video) por ninguna de las partes, excepto con acuerdo previo por escrito de ambos.
                    </li>
                    <li>
                        <strong>Confidencialidad:</strong> Ninguna información será comunicada a un tercero sin su consentimiento informado y por escrito, a menos que lo exija la ley.
                    </li>
                </ul>

                <h4 className="font-bold text-psicopiloto-blue-600 mt-6">3. Aspectos Técnicos y Honorarios</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Conexión:</strong> Si la conexión falla, se intentará restablecer o se contactará por otro medio para reagendar.</li>
                    <li><strong>Cancelaciones:</strong> Si cancela con <strong>menos de 24 horas</strong> de anticipación o no se presenta, se podrá cobrar la tarifa completa de la sesión.</li>
                </ul>

                <h4 className="font-bold text-psicopiloto-blue-600 mt-6">4. Protección de Datos (RGPD)</h4>
                <p>
                    En cumplimiento del Reglamento General de Protección de Datos y la Ley Orgánica 3/2018:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Responsable:</strong> Los datos personales se recogerán en el fichero cuyo responsable es <strong>{PROFESIONAL.nombre}</strong> (NIF: {PROFESIONAL.nif}).</li>
                    <li><strong>Finalidad:</strong> Elaboración de documentos clínicos, facturación, seguimiento y funciones profesionales.</li>
                    <li>
                        <strong>Derechos:</strong> Puede ejercer sus derechos de acceso, rectificación, cancelación, oposición, olvido, portabilidad y limitación dirigiéndose por escrito al correo: <strong>{PROFESIONAL.email}</strong>
                        {/* ⬇️ LÓGICA: Si hay dirección física, se muestra, si no, se oculta esta frase */}
                        {PROFESIONAL.direccion_datos && (
                            <span> o a la dirección postal: <strong>{PROFESIONAL.direccion_datos}</strong></span>
                        )}.
                    </li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-8 text-sm">
                    <p>
                        <strong>REVOCACIÓN:</strong> Este consentimiento PODRÁ SER REVOCADO LIBREMENTE en cualquier momento, tanto por el paciente como por el profesional, de acuerdo con la legislación aplicable.
                    </p>
                </div>

                <p className="mt-6 text-sm">
                    Por el presente documento, expresamente <strong>AUTORIZO y COMPROMETO</strong>, con <strong>{PROFESIONAL.nombre}</strong> (Colegiado {PROFESIONAL.colegiado}), para realizar la citada intervención profesional, y <strong>OTORGO mi expreso CONSENTIMIENTO</strong> para el tratamiento de mis datos conforme a los fines especificados.
                </p>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* --- FORMULARIO DE DATOS --- */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-psicopiloto-blue-600 mb-6">Sus Datos y Firma</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Nombre y Apellidos *</label>
                        <input required name="nombre" value={form.nombre} onChange={update} type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">DNI / NIE / NIF *</label>
                        <input required name="dni" value={form.dni} onChange={update} type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono *</label>
                        <input required name="telefono" value={form.telefono} onChange={update} type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Correo electrónico *</label>
                        <input required name="email" value={form.email} onChange={update} type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>

                    {/* ⬇️ SECCIÓN DE DIRECCIÓN DEL PACIENTE (OCULTA TEMPORALMENTE)
                      Si en el futuro quieres pedir la dirección para facturas:
                      1. Borra "{/*" al inicio de este bloque
                      2. Borra "* /}" al final de este bloque
                    */}
                    {/*
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Dirección Postal Completa</label>
                        <input name="direccion" value={form.direccion} onChange={update} type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Ciudad</label>
                        <input name="ciudad" value={form.ciudad} onChange={update} type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Código Postal</label>
                        <input name="cp" value={form.cp} onChange={update} type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>
                    */}
                    {/* ⬆️ FIN DE LA SECCIÓN OCULTA */}

                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Fecha de la firma *</label>
                        <input required name="fecha" value={form.fecha} onChange={update} type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-psicopiloto-green-400 outline-none transition" />
                    </div>
                </div>

                {/* --- CANVAS DE FIRMA --- */}
                <div className="mt-10 bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <label className="block text-lg font-bold mb-2 text-center text-psicopiloto-gray-700">Firma Digital</label>
                    <p className="text-sm text-gray-500 mb-4 text-center">Utiliza el ratón o el dedo para firmar dentro del recuadro blanco.</p>
                    
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="border-2 border-dashed border-gray-400 rounded-lg bg-white overflow-hidden shadow-inner">
                            <SignatureCanvas 
                                ref={sigCanvas}
                                penColor="black"
                                canvasProps={{
                                    className: "sigCanvas w-full h-56 cursor-crosshair"
                                }}
                            />
                        </div>
                        <button 
                            onClick={clearSignature}
                            className="mt-2 text-xs text-red-600 hover:text-red-800 underline w-full text-center"
                        >
                            Borrar y firmar de nuevo
                        </button>
                    </div>
                </div>

                {/* --- CHECKBOX ACEPTACIÓN --- */}
                <div className="flex items-start gap-3 mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <input 
                        id="acepto" 
                        type="checkbox" 
                        checked={acepto}
                        onChange={(e) => setAcepto(e.target.checked)}
                        className="mt-1 w-5 h-5 text-psicopiloto-green-600 rounded focus:ring-psicopiloto-green-500 cursor-pointer" 
                    />
                    <label htmlFor="acepto" className="text-sm text-gray-700 cursor-pointer select-none">
                        He leído el consentimiento informado, entiendo las condiciones de la terapia online y <strong>acepto el tratamiento de mis datos personales</strong>.
                    </label>
                </div>

                <div className="text-center pt-6">
                    <button
                        type="submit"
                        disabled={status.startsWith("Enviando")}
                        className="w-full md:w-auto px-10 py-4 bg-psicopiloto-green-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-psicopiloto-green-700 transition transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status.startsWith("Enviando") ? "Procesando..." : "Firmar y Enviar Consentimiento"}
                    </button>
                </div>

                {status && (
                    <div className={`mt-6 p-4 rounded-lg text-center font-medium animate-fade-in ${status.startsWith("✅") ? "bg-green-100 text-green-800 border border-green-200" : "bg-red-100 text-red-800 border border-red-200"}`}>
                        {status}
                    </div>
                )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
