export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  bestSeller: boolean;
  notes?: {
    top: string;
    heart: string;
    base: string;
  };
  description?: string;
  longevity?: string;
  projection?: string;
  personality?: string;
  reviews?: number;
  rating?: number;
}

export const PRODUCTS: Product[] = [
  { id: 101, name: "Divine Rose", category: "Floral Attar", price: 899, image: "/vedicnaturecompressedimages/vedicNature/divineroseattar.webp", bestSeller: true, notes: { top: "Fresh Rose Petals", heart: "Damascus Rose", base: "White Musk" }, description: "A pure, intoxicating essence of freshly bloomed roses at dawn. Perfect for evoking timeless romance and grace.", longevity: "8-10 Hours", projection: "Moderate to High", personality: "Romantic, Graceful, Classic", reviews: 124, rating: 4.9 },
  { id: 102, name: "Jasmine", category: "Floral Attar", price: 799, image: "/vedicnaturecompressedimages/vedicNature/jasmineattar.webp", bestSeller: false, notes: { top: "White Jasmine", heart: "Ylang Ylang", base: "Soft Amber" }, description: "The sweet, nocturnal magic of night-blooming jasmine.", longevity: "6-8 Hours", projection: "Moderate", personality: "Elegant, Sensual, Calm", reviews: 89, rating: 4.7 },
  { id: 103, name: "Bela Floral", category: "Floral Attar", price: 699, image: "/vedicnaturecompressedimages/vedicNature/belafloralattar.webp", bestSeller: false, notes: { top: "Bela Flower", heart: "Tuberose", base: "Sandalwood" }, description: "A delicate and creamy floral scent reminiscent of Indian wedding festivities.", longevity: "7-9 Hours", projection: "High", personality: "Joyful, Traditional, Bright", reviews: 56, rating: 4.6 },
  { id: 104, name: "Sweet Rose", category: "Floral Attar", price: 850, image: "/vedicnaturecompressedimages/vedicNature/sweetroseattar.webp", bestSeller: false },
  { id: 105, name: "Night Queen", category: "Floral Attar", price: 950, image: "/vedicnaturecompressedimages/vedicNature/nightqueenattar.webp", bestSeller: true, notes: { top: "Night Blooming Jasmine", heart: "Lotus", base: "Dark Woods" }, description: "An enigmatic and seductive fragrance that truly comes alive after dusk.", longevity: "10-12 Hours", projection: "Strong", personality: "Mysterious, Bold, Seductive", reviews: 210, rating: 4.8 },
  { id: 106, name: "Lavender", category: "Floral Attar", price: 650, image: "/vedicnaturecompressedimages/vedicNature/lavenderattar.webp", bestSeller: false },
  { id: 107, name: "Parijat", category: "Floral Attar", price: 750, image: "/vedicnaturecompressedimages/vedicNature/parijatattar.webp", bestSeller: false },
  { id: 108, name: "Fresh Orange", category: "Floral Attar", price: 599, image: "/vedicnaturecompressedimages/vedicNature/freshorangeattar.webp", bestSeller: false },

  { id: 201, name: "Black Oudh", category: "Oudh", price: 1499, image: "/vedicnaturecompressedimages/vedicNature/blackoudhattar.webp", bestSeller: true, notes: { top: "Smoked Wood", heart: "Agarwood", base: "Leather" }, description: "A deep, intense, and smoky profile reserved for the boldest fragrance connoisseurs.", longevity: "12+ Hours", projection: "Very Strong", personality: "Powerful, Masculine, Intense", reviews: 342, rating: 4.9 },
  { id: 202, name: "Blue Oudh", category: "Oudh", price: 1399, image: "/vedicnaturecompressedimages/vedicNature/blueoudhattar.webp", bestSeller: false },
  { id: 203, name: "Diamond Oudh", category: "Oudh", price: 1899, image: "/vedicnaturecompressedimages/vedicNature/diamondoudhattar.webp", bestSeller: true },
  { id: 204, name: "Divine Oudh", category: "Oudh", price: 1699, image: "/vedicnaturecompressedimages/vedicNature/divineoudhattar.webp", bestSeller: false },
  { id: 205, name: "Honey Oudh", category: "Oudh", price: 1599, image: "/vedicnaturecompressedimages/vedicNature/honeyoudhattar.webp", bestSeller: false },
  { id: 206, name: "Rose Oudh", category: "Oudh", price: 1450, image: "/vedicnaturecompressedimages/vedicNature/roseoudhattar.webp", bestSeller: false },
  { id: 207, name: "White Oudh", category: "Oudh", price: 1299, image: "/vedicnaturecompressedimages/vedicNature/whiteoudh.webp", bestSeller: false, notes: { top: "Citrus", heart: "White Oudh", base: "Amber" }, description: "A softer, more approachable take on Oudh with bright citrus openings.", longevity: "8-10 Hours", projection: "Moderate", personality: "Sophisticated, Modern, Clean", reviews: 128, rating: 4.5 },
  { id: 208, name: "Vrindaban Oudh", category: "Oudh", price: 1750, image: "/vedicnaturecompressedimages/vedicNature/vrindabaoudhattar.webp", bestSeller: false },

  { id: 301, name: "Kesar Chandan", category: "Signature", price: 1199, image: "/vedicnaturecompressedimages/vedicNature/kesarchandanattar.webp", bestSeller: true, notes: { top: "Saffron", heart: "Spices", base: "Mysore Sandalwood" }, description: "A regal blend of pure saffron and creamy sandalwood, historically reserved for royalty.", longevity: "10-12 Hours", projection: "Strong", personality: "Regal, Warm, Spiritual", reviews: 276, rating: 4.9 },
  { id: 302, name: "Mysore Sandal", category: "Signature", price: 1099, image: "/vedicnaturecompressedimages/vedicNature/mysoresandalattar.webp", bestSeller: false },
  { id: 303, name: "White Musk", category: "Signature", price: 999, image: "/vedicnaturecompressedimages/vedicNature/whitemuskattar.webp", bestSeller: false },
  { id: 304, name: "Divine Gold", category: "Signature", price: 1299, image: "/vedicnaturecompressedimages/vedicNature/divinegoldattar.webp", bestSeller: true },
  { id: 305, name: "Vrindaban Musk", category: "Signature", price: 1050, image: "/vedicnaturecompressedimages/vedicNature/Vrindaban_Musk_Attar.webp", bestSeller: false },
  { id: 306, name: "Pure Sandal", category: "Signature", price: 1150, image: "/vedicnaturecompressedimages/vedicNature/puresandalattar.webp", bestSeller: false },
  { id: 307, name: "Real Kesar", category: "Signature", price: 1399, image: "/vedicnaturecompressedimages/vedicNature/realkesarattar.webp", bestSeller: true },
  { id: 308, name: "Kasturi", category: "Signature", price: 1499, image: "/vedicnaturecompressedimages/vedicNature/kasturiattar.webp", bestSeller: false }
].map(p => ({
  ...p,
  // Add generic fallback details for those missing them
  notes: p.notes || { top: "Bergamot & Cardamom", heart: "Floral Accords", base: "Amber & Musk" },
  description: p.description || "An exquisite distillation representing the finest elements of botanical luxury. Crafted using centuries-old traditional methods for a truly unique aromatic experience.",
  longevity: p.longevity || "8-10 Hours",
  projection: p.projection || "Moderate",
  personality: p.personality || "Elegant, Timeless, Luxurious",
  reviews: p.reviews || Math.floor(Math.random() * 100) + 20,
  rating: p.rating || parseFloat((Math.random() * 0.5 + 4.5).toFixed(1))
}));
