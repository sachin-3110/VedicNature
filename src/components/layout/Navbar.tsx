import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f3]/70 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 sm:px-12 py-2 sm:w-full mx-auto">
        <div className="flex items-center gap-12">
          <div style={{ height: '80px' }} className="relative flex items-center">
            <Image 
              src="https://d1311wbk6unapo.cloudfront.net/NushopWebsiteAsset/tr:w-300,,f-webp,fo-auto/69c3d389fc15e18cf00657fe_brand_logo_SF2BZYCGVP_2026-04-07.jpg" 
              alt="logo" 
              width={180} 
              height={80} 
              className="h-full w-auto object-contain" 
              priority
            />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/collections"
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#775a19] border-b border-[#775a19]/20 font-medium"
            >
              Collections
            </Link>
            <Link
              href="/shop"
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5f5e5e] hover:text-[#775a19] transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5f5e5e] hover:text-[#775a19] transition-colors"
            >
              About
            </Link>
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
        </div>
      </nav>
    </header>
  );
}
