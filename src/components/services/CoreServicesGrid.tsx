'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

interface CoreServicesGridProps {
  serviceUrls: Record<string, string>;
}

const productionZones = [
  {
    key: 'designBrand',
    media: sampleMedia.brandingMockups,
    services: [
      {
        key: 'graphicDesign',
        number: '01',
        title: { en: 'Graphic Design', sw: 'Graphic Design' },
        description: {
          en: 'Bold layouts, campaign graphics, and brand surfaces ready for rollout.',
          sw: 'Layouts kali, campaign graphics, na brand surfaces tayari kwa rollout.',
        },
      },
      {
        key: 'branding',
        number: '02',
        title: { en: 'Branding', sw: 'Branding' },
        description: {
          en: 'Identity direction built to make the brand feel clear and memorable.',
          sw: 'Identity direction inayofanya brand iwe wazi na ikumbukwe.',
        },
      },
      {
        key: 'printing',
        number: '03',
        title: { en: 'Printing', sw: 'Printing' },
        description: {
          en: 'Posters, packaging, and physical campaign pieces prepared for production.',
          sw: 'Posters, packaging, na vipande vya campaign vinavyoandaliwa kwa production.',
        },
      },
    ],
    copy: {
      en: {
        eyebrow: 'Zone 01',
        title: 'DESIGN & BRAND',
        body: 'The front wall of the studio: identity, visual language, and print-ready execution.',
      },
      sw: {
        eyebrow: 'Zone 01',
        title: 'DESIGN & BRAND',
        body: 'Ukuta wa mbele wa studio: identity, visual language, na execution tayari kwa print.',
      },
    },
  },
  {
    key: 'visualProduction',
    media: sampleMedia.cameraOperator,
    services: [
      {
        key: 'photography',
        number: '04',
        title: { en: 'Photography', sw: 'Photography' },
        description: {
          en: 'Portrait, product, and event stills captured for campaigns and archives.',
          sw: 'Portrait, product, na event stills zinazorekodiwa kwa campaigns na archives.',
        },
      },
      {
        key: 'videography',
        number: '05',
        title: { en: 'Videography', sw: 'Videography' },
        description: {
          en: 'Cinematic coverage, edits, and branded motion built for screens.',
          sw: 'Cinematic coverage, edits, na branded motion zinazojengwa kwa screens.',
        },
      },
      {
        key: 'droneCoverage',
        number: '06',
        title: { en: 'Drone Coverage', sw: 'Drone Coverage' },
        description: {
          en: 'Aerial coverage that expands the story and scale of the shoot.',
          sw: 'Aerial coverage inayopanua story na scale ya shoot.',
        },
      },
      {
        key: 'liveStreaming',
        number: '07',
        title: { en: 'Live Streaming', sw: 'Live Streaming' },
        description: {
          en: 'Multi-camera signal support for launches, events, and live moments.',
          sw: 'Multi-camera signal support kwa launches, events, na live moments.',
        },
      },
    ],
    copy: {
      en: {
        eyebrow: 'Zone 02',
        title: 'VISUAL PRODUCTION',
        body: 'Film, stills, aerial coverage, and live delivery arranged as one capture system.',
      },
      sw: {
        eyebrow: 'Zone 02',
        title: 'VISUAL PRODUCTION',
        body: 'Film, stills, aerial coverage, na live delivery vimepangwa kama mfumo mmoja wa capture.',
      },
    },
  },
  {
    key: 'soundStudio',
    media: sampleMedia.studioMicrophone,
    services: [
      {
        key: 'audioRecording',
        number: '08',
        title: { en: 'Audio Recording', sw: 'Audio Recording' },
        description: {
          en: 'Clean recording sessions for voice, music, and creative direction.',
          sw: 'Recording sessions safi kwa voice, music, na creative direction.',
        },
      },
      {
        key: 'musicProduction',
        number: '09',
        title: { en: 'Music Production', sw: 'Music Production' },
        description: {
          en: 'Beats, arrangement, and studio shaping built around the final sound.',
          sw: 'Beats, arrangement, na studio shaping vinavyojengwa kuzunguka final sound.',
        },
      },
      {
        key: 'podcastRecording',
        number: '10',
        title: { en: 'Podcast Recording', sw: 'Podcast Recording' },
        description: {
          en: 'Voice-led sessions with a studio setup that keeps the conversation sharp.',
          sw: 'Voice-led sessions zenye studio setup inayoweka mazungumzo yakiwa safi.',
        },
      },
      {
        key: 'instrumentTraining',
        number: '12',
        title: { en: 'Instrument Training', sw: 'Instrument Training' },
        description: {
          en: 'Practical training that connects rehearsal, confidence, and studio discipline.',
          sw: 'Mafunzo ya vitendo yanayounganisha rehearsal, confidence, na nidhamu ya studio.',
        },
      },
    ],
    copy: {
      en: {
        eyebrow: 'Zone 03',
        title: 'SOUND & STUDIO',
        body: 'Recording, production, podcast sessions, and training held on one studio desk.',
      },
      sw: {
        eyebrow: 'Zone 03',
        title: 'SOUND & STUDIO',
        body: 'Recording, production, podcast sessions, na mafunzo yanakaa juu ya desk moja ya studio.',
      },
    },
  },
  {
    key: 'digitalGrowth',
    media: sampleMedia.socialCampaignVisuals,
    services: [
      {
        key: 'digitalMarketing',
        number: '11',
        title: { en: 'Digital Marketing', sw: 'Digital Marketing' },
        description: {
          en: 'Content systems and rollout strategy built to carry the campaign further.',
          sw: 'Content systems na rollout strategy vinavyoisogeza campaign mbele zaidi.',
        },
      },
    ],
    copy: {
      en: {
        eyebrow: 'Zone 04',
        title: 'DIGITAL GROWTH',
        body: 'Digital support stays connected to the campaign, not detached from the studio.',
      },
      sw: {
        eyebrow: 'Zone 04',
        title: 'DIGITAL GROWTH',
        body: 'Digital support inabaki imeunganishwa na campaign, si kitu kilichotengwa na studio.',
      },
    },
  },
] as const;

