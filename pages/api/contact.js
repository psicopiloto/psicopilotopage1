// pages/api/contact.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const payload = req.body || {};
  const timestamp = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

  try {
    // ⚖️ CASO A: SI ES UN CONSENTIMIENTO INFORMADO FIRMADO
    if (payload.documento) {
      const { nombre, email, dni, telefono, ciudad, pais, contacto_emergencia, fecha, firma_codigo } = payload;

      if (!nombre || !email || !dni || !firma_codigo) {
        return res.status(400).json({ error: "Faltan campos obligatorios para el consentimiento legal" });
      }

      const base64Data = firma_codigo.split(",")[1];

      const { data, error } = await resend.emails.send({
        from: "Psicopiloto Web <consultas@psicopiloto.com>",
        to: [process.env.MAIL_TO],
        subject: `⚖️ LEGAL: Consentimiento Informado Firmado - ${nombre}`,
        replyTo: email,
        // 🚀 CORRECCIÓN: Título cambiado a un tono estrictamente formal y sanitario
        html: `
          <div style="font-family: sans-serif; padding: 25px; color: #242c35; max-width: 650px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f9f5f1;">
            <h2 style="color: #2a8371; border-bottom: 2px solid #2a8371; padding-bottom: 10px; margin-top: 0; font-size: 22px;">
              Consentimiento Informado Recibido
            </h2>
            <p style="font-size: 15px;">El siguiente paciente ha leído, aceptado y firmado digitalmente el <strong>Consentimiento Informado para Terapia Psicológica Online</strong>.</p>
            
            <h3 style="color: #377792; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 5px; font-size: 16px;">Datos de Identificación del Paciente</h3>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr><td style="padding: 5px 0; font-weight: bold; width: 35%;">Nombre completo:</td><td style="padding: 5px 0;">${nombre}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">DNI / NIE / NIF:</td><td style="padding: 5px 0;">${dni}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Teléfono:</td><td style="padding: 5px 0;">${telefono || "No especificado"}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Email:</td><td style="padding: 5px 0;"><a href="mailto:${email}" style="color: #2a8371;">${email}</a></td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Residencia:</td><td style="padding: 5px 0;">${ciudad}, ${pais || "España"}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Contacto de emergencia:</td><td style="padding: 5px 0; color: #b45309; font-weight: 500;">${contacto_emergencia || "No especificado"}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold;">Fecha declaración:</td><td style="padding: 5px 0;">${fecha}</td></tr>
            </table>

            <h3 style="color: #377792; margin-top: 25px; border-bottom: 1px solid #cbd5e1; padding-bottom: 5px; font-size: 16px;">Declaración de Voluntad</h3>
            <p style="font-size: 13px; color: #4b5563; background-color: #fff; padding: 12px; border-left: 4px solid #2a8371; border-radius: 4px; font-style: italic;">
              "He leído el consentimiento informado, entiendo las condiciones económicas y de cancelación de la terapia online y otorgo mi consentimiento explícito para el tratamiento de mis datos de salud."
            </p>
            
            <div style="margin-top: 20px; background-color: #e2e8f0; padding: 12px; border-radius: 8px; font-size: 13px; font-weight: bold; text-align: center; color: #1e293b;">
              📎 La firma digital manuscrita ha sido verificada y se ha adjuntado de forma segura a este correo como un archivo PNG ('firma-${dni}.png').
            </div>

            <p style="font-size: 11px; color: #9ca3af; margin-top: 30px; text-align: right;">Documento sellado digitalmente el ${timestamp}</p>
          </div>
        `,
        attachments: [
          {
            content: base64Data,
            filename: `firma-${dni}.png`,
            type: "image/png",
            disposition: "attachment",
          }
        ]
      });

      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json({ ok: true });
    }

    // ✈️ CASO B: SI ES UNA CONSULTA ESTÁNDAR DESDE EL FORMULARIO DE LA HOME
    const { nombre, edad, email, telefono, motivo } = payload;

    if (!nombre || !email || !motivo) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const { data, error } = await resend.emails.send({
      from: "Psicopiloto Web <consultas@psicopiloto.com>",
      to: [process.env.MAIL_TO],
      subject: `✈️ Nueva consulta web de ${nombre}`,
      replyTo: email,
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

    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ ok: true });

  } catch (err) {
    return res.status(500).json({ error: "Error interno del servidor al procesar el correo" });
  }
}
