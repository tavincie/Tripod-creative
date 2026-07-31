'use client';

import React from 'react';

interface FilmPerforationsProps {
  className?: string;
}

export function FilmPerforations({ className = '' }: FilmPerforationsProps) {
  return (
    <div className={`film-perforations ${className}`} aria-hidden="true">
      {Array.from({ length: 28 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}
