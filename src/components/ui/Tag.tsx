import React from 'react';

export function Tag({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-surface-container-highest px-3 py-1 rounded-full inline-block font-label text-[10px] uppercase text-primary ${className}`}>
      {children}
    </div>
  );
}
