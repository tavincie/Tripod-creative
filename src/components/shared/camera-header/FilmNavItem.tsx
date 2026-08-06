'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { FilmModule } from './FilmModule';

interface FilmNavItemProps {
  href: string;
  label: string;
  frame: string;
  active?: boolean;
  onNavigate?: () => void;
}

export function FilmNavItem({
  href,
  label,
  frame,
  active = false,
  onNavigate,
}: FilmNavItemProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={`film-nav-item focus-ring ${active ? 'is-active' : ''}`}
    >
      <FilmModule frame={frame}>
        <span className="film-nav-item__playhead" aria-hidden="true" />
        <span className="film-nav-item__label">{label}</span>
        <span className="film-nav-item__underline" aria-hidden="true" />
      </FilmModule>
    </Link>
  );
}
