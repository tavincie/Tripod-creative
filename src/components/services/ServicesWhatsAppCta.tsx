'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
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
  const locale = useLocale();
  const copy =
    locale === 'sw'
      ? {
          digitalEyebrow: 'Digital Capability',
          digitalTitle: 'DIGITAL EXPERIENCES THAT CARRY THE CAMPAIGN FORWARD.',
          digitalBody:
            'Landing pages, web experiences, na launch interfaces hujengwa kama extension ya campaign — si bidhaa ya pembeni.',
          deliverables: ['Landing pages', 'Campaign microsites', 'Content systems', 'Launch support'],
          digitalCta: 'Discuss digital delivery',
          ctaEyebrow: 'Start the production',
          ctaTitle: 'BRING THE BRIEF. WE’LL BUILD THE PRODUCTION.',
          ctaBody:
            'Anza na brief fupi, discipline moja, au campaign nzima. Tutakuelekeza kwenye production path inayofaa.',
          primary: 'Start the brief',
          secondary: 'WhatsApp direct',
        }
      : {
          digitalEyebrow: 'Digital Capability',
          digitalTitle: 'DIGITAL EXPERIENCES THAT CARRY THE CAMPAIGN FORWARD.',
          digitalBody:
            'Landing pages, web experiences, and launch interfaces are built as an extension of the campaign — not as a disconnected side product.',
          deliverables: ['Landing pages', 'Campaign microsites', 'Content systems', 'Launch support'],
          digitalCta: 'Discuss digital delivery',
          ctaEyebrow: 'Start the production',
          ctaTitle: 'BRING THE BRIEF. WE’LL BUILD THE PRODUCTION.',
          ctaBody:
            'Start with a short brief, a single discipline, or the full campaign. We will route it into the right production path.',
          primary: 'Start the brief',
          secondary: 'WhatsApp direct',
        };

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f3ece1_0%,#e8dfd0_48%,#ff7c48_100%)] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.92fr)] lg:items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2.1rem] border border-[rgba(23,21,18,0.12)] bg-black">
              <div className="relative min-h-[25rem]">
                <Image
                  src={sampleMedia.editingTimeline.src}
                  alt={sampleMedia.editingTimeline.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,61,0,0.12),rgba(0,0,0,0.68))]" />
                <div className="absolute left-5 top-5 border border-white/12 bg-black/30 px-3 py-1 font-mono text-[0.58rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-warm-white)]">
                  WEB / APP / LAUNCH
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-5">
              <p className="label-sm text-[var(--tripod-orange-dark)]">{copy.digitalEyebrow}</p>
              <h2 className="headline-lg max-w-xl text-[var(--tripod-text-dark)]">{copy.digitalTitle}</h2>
              <p className="body-md max-w-lg text-[var(--tripod-text-muted-dark)]">{copy.digitalBody}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.deliverables.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.1rem] border border-[rgba(23,21,18,0.12)] bg-white/45 px-4 py-4 text-sm leading-6 text-[var(--tripod-text-dark)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={serviceUrls.webAppDevelopment}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm"
              >
                <Button variant="primary" className="gap-2 px-7 py-3.5">
                  {copy.digitalCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#f3ece1_0%,#e8dfd0_58%,#ded2bf_100%)] py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(12rem,0.7fr)] lg:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="label-sm text-[var(--tripod-orange)]">{copy.ctaEyebrow}</p>
              <h2 className="headline-lg max-w-3xl text-[var(--tripod-text-dark)]">{copy.ctaTitle}</h2>
              <p className="body-md max-w-2xl text-[var(--tripod-text-muted-dark)]">{copy.ctaBody}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={serviceUrls.brandStrategy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm"
              >
                <Button variant="primary" className="gap-2 px-7 py-3.5">
                  {copy.primary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <a
                href={serviceUrls.photographyVideography}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border border-[rgba(23,21,18,0.14)] px-4 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-text-dark)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {copy.secondary}
              </a>

              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2 pt-1 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-orange)]"
              >
                {locale === 'sw' ? 'Open full contact form' : 'Open full contact form'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
