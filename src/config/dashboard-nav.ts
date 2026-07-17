import {
    LayoutDashboard,
    Compass,
    Sparkles,
    Heart,
    CalendarCheck,
    UserRound,
    PlusCircle,
    MapPinned,
    ClipboardList,
    Users,
    BarChart3,
    Settings,
    type LucideIcon,
} from "lucide-react";

export type Role = "admin" | "operator" | "traveler";

export interface DashboardNavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const roleDashboardPath: Record<Role, string> = {
    admin: "/dashboard/admin",
    operator: "/dashboard/operator",
    traveler: "/dashboard/traveler",
};

export const roleProfilePath: Record<Role, string> = {
    admin: "/dashboard/admin/settings",
    operator: "/dashboard/operator/profile",
    traveler: "/dashboard/traveler/profile",
};

export const dashboardNav: Record<Role, DashboardNavItem[]> = {
    admin: [
        { href: "/dashboard/admin", label: "Dashboard", icon: LayoutDashboard },
        { href: "/dashboard/admin/users", label: "Manage Users", icon: Users },
        { href: "/dashboard/admin/trips", label: "Manage Trips", icon: MapPinned },
        { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
    ],
    operator: [
        { href: "/dashboard/operator", label: "Dashboard", icon: LayoutDashboard },
        { href: "/dashboard/operator/trips/add", label: "Add Trip", icon: PlusCircle },
        { href: "/dashboard/operator/trips", label: "My Trips", icon: MapPinned },
        { href: "/dashboard/operator/bookings", label: "Bookings", icon: ClipboardList },
        { href: "/dashboard/operator/profile", label: "Profile", icon: UserRound },
    ],
    traveler: [
        { href: "/dashboard/traveler", label: "Dashboard", icon: LayoutDashboard },
        { href: "/trips", label: "Explore Trips", icon: Compass },
        { href: "/dashboard/traveler/itinerary-planner", label: "AI Itinerary Planner", icon: Sparkles },
        { href: "/dashboard/traveler/recommendations", label: "Recommended for You", icon: BarChart3 },
        { href: "/dashboard/traveler/saved", label: "Saved Trips", icon: Heart },
        { href: "/dashboard/traveler/bookings", label: "My Bookings", icon: CalendarCheck },
        { href: "/dashboard/traveler/profile", label: "Profile", icon: UserRound },
    ],
};

export function getRole(userRole?: string | null): Role {
    if (userRole === "admin" || userRole === "operator" || userRole === "traveler") return userRole;
    return "traveler";
}