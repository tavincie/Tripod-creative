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
    'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-ring cursor-pointer';
  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles = 'primary-button-gradient text-black shadow-md';
  } else if (variant === 'secondary') {
    variantStyles =
      'bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant/30 hover:border-outline-variant/70';
  } else if (variant === 'outline') {
    variantStyles =
      'bg-transparent border border-outline hover:bg-primary/5 hover:border-primary/50 text-on-surface';
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
