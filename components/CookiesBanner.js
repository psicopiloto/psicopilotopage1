import { useState, useEffect } from "react";
import Script from "next/script"; // ⬅️ IMPORTACIÓN CLAVE: Usamos el componente optimizado de Next.js

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false); // Cambiado a 'analyticsAllowed'
  const [marketingAllowed, setMarketingAllowed] = useState(false); // Cambiado a 'marketingAllowed'

  useEffect(() => {
    // 1. Inicializar estados basados en localStorage
    const consent = localStorage.getItem("cookies-consent");
    if (!consent) {
      setVisible(true);
    } else {
      const parsed = JSON.parse(consent);
      
      // Cargar estados
      setAnalyticsAllowed(parsed.analytics || false);
      setMarketingAllowed(parsed.marketing || false);
    }
  }, []);

  const saveConsent = (consent) => {
    localStorage.setItem("cookies-consent", JSON.stringify(consent));
    setVisible(false);
    
    // Actualizar estado para renderizar el script si se acepta
    setAnalyticsAllowed(consent.analytics);
    setMarketingAllowed(consent.marketing);
  };
  
  // Handlers simplificados para botones de aceptación
  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => saveConsent({ necessary: true, analytics: analyticsAllowed, marketing: marketingAllowed }); // Usar los estados del checkbox

  // 🛑 ELIMINADA LA FUNCIÓN loadAnalytics: Ahora usamos el componente <Script>

  if (!visible) return (
        <>
            {/* 🚀 OPTIMIZACIÓN: Carga diferida de Google Analytics 🚀 */}
            {/* El script solo se inyecta si el usuario lo permite */}
            {analyticsAllowed && (
                <Script
                    id="google-analytics"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} // ⚠️ Usa tu ID real
                    strategy="afterInteractive" // Carga después de que la página sea interactiva (mejora TBT)
                >
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXX', {
                            page_path: window.location.pathname,
                        });
                    `}
                </Script>
            )}
            {/* Aquí iría el Script de marketing, si tienes uno (ej. Facebook Pixel, si marketingAllowed es true) */}
        </>
    );

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-psicopiloto-gray-700 text-white p-4 z-50 shadow-2xl"
      role="alertdialog"
      aria-label="Consentimiento de uso de cookies"
      aria-live="assertive"
    >
      {!settingsOpen ? (
        // Vista Principal
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p className="text-sm">
            Usamos cookies para mejorar tu experiencia. Puedes aceptar todas,
            rechazarlas o personalizar tu elección. Más información en{" "}
            <a
              href="/politica-cookies"
              className="underline text-psicopiloto-honey-500 focus:outline-none focus:ring-1 focus:ring-psicopiloto-honey-400 rounded"
            >
              nuestra política de cookies
            </a>
            .
          </p>
          <div className="flex gap-2">
            <button
              onClick={acceptAll}
              className="px-4 py-2 bg-psicopiloto-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 hover:bg-psicopiloto-green-600 transition"
            >
              Aceptar todas
            </button>
            <button
              onClick={rejectAll}
              className="px-4 py-2 bg-psicopiloto-gray-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-gray-400 hover:bg-psicopiloto-gray-600 transition"
            >
              Rechazar
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              className="px-4 py-2 bg-psicopiloto-blue-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-400 hover:bg-psicopiloto-blue-500 transition"
            >
              Personalizar
            </button>
          </div>
        </div>
      ) : (
        // Vista de Configuración
        <div className="bg-psicopiloto-gray-600 p-4 rounded-md max-w-7xl mx-auto">
          <h3 className="font-bold mb-3 text-lg">Configuración de cookies</h3>
          <ul className="text-sm space-y-3">
            <li className="p-2 bg-psicopiloto-gray-700 rounded-lg">
              <strong>Necesarias (Técnicas):</strong> siempre activas (imprescindibles para el funcionamiento).
            </li>
            <li className="p-2 bg-psicopiloto-gray-700 rounded-lg">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={analyticsAllowed} // Usar el nuevo estado
                  onChange={(e) => setAnalyticsAllowed(e.target.checked)} // Usar el nuevo estado
                />
                Analítica (ej: medir tráfico y rendimiento)
              </label>
            </li>
            <li className="p-2 bg-psicopiloto-gray-700 rounded-lg">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={marketingAllowed} // Usar el nuevo estado
                  onChange={(e) => setMarketingAllowed(e.target.checked)} // Usar el nuevo estado
                />
                Marketing (ej: anuncios personalizados y retargeting)
              </label>
            </li>
          </ul>
          <div className="flex gap-2 mt-6">
            <button
              onClick={saveCustom}
              className="px-4 py-2 bg-psicopiloto-blue-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-blue-400 hover:bg-psicopiloto-blue-600 transition"
            >
              Guardar configuración
            </button>
            <button
              onClick={() => setSettingsOpen(false)}
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
