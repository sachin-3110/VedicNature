"use client";

import { use } from "react";
import { categories } from "../page";
import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";

export default function CollectionDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  
  // Check if it's a category
  const category = categories.find((c) => c.slug === resolvedParams.slug);

  // If not a category, check if it's a product ID
  const product = !category 
    ? PRODUCTS.find(p => p.id.toString() === resolvedParams.slug)
    : null;

  if (!category && !product) {
    notFound();
  }

  // RENDER PRODUCT PAGE
  if (product) {
    return (
      <main className="min-h-screen bg-[#fcf9f3] pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-16">
          <button 
            onClick={() => router.back()} 
            className="group flex items-center gap-3 text-xs font-sans tracking-widest text-[#775a19] uppercase hover:text-[#111] transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
            <span>Back to Collections</span>
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative aspect-[4/5] bg-white rounded-3xl flex items-center justify-center p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
              {product.stock === 0 && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                  <span className="bg-[#1c1c18] text-white text-sm uppercase tracking-widest px-6 py-2 rounded-sm font-medium">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            
            {/* Content Side */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-sans tracking-[0.3em] text-[#775a19] uppercase">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-[#111] tracking-tight">
                  {product.name}
                </h1>
                <p className="text-3xl font-serif text-[#1c1c18]">₹{product.price}</p>
              </div>
              
              <div className="h-px w-full bg-[#775a19]/10"></div>
              
              <p className="text-[#5f5e5e] font-sans text-lg tracking-wide leading-relaxed italic border-l-2 border-[#775a19] pl-4">
                {product.description}
              </p>
              
              <div className="flex flex-row gap-4 mt-4 w-full md:w-3/4">
                <button 
                  disabled={product.stock === 0}
                  onClick={() => {
                    if (product.stock !== 0) {
                      addToCart(product);
                    }
                  }}
                  className={`flex-1 text-white px-8 py-4 rounded-full font-sans text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer active:scale-105 ${
                    product.stock === 0
                      ? 'bg-[#d1c5b4] !cursor-not-allowed text-[#7f7667] active:!scale-100'
                      : 'bg-[#111] hover:bg-[#775a19] group'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                </button>
                <button 
                  onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                  className="flex-none w-[52px] h-[52px] rounded-full border border-[#d1c5b4] flex items-center justify-center text-[#775a19] hover:bg-[#775a19] hover:text-white transition-all duration-200 cursor-pointer active:scale-105 group/heart" 
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-5 h-5 transition-colors ${isInWishlist(product.id) ? 'fill-[#775a19] text-[#775a19] hover:fill-white hover:text-white' : 'group-hover/heart:fill-current'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // RENDER CATEGORY PAGE
  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        <Link 
          href="/collections" 
          className="group flex items-center gap-3 text-xs font-sans tracking-widest text-[#775a19] uppercase hover:text-[#111] transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
          <span>Back to Collections</span>
        </Link>
        
        <header className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-xs font-sans tracking-[0.3em] text-[#775a19] uppercase mb-6 block">
            Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#111] tracking-tight mb-8">
            <span className="italic text-[#775a19]">{category?.title.split(' ')[0]}</span>{' '}
            {category?.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-[#5f5e5e] font-sans text-lg tracking-wide leading-relaxed">
            {category?.description}
          </p>
        </header>

        <div className="flex flex-row flex-wrap gap-y-14" style={{ gap: '1rem' }}>
          {category?.products.map((item) => (
            <Link
              href={`/collections/${item.id}`}
              key={item.id}
              className="group rounded-2xl flex flex-col gap-6 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <div className="relative h-full aspect-[4/5] bg-white rounded-2xl flex items-center justify-center p-2 overflow-hidden transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-contain p-4 transition-transform duration-1000 ease-out"
                />
                
                {/* Access stock from global PRODUCTS array since category.products doesn't have it directly mapped */}
                {PRODUCTS.find(p => p.id === item.id)?.stock === 0 && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                    <span className="bg-[#1c1c18] text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#5f5e5e] uppercase">
                  {item.category}
                </span>
                <h3 className="text-lg md:text-xl font-serif text-[#111] group-hover:text-[#775a19] transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
