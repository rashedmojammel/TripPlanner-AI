"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, LoaderCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: wire to a real newsletter endpoint once one exists
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-sky-500 text-white shadow-md">
          <Mail className="h-5 w-5" />
        </span>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Get trip ideas in your inbox</h2>
        <p className="mt-2 text-slate-500">Occasional AI-curated destination picks. No spam.</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-sky-600"
          >
            <CheckCircle2 className="h-4 w-4" /> You&apos;re subscribed!
          </motion.p>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            exit={{ opacity: 0, y: -8 }}
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-sm gap-2"
          >
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
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}