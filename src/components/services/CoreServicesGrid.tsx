'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { sampleMedia } from '@/data/sampleMedia';

const serviceBands = [
  {
    key: 'video',
    media: sampleMedia.videoProductionSetup,
    title: { en: 'Camera: Video Production', sw: 'Camera: Video Production' },
    description: {
      en: 'Commercial shoots, event coverage, interviews, drone angles, and edit-ready footage built for screens and stories.',
      sw: 'Commercial shoots, event coverage, interviews, drone angles, na footage tayari kwa edit iliyojengwa kwa screens na stories.',
    },
  },
  {
    key: 'photo',
    media: sampleMedia.photographerShooting,
    title: { en: 'Lens: Photography', sw: 'Lens: Photography' },
    description: {
      en: 'Brand stills, portraits, products, and event captures shaped to look sharp in campaigns and archives.',
      sw: 'Brand stills, portraits, products, na event captures zinazoundwa kuonekana sharp kwenye campaigns na archives.',
    },
  },
  {
    key: 'design',
    media: sampleMedia.brandingMockups,
    title: { en: 'Artboard: Branding & Design', sw: 'Artboard: Branding & Design' },
    description: {
      en: 'Identity systems, posters, packaging, and visual campaigns designed to stay memorable across formats.',
      sw: 'Identity systems, posters, packaging, na visual campaigns zinazoundwa kubaki memorable kwenye formats tofauti.',
    },
  },
  {
    key: 'print',
    media: sampleMedia.printProduction,
    title: { en: 'Print Sheet: Printing', sw: 'Print Sheet: Printing' },
    description: {
      en: 'Flyers, banners, signage, and branded materials prepared with production quality and visual confidence.',
      sw: 'Flyers, banners, signage, na branded materials zilizoandaliwa kwa production quality na visual confidence.',
    },
  },
  {
    key: 'digital',
    media: sampleMedia.socialCampaignVisuals,
    title: { en: 'Timeline: Digital Campaigns', sw: 'Timeline: Digital Campaigns' },
    description: {
      en: 'Launch visuals, content systems, landing support, and campaign rollout built for attention and motion.',
      sw: 'Launch visuals, content systems, landing support, na campaign rollout iliyojengwa kwa attention na motion.',
    },
  },
  {
    key: 'music',
    media: sampleMedia.musicProducerWorkstation,
    title: { en: 'Microphone: Music Studio', sw: 'Microphone: Music Studio' },
    description: {
      en: 'Recording, production sessions, vocal capture, and artist-facing content with a real studio feel.',
      sw: 'Recording, production sessions, vocal capture, na artist-facing content yenye studio feel ya kweli.',
    },
  },
  {
    key: 'web',
    media: sampleMedia.editingTimeline,
    title: { en: 'Interface: Web & App Development', sw: 'Interface: Web & App Development' },
    description: {
      en: 'Websites, landing pages, and digital experiences that carry the same visual force as the rest of the studio output.',
      sw: 'Websites, landing pages, na digital experiences zinazobeba nguvu ile ile ya visual kama studio output nyingine.',
    },
  },
] as const;

export function CoreServicesGrid() {
  const locale = useLocale();
  const isSw = locale === 'sw';

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-5 px-5 md:px-16">
        {serviceBands.map((band, index) => (
          <ScrollReveal key={band.key} delay={0.06 * index}>
            <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`relative min-h-[19rem] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={band.media.src}
                  alt={band.media.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,126,0,0.06),rgba(0,0,0,0.7))]" />
              </div>
              <div className="flex items-center p-6 sm:p-8 lg:p-10">
                <div className="max-w-xl space-y-4">
                  <p className="label-sm text-primary">{isSw ? 'Studio Band' : 'Studio Band'}</p>
                  <h2 className="headline-lg text-white">
                    {isSw ? band.title.sw : band.title.en}
                  </h2>
                  <p className="body-md text-on-surface-variant">
                    {isSw ? band.description.sw : band.description.en}
                  </p>
                  <Button variant="outline" className="px-5 py-3 text-sm">
                    {isSw ? 'Send to Studio' : 'Send to Studio'}
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
