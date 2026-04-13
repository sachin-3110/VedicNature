import React, { InputHTMLAttributes } from 'react';

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`bg-transparent border-b border-outline-variant py-3 px-2 font-label text-[11px] focus:outline-none focus:border-secondary transition-all placeholder:text-stone-400 ${className}`}
      {...props}
    />
  );
}
