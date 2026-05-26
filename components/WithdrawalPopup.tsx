'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const countries = [
  'Kenya',
  'Uganda',
  'Tanzania',
  'Nigeria',
  'South Africa',
  'Botswana',
  'Cameroon',
  'Ghana',
  'USA',
  'Canada',
  'Germany',
  'France',
  'UK',
  'DRC',
  'Rwanda',
  'Burundi',
  'Zimbabwe',
  'Namibia',
  'Zambia',
  'Malawi',
]

const methods = [
  'M-Pesa',
  'Airtel',
  'MTN',
  'PayPal',
  'Visa',
  'Stripe',
  'Binance',
]

const names = [
  'Brian',
  'Mercy',
  'John',
  'Faith',
  'Daniel',
  'Sarah',
  'Angela',
  'Kevin',
  'Linda',
  'Boitumelo',
  'Thabo',
  'Michael',
  'Sophia',
  'Emmanuel',
  'Robert',
  'Grace',
  'Esther',
  'Joseph',
  'David',
  'Samuel',
  'Blessing',
  'Nathan',
  'Olivia',
]

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function WithdrawalPopup() {

  const [popup, setPopup] = useState({
    name: '',
    country: '',
    amount: '',
    method: '',
    time: '',
  })

  useEffect(() => {

    const generatePopup = () => {

      const amount = Math.floor(Math.random() * 200) + 20

      const seconds = Math.floor(Math.random() * 8) + 1

      setPopup({
        name: randomItem(names),
        country: randomItem(countries),
        amount: `$${amount}`,
        method: randomItem(methods),
        time: `${seconds} seconds ago`,
      })

    }

    generatePopup()

    const interval = setInterval(generatePopup, 4500)

    return () => clearInterval(interval)

  }, [])

  return (

    <AnimatePresence mode="wait">

      <motion.div
        key={popup.name + popup.amount}
        initial={{ opacity: 0, y: 80, x: -40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50 bg-zinc-900/95 backdrop-blur-lg border border-zinc-700 text-white p-5 rounded-2xl shadow-2xl max-w-sm"
      >

        <p className="text-sm leading-7">

          <span className="font-bold text-green-400">
            {popup.name}
          </span>

          {' '}from{' '}

          <span className="font-semibold">
            {popup.country}
          </span>

          {' '}has withdrawn{' '}

          <span className="font-bold text-green-500">
            {popup.amount}
          </span>

          {' '}via{' '}

          <span className="text-yellow-400">
            {popup.method}
          </span>

        </p>

        <p className="text-xs text-gray-400 mt-2">
          {popup.time}
        </p>

      </motion.div>

    </AnimatePresence>

  )
}