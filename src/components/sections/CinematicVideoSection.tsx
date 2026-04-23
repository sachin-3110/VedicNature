import React from 'react';
import Image from 'next/image';
import { IconButton } from '@/components/ui/IconButton';

const CinematicAssets = {
  background: "/vedicnaturecompressedimages/vedicNature/banner/banner.jpeg",
  alt: "Mist and Petals"

};

export function CinematicVideoSection() {
  return (
    <section className="mb-20 relative h-[819px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video poster={CinematicAssets.background} controls preload="auto" className='h-[100%] w-[100%] object-cover' autoPlay muted playsInline loop>
          <source src="/vedicnaturecompressedimages/vedicNature/banner/bannerVideo.mp4" type="video/mp4" />
          <track
            src="/vedicnaturecompressedimages/vedicNature/banner/bannerVideo.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
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
