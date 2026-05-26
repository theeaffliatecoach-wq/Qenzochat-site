'use client'

import { useEffect, useState } from 'react'

export default function InstallModal() {

  const [show, setShow] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {

      setShow(true)

    }, 5000)

    return () => clearTimeout(timer)

  }, [])

  if (!show) return null

  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 text-white p-10 rounded-3xl max-w-md text-center">

        <h2 className="text-4xl font-bold mb-6">
          Install QenzoChat App
        </h2>

        <p className="text-gray-400 mb-8">
          Get faster access and realtime notifications directly on your phone.
        </p>

        <button
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold"
          onClick={() => setShow(false)}
        >
          Install Now
        </button>

      </div>

    </div>

  )
}