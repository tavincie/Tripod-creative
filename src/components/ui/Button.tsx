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
    'inline-flex items-center justify-center px-6 py-3 rounded-sm text-xs font-black uppercase tracking-[0.12em] transition-all duration-300 focus-ring cursor-pointer';
  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles = 'primary-button-gradient text-black shadow-md';
  } else if (variant === 'secondary') {
    variantStyles =
      'bg-transparent hover:bg-white/5 text-on-surface border border-white/18 hover:border-primary/60';
  } else if (variant === 'outline') {
    variantStyles =
      'bg-transparent border border-white/18 hover:bg-primary/5 hover:border-primary/60 text-on-surface';
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
