import Link from "next/link"

export default function DevlogPage() {
  const logs = [

    {
      date: "2025-09-25",
      title: "Tuna",
      description: "I did not ate Tuna today",
    },
    {
      date: "2025-09-20",
      title: "Rice",
      description: "Rice is good, I love rice.",
    },

  ]

  return (
    <main className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">Devlog</h1>
      <p className="text-gray-600 mb-6">
        Testing the Dev Log page
      </p>
      <ul className="space-y-4">
        {logs.map((log, index) => (
          <li key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{log.title}</h2>
            <p className="text-sm text-gray-500">{log.date}</p>
            <p className="mt-2">{log.description}</p>
          </li>
        ))}
      </ul>

    </main>
  )
}