"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Tag, Plus, Trash2, Edit2, LayoutGrid } from "lucide-react";

export default function CategoriesPage() {
  const categories = [
    { id: 1, name: "Fragrances", slug: "fragrances", count: 42 },
    { id: 2, name: "Candles", slug: "candles", count: 28 },
    { id: 3, name: "Home", slug: "home", count: 15 },
    { id: 4, name: "Gifting", slug: "gifting", count: 12 },
  ];

  return (
    <div className="p-10">
      <header className="mb-12">
        <h1 className="text-3xl font-headline tracking-tight text-foreground">Categories</h1>
        <p className="text-muted-foreground text-sm font-label uppercase tracking-widest mt-1">Organize your botanical collections</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Add Category Form */}
        <div className="lg:col-span-1">
          <div className="bg-white/40 backdrop-blur-sm border border-muted/10 rounded-[2.5rem] p-8 sticky top-10">
            <h2 className="text-sm font-label uppercase tracking-[0.2em] font-bold text-foreground/80 mb-8">Add New Category</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cat-name" className="text-[10px] uppercase tracking-widest text-muted-foreground">Name</Label>
                <Input id="cat-name" placeholder="Category Name" className="w-full h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cat-slug" className="text-[10px] uppercase tracking-widest text-muted-foreground">Slug</Label>
                <Input id="cat-slug" placeholder="category-slug" className="w-full h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cat-desc" className="text-[10px] uppercase tracking-widest text-muted-foreground">Description</Label>
                <textarea 
                  id="cat-desc" 
                  rows={3} 
                  className="w-full bg-transparent border border-outline-variant rounded-2xl p-4 font-label text-[11px] focus:outline-none focus:border-secondary transition-all"
                  placeholder="Optional description..."
                />
              </div>
              <Button type="submit" className="w-full h-12 rounded-2xl">
                Add Category
              </Button>
            </form>
          </div>
        </div>

        {/* Categories List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white/60 backdrop-blur-sm border border-muted/10 rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-muted/10">
                  <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Name</th>
                  <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Slug</th>
                  <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Count</th>
                  <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id} className="border-b border-muted/5 hover:bg-muted/5 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary/40">
                          <LayoutGrid className="w-4 h-4" />
                        </div>
                        <span className="font-headline text-sm font-semibold">{cat.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-label text-[10px] text-muted-foreground uppercase tracking-widest">{cat.slug}</td>
                    <td className="px-8 py-6 text-sm">{cat.count} products</td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary/5 rounded-lg text-primary transition-colors">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-2 hover:bg-destructive/5 rounded-lg text-destructive transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
