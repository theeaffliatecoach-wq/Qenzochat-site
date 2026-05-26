"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
}

export default function CTAButton({ label }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-full bg-gradient-to-r from-orange-400 to-rose-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(255,120,100,0.35)] transition-all"
    >
      {label}
    </motion.button>
  );
}