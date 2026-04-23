"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-24 font-sans text-[#1c1c18]">
      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-12 pt-10 pb-20">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-sans tracking-[0.3em] text-[#775a19] uppercase mb-6 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#111] tracking-tight mb-8 max-w-4xl">
            The Essence of <span className="italic text-[#775a19]">Purity</span> & Tradition
          </h1>
          <p className="text-[#5f5e5e] font-sans text-lg md:text-xl tracking-wide leading-relaxed max-w-2xl">
            Vedic Nature was born from a profound respect for ancient Indian distillation techniques and a passion for the world’s finest botanical essences. We believe that true luxury lies in nature’s unadulterated purity.
          </p>
        </div>
      </section>

      {/* Image & Philosophy Section */}
      <section className="w-full px-6 md:px-12 py-20 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative aspect-[4/5] md:aspect-square bg-[#fcf9f3] rounded-3xl overflow-hidden p-8 flex items-center justify-center">
            <Image
              src="/vedicnaturecompressedimages/vedicNature/divineroseattar.webp"
              alt="Vedic Nature Philosophy"
              fill
              className="object-contain p-12 transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#111]">
              Crafted Through Time
            </h2>
            <div className="h-px w-24 bg-[#775a19]/30"></div>
            <p className="text-[#5f5e5e] text-lg leading-relaxed">
              Our attars and botanical blends are not just fragrances; they are stories captured in a bottle. We source the rarest ingredients, honoring centuries-old methods passed down through generations of master perfumers. 
            </p>
            <p className="text-[#5f5e5e] text-lg leading-relaxed">
              By avoiding synthetic additives, every drop of Vedic Nature resonates with the true spirit of the flower, the wood, and the earth. We invite you to experience an olfactory journey that grounds the soul and elevates the senses.
            </p>
            <Link 
              href="/shop" 
              className="mt-6 inline-flex items-center gap-3 text-xs font-sans tracking-widest text-[#111] uppercase hover:text-[#775a19] transition-colors w-fit group"
            >
              <span>Explore Our Craft</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-6 md:px-12 py-32 bg-[#1c1c18] text-[#fcf9f3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-[#d1c5b4] max-w-2xl text-lg font-light leading-relaxed">
              Whether you have a question about our collections, need assistance with an order, or simply wish to learn more about the art of attar, our team is here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Phone */}
            <div className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl border border-[#d1c5b4]/10 hover:border-[#775a19]/40 transition-colors bg-white/5">
              <div className="w-16 h-16 rounded-full bg-[#775a19]/20 flex items-center justify-center text-[#d1c5b4]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">Call Us</h3>
                <p className="text-[#d1c5b4] text-sm mb-4">Monday - Saturday, 10am - 7pm</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919210303276" className="text-lg hover:text-[#775a19] transition-colors font-medium">+91 9210303276</a>
                  <p className="text-xs text-[#d1c5b4]/60 uppercase tracking-widest">Official</p>
                  <a href="tel:+919667630679" className="text-lg hover:text-[#775a19] transition-colors font-medium mt-2">+91 9667630679</a>
                  <p className="text-xs text-[#d1c5b4]/60 uppercase tracking-widest">Customer Care / WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl border border-[#d1c5b4]/10 hover:border-[#775a19]/40 transition-colors bg-white/5">
              <div className="w-16 h-16 rounded-full bg-[#775a19]/20 flex items-center justify-center text-[#d1c5b4]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">Email Us</h3>
                <p className="text-[#d1c5b4] text-sm mb-4">We usually reply within 24 hours.</p>
                <a href="mailto:care.simpbliss@gmail.com" className="text-lg hover:text-[#775a19] transition-colors font-medium block mt-6">
                  care.simpbliss@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl border border-[#d1c5b4]/10 hover:border-[#775a19]/40 transition-colors bg-white/5">
              <div className="w-16 h-16 rounded-full bg-[#775a19]/20 flex items-center justify-center text-[#d1c5b4]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">Visit Us</h3>
                <p className="text-[#d1c5b4] text-sm mb-4">Our physical presence.</p>
                <a href="https://maps.app.goo.gl/kiU7TLzHsrDN6HuU7" target="_blank" rel="noopener noreferrer" className="text-base hover:text-[#775a19] transition-colors leading-relaxed mt-2 inline-block max-w-[200px]">
                  101, Choudhary Market, Near Bank of Baroda, Mayur Vihar, Delhi 110091
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
