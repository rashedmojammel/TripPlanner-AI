"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from "lucide-react";
import { authClient, signUp } from "@/lib/auth-client";

type Role = "traveler" | "operator";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("traveler");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data, error: authError } = await signUp.email({
        email,
        password,
        name,
        userRole: role,
        callbackURL: "/",
      });

      if (authError) {
        setError(authError.message || "Unable to create account.");
      } else if (data) {
        router.push("/");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
        <div className="mb-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-rose-500 to-sky-500 text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </span>
          <h1 className="mt-3 text-2xl font-bold text-slate-900">Create your account</h1>
          <p className="mt-1 text-sm text-slate-500">Start planning smarter trips today</p>
        </div>

        <button
          onClick={handleGoogleSignup}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 text-sm font-medium transition hover:bg-slate-50"
        >
          <span className="font-bold">G</span> Continue with Google
        </button>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-xs text-slate-400">or register with email</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-400 focus-within:bg-white">
              <User className="h-4 w-4 text-slate-400" />
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" className="flex-1 bg-transparent text-sm outline-none" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-400 focus-within:bg-white">
              <Mail className="h-4 w-4 text-slate-400" />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 bg-transparent text-sm outline-none" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">I am a</label>
            <div className="mt-1.5 grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setRole("traveler")} className={`rounded-xl border py-3 text-sm font-semibold transition ${role === "traveler" ? "border-sky-400 bg-sky-50 text-sky-600" : "border-slate-200 bg-slate-50 text-slate-600"}`}>
                ✈️ Traveler
              </button>
              <button type="button" onClick={() => setRole("operator")} className={`rounded-xl border py-3 text-sm font-semibold transition ${role === "operator" ? "border-sky-400 bg-sky-50 text-sky-600" : "border-slate-200 bg-slate-50 text-slate-600"}`}>
                🧭 Operator
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-sky-400 focus-within:bg-white">
              <Lock className="h-4 w-4 text-slate-400" />
              <input type={isVisible ? "text" : "password"} required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" className="flex-1 bg-transparent text-sm outline-none" />
              <button type="button" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
              </button>
            </div>
          </div>

          {error && <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600">{error}</p>}

          <button
            disabled={isLoading}
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] disabled:opacity-50"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/auth/signin" className="font-semibold text-sky-600 hover:text-sky-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}