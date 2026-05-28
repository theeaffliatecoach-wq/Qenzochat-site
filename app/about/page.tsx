import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">

        <h1 className="text-5xl font-bold mb-8 text-green-400">
          About QenzoChat
        </h1>

        <p className="text-lg text-gray-300 leading-8 mb-6">
          QenzoChat is a modern online chatting platform designed to connect people globally through engaging conversations and social interaction opportunities.
        </p>

        <p className="text-lg text-gray-300 leading-8 mb-10">
          Our mission is to create a smooth and enjoyable chatting experience while helping users discover new friendships, cultures, and online earning opportunities.
        </p>

        <Link
          href="/"
          className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl"
        >
          Back To Home
        </Link>

      </div>
    </main>
  )
}