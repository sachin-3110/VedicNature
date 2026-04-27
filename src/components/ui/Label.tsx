import React, { LabelHTMLAttributes } from 'react';

export function Label({ children, className = '', ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label 
      className={`font-label text-[12px] uppercase tracking-[0.4em] text-primary/70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
