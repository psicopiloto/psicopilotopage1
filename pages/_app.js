import "../styles/globals.css";
// 🛑 Eliminamos: import Head from "next/head";
import Script from "next/script";
import CookiesBanner from "../components/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import BackgroundLogo from "../components/BackgroundLogo";
import WhatsAppButton from "../components/WhatsAppButton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* 🛑 BLOQUE <Head> NATIVO ELIMINADO PARA EVITAR CONFLICTO CON DefaultSeo 🛑 */}
      

      {/* ✅ Configuración SEO global (Ahora es el único que controla la cabecera) */}
      <DefaultSeo {...SEO} />

      {/* OPTIMIZACIÓN: Usar next/script para JSON-LD */}
      <Script
        id="schema-organization" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Psicopiloto",
            url: "https://www.psicopiloto.com",
            logo: "https://www.psicopiloto.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+34 676 230 537",
              contactType: "customer service",
              areaServed: "ES",
              availableLanguage: ["Spanish", "English"],
            },
            sameAs: [
              "https://www.facebook.com/psicopiloto",
              "https://www.instagram.com/psicopiloto",
              "https://www.linkedin.com/company/psicopiloto",
            ],
          }),
        }}
      />

      {/* Contenedor principal con background y elementos globales */}
      <div className="relative min-h-screen">
        <BackgroundLogo />
        <div className="relative z-10">
          <Component {...pageProps} />
          <CookiesBanner />
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}

export default MyApp;
