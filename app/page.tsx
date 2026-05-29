'use client'

import Navbar from '@/components/navbar'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import WithdrawalPopup from '@/components/WithdrawalPopup'
import OnlineUsers from '@/components/OnlineUsers'
import HowItWorks from '@/components/HowItWorks'
import LiveStats from '@/components/LiveStats'
import WhatsappFloat from '@/components/WhatsappFloat'
import TypingIndicator from '@/components/TypingIndicator'
import EarningsCalculator from '@/components/EarningsCalculator'
import LiveNotifications from '@/components/LiveNotifications'
import Hero from '@/components/hero'
import FAQ from '@/components/FAQ'
import ChatSimulator from '@/components/ChatSimulator'
import EarningsTicker from '@/components/EarningsTicker'
import GlobalHeatmap from '@/components/GlobalHeatmap'
import Leaderboard from '@/components/Leaderboard'
import InstallModal from '@/components/InstallModal'

export default function Home() {

  return (

    <main className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white">

      <EarningsTicker />

      <Navbar />

      <Hero />

      <section className="py-20 flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-7xl font-bold mb-6">
          QenzoChat.site
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          Meet foreigners, chat online and earn money from friendly conversations.
        </p>

        <a
          href="https://starhela.com/register.php?ref=ChatwithMula"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl"
        >
          Join Us Now
        </a>

      </section>

      <TypingIndicator />

      <LiveStats />

      <EarningsCalculator />

      <Stats />

      <OnlineUsers />

      <ChatSimulator />

      <GlobalHeatmap />

      <Leaderboard />

      <Testimonials />

      <FAQ />

      <HowItWorks />

      <WithdrawalPopup />

      <LiveNotifications />

      <WhatsappFloat />

      <InstallModal />

    </main>

  )
}