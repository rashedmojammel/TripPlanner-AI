import { Compass, Sparkles, CalendarCheck } from "lucide-react";

const steps = [
  { icon: Compass, title: "Tell us your style", description: "Destination, budget, trip length, and what you love — beaches, hiking, food, culture." },
  { icon: Sparkles, title: "AI builds your itinerary", description: "Get a full day-by-day plan in seconds, tailored to your preferences and budget." },
  { icon: CalendarCheck, title: "Book or customize", description: "Book a matching trip package directly, or use the itinerary as your own travel guide." },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-slate-900">How it works</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-sky-500 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sky-600">Step {i + 1}</p>
              <h3 className="mt-1 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}