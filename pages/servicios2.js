import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      <main className="flex-grow py-16 container mx-auto max-w-5xl">
        <Tabs defaultValue="personas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-white shadow rounded-lg">
            <TabsTrigger value="personas" className="data-[state=active]:bg-psicopiloto-green-100">
              Para Ti
            </TabsTrigger>
            <TabsTrigger value="empresas" className="data-[state=active]:bg-psicopiloto-blue-100">
              Para Empresas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personas">
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
          </TabsContent>

          <TabsContent value="empresas">
            <div className="grid md:grid-cols-2 gap-8">
              {serviciosEmpresas.map((s, i) => (
                <div key={i} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-xl mb-2 text-psicopiloto-blue-600">{s.title}</h3>
                  <p className="mb-4">{s.desc}</p>
                  <p className="mb-4">{s.extra}</p>
                  <AnimatedCTA href="/contacto" text={s.cta} color={s.color} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
