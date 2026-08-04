'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import {
  portfolioCategories,
  portfolioData,
  type PortfolioCategoryKey,
} from '@/data/portfolio';
import { sampleMedia } from '@/data/sampleMedia';

interface PortfolioExperienceProps {
  featuredUrl: string;
  bookingUrl: string;
}

const featuredArchiveMediaKeys = {
  brandIdentity: 'brandingMockups',
  eventCoverage: 'eventPhotography',
  studioProduction: 'editingTimeline',
  digitalCampaigns: 'socialCampaignVisuals',
} as const;

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        'focus-ring relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-sm border px-4 py-3 font-mono text-[0.64rem] font-black uppercase tracking-[0.18em] transition-colors duration-300 sm:px-5',
        active
          ? 'border-[rgba(255,124,72,0.55)] bg-[linear-gradient(180deg,rgba(255,124,72,0.18),rgba(255,124,72,0.06))] text-[var(--tripod-warm-white)] shadow-[0_16px_40px_rgba(255,124,72,0.14)]'
          : 'border-white/10 bg-white/[0.03] text-[rgba(245,241,233,0.68)] hover:border-white/20 hover:text-[var(--tripod-warm-white)]',
      ].join(' ')}
    >
      <span
        className="absolute inset-y-0 left-0 w-[3px] bg-[rgba(255,124,72,0.9)]"
        aria-hidden="true"
      />
      <span>{label}</span>
    </button>
  );
}

