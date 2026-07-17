import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Wired to the real API once the backend's GET /api/trips exists —
// intentionally left as a fetch stub rather than fabricated trip data.
export default function FeaturedTripsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Featured Trips</h2>
          <p className="mt-1 text-slate-500">Popular packages from verified travel operators.</p>
        </div>
        <Link href="/trips" className="flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* TODO: replace with <TripCard> grid once GET /api/trips is live on the backend */}
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center text-sm text-slate-400">
        Trip listings will appear here once the backend is connected.
      </div>
    </section>
  );
}