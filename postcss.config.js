module.exports = {
  plugins: {
    // TailwindCSS configurado para purgar correctamente CSS no usado
    tailwindcss: {},
    autoprefixer: {},
    // PostCSS Nested para poder usar anidamiento de estilos tipo SCSS
    'postcss-nested': {},
    // Opcional: PostCSS Import para importar CSS desde otros archivos
    'postcss-import': {},
  },
}
// Comentarios opcionales:
// - Se agregó 'postcss-nested' para soporte de anidamiento de estilos, mejorando consistencia visual.
// - Se agregó 'postcss-import' para facilitar modularización de CSS.
// - No afecta la estructura actual ni genera conflictos con Tailwind o autoprefixer.