export function CoreServicesGrid({ serviceUrls }: CoreServicesGridProps) {
  const locale = useLocale();
  const isSw = locale === 'sw';

  return (
    <section
      id="services-zones"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#050505_0%,#050505_70%,#000000_100%)] py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(245,241,233,0.05)_0_1px,transparent_1px_11rem)] opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(245,241,233,0.16),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {isSw ? 'Service Film Strip' : 'Service Film Strip'}
              </p>
              <h2 className="film-editorial-heading max-w-xl text-[var(--tripod-warm-white)]">
                {isSw
                  ? 'Huduma 12 zimepangwa kama production wall moja.'
                  : 'Twelve services arranged like one production wall.'}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.72)] sm:text-base">
              {isSw
                ? 'Kila zone ina media frame, service numbers, na njia ya moja kwa moja ya kuanza brief bila kurudi kwenye cards ndogo nyingi.'
                : 'Each zone uses one strong media frame, numbered services, and a direct route into the brief without collapsing into tiny cards.'}
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          {productionZones.map((zone, index) => {
            const zoneCopy = isSw ? zone.copy.sw : zone.copy.en;

            return (
              <ScrollReveal key={zone.key} delay={0.05 * index}>
                <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,9,9,0.98),rgba(17,17,17,0.96))] shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
                  <div className="grid gap-0 lg:grid-cols-[minmax(19rem,0.92fr)_minmax(0,1.08fr)]">
                    <div className={`relative min-h-[21rem] overflow-hidden border-b border-white/10 lg:min-h-[30rem] lg:border-b-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={zone.media.src}
                        alt={zone.media.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.08),rgba(0,0,0,0.8))]" />
                      <div className="absolute inset-[1rem] border border-white/14" aria-hidden="true" />
                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                        <span>{zoneCopy.eyebrow}</span>
                        <span>{zone.services.length} SERVICES</span>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 space-y-3">
                        <h3 className="text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[var(--tripod-warm-white)] sm:text-[2.6rem]">
                          {zoneCopy.title}
                        </h3>
                        <p className="max-w-md text-sm leading-7 text-[rgba(245,241,233,0.78)]">
                          {zoneCopy.body}
                        </p>
                      </div>
                    </div>

                    <div className={`p-5 sm:p-7 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="grid gap-4">
                        {zone.services.map((service) => (
                          <a
                            key={service.key}
                            href={serviceUrls[service.key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring group block rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors hover:border-[rgba(255,61,0,0.34)] hover:bg-white/[0.05] sm:px-5"
                          >
                            <div className="grid gap-4 sm:grid-cols-[4.6rem_minmax(0,1fr)_auto] sm:items-center">
                              <div className="font-mono text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                                {service.number}
                              </div>
                              <div className="space-y-2">
                                <h4 className="text-[1.15rem] font-black uppercase leading-tight tracking-[-0.02em] text-[var(--tripod-warm-white)] sm:text-[1.28rem]">
                                  {isSw ? service.title.sw : service.title.en}
                                </h4>
                                <p className="text-sm leading-6 text-[rgba(245,241,233,0.7)]">
                                  {isSw ? service.description.sw : service.description.en}
                                </p>
                              </div>
                              <div className="inline-flex items-center gap-2 font-mono text-[0.64rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-orange)]">
                                {isSw ? 'Open Brief' : 'Open Brief'}
                                <ArrowRight
                                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
