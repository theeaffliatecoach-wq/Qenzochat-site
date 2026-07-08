'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const people = [
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
  'Robert',
  'Grace',
  'David',
  'Samuel',
  'Nathan',
  'Olivia',
  'Emma',
  'Lucas',
  'Amina',
  'James',
  'Esther',
]

const countries = [
  {
    name: 'Kenya',
    locale: 'en-KE',
    currency: 'KES',
    min: 3500,
    max: 45000,
    methods: [
      'Safaricom M-Pesa',
      'Airtel Money',
      'KCB Bank',
      'Equity Bank',
    ],
  },
  {
    name: 'Uganda',
    locale: 'en-UG',
    currency: 'UGX',
    min: 100000,
    max: 1800000,
    methods: [
      'MTN MoMo',
      'Airtel Money',
      'Stanbic Bank',
    ],
  },
  {
    name: 'Tanzania',
    locale: 'sw-TZ',
    currency: 'TZS',
    min: 40000,
    max: 900000,
    methods: [
      'M-Pesa',
      'Tigo Pesa',
      'Airtel Money',
    ],
  },
  {
    name: 'Nigeria',
    locale: 'en-NG',
    currency: 'NGN',
    min: 5000,
    max: 250000,
    methods: [
      'Opay',
      'PalmPay',
      'Kuda Bank',
      'GTBank',
    ],
  },
  {
    name: 'South Africa',
    locale: 'en-ZA',
    currency: 'ZAR',
    min: 400,
    max: 8000,
    methods: [
      'Capitec',
      'FNB',
      'Nedbank',
      'Standard Bank',
    ],
  },
  {
    name: 'Botswana',
    locale: 'en-BW',
    currency: 'BWP',
    min: 200,
    max: 5000,
    methods: [
      'Orange Money',
      'Mascom MyZaka',
    ],
  },
  {
    name: 'Ghana',
    locale: 'en-GH',
    currency: 'GHS',
    min: 150,
    max: 5000,
    methods: [
      'MTN MoMo',
      'Vodafone Cash',
      'AirtelTigo Money',
    ],
  },
  {
    name: 'Cameroon',
    locale: 'fr-CM',
    currency: 'XAF',
    min: 20000,
    max: 700000,
    methods: [
      'MTN MoMo',
      'Orange Money',
    ],
  },
  {
    name: 'Rwanda',
    locale: 'en-RW',
    currency: 'RWF',
    min: 10000,
    max: 400000,
    methods: [
      'MTN MoMo',
      'Airtel Money',
    ],
  },
  {
    name: 'Zambia',
    locale: 'en-ZM',
    currency: 'ZMW',
    min: 150,
    max: 6000,
    methods: [
      'MTN MoMo',
      'Airtel Money',
    ],
  },
  {
    name: 'Zimbabwe',
    locale: 'en-ZW',
    currency: 'USD',
    min: 20,
    max: 500,
    methods: [
      'EcoCash',
      'Visa',
    ],
  },
  {
    name: 'Namibia',
    locale: 'en-NA',
    currency: 'NAD',
    min: 250,
    max: 7000,
    methods: [
      'FNB Namibia',
      'Bank Windhoek',
    ],
  },
  {
    name: 'USA',
    locale: 'en-US',
    currency: 'USD',
    min: 30,
    max: 600,
    methods: [
      'PayPal',
      'Visa',
      'Stripe',
    ],
  },
  {
    name: 'Canada',
    locale: 'en-CA',
    currency: 'CAD',
    min: 40,
    max: 700,
    methods: [
      'PayPal',
      'Interac',
    ],
  },
  {
    name: 'United Kingdom',
    locale: 'en-GB',
    currency: 'GBP',
    min: 30,
    max: 500,
    methods: [
      'PayPal',
      'Barclays',
      'HSBC',
    ],
  },
  {
    name: 'Germany',
    locale: 'de-DE',
    currency: 'EUR',
    min: 30,
    max: 600,
    methods: [
      'PayPal',
      'SEPA Bank',
    ],
  },
  {
    name: 'France',
    locale: 'fr-FR',
    currency: 'EUR',
    min: 30,
    max: 600,
    methods: [
      'PayPal',
      'Visa',
    ],
  },
]

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
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
      const country = randomItem(countries)

      const value =
        Math.floor(
          Math.random() * (country.max - country.min + 1)
        ) + country.min

      const amount = new Intl.NumberFormat(country.locale, {
        style: 'currency',
        currency: country.currency,
        maximumFractionDigits: 0,
      }).format(value)

      const seconds = Math.floor(Math.random() * 55) + 5

      setPopup({
        name: randomItem(people),
        country: country.name,
        amount,
        method: randomItem(country.methods),
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
        key={`${popup.name}-${popup.amount}-${popup.country}`}
        initial={{ opacity: 0, y: 80, x: -40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.45 }}
        className="fixed bottom-6 left-6 z-50 max-w-sm rounded-2xl border border-zinc-700 bg-zinc-900/95 p-5 text-white shadow-2xl backdrop-blur-lg"
      >
        <p className="leading-7 text-sm">
          <span className="font-bold text-green-400">
            {popup.name}
          </span>{' '}
          from{' '}
          <span className="font-semibold">
            {popup.country}
          </span>{' '}
          has withdrawn{' '}
          <span className="font-bold text-green-500">
            {popup.amount}
          </span>{' '}
          via{' '}
          <span className="font-semibold text-yellow-400">
            {popup.method}
          </span>
        </p>

        <p className="mt-2 text-xs text-gray-400">
          {popup.time}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}