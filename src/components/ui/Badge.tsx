import React from 'react';

interface BadgeProps {
  count: number;
}

export function Badge({ count }: BadgeProps) {
  if (count <= 0) return null;
  
  return (
    <span className="absolute -top-1 -right-1 text-[8px] bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full">
      {count}
    </span>
  );
}
