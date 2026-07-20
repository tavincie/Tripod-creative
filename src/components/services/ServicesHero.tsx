'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { sampleMedia } from '@/data/sampleMedia';

interface ServicesHeroProps {
  whatsappUrl: string;
}

export function ServicesHero({ whatsappUrl }: ServicesHeroProps) {
  const locale = useLocale();
  const copy =
    locale === 'sw'
      ? {
          eyebrow: 'Equipment Room',
          title: 'Huduma za studio zilizojengwa kwa camera, canvas, print, na campaign rollout.',
          subtitle:
            'Tripod huweka production, design, digital, na studio work katika system moja yenye visuals kubwa na direction iliyo wazi.',
          cta: 'Book on WhatsApp',
        }
      : {
          eyebrow: 'Equipment Room',
          title: 'Studio services built across camera, canvas, print, and campaign rollout.',
          subtitle:
            'Tripod brings production, design, digital, and studio work into one system with larger visuals and clearer direction.',
          cta: 'Book on WhatsApp',
        };

  return (
    <section className="relative overflow-hidden border-b border-white/6 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,126,0,0.28),transparent_24%),radial-gradient(circle_at_86%_26%,rgba(253,208,0,0.1),transparent_22%),linear-gradient(180deg,rgba(8,10,12,0.95),rgba(8,10,12,0.74))]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,1.1fr)] lg:items-center">
          <div className="space-y-5">
            <ScrollReveal>
              <span className="label-sm inline-flex rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-primary">
                {copy.eyebrow}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h1 className="display-lg max-w-4xl text-white">{copy.title}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="body-lg max-w-2xl text-on-surface-variant">
                {copy.subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.22}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full"
              >
                <Button variant="primary" className="gap-2 px-7 py-3.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {copy.cta}
                </Button>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16}>
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={sampleMedia.cameraOperator.src}
                  alt={sampleMedia.cameraOperator.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,126,0,0.12),rgba(0,0,0,0.68))]" />
              </div>
              <div className="grid gap-4">
                {[sampleMedia.graphicDesignerWorkspace, sampleMedia.studioMicrophone].map((media) => (
                  <div key={media.key} className="relative min-h-[12rem] overflow-hidden rounded-[1.6rem] border border-white/10">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 22vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
