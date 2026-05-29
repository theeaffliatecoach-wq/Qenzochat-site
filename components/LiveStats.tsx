'use client'

import { useEffect, useState } from 'react'

export default function LiveStats() {

  const [users, setUsers] = useState(12482)
  const [paid, setPaid] = useState(284391)
  const [online, setOnline] = useState(892)

  useEffect(() => {

    const interval = setInterval(() => {

      setUsers(prev => prev + Math.floor(Math.random() * 12))

      setPaid(prev => prev + Math.floor(Math.random() * 450))

      setOnline(prev => {
        const change = Math.floor(Math.random() * 20)

        return Math.random() > 0.5
          ? prev + change
          : prev - change
      })

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="py-16 px-6 bg-gray-100 dark:bg-zinc-950 transition-colors duration-500">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Live Platform Activity
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { title: 'Registered Users', value: users.toLocaleString() },
            { title: 'Total Paid', value: `$${paid.toLocaleString()}` },
            { title: 'Users Online', value: online.toLocaleString() },
            { title: 'Success Rate', value: '92%' },
          ].map((item, index) => (

            <div
              key={index}
              className="
                p-6
                rounded-2xl
                bg-white
                dark:bg-zinc-900
                border
                border-gray-200
                dark:border-zinc-800
                shadow-xl
                text-center
                transition-all
                duration-500
              "
            >

              <h3 className="text-3xl font-bold text-green-500">
                {item.value}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}