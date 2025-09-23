import Link from "next/link";

export default function AnimatedCTA({ href, text, color = "green", className = "" }) {
  const colors = {
    green: "bg-psicopiloto-green-500 hover:bg-psicopiloto-green-600 focus:ring-psicopiloto-green-400",
    blue: "bg-psicopiloto-blue-500 hover:bg-psicopiloto-blue-600 focus:ring-psicopiloto-blue-400"
  };

  return (
    <Link href={href}>
      <a
        className={`inline-block px-6 py-3 text-white rounded-xl text-lg font-semibold shadow transform transition-transform duration-300 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors[color]} ${className}`}
      >
        {text}
      </a>
    </Link>
  );
}
