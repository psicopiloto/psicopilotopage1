// pages/colores.js
export default function Colores() {
  const palette = [
    { name: "Green (CTA)", color: "bg-psicopiloto-green-500" },
    { name: "Green Hover", color: "bg-psicopiloto-green-600" },
    { name: "Blue (Secundario)", color: "bg-psicopiloto-blue-500" },
    { name: "Blue Hover", color: "bg-psicopiloto-blue-600" },
    { name: "Sand (Fondo)", color: "bg-psicopiloto-sand-50" },
    { name: "Gray Texto", color: "bg-psicopiloto-gray-700" },
    { name: "Gray Secundario", color: "bg-psicopiloto-gray-500" },
    { name: "Honey (Acento)", color: "bg-psicopiloto-honey-500" },
    { name: "Honey Hover", color: "bg-psicopiloto-honey-600" },
    { name: "Peach (Detalle)", color: "bg-psicopiloto-peach-500" },
  ]

  return (
    <div className="min-h-screen bg-psicopiloto-sand-50 font-sans p-8">
      <h1 className="text-3xl font-bold text-psicopiloto-gray-700 mb-8">
        Paleta de Colores Psicopiloto
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {palette.map((c) => (
          <div
            key={c.name}
            className="rounded-xl shadow-md overflow-hidden border border-psicopiloto-gray-500/20"
          >
            <div className={`h-24 ${c.color}`} />
            <div className="p-4">
              <p className="font-medium text-psicopiloto-gray-700">{c.name}</p>
              <code className="text-sm text-psicopiloto-gray-500">{c.color}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
