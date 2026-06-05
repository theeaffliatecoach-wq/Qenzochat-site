'use client'

import {
  FaTiktok,
  FaYoutube,
  FaQuestionCircle,
  FaMusic,
} from 'react-icons/fa'

import { SiNetflix } from 'react-icons/si'

const REFERRAL_LINK = 'https://starhela.com/register.php?ref=ChatwithMula'

const opportunities = [
  {
    title: 'Paid TikTok Videos',
    icon: FaTiktok,
    description:
      'Discover opportunities that may reward users for watching TikTok videos and engaging with content. Check the platform requirements and available tasks. Earnings depend on activity and completion.',
    button: 'Sign Up to Watch',
  },
  {
    title: 'Paid YouTube Videos',
    icon: FaYoutube,
    description:
      'Explore programs that may compensate users for watching YouTube content and participating in promotional campaigns. Rewards depend on completed activities.',
    button: 'Register to Watch',
  },
  {
    title: 'Paid Trivia Questions',
    icon: FaQuestionCircle,
    description:
      'Test your knowledge through trivia challenges. Some platforms reward users based on performance and participation.',
    button: 'Register to Answer',
  },
  {
    title: 'Paid Netflix Movie Watching',
    icon: SiNetflix,
    description:
      'Some platforms offer rewards for engaging with entertainment content such as movies, reviews, and ratings.',
    button: 'Sign Up to Watch',
  },
  {
    title: 'Paid Music Streaming',
    icon: FaMusic,
    description:
      'Listen to music and potentially earn rewards depending on engagement and platform rules.',
    button: 'Sign Up to Stream',
  },
]

export default function EarningOpportunities() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
            More Ways to Earn Online
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore different online opportunities available through our partner platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {opportunities.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="
                  bg-gray-100
                  dark:bg-zinc-900
                  border
                  border-gray-200
                  dark:border-zinc-800
                  rounded-3xl
                  p-8
                  shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  flex
                  flex-col
                "
              >
                <div className="text-green-500 mb-6">
                  <Icon size={42} />
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {item.description}
                </p>

                <a
                  href={REFERRAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto
                    inline-block
                    w-full
                    text-center
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    font-bold
                    py-3
                    rounded-xl
                    transition-all
                  "
                >
                  {item.button}
                </a>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}