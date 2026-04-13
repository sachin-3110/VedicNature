import React, { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

export function IconButton({ icon, className = '', ...props }: IconButtonProps) {
  return (
    <button 
      className={`text-[#5f5e5e] hover:opacity-80 transition-opacity flex items-center justify-center ${className}`}
      {...props}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
