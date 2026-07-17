"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "AI-Powered", label: "Itinerary Generation" },
  { value: "Real-Time", label: "Trip Recommendations" },
  { value: "Direct", label: "Operator Booking" },
  { value: "Zero", label: "Hidden Fees" },
];

// Numeric platform stats (trips posted, travelers, etc.) will replace this
// once the backend is connected — avoided fabricating numbers here.
export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-rose-500 to-sky-600 py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center text-white"
          >
            <p className="text-xl font-black sm:text-2xl">{stat.value}</p>
            <p className="mt-1 text-xs text-white/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}