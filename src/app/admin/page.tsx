"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { LayoutDashboard } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="p-10">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-headline tracking-tight text-foreground">Overview</h1>
          <p className="text-muted-foreground text-sm font-label uppercase tracking-widest mt-1">Welcome back, Administrator</p>
        </div>
        <div className="flex gap-4">
          <Button variant="underline" href="/" target="_blank">
            View Website
          </Button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatCard label="Total Sales" value="$12,450" change="+12%" />
        <StatCard label="Active Orders" value="28" change="+4" />
        <StatCard label="Total Products" value="142" change="0" />
      </div>

      {/* Placeholder for real content */}
      <div className="bg-white/60 backdrop-blur-sm border border-muted/10 rounded-[2rem] p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-20 h-20 rounded-full bg-muted/10 flex items-center justify-center mb-6">
          <LayoutDashboard className="w-8 h-8 text-muted-foreground/40" />
        </div>
        <h3 className="text-xl font-headline mb-2 text-foreground/80">Select a section from the sidebar</h3>
        <p className="text-muted-foreground max-w-sm text-sm">
          This is your administrative control center. Manage your products, orders, and site settings from here.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, change }: { label: string; value: string; change: string }) {
  const isPositive = change.startsWith("+");
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-muted/10 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-label mb-4">{label}</p>
      <div className="flex items-baseline gap-3">
        <h4 className="text-3xl font-headline font-bold">{value}</h4>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          isPositive ? "bg-emerald-50 text-emerald-600" : "bg-muted/10 text-muted-foreground"
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
}
