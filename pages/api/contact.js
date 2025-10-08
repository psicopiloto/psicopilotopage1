import sgMail from "@sendgrid/mail";

// Configuración de la API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // 1. Solo aceptar POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Extraer campos del formulario
  // Se añade 'recaptchaToken' por si lo usas en el futuro.
  const { nombre, edad, email, telefono, motivo, recaptchaToken } = req.body || {};

  // 2. Validar campos obligatorios
  if (!nombre || !email || !motivo) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  // ⚠️ SEGURIDAD/ROBOTS: Si usas reCAPTCHA, la verificación iría aquí.
  // if (!verifyRecaptcha(recaptchaToken)) {
  //    return res.status(400).json({ error: "Verificación reCAPTCHA fallida" });
  // }

  // 3. Preparar el contenido del correo
  const timestamp = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  const subject = `Nueva consulta de ${nombre}`;
  const html = `
    <div style="font-family: sans-serif; line-height: 1.6;">
      <h2 style="color: #2a8371;">Nueva consulta desde la web (Psicopiloto)</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Edad:</strong> ${edad || "No especificada"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || "No especificado"}</p>
      <h3 style="color: #377792;">Motivo de Consulta:</h3>
      <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
        <p>${motivo.replace(/\n/g, "<br>")}</p>
      </div>
      <p style="font-size: 0.8em; margin-top: 20px;"><em>Enviado el ${timestamp}</em></p>
    </div>
  `;

  try {
    // 4. Enviar correo usando SendGrid
    await sgMail.send({
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM, 
      subject,
      html,
      replyTo: email,
    });

    return res.status(200).json({ ok: true, message: "Correo enviado correctamente" });
  } catch (error) {
    // 5. Manejo de errores mejorado
    let errorMessage = "Error desconocido al enviar el correo.";

    if (error.response && error.response.body && error.response.body.errors) {
      // Captura el mensaje de error detallado de SendGrid
      errorMessage = error.response.body.errors.map(err => err.message).join(", ");
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    console.error("Error enviando correo:", error);
    return res.status(500).json({ error: "Error de servidor al enviar el correo", details: errorMessage });
  }
}
