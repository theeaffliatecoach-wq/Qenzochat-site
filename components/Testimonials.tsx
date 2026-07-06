'use client'

const testimonials = [

  {
    name: 'Brian K.',
    country: 'Kenya',
    flag: '🇰🇪',
    image: '/testimonials/brian.jpg',
    amount: 'KSh 12,400',
    text: 'I honestly thought this was fake at first, but after chatting consistently for 2 weeks I made over KSh 12,000. Withdrawals came directly to M-Pesa.',
  },

  {
    name: 'Sharon M.',
    country: 'Uganda',
    flag: '🇺🇬',
    image: '/testimonials/sharon.jpg',
    amount: 'UGX 890,000',
    text: 'The foreigners are friendly and the conversations are easy. I usually chat during evenings after work and it has become a serious side income for me.',
  },

  {
    name: 'Daniel O.',
    country: 'Nigeria',
    flag: '🇳🇬',
    image: '/testimonials/daniel.jpg',
    amount: '$320',
    text: 'I was very skeptical but my first withdrawal worked instantly. I now use the platform daily and have referred several friends.',
  },

  {
    name: 'Amina W.',
    country: 'Kenya',
    flag: '🇰🇪',
    image: '/testimonials/amina.jpg',
    amount: 'KSh 21,000',
    text: 'As a university student this platform has really helped me pay for my expenses. Some foreigners even send bonuses after good conversations.',
  },

  {
    name: 'Kevin T.',
    country: 'South Africa',
    flag: '🇿🇦',
    image: '/testimonials/kevin.jpg',
    amount: 'R7,200',
    text: 'The best thing is that you don’t need experience. Just be respectful, reply fast and stay active. Earnings increase every week.',
  },

  {
    name: 'Mercy L.',
    country: 'Tanzania',
    flag: '🇹🇿',
    image: '/testimonials/mercy.jpg',
    amount: '$410',
    text: 'I joined through a friend’s referral link and now I’m earning consistently every month. Withdrawals to mobile money are very fast.',
  },

]

export default function Testimonials() {

  return (

    <section className="py-16 bg-white dark:bg-zinc-950 transition-colors duration-500">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-5">
            Success Stories From Real Users
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Thousands of people across Africa are already earning daily by chatting online with foreigners.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (

            <div
              key={index}
              className="
                bg-white dark:bg-gray-100 dark:bg-zinc-900
transition-colors duration-500
                border
                border-zinc-800
                rounded-3xl
                p-6
                hover:border-green-500
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-2xl
              "
            >

              {/* USER INFO */}
              <div className="flex items-center gap-4 mb-5">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="
                    w-16
                    h-16
                    rounded-full
                    object-cover
                    border-2
                    border-green-500
                  "
                />

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {testimonial.name}
                    </h3>

                    <span className="text-2xl">
                      {testimonial.flag}
                    </span>

                  </div>

                  <p className="text-gray-400 text-sm">
                    {testimonial.country}
                  </p>

                </div>

              </div>

              {/* EARNINGS */}
              <div className="
                bg-green-500/10
                border
                border-green-500/30
                rounded-2xl
                px-4
                py-3
                mb-5
              ">

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Recent Earnings
                </p>

                <h4 className="text-3xl font-bold text-green-400">
                  {testimonial.amount}
                </h4>

              </div>

              {/* TESTIMONIAL */}
              <p className="
                text-gray-300
                leading-relaxed
                text-[15px]
              ">
                “{testimonial.text}”
              </p>

              {/* VERIFIED */}
              <div className="
                mt-6
                pt-4
                border-t
                border-zinc-800
                flex
                items-center
                justify-between
              ">

                <span className="text-green-400 text-sm font-medium">
                  ✔ Verified User
                </span>

                <span className="text-gray-500 text-sm">
                  Active Member
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}