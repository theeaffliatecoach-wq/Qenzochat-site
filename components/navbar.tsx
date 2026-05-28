'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-white">
          QenzoChat.site
        </Link>

       <div className="flex items-center gap-6 text-sm md:text-base">

  <Link
    href="/about"
    className="hover:text-green-400 transition-all duration-300"
  >
    About
  </Link>

  <Link
    href="/contact"
    className="hover:text-green-400 transition-all duration-300"
  >
    Contact
  </Link>

  <Link
    href="/privacy"
    className="hover:text-green-400 transition-all duration-300"
  >
    Privacy
  </Link>

           <a
  href="https://starhela.com/register.php?ref=ChatwithMula"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-5 py-2 rounded-xl font-bold text-white shadow-lg"
>
  Start Earning
</a>

</div>
        <a
  href="https://starhela.com/register.php?ref=ChatwithMula"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl"
>
  Join Us Now
</a>

      </div>
    </motion.nav>
  )
}