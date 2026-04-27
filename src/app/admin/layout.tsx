"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ShieldCheck, LayoutDashboard, Settings, Users, ShoppingBag, LogOut, Loader2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Admin Layout
 * 
 * Provides sidebar navigation and authentication protection for all admin routes.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcf9f3]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Hide sidebar/layout if on login page (though login is under /admin/login)
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#fcf9f3] flex font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-muted/20 flex flex-col p-6 fixed h-full z-20">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-sm font-headline font-bold">Admin</h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-label">Vedic Nature</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarLink 
            href="/admin" 
            icon={<LayoutDashboard className="w-4 h-4" />} 
            label="Dashboard" 
            active={pathname === "/admin"} 
          />
          <SidebarLink 
            href="/admin/products" 
            icon={<ShoppingBag className="w-4 h-4" />} 
            label="Products" 
            active={pathname.startsWith("/admin/products")}
            subItems={[
              { label: "All Products", href: "/admin/products" },
              { label: "Add New", href: "/admin/products/new" },
              { label: "Categories", href: "/admin/products/categories" },
              { label: "Inventory", href: "/admin/products/inventory" },
            ]}
          />
          <SidebarLink 
            href="/admin/users" 
            icon={<Users className="w-4 h-4" />} 
            label="Customers" 
            active={pathname.startsWith("/admin/users")}
          />
          <SidebarLink 
            href="/admin/settings" 
            icon={<Settings className="w-4 h-4" />} 
            label="Settings" 
            active={pathname.startsWith("/admin/settings")}
          />
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all group"
        >
          <LogOut className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          <span className="text-[11px] uppercase tracking-widest font-label">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}

function SidebarLink({ 
  href, 
  icon, 
  label, 
  active = false,
  subItems 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  subItems?: { label: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(active);
  const pathname = usePathname();

  // Keep dropdown open if a sub-item is active
  useEffect(() => {
    if (active) setIsOpen(true);
  }, [active]);

  return (
    <div className="space-y-1">
      <div 
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-xl transition-all group cursor-pointer",
          active && !subItems
            ? "bg-primary/5 text-primary" 
            : "text-muted-foreground hover:bg-muted/5 hover:text-foreground"
        )}
        onClick={() => subItems && setIsOpen(!isOpen)}
      >
        {subItems ? (
          <div className="flex items-center gap-3 flex-1">
            <div className={cn(
              "transition-transform duration-300",
              active ? "scale-110" : "group-hover:scale-110"
            )}>
              {icon}
            </div>
            <span className="text-[11px] uppercase tracking-widest font-label">{label}</span>
          </div>
        ) : (
          <Link href={href} className="flex items-center gap-3 flex-1">
            <div className={cn(
              "transition-transform duration-300",
              active ? "scale-110" : "group-hover:scale-110"
            )}>
              {icon}
            </div>
            <span className="text-[11px] uppercase tracking-widest font-label">{label}</span>
          </Link>
        )}
        {subItems && (
          <ChevronDown className={cn(
            "w-3 h-3 transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )} />
        )}
      </div>
      
      {subItems && isOpen && (
        <div className="pl-11 space-y-2 py-1 animate-in slide-in-from-top-2 duration-300">
          {subItems.map((item) => {
            const isSubActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block text-[10px] uppercase tracking-[0.15em] transition-colors",
                  isSubActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
