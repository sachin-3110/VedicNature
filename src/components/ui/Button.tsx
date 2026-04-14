import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'underline' | 'icon-outline' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'transition-all duration-500';

  const variants = {
    primary: 'bg-primary/60 text-on-primary px-10 py-4 font-label text-[11px] uppercase tracking-[0.2em] hover:opacity-90 active:scale-110 cursor-pointer shadow-sm',
    underline: 'group relative py-2 overflow-hidden font-label text-[11px] uppercase tracking-[0.2em] text-primary',
    'icon-outline': 'w-16 h-16 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black',
    ghost: 'font-label text-[11px] uppercase tracking-[0.2em] text-primary hover:text-secondary',
  };

  if (variant === 'underline') {
    return (
      <Link href="#" className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
        <span>{children}</span>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
