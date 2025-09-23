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

  const loadAnalytics = () => {
    if (document.getElementById("ga-script")) return; // evitar duplicados
    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`; // 🔴 Sustituye G-XXXXXXX por tu ID de GA4
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX"); // 🔴 Sustituye G-XXXXXXX por tu ID de GA4
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg"
      role="region"
      aria-label="Banner de cookies"
    >
      {!settingsOpen ? (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Usamos cookies para mejorar tu experiencia. Puedes aceptar todas,
            rechazarlas o personalizar tu elección. Más información en{" "}
            <a
              href="/aviso-legal"
              className="underline text-softorange-400 focus:outline-none focus:ring-1 focus:ring-softorange-400 rounded"
            >
              nuestra política de cookies
            </a>
            .
          </p>
          <div className="flex gap-2">
            <button
              onClick={() =>
                saveConsent({ necessary: true, analytics: true, marketing: true })
              }
              className="px-4 py-2 bg-green-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Aceptar todas
            </button>
            <button
              onClick={() =>
                saveConsent({ necessary: true, analytics: false, marketing: false })
              }
              className="px-4 py-2 bg-red-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Rechazar todas
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              className="px-4 py-2 bg-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Personalizar
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-700 p-4 rounded-md">
          <h3 className="font-semibold mb-2">Configuración de cookies</h3>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Necesarias:</strong> siempre activas (imprescindibles para
              el funcionamiento).
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                Analítica (ej: estadísticas de uso)
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                Marketing (ej: anuncios personalizados)
              </label>
            </li>
          </ul>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() =>
                saveConsent({ necessary: true, analytics, marketing })
              }
              className="px-4 py-2 bg-blue-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Guardar configuración
            </button>
            <button
              onClick={() => setSettingsOpen(false)}
              className="px-4 py-2 bg-gray-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
