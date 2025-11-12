// lib/posts.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Ruta al directorio de posts, asumiendo que es '_posts' en la raíz
const postsDirectory = path.join(process.cwd(), '_posts');

/**
 * Obtiene la data y el contenido HTML de un post específico
 * NOTA: Esta función *no* filtra drafts para permitir el preview si se implementa una lógica de autenticación.
 * Sin embargo, si getStaticPaths no incluye el slug, la página no existirá públicamente.
 */
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Usa gray-matter para separar el frontmatter (metadatos) del contenido
  const matterResult = matter(fileContents);

  // Usa remark para convertir Markdown a HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combina la data y el HTML
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

/**
 * Devuelve una lista de todos los slugs de posts disponibles para getStaticPaths
 * ✨ CAMBIO: Ahora filtra posts que tengan 'draft: true' en su front matter.
 */
export function getAllPostSlugs() {
  // Asegúrate de que el directorio existe antes de leerlo
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
 
  // Filtra los borradores antes de mapear a slugs
  const publishedPosts = fileNames.filter((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    // Excluye si el campo draft está presente y es true
    return data.draft !== true; 
  });
  
  // Devuelve los slugs de los posts publicados
  return publishedPosts.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

/**
 * Obtiene los metadatos de todos los posts para el índice del blog (getStaticProps)
 * ✨ CAMBIO: Ahora filtra posts que tengan 'draft: true' en su front matter.
 */
export function getSortedPostsData() {
    // Asegúrate de que el directorio existe
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Simplemente extrae el frontmatter para la lista de posts
        const matterResult = matter(fileContents);

        return {
            slug,
            ...matterResult.data,
        };
    });

    // ✨ FILTRADO AQUÍ: Filtra los posts que son borradores.
    const publishedPostsData = allPostsData.filter(post => post.draft !== true);

    // Ordena los posts publicados por fecha (del más nuevo al más antiguo)
    return publishedPostsData.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) {
            return 1;
        } else {
            return -1;
        }
    });
}
