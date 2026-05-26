'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappFloat() {

  return (

    <a
      href="https://wa.me/254106520949"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white p-5 rounded-full shadow-2xl animate-bounce"
    >

      <FaWhatsapp size={32} />

    </a>

  )
}