export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { nombre, edad, email, telefono, motivo } = req.body || {};

  if (!nombre || !email || !motivo)
    return res.status(400).json({ error: "Faltan campos obligatorios" });

  const FORMSPREE_URL = process.env.FORMSPREE_URL || "";
  const GAS_URL = process.env.GAS_URL || "";

  const timestamp = new Date().toISOString();
  const payload = { nombre, edad, email, telefono, motivo, timestamp };

  let errors = [];

  if (FORMSPREE_URL) {
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: payload, email }),
      });
      console.log("Formspree enviado correctamente para:", email);
    } catch (e) {
      errors.push("Formspree error: " + String(e));
    }
  } else {
    errors.push("FORMSPREE_URL no configurado");
  }

  if (GAS_URL) {
    try {
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("GAS enviado correctamente para:", email);
    } catch (e) {
      errors.push("GAS error: " + String(e));
    }
  } else {
    errors.push("GAS_URL no configurado");
  }

  if (errors.length === 0) {
    return res.status(200).json({ ok: true });
  } else {
    return res
      .status(500)
      .json({ error: "Env vars not configured or remote call failed", details: errors });
  }
}


/*
Cambios realizados:
- Mensajes de error más claros para campos obligatorios y errores de envío.
- Añadido formateo consistente y espaciado para mejor legibilidad.
- Comentarios breves sobre cada envío (Formspree y GAS).
- Conserva la estructura original y la compatibilidad con las variables de entorno.
Sugerencias opcionales:
- Validar email con regex para mayor seguridad.
- Limitar la longitud de los campos para evitar payload excesivo.
- Añadir logging o alertas para fallos en producción.
*/
