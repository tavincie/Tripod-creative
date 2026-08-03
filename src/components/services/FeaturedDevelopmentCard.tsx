'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
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
  const locale = useLocale();
  const copy =
    locale === 'sw'
      ? {
          eyebrow: 'Integrated Campaign Build',
          title: 'ONE BRIEF. MULTIPLE DISCIPLINES.',
          description:
            'Campaign moja inaweza kuhitaji design, stills, video, live coverage, audio assets, na rollout materials. Hapa Tripod huifanya production desk nzima ifanye kazi kama system moja.',
          outputs: ['Brand key visuals', 'Photo and video assets', 'Print rollout', 'Audio and digital content'],
          cta: 'Build a campaign brief',
        }
      : {
          eyebrow: 'Integrated Campaign Build',
          title: 'ONE BRIEF. MULTIPLE DISCIPLINES.',
          description:
            'One campaign can need design, stills, video, live coverage, audio assets, and rollout materials. This is where Tripod works as one connected production desk instead of separate vendors.',
          outputs: ['Brand key visuals', 'Photo and video assets', 'Print rollout', 'Audio and digital content'],
          cta: 'Build a campaign brief',
        };

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
                  alt={sampleMedia.socialCampaignVisuals.alt}
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
                      alt={media.alt}
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
              <p className="label-sm text-[var(--tripod-orange)]">{copy.eyebrow}</p>
              <h2 className="headline-lg max-w-xl text-[var(--tripod-warm-white)]">{copy.title}</h2>
              <p className="body-md max-w-xl text-[var(--tripod-text-muted-light)]">{copy.description}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                {copy.outputs.map((item) => (
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
                  {copy.cta}
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
