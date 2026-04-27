"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { ShieldCheck, User, Lock, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

/**
 * Admin Login Page
 * 
 * Simple but elegant login page for the admin portal.
 * Credentials:
 * - Username: admin
 * - Password: admin
 */
export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate authentication logic
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        // In a real app, you'd set a secure cookie or JWT
        localStorage.setItem("admin_auth", "true");
        // Redirect to admin dashboard (to be created)
        router.push("/admin");
      } else {
        setError("Invalid username or password. Please try again.");
        setIsLoading(false);
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#fcf9f3] relative overflow-hidden font-body">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Link 
          href="/" 
          className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Homepage
        </Link>

        <div className="bg-white/40 backdrop-blur-2xl border border-white/40 p-10 md:p-12 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/5 text-primary mb-6 ring-1 ring-primary/10">
              <ShieldCheck className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h1 className="text-2xl font-headline tracking-tight text-foreground mb-3">Admin Portal</h1>
            <p className="text-muted-foreground text-sm font-label uppercase tracking-widest leading-relaxed">
              Vedic Nature Management
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="username" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-1">
                Username
              </Label>
              <div className="relative group">
                <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-secondary" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  className="pl-8 w-full border-b-muted/30 focus:border-secondary h-12 transition-all"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-1">
                Password
              </Label>
              <div className="relative group">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-secondary" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-8 w-full border-b-muted/30 focus:border-secondary h-12 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-2xl bg-destructive/5 border border-destructive/10 text-destructive text-[11px] font-label uppercase tracking-wider text-center animate-in zoom-in-95 duration-300">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full h-14 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 disabled:opacity-70 disabled:scale-100"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </div>
              ) : (
                "Access Dashboard"
              )}
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-muted/10 text-center">
            <p className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-label">
              © {new Date().getFullYear()} Vedic Nature • Secure Access
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle UI Detail */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none transition-opacity duration-1000">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </main>
  );
}
