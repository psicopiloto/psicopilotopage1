// pages/consentimiento.js

import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import SignatureCanvas from "react-signature-canvas";
import Link from "next/link";

export default function Consentimiento() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    dni: "",
    direccion: "",
    telefono: "",
    cp: "",
    fecha: new Date().toISOString().split("T")[0], // Fecha de hoy por defecto
  });
  const [status, setStatus] = useState("");
  const [acepto, setAcepto] = useState(false);
  
  // Referencia para el canvas de la firma
  const sigCanvas = useRef({});

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const clearSignature = (e) => {
    e.preventDefault();
    sigCanvas.current.clear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!acepto) {
      setStatus("❌ Debes leer y aceptar las condiciones para continuar.");
      return;
    }
    if (sigCanvas.current.isEmpty()) {
      setStatus("❌ Por favor, firma el documento en el recuadro correspondiente.");
      return;
    }

    setStatus("Enviando documento firmado...");

    // Obtenemos la firma como una imagen (String Base64)
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    // Preparamos los datos para enviar a Formspree
    // Nota: Formspree recibirá la firma como un enlace o un adjunto codificado
    const dataToSend = {
      ...form,
      firma: signatureData,
      documento: "Consentimiento Informado Psicopiloto",
      _subject: `Nuevo Consentimiento Firmado: ${form.nombre}`
    };

    try {
      // ⚠️ IMPORTANTE: Puedes usar el mismo endpoint de contacto o crear uno nuevo en Formspree
      // para tener los consentimientos separados.
      const res = await fetch("https://formspree.io/f/xzzjybkg", { 
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(dataToSend),
      });

      if (res.ok) {
        setStatus("✅ Documento enviado y procesado correctamente. Muchas gracias.");
        setForm({ nombre: "", email: "", dni: "", direccion: "", telefono: "", cp: "", fecha: new Date().toISOString().split("T")[0] });
        setAcepto(false);
        sigCanvas.current.clear();
      } else {
        setStatus("❌ Hubo un error al enviar el documento. Por favor, inténtalo de nuevo.");
      }
    } catch (err) {
      setStatus("❌ Error de red. Comprueba tu conexión.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Consentimiento Informado | Psicopiloto"
        description="Documento de consentimiento informado para la terapia psicológica online con Jose Carlos Rguez. Retamar."
        noindex={true} // Recomendación: No indexar esta página en Google, es para clientes ya contactados.
      />

      <Nav />
      
      {/* Header simplificado para página legal */}
      <div className="bg-white pt-24 pb-8 shadow-sm">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-psicopiloto-blue-600">Consentimiento Informado</h1>
            <p className="mt-2 text-psicopiloto-gray-500">Terapia Psicológica Online</p>
        </div>
      </div>

      <main className="flex-grow py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* CAJA DE TEXTO LEGAL CON SCROLL */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200 mb-8">
            <div className="prose prose-sm md:prose-base text-justify text-psicopiloto-gray-700 h-96 overflow-y-scroll pr-4 border-b border-gray-100 mb-6 custom-scrollbar">
                <h3 className="text-lg font-bold mb-4 text-psicopiloto-green-600">Lea atentamente el siguiente consentimiento informado</h3>
                
                <p className="mb-4 font-bold">Manifiesto que:</p>
                <p className="mb-4">
                    El profesional <strong>Jose Carlos Rguez. Retamar</strong>, psicólogo sanitario colegiado número <strong>AO14457</strong> en el Colegio Oficial de Psicólogos de Andalucía Oriental, ha proporcionado toda la información necesaria, de forma clara, comprensible y satisfactoria sobre la naturaleza y propósito de los objetivos, procedimientos, temporalidad y honorarios que se seguirán para la evaluación psicológica que solicito, aplicándose al efecto la obligación de confidencialidad y el resto de los preceptos que rigen en el Código Deontológico.
                </p>

                <h4 className="font-bold mt-4 mb-2">Protección de datos de carácter personal</h4>
                <p className="mb-4">
                    De conformidad con la Ley Orgánica 3/2018 y el Reglamento (UE) 2016/679, informamos que los datos personales serán tratados por <strong>Jose Carlos Rguez. Retamar</strong> con NIF: <strong>[74658149-B]</strong>.
                </p>
                <p className="mb-4">
                    Los datos se recogerán con la única finalidad de elaborar los documentos derivados de esta intervención profesional, su facturación, seguimiento posterior y las funciones propias de la actividad profesional. Se conservarán durante el período legalmente establecido y no serán cedidos a terceros salvo obligación legal.
                </p>
                <p className="mb-4">
                    Puede ejercer sus derechos de acceso, rectificación, supresión, limitación y oposición escribiendo al correo electrónico: <strong>info@psicopiloto.com</strong>.
                </p>

                <h4 className="font-bold mt-4 mb-2">Características de la terapia online</h4>
                <p className="mb-4">
                    Las sesiones se realizarán a través de plataformas seguras como <strong>Google Meet</strong> (o Zoom en su defecto), garantizando la privacidad. Entiendo que el medio digital requiere que tanto paciente como terapeuta se comuniquen desde dispositivos seguros y entornos privados.
                </p>
                <p className="mb-4">
                    Existe un compromiso mutuo de <strong>no grabar las sesiones</strong> sin consentimiento previo por escrito.
                </p>
                
                <h4 className="font-bold mt-4 mb-2">Comunicación y Emergencias</h4>
                <p className="mb-4">
                    La comunicación entre sesiones (agendar, dudas) se realizará mediante correo electrónico o teléfono/WhatsApp profesional. Entiendo que aplicaciones como WhatsApp no son 100% seguras para transmitir datos clínicos sensibles, por lo que limitaremos su uso a gestión de citas.
                </p>
                
                <h4 className="font-bold mt-4 mb-2">Condiciones de las sesiones</h4>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li><strong>Puntualidad:</strong> Si el paciente conecta tarde, se utilizará el tiempo restante. Si el retraso es del psicólogo, se cumplirá el tiempo total.</li>
                    <li><strong>Cancelaciones:</strong> Se requiere un aviso de <strong>24 horas</strong> de antelación. De no hacerlo, se podrá cobrar la sesión, salvo urgencia justificada.</li>
                    <li><strong>Pago:</strong> Se realizará ANTES de la sesión mediante transferencia bancaria o Bizum.</li>
                </ul>

                <p className="mb-4 font-bold">
                    Todos estos consentimientos PODRÁN SER REVOCADOS LIBREMENTE en cualquier momento mediante comunicación escrita.
                </p>
                <p>
                    Tomando todo ello en consideración, por el presente documento, expresamente <strong>AUTORIZO y COMPROMETO</strong>, con el Psicólogo Jose Carlos Rguez. Retamar (Psicopiloto) para realizar la citada intervención profesional.
                </p>
            </div>

            {/* FORMULARIO DE DATOS */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-semibold text-psicopiloto-blue-600 border-b pb-2">Tus Datos y Firma</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nombre y Apellidos</label>
                        <input required name="nombre" value={form.nombre} onChange={update} type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-psicopiloto-green-400 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">DNI / NIE</label>
                        <input required name="dni" value={form.dni} onChange={update} type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-psicopiloto-green-400 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                        <input required name="email" value={form.email} onChange={update} type="email" className="w-full p-2 border rounded focus:ring-2 focus:ring-psicopiloto-green-400 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Teléfono</label>
                        <input required name="telefono" value={form.telefono} onChange={update} type="tel" className="w-full p-2 border rounded focus:ring-2 focus:ring-psicopiloto-green-400 outline-none" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Dirección Postal</label>
                        <input required name="direccion" value={form.direccion} onChange={update} type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-psicopiloto-green-400 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Código Postal</label>
                        <input required name="cp" value={form.cp} onChange={update} type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-psicopiloto-green-400 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Fecha</label>
                        <input required name="fecha" value={form.fecha} onChange={update} type="date" className="w-full p-2 border rounded focus:ring-2 focus:ring-psicopiloto-green-400 outline-none" />
                    </div>
                </div>

                {/* CANVAS DE FIRMA */}
                <div className="mt-8">
                    <label className="block text-sm font-bold mb-2 text-psicopiloto-gray-700">Firma Digital:</label>
                    <p className="text-xs text-gray-500 mb-2">Utiliza el ratón o el dedo en pantalla táctil para firmar dentro del recuadro.</p>
                    
                    <div className="border-2 border-dashed border-psicopiloto-gray-300 rounded-lg bg-gray-50 w-full max-w-md mx-auto overflow-hidden relative">
                        <SignatureCanvas 
                            ref={sigCanvas}
                            penColor="black"
                            canvasProps={{
                                className: "sigCanvas w-full h-48 cursor-crosshair"
                            }}
                        />
                         {/* Botón para borrar firma dentro del canvas */}
                         <button 
                            onClick={clearSignature}
                            className="absolute top-2 right-2 text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-red-50 hover:text-red-600 transition"
                         >
                            Borrar Firma
                         </button>
                    </div>
                </div>

                {/* CHECKBOX ACEPTACIÓN */}
                <div className="flex items-start gap-3 mt-6 p-4 bg-psicopiloto-green-50 rounded-lg">
                    <input 
                        id="acepto" 
                        type="checkbox" 
                        checked={acepto}
                        onChange={(e) => setAcepto(e.target.checked)}
                        className="mt-1 w-5 h-5 text-psicopiloto-green-600 rounded focus:ring-psicopiloto-green-500" 
                    />
                    <label htmlFor="acepto" className="text-sm text-psicopiloto-gray-700 cursor-pointer select-none">
                        He leído íntegramente el consentimiento informado expuesto arriba, entiendo las condiciones de la terapia online y acepto el tratamiento de mis datos personales.
                    </label>
                </div>

                {/* BOTÓN ENVIAR */}
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        disabled={status.startsWith("Enviando")}
                        className="px-8 py-4 bg-psicopiloto-green-600 text-white font-bold rounded-full shadow-lg hover:bg-psicopiloto-green-700 transition transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status.startsWith("Enviando") ? "Procesando..." : "Firmar y Enviar Consentimiento"}
                    </button>
                </div>

                {/* MENSAJE DE ESTADO */}
                {status && (
                    <div className={`mt-4 p-4 rounded text-center ${status.startsWith("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
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
