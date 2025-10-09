/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false
  },
  // 🚀 OPTIMIZACIÓN CRÍTICA (PageSpeed): Configuración de Webpack para reducir Polyfills antiguos (Evita JS Antiguo)
  // Esto ayuda al compilador a reducir el JavaScript sin usar.
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        // Ignora Polyfills y optimiza la carga de estilos
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      };
    }
    return config;
  },
};
module.exports = nextConfig
