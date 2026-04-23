"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export const categories = [
  {
    title: "The Botanical Series",
    slug: "the-botanical-series",
    description: "Pure floral essences captured at the peak of their blooming cycle.",
    products: [
      { id: 101, name: "Divine Rose", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/divineroseattar.webp" },
      { id: 102, name: "Jasmine", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/jasmineattar.webp" },
      { id: 103, name: "Bela Floral", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/belafloralattar.webp" },
      { id: 104, name: "Sweet Rose", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/sweetroseattar.webp" },
      { id: 105, name: "Night Queen", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/nightqueenattar.webp" },
      { id: 106, name: "Lavender", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/lavenderattar.webp" },
      { id: 107, name: "Parijat", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/parijatattar.webp" },
      { id: 108, name: "Fresh Orange", category: "Floral Attar", image: "/vedicnaturecompressedimages/vedicNature/freshorangeattar.webp" }
    ]
  },
  {
    title: "Oudh Heritage",
    slug: "oudh-heritage",
    description: "Deep, mysterious, and unequivocally regal. The crown jewels of our distillation.",
    products: [
      { id: 201, name: "Black Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/blackoudhattar.webp" },
      { id: 202, name: "Blue Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/blueoudhattar.webp" },
      { id: 203, name: "Diamond Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/diamondoudhattar.webp" },
      { id: 204, name: "Divine Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/divineoudhattar.webp" },
      { id: 205, name: "Honey Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/honeyoudhattar.webp" },
      { id: 206, name: "Rose Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/roseoudhattar.webp" },
      { id: 207, name: "White Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/whiteoudh.webp" },
      { id: 208, name: "Vrindaban Oudh", category: "Oudh", image: "/vedicnaturecompressedimages/vedicNature/vrindabaoudhattar.webp" }
    ]
  },
  {
    title: "Royal Archives",
    slug: "royal-archives",
    description: "The most exclusive fusions reserved for the true connoisseur.",
    products: [
      { id: 301, name: "Kesar Chandan", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/kesarchandanattar.webp" },
      { id: 302, name: "Mysore Sandal", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/mysoresandalattar.webp" },
      { id: 303, name: "White Musk", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/whitemuskattar.webp" },
      { id: 304, name: "Divine Gold", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/divinegoldattar.webp" },
      { id: 305, name: "Vrindaban Musk", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/Vrindaban_Musk_Attar.webp" },
      { id: 306, name: "Pure Sandal", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/puresandalattar.webp" },
      { id: 307, name: "Real Kesar", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/realkesarattar.webp" },
      { id: 308, name: "Kasturi", category: "Signature", image: "/vedicnaturecompressedimages/vedicNature/kasturiattar.webp" }
    ]
  }
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-16 pb-16">
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
                <Link href={`/collections/${cat.slug}`} className="group flex items-center gap-3 text-xs font-sans tracking-widest text-[#775a19] uppercase hover:text-[#111] transition-colors">
                  <span>Explore Series</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>

              <div className="flex flex-row flex-wrap gap-y-14" style={{ gap: '1rem' }}>
                {cat.products.map((item) => (
                  <Link
                    href={`/collections/${cat.slug}`}
                    key={item.id}
                    className="group rounded-2xl flex flex-col gap-6 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
                  >
                    <div className="relative md:translate-y-20 md:group-hover:translate-y-0 h-full aspect-[4/5] bg-white rounded-2xl flex items-center justify-center p-2 overflow-hidden transition-all duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-contain p-4 transition-transform duration-1000 ease-out"
                      />
                      
                      {/* Access stock from global PRODUCTS array */}
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
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
