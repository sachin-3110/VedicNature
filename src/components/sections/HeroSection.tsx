import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const HeroAssets = {
  mainImage: "/homepageimg/mogra-portrait.webp",
  alt: "Luxury Perfume Bottle"
};

export function HeroSection() {
  return (
    <section className="relative bg-secondary  max-w-screen flex items-center pt-24 overflow-hidden">
      <div className="mx-auto md:px-6 w-full grid gap-2 grid-cols-1 md:grid-cols-12 items-center ">
        <div className="col-span-12 px-6 lg:px-12 md:col-span-12 lg:col-span-6  order-2 md:order-1 pt-12 md:pt-0">
          <h2 className="font-label text-[12px] uppercase tracking-[0.4em] text-[#775a19] mb-6">
            L'Essence de la Nature
          </h2>
          <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-on-background/80 tracking-tighter mb-8 italic">
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
        <div className=" col-span-12 md:col-span-12 lg:col-span-6 order-1 md:order-2 relative h-[600px] md:h-[650px]">
          <div className=" absolute inset-0 bg-surface-container-low rounded-lg translate-x-8 translate-y-8 -z-10"></div>
          <Image
            alt={HeroAssets.alt}
            className="h-full w-full object-cover"
            src={HeroAssets.mainImage}
            width={500}
            height={500}
            priority
            sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,(max-width: 2200px) 50vw,
         33vw"
          />
        </div>
      </div>
    </section>
  );
}
