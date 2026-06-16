// pages/api/contact.js
import { Resend } from "resend";

// Conectamos con el motor de correos usando la clave que guardamos en Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Seguridad: Solo permitimos envíos de formularios (método POST)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  // Recogemos los datos que el paciente escribió en la web
  const { nombre, edad, email, telefono, motivo } = req.body || {};

  // Validación de seguridad por si alguien intenta saltarse el formulario
  if (!nombre || !email || !motivo) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  // Hora local de Madrid para saber cuándo se envió
  const timestamp = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

  try {
    // Enviamos el correo a través de Resend
    const { data, error } = await resend.emails.send({
      // Dirección provisional oficial de tu dominio para Resend
      from: "Psicopiloto Web <consultas@psicopiloto.com>", 
      to: [process.env.MAIL_TO], // Tu correo (joseretamar@psicopiloto.com)
      subject: `✈️ Nueva consulta web de ${nombre}`,
      replyTo: email, // Te permite responder al paciente en Gmail pulsando directamente "Responder"
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">Nueva consulta desde la web</h2>
          <p><strong>Nombre del paciente:</strong> ${nombre}</p>
          <p><strong>Edad:</strong> ${edad || "No especificada"}</p>
          <p><strong>Email de contacto:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Teléfono:</strong> ${telefono || "No especificado"}</p>
          
          <h3 style="color: #4b5563; margin-top: 20px;">Motivo de la consulta:</h3>
          <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #0d9488; border-radius: 4px; white-space: pre-wrap;">${motivo}</div>
          
          <p style="font-size: 11px; color: #9ca3af; margin-top: 30px; text-align: right;">Enviado el ${timestamp}</p>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Si todo ha ido bien, le avisamos a la página web
    return res.status(200).json({ ok: true });

  } catch (err) {
    return res.status(500).json({ error: "Error interno del servidor al procesar el correo" });
  }
}
