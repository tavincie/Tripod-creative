'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, Clapperboard, Palette, RadioTower, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { sampleMedia } from '@/data/sampleMedia';

interface AboutExperienceProps {
  ctaUrl: string;
}

export function AboutExperience({ ctaUrl }: AboutExperienceProps) {
  const tAbout = useTranslations('AboutPage');
  const tCommon = useTranslations('Common');
  const capabilityItems = tAbout.raw('capabilities.items') as string[];
  const cultureLabels = tAbout.raw('culture.labels') as string[];
  const processSteps = tAbout.raw('process.steps') as Array<{
    title: string;
    description: string;
  }>;

  const cultureMedia = [
    sampleMedia.creativeTeamBts,
    sampleMedia.cameraOperator,
    sampleMedia.graphicDesignerWorkspace,
  ];

  return (
    <main className="relative flex-grow overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/6 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,126,0,0.28),transparent_26%),radial-gradient(circle_at_82%_30%,rgba(253,208,0,0.1),transparent_22%),linear-gradient(180deg,rgba(8,10,12,0.92),rgba(8,10,12,0.72))]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,1.1fr)] lg:items-center">
            <div className="space-y-5">
              <ScrollReveal>
                <span className="label-sm inline-flex rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-primary">
                  {tAbout('hero.eyebrow')}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="display-lg max-w-4xl text-white">{tAbout('hero.title')}</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p className="body-lg max-w-2xl text-on-surface-variant">
                  {tAbout('hero.subtitle')}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.16}>
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src={sampleMedia.cameraOperator.src}
                    alt={tCommon(sampleMedia.cameraOperator.altKey)}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,126,0,0.12),rgba(0,0,0,0.66))]" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">
                      {tAbout('hero.brandLabel')}
                    </p>
                    <p className="mt-3 max-w-sm text-lg font-semibold text-white">
                      {tAbout('statement.title')}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {[sampleMedia.brandingMockups, sampleMedia.studioMicrophone].map((media, index) => (
                    <div
                      key={media.key}
                      className="relative min-h-[12rem] overflow-hidden rounded-[1.6rem] border border-white/10"
                    >
                      <Image
                        src={media.src}
                        alt={tCommon(media.altKey)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 22vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                      <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80">
                        {index === 0 ? tAbout.raw('hero.mediaLabels')[0] : tAbout.raw('hero.mediaLabels')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="tripod-page-light py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="headline-lg text-[var(--tripod-text-dark)]">{tAbout('statement.title')}</h2>
              <p className="body-md max-w-xl text-[var(--tripod-text-muted-dark)]">
                {tAbout('statement.body')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src={sampleMedia.videoProductionSetup.src}
                alt={tCommon(sampleMedia.videoProductionSetup.altKey)}
                width={sampleMedia.videoProductionSetup.width}
                height={sampleMedia.videoProductionSetup.height}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.64),rgba(0,0,0,0.18))]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="tripod-page-dark border-y border-white/6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={sampleMedia.creativeTeamBts.src}
                  alt={tCommon(sampleMedia.creativeTeamBts.altKey)}
                  width={sampleMedia.creativeTeamBts.width}
                  height={sampleMedia.creativeTeamBts.height}
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="space-y-5">
                <p className="label-sm text-primary">{tAbout('capabilities.title')}</p>
                <p className="headline-lg text-white">{tAbout('capabilities.body')}</p>
                <div className="space-y-4">
                  {[
                    { icon: Palette, text: capabilityItems[0] },
                    { icon: Clapperboard, text: capabilityItems[1] },
                    { icon: RadioTower, text: capabilityItems[2] },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-base leading-7 text-on-surface-variant">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="tripod-page-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{tAbout('culture.eyebrow')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg max-w-3xl text-[var(--tripod-text-dark)]">
                {tAbout('culture.title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="body-md max-w-2xl text-[var(--tripod-text-muted-dark)]">
                {tAbout('culture.body')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {cultureMedia.map((media, index) => (
              <ScrollReveal key={media.key} delay={0.08 * index}>
                <div
                  className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 ${index === 0 ? 'md:row-span-2 min-h-[28rem]' : 'min-h-[13.5rem]'}`}
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
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {cultureLabels[index]}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="tripod-page-dark border-y border-white/6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{tAbout('process.eyebrow')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg text-white">{tAbout('process.title')}</h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={0.08 * index}>
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">0{index + 1}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="film-cta-section py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-16">
          <ScrollReveal>
            <h2 className="headline-lg text-[var(--tripod-warm-white)]">{tAbout('cta.title')}</h2>
            <p className="body-md mx-auto mt-4 max-w-2xl text-[rgba(245,241,233,0.82)]">
              {tAbout('cta.body')}
            </p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full"
            >
              <Button variant="primary" className="gap-2 px-7 py-3.5">
                {tAbout('cta.button')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
