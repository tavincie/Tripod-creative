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
          eyebrow: 'Featured Build',
          title: 'Web & app builds that carry the same studio direction as the campaign work.',
          description:
            'Tovuti, landing pages, na interfaces hujengwa kwa typography kali, motion yenye nidhamu, na visuals zinazofanya kazi isiwe rahisi kupuuzwa.',
          cta: 'Jadili build ya digital',
        }
      : {
          eyebrow: 'Featured Build',
          title: 'Web and app builds that carry the same studio direction as the campaign work.',
          description:
            'Websites, landing pages, and interfaces are built with sharper typography, disciplined motion, and visuals that make the work harder to ignore.',
          cta: 'Discuss a digital build',
        };

  return (
    <section className="pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <ScrollReveal>
          <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[22rem]">
              <Image
                src={sampleMedia.editingTimeline.src}
                alt={sampleMedia.editingTimeline.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,126,0,0.08),rgba(0,0,0,0.74))]" />
            </div>
            <div className="flex items-center p-6 sm:p-8 lg:p-10">
              <div className="max-w-xl space-y-5">
                <p className="label-sm text-primary">{copy.eyebrow}</p>
                <h2 className="headline-lg text-white">{copy.title}</h2>
                <p className="body-md text-on-surface-variant">{copy.description}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full"
                >
                  <Button variant="primary" className="gap-2 px-6 py-3.5">
                    {copy.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
