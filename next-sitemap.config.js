/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.psicopiloto.com', // Tu dominio
  generateRobotsTxt: true,                // Genera automáticamente robots.txt
  outDir: './public',                     // Generar sitemap en la carpeta public/
  sitemapSize: 5000,                      // Número máximo de URLs por sitemap
  changefreq: 'weekly',                   // Frecuencia recomendada de cambios
  priority: 0.7,                          // Prioridad general
  exclude: ['/aviso-legal', '/politica-cookies'] // Páginas que no quieres indexar
};
