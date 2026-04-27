"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/products';

type CartItem = {
  product: Product;
  quantity: number;
};

type StoreContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: number) => boolean;

  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartTotal: number;
  
  isLoaded: boolean;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('vedic_wishlist');
    const savedCart = localStorage.getItem('vedic_cart');
    
    try {
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      if (savedCart) setCart(JSON.parse(savedCart));
    } catch (e) {
      console.error("Failed to parse cart/wishlist", e);
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Only save once we've successfully loaded from localStorage
    if (isLoaded) {
      localStorage.setItem('vedic_wishlist', JSON.stringify(wishlist));
      localStorage.setItem('vedic_cart', JSON.stringify(cart));
    }
  }, [wishlist, cart, isLoaded]);

  const addToWishlist = (product: Product) => {
    if (!wishlist.find(p => p.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(p => p.id !== id));
  };

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (id: number) => {
    return wishlist.some(p => p.id === id);
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.product.id === id ? { ...item, quantity } : item
    ));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <StoreContext.Provider value={{
      wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist,
      cart, addToCart, removeFromCart, updateQuantity, cartTotal,
      isLoaded
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
