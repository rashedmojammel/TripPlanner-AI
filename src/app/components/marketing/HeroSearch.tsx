"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(destination.trim() ? `/trips?destination=${encodeURIComponent(destination)}` : "/trips");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-2">
      <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
        <Search className="h-4 w-4 flex-shrink-0 text-slate-400" />
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Where do you want to go?"
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>
      <button
        type="submit"
        className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      >
        Search
      </button>
    </form>
  );
}