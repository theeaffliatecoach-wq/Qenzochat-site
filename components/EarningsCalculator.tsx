'use client'

import { useState } from 'react'

export default function EarningsCalculator() {

  const [hours, setHours] = useState(2)

  const earnings = hours * 15

  return (
    <section className="py-16 px-6 bg-white dark:bg-black transition-colors duration-500">

      <div className="max-w-3xl mx-auto rounded-3xl p-10 shadow-2xl bg-gray-100 dark:bg-zinc-900">

        <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          Earnings Calculator
        </h2>

        <input
          type="range"
          min="1"
          max="12"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full"
        />

        <p className="mt-6 text-center text-lg text-gray-700 dark:text-gray-300">
          Hours per day: {hours}
        </p>

        <h3 className="text-5xl font-bold text-center mt-8 text-green-500">
          ${earnings}/day
        </h3>

      </div>
    </section>
  )
}