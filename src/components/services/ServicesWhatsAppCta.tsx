'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { sampleMedia } from '@/data/sampleMedia';

interface ServicesWhatsAppCtaProps {
  serviceUrls: Record<string, string>;
}

export function ServicesWhatsAppCta({
  serviceUrls,
}: ServicesWhatsAppCtaProps) {
  const locale = useLocale();

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <ScrollReveal>
          <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[22rem]">
              <Image
                src={sampleMedia.liveStreamingSetup.src}
                alt={sampleMedia.liveStreamingSetup.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,126,0,0.06),rgba(0,0,0,0.74))]" />
            </div>
            <div className="flex items-center p-6 sm:p-8 lg:p-10">
              <div className="max-w-xl space-y-5">
                <p className="label-sm text-primary">{locale === 'sw' ? 'Project Intake' : 'Project Intake'}</p>
                <h2 className="headline-lg text-white">
                  {locale === 'sw'
                    ? 'Tuma brief ya project moja kwa moja studio.'
                    : 'Send the project brief straight to the studio.'}
                </h2>
                <p className="body-md text-on-surface-variant">
                  {locale === 'sw'
                    ? 'Anza mazungumzo ya haraka ya WhatsApp kuhusu video, branding, print, music studio, au build ya digital.'
                    : 'Start a direct WhatsApp conversation about video, branding, print, music studio, or a digital build.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    ['brandStrategy', locale === 'sw' ? 'Branding' : 'Branding'],
                    ['photographyVideography', locale === 'sw' ? 'Photo / Video' : 'Photo / Video'],
                    ['webAppDevelopment', locale === 'sw' ? 'Web / App' : 'Web / App'],
                  ].map(([key, label]) => (
                    <a
                      key={key}
                      href={serviceUrls[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full"
                    >
                      <Button variant="outline" className="gap-2 px-5 py-3">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        {label}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
