import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";

export default function Servicios() {
  const serviciosPersonas = [ /* ... tu array de personas ... */ ];
  const serviciosEmpresas = [ /* ... tu array de empresas ... */ ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Servicios de Psicología | Psicopiloto"
        description="Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas."
        canonical="https://psicopiloto.com/servicios"
      />

      <Nav />

      <PageHeader
        title="Servicios de Psicología"
        subtitle="Un espacio seguro para recuperar el equilibrio y afrontar tus retos con confianza. Si eres empresa, también te acompaño con formación en factores humanos, liderazgo y gestión de equipos inspirada en la aviación."
        backgroundImage="/header-servicios.webp"
      />

      {/* Servicios personas */}
      <main className="flex-grow pt-16">
        <section className="py-16 container mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-center text-psicopiloto-green-600 mb-12">
            Psicopiloto para Ti
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviciosPersonas.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">{s.title}</h3>
                <p className="mb-4">{s.desc}</p>
                <p className="mb-4">{s.extra}</p>
                <AnimatedCTA href="/contacto" text={s.cta} />
              </div>
            ))}
          </div>
        </section>

        {/* Hero final empresas */}
        <section
          className="relative bg-cover bg-center py-24 text-white"
          style={{ backgroundImage: "url('/equipo-aviacion.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">Psicopiloto para Empresas</h2>
            <p className="mb-6 text-lg">
              {serviciosEmpresas[0].desc} {serviciosEmpresas[0].extra}
            </p>
            <AnimatedCTA href="/contacto" text={serviciosEmpresas[0].cta} color="blue" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
