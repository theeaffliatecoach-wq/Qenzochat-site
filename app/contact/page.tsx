import Link from 'next/link'

export default function ContactPage() {

  const whatsappNumber = '254106520949'

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-2xl text-center">

        <h1 className="text-5xl font-bold mb-8 text-green-400">
          Contact Qenzo
        </h1>

        <p className="text-gray-300 text-lg mb-10 leading-8">
          Reach out to the QenzoChat support team anytime through WhatsApp for assistance, inquiries, or partnership opportunities.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 transition-all duration-300 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl mb-10"
        >
          Chat On WhatsApp
        </a>

        <div>
          <Link
            href="/"
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 rounded-2xl font-bold"
          >
            Back To Home
          </Link>
        </div>

      </div>

    </main>
  )
}