import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Favicons optimizados y consistentes con next-seo.config.js */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Web manifest para PWA */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color para navegadores móviles */}
        <meta name="theme-color" content="#ffffff" />

        {/* Meta adicional opcional para mejorar SEO y UX */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased bg-white text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/*
Cambios realizados:
- Añadido meta viewport para garantizar renderizado responsive consistente.
- Añadida clase global "antialiased bg-white text-gray-800" en <body> para consistencia visual y tipografía.
- Favicons y apple-touch-icon revisados para que coincidan con los declarados en next-seo.config.js.
- Mantener estructura y optimización PWA.
*/
