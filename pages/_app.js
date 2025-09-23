import "../styles/globals.css";
import CookiesBanner from "../components/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config"; // Configuración global de SEO

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Configuración SEO global */}
      <DefaultSeo {...SEO} />

      {/* Skip link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-gray-900 focus:px-2 focus:py-1 focus:rounded focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 z-50"
      >
        Saltar al contenido
      </a>

      {/* Render de la página actual */}
      <Component {...pageProps} />

      {/* Banner de cookies */}
      <CookiesBanner />
    </>
  );
}

export default MyApp;

/*
Cambios aplicados:
- Añadido "skip link" para mejorar accesibilidad y navegación por teclado/lectores de pantalla.

Sugerencias opcionales:
- Asegurarse de que cada página tenga un contenedor principal con id="main-content" para que el skip link funcione correctamente.
- Considerar envolver el layout principal en un <Layout> para centralizar header/footer y estructura de accesibilidad.
*/
