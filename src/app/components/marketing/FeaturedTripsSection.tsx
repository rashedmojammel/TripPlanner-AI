"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

// Wired to the real API once the backend's GET /api/trips exists —
// intentionally left as a fetch stub rather than fabricated trip data.
export default function FeaturedTripsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Featured Trips</h2>
          <p className="mt-1 text-slate-500">Popular packages from verified travel operators.</p>
        </div>
        <Link href="/trips" className="flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      {/* TODO: replace with <TripCard> grid once GET /api/trips is live on the backend */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center"
      >
        <MapPin className="h-6 w-6 text-slate-300" />
        <p className="text-sm text-slate-400">Trip listings will appear here once the backend is connected.</p>
      </motion.div>
    </section>
  );
}