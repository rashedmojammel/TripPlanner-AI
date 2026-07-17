"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, BarChart3, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    gradient: "from-orange-500 to-rose-500",
    title: "AI Itinerary Generator",
    description:
      "Give us your destination, trip length, budget, and interests — get a complete day-by-day itinerary, ready to follow or customize.",
    href: "/dashboard/traveler/itinerary-planner",
    cta: "Try it now",
  },
  {
    icon: BarChart3,
    gradient: "from-rose-500 to-sky-500",
    title: "Smart Recommendations",
    description:
      "The more you save and book, the better our recommendations get — personalized trip matches based on your real travel preferences.",
    href: "/dashboard/traveler/recommendations",
    cta: "See your matches",
  },
];

export default function AIHighlightSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
          >
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white`}>
              <card.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{card.description}</p>
            <Link
              href={card.href}
              className="mt-4 flex items-center gap-1 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
            >
              {card.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}