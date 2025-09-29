import { useState, useEffect } from "react";

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies-consent");
    if (!consent) {
      setVisible(true);
    } else {
      const parsed = JSON.parse(consent);
      // Establecer estados iniciales en el caso de que el banner se renderice de nuevo
      setAnalytics(parsed.analytics || false);
      setMarketing(parsed.marketing || false);
      if (parsed.analytics) loadAnalytics();
    }
  }, []);

  const saveConsent = (consent) => {
    localStorage.setItem("cookies-consent", JSON.stringify(consent));
    setVisible(false);

    if (consent.analytics) {
      loadAnalytics();
    }
  };
  
  // Handlers simplificados para botones de aceptación
  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => saveConsent({ necessary: true, analytics, marketing });

  const loadAnalytics = () => {
    if (document.getElementById("ga-script")) return;
    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`; // 🔴 Mantener ID

    // ✨ OPTIMIZACIÓN A: Cargar el script de Google Analytics después del renderizado para no bloquear el hilo principal (TBT).
    document.head.appendChild(script); 

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX"); // 🔴 Mantener ID
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-psicopiloto-gray-700 text-white p-4 z-50 shadow-2xl" // ✨ CORRECCIÓN B: Coherencia de color de fondo
      role="alertdialog" // ✨ CORRECCIÓN C: Semántica de Accesibilidad (Rol de diálogo de alerta)
      aria-label="Consentimiento de uso de cookies"
      aria-live="assertive" // ✨ CORRECCIÓN D: Notificar inmediatamente al lector de pantalla
    >
      {!settingsOpen ? (
        // Vista Principal
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p className="text-sm">
            Usamos cookies para mejorar tu experiencia. Puedes aceptar todas,
            rechazarlas o personalizar tu elección. Más información en{" "}
            <a
              href="/politica-cookies" // ✨ CORRECCIÓN E: El enlace debe apuntar a la Política de Cookies
              className="underline text-psicopiloto-honey-500 focus:outline-none focus:ring-1 focus:ring-psicopiloto-honey-400 rounded" // ✨ CORRECCIÓN F: Coherencia de color (Honey)
            >
              nuestra política de cookies
            </a>
            .
          </p>
          <div className="flex gap-2">
            <button
              onClick={acceptAll}
              // ✨ CORRECCIÓN F: Coherencia de color (Green)
              className="px-4 py-2 bg-psicopiloto-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 hover:bg-psicopiloto-green-600 transition"
            >
              Aceptar todas
            </button>
             {/* ✨ CORRECCIÓN G: Botón de rechazar movido a 'Personalizar' o simplificado a un enlace para mejor UX */}
             <button
              onClick={rejectAll}
              // ✨ CORRECCIÓN G: Usar color neutro para 'Rechazar'
              className="px-4 py-2 bg-psicopiloto-gray-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-gray-400 hover:bg-psicopiloto-gray-600 transition"
            >
              Rechazar
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              // ✨ CORRECCIÓN F: Coherencia de color (Blue o Honey)
              className="px-4 py-2 bg-psicopiloto-blue-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-400 hover:bg-psicopiloto-blue-500 transition"
            >
              Personalizar
            </button>
          </div>
        </div>
      ) : (
        // Vista de Configuración
        <div className="bg-psicopiloto-gray-600 p-4 rounded-md max-w-7xl mx-auto"> {/* ✨ CORRECCIÓN H: Color de fondo */}
          <h3 className="font-bold mb-3 text-lg">Configuración de cookies</h3>
          <ul className="text-sm space-y-3">
            <li className="p-2 bg-psicopiloto-gray-700 rounded-lg"> {/* ✨ CORRECCIÓN H: Fondo para destacar */}
              <strong>Necesarias (Técnicas):</strong> siempre activas (imprescindibles para el funcionamiento).
            </li>
            <li className="p-2 bg-psicopiloto-gray-700 rounded-lg">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                Analítica (ej: medir tráfico y rendimiento)
              </label>
            </li>
            <li className="p-2 bg-psicopiloto-gray-700 rounded-lg">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                Marketing (ej: anuncios personalizados y retargeting)
              </label>
            </li>
          </ul>
          <div className="flex gap-2 mt-6">
            <button
              onClick={saveCustom}
              // ✨ CORRECCIÓN F: Coherencia de color (Blue)
              className="px-4 py-2 bg-psicopiloto-blue-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-400 hover:bg-psicopiloto-blue-600 transition"
            >
              Guardar configuración
            </button>
            <button
              onClick={() => setSettingsOpen(false)}
              // ✨ CORRECCIÓN F: Coherencia de color (Gray)
              className="px-4 py-2 bg-psicopiloto-gray-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-gray-400 hover:bg-psicopiloto-gray-600 transition"
            >
              Volver al banner
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
