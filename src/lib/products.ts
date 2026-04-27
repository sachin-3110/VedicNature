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
  stock?: number;
}

export const PRODUCTS: Product[] = [
  // User's Top Selling List
  { id: 101, name: "Divine Rose", category: "Floral Attar", price: 899, image: "/vedicnaturecompressedimages/vedicNature/divineroseattar.webp", bestSeller: true, notes: { top: "Fresh Rose Petals", heart: "Damascus Rose", base: "White Musk" }, description: "A pure, intoxicating essence of freshly bloomed roses at dawn.", longevity: "8-10 Hours", projection: "Moderate", personality: "Romantic, Graceful" },
  { id: 102, name: "Black Opium", category: "Signature", price: 1299, image: "/vedicnaturecompressedimages/vedicNature/blackoudhattar.webp", bestSeller: true, notes: { top: "Coffee, Pear", heart: "Jasmine, Orange Blossom", base: "Vanilla, Cedar" }, description: "An addictive and bold fragrance that creates a lasting impression." },
  { id: 103, name: "White Oud", category: "Oudh", price: 1299, image: "/vedicnaturecompressedimages/vedicNature/whiteoudh.webp", bestSeller: true, notes: { top: "Citrus, Spice", heart: "White Oudh, Rose", base: "Amber, Musk" }, description: "A sophisticated and modern take on traditional Oudh." },
  { id: 104, name: "Pure Sandal", category: "Signature", price: 1150, image: "/vedicnaturecompressedimages/vedicNature/puresandalattar.webp", bestSeller: true, notes: { top: "Sandalwood Dust", heart: "Creamy Sandal", base: "Mysore Sandalwood" }, description: "The timeless, meditative warmth of pure sandalwood." },
  { id: 105, name: "24k Gold Oud", category: "Oudh", price: 1899, image: "/vedicnaturecompressedimages/vedicNature/divinegoldattar.webp", bestSeller: true, notes: { top: "Saffron, Cinnamon", heart: "Oud, Rose", base: "Gold Amber, Vanilla" }, description: "A regal and opulent fragrance fit for royalty." },
  { id: 106, name: "Jubilant", category: "Signature", price: 1450, image: "/vedicnaturecompressedimages/vedicNature/kasturiattar.webp", bestSeller: true, notes: { top: "Bergamot", heart: "Exotic Spices", base: "Dark Musk" }, description: "A celebratory scent that radiates joy and confidence." },
  { id: 107, name: "Lotus", category: "Floral Attar", price: 799, image: "/vedicnaturecompressedimages/vedicNature/jasmineattar.webp", bestSeller: true, notes: { top: "Water Lily", heart: "Lotus Petals", base: "Soft Musk" }, description: "The serene and spiritual essence of a blooming lotus." },
  { id: 108, name: "Black Oud", category: "Oudh", price: 1499, image: "/vedicnaturecompressedimages/vedicNature/blackoudhattar.webp", bestSeller: true, notes: { top: "Smoked Wood", heart: "Agarwood", base: "Leather" }, description: "Deep, intense, and mysterious smoky profile." },
  { id: 109, name: "Diamond Oud", category: "Oudh", price: 1899, image: "/vedicnaturecompressedimages/vedicNature/diamondoudhattar.webp", bestSeller: true, notes: { top: "Bright Citrus", heart: "Transparent Oud", base: "Crystal Musk" }, description: "A brilliant and clear expression of luxury." },
  { id: 110, name: "Vrindavan Flower", category: "Floral Attar", price: 950, image: "/vedicnaturecompressedimages/vedicNature/Vrindaban_Musk_Attar.webp", bestSeller: true, notes: { top: "Bela, Mogra", heart: "Sacred Flowers", base: "Sandalwood" }, description: "A divine bouquet inspired by the gardens of Vrindavan." },
  { id: 111, name: "Rajnigandha", category: "Floral Attar", price: 850, image: "/vedicnaturecompressedimages/vedicNature/belafloralattar.webp", bestSeller: true, notes: { top: "Tuberose", heart: "White Florals", base: "Sweet Musk" }, description: "The intoxicating nocturnal magic of Tuberose." },
  { id: 112, name: "Parijat", category: "Floral Attar", price: 750, image: "/vedicnaturecompressedimages/vedicNature/parijatattar.webp", bestSeller: true, notes: { top: "Night Queen", heart: "Parijat Blossoms", base: "Earthy Notes" }, description: "The ethereal scent of the sacred Night-flowering Jasmine." },

  // Other products (not best sellers)
  { id: 201, name: "Jasmine", category: "Floral Attar", price: 799, image: "/vedicnaturecompressedimages/vedicNature/jasmineattar.webp", bestSeller: false },
  { id: 202, name: "Bela Floral", category: "Floral Attar", price: 699, image: "/vedicnaturecompressedimages/vedicNature/belafloralattar.webp", bestSeller: false },
  { id: 203, name: "Night Queen", category: "Floral Attar", price: 950, image: "/vedicnaturecompressedimages/vedicNature/nightqueenattar.webp", bestSeller: false },
  { id: 204, name: "Blue Oudh", category: "Oudh", price: 1399, image: "/vedicnaturecompressedimages/vedicNature/blueoudhattar.webp", bestSeller: false },
  { id: 205, name: "Kesar Chandan", category: "Signature", price: 1199, image: "/vedicnaturecompressedimages/vedicNature/kesarchandanattar.webp", bestSeller: false },
  { id: 206, name: "Mysore Sandal", category: "Signature", price: 1099, image: "/vedicnaturecompressedimages/vedicNature/mysoresandalattar.webp", bestSeller: false }
].map((p: any) => ({
  ...p,
  notes: p.notes || { top: "Botanical Essence", heart: "Floral Accords", base: "Amber & Musk" },
  description: p.description || "An exquisite distillation representing the finest elements of botanical luxury.",
  longevity: p.longevity || "8-10 Hours",
  projection: p.projection || "Moderate",
  personality: p.personality || "Elegant, Timeless",
  reviews: p.reviews || 42,
  rating: p.rating || 4.8,
  stock: p.stock !== undefined ? p.stock : 10
}));
