import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { NoteList } from '@/components/blocks/NoteList';
import { Label } from '@/components/ui/Label';

export function FeaturedFragranceSection() {
  return (
    <section className="bg-surface-container py-32">
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-12 items-center gap-20">
        <div className="col-span-12 md:col-span-6 relative h-[600px]">
          <div className="bg-white flex items-center justify-center shadow-sm overflow-hidden h-full relative">
            <Image 
              alt="Signature Scent" 
              className="w-full h-full object-contain p-12"
              src="/Images/sandal-bliss.webp" 
              fill
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Label className="mb-6 block tracking-[0.5em]">Featured Fragrance</Label>
          <h2 className="font-headline text-5xl text-primary mb-6 italic tracking-tighter">
            Sandal Bliss
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed max-w-lg">
            Our signature distillation. A complex dialogue between dark
            resinous woods and the fragile brightness of white ginger. A scent
            that lingers as a memory.
          </p>
          
          <NoteList top="Ginger" heart="Iris" base="Oud" />

          <div className="flex items-center gap-10">
            <Button variant="primary">Sandal Bliss — $240</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
