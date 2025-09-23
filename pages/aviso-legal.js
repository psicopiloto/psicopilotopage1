import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16" id="main">
        <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700">
          <h1 className="text-3xl font-bold mb-6">Aviso Legal y Política de Privacidad</h1>

          <p className="mb-4">
            En cumplimiento con lo establecido en la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Titular de la web</h2>
          <p className="mb-4">
            Nombre completo: Jose Carlos Rodríguez Retamar <br />
            NIF/CIF: XXXXXXXX <br />
            Dirección: Calle Ejemplo nº 123, Granada <br />
            Teléfono: <a href="tel:+34651435033" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">+34 651 435 033</a> <br />
            Email de contacto: <a href="mailto:joseretamar@psicopiloto.com" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">joseretamar@psicopiloto.com</a>
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Protección de datos</h2>
          <p className="mb-4">
            Los datos personales que proporciones a través de esta página web serán tratados de forma confidencial y conforme al Reglamento (UE) 2016/679 (RGPD). 
            Serán utilizados únicamente para responder a tus consultas o prestar los servicios solicitados.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
          <p className="mb-4">
            Esta web utiliza cookies propias y de terceros para fines analíticos y de funcionamiento. Puedes gestionar tus preferencias desde el aviso de cookies que aparece al acceder.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/*
Cambios realizados:
- Sustituidos datos de contacto por los reales: nombre, teléfono y email.
- Enlaces de teléfono y email con formato clicable (tel: y mailto:) y estilos de focus/hover consistentes.
- Añadido id="main" al <main> para que funcione un "skip link" en navegación accesible.
Sugerencia opcional:
- Completar NIF/CIF y dirección real si aplica.
- Incluir enlace a política de cookies en el texto para mayor UX y cumplimiento legal.
*/
