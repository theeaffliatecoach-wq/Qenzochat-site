"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function FloatingToast() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-2xl dark:bg-slate-900"
    >
      <CheckCircle className="h-7 w-7 text-green-500" />

      <div>
        <p className="font-medium">
          Jessica from USA withdrew $59 via PayPal
        </p>

        <span className="text-sm text-slate-500">
          14 sec ago
        </span>
      </div>
    </motion.div>
  );
}