import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Extraer campos del formulario
  const { nombre, edad, email, telefono, motivo } = req.body || {};

  // Validar campos obligatorios
  if (!nombre || !email || !motivo) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  // Preparar el contenido del correo
  const timestamp = new Date().toISOString();
  const subject = `Nueva consulta de ${nombre}`;
  const html = `
    <h2>Nueva consulta desde la web</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad:</strong> ${edad || "-"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${telefono || "-"}</p>
    <h3>Motivo:</h3>
    <p>${motivo.replace(/\n/g, "<br>")}</p>
    <p><em>Enviado el ${timestamp}</em></p>
  `;

  try {
    // Enviar correo usando SendGrid
    await sgMail.send({
      to: process.env.MAIL_TO,      // tu correo info@psicopiloto.com
      from: process.env.MAIL_FROM,  // remitente verificado en SendGrid
      subject,
      html,
      replyTo: email,                // responder al email del usuario
    });

    return res.status(200).json({ ok: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({ error: "Error enviando el correo", details: error.message });
  }
}
