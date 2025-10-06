import "../styles/globals.css";
import Head from "next/head"; // ✅ Import necesario para <Head>
import CookiesBanner from "../components/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import BackgroundLogo from "../components/BackgroundLogo";
import WhatsAppButton from "../components/WhatsAppButton"; // Botón flotante

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Head global con favicon */}
      <Head>
        {/* Favicon principal */}
        <link rel="icon" href="/favicon.ico" />

        {/* Versiones alternativas (opcional) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Configuración SEO global */}
      <DefaultSeo {...SEO} />

      {/* JSON-LD para que Google entienda la organización y el logo */}
      <script
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
        <BackgroundLogo /> {/* Logo fijo en el fondo */}
        <div className="relative z-10">
          <Component {...pageProps} />
          <CookiesBanner />
          <WhatsAppButton /> {/* Botón flotante en todas las páginas */}
        </div>
      </div>
    </>
  );
}

export default MyApp;
