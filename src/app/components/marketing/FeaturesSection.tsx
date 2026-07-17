"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Users, Clock } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Verified Operators", description: "Every trip package is reviewed before it goes live." },
  { icon: Wallet, title: "Transparent Pricing", description: "No hidden fees — see the full price upfront." },
  { icon: Users, title: "Direct Booking", description: "Book directly with the operator, no middlemen." },
  { icon: Clock, title: "Instant Itineraries", description: "AI-generated plans in seconds, not hours of research." },
];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-slate-900"
        >
          Why TripPlanner AI
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-bold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}