'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { sampleMedia } from '@/data/sampleMedia';

interface AboutExperienceProps {
  ctaUrl: string;
}

const noteMediaKeys = [
  'creativeTeamBts',
  'cameraOperator',
  'graphicDesignerWorkspace',
] as const;

export function AboutExperience({ ctaUrl }: AboutExperienceProps) {
  const tAbout = useTranslations('AboutPage');
  const tCommon = useTranslations('Common');
  const productionNotes = tAbout.raw('notes.items') as Array<{
    number: string;
    title: string;
    description: string;
  }>;
  const processSteps = tAbout.raw('process.steps') as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <main className="relative flex-grow overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/6 bg-[linear-gradient(180deg,#050505_0%,#050505_72%,#090909_100%)] pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,124,72,0.24),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(245,241,233,0.08),transparent_20%),repeating-linear-gradient(90deg,rgba(245,241,233,0.04)_0_1px,transparent_1px_9rem)] opacity-90" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(245,241,233,0.22),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(25rem,1.14fr)] lg:items-center">
            <div className="space-y-5">
              <ScrollReveal>
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {tAbout('hero.eyebrow')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="max-w-[9.3ch] text-[clamp(2.85rem,13.8vw,5.75rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[var(--tripod-warm-white)] sm:max-w-4xl">
                  {tAbout('hero.title')}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.74)] sm:text-base">
                  {tAbout('hero.subtitle')}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(18,18,18,0.96))] shadow-[0_28px_70px_rgba(0,0,0,0.34)]">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)]">
                  <div className="relative min-h-[18rem] overflow-hidden border-b border-white/10 sm:min-h-[22rem] lg:min-h-[31rem] lg:border-b-0 lg:border-r">
                    <Image
                      src={sampleMedia.cameraOperator.src}
                      alt={tCommon(sampleMedia.cameraOperator.altKey)}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,124,72,0.06),rgba(0,0,0,0.76))]" />
                    <div className="absolute inset-[1rem] border border-white/12" aria-hidden="true" />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                      <span>{tAbout('hero.frameLabel')}</span>
                      <span>{tAbout('hero.statusValue')}</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                      {(tAbout.raw('hero.laneLabels') as string[]).map((label) => (
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
                    {[sampleMedia.brandingMockups, sampleMedia.studioMicrophone].map(
                      (media, index) => (
                        <div
                          key={media.key}
                          className={`relative min-h-[11rem] overflow-hidden sm:min-h-[15.5rem] ${
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
                            {index === 0 ? `02 / ${tAbout('hero.statusLabel')}` : `03 / ${tAbout('hero.eyebrow')}`}
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

      <section className="tripod-page-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="film-light-kicker">{tAbout('identity.eyebrow')}</p>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-text-dark)]">
                  {tAbout('identity.title')}
                </h2>
                <p className="max-w-xl text-sm leading-7 text-[var(--tripod-text-muted-dark)] sm:text-base">
                  {tAbout('identity.body')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {(tAbout.raw('identity.credits') as string[]).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-[rgba(23,21,18,0.12)] bg-white px-4 py-5 text-center shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                  >
                    <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="tripod-page-dark border-y border-white/6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <ScrollReveal>
              <div className="space-y-3">
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {tAbout('notes.eyebrow')}
                </p>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-warm-white)]">
                  {tAbout('notes.title')}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.72)] sm:text-base">
                {tAbout('notes.body')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productionNotes.map((note, index) => (
              <ScrollReveal key={note.number} delay={0.05 * index}>
                <article className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                    {note.number}
                  </p>
                  <h3 className="mt-4 text-[1.35rem] font-black uppercase leading-tight tracking-[-0.02em] text-[var(--tripod-warm-white)]">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(245,241,233,0.72)]">
                    {note.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tripod-page-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(23,21,18,0.12)] bg-black shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                <div className="grid gap-0 md:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[18rem] overflow-hidden border-b border-white/10 md:min-h-[26rem] md:border-b-0 md:border-r">
                    <Image
                      src={sampleMedia.videoProductionSetup.src}
                      alt={tCommon(sampleMedia.videoProductionSetup.altKey)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,124,72,0.08),rgba(0,0,0,0.72))]" />
                  </div>
                  <div className="grid gap-0">
                    {noteMediaKeys.slice(1).map((mediaKey, index) => {
                      const media = sampleMedia[mediaKey];
                      return (
                        <div
                          key={media.key}
                          className={`relative min-h-[11rem] overflow-hidden md:min-h-[13rem] ${
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
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="space-y-5">
                <p className="film-light-kicker">{tAbout('difference.eyebrow')}</p>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-text-dark)]">
                  {tAbout('difference.title')}
                </h2>
                <p className="max-w-xl text-sm leading-7 text-[var(--tripod-text-muted-dark)] sm:text-base">
                  {tAbout('difference.body')}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {(tAbout.raw('difference.labels') as string[]).map((label) => (
                    <div
                      key={label}
                      className="rounded-[1.15rem] border border-[rgba(23,21,18,0.12)] bg-white px-4 py-4 text-center shadow-[0_16px_34px_rgba(0,0,0,0.07)]"
                    >
                      <p className="font-mono text-[0.62rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="tripod-page-dark border-y border-white/6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <ScrollReveal>
              <div className="space-y-3">
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {tAbout('process.eyebrow')}
                </p>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--tripod-warm-white)]">
                  {tAbout('process.title')}
                </h2>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={0.05 * index}>
                <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20 p-5">
                  <div className="font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-[1.22rem] font-black uppercase leading-tight tracking-[-0.02em] text-[var(--tripod-warm-white)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(245,241,233,0.72)]">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="film-cta-section py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[1.04fr_0.78fr_0.68fr] lg:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {tAbout('cta.eyebrow')}
              </p>
              <h2>{tAbout('cta.title')}</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p>{tAbout('cta.body')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full"
              >
                <Button variant="primary" className="gap-2 px-6 py-3">
                  {tAbout('cta.primary')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <Link
                href="/portfolio"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border border-white/12 px-4 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-warm-white)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
              >
                {tAbout('cta.secondary')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
