"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Box, AlertTriangle, CheckCircle2, History, ArrowUpDown } from "lucide-react";

export default function InventoryPage() {
  const inventory = [
    { id: 1, name: "Sandalwood & Cedar", sku: "VN-001", stock: 24, minStock: 10, status: "Healthy" },
    { id: 2, name: "Midnight Jasmine", sku: "VN-002", stock: 5, minStock: 8, status: "Low Stock" },
    { id: 3, name: "Eternal Moss", sku: "VN-003", stock: 0, minStock: 5, status: "Out of Stock" },
    { id: 4, name: "Velvet Oud", sku: "VN-004", stock: 112, minStock: 20, status: "Healthy" },
  ];

  return (
    <div className="p-10">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-headline tracking-tight text-foreground">Inventory</h1>
          <p className="text-muted-foreground text-sm font-label uppercase tracking-widest mt-1">Track and manage stock levels</p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" className="h-12 px-6 rounded-2xl border border-muted/10 bg-white/50">
            <History className="w-4 h-4 mr-2" />
            Stock History
          </Button>
          <Button className="h-12 px-6 rounded-2xl">
            Update All
          </Button>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <InventoryStat label="Total SKU" value="142" />
        <InventoryStat label="Low Stock" value="12" color="text-orange-600" />
        <InventoryStat label="Out of Stock" value="4" color="text-destructive" />
        <InventoryStat label="Stock Value" value="$24,500" />
      </div>

      {/* Inventory Table */}
      <div className="bg-white/60 backdrop-blur-sm border border-muted/10 rounded-[2rem] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-muted/10">
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Product</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">SKU</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Current Stock</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Min. Stock</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground">Status</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-[0.2em] font-label text-muted-foreground text-right">Adjust</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-b border-muted/5 hover:bg-muted/5 transition-colors group">
                <td className="px-8 py-6 font-headline text-sm font-semibold">{item.name}</td>
                <td className="px-8 py-6 font-label text-[10px] text-muted-foreground uppercase tracking-widest">{item.sku}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base">{item.stock}</span>
                    <button className="p-1 hover:bg-muted/10 rounded text-muted-foreground">
                      <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </div>
                </td>
                <td className="px-8 py-6 text-sm text-muted-foreground">{item.minStock}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    {item.status === "Healthy" ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <AlertTriangle className={`w-3.5 h-3.5 ${item.status === "Low Stock" ? "text-orange-500" : "text-destructive"}`} />
                    )}
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${
                      item.status === "Healthy" ? "text-emerald-600" : 
                      item.status === "Low Stock" ? "text-orange-600" : 
                      "text-destructive"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <input 
                      type="number" 
                      placeholder="+/-" 
                      className="w-16 h-8 bg-white border border-muted/20 rounded-lg px-2 text-[10px] focus:outline-none focus:border-primary" 
                    />
                    <Button variant="ghost" className="h-8 px-3 text-[9px] uppercase tracking-widest border border-muted/10">Apply</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InventoryStat({ label, value, color = "text-foreground" }: { label: string; value: string; color?: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-muted/10 shadow-sm">
      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-label mb-2">{label}</p>
      <h4 className={`text-xl font-headline font-bold ${color}`}>{value}</h4>
    </div>
  );
}
