'use client';

import React from 'react';

type ButtonOwnProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButtonProps = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsSpanProps = ButtonOwnProps &
  React.HTMLAttributes<HTMLSpanElement> & {
    as: 'span';
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsSpanProps;

export function Button({
  as = 'button',
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

  const classes = `${baseStyles} ${variantStyles} ${className}`;

  if (as === 'span') {
    return (
      <span className={classes} {...(props as React.HTMLAttributes<HTMLSpanElement>)}>
        {children}
      </span>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
