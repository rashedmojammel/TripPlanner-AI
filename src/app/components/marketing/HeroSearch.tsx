"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, LoaderCircle } from "lucide-react";

export default function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    router.push(destination.trim() ? `/trips?destination=${encodeURIComponent(destination)}` : "/trips");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-2">
      <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-transparent transition-shadow focus-within:shadow-xl focus-within:ring-sky-300">
        <Search className="h-4 w-4 flex-shrink-0 text-slate-400" />
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Where do you want to go?"
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>
      <motion.button
        type="submit"
        disabled={isSearching}
        whileTap={{ scale: 0.96 }}
        className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSearching ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Search"}
      </motion.button>
    </form>
  );
}