import Link from "next/link";
import { Sparkles, BarChart3, ArrowRight } from "lucide-react";

export default function AIHighlightSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-lg font-bold text-slate-900">AI Itinerary Generator</h3>
          <p className="mt-2 text-sm text-slate-500">
            Give us your destination, trip length, budget, and interests — get a complete
            day-by-day itinerary, ready to follow or customize.
          </p>
          <Link href="/dashboard/traveler/itinerary-planner" className="mt-4 flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700">
            Try it now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-sky-500 text-white">
            <BarChart3 className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-lg font-bold text-slate-900">Smart Recommendations</h3>
          <p className="mt-2 text-sm text-slate-500">
            The more you save and book, the better our recommendations get — personalized trip
            matches based on your real travel preferences.
          </p>
          <Link href="/dashboard/traveler/recommendations" className="mt-4 flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700">
            See your matches <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}