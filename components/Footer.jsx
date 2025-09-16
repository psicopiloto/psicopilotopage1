export default function Footer(){
  return (
    <footer className="mt-16 py-8 bg-gray-50">
      <div className="container text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Psicopiloto. Todos los derechos reservados.
      </div>
    </footer>
  )
}