export function PortfolioExperience({
  featuredUrl,
  bookingUrl,
}: PortfolioExperienceProps) {
  const t = useTranslations('PortfolioPage');
  const tCommon = useTranslations('Common');
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategoryKey>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return portfolioData;
    return portfolioData.filter((item) => item.categoryKey === activeCategory);
  }, [activeCategory]);

  const featuredArchiveItems = t.raw('featured.items') as Array<{
    key: keyof typeof featuredArchiveMediaKeys;
    eyebrow: string;
    title: string;
    description: string;
  }>;

  return (
    <main className="relative flex-grow overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/6 bg-[linear-gradient(180deg,#050505_0%,#050505_72%,#090909_100%)] pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(255,124,72,0.24),transparent_22%),radial-gradient(circle_at_84%_22%,rgba(245,241,233,0.1),transparent_18%),repeating-linear-gradient(90deg,rgba(245,241,233,0.04)_0_1px,transparent_1px_9rem)] opacity-90" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(245,241,233,0.22),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(25rem,1.12fr)] lg:items-center">
            <div className="space-y-5">
              <ScrollReveal>
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {t('hero.eyebrow')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="max-w-4xl text-[clamp(3.35rem,5vw,5.8rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[var(--tripod-warm-white)] sm:text-[clamp(3.6rem,5.3vw,6rem)]">
                  {t('hero.title')}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.74)] sm:text-base">
                  {t('hero.subtitle')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    t('hero.frameLabel'),
                    t('hero.archiveStatus'),
                    t('hero.frameCount'),
                  ].map((label) => (
                    <div
                      key={label}
                      className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-4 font-mono text-[0.65rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(18,18,18,0.96))] shadow-[0_28px_70px_rgba(0,0,0,0.34)]">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1.06fr)_minmax(19rem,0.94fr)]">
                  <div className="relative min-h-[22rem] overflow-hidden border-b border-white/10 lg:min-h-[31rem] lg:border-b-0 lg:border-r">
                    <Image
                      src={sampleMedia.eventPhotography.src}
                      alt={tCommon(sampleMedia.eventPhotography.altKey)}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,124,72,0.06),rgba(0,0,0,0.76))]" />
                    <div
                      className="absolute inset-[1rem] border border-white/12"
                      aria-hidden="true"
                    />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                      <span>{t('hero.frameLabel')}</span>
                      <span>{t('hero.archiveStatusValue')}</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                      {(t.raw('hero.laneLabels') as string[]).map((label) => (
                        <span
                          key={label}
                          className="rounded-full border border-white/12 bg-black/30 px-3 py-1 font-mono text-[0.56rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-warm-white)]"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-0">
                    {[sampleMedia.brandingMockups, sampleMedia.socialCampaignVisuals].map(
                      (media, index) => (
                        <div
                          key={media.key}
                          className={`relative min-h-[15.5rem] overflow-hidden ${
                            index === 0 ? 'border-b border-white/10' : ''
                          }`}
                        >
                          <Image
                            src={media.src}
                            alt={tCommon(media.altKey)}
                            fill
                            sizes="(max-width: 1024px) 100vw, 22vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                          <div className="absolute bottom-4 left-4 rounded-sm border border-white/12 bg-black/35 px-3 py-2 font-mono text-[0.58rem] font-black uppercase tracking-[0.16em] text-[rgba(245,241,233,0.76)]">
                            {index === 0 ? `02 / ${t('filters.items.branding')}` : `03 / ${t('filters.items.digitalCampaigns')}`}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#090909_0%,#0d0d0d_100%)] py-5">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-4 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start">
            <div className="space-y-2">
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {t('filters.eyebrow')}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-[rgba(245,241,233,0.55)]">
                {t('filters.ariaLabel')}
              </p>
            </div>
            <div
              className="flex gap-3 overflow-x-auto pb-1"
              role="toolbar"
              aria-label={t('filters.ariaLabel')}
            >
              {portfolioCategories.map((category) => (
                <FilterButton
                  key={category}
                  active={activeCategory === category}
                  label={t(`filters.items.${category}`)}
                  onClick={() => setActiveCategory(category)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#090909_0%,#050505_100%)] py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(245,241,233,0.04)_0_1px,transparent_1px_11rem)] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div className="space-y-3">
              <ScrollReveal>
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {t('grid.eyebrow')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="max-w-xl text-[clamp(2.9rem,4.8vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-warm-white)]">
                  {t('grid.title')}
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <div className="rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-[0.62rem] font-black uppercase tracking-[0.16em] text-[rgba(245,241,233,0.72)]">
                  {t('grid.resultCount', { count: filteredItems.length })}
                </div>
                <div className="rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-[0.62rem] font-black uppercase tracking-[0.16em] text-[rgba(245,241,233,0.72)]">
                  {t(`filters.items.${activeCategory}`)}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {filteredItems.length === 0 ? (
            <ScrollReveal>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center text-sm text-[rgba(245,241,233,0.72)]">
                {t('grid.empty')}
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item, index) => {
                const media = sampleMedia[item.mediaKey];
                return (
                  <ScrollReveal key={item.key} delay={0.04 * index}>
                    <article
                      aria-label={`${t(`projects.${item.key}.title`)} - ${t(`filters.items.${item.categoryKey}`)}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.99),rgba(18,18,18,0.98))] shadow-[0_22px_56px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="relative min-h-[19rem] overflow-hidden border-b border-white/10 sm:min-h-[22rem]">
                        <Image
                          src={media.src}
                          alt={tCommon(media.altKey)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 32vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`} />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.78))]" />
                        <div
                          className="absolute inset-[0.9rem] border border-white/12"
                          aria-hidden="true"
                        />
                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-4 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                          <span>
                            {t('grid.frameLabel')} {String(index + 1).padStart(2, '0')}
                          </span>
                          <span>{t(`filters.items.${item.categoryKey}`)}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                          <span className="rounded-sm border border-white/12 bg-black/35 px-3 py-2 font-mono text-[0.56rem] font-black uppercase tracking-[0.16em] text-[rgba(245,241,233,0.78)]">
                            {item.placeholderType === 'video'
                              ? t('grid.videoPlaceholder')
                              : t('grid.imagePlaceholder')}
                          </span>
                          <span className="rounded-sm border border-[rgba(255,124,72,0.28)] bg-[rgba(255,124,72,0.12)] px-3 py-2 font-mono text-[0.56rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-orange)]">
                            {t(`status.${item.statusKey}`)}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                        <div className="flex flex-wrap gap-2">
                          {item.tagKeys.map((tagKey) => (
                            <span
                              key={tagKey}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[rgba(245,241,233,0.72)]"
                            >
                              {t(`tags.${tagKey}`)}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-[1.5rem] font-black uppercase leading-[0.94] tracking-[-0.03em] text-[var(--tripod-warm-white)] sm:text-[1.8rem]">
                            {t(`projects.${item.key}.title`)}
                          </h3>
                          <p className="text-sm leading-7 text-[rgba(245,241,233,0.74)]">
                            {t(`projects.${item.key}.description`)}
                          </p>
                        </div>

                        <div className="mt-auto grid gap-3 border-t border-white/8 pt-4 sm:grid-cols-3">
                          <div className="space-y-1">
                            <p className="font-mono text-[0.55rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.48)]">
                              {t('grid.yearLabel')}
                            </p>
                            <p className="font-mono text-[0.7rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-warm-white)]">
                              {item.year}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-mono text-[0.55rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.48)]">
                              {t('grid.statusLabel')}
                            </p>
                            <p className="font-mono text-[0.7rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-warm-white)]">
                              {t(`status.${item.statusKey}`)}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-mono text-[0.55rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.48)]">
                              {t('grid.tagLabel')}
                            </p>
                            <p className="font-mono text-[0.7rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                              {t(`filters.items.${item.categoryKey}`)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="tripod-page-dark border-y border-white/6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div className="space-y-3">
              <ScrollReveal>
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {t('featured.eyebrow')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-warm-white)]">
                  {t('featured.title')}
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.12}>
              <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.72)] sm:text-base">
                {t('featured.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredArchiveItems.map((item, index) => {
              const media = sampleMedia[featuredArchiveMediaKeys[item.key]];
              return (
                <ScrollReveal key={item.key} delay={0.05 * index}>
                  <article className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03]">
                    <div className="relative min-h-[17rem] overflow-hidden border-b border-white/10">
                      <Image
                        src={media.src}
                        alt={tCommon(media.altKey)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 24vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,124,72,0.05),rgba(0,0,0,0.76))]" />
                      <div className="absolute left-4 top-4 rounded-sm border border-white/12 bg-black/35 px-3 py-2 font-mono text-[0.56rem] font-black uppercase tracking-[0.16em] text-[rgba(245,241,233,0.76)]">
                        {item.eyebrow}
                      </div>
                    </div>
                    <div className="space-y-3 p-5">
                      <p className="font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                        {item.title}
                      </p>
                      <p className="text-sm leading-7 text-[rgba(245,241,233,0.72)]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="film-cta-section border-t border-white/8 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[1.04fr_0.78fr_0.68fr] lg:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {t('cta.eyebrow')}
              </p>
              <h2>{t('cta.title')}</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p>{t('cta.subtitle')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={featuredUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full"
              >
                <Button variant="primary" className="gap-2 px-6 py-3">
                  {t('cta.primary')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border border-white/12 px-4 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-warm-white)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t('cta.secondary')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
