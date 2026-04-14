import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function DummyPage({ params }: { params: { slug: string[] } }) {
  // Await the destructured slug to resolve any Next.js 15 sync params warnings in app router.
  const { slug } = await params;
  const pageName = slug.join(' / ');
  
  return (
    <div className="min-h-screen bg-[#fcf9f3] flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="max-w-2xl flex flex-col items-center">
        <span className="text-sm font-sans tracking-[0.3em] text-[#775a19] uppercase mb-4 block">
          Under Construction
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#111] mb-6 capitalize tracking-tight">
          {pageName.replace(/-/g, ' ')}
        </h1>
        <p className="text-[#5f5e5e] mb-10 tracking-wide font-sans leading-relaxed">
          This portion of the Vedic Nature experience is currently being carefully formulated.
          We invite you to explore our existing collections while we perfect these details.
        </p>
        <Link href="/">
          <Button variant="primary" className="rounded-full tracking-widest h-12 flex items-center justify-center">
            RETURN HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}
