"use client";

import React, { useRef } from 'react';
import { Heart } from 'lucide-react';
import { useStore } from '@/contexts/StoreContext';
import { Product } from '@/lib/products';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

interface WishlistButtonProps {
  product: Product;
  className?: string;
  iconClassName?: string;
}

/**
 * WishlistButton Component
 * 
 * A reusable button for toggling a product's wishlist status.
 * Features a GSAP heart-beat animation on activation.
 */
export const WishlistButton = ({ product, className, iconClassName }: WishlistButtonProps) => {
  const { toggleWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);
  const heartRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Heartbeat animation using GSAP
    if (!isWishlisted && heartRef.current) {
      gsap.fromTo(heartRef.current,
        { scale: 1 },
        {
          scale: 1.5,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "back.out(2)",
          onComplete: () => {
            gsap.set(heartRef.current, { scale: 1 });
          }
        }
      );
    }

    toggleWishlist(product);
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "group/wishlist relative flex items-center justify-center transition-all duration-300 rounded-full",
        className
      )}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <div ref={heartRef} className="flex items-center justify-center">
        <Heart
          className={cn(
            "w-5 h-5 transition-all duration-500",
            isWishlisted
              ? "fill-primary/80 text-primary/80"
              : "text-primary/60 group-hover/wishlist:text-primary group-hover/wishlist:scale-110",
            iconClassName
          )}
        />
      </div>

      {/* Subtle background glow when active */}
      {isWishlisted && (
        <div className="absolute inset-0 bg-secondary/5 rounded-full blur-sm -z-10 animate-pulse" />
      )}
    </button>
  );
};
