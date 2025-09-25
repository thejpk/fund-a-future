export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Fund a Future</h1>
      <p className="text-gray-300 mb-8">Invest in education. Empower the next generation.</p>
      <div className="space-x-4">
        <link href="/start" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Start a 529</link>
        <link href="/donate" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Donate</link>
        <link href="/login" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-800">Log In</link>
      </div>
    </main>
  );
}
