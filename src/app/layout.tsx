import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-headline-var",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body-var",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedic Nature | Silent Luxury Fragrance",
  description: "An editorial exploration of botanical purity and architectural fragrance design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <Navbar />
        <main className="flex-1 w-full flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
