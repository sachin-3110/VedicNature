"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import { ShoppingBag, Star, ArrowRight, Wind } from 'lucide-react';
import { useStore } from '@/contexts/StoreContext';
import { WishlistButton } from '../ui/WishlistButton';

export const TopSellingSection = () => {
  const { addToCart, addToWishlist, isInWishlist } = useStore();
  // Filter for best sellers - now showing all 12 as requested
  const topProducts = PRODUCTS.filter(p => p.bestSeller);

  return (
    <section className="py-24 bg-[#fcf9f3]">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-secondary mb-4 font-label">Curated Collection</h2>
            <h3 className="text-4xl md:text-5xl font-headline tracking-tight text-foreground leading-tight">
              Our Most Coveted <br />
              <span className="italic font-normal text-primary/70">Botanical Masterpieces</span>
            </h3>
          </div>
          <Link
            href="/shop"
            className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-label text-primary/80 hover:text-primary transition-colors"
          >
            Explore Full Catalog
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {topProducts.map((product) => {
            const isWishlisted = isInWishlist(product.id);

            return (
              <div key={product.id} className="group relative grid grid-cols-1 sm:grid-cols-5 gap-8 items-center bg-primary/10 p-6 rounded-3xl border border-transparent hover:border-stone-200/50 transition-all duration-500">
                {/* Image Section */}
                <div className="sm:col-span-2 relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 shadow-xl shadow-stone-200/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/60 backdrop-blur-md text-white text-[8px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                      Best Seller
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="sm:col-span-3 flex flex-col h-full justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-primary/60 font-label">{product.category}</span>
                    <div className="flex items-center gap-1 text-primary/60">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[9px] font-label">{product.rating}</span>
                    </div>
                  </div>

                  <Link href={`/product/${product.id}`} className="block mb-3">
                    <h4 className="text-2xl font-headline tracking-tight text-foreground hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h4>
                  </Link>

                  <p className="text-stone-500 text-xs line-clamp-2 mb-6 font-label leading-relaxed italic">
                    "{product.description}"
                  </p>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {product.notes && (
                      <div className="flex items-center gap-2 bg-[#fcf9f3] px-3 py-1.5 rounded-full border border-stone-200/50">
                        <Wind className="w-3 h-3 text-primary/40" />
                        <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">{product.notes.top.split(',')[0]}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 bg-[#fcf9f3] px-3 py-1.5 rounded-full border border-stone-200/50">
                      <span className="text-[9px] uppercase tracking-widest text-primary/60 font-medium">{product.longevity}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-xl font-label text-primary font-medium">
                      ₹{product.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-3">
                      <WishlistButton 
                        product={product} 
                        className="w-10 h-10 border border-stone-200"
                        iconClassName="w-4 h-4"
                      />
                      <button
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-2 justify-center bg-primary/60 text-white py-2 px-3 rounded-full text-[10px] uppercase font-semibold hover:bg-primary transition-all duration-300 shadow-lg shadow-secondary/10"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <div className='relative top-[1.5px]'>Add
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Invisible link for the whole card area (except buttons) */}
                {/* <Link href={`/product/${product.id}`} className="absolute inset-0 z-0 pointer-events-none sm:pointer-events-auto" aria-hidden="true" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
