const testimonials = [
  {
    quote: "The AI itinerary saved me a full weekend of research for our Bali trip — and it was genuinely well-paced.",
    name: "Early Beta Tester",
    role: "Traveler",
  },
  {
    quote: "As an operator, listing our packages here was the fastest onboarding I've had on any platform.",
    name: "Beta Travel Partner",
    role: "Tour Operator",
  },
];

// Marked explicitly as early feedback rather than fabricated customer names/photos.
export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold text-slate-900">Early feedback</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
            <p className="text-sm italic text-slate-600">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-bold text-slate-900">{t.name}</p>
            <p className="text-xs text-slate-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}