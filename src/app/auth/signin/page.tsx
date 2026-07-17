"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Sparkles, LoaderCircle } from "lucide-react";
import { authClient, signIn } from "@/lib/auth-client";

// Demo credentials — required by the brief's "demo login" rule.
// Seed this exact traveler account in your database before demoing.
const DEMO_EMAIL = "demo.traveler@tripplanner.ai";
const DEMO_PASSWORD = "DemoTraveler123!";

export default function SigninPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { error: authError } = await signIn.email({ email, password, callbackURL: callbackUrl });

      if (authError) {
        setError(authError.message || "Invalid email or password.");
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    await authClient.signIn.social({ provider: "google", callbackURL: callbackUrl });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 shadow-md"
      >
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 text-center"
        >
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-sky-500 text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </span>
          <h1 className="mt-3 text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to plan your next trip</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          onClick={handleDemoLogin}
          className="mb-3 w-full rounded-xl border border-dashed border-sky-300 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
        >
          Use Demo Account
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm font-medium transition hover:bg-slate-50 disabled:opacity-50"
        >
          {isGoogleLoading ? (
            <LoaderCircle className="h-4 w-4 animate-spin text-slate-400" />
          ) : (
            <>
              <span className="font-bold">G</span> Continue with Google
            </>
          )}
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="my-6 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-xs text-slate-400">or continue with email</span>
          <div className="h-px flex-1 bg-slate-100" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          onSubmit={handleSignin}
          className="space-y-4"
        >
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus-within:border-sky-400 focus-within:bg-white">
              <Mail className="h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus-within:border-sky-400 focus-within:bg-white">
              <Lock className="h-4 w-4 text-slate-400" />
              <input
                type={isVisible ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <button type="button" onClick={() => setIsVisible(!isVisible)} aria-label={isVisible ? "Hide password" : "Show password"}>
                {isVisible ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
              </button>
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.25 }}
              className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            {isLoading && <LoaderCircle className="h-4 w-4 animate-spin" />}
            {isLoading ? "Signing in..." : "Sign In"}
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-6 text-center text-sm text-slate-500"
        >
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="font-semibold text-sky-600 hover:text-sky-700">
            Create Account
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}