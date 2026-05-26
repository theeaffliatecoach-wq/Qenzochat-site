'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How much can I earn on QenzoChat Site?',
    answer:
      'Most active chatters in Kenya earn between KSh 5,000 – KSh 20,000 per month. Top performers earn more.',
  },

  {
    question: 'Is QenzoChat Site legitimate?',
    answer:
      'Yes. We have paid out millions of dollars to users across Africa with instant withdrawals to M-Pesa and other methods.',
  },

  {
    question: 'Do I need experience?',
    answer:
      'No. Just be respectful and engaging. Many beginners start earning within their first week.',
  },

  {
    question: 'How do withdrawals work?',
    answer:
      'Withdrawals are processed instantly to M-Pesa, MoMo, bank accounts, or crypto once you reach the minimum threshold.',
  },

  {
    question: 'Is my data safe?',
    answer:
      'We use industry-standard security and encrypted infrastructure to protect all user information.',
  },
]

export default function FAQ() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {

    setActiveIndex(activeIndex === index ? null : index)

  }

  return (

    <section className="py-24 bg-zinc-950 text-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >

                <span className="text-xl font-semibold">
                  {faq.question}
                </span>

                <span className="text-3xl">
                  {activeIndex === index ? '−' : '+'}
                </span>

              </button>

              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-400 leading-8"
                  >

                    {faq.answer}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}