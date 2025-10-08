import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Image from "next/image";
// 🛑 No hay import Head from 'next/head'; (¡Correcto! No genera conflicto.)

export default function AvisoLegal() {
  const secciones = [
    { id: "titular", label: "Titular de la web" },
    { id: "objeto", label: "Objeto" },
    { id: "proteccion-datos", label: "Protección de datos personales" },
    { id: "derechos", label: "Derechos de los usuarios" },
    { id: "propiedad", label: "Propiedad intelectual" },
    { id: "cookies", label: "Cookies" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Aviso Legal y Política de Privacidad | Psicopiloto"
        description="Aviso Legal y Política de Privacidad de Psicopiloto. Psicólogo online y presencial en Granada."
        canonical="https://psicopiloto.com/aviso-legal"
      />

      <Nav />

      <main className="flex-grow pt-16">
        <section className="max-w-4xl mx-auto px-6 py-12 text-psicopiloto-gray-700">
          {/* Logo centrado */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.webp"
              alt="Psicopiloto"
              width={150}
              height={50}
            />
          </div>

          <h1 className="text-3xl font-bold mb-6 text-center">Aviso Legal y Política de Privacidad</h1>

          {/* Índice interno */}
          <nav className="mb-8 bg-white/80 p-4 rounded-lg shadow-sm">
            <ul className="space-y-2">
              {secciones.map((sec) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className="text-psicopiloto-green-600 hover:underline">
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section id="titular" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Titular de la web</h2>
            <p>
              <strong>Nombre:</strong> Jose Carlos Rodríguez Retamar <br />
              <strong>Teléfono:</strong> 676 230 537 <br />
              <strong>Correo electrónico:</strong> joseretamar@psicopiloto.com <br />
              <strong>Dirección:</strong> Calle Ejemplo nº 123, Granada <br />
            </p>
          </section>

          <section id="objeto" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Objeto</h2>
            <p>
              La presente página web tiene por objeto ofrecer información sobre los servicios de psicología de Psicopiloto y permitir la toma de contacto con el titular.
            </p>
          </section>

          <section id="proteccion-datos" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Protección de datos personales</h2>
            <p>
              Los datos que facilites a través de los formularios de contacto serán tratados de forma confidencial y con la finalidad exclusiva de responder a tus consultas o prestarte los servicios solicitados. 
              Se aplicarán las medidas técnicas y organizativas necesarias para garantizar su seguridad.
            </p>
          </section>

          <section id="derechos" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Derechos de los usuarios</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos contactando con el titular mediante los datos proporcionados anteriormente.
            </p>
          </section>

          <section id="propiedad" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Propiedad intelectual</h2>
            <p>
              Todos los contenidos, textos, imágenes, logotipos y elementos de esta web son propiedad de Psicopiloto o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
            </p>
          </section>

          <section id="cookies" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Cookies</h2>
            <p>
              Esta web utiliza cookies propias y de terceros únicamente con fines analíticos y funcionales. Puedes gestionar tus preferencias mediante el aviso de cookies que se muestra al acceder.
            </p>
          </section>

          <p className="mt-6 text-sm text-psicopiloto-gray-500">
            Última actualización: septiembre 2025.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
