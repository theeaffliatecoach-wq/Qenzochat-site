'use client'

import { useState } from 'react'

export default function EarningsCalculator() {

  const [messages, setMessages] = useState(50)

  const earnings = messages * 0.45

  return (

    <section className="py-24 bg-black text-white">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <h2 className="text-5xl font-bold mb-10 text-center">
            Earnings Calculator
          </h2>

          <div className="mb-8">

            <input
              type="range"
              min="10"
              max="1000"
              value={messages}
              onChange={(e) => setMessages(Number(e.target.value))}
              className="w-full"
            />

          </div>

          <div className="text-center">

            <h3 className="text-6xl font-bold text-green-400">
              ${earnings.toFixed(2)}
            </h3>

            <p className="text-gray-400 mt-4 text-xl">
              Estimated earnings from {messages} messages
            </p>

          </div>

        </div>

      </div>

        <a
  href="https://starhela.com/register.php?ref=ChatwithMula"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl"
>
  Join Us Now
</a>
    </section>



  )
}