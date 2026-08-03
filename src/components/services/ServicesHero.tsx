'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { MessageCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

interface ServicesHeroProps {
  whatsappUrl: string;
}

export function ServicesHero({ whatsappUrl }: ServicesHeroProps) {
  const locale = useLocale();
  const copy =
    locale === 'sw'
      ? {
          eyebrow: 'Creative Production Desk',
          title: 'Design, photo, video, audio, print, na digital production chini ya direction moja.',
          subtitle:
            'Chagua discipline moja au leta campaign nzima. Tripod huunganisha branding, coverage, studio work, printing, na rollout assets kwenye production system moja iliyo wazi.',
          primary: 'Anza kwa WhatsApp',
          secondary: 'Tazama Portfolio',
          labels: ['Design', 'Photo', 'Video / Audio'],
        }
      : {
          eyebrow: 'Creative Production Desk',
          title: 'Design, photo, video, audio, print, and digital production under one direction.',
          subtitle:
            'Choose one discipline or bring the full campaign brief. Tripod connects branding, coverage, studio work, printing, and rollout assets inside one clear production system.',
          primary: 'Start on WhatsApp',
          secondary: 'View Portfolio',
          labels: ['Design', 'Photo', 'Video / Audio'],
        };

  const media = [
    sampleMedia.cameraOperator,
    sampleMedia.brandingMockups,
    sampleMedia.studioMicrophone,
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,61,0,0.24),transparent_20%),radial-gradient(circle_at_82%_28%,rgba(255,106,43,0.12),transparent_22%),linear-gradient(180deg,rgba(5,5,5,0.98),rgba(8,8,8,0.92))]" />
      <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,61,0,0.28),rgba(255,61,0,0)_70%)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:px-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,1.2fr)] lg:items-center">
        <div className="space-y-6">
          <ScrollReveal>
            <span className="label-sm inline-flex items-center gap-2 text-[var(--tripod-orange)]">
              <span className="h-2 w-2 rounded-full bg-[var(--tripod-orange)] shadow-[0_0_14px_rgba(255,61,0,0.9)]" />
              {copy.eyebrow}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="display-lg max-w-4xl text-[var(--tripod-warm-white)]">
              {copy.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p className="body-lg max-w-2xl text-[var(--tripod-text-muted-light)]">
              {copy.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm"
              >
                <Button variant="primary" className="gap-2 px-7 py-3.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {copy.primary}
                </Button>
              </a>

              <Link
                href="/portfolio"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border border-white/12 px-4 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.12em] text-[var(--tripod-warm-white)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                {copy.secondary}
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="relative">
            <div className="absolute inset-[12%_8%_18%_18%] rounded-full bg-[radial-gradient(circle,rgba(255,61,0,0.3),rgba(255,61,0,0)_72%)] blur-3xl" />
            <div className="grid gap-4 md:grid-cols-[1.22fr_0.78fr]">
              <div className="relative min-h-[28rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-black">
                <Image
                  src={media[0].src}
                  alt={media[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.08),rgba(0,0,0,0.7))]" />
                <div className="absolute inset-[0.9rem] border border-white/15" />
                <span className="absolute left-5 top-5 border border-white/15 bg-black/30 px-3 py-1 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-warm-white)]">
                  {copy.labels[0]}
                </span>
              </div>

              <div className="grid gap-4">
                {[media[1], media[2]].map((item, index) => (
                  <div
                    key={item.key}
                    className="relative min-h-[13rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 24vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.06),rgba(0,0,0,0.68))]" />
                    <span className="absolute left-4 top-4 border border-white/15 bg-black/30 px-3 py-1 font-mono text-[0.56rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-warm-white)]">
                      {copy.labels[index + 1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
