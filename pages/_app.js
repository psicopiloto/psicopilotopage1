import "../styles/globals.css";
import CookiesBanner from "../components/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config"; 
import BackgroundLogo from "../components/BackgroundLogo"; 
import WhatsAppButton from "../components/WhatsAppButton"; // 👈 nuevo import

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Configuración SEO global */}
      <DefaultSeo {...SEO} />

      {/* Contenedor principal con el background */}
      <div className="relative min-h-screen">
        <BackgroundLogo /> {/* 👈 Logo fijo en el fondo */}
        <div className="relative z-10">
          <Component {...pageProps} />
          <CookiesBanner />
          <WhatsAppButton /> {/* 👈 Botón flotante en todas las páginas */}
        </div>
      </div>
    </>
  );
}

export default MyApp;
