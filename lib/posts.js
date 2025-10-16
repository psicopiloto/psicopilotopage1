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
 * @param {string} id - El slug del archivo (ej: el-radar-de-la-vida)
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
 */
export function getAllPostSlugs() {
  // Asegúrate de que el directorio existe antes de leerlo
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  
  // Devuelve los slugs (nombres de archivo sin la extensión .md)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

/**
 * Obtiene los metadatos de todos los posts para el índice del blog (getStaticProps)
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

    // Ordena los posts por fecha (del más nuevo al más antiguo)
    return allPostsData.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) {
            return 1;
        } else {
            return -1;
        }
    });
}
