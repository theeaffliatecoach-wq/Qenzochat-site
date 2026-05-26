'use client'

import { useEffect, useState } from 'react'

export default function EarningsTicker() {

  const [amount, setAmount] = useState(284391)

  useEffect(() => {

    const interval = setInterval(() => {

      setAmount(prev => prev + Math.floor(Math.random() * 200))

    }, 2000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="fixed top-0 left-0 w-full z-50 bg-green-500 text-black py-3 overflow-hidden">

      <div className="animate-marquee whitespace-nowrap font-bold text-lg">

        💸 Total Paid Out Worldwide:
        ${amount.toLocaleString()} —
        Users earning every minute on QenzoChat.site —
        Instant withdrawals available —
        Join today and start chatting

      </div>

    </div>

  )
}