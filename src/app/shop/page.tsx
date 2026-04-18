"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, X, ChevronDown, SlidersHorizontal } from "lucide-react";

// --- Mock Data ---
const MOCK_PRODUCTS = [
  { id: 1, name: "24K Gold Oud", category: "Incense Sticks", price: 499, image: "/homepageimg/24-k-gold-oud.webp", bestSeller: true },
  { id: 2, name: "Lavender Breeze", category: "Dhoop", price: 299, image: "/homepageimg/lavender.webp", bestSeller: false },
  { id: 3, name: "Mogra Blossom", category: "Essential Oils", price: 899, image: "/homepageimg/mogra-portrait.webp", bestSeller: true },
  { id: 4, name: "Real Kesar Premium", category: "Incense Sticks", price: 599, image: "/homepageimg/real-kesar.webp", bestSeller: false },
  { id: 5, name: "Sandal Bliss", category: "Attars", price: 1299, image: "/homepageimg/sandal-bliss.webp", bestSeller: true },
  { id: 6, name: "Royal Rose Nature", category: "Dhoop", price: 349, image: "/homepageimg/lavender.webp", bestSeller: false }, 
  { id: 7, name: "Mystic Jasmine", category: "Essential Oils", price: 699, image: "/homepageimg/mogra-portrait.webp", bestSeller: false },
  { id: 8, name: "Golden Sandalwood", category: "Incense Sticks", price: 450, image: "/homepageimg/sandal-bliss.webp", bestSeller: false },
];

const CATEGORIES = ["All", "Incense Sticks", "Dhoop", "Essential Oils", "Attars", "Gifts"];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Best Sellers", value: "best_sellers" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileFilterOpen]);

  // Derived state for products
  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filter
    let result = MOCK_PRODUCTS.filter((product) => {
      if (selectedCategory === "All") return true;
      return product.category === selectedCategory;
    });

    // 2. Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        case "best_sellers":
          return (a.bestSeller === b.bestSeller) ? 0 : a.bestSeller ? -1 : 1;
        case "featured":
        default:
          return 0; // Keeping original order for 'featured'
      }
    });

    return result;
  }, [selectedCategory, sortBy]);

  // Handle Sort Option Select
  const handleSortSelect = (value: string) => {
    setSortBy(value);
    setIsSortDropdownOpen(false);
  };

  const selectedSortLabel = SORT_OPTIONS.find(opt => opt.value === sortBy)?.label;

  return (
    <div className="min-h-screen bg-[#fcf9f3] text-[#1c1c18] pt-24 pb-16 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#e5e2dc]">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-2 tracking-tight">Our Collection</h1>
            <p className="text-[#5f5e5e] text-sm md:text-base tracking-wide max-w-lg">
              Discover our delicately crafted range of natural fragrances, rooted in ancient traditions.
            </p>
          </div>
          
          {/* Mobile Bar: Filter button & items count */}
          <div className="flex items-center justify-between mt-6 md:hidden">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 text-sm uppercase tracking-widest border border-[#d1c5b4] px-4 py-2 rounded-full font-medium"
            >
              <Filter className="w-4 h-4" />
              Filter & Sort
            </button>
            <span className="text-sm text-[#7f7667]">{filteredAndSortedProducts.length} Results</span>
          </div>

          {/* Desktop Sort */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-[#7f7667]">{filteredAndSortedProducts.length} Results</span>
            <div className="relative">
              <button 
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="flex items-center gap-2 text-sm uppercase tracking-widest border border-[#d1c5b4] px-5 py-2.5 rounded-full font-medium hover:bg-[#f0eee8] transition-colors"
              >
                Sort: {selectedSortLabel}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSortDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e5e2dc] shadow-lg rounded-xl z-10 overflow-hidden">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSortSelect(option.value)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        sortBy === option.value ? 'bg-[#f6f3ed] font-medium text-[#775a19]' : 'text-[#4e4639] hover:bg-[#fcf9f3]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Aside (Filters) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h2 className="text-lg font-serif mb-6 border-b border-[#e5e2dc] pb-2">Categories</h2>
              <ul className="space-y-3">
                {CATEGORIES.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`text-sm w-full text-left transition-colors flex justify-between items-center group ${
                        selectedCategory === category 
                          ? 'text-[#775a19] font-medium' 
                          : 'text-[#5f5e5e] hover:text-[#1c1c18]'
                      }`}
                    >
                      {category}
                      <span className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 ${
                        selectedCategory === category ? 'bg-[#775a19] scale-100' : 'bg-transparent scale-0 group-hover:bg-[#d1c5b4] group-hover:scale-100'
                      }`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
                {filteredAndSortedProducts.map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#e5e2dc] mb-4 rounded-sm">
                      {product.bestSeller && (
                        <div className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm text-[#775a19] font-medium">
                          Best Seller
                        </div>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-[#7f7667] mb-1">{product.category}</span>
                      <h3 className="text-base font-serif text-[#1c1c18] group-hover:text-[#775a19] transition-colors">{product.name}</h3>
                      <p className="text-sm font-medium mt-1">₹{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <SlidersHorizontal className="w-12 h-12 text-[#d1c5b4] mb-4" />
                <h3 className="text-xl font-serif mb-2">No products found</h3>
                <p className="text-[#5f5e5e]">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="mt-6 text-sm uppercase tracking-widest border-b border-[#1c1c18] pb-1 hover:text-[#775a19] hover:border-[#775a19] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileFilterOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#fcf9f3] z-50 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#e5e2dc]">
          <h2 className="text-xl font-serif">Filter & Sort</h2>
          <button 
            onClick={() => setIsMobileFilterOpen(false)}
            className="p-2 -mr-2 bg-[#f0eee8] rounded-full hover:bg-[#e5e2dc] transition-colors"
          >
            <X className="w-5 h-5 text-[#4e4639]" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {/* Sort Section */}
          <div className="mb-10">
            <h3 className="text-sm uppercase tracking-widest text-[#7f7667] mb-4">Sort By</h3>
            <div className="space-y-3">
              {SORT_OPTIONS.map((option) => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    sortBy === option.value ? 'border-[#775a19] bg-[#775a19]' : 'border-[#d1c5b4] group-hover:border-[#775a19]'
                  }`}>
                    {sortBy === option.value && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <input 
                    type="radio" 
                    name="sort" 
                    value={option.value} 
                    checked={sortBy === option.value}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="hidden"
                  />
                  <span className={`text-base ${sortBy === option.value ? 'text-[#1c1c18] font-medium' : 'text-[#4e4639]'}`}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Section */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#7f7667] mb-4">Categories</h3>
            <div className="flex flex-col gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left text-base py-2 border-b transition-colors ${
                    selectedCategory === category 
                      ? 'border-[#775a19] text-[#775a19] font-medium' 
                      : 'border-transparent text-[#4e4639] hover:text-[#1c1c18]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-[#e5e2dc] bg-white sticky bottom-0">
          <button 
            onClick={() => setIsMobileFilterOpen(false)}
            className="w-full bg-[#5f5e5e] text-white py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1c1c18] transition-colors"
          >
            Show {filteredAndSortedProducts.length} Results
          </button>
        </div>
      </div>
    </div>
  );
}
