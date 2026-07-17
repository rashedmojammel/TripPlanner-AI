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
        {stats.map((stat) => (
          <div key={stat.label} className="text-center text-white">
            <p className="text-xl font-black sm:text-2xl">{stat.value}</p>
            <p className="mt-1 text-xs text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}