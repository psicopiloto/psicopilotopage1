// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* ✨ MEJORA: Configuración de Favicon centralizada y completa */}

        {/* Favicon principal y tradicional (.ico) para máxima compatibilidad */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Favicons modernos en formato PNG para diferentes dispositivos */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />

        {/* Icono para dispositivos Apple (cuando se añade a la pantalla de inicio) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Manifiesto para Progressive Web App (PWA) */}
        {/* Nota: Asegúrate de tener un archivo 'site.webmanifest' en tu carpeta /public */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Color de la barra de navegación en móviles */}
        <meta name="theme-color" content="#ffffff" />

        {/* Metadatos esenciales (se mantienen) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
