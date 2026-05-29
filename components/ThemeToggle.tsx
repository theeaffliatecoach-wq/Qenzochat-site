'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {

  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {

    setMounted(true)

    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {

      document.documentElement.classList.remove('dark')
      setTheme('light')

    } else {

      document.documentElement.classList.add('dark')
      setTheme('dark')

    }

  }, [])

  const toggleTheme = () => {

    if (theme === 'dark') {

      document.documentElement.classList.remove('dark')

      localStorage.setItem('theme', 'light')

      setTheme('light')

    } else {

      document.documentElement.classList.add('dark')

      localStorage.setItem('theme', 'dark')

      setTheme('dark')

    }

  }

  if (!mounted) return null

  return (

    <button
      onClick={toggleTheme}
      className="
        px-4
        py-2
        rounded-xl
        font-semibold
        border
        border-gray-300
        dark:border-zinc-700
        bg-white
        text-black
        dark:bg-zinc-900
        dark:text-white
        hover:scale-105
        transition-all
        duration-300
      "
    >
      {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
    </button>

  )
}