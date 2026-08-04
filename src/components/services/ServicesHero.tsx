'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

interface ServicesHeroProps {
  whatsappUrl: string;
}

export function ServicesHero({ whatsappUrl }: ServicesHeroProps) {
  const tServices = useTranslations('ServicesPage');
  const tCommon = useTranslations('Common');
  const media = sampleMedia.videoProductionSetup;
  const lanes = tServices.raw('hero.lanes') as string[];

  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,61,0,0.24),transparent_18%),radial-gradient(circle_at_86%_28%,rgba(255,152,102,0.14),transparent_24%),linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(5,5,5,0.96)_45%,rgba(245,241,233,0.08)_72%,rgba(0,0,0,0.98)_100%)]" />
      <div
        className="absolute inset-y-0 left-[52%] hidden w-px bg-[linear-gradient(180deg,transparent,rgba(245,241,233,0.18),transparent)] lg:block"
        aria-hidden="true"
      />
      <div className="absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,61,0,0.28),rgba(255,61,0,0)_70%)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(24rem,1.12fr)] lg:items-center">
        <div className="space-y-6">
          <ScrollReveal>
            <span className="film-kicker">
              <span className="film-rec-dot" aria-hidden="true" />
              {tServices('hero.eyebrow')}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1
              className="film-hero-title max-w-[9.2ch] sm:max-w-5xl"
              style={{ fontSize: 'clamp(2.35rem, 12.2vw, 5.8rem)' }}
            >
              {tServices('hero.title')}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="max-w-2xl text-base leading-7 text-[rgba(245,241,233,0.82)] md:text-lg">
              {tServices('hero.subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm"
              >
                <Button variant="primary" className="gap-2 px-7 py-3.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {tServices('hero.primary')}
                </Button>
              </a>

              <Link
                href="#services-zones"
                className="focus-ring inline-flex max-w-full items-center gap-2 rounded-sm border border-white/12 px-4 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.12em] text-[var(--tripod-warm-white)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                {tServices('hero.secondary')}
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="relative">
            <div className="absolute inset-[8%_14%_14%_18%] rounded-full bg-[radial-gradient(circle,rgba(255,61,0,0.3),rgba(255,61,0,0)_72%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-black p-4 sm:p-5">
              <div className="absolute inset-x-6 top-5 flex items-center justify-between gap-4 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.72)]">
                <span className="inline-flex items-center gap-2">
                  <span className="film-rec-dot h-2 w-2" aria-hidden="true" />
                  {tServices('hero.frameLabel')}
                </span>
                <span>{tServices('hero.frameMeta')}</span>
              </div>

              <div className="relative min-h-[20rem] overflow-hidden rounded-[1.4rem] border border-white/12 bg-black sm:min-h-[24rem] lg:min-h-[29rem]">
                <Image
                  src={media.src}
                  alt={tCommon(`media.${media.key}`)}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.08),rgba(0,0,0,0.78))]" />
                <div
                  className="absolute inset-[0.9rem] border border-white/15"
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:grid-cols-3">
                  {lanes.map((label, index) => (
                    <div
                      key={label}
                      className="border border-white/12 bg-black/45 px-3 py-3 font-mono text-[0.62rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-warm-white)] backdrop-blur-sm"
                    >
                      <span className="mr-2 text-[var(--tripod-orange)]">{`0${index + 1}`}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
