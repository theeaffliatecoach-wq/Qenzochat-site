'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Stats() {

  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-zinc-900">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        <div>
          <h2 className="text-5xl font-bold text-white">
            {inView && <CountUp end={50000} duration={4} />}+
          </h2>
          <p className="text-gray-400 mt-2">Users</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-white">
            {inView && <CountUp end={120} duration={4} />}+
          </h2>
          <p className="text-gray-400 mt-2">AI Integrations</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-white">
            {inView && <CountUp end={99} duration={4} />}%
          </h2>
          <p className="text-gray-400 mt-2">Reliability</p>
        </div>

      </div>

    </section>
  )
}