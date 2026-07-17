"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { ChevronDown, Menu, X, Plane } from "lucide-react";
import { getRole, roleDashboardPath } from "@/config/dashboard-nav";

interface NavLink {
    href: string;
    label: string;
}

const baseNavLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/trips", label: "Explore Trips" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();

    const { data: session, isPending } = useSession();
    const user = session?.user;
    const isLoggedIn = !!user;
    const role = getRole(user?.userRole);

    const navLinks: NavLink[] = isLoggedIn
        ? [
            ...baseNavLinks,
            { href: roleDashboardPath[role], label: "Dashboard" },
            { href: "/dashboard/traveler/itinerary-planner", label: "AI Planner" },
        ]
        : baseNavLinks;

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Close dropdown on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setDropdownOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setDropdownOpen(false);
    }, [pathname]);

    // Shadow once page is scrolled
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 4);
        handler();
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const handleLogout = async () => {
        await signOut({ fetchOptions: { onSuccess: () => (window.location.href = "/") } });
    };

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav
            className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-shadow ${
                scrolled ? "border-slate-200 shadow-sm" : "border-slate-100"
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between sm:h-[72px]">
                    <Link href="/" className="flex items-center gap-2.5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-rose-500 to-sky-500 text-white shadow-md">
                            <Plane className="h-5 w-5" />
                        </span>
                        <span className="text-xl font-black text-slate-900">TripPlanner AI</span>
                    </Link>

                    <ul className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive(link.href)
                                            ? "bg-sky-50 text-sky-600"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-sky-600"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3">
                        {isPending ? (
                            <div className="h-10 w-10 animate-pulse rounded-full bg-slate-100" />
                        ) : !isLoggedIn ? (
                            <>
                                <Link
                                    href="/auth/signin"
                                    className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 md:flex"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/auth/signup"
                                    className="hidden rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:scale-[1.02] md:flex"
                                >
                                    Get Started
                                </Link>
                            </>
                        ) : (
                            <div ref={dropdownRef} className="relative hidden md:block">
                                <button
                                    onClick={() => setDropdownOpen((v) => !v)}
                                    aria-haspopup="true"
                                    aria-expanded={dropdownOpen}
                                    className="flex items-center gap-2 rounded-full border border-slate-200 py-1 pl-1 pr-3 transition hover:shadow-sm"
                                >
                                    {user.image ? (
                                        <Image
                                            src={user.image}
                                            alt={user.name ?? "User avatar"}
                                            width={32}
                                            height={32}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-600">
                                            {user.name?.[0]?.toUpperCase()}
                                        </span>
                                    )}
                                    <span className="max-w-[120px] truncate text-sm font-medium text-slate-700">
                                        {user.name}
                                    </span>
                                    <ChevronDown
                                        className={`h-4 w-4 text-slate-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg">
                                        <Link
                                            href={roleDashboardPath[role]}
                                            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-rose-600 hover:bg-rose-50"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden"
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {mobileOpen && (
                    <div className="border-t border-slate-100 py-4 md:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                                        isActive(link.href)
                                            ? "bg-sky-50 text-sky-600"
                                            : "text-slate-600 hover:bg-slate-50"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
                            {!isLoggedIn ? (
                                <>
                                    <Link
                                        href="/auth/signin"
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-xl border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/auth/signup"
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt={user.name ?? "User avatar"}
                                                width={36}
                                                height={36}
                                                className="h-9 w-9 rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-600">
                                                {user.name?.[0]?.toUpperCase()}
                                            </span>
                                        )}
                                        <span className="truncate text-sm font-medium text-slate-700">
                                            {user.name}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setMobileOpen(false);
                                            handleLogout();
                                        }}
                                        className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-rose-600 hover:bg-rose-50"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}