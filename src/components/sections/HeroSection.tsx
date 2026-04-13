import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[921px] max-w-screen flex items-center pt-24 overflow-hidden">
      <div className="mx-auto px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-screen-2xl">
        <div className="col-span-12 md:col-span-5 order-1 md:order-2 pt-12 md:pt-0">
          <h2 className="font-label text-[12px] uppercase tracking-[0.4em] text-secondary mb-6">
            L'Essence de la Nature
          </h2>
          <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-primary tracking-tighter mb-8 italic">
            The Silent <br />Luxury of Scent
          </h1>
          <p className="font-body text-on-surface-variant max-w-md mb-10 leading-relaxed opacity-80">
            An editorial exploration of botanical purity and architectural
            fragrance design. Crafted for those who find power in the quiet
            moments.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <Button variant="primary">Discover Collection</Button>
            <Button variant="underline">View Journal</Button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 order-1 md:order-2 relative h-[600px] md:h-[800px]">
          <div className="absolute inset-0 bg-surface-container-low rounded-lg translate-x-8 translate-y-8 -z-10"></div>
          <Image 
            alt="Luxury Perfume Bottle" 
            className="w-full h-full object-cover object-center shadow-2xl rounded-lg"
            src="/Images/mogra-portrait.webp" 
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>
    </section>
  );
}
