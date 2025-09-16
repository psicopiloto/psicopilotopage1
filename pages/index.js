import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <main className="flex-grow pt-16">
        <section className="relative h-[62vh] flex items-center" style={{backgroundImage: "/fotoinicio1.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="container mx-auto text-white z-10">
            <div className="bg-black/40 p-8 rounded-lg max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Tu copiloto en el viaje hacia el bienestar</h1>
              <p className="mb-6 text-lg">Si la ansiedad, el estrés o la tristeza hacen turbulento tu día a día, aquí tendrás un espacio para recuperar el control y encontrar herramientas prácticas.</p>
              <Link href="/contacto"><span className="inline-block px-6 py-3 rounded-lg bg-softorange-500 text-white">Reserva tu primera consulta</span></Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-4">¿Te sientes identificado?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <p>La ansiedad no te deja descansar o te genera pensamientos que no paran.</p>
              <p>Te cuesta concentrarte en el trabajo o los estudios.</p>
              <p>Te sientes agotado, sin motivación o con cambios de humor.</p>
              <p>Los conflictos de pareja te afectan emocionalmente.</p>
            </div>
            <div className="mt-6">
              <Link href="/servicios"><span className="px-5 py-3 bg-psicopiloto-500 text-white rounded-lg">Ver servicios</span></Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Terapia individual</h3>
              <p className="text-gray-600">Ansiedad, estrés, depresión, apego, autoestima y más.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">EMDR y trauma</h3>
              <p className="text-gray-600">Intervenciones específicas para procesar experiencias traumáticas.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Psicología aeronáutica</h3>
              <p className="text-gray-600">Gestión del estrés, fatiga y rendimiento para profesionales de la aviación.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

