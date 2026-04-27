"use client";

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';
import { useStore } from '@/contexts/StoreContext';
import { ShoppingBag, Star, ArrowLeft, Shield, Truck, RefreshCw, ChevronRight, Minus, Plus, Wind, Zap, Sparkles, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { TopSellingSection } from '@/components/sections/TopSellingSection';
import { WishlistButton } from '@/components/ui/WishlistButton';
import { useRouter } from 'next/navigation';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { addToCart, addToWishlist, isInWishlist, updateQuantity, cart } = useStore();

  // Convert string ID from URL to number
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#fcf9f3]">
        <h1 className="text-4xl font-headline mb-4">Product Not Found</h1>
        <Button href="/shop">Back to Shop</Button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleQuantity = (type: 'inc' | 'dec') => {
    if (type === 'inc') setQuantity(prev => prev + 1);
    else if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <main className="bg-[#fcf9f3] pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Image Display */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square overflow-hidden bg-stone-100 rounded-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {product.notes && (
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-gray-400/20 p-4 rounded-xl border border-stone-200/50 flex flex-col items-center text-center">
                  <Wind className="w-4 h-4 text-primary/80 mb-2" />
                  <span className="text-[15px] uppercase tracking-widest text-primary/80 mb-1">Top Notes</span>
                  <span className="text-[12px] font-bold text-primary/80 leading-tight">{product.notes.top}</span>
                </div>
                <div className="bg-gray-400/20 p-4 rounded-xl border border-stone-200/50 flex flex-col items-center text-center">
                  <Zap className="w-4 h-4 text-primary/70 mb-2" />
                  <span className="text-[15px] tracking-widest text-primary/70 mb-1">Heart Notes</span>
                  <span className="text-[12px] font-bold text-primary/70 leading-tight">{product.notes.heart}</span>
                </div>
                <div className="bg-gray-400/20 p-4 rounded-xl border border-stone-200/50 flex flex-col items-center text-center">
                  <Sparkles className="w-4 h-4 text-primary/70 mb-2" />
                  <span className="text-[15px] tracking-widest text-primary/70 mb-1">Base Notes</span>
                  <span className="text-[12px] font-bold text-primary/70 leading-tight">{product.notes.base}</span>
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-label">{product.category}</span>
                {product.bestSeller && (
                  <span className="bg-primary/80 text-white text-[8px] uppercase tracking-[0.2em] px-3 py-1 rounded-full">Best Seller</span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-headline tracking-tight text-foreground mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-6 mb-6">
                <p className="text-2xl font-label text-primary/70 font-medium">₹{product.price.toLocaleString()}</p>
                <div className="h-4 w-[1px] bg-gray-700" />
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn("w-3 h-3", i < Math.floor(product.rating || 5) ? "fill-secondary text-primary" : "text-primary/40")}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-secondary/60 font-label">({product.reviews || 0} Reviews)</span>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed max-w-xl font-label text-sm tracking-wide">
                {product.description}
              </p>
            </div>

            {/* Promotional Offers */}


            {/* Characteristics Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-4 py-6 border-y border-stone-200/60">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-primary-700/60 block mb-1">Longevity</span>
                <span className="text-[11px] uppercase tracking-wider font-medium text-primary-700/60">{product.longevity}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-primary-700/60 block mb-1">Projection</span>
                <span className="text-[11px] uppercase tracking-wider font-medium text-primary-700/60">{product.projection}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-primary-700/60 block mb-1">Personality</span>
                <span className="text-[11px] uppercase tracking-wider font-medium text-primary-700/60">{product.personality}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-primary-700/60 block mb-1">Availability</span>
                <span className={cn(
                  "text-[11px] uppercase tracking-wider font-medium",
                  product.stock === 0 ? "text-destructive" : "text-emerald-600"
                )}>
                  {product.stock === 0 ? "Out of Stock" : "In Stock"}
                </span>
              </div>
            </div>

            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-primary/80">
                <Tag className="w-4 h-4" />
                Special Promotions
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-stone-200 rounded-2xl bg-white/40 backdrop-blur-sm hover:border-primary/30 hover:bg-white/60 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">SAVE15</span>
                    <span className="text-[8px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">Code</span>
                  </div>
                  <p className="text-[10px] text-stone-600 leading-relaxed">
                    Get 15% OFF on orders above ₹2,000. Apply at checkout.
                  </p>
                </div>
                <div className="p-4 border border-stone-200 rounded-2xl bg-white/40 backdrop-blur-sm hover:border-primary/30 hover:bg-white/60 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">FREE GIFT</span>
                    <span className="text-[8px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">Limited</span>
                  </div>
                  <p className="text-[10px] text-stone-600 leading-relaxed">
                    Free Discovery Set on all orders above ₹3,000. Auto-applies.
                  </p>
                </div>
              </div>
              <div className="p-4 border border-dashed border-stone-300 rounded-2xl bg-stone-50/50">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-primary/40" />
                  <p className="text-[10px] text-stone-600 leading-relaxed">
                    <span className="font-bold text-primary">Bundle Offer:</span> Buy any 2 Attars and get a complimentary Mysore Sandalwood soap (50g).
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center h-14 px-4 border border-stone-300 rounded-sm bg-white/50">
                  <button onClick={() => handleQuantity('dec')} className="w-8 h-8 flex items-center justify-center hover:text-secondary transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="w-12 text-center font-label text-sm">{quantity}</span>
                  <button onClick={() => handleQuantity('inc')} className="w-8 h-8 flex items-center justify-center hover:text-secondary transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 h-14 text-[11px] font-semibold tracking-[0.2em]"
                >
                  {product.stock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                </Button>
                <WishlistButton
                  product={product}
                  className="w-14 h-14 border border-stone-300 hover:border-secondary"
                  iconClassName="w-5 h-5"
                />
              </div>

              <Button
                variant="underline"
                disabled={product.stock === 0}
                className="w-full h-14 bg-foreground text-white border-foreground hover:bg-black text-[11px] font-semibold tracking-[0.2em]"
                onClick={() => {
                  handleAddToCart();
                  router.push('/cart');
                }}
              >
                BUY IT NOW
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex w-full border-2 justify-evenly my-8 py-4 border-t border-stone-400">
              <div className="flex flex-col items-center gap-3 text-center">
                <Shield className="w-5 h-5 text-primary/40" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-label text-primary leading-relaxed">Secure <br /> Checkout</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <Truck className="w-5 h-5 text-primary/40" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-label text-primary leading-relaxed">Global <br /> Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <RefreshCw className="w-5 h-5  text-primary/40" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-label text-primary leading-relaxed">Easy <br /> Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <div className="mt-32 border-t flex flex-col justify-center items-center border-stone-200 pt-16">
          <div className="flex gap-12 mb-12 overflow-x-auto pb-4 scrollbar-hide">
            {['description', 'ritual', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-label pb-2 transition-all relative whitespace-nowrap",
                  activeTab === tab ? "text-primary font-bold" : "text-primary/70 hover:text-primary"
                )}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary animate-in slide-in-from-left duration-300" />}
              </button>
            ))}
          </div>
          <div className="max-w-3xl">
            {activeTab === 'description' && (
              <div className="animate-in fade-in duration-500">
                <p className="text-stone-600 leading-relaxed font-label text-sm tracking-wide">
                  {product.description}
                  <br /><br />
                  Vedic Nature's attars are alcohol-free, concentrated oil-based perfumes. We use ancient hydro-distillation methods (Deg-Bhapka) to capture the true botanical soul of each ingredient. This ensures a fragrance that evolves beautifully on the skin and lasts for hours.
                </p>
              </div>
            )}
            {activeTab === 'ritual' && (
              <div className="animate-in fade-in duration-500">
                <p className="text-stone-600 leading-relaxed font-label text-sm tracking-wide">
                  To experience the full depth of our attars, we recommend applying a small drop to your pulse points: wrists, behind the ears, and the base of the throat.
                  <br /><br />
                  Avoid rubbing the fragrance into the skin as this can break down the delicate olfactory molecules. Instead, let the oil warm naturally on your skin to reveal its complex layers over time.
                </p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="animate-in fade-in duration-500">
                <p className="text-stone-600 leading-relaxed font-label text-sm tracking-wide">
                  We offer complimentary shipping on all orders over ₹2,000. Each bottle is meticulously packed in sustainable, eco-friendly materials to ensure it reaches you in perfect condition.
                  <br /><br />
                  For international inquiries, please contact our concierge service.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-32 pt-16 border-t border-stone-200">
        <TopSellingSection />
      </div>
    </main>
  );
}
