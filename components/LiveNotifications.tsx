'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const notifications = [
  'New user joined from USA',
  'Payment successfully processed',
  'New referral registered',
  'User from Kenya earned $12',
  'Withdrawal approved',
  'New foreigner online',
]

export default function LiveNotifications() {

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent(prev => (prev + 1) % notifications.length)

    }, 4000)

    return () => clearInterval(interval)

  }, [])

  return (

    <AnimatePresence mode="wait">

      <motion.div
        key={current}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        className="fixed top-6 right-6 z-50 bg-zinc-900 border border-zinc-800 text-white px-6 py-4 rounded-2xl shadow-2xl"
      >

        {notifications[current]}

      </motion.div>

    </AnimatePresence>

  )
}