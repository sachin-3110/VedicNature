import { HeroSection } from '@/components/sections/HeroSection';
import { CinematicVideoSection } from '@/components/sections/CinematicVideoSection';
import { FamiliesBentoSection } from '@/components/sections/FamiliesBentoSection';
import { FeaturedFragranceSection } from '@/components/sections/FeaturedFragranceSection';
import { TopSellingSection } from '@/components/sections/TopSellingSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <div className='bg-secondary'>
      <CinematicVideoSection />
      <HeroSection />
      <FamiliesBentoSection />
      <FeaturedFragranceSection />
      <TopSellingSection />
      <NewsletterSection />
    </div>
  );
}
