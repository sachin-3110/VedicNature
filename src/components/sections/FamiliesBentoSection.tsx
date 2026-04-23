import React from 'react';
import { CategoryCard } from '@/components/blocks/CategoryCard';

const BentoAssets = {
  lavender: "/vedicnaturecompressedimages/vedicNature/lavenderattar.webp",
  mogra: "/vedicnaturecompressedimages/vedicNature/mogra.jpg.webp",
  goldOud: "/vedicnaturecompressedimages/vedicNature/divinegoldattar.webp",
  kesar: "/vedicnaturecompressedimages/vedicNature/realkesarattar.webp"
};

export function FamiliesBentoSection() {
  return (
    <section className="py-32 px-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="font-label text-[12px] uppercase tracking-[0.4em] text-secondary mb-4">
            The VEDICNature Families
          </h2>
          <h3 className="font-headline text-4xl text-primary max-w-lg italic">
            Distilled from the world's most evocative botanical landscapes.
          </h3>
        </div>
        <div className="text-right">
          <a className="font-label text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:text-secondary transition-colors" href="#">
            Shop All Families
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <CategoryCard
            imageSrc={BentoAssets.lavender}
            imageAlt="Floral Notes"
            titleOverlay="Lavender"
            titleOverlayColor="purple"
            titleOverlaySize="text-[20px] pt-2"
            title="Floral & Botanical"
            description="Delicate jasmine, crushed violet, and morning rose."
            imageAspect="aspect-[16/9]"
            imageObjectFit="contain"
          />
        </div>
        <div className="md:col-span-4 md:mt-24">
          <CategoryCard
            imageSrc={BentoAssets.mogra}
            imageAlt="Woody Notes"
            titleOverlay="MOGRA"
            titleOverlayColor="white"
            titleOverlaySize="text-[20px]"
            title="Woody & Smoke"
            description="Ancient cedar, smoked oud, and vetiver root."
            imageAspect="aspect-[3/4]"
          />
        </div>
        <div className="md:col-span-4">
          <CategoryCard
            imageSrc={BentoAssets.goldOud}
            imageAlt="Oriental Notes"
            titleOverlay="24k Gold Oud"
            titleOverlayColor="#C3A466"
            titleOverlaySize="text-[20px] relative top-5 font-extralight"
            title="Oriental & Spice"
            description="Warm amber, black cardamom, and vanilla bean."
            imageAspect="aspect-[3/4]"
          />
        </div>
        <div className="md:col-span-8">
          <CategoryCard
            imageSrc={BentoAssets.kesar}
            imageAlt="Fresh Notes"
            titleOverlay="Real Kesar"
            titleOverlayColor="#A58F9A"
            titleOverlaySize="text-[20px]"
            title="Fresh & Marine"
            description="Sea salt, Sicilian citrus, and crisp linen."
            imageAspect="aspect-[16/9]"
            imageObjectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
