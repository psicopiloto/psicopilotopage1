// pages/blog/[slug].js
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { NextSeo } from 'next-seo';
import BackgroundLogo from '../../components/BackgroundLogo';
import AnimatedCTA from '../../components/AnimatedCTA';
import { getPostData, getAllPostSlugs } from '../../lib/posts';

// 🚀 CORRECCIÓN: Renderizado nativo y seguro con dangerouslySetInnerHTML (elimina html-react-parser y fallos de compilación)
const ArticleContent = ({ contentHtml }) => (
  <div 
    className="prose prose-lg max-w-none text-psicopiloto-gray-700 mx-auto"
    dangerouslySetInnerHTML={{ __html: contentHtml }}
  />
);

export default function Post({ postData }) {
  const { id, title, excerpt, dateDisplay, dateISO, author, contentHtml } = postData;
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title={`${title} | Blog Psicopiloto`}
        description={excerpt}
        canonical={`https://psicopiloto.com/blog/${id}`} 
        openGraph={{
          title: title,
          description: excerpt,
          type: 'article',
          article: {
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

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const dateObj = new Date(postData.date);
  let dateDisplay;
  let dateISO;

  if (isNaN(dateObj.getTime())) {
    const fallbackDate = new Date();
    dateDisplay = fallbackDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    dateISO = fallbackDate.toISOString();
  } else {
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
          dateDisplay, 
          dateISO,     
      },
    },
  };
}
