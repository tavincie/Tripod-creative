'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

const processMedia = [
  sampleMedia.brandingMockups,
  sampleMedia.videoProductionSetup,
  sampleMedia.socialCampaignVisuals,
];

export function ServicesProcess() {
  const locale = useLocale();
  const steps =
    locale === 'sw'
      ? [
          {
            title: 'Concept',
            description: 'Brief, references, na visual direction huwekwa mapema.',
          },
          {
            title: 'Production',
            description: 'Camera, design, print, na studio work hujengwa kwa pace moja.',
          },
          {
            title: 'Launch',
            description: 'Assets huandaliwa kwa posting, printing, rollout, au release.',
          },
        ]
      : [
          {
            title: 'Concept',
            description: 'The brief, references, and visual direction are locked early.',
          },
          {
            title: 'Production',
            description: 'Camera, design, print, and studio work move with one pace.',
          },
          {
            title: 'Launch',
            description: 'Assets are prepared for posting, printing, rollout, or release.',
          },
        ];

  return (
    <section className="border-y border-white/6 bg-surface-container-lowest/70 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-8 space-y-3">
          <ScrollReveal>
            <span className="label-sm text-primary">{locale === 'sw' ? 'Process' : 'Process'}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="headline-lg text-white">
              {locale === 'sw'
                ? 'Concept. Production. Launch.'
                : 'Concept. Production. Launch.'}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={0.08 * index}>
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={processMedia[index].src}
                    alt={processMedia[index].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">0{index + 1}</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
