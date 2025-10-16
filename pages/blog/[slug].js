// pages/blog/[slug].js

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { NextSeo } from 'next-seo';
import BackgroundLogo from '../../components/BackgroundLogo';
import AnimatedCTA from '../../components/AnimatedCTA';
import parse from 'html-react-parser'; 
import { getPostData, getAllPostSlugs } from '../../lib/posts';

// Componente para renderizar el HTML del Markdown, aplicando estilos Tailwind 'prose'
const ArticleContent = ({ contentHtml }) => (
  // El uso de 'prose' de Tailwind aplica automáticamente estilos de tipografía a h1, p, ul, ol, etc.
  <div className="prose prose-lg max-w-none text-psicopiloto-gray-700 mx-auto">
    {parse(contentHtml)}
  </div>
);

export default function Post({ postData }) {
  // Desestructuración de los metadatos y el contenido
  const { id, title, excerpt, date, author, contentHtml } = postData;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title={`${title} | Blog Psicopiloto`}
        description={excerpt}
        // Canonical URL crucial para el SEO
        canonical={`https://psicopiloto.com/blog/${id}`} 
        openGraph={{
          title: title,
          description: excerpt,
          type: 'article',
          article: {
            publishedTime: new Date(date).toISOString(),
            author: author,
          },
        }}
      />
      <BackgroundLogo />
      <Nav />
      
      <main className="flex-grow pt-24 relative z-10">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-psicopiloto-blue-900 leading-tight">
              {title}
            </h1>
            <p className="text-sm text-psicopiloto-gray-500 font-medium">
              {date} &middot; Por {author}
            </p>
            <div className="w-16 h-1 bg-psicopiloto-green-500 mx-auto mt-4 rounded"></div>
          </header>
          
          <ArticleContent contentHtml={contentHtml} />

          <div className="mt-16 pt-8 border-t border-psicopiloto-gray-300 text-center">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">
              ¿Listo para trazar un plan de vuelo para tu bienestar?
            </h2>
            <AnimatedCTA href="/contacto" text="Agenda tu primera consulta" color="green" />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

// Next.js: Generar los paths dinámicos (SSG)
export async function getStaticPaths() {
  const paths = getAllPostSlugs(); // Obtiene todos los slugs de la carpeta _posts
  return {
    paths,
    fallback: false, // Cualquier path que no se genere estáticamente resultará en 404
  };
}

// Next.js: Obtener los datos del post (SSG)
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  
  // Formatea la fecha para el componente React
  const formattedDate = new Date(postData.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return {
    props: {
      postData: {
          ...postData,
          date: formattedDate,
      },
    },
  };
}
