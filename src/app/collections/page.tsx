"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "The Botanical Series",
    description: "Pure floral essences captured at the peak of their blooming cycle.",
    products: [
      { id: 2, name: "Blossom & Bliss", category: "Floral Attar", image: "/vedicnaturecompressedimages/blossomandblissattar.webp" },
      { id: 4, name: "Jasmine Sandal", category: "Floral Attar", image: "/vedicnaturecompressedimages/jasmineandpuresandal_(1).webp" },
      { id: 7, name: "Divine Rose", category: "Floral Attar", image: "/vedicnaturecompressedimages/divineroseandfreshorangeandjasmine.webp" },
      { id: 8, name: "SimpBliss Floral", category: "Floral Attar", image: "/vedicnaturecompressedimages/simpblissluxuryfloralandoudattar.webp" }
    ]
  },
  {
    title: "Oudh Heritage",
    description: "Deep, mysterious, and unequivocally regal. The crown jewels of our distillation.",
    products: [
      { id: 3, name: "Blue & Golden", category: "Oudh", image: "/vedicnaturecompressedimages/derivedblueangoldenoud.webp" },
      { id: 5, name: "Diamond Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/diamondoudandblackoud.webp" },
    ]
  },
  {
    title: "Royal Archives",
    description: "The most exclusive fusions reserved for the true connoisseur.",
    products: [
      { id: 1, name: "Premium Combo", category: "Signature", image: "/vedicnaturecompressedimages/premiumattarcombo.webp" },
      { id: 6, name: "Kesar Symphony", category: "Signature", image: "/vedicnaturecompressedimages/realkesarandlavenderandmadanmohanandjasmine.webp" },
    ]
  }
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-32">
        <header className="flex flex-col items-center text-center max-w-3xl mx-auto mt-8">
          <span className="text-xs font-sans tracking-[0.3em] text-[#775a19] uppercase mb-6 block">
            Discover
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#111] tracking-tight mb-8">
            Our <span className="italic text-[#775a19]">Collections</span>
          </h1>
          <p className="text-[#5f5e5e] font-sans text-lg tracking-wide leading-relaxed">
            A carefully curated assortment of nature’s most exquisite botanical essences.
            Timeless tradition encapsulated in every beautiful silhouette.
          </p>
        </header>

        <div className="flex flex-col gap-32 md:gap-40 text-left">
          {categories.map((cat, idx) => (
            <section key={idx} className="flex flex-col gap-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#775a19]/10">
                <div className="w-full md:w-2/3 flex flex-col gap-3">
                  <h2 className="text-3xl md:text-5xl font-serif text-[#111]">{cat.title}</h2>
                  <p className="text-[#5f5e5e] font-sans text-md tracking-wide leading-relaxed">{cat.description}</p>
                </div>
                <Link href="#" className="group flex items-center gap-3 text-xs font-sans tracking-widest text-[#775a19] uppercase hover:text-[#111] transition-colors">
                  <span>Explore Series</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>

              <div className="flex flex-row flex-wrap gap-y-14" style={{ gap: '1rem' }}>
                {cat.products.map((item) => (
                  <Link
                    href={`/collections/${item.id}`}
                    key={item.id}
                    className="group rounded-2xl flex flex-col gap-6 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
                  >
                    <div className="relative md:translate-y-20 md:group-hover:translate-y-0 h-full aspect-[4/5] bg-white rounded-2xl flex items-center justify-center p-2 overflow-hidden transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-contain p-4 transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
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
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
