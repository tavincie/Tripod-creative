'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

const serviceBands = [
  {
    key: 'video',
    media: sampleMedia.videoProductionSetup,
    title: { en: 'Video Production', sw: 'Video Production' },
    description: {
      en: 'Commercial shoots, events, interviews, drone angles, and edit-ready footage.',
      sw: 'Commercial shoots, events, interviews, drone angles, na footage tayari kwa edit.',
    },
  },
  {
    key: 'photo',
    media: sampleMedia.photographerShooting,
    title: { en: 'Photography', sw: 'Photography' },
    description: {
      en: 'Brand stills, portraits, products, and event moments shaped for campaigns.',
      sw: 'Brand stills, portraits, products, na event moments kwa campaigns.',
    },
  },
  {
    key: 'design',
    media: sampleMedia.brandingMockups,
    title: { en: 'Branding & Design', sw: 'Branding & Design' },
    description: {
      en: 'Identity systems, posters, packaging, and visual campaign direction.',
      sw: 'Identity systems, posters, packaging, na visual campaign direction.',
    },
  },
  {
    key: 'print',
    media: sampleMedia.printProduction,
    title: { en: 'Printing', sw: 'Printing' },
    description: {
      en: 'Flyers, banners, signage, and production-ready branded materials.',
      sw: 'Flyers, banners, signage, na branded materials tayari kwa production.',
    },
  },
  {
    key: 'digital',
    media: sampleMedia.socialCampaignVisuals,
    title: { en: 'Digital Campaigns', sw: 'Digital Campaigns' },
    description: {
      en: 'Launch visuals, content systems, and social rollout built for attention.',
      sw: 'Launch visuals, content systems, na social rollout built for attention.',
    },
  },
  {
    key: 'music',
    media: sampleMedia.musicProducerWorkstation,
    title: { en: 'Music Studio', sw: 'Music Studio' },
    description: {
      en: 'Recording, production sessions, vocal capture, mixing, and mastering.',
      sw: 'Recording, production sessions, vocal capture, mixing, na mastering.',
    },
  },
  {
    key: 'training',
    media: sampleMedia.instrumentTraining,
    title: { en: 'Instrument Training', sw: 'Instrument Training' },
    description: {
      en: 'Piano, guitar, drums, and vocals with practical studio-minded coaching.',
      sw: 'Piano, guitar, drums, na vocals kwa practical studio-minded coaching.',
    },
  },
  {
    key: 'streaming',
    media: sampleMedia.liveStreamingSetup,
    title: { en: 'Live Streaming', sw: 'Live Streaming' },
    description: {
      en: 'Broadcast-ready coverage for launches, events, shows, and conversations.',
      sw: 'Broadcast-ready coverage kwa launches, events, shows, na conversations.',
    },
  },
] as const;

export function CoreServicesGrid() {
  const locale = useLocale();
  const isSw = locale === 'sw';

  return (
    <section className="film-services-page-grid">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-16 lg:py-20">
        <div className="mb-9 grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="film-kicker">
              <span className="film-rec-dot" aria-hidden="true" />
              {isSw ? 'Service Contact Sheet' : 'Service Contact Sheet'}
            </p>
            <h2 className="headline-lg mt-4 text-white">
              {isSw ? 'Kila discipline iko kwenye frame.' : 'Every discipline has a frame.'}
            </h2>
          </div>
          <p className="body-md max-w-2xl text-on-surface-variant lg:col-span-5">
            {isSw
              ? 'Chagua direction, tuma brief, na Tripod itaunganisha design, production, audio, print, au digital rollout kwenye flow moja.'
              : 'Choose the direction, send the brief, and Tripod connects design, production, audio, print, or digital rollout into one flow.'}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {serviceBands.map((band, index) => (
            <ScrollReveal key={band.key} delay={0.04 * index}>
              <Link href="/contact" className="film-service-tile focus-ring">
                <div className="film-service-tile__media">
                  <Image
                    src={band.media.src}
                    alt={band.media.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="film-service-tile__body">
                  <span>0{index + 1}</span>
                  <h3>{isSw ? band.title.sw : band.title.en}</h3>
                  <p>{isSw ? band.description.sw : band.description.en}</p>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
