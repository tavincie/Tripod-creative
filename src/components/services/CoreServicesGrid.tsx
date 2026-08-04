'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

interface CoreServicesGridProps {
  serviceUrls: Record<string, string>;
}

type ZoneId = 'designBrand' | 'visualProduction' | 'soundStudio' | 'digitalGrowth';
type ServiceId =
  | 'graphicDesign'
  | 'branding'
  | 'printing'
  | 'photography'
  | 'videography'
  | 'droneCoverage'
  | 'liveStreaming'
  | 'audioRecording'
  | 'musicProduction'
  | 'podcastRecording'
  | 'digitalMarketing'
  | 'instrumentTraining';

const productionZones: Array<{
  key: ZoneId;
  mediaKey: keyof typeof sampleMedia;
}> = [
  { key: 'designBrand', mediaKey: 'brandingMockups' },
  { key: 'visualProduction', mediaKey: 'cameraOperator' },
  { key: 'soundStudio', mediaKey: 'studioMicrophone' },
  { key: 'digitalGrowth', mediaKey: 'socialCampaignVisuals' },
];

export function CoreServicesGrid({ serviceUrls }: CoreServicesGridProps) {
  const tServices = useTranslations('ServicesPage');
  const tCommon = useTranslations('Common');

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
                {tServices('intro.eyebrow')}
              </p>
              <h2 className="film-editorial-heading max-w-xl text-[var(--tripod-warm-white)]">
                {tServices('intro.title')}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(245,241,233,0.72)] sm:text-base">
              {tServices('intro.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          {productionZones.map((zone, index) => {
            const zoneServices = tServices.raw(`zones.${zone.key}.items`) as ServiceId[];
            const media = sampleMedia[zone.mediaKey];

            return (
              <ScrollReveal key={zone.key} delay={0.05 * index}>
                <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,9,9,0.98),rgba(17,17,17,0.96))] shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
                  <div className="grid gap-0 lg:grid-cols-[minmax(19rem,0.92fr)_minmax(0,1.08fr)]">
                    <div className={`relative min-h-[18rem] overflow-hidden border-b border-white/10 sm:min-h-[21rem] lg:min-h-[30rem] lg:border-b-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={media.src}
                        alt={tCommon(`media.${media.key}`)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.08),rgba(0,0,0,0.8))]" />
                      <div className="absolute inset-[1rem] border border-white/14" aria-hidden="true" />
                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                        <span>{tServices(`zones.${zone.key}.eyebrow`)}</span>
                        <span>{tServices(`zones.${zone.key}.serviceCount`)}</span>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 space-y-3">
                        <h3 className="text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[var(--tripod-warm-white)] sm:text-[2.6rem]">
                          {tServices(`zones.${zone.key}.title`)}
                        </h3>
                        <p className="max-w-md text-sm leading-7 text-[rgba(245,241,233,0.78)]">
                          {tServices(`zones.${zone.key}.body`)}
                        </p>
                      </div>
                    </div>

                    <div className={`p-5 sm:p-7 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="grid gap-4">
                        {zoneServices.map((serviceId) => (
                          <a
                            key={serviceId}
                            href={serviceUrls[serviceId]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring group block rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors hover:border-[rgba(255,61,0,0.34)] hover:bg-white/[0.05] sm:px-5"
                          >
                            <div className="grid gap-4 md:grid-cols-[4.6rem_minmax(0,1fr)_auto] md:items-center">
                              <div className="font-mono text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                                {tServices(`items.${serviceId}.number`)}
                              </div>
                              <div className="space-y-2">
                                <h4 className="text-[1.15rem] font-black uppercase leading-tight tracking-[-0.02em] text-[var(--tripod-warm-white)] sm:text-[1.28rem]">
                                  {tServices(`items.${serviceId}.title`)}
                                </h4>
                                <p className="text-sm leading-6 text-[rgba(245,241,233,0.7)]">
                                  {tServices(`items.${serviceId}.description`)}
                                </p>
                              </div>
                              <div className="inline-flex items-center gap-2 font-mono text-[0.64rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-orange)]">
                                {tServices('serviceOpenBrief')}
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
