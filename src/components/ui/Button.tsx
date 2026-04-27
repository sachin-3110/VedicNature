import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'underline' | 'icon-outline' | 'ghost';

// Shared props
interface BaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

// Button version
type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

// Link version
type LinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

export function Button(props: Props) {
  const { variant = 'primary', children, className = '' } = props;

  const baseClasses = 'transition-all duration-500';

  const variants = {
    primary:
      'bg-primary/60 text-on-primary px-10 py-4 font-label text-[11px] uppercase tracking-[0.2em] hover:opacity-90 shadow-sm',
    underline:
      'group relative py-2 overflow-hidden font-label text-[11px] uppercase tracking-[0.2em] text-primary',
    'icon-outline':
      'w-16 h-16 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black',
    ghost:
      'font-label text-[11px] uppercase tracking-[0.2em] text-primary hover:text-secondary',
  };

  const computedClassName = cn(
    'inline-flex items-center justify-center transition-all duration-200 relative overflow-hidden font-sans cursor-pointer active:scale-105',
    baseClasses,
    variants[variant],
    className
  );

  // 👉 If it's a link
  if ('href' in props && props.href !== undefined) {
    const { href, variant: _v, className: _c, ...rest } = props as LinkProps;

    return (
      <Link
        href={href}
        className={computedClassName}
        {...rest}
      >
        {variant === 'underline' ? <span>{children}</span> : children}
        {variant === 'underline' && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary active:bg-secondary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        )}
      </Link>
    );
  }

  // 👉 Otherwise it's a button
  const { href, variant: _v, className: _c, ...buttonRest } = props as ButtonProps;

  return (
    <button
      className={computedClassName}
      {...buttonRest}
    >
      {variant === 'underline' ? <span>{children}</span> : children}
      {variant === 'underline' && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary active:bg-secondary/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      )}
    </button>
  );
}