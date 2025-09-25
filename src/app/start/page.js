
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-12">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">🎓 Fund a Future</h1>
        <nav className="space-x-6">
          <a href="/start" className="hover:underline">Start a 529</a>
          <a href="/donate" className="hover:underline">Donate</a>
          <a href="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Log In</a>
        </nav>
      </header>

      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Give the Gift of Education</h2>
        <p className="text-lg mb-6">
          Saving for college shouldn’t be a solo journey. Start a 529 plan—and accept donations from friends and family.
        </p>
        <div className="space-x-4">
          <a href="/start" className="bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-600">Start a 529 Plan</a>
          <a href="/donate" className="bg-purple-500 px-6 py-3 rounded text-white hover:bg-purple-600">Donate to a Child</a>
        </div>
      </section>
    </main>
  );
}

