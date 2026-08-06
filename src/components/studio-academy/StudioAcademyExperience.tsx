'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SecondaryPageHero } from '@/components/shared/SecondaryPageHero';
import { sampleMedia } from '@/data/sampleMedia';

interface StudioAcademyExperienceProps {
  serviceUrls: Record<string, string>;
}

const zoneOrder = [
  'recordingStudio',
  'musicProduction',
  'podcastSetup',
  'instrumentTraining',
  'creativePracticeSessions',
] as const;

const zoneMediaMap = {
  recordingStudio: 'studioMicrophone',
  musicProduction: 'musicProducerWorkstation',
  podcastSetup: 'editingTimeline',
  instrumentTraining: 'instrumentTraining',
  creativePracticeSessions: 'creativeTeamBts',
} as const;

const atmosphereMediaKeys = [
  'studioMicrophone',
  'instrumentTraining',
  'musicProducerWorkstation',
] as const;

export function StudioAcademyExperience({
  serviceUrls,
}: StudioAcademyExperienceProps) {
  const t = useTranslations('StudioAcademyPage');
  const tCommon = useTranslations('Common');
  const pathSteps = t.raw('path.steps') as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <main className="relative flex-grow overflow-hidden">
      <SecondaryPageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        titleId="studio-academy-hero-title"
        textAfterTitle={
          <ScrollReveal delay={0.16}>
            <div className="grid gap-3 md:grid-cols-3">
              {(t.raw('hero.summary') as string[]).map((item) => (
                <div
                  key={item}
                  className="rounded-[0.85rem] border border-white/10 bg-white/[0.03] px-4 py-4 font-mono text-[0.65rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        }
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(18,18,18,0.96))] shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.92fr)]">
            <div className="relative min-h-[14rem] overflow-hidden border-b border-white/10 sm:min-h-[18rem] lg:min-h-[22rem] lg:border-b-0 lg:border-r">
              <Image
                src={sampleMedia.musicProducerWorkstation.src}
                alt={tCommon(sampleMedia.musicProducerWorkstation.altKey)}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,124,72,0.06),rgba(0,0,0,0.76))]" />
              <div className="absolute inset-[1rem] border border-white/12" aria-hidden="true" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                <span>{t('hero.frameLabel')}</span>
                <span>{t('hero.statusValue')}</span>
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

            <div className="hidden gap-0 lg:grid">
              {[sampleMedia.studioMicrophone, sampleMedia.instrumentTraining].map(
                (media, index) => (
                  <div
                    key={media.key}
                    className={`relative min-h-[8.5rem] overflow-hidden sm:min-h-[10rem] lg:min-h-[11rem] ${
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
                      {index === 0 ? `02 / ${t('hero.statusLabel')}` : `03 / ${t('zones.eyebrow')}`}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </SecondaryPageHero>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#090909_0%,#050505_100%)] py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(245,241,233,0.04)_0_1px,transparent_1px_11rem)] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {t('zones.eyebrow')}
                </p>
                <h2 className="max-w-xl text-[clamp(2.95rem,4.8vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-warm-white)]">
                  {t('zones.title')}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.72)] sm:text-base">
                {t('zones.body')}
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            {zoneOrder.map((zoneKey, index) => {
              const media = sampleMedia[zoneMediaMap[zoneKey]];

              return (
                <ScrollReveal key={zoneKey} delay={0.05 * index}>
                  <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,9,9,0.98),rgba(17,17,17,0.96))] shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
                    <div className="grid gap-0 lg:grid-cols-[minmax(19rem,0.92fr)_minmax(0,1.08fr)]">
                      <div
                        className={`relative min-h-[18rem] overflow-hidden border-b border-white/10 sm:min-h-[21rem] lg:min-h-[28rem] lg:border-b-0 ${
                          index % 2 === 1 ? 'lg:order-2 lg:border-l lg:border-r-0' : 'lg:border-r'
                        }`}
                      >
                        <Image
                          src={media.src}
                          alt={tCommon(media.altKey)}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.08),rgba(0,0,0,0.8))]" />
                        <div className="absolute inset-[1rem] border border-white/14" aria-hidden="true" />
                        <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                          <span>{t(`zones.items.${zoneKey}.label`)}</span>
                          <span>{t(`zones.items.${zoneKey}.number`)}</span>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 space-y-3">
                          <h3 className="text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[var(--tripod-warm-white)] sm:text-[2.6rem]">
                            {t(`zones.items.${zoneKey}.title`)}
                          </h3>
                          <p className="max-w-md text-sm leading-7 text-[rgba(245,241,233,0.78)]">
                            {t(`zones.items.${zoneKey}.description`)}
                          </p>
                        </div>
                      </div>

                      <div className={`flex items-center p-5 sm:p-7 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="grid w-full gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                          <div className="space-y-4">
                            <p className="font-mono text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                              {t(`zones.items.${zoneKey}.number`)}
                            </p>
                            <h4 className="text-[1.35rem] font-black uppercase leading-tight tracking-[-0.02em] text-[var(--tripod-warm-white)] sm:text-[1.55rem]">
                              {t(`zones.items.${zoneKey}.title`)}
                            </h4>
                            <p className="max-w-xl text-sm leading-7 text-[rgba(245,241,233,0.7)]">
                              {t(`zones.items.${zoneKey}.description`)}
                            </p>
                          </div>

                          <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-4 font-mono text-[0.62rem] font-black uppercase tracking-[0.16em] text-[rgba(245,241,233,0.74)] sm:min-w-[12rem]">
                            {t(`zones.items.${zoneKey}.label`)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tripod-page-light border-y border-white/6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <ScrollReveal>
              <div className="space-y-3">
                <p className="film-light-kicker">{t('path.eyebrow')}</p>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-text-dark)]">
                  {t('path.title')}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="max-w-2xl text-sm leading-7 text-[var(--tripod-text-muted-dark)] sm:text-base">
                {t('path.body')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(23,21,18,0.12)] bg-black shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                <div className="relative min-h-[25rem]">
                  <Image
                    src={sampleMedia.editingTimeline.src}
                    alt={tCommon(sampleMedia.editingTimeline.altKey)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.12),rgba(0,0,0,0.72))]" />
                  <div className="absolute inset-[1rem] border border-white/12" aria-hidden="true" />
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                    <span>{t('path.eyebrow')}</span>
                    <span>{pathSteps.length} STEPS</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {pathSteps.map((step) => (
                      <span
                        key={step.number}
                        className="rounded-full border border-white/12 bg-black/30 px-3 py-1 font-mono text-[0.56rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-warm-white)]"
                      >
                        {step.number}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-4">
              {pathSteps.map((step, index) => (
                <ScrollReveal key={step.number} delay={0.05 * index}>
                  <div className="rounded-[1.5rem] border border-[rgba(23,21,18,0.12)] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                    <div className="grid gap-4 md:grid-cols-[4.8rem_minmax(0,1fr)] md:items-start">
                      <div className="font-mono text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                        {step.number}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-[1.3rem] font-black uppercase leading-tight tracking-[-0.02em] text-[var(--tripod-text-dark)]">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-7 text-[var(--tripod-text-muted-dark)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tripod-page-dark border-y border-white/6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <ScrollReveal>
              <div className="space-y-3">
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {t('atmosphere.eyebrow')}
                </p>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-warm-white)]">
                  {t('atmosphere.title')}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.72)] sm:text-base">
                {t('atmosphere.body')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.16fr_0.84fr_0.84fr]">
            {atmosphereMediaKeys.map((mediaKey, index) => {
              const media = sampleMedia[mediaKey];
              const labels = t.raw('atmosphere.labels') as string[];

              return (
                <ScrollReveal key={media.key} delay={0.06 * index}>
                  <div
                    className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 ${
                      index === 0 ? 'md:row-span-2 min-h-[28rem]' : 'min-h-[13.5rem]'
                    }`}
                  >
                    <Image
                      src={media.src}
                      alt={tCommon(media.altKey)}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/80">
                      {labels[index]}
                    </div>
                  </div>
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
                href={serviceUrls.recordingSession}
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
                href={serviceUrls.generalInquiry}
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
