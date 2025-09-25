import Link from "next/link";

export default function Start529() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Start a 529 Plan</h1>
      <p className="text-gray-300 mb-4">
        Here you can begin setting up a 529 college savings plan. We’ll guide you through the steps.
      </p>
      <Link href="/" className="text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}
