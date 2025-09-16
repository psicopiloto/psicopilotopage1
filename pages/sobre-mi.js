import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function SobreMi(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav/>
      <main className="flex-grow pt-16">
        <section className="py-16 bg-white">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
              <p className="text-gray-700 mb-3">Soy psicólogo con Habilitación Sanitaria (Colegiado M-30360), piloto militar con más de 18 años de experiencia y docente en programas de experto en Psicología Aeronáutica.</p>
              <p className="text-gray-700 mb-3">He sido jefe de la sección de CRM, instructor de vuelo y facilitador de factores humanos en operaciones de alto riesgo. En consulta trabajo con un enfoque integrador, con especial formación en EMDR y trauma, y experiencia en ansiedad, depresión y conflictos relacionales.</p>
              <p className="text-gray-700">Mi trayectoria de voluntariado y trabajo social (acompañamiento a personas mayores, apoyo en ONG) también forma parte importante de mi práctica clínica y del enfoque humano de Psicopiloto. Además soy profesor en programas de experto y tutor de TFG/TFE en Psicología Aeronáutica.</p>
              <div className="mt-6">
                <Link href="/contacto"><span className="px-5 py-3 bg-softorange-500 text-white rounded-lg">Reservar sesión</span></Link>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" alt="Sobre mi" className="rounded-lg shadow-md"/>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

