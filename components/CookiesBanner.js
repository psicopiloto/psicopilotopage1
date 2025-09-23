import { useState, useEffect } from "react";

const STORAGE_KEY = "cookies-consent-v1"; // cambiar versión si cambias estructura
const EXPIRY_DAYS = 365;

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [ariaMessage, setAriaMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(raw);
      const created = parsed?.ts ? new Date(parsed.ts) : null;
      const expired =
        !created ||
        (Date.now() - new Date(created).getTime()) / (1000 * 60 * 60 * 24) >
          EXPIRY_DAYS;

      if (expired) {
        localStorage.removeItem(STORAGE_KEY);
        setVisible(true);
        return;
      }

      setAnalytics(Boolean(parsed.analytics));
      setMarketing(Boolean(parsed.marketing));

      if (parsed.analytics) {
        loadAnalytics();
      }
    } catch (err) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (consent) => {
    if (typeof window === "undefined") return;

    const payload = { ...consent, ts: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {}

    setAriaMessage(
      consent.analytics
        ? "Has aceptado cookies de analítica y marketing según tu elección."
        : "Has guardado tu configuración de cookies."
    );

    if (consent.analytics) loadAnalytics();

    setSettingsOpen(false);
    setVisible(false);
  };

  const loadAnalytics = () => {
    if (typeof window === "undefined") return;
    if (document.getElementById("ga-script")) return;

    const GA_ID = "G-XXXXXXX"; // 🔴 REEMPLAZAR

    if (window.gtag && window.gtag.push) {
      try {
        window.gtag("config", GA_ID);
      } catch {}
      return;
    }

    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = window.gtag || gtag;
      window.gtag("js", new Date());
      window.gtag("config", GA_ID);
    };
    script.onerror = () => {
      console.warn("No se pudo cargar Google Analytics.");
    };
    document.head.appendChild(script);
  };

  const acceptAll = () =>
    saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    saveConsent({ necessary: true, analytics: false, marketing: false });

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg"
    >
      <span className="sr-only" aria-live="assertive">
        {ariaMessage}
      </span>

      {!settingsOpen ? (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm leading-relaxed max-w-prose">
            Usamos cookies para mejorar tu experiencia y analizar el uso del sitio.
            Puedes aceptar todas, rechazarlas o personalizar tu elección. Más información en{" "}
            <a
              href="/aviso-legal"
              className="underline hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.honey-500"
              aria-label="Leer política de cookies (abre en la misma pestaña)"
            >
              nuestra política de cookies
            </a>
            .
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={acceptAll}
              className="px-4 py-2 bg-psicopiloto.green-600 hover:bg-psicopiloto.green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.green-500 rounded-md text-sm"
              aria-label="Aceptar todas las cookies"
            >
              Aceptar todas
            </button>

            <button
              type="button"
              onClick={rejectAll}
              className="px-4 py-2 bg-psicopiloto.peach-500 hover:bg-psicopiloto.peach-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.peach-400 rounded-md text-sm"
              aria-label="Rechazar todas las cookies"
            >
              Rechazar todas
            </button>

            <button
              type="button"
              onClick={() => {
                setSettingsOpen(true);
                setAriaMessage("Abierta la configuración de cookies.");
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-md text-sm"
              aria-expanded={settingsOpen}
              aria-controls="cookie-settings"
            >
              Personalizar
            </button>
          </div>
        </div>
      ) : (
        <div
          id="cookie-settings"
          className="bg-gray-800 p-4 rounded-md"
          role="dialog"
          aria-modal="true"
          aria-label="Configuración de cookies"
        >
          <h3 className="font-semibold mb-2 text-base">Configuración de cookies</h3>

          <ul className="text-sm space-y-3">
            <li>
              <strong>Necesarias:</strong> siempre activas — imprescindibles para
              el funcionamiento del sitio.
            </li>

            <li>
              <label
                htmlFor="analytics-checkbox"
                className="flex items-center gap-3 cursor-pointer select-none"
              >
                <input
                  id="analytics-checkbox"
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="w-4 h-4 focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
                />
                <span>Analítica (estadísticas de uso, p. ej. Google Analytics)</span>
              </label>
            </li>

            <li>
              <label
                htmlFor="marketing-checkbox"
                className="flex items-center gap-3 cursor-pointer select-none"
              >
                <input
                  id="marketing-checkbox"
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="w-4 h-4 focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
                />
                <span>Marketing (anuncios personalizados)</span>
              </label>
            </li>
          </ul>

          <div className="flex gap-2 mt-4">
            <button
              type="button"
              onClick={() =>
                saveConsent({ necessary: true, analytics, marketing })
              }
              className="px-4 py-2 bg-psicopiloto.blue-600 hover:bg-psicopiloto.blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-psicopiloto.blue-500 rounded-md text-sm"
              aria-label="Guardar configuración de cookies"
            >
              Guardar configuración
            </button>

            <button
              type="button"
              onClick={() => {
                setSettingsOpen(false);
                setAriaMessage("Cerrada la configuración de cookies.");
              }}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-md text-sm"
              aria-label="Volver"
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Cambios realizados:
- Actualizados colores para que coincidan con paleta Tailwind personalizada (psicopiloto).
- Mejora de accesibilidad (focus-visible, roles, aria-labels).
- Conservada semántica y persistencia de consentimiento.
- Opcional: considerar uso de cookies SSR, enlace a gestión de cookies en footer.
*/
