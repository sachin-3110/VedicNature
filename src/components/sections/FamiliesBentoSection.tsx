"use client"
import React from 'react';
import { CategoryCard } from '@/components/blocks/CategoryCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BentoAssets = {
  lavender: "/vedicnaturecompressedimages/vedicNature/lavenderattar.webp",
  mogra: "/vedicnaturecompressedimages/vedicNature/mogra.jpg.webp",
  goldOud: "/vedicnaturecompressedimages/vedicNature/divinegoldattar.webp",
  kesar: "/vedicnaturecompressedimages/vedicNature/realkesarattar.webp",
  oud24k: "/vedicnaturecompressedimages/vedicNature/24k-gold-oud-man-image.webp",
  parijat: "/vedicnaturecompressedimages/vedicNature/parijatattar-women.webp"
};

export function FamiliesBentoSection() {
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-12 max-w-screen-2xl mx-auto">
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
        <div className="md:col-span-4 md:mt-24 bento-card">
          <CategoryCard
            imageSrc={BentoAssets.oud24k}
            imageAlt="24k Gold Oud"
            titleOverlay="24K GOLD OUD"
            titleOverlayColor="white"
            titleOverlaySize="text-[20px]"
            title="24k Gold Oud"
            description="Ancient cedar, smoked oud, and vetiver root."
            imageAspect="aspect-[3/4]"
            href="/product/105"
          />
        </div>
        <div className="md:col-span-8 bento-card">
          <CategoryCard
            imageSrc={BentoAssets.parijat}
            imageAlt="Floral Notes"
            titleOverlay="Parijat"
            titleOverlayColor="black"
            titleOverlaySize="text-[20px] pt-2"
            title="Parijat"
            description="Delicate jasmine, crushed violet, and morning rose."
            imageAspect="aspect-[4/3]"
            imageObjectFit="contain"
            href="/product/112"
          />
        </div>

        <div className="md:col-span-8 bento-card">
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
            href="/product/101"
          />
        </div>
        <div className="md:col-span-4 md:mt-24 bento-card">
          <CategoryCard
            imageSrc={BentoAssets.mogra}
            imageAlt="Woody Notes"
            titleOverlay="MOGRA"
            titleOverlayColor="white"
            titleOverlaySize="text-[20px]"
            title="Woody & Smoke"
            description="Ancient cedar, smoked oud, and vetiver root."
            imageAspect="aspect-[3/4]"
            href="/product/111"
          />
        </div>
        <div className="md:col-span-4 bento-card">
          <CategoryCard
            imageSrc={BentoAssets.goldOud}
            imageAlt="Oriental Notes"
            titleOverlay="24k Gold Oud"
            titleOverlayColor="#C3A466"
            titleOverlaySize="text-[20px] relative top-5 font-extralight"
            title="Oriental & Spice"
            description="Warm amber, black cardamom, and vanilla bean."
            imageAspect="aspect-[3/4]"
            href="/product/105"
          />
        </div>
        <div className="md:col-span-8 bento-card">
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
            href="/product/205"
          />
        </div>
      </div>
    </section>
  );
}
