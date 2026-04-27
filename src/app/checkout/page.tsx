"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/contexts/StoreContext';
import { ArrowLeft, CheckCircle2, CreditCard, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';

export default function CheckoutPage() {
  const { cart, cartTotal, isLoaded } = useStore();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return <main className="min-h-screen bg-[#fcf9f3]" />;
  }

  const shippingCost = cartTotal > 2000 ? 0 : 100;
  const finalTotal = cartTotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 2000);
  };

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-[#fcf9f3] pt-40 pb-20 flex flex-col items-center px-6 text-center">
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-12 h-12 text-emerald-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-headline italic text-primary mb-4">Order Confirmed</h1>
        <p className="text-stone-600 max-w-md mb-12 font-label tracking-wide">
          Thank you for your purchase. Your botanical journey has begun. We've sent a confirmation email to your inbox.
        </p>
        <div className="flex gap-4">
          <Button href="/shop">Continue Shopping</Button>
          <Button variant="ghost" href="/">Back to Home</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <header className="mb-12">
          <Link href="/cart" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-primary/60 hover:text-primary mb-8 group transition-colors">
            <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Cart
          </Link>
          <h1 className="text-4xl md:text-5xl font-headline italic tracking-tight text-primary">Checkout</h1>
        </header>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Checkout Form */}
          <div className="lg:col-span-7 space-y-12">
            {/* Contact Information */}
            <section className="bg-white/40 backdrop-blur-sm border border-stone-200/50 rounded-[2.5rem] p-10">
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary/80 mb-8 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px]">1</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="email@example.com" required className="bg-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 00000 00000" required className="bg-white/50" />
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section className="bg-white/40 backdrop-blur-sm border border-stone-200/50 rounded-[2.5rem] p-10">
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary/80 mb-8 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px]">2</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required className="bg-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required className="bg-white/50" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Suite, Street, Apartment..." required className="bg-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required className="bg-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" required className="bg-white/50" />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white/40 backdrop-blur-sm border border-stone-200/50 rounded-[2.5rem] p-10">
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary/80 mb-8 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px]">3</span>
                Payment Method
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border border-primary/20 rounded-xl bg-white/50 cursor-pointer hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-5 h-5 text-primary/60" />
                    <span className="text-[11px] uppercase tracking-widest font-medium">Credit / Debit Card</span>
                  </div>
                  <input type="radio" name="payment" defaultChecked className="accent-primary" />
                </label>
                <label className="flex items-center justify-between p-4 border border-stone-200/50 rounded-xl bg-white/20 cursor-pointer hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <Truck className="w-5 h-5 text-primary/40" />
                    <span className="text-[11px] uppercase tracking-widest font-medium text-stone-500">Cash on Delivery</span>
                  </div>
                  <input type="radio" name="payment" className="accent-primary" />
                </label>
              </div>
            </section>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white/60 backdrop-blur-md border border-stone-200/50 rounded-[2.5rem] p-10 sticky top-32 shadow-xl shadow-stone-200/10">
              <h2 className="text-xl font-headline italic mb-8 border-b border-stone-200/60 pb-6">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-16 h-16 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">{item.product.name}</h4>
                      <div className="flex justify-between items-center text-[10px] text-stone-500 uppercase tracking-widest">
                        <span>Qty: {item.quantity}</span>
                        <span>₹{(item.product.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-stone-200/60 mb-8">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-500">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-500">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-stone-200/60">
                  <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-primary">Total</span>
                  <span className="text-2xl font-label font-bold text-primary">₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-6">
                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-primary text-white py-5 rounded-2xl text-[11px] uppercase tracking-[0.3em] font-bold shadow-xl shadow-primary/20 hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>
                <div className="flex items-center justify-center gap-2 text-[8px] uppercase tracking-widest text-stone-400">
                  <ShieldCheck className="w-3 h-3" />
                  Secure Encrypted Checkout
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
