'use client';

import React from 'react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

interface SecondaryPageHeroProps {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  textAfterTitle?: React.ReactNode;
  titleId?: string;
}

export function SecondaryPageHero({
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  textAfterTitle,
  titleId,
}: SecondaryPageHeroProps) {
  return (
    <section
      className={[
        'secondary-page-hero relative overflow-hidden border-b border-white/6 bg-[linear-gradient(180deg,#050505_0%,#050505_76%,#090909_100%)] pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-32',
        className,
      ].join(' ')}
      aria-labelledby={titleId}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,124,72,0.2),transparent_22%),radial-gradient(circle_at_84%_22%,rgba(245,241,233,0.08),transparent_20%),repeating-linear-gradient(90deg,rgba(245,241,233,0.035)_0_1px,transparent_1px_9rem)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(245,241,233,0.22),transparent)]" />

      <div className="secondary-page-hero__container relative mx-auto max-w-7xl px-5 md:px-12 xl:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-start xl:gap-10">
          <div className="secondary-page-hero__copy max-w-3xl space-y-5">
            <ScrollReveal>
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h1
                id={titleId}
                className="secondary-page-hero__title max-w-4xl text-[2.12rem] font-black uppercase leading-[1.04] tracking-normal text-[var(--tripod-warm-white)] [text-wrap:balance] sm:text-[2.55rem] lg:text-[3.05rem] xl:text-[3.45rem]"
              >
                {title}
              </h1>
            </ScrollReveal>
            {subtitle ? (
              <ScrollReveal delay={0.12}>
                <p className="secondary-page-hero__subtitle max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.74)] sm:text-base">
                  {subtitle}
                </p>
              </ScrollReveal>
            ) : null}
            {textAfterTitle}
          </div>

          <ScrollReveal delay={0.12}>
            {children}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
