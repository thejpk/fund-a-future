
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#181C23] min-h-screen text-white font-sans p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Top Left */}
      <section className="bg-[#232733] rounded-xl p-8 flex flex-col justify-between">
        <header className="flex items-center justify-between mb-6">
          <span className="font-bold text-lg flex items-center gap-2">
            <span className="bg-blue-700 rounded-full w-6 h-6 inline-block"></span>
            Fund a Future
          </span>
          <span className="text-sm">Start a 529 Plan</span>
        </header>
        <div>
          <h1 className="text-3xl font-bold mb-4">Give the Gift of Education</h1>
          <p className="text-gray-300 mb-6">
            Saving for college shouldn’t be a solo journey. Start a 529 plan and accept donations from friends and family.
          </p>
          <div className="flex gap-4 mb-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Start a 529 Plan</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Donate to a Child's Fund</button>
          </div>
          <div className="text-blue-400 hover:underline cursor-pointer mb-4">Track Progress Together →</div>
        </div>
        <footer className="flex gap-8 text-gray-400 text-sm mt-6">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </footer>
      </section>

      {/* Top Right */}
      <section className="bg-[#232733] rounded-xl p-8 flex flex-col justify-between">
        <header className="flex items-center justify-between mb-6">
          <span className="font-bold text-lg flex items-center gap-2">
            <span className="bg-blue-700 rounded-full w-6 h-6 inline-block"></span>
            Fund a Future
          </span>
          <span className="text-sm">Log in</span>
        </header>
        <div>
          <h2 className="text-3xl font-bold mb-4">Start a 529 Plan for Your Child</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-6">
            <li>Tax free growth and withdrawals</li>
            <li>Flexible use for college, K-12; or student loans</li>
            <li>Minimal impact on financial aid</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Select Your State</button>
        </div>
      </section>

      {/* Bottom Left */}
      <section className="bg-[#232733] rounded-xl p-8 flex flex-col justify-between">
        <header className="flex items-center justify-between mb-6">
          <span className="font-bold text-lg flex items-center gap-2">
            <span className="bg-blue-700 rounded-full w-6 h-6 inline-block"></span>
            Fund a Future
          </span>
          <span className="text-sm">Log in</span>
        </header>
        <div>
          <h2 className="text-3xl font-bold mb-4">Give the Gift of Education</h2>
          <p className="text-gray-300 mb-6">
            Your contribution can help a child reach their dreams.
          </p>
          <input
            className="w-full mb-4 px-4 py-2 rounded-full bg-[#181C23] text-gray-200 border border-gray-700"
            placeholder="Search by name: location or occasion"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition mb-4">Find a Child to Support →</button>
          <div className="bg-[#181C23] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-700 rounded-full w-6 h-6 inline-block"></span>
              <span>Emma</span>
              <span className="text-xs text-gray-400">Age a. Dollus TX</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-700 rounded-full w-6 h-6 inline-block"></span>
              <span>Jayden</span>
              <span className="text-xs text-gray-400">Age 3. Atlanta GA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-700 rounded-full w-6 h-6 inline-block"></span>
              <span>Awa</span>
              <span className="text-xs text-gray-400">Age 3. Seattle WA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Right */}
      <section className="bg-[#232733] rounded-xl p-8 flex flex-col justify-between">
        <header className="flex items-center justify-between mb-6">
          <span className="font-bold text-lg flex items-center gap-2">
            <span className="bg-blue-700 rounded-full w-6 h-6 inline-block"></span>
            Fund a Future
          </span>
          <span className="text-sm">Log Out</span>
        </header>
        <div>
          <h2 className="text-3xl font-bold mb-2">Your Education Savings Dashboard</h2>
          <div className="text-gray-300 mb-2">Welcome: <span className="font-semibold">Sarah!</span></div>
          <div className="mb-4">
            <span className="text-gray-400">Total Saved:</span>
            <span className="text-2xl font-bold text-blue-400 ml-2">$3,200</span>
            <span className="text-gray-400 ml-2">of $10,000 goal</span>
          </div>
          <div className="flex gap-4 mb-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Invite Friends</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Update Story</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">Link 529 Provider →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

