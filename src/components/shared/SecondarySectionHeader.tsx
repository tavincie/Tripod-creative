'use client';

import React from 'react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

type SecondarySectionTone = 'dark' | 'light';
type SecondarySectionVariant = 'section' | 'editorial' | 'compact' | 'legal';
type SecondarySectionLayout = 'split' | 'stack';

interface SecondarySectionHeaderProps {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  body?: React.ReactNode;
  tone?: SecondarySectionTone;
  variant?: SecondarySectionVariant;
  layout?: SecondarySectionLayout;
  className?: string;
  bodyClassName?: string;
}

export function SecondarySectionHeader({
  eyebrow,
  title,
  body,
  tone = 'dark',
  variant = 'section',
  layout = 'split',
  className = '',
  bodyClassName = '',
}: SecondarySectionHeaderProps) {
  const eyebrowClass = tone === 'light' ? 'film-light-kicker' : 'film-kicker';
  const bodyToneClass =
    tone === 'light'
      ? 'text-[var(--tripod-text-muted-dark)]'
      : 'text-[rgba(245,241,233,0.72)]';
  const titleToneClass =
    tone === 'light'
      ? 'text-[var(--tripod-text-dark)]'
      : 'text-[var(--tripod-warm-white)]';

  return (
    <div
      className={[
        layout === 'split'
          ? 'secondary-section-header mb-7 grid gap-4 lg:mb-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end'
          : 'secondary-section-header mb-7 space-y-4 lg:mb-8',
        className,
      ].join(' ')}
    >
      <ScrollReveal>
        <div className="space-y-3">
          <p className={eyebrowClass}>
            {tone === 'dark' ? <span className="film-rec-dot" aria-hidden="true" /> : null}
            {eyebrow}
          </p>
          <h2
            className={[
              'secondary-section-title',
              `secondary-section-title--${variant}`,
              titleToneClass,
            ].join(' ')}
          >
            {title}
          </h2>
        </div>
      </ScrollReveal>

      {body ? (
        <ScrollReveal delay={0.08}>
          <p
            className={[
              'secondary-section-body max-w-2xl text-sm leading-7 sm:text-base',
              bodyToneClass,
              bodyClassName,
            ].join(' ')}
          >
            {body}
          </p>
        </ScrollReveal>
      ) : null}
    </div>
  );
}
