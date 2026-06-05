'use client'

import { useEffect, useState } from 'react'

export default function LiveStats() {
  const [users, setUsers] = useState(12842)
  const [paid, setPaid] = useState(48291)
  const [chats, setChats] = useState(3428)
  const [rate, setRate] = useState(92)

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev + Math.floor(Math.random() * 10))
      setPaid(prev => prev + Math.floor(Math.random() * 200))
      setChats(prev => prev + Math.floor(Math.random() * 25 - 10))

      setRate(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.min(99, Math.max(80, prev + change))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const Card = ({
    title,
    value,
    color,
  }: {
    title: string
    value: string | number
    color?: string
  }) => (
    <div
      className="
        rounded-2xl
        p-6
        text-center
        bg-white/80 dark:bg-zinc-900
        border border-gray-200 dark:border-zinc-800
        shadow-lg
        transition-all duration-500
      "
    >
      <h3 className={`text-3xl font-bold ${color || 'text-green-500'}`}>
        {value}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mt-2">
        {title}
      </p>
    </div>
  )

  return (
   <section className="py-16 px-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="p-6 rounded-2xl bg-gray-100 dark:bg-zinc-900 shadow-xl text-center transition-colors duration-500">

        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white transition-colors duration-500">
          Live Platform Activity
        </h2>

        <div className="p-6 rounded-2xl bg-gray-100 dark:bg-zinc-900 shadow-xl text-center transition-colors duration-500">

          <Card title="Registered Users" value={users.toLocaleString()} />
          <Card title="Total Paid" value={`$${paid.toLocaleString()}`} />
          <Card title="Chats Today" value={chats.toLocaleString()} />
          <Card title="Success Rate" value={`${rate}%`} color="text-emerald-400" />

        </div>
      </div>
    </section>
  )
}