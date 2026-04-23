"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useStore } from '@/contexts/StoreContext';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, isLoaded } = useStore();
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
        <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-12 tracking-tight border-b border-[#d1c5b4]/40 pb-6">Your Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center text-center py-20">
            <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#775a19] fill-[#775a19]/10" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-serif text-[#111] mb-4">Your wishlist is empty</h2>
            <p className="text-[#5f5e5e] max-w-lg mb-10">
              Explore our collection and add your favorite botanical fragrances to your wishlist.
            </p>
            <Link 
              href="/shop" 
              className="bg-[#1c1c18] text-white hover:bg-[#775a19] transition-colors duration-500 py-4 px-10 rounded-full uppercase tracking-[0.2em] text-xs font-medium"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map(product => (
              <div key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                {/* Image Area */}
                <div className="relative aspect-[4/5] bg-[#fcf9f3] overflow-hidden">
                  <Link href={`/product/${product.id}`} className="block w-full h-full p-8 relative z-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </Link>
                  <button 
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 z-10 p-2.5 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all text-[#5f5e5e] hover:text-red-500 shadow-sm"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Info Area */}
                <div className="flex flex-col p-6 flex-1">
                  <span className="text-[10px] text-[#7f7667] uppercase tracking-[0.2em] mb-2 block">{product.category}</span>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-serif text-[#1c1c18] hover:text-[#775a19] transition-colors mb-2">{product.name}</h3>
                  </Link>
                  <p className="text-base font-medium mb-6">₹{product.price}</p>
                  
                  <div className="mt-auto pt-4 border-t border-[#d1c5b4]/30">
                    <button 
                      onClick={() => {
                        addToCart(product);
                        removeFromWishlist(product.id);
                      }}
                      className="w-full bg-[#fcf9f3] text-[#1c1c18] border border-[#d1c5b4] hover:bg-[#1c1c18] hover:text-white transition-colors duration-300 py-3 px-4 rounded-full uppercase tracking-widest text-[10px] font-medium flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" /> Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
