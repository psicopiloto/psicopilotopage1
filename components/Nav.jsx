import Link from 'next/link'

export default function Nav(){ 
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur z-40 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="text-2xl font-semibold text-psicopiloto-700">Psicopiloto</div>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">Inicio</Link>
          <Link href="/que-es-psicopiloto">Qué es Psicopiloto</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/contacto">Contactar</Link>
        </nav>
        <div className="md:hidden">
          <Link href="/contacto"><span className="px-3 py-2 bg-softorange-500 text-white rounded-md">Contactar</span></Link>
        </div>
      </div>
    </header>
  )
}

