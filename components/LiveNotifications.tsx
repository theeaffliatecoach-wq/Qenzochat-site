'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const countries = [
  {
    flag: '🇰🇪',
    country: 'Kenya',
    currency: 'KSh',
    provider: 'M-Pesa',
    min: 500,
    max: 12000,
  },
  {
    flag: '🇺🇬',
    country: 'Uganda',
    currency: 'UGX',
    provider: 'MTN MoMo',
    min: 25000,
    max: 850000,
  },
  {
    flag: '🇹🇿',
    country: 'Tanzania',
    currency: 'TZS',
    provider: 'M-Pesa Tanzania',
    min: 20000,
    max: 900000,
  },
  {
    flag: '🇳🇬',
    country: 'Nigeria',
    currency: '₦',
    provider: 'OPay',
    min: 3000,
    max: 350000,
  },
  {
    flag: '🇬🇭',
    country: 'Ghana',
    currency: 'GH₵',
    provider: 'MTN Mobile Money',
    min: 50,
    max: 3500,
  },
  {
    flag: '🇿🇦',
    country: 'South Africa',
    currency: 'R',
    provider: 'Capitec Bank',
    min: 120,
    max: 9000,
  },
  {
    flag: '🇷🇼',
    country: 'Rwanda',
    currency: 'RWF',
    provider: 'MTN MoMo',
    min: 8000,
    max: 600000,
  },
  {
    flag: '🇨🇲',
    country: 'Cameroon',
    currency: 'XAF',
    provider: 'Orange Money',
    min: 5000,
    max: 450000,
  },
  {
    flag: '🇿🇲',
    country: 'Zambia',
    currency: 'ZMW',
    provider: 'Airtel Money',
    min: 20,
    max: 2200,
  },
  {
    flag: '🇲🇼',
    country: 'Malawi',
    currency: 'MWK',
    provider: 'TNM Mpamba',
    min: 8000,
    max: 350000,
  },
]

const names = [
  'Brian',
  'Mercy',
  'Kevin',
  'Sharon',
  'Daniel',
  'Faith',
  'Grace',
  'Peter',
  'Alice',
  'John',
  'Esther',
  'Victor',
  'Lilian',
  'James',
  'Rose',
]

const times = [
  'Just now',
  '1 min ago',
  '2 mins ago',
  '3 mins ago',
  '5 mins ago',
]

function generateNotification() {
  const person =
    names[Math.floor(Math.random() * names.length)]

  const country =
    countries[Math.floor(Math.random() * countries.length)]

  const amount = Math.floor(
    Math.random() * (country.max - country.min + 1)
  ) + country.min

  const time =
    times[Math.floor(Math.random() * times.length)]

  return {
    person,
    country,
    amount,
    time,
  }
}

export default function LiveNotifications() {

  const [notification, setNotification] =
    useState(generateNotification())

  useEffect(() => {

    const interval = setInterval(() => {

      setNotification(generateNotification())

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  return (

    <AnimatePresence mode="wait">

      <motion.div
        key={`${notification.person}-${notification.amount}`}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 80 }}
        transition={{ duration: 0.45 }}
        className="
          fixed
          top-6
          right-6
          z-50
          w-80
          rounded-2xl
          border
          border-gray-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          shadow-2xl
          p-5
        "
      >

        <div className="flex items-center gap-3 mb-3">

          <div className="text-3xl">
            {notification.country.flag}
          </div>

          <div>

            <h3 className="font-bold text-black dark:text-white">
              {notification.person}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {notification.country.country}
            </p>

          </div>

        </div>

        <div className="text-green-600 dark:text-green-400 font-bold text-xl">

          {notification.country.currency}
          {notification.amount.toLocaleString()}

        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Received via{' '}
          <span className="font-semibold">
            {notification.country.provider}
          </span>
        </p>

        <p className="text-xs text-gray-500 mt-3">
          {notification.time}
        </p>

      </motion.div>

    </AnimatePresence>

  )
}