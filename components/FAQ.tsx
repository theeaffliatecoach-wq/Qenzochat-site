'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How much can I earn on QenzoChat Site?',
    answer:
      'Most active chatters in Kenya earn between KSh 5,000 – KSh 20,000 per month.',
  },
  {
    question: 'Is QenzoChat Site legitimate?',
    answer:
      'Yes. Users across Africa withdraw earnings successfully.',
  },
  {
    question: 'Do I need experience?',
    answer:
      'No. Beginners can start immediately.',
  },
]

export default function FAQ() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (

    <section className="py-24 bg-gray-100 dark:bg-zinc-950 transition-colors duration-500">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16 text-black dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                bg-white
                dark:bg-zinc-900
                border
                border-gray-200
                dark:border-zinc-800
                rounded-2xl
                overflow-hidden
              "
            >

              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                "
              >

                <span className="text-xl font-semibold text-black dark:text-white">
                  {faq.question}
                </span>

                <span className="text-3xl text-black dark:text-white">
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
                    className="
                      px-6
                      pb-6
                      text-gray-700
                      dark:text-gray-300
                      leading-8
                    "
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