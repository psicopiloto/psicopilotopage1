// pages/blog/index.js

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import Image from "next/image";
import BackgroundLogo from "../../components/BackgroundLogo";
import AnimatedCTA from "../../components/AnimatedCTA";
import Link from "next/link";
import { getSortedPostsData } from '../../lib/posts'; // 👈 Importar la función para obtener posts

export default function BlogIndex({ allPostsData }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700 relative">
      <NextSeo
        title="Blog Psicopiloto | Artículos de Psicología, Ansiedad, Trauma y Liderazgo"
        description="Lee los artículos de Jose Carlos Rguez. Retamar (Psicólogo con Habilitación Sanitaria) sobre cómo aplicar la mentalidad de piloto a la gestión de la ansiedad, el trauma y el bienestar personal."
        canonical="https://psicopiloto.com/blog"
      />

      <BackgroundLogo />
      <Nav />

      <main className="flex-grow pt-16 relative z-10">
        <section className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Encabezado Principal */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-psicopiloto-green-600 mb-4">
              Blog Psicopiloto
            </h1>
            <p className="text-xl text-psicopiloto-gray-700 max-w-3xl mx-auto">
              Guía práctica y resolutiva para pilotar tu vida: Ansiedad, trauma, EMDR y liderazgo con mentalidad de cabina.
            </p>
          </header>

          {/* Lista de Artículos (Index) */}
          <div className="space-y-12">
            {allPostsData.map(({ slug, title, date, excerpt, author, image }) => (
              <article 
                key={slug}
                className="bg-white/70 p-6 rounded-xl shadow-lg border-l-4 border-psicopiloto-blue-500 transition transform hover:shadow-xl hover:-translate-y-1"
              >
                {/* Usar la sintaxis moderna de Next.js Link */}
                <Link href={`/blog/${slug}`} className="block">
                  <div className="md:flex md:gap-6 items-start">
                    {/* Imagen de Preview */}
                    <div className="mb-4 md:mb-0 md:w-1/3 flex-none">
                      <Image
                        src={image}
                        alt={`Miniatura del artículo: ${title}`}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full h-auto"
                        loading="lazy" 
                      />
                    </div>
                    
                    {/* Contenido de la Preview */}
                    <div className="md:flex-grow">
                      <h2 className="text-3xl font-semibold text-psicopiloto-blue-900 hover:underline mb-2">
                        {title}
                      </h2>
                      <p className="text-sm text-psicopiloto-gray-500 mb-3">
                        {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} &middot; Por {author}
                      </p>
                      <p className="text-lg text-psicopiloto-gray-700 leading-relaxed">
                        {excerpt}
                      </p>
                      <span className="text-psicopiloto-green-600 font-semibold mt-4 inline-block">
                        Seguir leyendo →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Final */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-honey-500">
              ¿Listo para trazar tu propio plan de vuelo?
            </h2>
            <AnimatedCTA href="/contacto" text="Reserva tu primera consulta" color="green" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Next.js: Obtener los datos de todos los posts estáticamente
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
