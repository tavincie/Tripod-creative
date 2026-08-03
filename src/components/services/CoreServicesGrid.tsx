'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

const serviceRows = [
  {
    key: 'branding',
    number: '01',
    media: sampleMedia.brandingMockups,
    title: {
      en: 'Graphic Design and Branding',
      sw: 'Graphic Design na Branding',
    },
    statement: {
      en: 'Identity systems and campaign visuals built to make the brand recognizable fast.',
      sw: 'Identity systems na campaign visuals zinazofanya brand itambulike kwa haraka.',
    },
    deliverables: {
      en: ['Brand identity', 'Social campaigns', 'Packaging and print layout'],
      sw: ['Brand identity', 'Social campaigns', 'Packaging na print layout'],
    },
  },
  {
    key: 'photo',
    number: '02',
    media: sampleMedia.photographerShooting,
    title: {
      en: 'Photography',
      sw: 'Photography',
    },
    statement: {
      en: 'Commercial, portrait, product, and event stills designed for campaigns and archives.',
      sw: 'Commercial, portrait, product, na event stills kwa campaigns na archives.',
    },
    deliverables: {
      en: ['Brand portraits', 'Product shoots', 'Event stills'],
      sw: ['Brand portraits', 'Product shoots', 'Event stills'],
    },
  },
  {
    key: 'video',
    number: '03',
    media: sampleMedia.videoProductionSetup,
    title: {
      en: 'Video Production',
      sw: 'Video Production',
    },
    statement: {
      en: 'Film-led production for launches, promos, interviews, and branded storytelling.',
      sw: 'Film-led production kwa launches, promos, interviews, na branded storytelling.',
    },
    deliverables: {
      en: ['Concept and scripting', 'Production crew', 'Edit-ready delivery'],
      sw: ['Concept na scripting', 'Production crew', 'Edit-ready delivery'],
    },
  },
  {
    key: 'audio',
    number: '04',
    media: sampleMedia.musicProducerWorkstation,
    title: {
      en: 'Audio Studio and Music Production',
      sw: 'Audio Studio na Music Production',
    },
    statement: {
      en: 'Recording, production, podcasting, mixing, and mastering from one studio desk.',
      sw: 'Recording, production, podcasting, mixing, na mastering kutoka studio moja.',
    },
    deliverables: {
      en: ['Recording sessions', 'Podcast production', 'Mix and master'],
      sw: ['Recording sessions', 'Podcast production', 'Mix na master'],
    },
  },
  {
    key: 'print',
    number: '05',
    media: sampleMedia.printProduction,
    title: {
      en: 'Printing',
      sw: 'Printing',
    },
    statement: {
      en: 'Production-ready branded materials for streets, shelves, events, and retail displays.',
      sw: 'Branded materials tayari kwa streets, shelves, events, na retail displays.',
    },
    deliverables: {
      en: ['Flyers and posters', 'Banners and signage', 'Packaging support'],
      sw: ['Flyers na posters', 'Banners na signage', 'Packaging support'],
    },
  },
  {
    key: 'digital',
    number: '06',
    media: sampleMedia.socialCampaignVisuals,
    title: {
      en: 'Digital Marketing',
      sw: 'Digital Marketing',
    },
    statement: {
      en: 'Content systems, launch assets, and campaign rollout built for digital attention.',
      sw: 'Content systems, launch assets, na campaign rollout built for digital attention.',
    },
    deliverables: {
      en: ['Social content', 'Campaign rollout', 'Performance visuals'],
      sw: ['Social content', 'Campaign rollout', 'Performance visuals'],
    },
  },
  {
    key: 'events',
    number: '07',
    media: sampleMedia.liveStreamingSetup,
    title: {
      en: 'Live Streaming and Event Coverage',
      sw: 'Live Streaming na Event Coverage',
    },
    statement: {
      en: 'Multi-camera coverage and live broadcast support for launches, services, and stage moments.',
      sw: 'Multi-camera coverage na live broadcast support kwa launches, services, na stage moments.',
    },
    deliverables: {
      en: ['Live stream setup', 'Event highlights', 'Drone and coverage crew'],
      sw: ['Live stream setup', 'Event highlights', 'Drone na coverage crew'],
    },
  },
  {
    key: 'training',
    number: '08',
    media: sampleMedia.instrumentTraining,
    title: {
      en: 'Studio and Instrument Training',
      sw: 'Studio na Instrument Training',
    },
    statement: {
      en: 'Practical music coaching that connects learning, rehearsal, recording, and performance.',
      sw: 'Practical music coaching inayounganisha learning, rehearsal, recording, na performance.',
    },
    deliverables: {
      en: ['Piano, guitar, drums', 'Vocals and rehearsal', 'Studio-minded instruction'],
      sw: ['Piano, guitar, drums', 'Vocals na rehearsal', 'Studio-minded instruction'],
    },
  },
] as const;

