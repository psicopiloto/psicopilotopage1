// components/CookiesBanner.js

import { useState, useEffect } from "react";
// 🚀 Usamos Script de Next.js para carga optimizada
import Script from "next/script"; 

// ID de Google Analytics (CRÍTICO: REEMPLAZAR con tu ID, ej: G-XXXXXXXXX)
const GA_TRACKING_ID = "G-WRQSWV9QHZ";

// Función de bloqueo preventivo de Google Analytics (GDPR)
const disableAnalytics = () => {
  if (typeof window !== "undefined") {
    // Mecanismo de Google: bloquea la carga/recolección
    window[`ga-disable-${GA_TRACKING_ID}`] = true;
    console.log(`[CookiesBanner] Google Analytics (${GA_TRACKING_ID}) bloqueado preventivamente.`);
  }
};

// Función para cargar y activar el script de GA tras el consentimiento
const enableAnalytics = () => {
  if (typeof window !== "undefined") {
    // 1. Desbloquear GA
    window[`ga-disable-${GA_TRACKING_ID}`] = false;

    // 2. Inicializar datalayer (si no existe) y la función gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    // 3. Cargar la configuración (esto inicia la recolección de datos)
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      'anonymize_ip': true // Anonimiza la IP por defecto (buena práctica de RGPD)
    });
    console.log(`[CookiesBanner] Google Analytics (${GA_TRACKING_ID}) habilitado.`);
  }
};

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // 1. Aplicar bloqueo preventivo al inicio, antes de cualquier render o script externo.
    disableAnalytics();
    
    const consent = localStorage.getItem("cookies-consent");
    
    if (!consent) {
      // 2. Si no hay consentimiento, mostrar banner
      setVisible(true);
    } else {
      // 3. Si hay consentimiento previo, restaurar estados y activar si procede
      const parsed = JSON.parse(consent);
      setAnalytics(parsed.analytics || false);
      setMarketing(parsed.marketing || false);
      
      if (parsed.analytics) {
        // Si ya aceptó analytics previamente, lo activamos
        enableAnalytics(); 
      }
    }
  }, []);

  const saveConsent = (consent) => {
    localStorage.setItem("cookies-consent", JSON.stringify(consent));
    setVisible(false);

    if (consent.analytics) {
      enableAnalytics();
    } else {
      // Si rechaza o guarda sin analytics, nos aseguramos de que esté bloqueado
      disableAnalytics(); 
    }
  };

  // Handlers
  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => saveConsent({ necessary: true, analytics, marketing });

  // Se cargan los scripts de GA. Se cargan SIEMPRE (para que estén disponibles), 
  // pero la recolección de datos SOLO se activa con enableAnalytics (tras el consentimiento)
  return (
    <>
      <Script
        strategy="lazyOnload" // Carga el script de forma optimizada
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      
      {/* Script inline para definir gtag y dataLayer si no lo hace el script anterior a tiempo */}
      <Script id="google-analytics-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        `}
      </Script>

      {/* RENDERIZADO DEL BANNER */}
      {visible && (
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
              <div className="flex gap-2 flex-wrap justify-center">
                {/* BOTÓN ACEPTAR TODAS (Verde Corporativo) */}
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-psicopiloto-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 hover:bg-psicopiloto-green-600 transition font-medium"
                >
                  Aceptar todas
                </button>
                {/* BOTÓN RECHAZAR (Verde Corporativo - Igualdad visual) */}
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 bg-psicopiloto-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 hover:bg-psicopiloto-green-600 transition font-medium"
                >
                  Rechazar
                </button>
                {/* BOTÓN PERSONALIZAR (Verde Corporativo - Igualdad visual) */}
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="px-4 py-2 bg-psicopiloto-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 hover:bg-psicopiloto-green-600 transition font-medium"
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
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="accent-psicopiloto-green-500"
                    />
                    Analítica (ej: medir tráfico y rendimiento)
                  </label>
                </li>
                <li className="p-2 bg-psicopiloto-gray-700 rounded-lg">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="accent-psicopiloto-green-500"
                    />
                    Marketing (ej: anuncios personalizados y retargeting)
                  </label>
                </li>
              </ul>
              <div className="flex gap-2 mt-6 justify-end">
                {/* BOTÓN VOLVER (Gris neutro, acción secundaria) */}
                <button
                  onClick={() => setSettingsOpen(false)}
                  className="px-4 py-2 bg-psicopiloto-gray-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-gray-400 hover:bg-psicopiloto-gray-400 transition"
                >
                  Volver
                </button>
                {/* BOTÓN GUARDAR (Verde Corporativo, acción principal) */}
                <button
                  onClick={saveCustom}
                  className="px-4 py-2 bg-psicopiloto-green-500 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-psicopiloto-green-400 hover:bg-psicopiloto-green-600 transition font-medium"
                >
                  Guardar configuración
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
