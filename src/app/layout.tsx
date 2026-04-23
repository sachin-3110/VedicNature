import type { Metadata } from "next";
import { Noto_Serif, Manrope, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const notoSerif = Noto_Serif({
  variable: "--font-headline-var",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body-var",
  subsets: ["latin"],
});

import { StoreProvider } from "@/contexts/StoreContext";

export const metadata: Metadata = {
  title: "Vedic Nature | Silent Luxury Fragrance",
  description: "An editorial exploration of botanical purity and architectural fragrance design.",
  icons: {
    icon: '/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "h-full", "antialiased", notoSerif.variable, manrope.variable, "font-sans", geist.variable)}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <StoreProvider>
          <Navbar />
          <main className="flex-1 w-full flex-col">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
