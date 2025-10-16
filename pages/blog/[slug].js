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
  // Desestructuración de los metadatos y el contenido (incluyendo las nuevas propiedades de fecha)
  const { id, title, excerpt, dateDisplay, dateISO, author, contentHtml } = postData;

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
            // ✨ CORRECCIÓN: Usa el string ISO pre-formateado para evitar RangeError
            publishedTime: dateISO, 
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
              {/* ✨ CORRECCIÓN: Usa la fecha formateada para mostrar */}
              {dateDisplay} &middot; Por {author}
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
  const paths = getAllPostSlugs(); 
  return {
    paths,
    fallback: false, 
  };
}

// Next.js: Obtener los datos del post (SSG)
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  
  // ===================================================================
  // ✨ CORRECCIÓN CRÍTICA: Manejo seguro de la fecha para evitar RangeError
  // ===================================================================
  
  const dateObj = new Date(postData.date);

  let dateDisplay;
  let dateISO;

  if (isNaN(dateObj.getTime())) {
    // Si la fecha no es válida, usamos la fecha actual o una fecha segura de reserva
    const fallbackDate = new Date();
    dateDisplay = fallbackDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    dateISO = fallbackDate.toISOString();
  } else {
    // Si la fecha es válida, la formateamos
    dateDisplay = dateObj.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    dateISO = dateObj.toISOString();
  }
  
  return {
    props: {
      postData: {
          ...postData,
          dateDisplay, // Fecha legible para el usuario
          dateISO,     // Fecha ISO para metadatos (crucial)
      },
    },
  };
}
