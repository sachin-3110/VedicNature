"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const NavMenuItem = ["collections", "about", "shop"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f3]/70 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 sm:px-12 py-2 sm:w-full mx-auto">
        <div className="flex items-center gap-12">
          <div style={{ height: '60px' }} className="relative flex items-center">
            <Link href="/" className='h-full w-full relative'>
              <Image
                src="/vedicnaturecompressedimages/vedicNature/logo.webp"
                alt="logo"
                width={150}
                height={60}
                className="h-full w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {NavMenuItem.map(item =>
              <Link
                href={`/${item}`}
                key={item + 1}
                className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5f5e5e] "
              >
                {item}
              </Link>)}
          </div>

        </div>
        <div className="flex items-center gap-6">
          <button aria-label="Search" className="text-[#5f5e5e] hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button aria-label="Cart" className="text-[#5f5e5e] hover:opacity-80 transition-opacity relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 text-[8px] bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full">
              0
            </span>
          </button>

          <button 
            aria-label="Menu" 
            className="text-[#5f5e5e] hover:opacity-80 transition-opacity md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#fcf9f3] border-t border-[#775a19]/10 shadow-lg py-4 px-6 flex flex-col gap-4 transition-all duration-300 origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        {NavMenuItem.map(item => (
          <Link
            href={`/${item}`}
            key={item + 1}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5f5e5e] border-b border-[#775a19]/10 pb-3 hover:text-red-400 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
}
