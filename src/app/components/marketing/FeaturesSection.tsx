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
        <h2 className="text-center text-2xl font-bold text-slate-900">Why TripPlanner AI</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-bold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}