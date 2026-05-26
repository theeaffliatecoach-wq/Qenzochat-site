"use client";

import { Smartphone } from "lucide-react";

export default function FloatingInstallCard() {
  return (
    <div className="fixed right-4 top-1/3 hidden w-44 rounded-3xl border border-white/30 bg-white/90 p-5 shadow-2xl backdrop-blur-xl lg:block dark:bg-slate-900/80">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-500">
          <Smartphone className="text-white" />
        </div>

        <h3 className="font-bold">Install Qenzochat Site</h3>

        <p className="mt-1 text-sm text-slate-500">
          Android • iPhone
        </p>

        <button className="mt-4 w-full rounded-full bg-teal-600 py-2 font-semibold text-white transition hover:bg-teal-700">
          Install
        </button>
      </div>
    </div>
  );
}