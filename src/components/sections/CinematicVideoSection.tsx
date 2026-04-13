import React from 'react';
import Image from 'next/image';
import { IconButton } from '@/components/ui/IconButton';

export function CinematicVideoSection() {
  return (
    <section className="mt-32 relative h-[819px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          alt="Mist and Petals" 
          className="w-full h-full object-cover brightness-75"
          src="/Images/mogra-landscape.webp" 
          fill
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-3xl px-6 flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl mb-6 opacity-80" style={{ fontVariationSettings: '"wght" 200' }}>
          air
        </span>
        <h3 className="font-headline text-4xl md:text-6xl mb-8 tracking-tight italic">
          A Symphony of Unspoken Words
        </h3>
        <p className="font-label text-sm uppercase tracking-[0.3em] opacity-90 mb-12">
          Experience the cinematic collection
        </p>
        <button className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
          <span className="material-symbols-outlined">play_arrow</span>
        </button>
      </div>
    </section>
  );
}
