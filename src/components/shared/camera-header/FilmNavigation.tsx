'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FilmPerforations } from './FilmPerforations';
import { FilmNavItem } from './FilmNavItem';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FilmModule } from './FilmModule';
import { FilmTimeline } from './FilmTimeline';
import { FilmExitSlot } from './FilmExitSlot';

interface NavItem {
  name: string;
  href: string;
  active: boolean;
}

interface FilmNavigationProps {
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  onNavigate?: () => void;
}

export function FilmNavigation({
  items,
  ctaHref,
  ctaLabel,
  onNavigate,
}: FilmNavigationProps) {
  return (
    <div className="camera-film-header__connection">
      <FilmExitSlot />
      <div className="film-navigation-shell">
        <FilmPerforations className="film-perforations--top" />
        <div className="film-navigation">
          {items.map((item, index) => (
            <FilmNavItem
              key={item.href}
              href={item.href}
              label={item.name}
              frame={String(index + 1).padStart(2, '0')}
              active={item.active}
              onNavigate={onNavigate}
            />
          ))}

          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="film-project-cta focus-ring">
            <div className="film-module film-module--cta">
              <span className="film-module__frame">07</span>
              <span className="film-module__mark film-module__mark--top" aria-hidden="true" />
              <span className="film-module__mark film-module__mark--bottom" aria-hidden="true" />
              <span className="film-project-button">
                <span className="film-project-cta__label">{ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="film-module__stock-mark">TC-400</span>
            </div>
          </a>

          <div className="film-language-frame">
            <FilmModule frame="08" tone="utility">
              <div className="film-language-frame__content">
                <LanguageSwitcher />
              </div>
            </FilmModule>
          </div>
        </div>
        <FilmPerforations className="film-perforations--bottom" />
        <FilmTimeline />
      </div>
    </div>
  );
}
