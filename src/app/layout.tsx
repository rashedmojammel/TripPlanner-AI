import type { Metadata } from "next";
// import PublicChrome from "@/components/layout/PublicChrome";
import "./globals.css";
import PublicChrome from "./components/layout/PublicChrome";

export const metadata: Metadata = {
  title: "TripPlanner AI — Personalized Trips, Powered by AI",
  description: "Discover trip packages and generate personalized AI itineraries in seconds.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}