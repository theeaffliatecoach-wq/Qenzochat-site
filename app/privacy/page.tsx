import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10 text-green-400 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-300 leading-8 text-lg">

          <p>
            QenzoChat values your privacy and is committed to protecting user information.
          </p>

          <p>
            We do not sell personal user data to third parties. Any information voluntarily shared by users is handled securely and responsibly.
          </p>

          <p>
            Users are responsible for maintaining the confidentiality of their conversations and interactions while using external platforms linked through QenzoChat.
          </p>

          <p>
            By using this platform, you agree to interact respectfully and responsibly with other users online.
          </p>

          <p>
            We may update this privacy policy occasionally to improve transparency and compliance.
          </p>

        </div>

        <div className="text-center mt-16">

          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl"
          >
            Back To Home
          </Link>

        </div>

      </div>

    </main>
  )
}