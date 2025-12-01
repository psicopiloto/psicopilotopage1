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

    try {
        // 1. Convertimos la firma a un archivo de imagen
        const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
        const signatureBlob = dataURLtoBlob(signatureData);

        // 2. Usamos FormData para enviar archivos
        const formData = new FormData();
        
        formData.append("nombre", form.nombre);
        formData.append("email", form.email);
        formData.append("dni", form.dni);
        formData.append("telefono", form.telefono);
        formData.append("direccion", form.direccion);
        formData.append("cp", form.cp);
        formData.append("fecha", form.fecha);
        formData.append("documento", "Consentimiento Informado Psicopiloto");
        formData.append("_subject", `Nuevo Consentimiento Firmado: ${form.nombre}`);
        
        // ✨ AÑADIMOS EL CAMPO ANTI-SPAM (vacío)
        formData.append("_gotcha", "");

        // ✨ AÑADIMOS LA FIRMA COMO ARCHIVO ADJUNTO
        formData.append("firma_digital", signatureBlob, "firma_paciente.png");

        const res = await fetch("https://formspree.io/f/xzzjybkg", { 
            method: "POST",
            headers: { 
            "Accept": "application/json"
            },
            body: formData,
        });

        const data = await res.json(); // Leemos la respuesta de Formspree

        if (res.ok) {
            setStatus("✅ Documento enviado y procesado correctamente. Muchas gracias.");
            setForm({ nombre: "", email: "", dni: "", direccion: "", telefono: "", cp: "", fecha: new Date().toISOString().split("T")[0] });
            setAcepto(false);
            sigCanvas.current.clear();
        } else {
            // ✨ MEJORA: Mostramos el error específico que nos da Formspree
            console.error("Error Formspree:", data);
            if (data.error) {
                setStatus(`❌ Error: ${data.error}`);
            } else if (data.errors && data.errors.length > 0) {
                // A veces el error viene en una lista
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
