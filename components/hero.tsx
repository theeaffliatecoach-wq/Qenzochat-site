"use client";

import { motion } from "framer-motion";
import CTAButton from "./cta-button";
import { CheckCircle } from "lucide-react";

const features = [
  "Instant withdrawals",
  "24/7 support",
  "No experience needed",
];

export default function Hero() {
  return (
    <section className="relative px-4 pt-24 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-8 inline-flex rounded-full border border-teal-100 bg-white/80 px-6 py-2 shadow-lg backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/60">
          <span className="font-medium text-teal-600">
            Trusted by 80,000+ Africans
          </span>
        </div>

        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          Get Paid to Chat with{" "}
          <span className="bg-gradient-to-r from-green-500 via-teal-500 to-orange-400 bg-clip-text text-transparent">
            Lonely Foreigners
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Join 80,000+ Africans earning daily. Withdraw to M-Pesa,
          MoMo, bank, or crypto.
        </p>

        <div className="mt-10">
          <CTAButton label="START CHAT & EARN →" />

            <a
  href="https://starhela.com/register.php?ref=ChatwithMula"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-2xl"
>
  Join Us Now
</a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-slate-600 dark:text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}