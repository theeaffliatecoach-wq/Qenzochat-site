"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppBanner() {
  return (
    <section className="my-10 rounded-[30px] bg-gradient-to-r from-green-500 to-teal-600 p-6 shadow-2xl">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <MessageCircle className="h-8 w-8 text-green-500" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Join Training Channel
            </h3>

            <p className="text-white/90">
              Get training updates & connect with other earners
            </p>
          </div>
        </div>

        <button className="rounded-full bg-white px-8 py-4 font-semibold text-teal-700 shadow-lg transition hover:scale-105">
          Join Now
        </button>
      </div>
    </section>
  );
}