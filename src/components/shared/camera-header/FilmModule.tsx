'use client';

import React, { ReactNode } from 'react';

interface FilmModuleProps {
  frame: string;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'cta' | 'utility';
}

export function FilmModule({
  frame,
  children,
  className = '',
  tone = 'default',
}: FilmModuleProps) {
  return (
    <div className={`film-module film-module--${tone} ${className}`.trim()}>
      <span className="film-module__frame">{frame}</span>
      <span className="film-module__mark film-module__mark--top" aria-hidden="true" />
      <span className="film-module__mark film-module__mark--bottom" aria-hidden="true" />
      {children}
    </div>
  );
}