export function CoreServicesGrid() {
  const locale = useLocale();
  const isSw = locale === 'sw';

  return (
    <section className="bg-[linear-gradient(120deg,#f3ece1_0%,#e8dfd0_52%,#ded2bf_100%)] text-[var(--tripod-text-dark)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="space-y-5 lg:sticky lg:top-32">
                <p className="label-sm text-[var(--tripod-orange)]">
                  {isSw ? 'Service Overview' : 'Service Overview'}
                </p>
                <h2 className="headline-lg max-w-sm text-[var(--tripod-text-dark)]">
                  {isSw ? 'Disciplines zilizopangwa kama production desk moja.' : 'Disciplines arranged like one production desk.'}
                </h2>
                <p className="body-md max-w-xs text-[var(--tripod-text-muted-dark)]">
                  {isSw
                    ? 'Badala ya cards zinazojirudia, hapa kuna service families zilizo na positioning, outputs, na njia ya kuanza.'
                    : 'Instead of repeated cards, this section groups the work into clear service families with outputs and next steps.'}
                </p>
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center gap-2 font-mono text-[0.72rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-orange)]"
                >
                  {isSw ? 'Start a brief' : 'Start a brief'}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-9">
            <div className="space-y-6">
              {serviceRows.map((row, index) => {
                const deliverables = isSw ? row.deliverables.sw : row.deliverables.en;

                return (
                  <ScrollReveal key={row.key} delay={0.04 * index}>
                    <article className="grid gap-5 border-t border-[rgba(23,21,18,0.14)] py-6 first:border-t-0 first:pt-0 md:grid-cols-[5.2rem_minmax(0,1fr)] lg:grid-cols-[5.2rem_minmax(0,1.1fr)_minmax(15rem,0.9fr)] lg:items-center">
                      <div className="font-mono text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                        {row.number}
                      </div>

                      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.9fr)] lg:items-start">
                        <div className="space-y-3">
                          <h3 className="text-[1.55rem] font-black uppercase leading-[0.95] tracking-[-0.02em] text-[var(--tripod-text-dark)]">
                            {isSw ? row.title.sw : row.title.en}
                          </h3>
                          <p className="text-[0.98rem] leading-7 text-[var(--tripod-text-muted-dark)]">
                            {isSw ? row.statement.sw : row.statement.en}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="font-mono text-[0.62rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-text-dark)]">
                            {isSw ? 'Deliverables' : 'Deliverables'}
                          </p>
                          <ul className="grid gap-2 text-sm leading-6 text-[var(--tripod-text-muted-dark)]">
                            {deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--tripod-orange)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                              href="/contact"
                              className="focus-ring inline-flex items-center gap-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-orange)]"
                            >
                              {isSw ? 'Enquire now' : 'Enquire now'}
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                            <Link
                              href="/portfolio"
                              className="focus-ring inline-flex items-center gap-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-text-dark)]"
                            >
                              {isSw ? 'See related work' : 'See related work'}
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className={`relative min-h-[13.5rem] overflow-hidden rounded-[1.6rem] border border-[rgba(23,21,18,0.12)] bg-black ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                        <Image
                          src={row.media.src}
                          alt={row.media.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 26vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.08),rgba(0,0,0,0.56))]" />
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
