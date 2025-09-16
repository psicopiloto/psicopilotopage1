import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Servicios(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav/>
      <main className="flex-grow pt-16">
        <section className="py-16 bg-white">
          <div className="container">
            <h1 className="text-3xl font-bold mb-6">Servicios</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Terapia individual (online y presencial en Granada)</h3>
                <p className="text-gray-700">Tratamientos para ansiedad, estrés, depresión, trastornos de la conducta alimentaria, autoestima y problemas de apego.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Terapia de pareja</h3>
                <p className="text-gray-700">Mejora de la comunicación, resolución de conflictos y recuperación de la confianza.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Trauma y EMDR</h3>
                <p className="text-gray-700">Intervenciones centradas en la reparación y el procesamiento de experiencias traumáticas.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Psicología aeronáutica</h3>
                <p className="text-gray-700">Entrenamiento en toma de decisiones, gestión del estrés y factores humanos en aviación.</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contacto"><span className="px-5 py-3 bg-psicopiloto-600 text-white rounded-lg">Solicita información</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

