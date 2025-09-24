import Link from "next/link";

export default function AnimatedCTA({ href, text, color = "green", className = "" }) {
  const colors = {
    green: "bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 focus:ring-psicopiloto-green-400",
    blue: "bg-psicopiloto-blue-500 hover:bg-psicopiloto-blue-600 focus:ring-psicopiloto-blue-400"
  };

  return (
    <Link href={href} passHref>
      <a
        className={`inline-block px-8 py-4 text-xl md:text-2xl text-white rounded-2xl font-bold shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors[color]} ${className}`}
        role="button"
        aria-label={text}
      >
        {text}
      </a>
    </Link>
  );
}
