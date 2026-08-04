'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { sampleMedia } from '@/data/sampleMedia';

interface FeaturedDevelopmentCardProps {
  whatsappUrl: string;
}

export function FeaturedDevelopmentCard({
  whatsappUrl,
}: FeaturedDevelopmentCardProps) {
  const tServices = useTranslations('ServicesPage');
  const tCommon = useTranslations('Common');

  const frames = [
    sampleMedia.videoProductionSetup,
    sampleMedia.eventPhotography,
    sampleMedia.studioMicrophone,
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#050505_0%,#050505_74%,#000000_100%)] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-center">
          <ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-[1.12fr_0.88fr]">
              <div className="relative min-h-[28rem] overflow-hidden rounded-[2.1rem] border border-white/10 bg-black">
                <Image
                  src={sampleMedia.socialCampaignVisuals.src}
                  alt={tCommon(sampleMedia.socialCampaignVisuals.altKey)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.1),rgba(0,0,0,0.7))]" />
              </div>

              <div className="grid gap-4">
                {frames.map((media, index) => (
                  <div
                    key={media.key}
                    className="relative min-h-[8.25rem] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black"
                  >
                    <Image
                      src={media.src}
                      alt={tCommon(media.altKey)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 18vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.66))]" />
                    <span className="absolute left-3 top-3 font-mono text-[0.54rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-6">
              <p className="label-sm text-[var(--tripod-orange)]">
                {tServices('featuredDevelopment.eyebrow')}
              </p>
              <h2 className="headline-lg max-w-xl text-[var(--tripod-warm-white)]">
                {tServices('featuredDevelopment.title')}
              </h2>
              <p className="body-md max-w-xl text-[var(--tripod-text-muted-light)]">
                {tServices('featuredDevelopment.description')}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {(tServices.raw('featuredDevelopment.outputs') as string[]).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-[var(--tripod-warm-white)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm"
              >
                <Button variant="primary" className="gap-2 px-7 py-3.5">
                  {tServices('featuredDevelopment.cta')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
