"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to a real newsletter endpoint once one exists
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-sky-500 text-white shadow-md">
        <Mail className="h-5 w-5" />
      </span>
      <h2 className="mt-4 text-2xl font-bold text-slate-900">Get trip ideas in your inbox</h2>
      <p className="mt-2 text-slate-500">Occasional AI-curated destination picks. No spam.</p>

      {submitted ? (
        <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-sky-600">
          <CheckCircle2 className="h-4 w-4" /> You're subscribed!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-sm gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-sky-400"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}