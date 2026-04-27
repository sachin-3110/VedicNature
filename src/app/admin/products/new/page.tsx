"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { ArrowLeft, Upload, Info, Tag, Layers, CreditCard } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert("Product saved successfully (Demo)");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <Link 
        href="/admin/products" 
        className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Products
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-headline tracking-tight text-foreground">Add New Product</h1>
        <p className="text-muted-foreground text-sm font-label uppercase tracking-widest mt-1">Create a new editorial piece</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-12 pb-20">
        {/* Basic Information */}
        <Section title="General Information" icon={<Info className="w-4 h-4" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground">Product Name</Label>
              <Input id="name" placeholder="e.g. Sandalwood & Cedar" className="w-full h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-[10px] uppercase tracking-widest text-muted-foreground">Category</Label>
              <select id="category" className="w-full h-12 bg-transparent border-b border-outline-variant py-3 px-2 font-label text-[11px] uppercase tracking-widest focus:outline-none focus:border-secondary transition-all">
                <option>Fragrances</option>
                <option>Candles</option>
                <option>Home</option>
                <option>Gifting</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description" className="text-[10px] uppercase tracking-widest text-muted-foreground">Description</Label>
              <textarea 
                id="description" 
                rows={4} 
                className="w-full bg-transparent border border-outline-variant rounded-2xl p-4 font-label text-[11px] focus:outline-none focus:border-secondary transition-all"
                placeholder="Describe the botanical essence..."
              />
            </div>
          </div>
        </Section>

        {/* Pricing & Inventory */}
        <Section title="Pricing & Inventory" icon={<CreditCard className="w-4 h-4" />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-[10px] uppercase tracking-widest text-muted-foreground">Price ($)</Label>
              <Input id="price" type="number" placeholder="0.00" className="w-full h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sku" className="text-[10px] uppercase tracking-widest text-muted-foreground">SKU</Label>
              <Input id="sku" placeholder="VN-001" className="w-full h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock" className="text-[10px] uppercase tracking-widest text-muted-foreground">Stock Quantity</Label>
              <Input id="stock" type="number" placeholder="0" className="w-full h-12" />
            </div>
          </div>
        </Section>

        {/* Media */}
        <Section title="Product Media" icon={<Upload className="w-4 h-4" />}>
          <div className="border-2 border-dashed border-muted/20 rounded-[2rem] p-12 text-center hover:bg-muted/5 transition-colors cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-headline text-foreground mb-1">Click to upload images</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-label">PNG, JPG or WebP up to 5MB</p>
          </div>
        </Section>

        <div className="flex gap-4 pt-8">
          <Button type="submit" disabled={isLoading} className="flex-1 h-14 rounded-2xl shadow-xl shadow-primary/10">
            {isLoading ? "Saving..." : "Save Product"}
          </Button>
          <Button variant="ghost" type="button" className="px-10 h-14 rounded-2xl border border-muted/10">
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white/40 backdrop-blur-sm border border-muted/10 rounded-[2.5rem] p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h2 className="text-sm font-label uppercase tracking-[0.2em] font-bold text-foreground/80">{title}</h2>
      </div>
      {children}
    </div>
  );
}
