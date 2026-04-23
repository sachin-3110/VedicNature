import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { NoteList } from '@/components/blocks/NoteList';
import { Label } from '@/components/ui/Label';

const FeaturedAssets = {
  sandalBliss: "/vedicnaturecompressedimages/vedicNature/sandalblissattar.webp"
};

export function FeaturedFragranceSection() {
  return (
    <section className="bg-surface-container py-16">
      <div className="flex items-center   flex-col md:flex-row ">
        <div className="flex m-6   h-[550px] flex-col justify-center items-center w-full sm:w-1/2">
          <div className="w-full h-full relative ">
            <Image
              alt="Signature Scent"
              className="w-full h-full object-contain p-4"
              src={FeaturedAssets.sandalBliss}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="p-6 sm:p-4 h-full flex justify-center items-center w-full md:w-1/2   flex flex-col items-start justify-center">
          <div>
            <Label className="mb-4 text-2xl tracking-[0.5em]">Featured Fragrance</Label>
            <h2 className="font-headline text-4xl sm:text-5xl text-primary/80 mb-4 italic tracking-tighter">
              Sandal Bliss
            </h2>
            <p className="font-body text-sm sm:text-lg text-on-surface-variant mb-4 leading-relaxed max-w-lg">
              Our signature distillation. A complex dialogue between dark
              resinous woods and the fragile brightness of white ginger. A scent
              that lingers as a memory.
            </p>

            <NoteList top="Ginger" heart="Iris" base="Oud" />

            <div className="flex items-center gap-10">
              <Button variant="primary">Sandal Bliss — ₹240</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
