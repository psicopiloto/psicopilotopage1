import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* 🚀 OPTIMIZACIÓN: Preconexión para Google Fonts 🚀 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* 🚀 CORRECCIÓN DE ERROR: Carga segura de la fuente con 'display=swap' */}
        <link 
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" 
            rel="stylesheet"
        />
        
        {/* OPTIMIZACIÓN: Preconexión para Terceros */}
        <link rel="preconnect" href="https://www.gstatic.com" />
        <link rel="preconnect" href="https://www.google.com" />

        {/* Favicons y otros metadatos (Se mantienen) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#ffffff" />
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
