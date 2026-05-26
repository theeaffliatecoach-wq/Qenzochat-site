"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  "Chat at your own pace",
  "Get paid per message",
  "Withdraw instantly to M-Pesa, MoMo, PayPal or bank",
];

export default function MainContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl py-20"
    >
      <h2 className="text-center text-4xl font-black md:text-5xl">
        Discover Real Opportunities to Earn by Chatting
      </h2>

      <p className="mt-8 text-center text-xl leading-relaxed text-slate-600 dark:text-slate-300">
        Qenzochat Site is Kenya’s and Africa’s leading platform
        connecting you with genuine foreigners who want meaningful
        conversations.
      </p>

      <div className="mt-12 space-y-6">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg dark:bg-slate-800"
          >
            <CheckCircle className="h-7 w-7 text-green-500" />

            <span className="text-lg font-medium">{item}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}