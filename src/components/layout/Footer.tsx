import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fcf9f3] w-full border-t border-stone-200/10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 px-12 py-20 w-full max-w-screen-2xl mx-auto">
        {/* Edits col */}
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5f5e5e] mb-2 block font-bold">
            EDITS
          </span>
          <ul className="space-y-2">
            <li>
              <Link
                href="/journal"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                href="/sustainability"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Sustainability
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Support col */}
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5f5e5e] mb-2 block font-bold">
            Support
          </span>
          <ul className="space-y-2">
            <li>
              <Link
                href="/shipping"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Shipping
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/newsletter"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-60 hover:text-[#775a19] hover:opacity-100 transition-all"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Info col */}
        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="text-left md:text-right w-46">
            <a href="https://maps.app.goo.gl/kiU7TLzHsrDN6HuU7" target="_blank" rel="noopener noreferrer" className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e]">
              101, choudhary market, near bank of Baroda, mayur vihar delhi 110091
            </a>
          </div>
          <div className="mt-12 md:mt-0">
            <p className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#5f5e5e] opacity-40">
              © {new Date().getFullYear()} THE Vedic Nature. ALL RIGHTS RESERVED | Designed and developed by reef technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
