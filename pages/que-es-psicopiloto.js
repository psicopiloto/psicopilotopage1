import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function QueEs(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav/>
      <main className="flex-grow pt-16">
        <section className="py-20 bg-white">
          <div className="container">
            <h1 className="text-3xl font-bold mb-4">Qué es Psicopiloto</h1>
            <p className="text-gray-700 mb-4">Psicopiloto nace de la combinación de dos trayectorias: la aviación y la psicología. Mi intención es acompañarte como un copiloto: en momentos de incertidumbre o estrés, ofrezco herramientas prácticas para recuperar el control.</p>
            <p className="text-gray-700 mb-4">Trabajo desde la psicología integradora, con especial formación en EMDR e intervención en trauma; y con experiencia clínica en ansiedad, depresión, problemas de apego y dificultades emocionales comunes.</p>
            <p className="text-gray-700">Además, como instructor y facilitador con años de experiencia en gestión de equipos y factores humanos, traigo un enfoque práctico orientado a la seguridad y el rendimiento.</p>
            <div className="mt-6">
              <Link href="/sobre-mi"><span className="px-5 py-3 bg-softorange-500 text-white rounded-lg">Conóceme</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

