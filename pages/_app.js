import "../styles/globals.css";
import CookiesBanner from "../components/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config"; // 👈 este es tu archivo de config global

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Configuración SEO global */}
      <DefaultSeo {...SEO} />

      {/* Render de la página actual */}
      <Component {...pageProps} />

      {/* Banner de cookies */}
      <CookiesBanner />
    </>
  );
}

export default MyApp;
