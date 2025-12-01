// pages/consentimiento.js

import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import SignatureCanvas from "react-signature-canvas";

export default function Consentimiento() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    dni: "",
    direccion: "",
    telefono: "",
    cp: "",
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

    // 1. Obtenemos la firma como texto (Base64) para evitar bloqueo de archivos
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    // 2. Preparamos los datos JSON
    const dataToSend = {
      nombre: form.nombre,
      email: form.email,
      dni: form.dni,
      telefono: form.telefono,
      direccion: form.direccion,
      cp: form.cp,
      fecha: form.fecha,
      documento: "Consentimiento Informado Psicopiloto (Texto Completo)",
      _subject: `Nuevo Consentimiento Firmado: ${form.nombre}`,
      _gotcha: "", // Campo anti-spam
      firma_codigo: signatureData // La firma va aquí
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
        setForm({ nombre: "", email: "", dni: "", direccion: "", telefono: "", cp: "", fecha: new Date().toISOString().split("T")[0] });
        setAcepto(false);
        sigCanvas.current.clear();
      } else {
        console.error("Error Formspree:", data);
        if (data.error) {
            setStatus(`❌ Error: ${data.error}`);
        } else if (data.errors && data.errors.length > 0) {
            const messages = data.errors.map(err => err.message).join(", ");
            setStatus(`❌ Error: ${messages}`);
        } else {
            setStatus("❌ Hubo un error al enviar el documento. Por favor, inténtalo de nuevo.");
        }
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
        description="Documento de consentimiento informado para la terapia psicológica online con Jose Carlos Rguez. Retamar."
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
          
          {/* CAJA DE TEXTO LEGAL COMPLETO */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200 mb-8">
            <div className="prose prose-sm md:prose-base text-justify text-psicopiloto-gray-700 h-96 overflow-y-scroll pr-4 border-b border-gray-100 mb-6 custom-scrollbar">
                <h3 className="text-lg font-bold mb-4 text-psicopiloto-green-600">CONSENTIMIENTO INFORMADO</h3>
                <p className="mb-4">Lea y firme el siguiente consentimiento informado sobre la terapia psicológica online.</p>
                
                <p className="mb-4 font-bold">Manifiesto que:</p>
                <p className="mb-4">
                    El profesional <strong>Jose Carlos Rguez. Retamar</strong>, psicólogo sanitario colegiado número <strong>AO14457</strong> en el Colegio Oficial de Psicólogos de Andalucía Oriental, ha proporcionado toda la información necesaria, de forma clara, comprensible y satisfactoria sobre la naturaleza y propósito de los objetivos, procedimientos, temporalidad y honorarios que se seguirán para la evaluación psicológica que solicito, a través de las pruebas oportunas, aplicándose al efecto la obligación de confidencialidad y el resto de los preceptos que rigen en el Código Deontológico y normas de deontología profesional de la Psicología.
                </p>

                <h4 className="font-bold mt-4 mb-2">Estoy informado/a sobre la información relativa a la protección de datos de carácter personal:</h4>
                <p className="mb-4">
                    De conformidad con lo dispuesto en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales y el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, informamos que los datos personales serán tratados por <strong>Jose Carlos Rguez. Retamar</strong> con NIF: <strong>74658149-B</strong>.
                </p>
                <p className="mb-4">
                    Los datos se recogerán con la única finalidad de elaborar los documentos derivados de esta intervención profesional, su facturación, seguimiento posterior y las funciones propias de la actividad profesional que los justifica. Se conservarán durante todo el período de prescripción de las acciones de responsabilidad y no serán cedidos a terceros.
                </p>
                <p className="mb-4">
                    Usted tiene derecho al acceso, rectificación, supresión, limitación, portabilidad y oposición al tratamiento de sus datos personales, que se ejercerán ante <strong>Jose Carlos Rguez. Retamar</strong> al correo electrónico: <strong>info@psicopiloto.com</strong>. Así mismo, usted puede revocar el consentimiento en cualquier momento.
                </p>
                <p className="mb-4">
                    Que el responsable del fichero, ha adoptado las medidas de seguridad que están a su alcance para proteger la inviolabilidad de sus datos personales en sus instalaciones, sistemas y ficheros. Asimismo, el responsable del fichero garantiza la confidencialidad de los datos personales; éstos sólo podrán ser revelados a las autoridades públicas competentes en caso que le sean requeridos de conformidad con las disposiciones legales y reglamentarias aplicables.
                </p>

                <h4 className="font-bold mt-4 mb-2">Igualmente, he sido informado/a sobre las características especiales de la terapia en modalidad on-line en los siguientes términos:</h4>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>La mayoría de estudios concluyen que la psicoterapia online es tan efectiva como la presencial.</li>
                    <li>Esta forma de terapia no está indicada en casos de pérdida de realidad o si está experimentado pensamientos suicidas u homicidas. En la primera sesión se evaluará si es adecuada su solicitud de servicio de atención psicológica online, asimismo se irá revisando conforme avance la terapia, en caso de ser necesario realizar algunas o todas las sesiones en modalidad presencial y/o derivar a otro servicio.</li>
                    <li>Las sesiones de psicoterapia se realizarán a través de la plataforma <strong>Google Meet</strong> (o similar segura), que permite trabajar desde un entorno seguro y confidencial y se ajusta a la legislación vigente relativa a la protección de la privacidad. En su defecto, como alternativa podrá utilizarse la plataforma ZOOM.</li>
                    <li>Existe un compromiso mutuo de no grabar o registrar las sesiones sin el consentimiento previo del otro. Únicamente podrán ser grabadas en caso de acuerdo por escrito entre paciente y psicólogo, protegidas por los medios adecuados y con un uso determinado.</li>
                    <li>En cuanto a la confidencialidad: ninguna información será comunicada, directa o indirectamente, a un tercero sin su consentimiento informado y por escrito, a menos que lo exija la ley.</li>
                    <li>Entiendo que el medio digital no es 100% seguro y, tanto paciente como terapeuta, deberán comunicarse a través de un ordenador o dispositivo que sea seguro, es decir, donde la confidencialidad pueda ser garantizada.</li>
                    <li>Acepta que las sesiones online se llevarán a cabo en un entorno de privacidad en la que, salvo acuerdo explícito de todas las partes, no habrá terceras personas participantes y se garantizará evitar interrupciones.</li>
                    <li>La comunicación entre sesiones, para agendar sesiones u otras consultas, se realizará mediante correo electrónico o teléfono.</li>
                    <li>Acepta que los correos electrónicos que le envíe así como la respuesta a los mismos se realizará a través del correo electrónico: <strong>info@psicopiloto.com</strong>.</li>
                    <li>Entiende que otras cuentas de correo electrónico, o mensajería de uso personal (WhatsApp, Instagram, Telegram…) no es una forma 100% segura de comunicación. Por tanto, se limitará su uso priorizando las opciones seguras propuestas anteriormente.</li>
                    <li>Entiende que es responsable de salvaguardar cualquier comunicación electrónica que descargue, imprima o acceda y que no reenviará, dará o copiará (total o parcialmente) mensajes de correo electrónico o comunicaciones electrónicas del terapeuta a ninguna otra persona, excepto con su acuerdo previo por escrito.</li>
                </ul>

                <h4 className="font-bold mt-4 mb-2">Sobre la conexión y aspectos técnicos:</h4>
                <p className="mb-4">Las sesiones online dependen de la conexión a internet, que puede verse interrumpida, tanto en el profesional como del paciente. Puede ocurrir dos cosas:</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>La conexión se corta y/o no es fluida. Se podrá acordar mantener la sesión a través de otra plataforma segura de comunicación, o establecer otro momento a fin de tener una óptima comunicación.</li>
                    <li>La conexión se interrumpe y no es posible retomarla. Se contactará por otro medio previamente establecido por las partes, (audio o texto), a fin únicamente de notificar que no es posible llevar a cabo la sesión y proceder a reagendarla.</li>
                </ul>

                <h4 className="font-bold mt-4 mb-2">Política de asistencia y pago:</h4>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Entiendo que es importante ser puntual para disfrutar del tiempo completo de la sesión. Si conecto tarde a una sesión, entiendo que utilizaré el tiempo restante en la sesión programada y se me cobrará la tarifa completa por esa sesión. En caso que el retraso sea causa del psicólogo, se cumplirá siempre con el tiempo total de sesión estipulado.</li>
                    <li>En caso de tener que anular la sesión, se solicita que se haga con <strong>24h de antelación</strong>, de no hacerlo, se cobrará la sesión. Salvo urgencia justificada.</li>
                    <li>El pago de las sesiones se realizará <strong>ANTES</strong> de la sesión mediante Bizum, transferencia bancaria o tarjeta de crédito (si disponible). Todos los datos están cifrados y protegidos por las entidades bancarias involucradas.</li>
                    <li>Recibirá la factura de sus sesiones cuando usted lo solicite.</li>
                </ul>

                <p className="mb-4 font-bold">
                    Todos estos consentimientos PODRÁN SER REVOCADOS LIBREMENTE en cualquier momento, tanto por el paciente como por el profesional, mediante comunicación escrita.
                </p>
                <p>
                    Tomando todo ello en consideración, por el presente documento, expresamente <strong>AUTORIZO y COMPROMETO</strong>, con el Psicólogo <strong>Jose Carlos Rguez. Retamar (Psicopiloto)</strong>, colegiado <strong>AO14457</strong> para realizar la citada intervención profesional, y OTORGO mi expreso CONSENTIMIENTO para que realice las indicadas intervenciones, y para que los datos sean incorporados a los ficheros antes mencionados para su tratamiento conforme a los fines especificados.
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
                         <button 
                            onClick={clearSignature}
                            className="absolute top-2 right-2 text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-red-50 hover:text-red-600 transition"
                         >
                            Borrar Firma
                         </button>
                    </div>
                </div>

                {/* Input oculto anti-spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

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
