"use client";

import { 
  FaWandMagicSparkles, 
  FaChevronDown 
} from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroSearch from "./components/marketing/HeroSearch";
import FeaturedTripsSection from "./components/marketing/FeaturedTripsSection";
import HowItWorksSection from "./components/marketing/HowItWorksSection";
import AIHighlightSection from "./components/marketing/AIHighlightSection";
import FeaturesSection from "./components/marketing/FeaturesSection";
import StatsSection from "./components/marketing/StatsSection";
import TestimonialsSection from "./components/marketing/TestimonialsSection";
import FAQSection from "./components/marketing/FAQSection";
import NewsletterSection from "./components/marketing/NewsletterSection";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative flex h-[75vh] min-h-[600px] items-center justify-center overflow-hidden">

        {/* Background photo */}
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2400&auto=format&fit=crop"
          alt="Aerial view of a tropical coastline at sunset"
          fill
          priority
          className="object-cover"
        />

        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">

          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm ring-1 ring-white/25"
          >
            <FaWandMagicSparkles className="h-4 w-4" />
            Powered by AI itinerary planning
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your next trip, planned in seconds — not weekends.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg"
          >
            Tell our AI where you want to go and what you love,
            and get a personalized itinerary instantly.
            Discover smarter travel experiences with AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <HeroSearch />
          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <FaChevronDown className="h-6 w-6 text-white/70" />
        </motion.div>

      </section>

      <FeaturedTripsSection />
      <HowItWorksSection />
      <AIHighlightSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />

    </main>
  );
}