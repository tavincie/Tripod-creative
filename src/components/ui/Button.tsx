'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--tripod-radius-pill)] px-5 sm:px-6 text-[0.72rem] font-black uppercase tracking-[0.16em] transition-all duration-300 focus-ring cursor-pointer';
  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles = 'primary-button-gradient';
  } else if (variant === 'secondary') {
    variantStyles =
      'border border-[var(--tripod-border-dark)] bg-black/25 text-[var(--tripod-text-light)] hover:border-[rgba(255,61,0,0.35)] hover:bg-black/35';
  } else if (variant === 'outline') {
    variantStyles =
      'border border-[var(--tripod-border-light)] bg-[rgba(247,242,233,0.18)] text-[var(--tripod-text-dark)] hover:border-[rgba(255,61,0,0.28)] hover:bg-[rgba(247,242,233,0.3)]';
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
