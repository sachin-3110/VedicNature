"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useStore } from '@/contexts/StoreContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isLoaded } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return <main className="min-h-screen bg-[#fcf9f3]" />; // minimal flash prevention
  }

  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-32 pb-20 font-sans text-[#1c1c18]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-12 tracking-tight border-b border-[#d1c5b4]/40 pb-6">Your Cart</h1>
        
        {cart.length === 0 ? (
          <div className="flex flex-col items-center text-center py-20">
            <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-[#775a19]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-serif text-[#111] mb-4">Your cart is empty</h2>
            <p className="text-[#5f5e5e] max-w-lg mb-10">
              You haven't added any products to your cart yet. Discover our premium botanical fragrances.
            </p>
            <Link 
              href="/shop" 
              className="bg-[#1c1c18] text-white hover:bg-[#775a19] transition-colors duration-500 py-4 px-10 rounded-full uppercase tracking-[0.2em] text-xs font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#d1c5b4]/40 pb-4 mb-6 text-xs uppercase tracking-widest text-[#7f7667]">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white p-4 md:p-0 md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none border-b-0 md:border-b border-[#d1c5b4]/20 md:pb-6">
                    {/* Product Info */}
                    <div className="col-span-1 md:col-span-6 flex items-center gap-4">
                      <Link href={`/product/${item.product.id}`} className="relative w-20 h-24 md:w-24 md:h-28 bg-[#fcf9f3] rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-2"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#7f7667] uppercase tracking-[0.2em] mb-1">{item.product.category}</span>
                        <Link href={`/product/${item.product.id}`} className="text-base font-serif text-[#1c1c18] hover:text-[#775a19] transition-colors mb-1">
                          {item.product.name}
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[10px] uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors self-start mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Mobile Price Display (hidden on desktop) */}
                    <div className="md:hidden flex justify-between items-center w-full mt-2">
                      <span className="text-sm">Price:</span>
                      <span className="font-medium">₹{item.product.price}</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center mt-2 md:mt-0">
                      <span className="md:hidden text-sm text-[#5f5e5e]">Quantity:</span>
                      <div className="flex items-center border border-[#d1c5b4] rounded-full px-3 py-1 bg-[#fcf9f3]">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-[#5f5e5e] hover:text-[#1c1c18] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-[#5f5e5e] hover:text-[#1c1c18] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Unit Price (Desktop only) */}
                    <div className="col-span-2 text-right hidden md:block">
                      <span className="text-sm">₹{item.product.price}</span>
                    </div>

                    {/* Total Price */}
                    <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center mt-4 md:mt-0 pt-4 md:pt-0 border-t border-[#d1c5b4]/20 md:border-none">
                      <span className="md:hidden text-sm font-medium">Subtotal:</span>
                      <span className="font-medium text-base">₹{item.product.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[380px] flex-shrink-0">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#d1c5b4]/30 sticky top-32">
                <h2 className="text-xl font-serif mb-6 border-b border-[#d1c5b4]/40 pb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm text-[#5f5e5e]">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#5f5e5e]">
                    <span>Shipping</span>
                    <span>{cartTotal > 2000 ? 'Free' : '₹100'}</span>
                  </div>
                  {cartTotal <= 2000 && (
                    <p className="text-[10px] text-[#775a19] text-right">
                      Add ₹{2000 - cartTotal} more for free shipping
                    </p>
                  )}
                </div>

                <div className="flex justify-between items-center border-t border-[#d1c5b4]/40 pt-4 mb-8">
                  <span className="font-serif text-lg">Total</span>
                  <span className="font-serif text-2xl text-[#111]">₹{cartTotal > 2000 ? cartTotal : cartTotal + 100}</span>
                </div>

                <button className="w-full bg-[#1c1c18] text-white hover:bg-[#775a19] transition-colors duration-500 py-4 px-6 rounded-full uppercase tracking-[0.2em] text-xs font-medium flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
