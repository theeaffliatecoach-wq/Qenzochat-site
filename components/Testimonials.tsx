'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const testimonials = [
  {
    name: 'Brian',
    message: 'Amazing AI experience.'
  },
  {
    name: 'Sarah',
    message: 'Fast and intelligent platform.'
  },
  {
    name: 'James',
    message: 'Best chatbot interface I have used.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">

      <h2 className="text-5xl font-bold text-center mb-16">
        Testimonials
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay
        loop
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-3xl mx-auto bg-zinc-900 p-10 rounded-3xl text-center">
              <p className="text-xl mb-4">
                {item.message}
              </p>
              <h4 className="font-bold">
                {item.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <a
  href="https://starhela.com/register.php?ref=ChatwithMula"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl"
>
  Join Us Now
</a>

    </section>
  )
}