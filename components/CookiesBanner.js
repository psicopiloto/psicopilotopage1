// components/CookiesBanner.js
import { useState, useEffect } from "react";
import Script from "next/script"; 

const GA_TRACKING_ID = "G-WRQSWV9QHZ";

const disableAnalytics = () => {
  if (typeof window !== "undefined") {
    window[`ga-disable-${GA_TRACKING_ID}`] = true;
  }
};

const enableAnalytics = () => {
  if (typeof window !== "undefined") {
    window[`ga-disable-${GA_TRACKING_ID}`] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, { 'anonymize_ip': true });
  }
};

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    disableAnalytics();
    const consent = localStorage.getItem("cookies-consent");
    if (!consent) {
      setVisible(true);
    } else {
      const parsed = JSON.parse(consent);
      setAnalytics(parsed.analytics || false);
      setMarketing(parsed.marketing || false);
      if (parsed.analytics) {
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
      disableAnalytics(); 
    }
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => saveConsent({ necessary: true, analytics, marketing });

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script id="google-analytics-gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}`}
      </Script>

      {visible && (
        // 🚀 UX CORRECCIÓN: Forzado z-50 absoluto para evitar bloqueos visuales con menús y elementos flotantes
        <div
          className="fixed bottom-0 left-0 right-0 bg-psicopiloto-gray-700 text-white p-6 md:p-8 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-psicopiloto-gray-600"
          role="alertdialog"
          aria-label="Consentimiento de uso de cookies"
          aria-live="assertive"
        >
          {!settingsOpen ? (
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1400px] mx-auto">
              <div className="text-center lg:text-left lg:max-w-2xl">
                <h3 className="font-bold text-lg mb-2">Valoramos tu privacidad</h3>
                <p className="text-base text-gray-200 leading-relaxed">
                  Usamos cookies propias y de terceros para mejorar tu experiencia de navegación y analizar el tráfico. Puedes aceptar todas, rechazarlas o personalizar tu elección. Consulta nuestra{" "}
                  <a href="/politica-cookies" className="underline text-white hover:text-psicopiloto-green-400 font-medium">política de cookies</a>.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto min-w-max">
                <button onClick={acceptAll} className="w-full md:w-auto px-6 py-3 bg-psicopiloto-green-500 rounded-lg text-base font-bold hover:bg-psicopiloto-green-600 transition shadow-lg cursor-pointer">Aceptar todas</button>
                <button onClick={rejectAll} className="w-full md:w-auto px-6 py-3 bg-psicopiloto-green-500 rounded-lg text-base font-bold hover:bg-psicopiloto-green-600 transition shadow-lg cursor-pointer">Rechazar</button>
                <button onClick={() => setSettingsOpen(true)} className="w-full md:w-auto px-6 py-3 bg-psicopiloto-green-500 rounded-lg text-base font-bold hover:bg-psicopiloto-green-600 transition shadow-lg cursor-pointer">Personalizar</button>
              </div>
            </div>
          ) : (
            <div className="bg-psicopiloto-gray-600 p-6 md:p-8 rounded-xl max-w-4xl mx-auto shadow-2xl border border-psicopiloto-gray-500">
              <h3 className="font-bold mb-4 text-xl">Configuración de cookies</h3>
              <p className="mb-6 text-gray-300">Selecciona qué cookies deseas permitir:</p>
              <ul className="text-base space-y-4">
                <li className="p-4 bg-psicopiloto-gray-700 rounded-lg border border-psicopiloto-gray-500">
                  <div className="flex justify-between items-center">
                    <strong>Necesarias (Técnicas)</strong>
                    <span className="text-xs font-bold text-psicopiloto-green-400 bg-psicopiloto-green-900/30 px-2 py-1 rounded">SIEMPRE ACTIVAS</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Imprescindibles para que la web funcione correctamente.</p>
                </li>
                <li className="p-4 bg-psicopiloto-gray-700 rounded-lg border border-psicopiloto-gray-500">
                  <label className="flex items-start gap-3 cursor-pointer w-full">
                    <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1 w-5 h-5 accent-psicopiloto-green-500 cursor-pointer" />
                    <div>
                      <span className="font-bold block">Analítica</span>
                      <span className="text-sm text-gray-400">Nos ayuda a entender cómo usas la web para mejorarla (Google Analytics).</span>
                    </div>
                  </label>
                </li>
                <li className="p-4 bg-psicopiloto-gray-700 rounded-lg border border-psicopiloto-gray-500">
                  <label className="flex items-start gap-3 cursor-pointer w-full">
                    <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1 w-5 h-5 accent-psicopiloto-green-500 cursor-pointer" />
                    <div>
                      <span className="font-bold block">Marketing</span>
                      <span className="text-sm text-gray-400">Permite mostrarte publicidad personalizada según tus intereses.</span>
                    </div>
                  </label>
                </li>
              </ul>
              <div className="flex flex-col-reverse md:flex-row gap-3 mt-8 justify-end">
                <button onClick={() => setSettingsOpen(false)} className="w-full md:w-auto px-6 py-3 bg-transparent border border-gray-400 text-gray-300 rounded-lg text-base font-medium hover:bg-gray-700 hover:text-white transition cursor-pointer">Volver sin guardar</button>
                <button onClick={saveCustom} className="w-full md:w-auto px-8 py-3 bg-psicopiloto-green-500 rounded-lg text-base font-bold hover:bg-psicopiloto-green-600 transition shadow-lg cursor-pointer">Guardar mi selección</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
