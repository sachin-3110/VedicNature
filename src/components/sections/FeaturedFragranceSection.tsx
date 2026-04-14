import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { NoteList } from '@/components/blocks/NoteList';
import { Label } from '@/components/ui/Label';

export function FeaturedFragranceSection() {
  return (
    <section className="bg-surface-container py-32">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="">
          <div className=" bg-white shadow-sm overflow-hidden relative">
            <Image
              alt="Signature Scent"
              className="w-full h-full object-contain p-12"
              src="/Images/sandal-bliss.webp"
              height={500}
              width={500}
            // fill
            />
          </div>
        </div>
        <div className="p-6 sm:p-6 flex flex-col justify-center">
          <Label className="mb-6 text-xl tracking-[0.5em]">Featured Fragrance</Label>
          <h2 className="font-headline text-4xl sm:text-5xl text-primary mb-6 italic tracking-tighter">
            Sandal Bliss
          </h2>
          <p className="font-body text-sm sm:text-lg text-on-surface-variant mb-10 leading-relaxed max-w-lg">
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
