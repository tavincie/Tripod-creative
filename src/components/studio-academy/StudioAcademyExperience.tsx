'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  AudioWaveform,
  Drum,
  Guitar,
  MessageCircle,
  Mic2,
  Music2,
  Piano,
  PlayCircle,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

interface StudioAcademyExperienceProps {
  serviceUrls: Record<string, string>;
}

const trainingIcons = {
  piano: Piano,
  guitar: Guitar,
  drums: Drum,
  vocals: Mic2,
} as const;

const pathwayIcons = {
  learn: Sparkles,
  practice: Music2,
  record: AudioWaveform,
  perform: PlayCircle,
} as const;

export function StudioAcademyExperience({
  serviceUrls,
}: StudioAcademyExperienceProps) {
  const t = useTranslations('StudioAcademyPage');

  return (
    <main className="relative flex-grow overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/6 pb-14 pt-28 sm:pb-18 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,126,0,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(253,208,0,0.12),transparent_28%)]" />
        <div className="absolute left-0 right-0 top-24 h-24 bg-[linear-gradient(90deg,transparent,rgba(255,182,136,0.14),transparent)] opacity-70 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
            <div className="space-y-5">
              <ScrollReveal>
                <span className="label-sm inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-primary">
                  <AudioWaveform className="h-4 w-4" aria-hidden="true" />
                  {t('hero.eyebrow')}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="display-lg max-w-4xl text-white">
                  {t('hero.title')}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="body-lg max-w-2xl text-on-surface-variant">
                  {t('hero.subtitle')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.24}>
                <div className="flex flex-wrap gap-3">
                  {['recordingSupport', 'musicProduction', 'instrumentTraining'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-on-surface-variant"
                      >
                        {t(`hero.tags.${item}`)}
                      </span>
                    ),
                  )}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.28}>
              <GlassCard className="rounded-[30px] p-6 sm:p-7">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <p className="label-sm text-primary">{t('hero.panelLabel')}</p>
                    <Volume2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>

                  <div className="flex items-end gap-2 rounded-[24px] border border-white/8 bg-black/25 p-4">
                    {Array.from({ length: 18 }).map((_, index) => (
                      <span
                        key={index}
                        className="waveform-bar w-2 rounded-full bg-gradient-to-t from-primary-container via-primary to-secondary-container"
                        style={{
                          height: `${20 + ((index * 13) % 55)}px`,
                          animationDelay: `${(index % 5) * 0.12}s`,
                        }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {['recording', 'production', 'training', 'coaching'].map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-white/8 bg-white/5 p-4"
                      >
                        <p className="text-sm font-semibold text-white">
                          {t(`hero.panelItems.${item}.title`)}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                          {t(`hero.panelItems.${item}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-5 lg:grid-cols-2">
            <ScrollReveal>
              <GlassCard className="h-full rounded-[30px] p-6 sm:p-8">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Mic2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="label-sm text-primary">
                        {t('recording.eyebrow')}
                      </p>
                      <h2 className="headline-md text-white">
                        {t('recording.title')}
                      </h2>
                    </div>
                  </div>
                  <p className="body-md text-on-surface-variant">
                    {t('recording.subtitle')}
                  </p>
                  <div className="space-y-3">
                    {[0, 1, 2].map((index) => (
                      <div
                        key={index}
                        className="rounded-[22px] border border-white/8 bg-black/20 p-4"
                      >
                        <p className="text-sm font-semibold text-white">
                          {t(`recording.items.${index}.title`)}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                          {t(`recording.items.${index}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={serviceUrls.recordingSession}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full"
                  >
                    <Button variant="primary" className="gap-2 px-6 py-3.5">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {t('recording.cta')}
                    </Button>
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <GlassCard className="h-full rounded-[30px] p-6 sm:p-8">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Music2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="label-sm text-primary">
                        {t('production.eyebrow')}
                      </p>
                      <h2 className="headline-md text-white">
                        {t('production.title')}
                      </h2>
                    </div>
                  </div>
                  <p className="body-md text-on-surface-variant">
                    {t('production.subtitle')}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[0, 1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="rounded-[22px] border border-white/8 bg-white/5 p-4"
                      >
                        <p className="text-sm font-semibold text-white">
                          {t(`production.items.${index}.title`)}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                          {t(`production.items.${index}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={serviceUrls.musicProduction}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full"
                  >
                    <Button variant="primary" className="gap-2 px-6 py-3.5">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {t('production.cta')}
                    </Button>
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-surface-container-lowest/80 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{t('training.eyebrow')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg text-white">{t('training.title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="body-md max-w-2xl text-on-surface-variant">
                {t('training.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {(['piano', 'guitar', 'drums', 'vocals'] as const).map((item, index) => {
              const Icon = trainingIcons[item];
              return (
                <ScrollReveal key={item} delay={0.06 * index}>
                  <GlassCard className="h-full rounded-[28px] p-5 sm:p-6">
                    <div className="flex h-full flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-on-surface-variant">
                          {t(`training.items.${item}.level`)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {t(`training.items.${item}.title`)}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                          {t(`training.items.${item}.description`)}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {[0, 1].map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-start gap-3 text-sm text-on-surface-variant"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary-container"
                              aria-hidden="true"
                            />
                            <span>{t(`training.items.${item}.bullets.${bullet}`)}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={serviceUrls[`${item}Training`]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex rounded-full"
                      >
                        <Button variant="secondary" className="w-full justify-center">
                          {t(`training.items.${item}.cta`)}
                        </Button>
                      </a>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)]">
            <ScrollReveal>
              <GlassCard className="rounded-[30px] p-6 sm:p-8">
                <span className="label-sm text-primary">{t('benefits.eyebrow')}</span>
                <h2 className="headline-lg mt-4 text-white">{t('benefits.title')}</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="rounded-[22px] border border-white/8 bg-black/20 p-4"
                    >
                      <p className="text-sm font-semibold text-white">
                        {t(`benefits.items.${index}.title`)}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                        {t(`benefits.items.${index}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <GlassCard className="rounded-[30px] p-6 sm:p-8">
                <span className="label-sm text-primary">{t('pathway.eyebrow')}</span>
                <h2 className="headline-lg mt-4 text-white">{t('pathway.title')}</h2>
                <div className="mt-6 space-y-4">
                  {(['learn', 'practice', 'record', 'perform'] as const).map(
                    (step, index) => {
                      const Icon = pathwayIcons[step];
                      return (
                        <div
                          key={step}
                          className="flex items-start gap-4 rounded-[22px] border border-white/8 bg-white/5 p-4"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-primary">
                              0{index + 1}
                            </p>
                            <h3 className="mt-1 text-lg font-semibold text-white">
                              {t(`pathway.steps.${step}.title`)}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                              {t(`pathway.steps.${step}.description`)}
                            </p>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/6 py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,126,0,0.15),transparent_35%),radial-gradient(circle_at_top_right,rgba(253,208,0,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <ScrollReveal>
            <GlassCard className="rounded-[30px] p-6 text-center sm:p-8 lg:p-10">
              <span className="label-sm text-primary">{t('cta.eyebrow')}</span>
              <h2 className="headline-lg mx-auto mt-4 max-w-3xl text-white">
                {t('cta.title')}
              </h2>
              <p className="body-md mx-auto mt-4 max-w-2xl text-on-surface-variant">
                {t('cta.subtitle')}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {(
                  [
                    'recordingSession',
                    'musicProduction',
                    'pianoTraining',
                    'guitarTraining',
                    'drumTraining',
                    'vocalTraining',
                    'generalInquiry',
                  ] as const
                ).map((item) => (
                  <a
                    key={item}
                    href={serviceUrls[item]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-[22px]"
                  >
                    <GlassCard className="h-full w-full rounded-[22px] p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-left">
                          <p className="text-sm font-semibold text-white">
                            {t(`cta.buttons.${item}`)}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                            {t('cta.buttonHint')}
                          </p>
                        </div>
                        <MessageCircle
                          className="h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                    </GlassCard>
                  </a>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
