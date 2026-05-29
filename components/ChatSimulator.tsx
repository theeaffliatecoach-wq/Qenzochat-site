'use client'

import { useEffect, useState } from 'react'

const chats = [
  {
    user: 'Margaret USA',
    message: 'Hey 😊 how are you today?',
  },
  {
    user: 'Daniel Canada',
    message: 'Looking for someone friendly to chat with.',
  },
  {
    user: 'Sophia Germany',
    message: 'You seem interesting 👋',
  },
  {
    user: 'Robert UK',
    message: 'Anyone online tonight?',
  },
]

export default function ChatSimulator() {

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex(prev => (prev + 1) % chats.length)

    }, 4000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="py-24 bg-white dark:bg-black
text-black dark:text-white">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Live Chat Preview
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

          <div className="mb-6">

            <p className="text-green-400 font-bold mb-2">
              {chats[index].user}
            </p>

            <div className="bg-zinc-800 rounded-2xl p-5 inline-block max-w-lg">

              <p className="text-lg">
                {chats[index].message}
              </p>

            </div>

          </div>

          <div className="flex gap-2 mt-4">

            <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce delay-100" />
            <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce delay-200" />

          </div>

        </div>

      </div>

    </section>

  )
}