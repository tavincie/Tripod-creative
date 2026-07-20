'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import {
  portfolioCategories,
  portfolioData,
  type PortfolioCategoryKey,
} from '@/data/portfolio';
import { homepageArchiveMediaKeys, sampleMedia } from '@/data/sampleMedia';

interface PortfolioExperienceProps {
  featuredUrl: string;
  bookingUrl: string;
}

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
        'focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300',
        active
          ? 'border-primary/50 bg-gradient-to-r from-primary to-secondary-container text-black shadow-[0_12px_30px_rgba(255,182,136,0.25)]'
          : 'border-white/10 bg-white/5 text-on-surface-variant hover:border-primary/30 hover:text-white',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

export function PortfolioExperience({
  featuredUrl,
  bookingUrl,
}: PortfolioExperienceProps) {
  const t = useTranslations('PortfolioPage');
  const locale = useLocale();
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategoryKey>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return portfolioData;
    return portfolioData.filter((item) => item.categoryKey === activeCategory);
  }, [activeCategory]);

  const heroMedia = [
    sampleMedia.eventPhotography,
    sampleMedia.brandingMockups,
    sampleMedia.socialCampaignVisuals,
  ];

  return (
    <main className="relative flex-grow overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/6 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,126,0,0.28),transparent_24%),radial-gradient(circle_at_84%_24%,rgba(253,208,0,0.1),transparent_20%),linear-gradient(180deg,rgba(8,10,12,0.95),rgba(8,10,12,0.74))]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,1.1fr)] lg:items-center">
            <div className="space-y-5">
              <ScrollReveal>
                <span className="label-sm inline-flex rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-primary">
                  {t('hero.eyebrow')}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="display-lg text-white">{t('hero.title')}</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="body-lg max-w-2xl text-on-surface-variant">
                  {t('hero.subtitle')}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src={heroMedia[0].src}
                    alt={heroMedia[0].alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))]" />
                </div>
                <div className="grid gap-4">
                  {heroMedia.slice(1).map((media) => (
                    <div key={media.key} className="relative min-h-[12rem] overflow-hidden rounded-[1.6rem] border border-white/10">
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 22vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-20 border-b border-white/6 bg-background/82 py-4 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="flex gap-3 overflow-x-auto pb-1" role="toolbar" aria-label={t('filters.ariaLabel')}>
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
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div className="space-y-2">
              <ScrollReveal>
                <span className="label-sm text-primary">{t('grid.eyebrow')}</span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="headline-lg text-white">{t('grid.title')}</h2>
              </ScrollReveal>
            </div>
          </div>

          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {filteredItems.map((item, index) => {
              const media = sampleMedia[homepageArchiveMediaKeys[index % homepageArchiveMediaKeys.length]];
              return (
                <ScrollReveal key={item.key} className="mb-5 break-inside-avoid" delay={0.05 * index}>
                  <article aria-label={`${t(`projects.${item.key}.title`)} - ${t(`filters.items.${item.categoryKey}`)}`} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
                    <div className={`relative ${item.aspectRatio}`}>
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.78))]" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80">
                        {t(`filters.items.${item.categoryKey}`)}
                      </div>
                      <div className="absolute inset-x-4 bottom-4">
                        <h3 className="text-xl font-semibold text-white">
                          {t(`projects.${item.key}.title`)}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/74">
                          {t(`projects.${item.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-surface-container-lowest/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <ScrollReveal>
            <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[22rem]">
                <Image
                  src={sampleMedia.editingTimeline.src}
                  alt={sampleMedia.editingTimeline.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))]" />
              </div>
              <div className="flex items-center p-6 sm:p-8 lg:p-10">
                <div className="max-w-xl space-y-5">
                  <p className="label-sm text-primary">{t('featured.eyebrow')}</p>
                  <h2 className="headline-lg text-white">{t('featured.title')}</h2>
                  <p className="body-md text-on-surface-variant">{t('featured.subtitle')}</p>
                  <a href={featuredUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full">
                    <Button variant="primary" className="gap-2 px-6 py-3.5">
                      {t('featured.cta')}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-16">
          <ScrollReveal>
            <span className="label-sm text-primary">{t('cta.eyebrow')}</span>
            <h2 className="headline-lg mt-4 text-white">{t('cta.title')}</h2>
            <p className="body-md mx-auto mt-4 max-w-2xl text-on-surface-variant">{t('cta.subtitle')}</p>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full">
              <Button variant="primary" className="px-7 py-3.5">
                {locale === 'sw' ? 'Book on WhatsApp' : 'Book on WhatsApp'}
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
