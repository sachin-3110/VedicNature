import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  imageSrc: string;
  imageAlt: string;
  titleOverlay: string;
  titleOverlayColor?: string;
  titleOverlaySize?: string;
  title: string;
  description: string;
  imageAspect?: string;
  imageObjectFit?: 'cover' | 'contain';
}

export function CategoryCard({
  imageSrc,
  imageAlt,
  titleOverlay,
  titleOverlayColor = 'white',
  titleOverlaySize = 'text-[50px]',
  title,
  description,
  imageAspect = 'aspect-[16/9]',
  imageObjectFit = 'cover',
}: CategoryCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className={`relative overflow-hidden ${imageAspect} mb-6`} style={{ backgroundColor: imageObjectFit === 'contain' ? 'white' : 'transparent' }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`transition-transform duration-1000 group-hover:scale-105 object-${imageObjectFit}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-8 left-8 text-white z-10">
          <span 
            className={`font-label uppercase tracking-[0.4em] ${titleOverlaySize}`}
            style={{ color: titleOverlayColor }}
          >
            {titleOverlay}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center px-2">
        <h4 className="font-headline text-2xl italic">
          {title}
        </h4>
        <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
          arrow_forward
        </span>
      </div>
      <p className="font-body text-sm text-on-surface-variant px-2 mt-2 opacity-60">
        {description}
      </p>
    </div>
  );
}
