"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Plus, MoreHorizontal, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/Input";

export default function AllProductsPage() {
  const products = [
    { id: 1, name: "Sandalwood & Cedar", category: "Fragrances", price: "$85.00", stock: 24, status: "Active" },
    { id: 2, name: "Midnight Jasmine", category: "Candles", price: "$42.00", stock: 12, status: "Active" },
    { id: 3, name: "Eternal Moss", category: "Fragrances", price: "$95.00", stock: 0, status: "Out of Stock" },
    { id: 4, name: "Velvet Oud", category: "Home", price: "$120.00", stock: 8, status: "Active" },
    { id: 5, name: "Golden Myrrh", category: "Gifting", price: "$150.00", stock: 15, status: "Draft" },
  ];

  return (
    <div className="p-10">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-headline tracking-tight text-foreground">All Products</h1>
          <p className="text-muted-foreground text-sm font-label uppercase tracking-widest mt-1">Manage your catalog</p>
        </div>
        <Button href="/admin/products/new" className="flex items-center gap-2 px-6">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </Button>
      </header>

      {/* Filters & Search */}
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search products..." 
            className="pl-12 w-full h-12 bg-white/50 border-muted/20 rounded-2xl"
          />
        </div>
        <Button variant="ghost" className="h-12 px-6 rounded-2xl border border-muted/10 bg-white/50">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Products Table */}
      <div className="bg-white/60 backdrop-blur-sm border border-muted/10 rounded-[2rem] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-muted/10">
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Product</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Category</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Price</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Stock</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Status</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-muted/5 hover:bg-muted/5 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted/10 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-muted-foreground/40" />
                    </div>
                    <span className="font-headline text-sm font-semibold">{product.name}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-[10px] uppercase tracking-widest font-label bg-muted/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </td>
                <td className="px-8 py-6 font-medium text-sm">{product.price}</td>
                <td className="px-8 py-6 text-sm">{product.stock} in stock</td>
                <td className="px-8 py-6">
                  <span className={`text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-md ${
                    product.status === "Active" ? "bg-emerald-50 text-emerald-600" : 
                    product.status === "Out of Stock" ? "bg-destructive/5 text-destructive" : 
                    "bg-orange-50 text-orange-600"
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 hover:bg-muted/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
