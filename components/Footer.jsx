import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-gray-50 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 text-sm text-gray-600">
        {/* Marca */}
        <div className="font-semibold text-gray-800">
          © {new Date().getFullYear()} Psicopiloto
          <span className="align-super text-xs">®</span>. Todos los derechos
          reservados.
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://instagram.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-softorange-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-softorange-500"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com/in/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-softorange-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
