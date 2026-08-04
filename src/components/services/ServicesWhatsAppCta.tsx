'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { sampleMedia } from '@/data/sampleMedia';

interface ServicesWhatsAppCtaProps {
  serviceUrls: Record<string, string>;
}

export function ServicesWhatsAppCta({
  serviceUrls,
}: ServicesWhatsAppCtaProps) {
  const tServices = useTranslations('ServicesPage');
  const tCommon = useTranslations('Common');

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f5f1e9_0%,#f1d2be_42%,#ff7c48_100%)] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.92fr)] lg:items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(23,21,18,0.12)] bg-black shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative min-h-[23rem]">
                <Image
                  src={sampleMedia.editingTimeline.src}
                  alt={tCommon(sampleMedia.editingTimeline.altKey)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.12),rgba(0,0,0,0.72))]" />
                <div className="absolute inset-[1rem] border border-white/12" aria-hidden="true" />
                <div className="absolute left-5 top-5 border border-white/12 bg-black/30 px-3 py-1 font-mono text-[0.58rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-warm-white)]">
                  {tServices('digitalSupport.label')}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-5">
              <p className="film-light-kicker">{tServices('digitalSupport.eyebrow')}</p>
              <h2 className="film-editorial-heading max-w-xl text-[var(--tripod-text-dark)]">
                {tServices('digitalSupport.title')}
              </h2>
              <p className="max-w-lg text-sm leading-7 text-[rgba(23,21,18,0.72)] sm:text-base">
                {tServices('digitalSupport.body')}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {(tServices.raw('digitalSupport.items') as string[]).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.1rem] border border-[rgba(23,21,18,0.12)] bg-white/48 px-4 py-4 text-sm leading-6 text-[var(--tripod-text-dark)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={serviceUrls.digitalSupport}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm"
              >
                <Button variant="primary" className="gap-2 px-7 py-3.5">
                  {tServices('digitalSupport.cta')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="film-cta-section border-t border-white/8 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[1.08fr_0.72fr_0.6fr] lg:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {tServices('cta.eyebrow')}
              </p>
              <h2>{tServices('cta.title')}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p>{tServices('cta.body')}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={serviceUrls.branding}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full"
              >
                <Button variant="primary" className="gap-2 px-6 py-3">
                  {tServices('cta.primary')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <a
                href={serviceUrls.videography}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border border-white/12 px-4 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-warm-white)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {tServices('cta.secondary')}
              </a>

              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2 pt-1 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-orange)]"
              >
                {tServices('cta.contact')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
