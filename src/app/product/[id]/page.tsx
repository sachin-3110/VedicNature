"use client";

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ShieldCheck, Truck, RotateCcw, Droplets, Wind, Sparkles, Heart } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';
import { useStore } from '@/contexts/StoreContext';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { isInWishlist, addToWishlist, removeFromWishlist, addToCart } = useStore();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf9f3]">
        <h1 className="text-3xl font-serif text-[#1c1c18] mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-[#775a19] border-b border-[#775a19] pb-1 uppercase tracking-widest text-xs hover:text-[#111] transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  // Find related products (same category, exclude current)
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-24 pb-20 font-sans text-[#1c1c18]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <Link href="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5f5e5e] hover:text-[#775a19] transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-sm flex items-center justify-center p-8 group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8 md:p-16 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {product.stock === 0 && (
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <span className="bg-[#1c1c18] text-white text-sm uppercase tracking-widest px-6 py-2 rounded-sm font-medium">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-sans tracking-[0.3em] text-[#775a19] uppercase mb-4 block">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#111] mb-6 tracking-tight">
              {product.name}
            </h1>

            {/* Reviews Summary */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center text-[#775a19]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 5) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-sm text-[#5f5e5e]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-3xl font-serif text-[#1c1c18] mb-8">₹{product.price}</p>

            {/* Scent Summary */}
            <p className="text-[#5f5e5e] text-lg leading-relaxed mb-10 border-l-2 border-[#775a19] pl-6 italic">
              {product.description}
            </p>

            {/* CTA */}
            <div className="flex flex-row gap-4 mb-14 w-full md:w-3/4">
              <button
                disabled={product.stock === 0}
                onClick={() => {
                  if (product.stock !== 0) {
                    addToCart(product);
                  }
                }}
                className={`flex-1 text-white py-4 px-8 rounded-full uppercase tracking-[0.2em] text-xs font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-105 ${product.stock === 0
                    ? 'bg-[#d1c5b4] !cursor-not-allowed text-[#7f7667] active:!scale-100'
                    : 'bg-[#1c1c18] hover:bg-[#775a19]'
                  }`}
              >
                {product.stock === 0 ? 'Out of Stock' : `Add to Cart — ₹${product.price}`}
              </button>
              <button
                onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                className="flex-none w-[52px] h-[52px] rounded-full border border-[#d1c5b4] flex items-center justify-center text-[#775a19] hover:bg-[#775a19] hover:text-white transition-all duration-200 cursor-pointer active:scale-105 group/heart"
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 transition-colors ${isInWishlist(product.id) ? 'fill-[#775a19] text-[#775a19] hover:fill-white hover:text-white' : 'group-hover/heart:fill-current'}`} />
              </button>
            </div>

            {/* Core Info Grid */}
            <div className="grid grid-cols-2 gap-6 border-t border-[#d1c5b4]/40 pt-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7f7667] block mb-1">Longevity</span>
                <span className="font-medium">{product.longevity}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7f7667] block mb-1">Projection</span>
                <span className="font-medium">{product.projection}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] uppercase tracking-widest text-[#7f7667] block mb-1">Personality</span>
                <span className="font-medium">{product.personality}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Breakdown */}
        <section className="py-20 border-t border-[#d1c5b4]/40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-[#111] mb-4">Perfume Notes</h2>
            <p className="text-[#5f5e5e]">Discover the delicate layers of scent that slowly reveal themselves as the fragrance matures on your skin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Wind className="w-8 h-8 text-[#775a19] mb-6" strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest text-[#7f7667] mb-3">Top Notes</h3>
              <p className="font-serif text-xl md:text-2xl text-[#1c1c18]">{product.notes?.top}</p>
              <p className="text-xs text-[#5f5e5e] mt-4 leading-relaxed">The initial impression, bright, fresh and fleeting.</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Droplets className="w-8 h-8 text-[#775a19] mb-6" strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest text-[#7f7667] mb-3">Heart Notes</h3>
              <p className="font-serif text-xl md:text-2xl text-[#1c1c18]">{product.notes?.heart}</p>
              <p className="text-xs text-[#5f5e5e] mt-4 leading-relaxed">The core character, emerging intimately as it dries down.</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Sparkles className="w-8 h-8 text-[#775a19] mb-6" strokeWidth={1} />
              <h3 className="text-xs uppercase tracking-widest text-[#7f7667] mb-3">Base Notes</h3>
              <p className="font-serif text-xl md:text-2xl text-[#1c1c18]">{product.notes?.base}</p>
              <p className="text-xs text-[#5f5e5e] mt-4 leading-relaxed">The enduring foundation that subtly lingers for hours.</p>
            </div>
          </div>
        </section>

        {/* Shipping & Trust */}
        <section className="py-12 md:py-16 border border-[#d1c5b4]/40 bg-white/40 rounded-3xl mb-24 px-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
              <Truck className="w-8 h-8 text-[#775a19]" strokeWidth={1} />
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-1">Free Shipping</h4>
                <p className="text-xs text-[#5f5e5e]">On all orders over ₹2000.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#775a19]" strokeWidth={1} />
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-1">100% Authentic</h4>
                <p className="text-xs text-[#5f5e5e]">Pure, distilled botanical ingredients.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <RotateCcw className="w-8 h-8 text-[#775a19]" strokeWidth={1} />
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-1">Easy Returns</h4>
                <p className="text-xs text-[#5f5e5e]">7-day return policy on unused items.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-10 border-t border-[#d1c5b4]/40 pt-10">
            <h2 className="text-3xl font-serif text-[#111] mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {relatedProducts.map(rp => (
                <Link href={`/product/${rp.id}`} key={rp.id} className="group flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white mb-2 p-6 flex justify-center items-center">
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      fill
                      className="object-contain p-6 md:p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center pb-8 px-4">
                    <span className="text-[10px] text-[#7f7667] uppercase tracking-[0.2em] mb-2">{rp.category}</span>
                    <h3 className="text-lg font-serif text-[#1c1c18] group-hover:text-[#775a19] transition-colors">{rp.name}</h3>
                    <p className="text-sm font-medium mt-2">₹{rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
