"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does the AI itinerary generator work?", a: "You provide your destination, trip length, budget, and interests. Our AI (Gemini) builds a complete day-by-day plan tailored to those inputs." },
  { q: "Can I book a trip directly through the platform?", a: "Yes — browse trip packages from verified operators and send a booking request directly." },
  { q: "Is my itinerary saved for later?", a: "Yes, every generated itinerary is saved to your account under 'My Itineraries'." },
  { q: "How do recommendations improve over time?", a: "They're based on your saved trips, bookings, and any recommendations you dismiss — the more you use the platform, the more tailored they get." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-slate-900"
        >
          Frequently asked questions
        </motion.h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-slate-100 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-900"
              >
                {faq.q}
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-slate-500">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}