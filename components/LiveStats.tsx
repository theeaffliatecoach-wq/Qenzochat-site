'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LiveStats() {

  const [users, setUsers] = useState(12482)
  const [paid, setPaid] = useState(284391)
  const [online, setOnline] = useState(892)
  const [rating, setRating] = useState(4.9)

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

    <section className="py-24 bg-zinc-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Live Platform Activity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
          >

            <h3 className="text-5xl font-bold text-green-400">
              {users.toLocaleString()}+
            </h3>

            <p className="text-gray-400 mt-4">
              Registered Users
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
          >

            <h3 className="text-5xl font-bold text-yellow-400">
              ${paid.toLocaleString()}
            </h3>

            <p className="text-gray-400 mt-4">
              Paid Out
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
          >

            <h3 className="text-5xl font-bold text-blue-400">
              {online.toLocaleString()}
            </h3>

            <p className="text-gray-400 mt-4">
              Online Right Now
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
          >

            <h3 className="text-5xl font-bold text-pink-400">
              {rating}★
            </h3>

            <p className="text-gray-400 mt-4">
              Average Rating
            </p>

          </motion.div>

        </div>

      </div>

    </section>

  )
}