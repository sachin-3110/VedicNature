import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function NewsletterSection() {
  return (
    <section className="py-40 text-center px-6">
      <div className="max-w-2xl mx-auto">
        <span className="material-symbols-outlined text-secondary text-3xl mb-8">
          auto_awesome
        </span>
        <h2 className="font-headline text-4xl text-primary mb-6 italic">
          Join the Vedic Nature
        </h2>
        <p className="font-body text-on-surface-variant mb-12 opacity-70">
          Weekly meditations on scent, architecture, and the art of slow
          living.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            placeholder="EMAIL ADDRESS" 
            type="email" 
            className="flex-1"
            required
          />
          <Button variant="ghost" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
