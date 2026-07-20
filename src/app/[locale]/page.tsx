'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import {
  homepageArchiveMediaKeys,
  homepageShowreelMediaKeys,
  sampleMedia,
} from '@/data/sampleMedia';

const serviceBlocks = [
  { key: 'video', mediaKey: 'videoProductionSetup' },
  { key: 'design', mediaKey: 'brandingMockups' },
  { key: 'photo', mediaKey: 'photographerShooting' },
  { key: 'print', mediaKey: 'printProduction' },
  { key: 'digital', mediaKey: 'socialCampaignVisuals' },
  { key: 'music', mediaKey: 'musicProducerWorkstation' },
] as const;

const processSteps = ['concept', 'production', 'launch'] as const;

export default function HomePage() {
  const locale = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const [showreelOpen, setShowreelOpen] = useState(false);

  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000';
  const whatsappNumber = rawNumber.replace(/[^0-9]/g, '');
  const whatsappMessage =
    locale === 'sw'
      ? 'Habari Tripod Creative. Nina mradi mpya na ningependa kuupeleka studio.'
      : 'Hello Tripod Creative. I have a new project and I would like to send it to the studio.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const copy = useMemo(
    () =>
      locale === 'sw'
        ? {
            heroEyebrow: 'Tripod Creative',
            heroTitle: 'Tunabuni kile watu wanakikumbuka.',
            heroSubtitle:
              'Branding, design, film, photography, music, na digital campaigns zilizojengwa kwa attention.',
            startProject: 'Book on WhatsApp',
            viewPortfolio: 'View Portfolio',
            coldOpen: {
              kicker: 'Mradi Mpya',
              client: 'Wazo lako lijalo lenye nguvu',
              format: 'Kitu chochote chenye thamani ya kutengenezwa',
              status: 'Tayari',
            },
            showreelEyebrow: 'Showreel Strip',
            showreelTitle: 'Film frames, campaign cuts, na studio visuals.',
            showreelSubtitle:
              'Sample media pekee kwa sasa. Badilisha na visuals halisi za Tripod kabla ya public launch.',
            showreelItems: [
              { title: 'Video Production', media: 'Timeline Clip' },
              { title: 'Event Coverage', media: 'Field Capture' },
              { title: 'Photography', media: 'Still Frame' },
              { title: 'Studio Session', media: 'Audio Take' },
              { title: 'Digital Campaign', media: 'Launch Visual' },
            ],
            servicesEyebrow: 'What We Create',
            servicesTitle: 'Ideas into visuals. Campaigns into motion. Brands into memory.',
            servicesSubtitle:
              'Visual blocks kubwa badala ya tiny cards. Kila huduma inaonekana kama sehemu ya studio ya kweli.',
            serviceLabels: {
              video: 'Video Production',
              design: 'Branding & Design',
              photo: 'Photography',
              print: 'Printing',
              digital: 'Digital Campaigns',
              music: 'Music Studio',
            },
            serviceDetails: {
              video: 'Camera crews, edits, drone angles, na coverage built for screens.',
              design: 'Identity systems, posters, packaging, na bold visual direction.',
              photo: 'Brand shoots, portraits, products, na event stills.',
              print: 'Posters, signage, handouts, na physical campaign materials.',
              digital: 'Launch visuals, rollout assets, na campaign content built for attention.',
              music: 'Recording, production sessions, na artist-facing studio work.',
            },
            wallEyebrow: 'Studio Wall',
            wallTitle: 'Production frames, poster notes, cameras, campaigns, na behind-the-scenes energy.',
            processEyebrow: 'Process',
            processTitle: 'Concept. Production. Launch.',
            processDescriptions: {
              concept: 'Brief, references, na visual direction huwekwa mapema.',
              production: 'Camera, design, print, na studio work husonga kwa pace moja.',
              launch: 'Kazi huandaliwa kwa posting, printing, release, au campaign rollout.',
            },
            ctaTitle: 'Leta project yako inayofuata ndani ya studio.',
            ctaButton: 'Book on WhatsApp',
            ctaAlt: 'Send to Studio',
            modalTitle: 'Preview ya showreel',
            modalBody:
              'Hii ni preview nyepesi ya sample media. Weka video na visuals halisi za Tripod hapa kabla ya launch ya umma.',
            close: 'Funga',
          }
        : {
            heroEyebrow: 'Tripod Creative',
            heroTitle: 'We design what people remember.',
            heroSubtitle:
              'Branding, design, film, photography, music, and digital campaigns built for attention.',
            startProject: 'Book on WhatsApp',
            viewPortfolio: 'View Portfolio',
            coldOpen: {
              kicker: 'New Project',
              client: 'Your next bold idea',
              format: 'Anything worth creating',
              status: 'Ready',
            },
            showreelEyebrow: 'Showreel Strip',
            showreelTitle: 'Film frames, campaign cuts, and studio visuals.',
            showreelSubtitle:
              'Sample media only for now. Replace with Tripod’s real visuals before public launch.',
            showreelItems: [
              { title: 'Video Production', media: 'Timeline Clip' },
              { title: 'Event Coverage', media: 'Field Capture' },
              { title: 'Photography', media: 'Still Frame' },
              { title: 'Studio Session', media: 'Audio Take' },
              { title: 'Digital Campaign', media: 'Launch Visual' },
            ],
            servicesEyebrow: 'What We Create',
            servicesTitle: 'Ideas into visuals. Campaigns into motion. Brands into memory.',
            servicesSubtitle:
              'Bigger visual blocks instead of tiny cards. Each service should feel like part of a real studio.',
            serviceLabels: {
              video: 'Video Production',
              design: 'Branding & Design',
              photo: 'Photography',
              print: 'Printing',
              digital: 'Digital Campaigns',
              music: 'Music Studio',
            },
            serviceDetails: {
              video: 'Camera crews, edits, drone angles, and coverage built for screens.',
              design: 'Identity systems, posters, packaging, and bold visual direction.',
              photo: 'Brand shoots, portraits, products, and event stills.',
              print: 'Posters, signage, handouts, and physical campaign materials.',
              digital: 'Launch visuals, rollout assets, and campaign content built for attention.',
              music: 'Recording, production sessions, and artist-facing studio work.',
            },
            wallEyebrow: 'Studio Wall',
            wallTitle: 'Production frames, poster notes, cameras, campaigns, and behind-the-scenes energy.',
            processEyebrow: 'Process',
            processTitle: 'Concept. Production. Launch.',
            processDescriptions: {
              concept: 'The brief, references, and visual direction are set early.',
              production: 'Camera, design, print, and studio work move with one pace.',
              launch: 'The work is prepared for posting, printing, release, or campaign rollout.',
            },
            ctaTitle: 'Bring your next project into the studio.',
            ctaButton: 'Book on WhatsApp',
            ctaAlt: 'Send to Studio',
            modalTitle: 'Showreel preview',
            modalBody:
              'This is a lightweight sample-media preview. Replace it with Tripod’s real video and campaign visuals before public launch.',
            close: 'Close',
          },
    [locale]
  );

  const heroMedia = [
    sampleMedia.cameraOperator,
    sampleMedia.photographerShooting,
    sampleMedia.studioMicrophone,
    sampleMedia.brandingMockups,
    sampleMedia.printProduction,
  ];

  const showreelMedia = homepageShowreelMediaKeys.map((key) => sampleMedia[key]);
  const wallMedia = homepageArchiveMediaKeys.map((key) => sampleMedia[key]);

  return (
    <main className="relative flex-grow overflow-x-hidden bg-background selection:bg-primary/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/6 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,126,0,0.28),transparent_24%),radial-gradient(circle_at_82%_26%,rgba(253,208,0,0.1),transparent_22%),linear-gradient(180deg,rgba(8,10,12,0.95),rgba(8,10,12,0.72))]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)] lg:items-center">
            <div className="space-y-5">
              <ScrollReveal>
                <span className="label-sm inline-flex rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-primary">
                  {copy.heroEyebrow}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary/85">
                    {copy.coldOpen.kicker}
                  </p>
                  <div className="grid max-w-xl gap-3 sm:grid-cols-3">
                    {[
                      ['Client', copy.coldOpen.client],
                      ['Format', copy.coldOpen.format],
                      ['Status', copy.coldOpen.status],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-4">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-primary/80">{label}</p>
                        <p className="mt-2 text-sm font-medium text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <h1 className="display-lg max-w-4xl text-white">{copy.heroTitle}</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="body-lg max-w-2xl text-on-surface-variant">{copy.heroSubtitle}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.26}>
                <div className="flex flex-wrap gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full">
                    <Button variant="primary" className="px-7 py-3.5">{copy.startProject}</Button>
                  </a>
                  <Link href="/portfolio" className="rounded-full">
                    <Button variant="secondary" className="gap-2 px-7 py-3.5">
                      {copy.viewPortfolio}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12}>
              <div className="relative grid min-h-[34rem] grid-cols-6 gap-3">
                <div className="relative col-span-4 row-span-2 overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src={heroMedia[0].src}
                    alt={heroMedia[0].alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,126,0,0.08),rgba(0,0,0,0.72))]" />
                </div>
                <div className="relative col-span-2 overflow-hidden rounded-[1.6rem] border border-white/10">
                  <Image src={heroMedia[1].src} alt={heroMedia[1].alt} fill sizes="20vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                </div>
                <div className="relative col-span-2 overflow-hidden rounded-[1.6rem] border border-white/10">
                  <Image src={heroMedia[2].src} alt={heroMedia[2].alt} fill sizes="20vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                </div>
                <div className="relative col-span-3 overflow-hidden rounded-[1.6rem] border border-white/10">
                  <Image src={heroMedia[3].src} alt={heroMedia[3].alt} fill sizes="24vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                </div>
                <div className="relative col-span-3 overflow-hidden rounded-[1.6rem] border border-white/10">
                  <Image src={heroMedia[4].src} alt={heroMedia[4].alt} fill sizes="24vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                </div>
                {!prefersReducedMotion && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: [0, 2, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute inset-10 rounded-[50%] border border-white/10"
                  />
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{copy.showreelEyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg max-w-3xl text-white">{copy.showreelTitle}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="body-md max-w-2xl text-on-surface-variant">{copy.showreelSubtitle}</p>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {showreelMedia.map((media, index) => (
              <ScrollReveal key={media.key} delay={0.06 * index}>
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  aria-label={`${copy.showreelItems[index].title} showreel preview`}
                  className="block overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 text-left"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      sizes="(max-width: 1024px) 60vw, 18vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.78))]" />
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80">
                        {copy.showreelItems[index].media}
                      </span>
                      <Play className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-x-4 bottom-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-primary/80">2026</p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{copy.showreelItems[index].title}</h3>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-surface-container-lowest/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{copy.servicesEyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg max-w-3xl text-white">{copy.servicesTitle}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="body-md max-w-2xl text-on-surface-variant">{copy.servicesSubtitle}</p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {serviceBlocks.map((block, index) => {
              const media = sampleMedia[block.mediaKey];
              return (
                <ScrollReveal key={block.key} delay={0.05 * index}>
                  <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 md:grid-cols-[1fr_1fr]">
                    <div className="relative min-h-[16rem]">
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 32vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                    </div>
                    <div className="flex items-center p-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-white">{copy.serviceLabels[block.key]}</h3>
                        <p className="text-sm leading-7 text-on-surface-variant">{copy.serviceDetails[block.key]}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{copy.wallEyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg max-w-3xl text-white">{copy.wallTitle}</h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
            {wallMedia.map((media, index) => {
              const spans = [
                'md:col-span-4 md:row-span-2',
                'md:col-span-3',
                'md:col-span-5',
                'md:col-span-5',
                'md:col-span-4',
                'md:col-span-3',
              ];
              return (
                <ScrollReveal key={media.key} delay={0.05 * index}>
                  <div className={`relative min-h-[14rem] overflow-hidden rounded-[1.8rem] border border-white/10 ${spans[index]}`}>
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-surface-container-lowest/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{copy.processEyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg text-white">{copy.processTitle}</h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step} delay={0.08 * index}>
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-primary">0{index + 1}</div>
                  <h3 className="mt-3 text-2xl font-semibold capitalize text-white">{step}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                    {copy.processDescriptions[step]}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-16">
          <ScrollReveal>
            <h2 className="headline-lg text-white">{copy.ctaTitle}</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full">
                <Button variant="primary" className="px-7 py-3.5">{copy.ctaButton}</Button>
              </a>
              <Link href="/contact" className="inline-flex rounded-full">
                <Button variant="secondary" className="px-7 py-3.5">{copy.ctaAlt}</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
            <button
              type="button"
              onClick={() => setShowreelOpen(false)}
              aria-label={copy.close}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/25 p-2 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-video">
                <Image
                  src={sampleMedia.videoProductionSetup.src}
                  alt={sampleMedia.videoProductionSetup.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
              </div>
              <div className="flex items-center p-6 sm:p-8">
                <div className="space-y-4">
                  <p className="label-sm text-primary">{copy.modalTitle}</p>
                  <p className="text-base leading-7 text-on-surface-variant">{copy.modalBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
