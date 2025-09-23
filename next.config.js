/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"], // Optimización automática en formatos modernos
    domains: ["www.psicopiloto.com"], // Ajustar si se usan imágenes externas adicionales
  },
  experimental: {
    appDir: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Limpieza de console.* en producción
  },
  poweredByHeader: false, // Mejora de seguridad eliminando el header "X-Powered-By"
  compress: true, // Activa compresión gzip/brotli
};

module.exports = nextConfig;

/*
Cambios aplicados y optimizaciones:
- Soporte AVIF/WebP para imágenes modernas y rendimiento.
- Dominio permitido configurado para imágenes externas.
- Eliminación de console.* en producción para código limpio.
- Header "X-Powered-By" deshabilitado por seguridad.
- Compresión activada para mejorar tiempos de carga.

Sugerencias opcionales:
- Configurar i18n si se va a soportar multi-idioma.
- Considerar swcMinify (ya activo por defecto en Next.js 13+) para minificación adicional.
- Revisar si se desea habilitar experimental: optimizeCss o fontLoaders para mejorar FCP.
*/
