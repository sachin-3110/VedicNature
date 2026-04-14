import React from 'react';

export function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-label text-[12px] uppercase tracking-[0.4em] text-primary/70 ${className}`}>
      {children}
    </span>
  );
}
