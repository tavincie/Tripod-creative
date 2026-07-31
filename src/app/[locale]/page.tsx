'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Barcode, Circle, MessageCircle, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import {
  homepageArchiveMediaKeys,
  sampleMedia,
} from '@/data/sampleMedia';

const serviceBlocks = [
  { key: 'design', mediaKey: 'brandingMockups' },
  { key: 'photo', mediaKey: 'photographerShooting' },
  { key: 'video', mediaKey: 'videoProductionSetup' },
  { key: 'audio', mediaKey: 'studioMicrophone' },
] as const;

const portfolioBlocks = [
  { key: 'branding', mediaKey: 'brandingMockups' },
  { key: 'motion', mediaKey: 'videoProductionSetup' },
  { key: 'product', mediaKey: 'printProduction' },
  { key: 'sound', mediaKey: 'musicProducerWorkstation' },
  { key: 'event', mediaKey: 'eventPhotography' },
] as const;

const capabilities = ['graphic', 'branding', 'printing', 'photo', 'video', 'drone', 'streaming', 'audio', 'music', 'podcast', 'marketing', 'training'] as const;

export default function HomePage() {
  const locale = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const [showreelOpen, setShowreelOpen] = useState(false);

  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000';
  const whatsappNumber = rawNumber.replace(/[^0-9]/g, '');
  const whatsappMessage =
    locale === 'sw'
      ? 'Habari Tripod Creatives. Nina mradi mpya na ningependa kuupeleka studio.'
      : 'Hello Tripod Creatives. I have a new project and I would like to bring it into the studio.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const copy = useMemo(
    () =>
      locale === 'sw'
        ? {
            navCta: 'Start a Project',
            heroEyebrow: 'We are Tripod Creatives',
            titleTop: 'Ideas.',
            titleMid: 'Captured.',
            titleBottom: 'Made Impact.',
            subtitle: 'Graphics. Photography. Video. Audio. All under one creative roof.',
            primary: 'View Our Work',
            secondary: 'Play Showreel',
            heroNote:
              'Kutoka wazo moja hadi campaign nzima, tunatengeneza visuals na sound inayokaa kwenye memory.',
            servicesEyebrow: 'What We Do',
            servicesTitle: 'Our Services.',
            servicesIntro: 'Creative solutions that bring your brand to life.',
            portfolioEyebrow: 'Featured Work',
            portfolioTitle: 'Our Work Speaks.',
            portfolioIntro: 'Real projects. Real impact.',
            studioTitle: 'Studio energy, archive discipline, launch-ready output.',
            studioBody:
              'Tripod Creatives combines design direction, production crews, editing, recording, printing, and rollout assets in one coordinated creative desk.',
            process: ['Brief lock', 'Shoot / design / record', 'Edit timeline', 'Launch package'],
            ctaTitle: 'Ready to make something great?',
            ctaBody: 'Let us create something that gets people talking.',
            cta: 'Start a Project',
            close: 'Close',
            modalTitle: 'Showreel Preview',
            modalBody:
              'Sample preview area. Replace this frame with the final Tripod Creatives showreel when the real cut is ready.',
            serviceLabels: {
              design: 'Graphic Design',
              photo: 'Photography',
              video: 'Video Production',
              audio: 'Audio Studio',
            },
            serviceDetails: {
              design: 'Logos, branding, social media, print, and campaign visuals.',
              photo: 'Commercial, product, portraits, and event moments.',
              video: 'Concept to final cut with drone and event coverage.',
              audio: 'Recording, podcast, production, mixing, and mastering.',
            },
            portfolioLabels: {
              branding: ['Branding', 'Bold Brew Identity'],
              motion: ['Video', 'Urban Motion Campaign'],
              product: ['Photography', 'Product Shot Collection'],
              sound: ['Audio', 'Soundtrack Production'],
              event: ['Event Coverage', 'Live Event Highlights'],
            },
            capabilities: {
              graphic: 'Graphic Design',
              branding: 'Branding',
              printing: 'Printing',
              photo: 'Photography',
              video: 'Videography',
              drone: 'Drone Coverage',
              streaming: 'Live Streaming',
              audio: 'Audio Recording',
              music: 'Music Production',
              podcast: 'Podcast Recording',
              marketing: 'Digital Marketing',
              training: 'Instrument Training',
            },
          }
        : {
            navCta: 'Start a Project',
            heroEyebrow: 'We are Tripod Creatives',
            titleTop: 'Ideas.',
            titleMid: 'Captured.',
            titleBottom: 'Made Impact.',
            subtitle: 'Graphics. Photography. Video. Audio. All under one creative roof.',
            primary: 'View Our Work',
            secondary: 'Play Showreel',
            heroNote:
              'From a single idea shot to an entire campaign, we turn your vision into powerful imagery and sound.',
            servicesEyebrow: 'What We Do',
            servicesTitle: 'Our Services.',
            servicesIntro: 'Creative solutions that bring your brand to life.',
            portfolioEyebrow: 'Featured Work',
            portfolioTitle: 'Our Work Speaks.',
            portfolioIntro: 'Real projects. Real impact.',
            studioTitle: 'Studio energy, archive discipline, launch-ready output.',
            studioBody:
              'Tripod Creatives combines design direction, production crews, editing, recording, printing, and rollout assets in one coordinated creative desk.',
            process: ['Brief lock', 'Shoot / design / record', 'Edit timeline', 'Launch package'],
            ctaTitle: 'Ready to make something great?',
            ctaBody: 'Let us create something that gets people talking.',
            cta: 'Start a Project',
            close: 'Close',
            modalTitle: 'Showreel Preview',
            modalBody:
              'Sample preview area. Replace this frame with the final Tripod Creatives showreel when the real cut is ready.',
            serviceLabels: {
              design: 'Graphic Design',
              photo: 'Photography',
              video: 'Video Production',
              audio: 'Audio Studio',
            },
            serviceDetails: {
              design: 'Logos, branding, social media, print, and campaign visuals.',
              photo: 'Commercial, product, portraits, and event moments.',
              video: 'Concept to final cut with drone and event coverage.',
              audio: 'Recording, podcast, production, mixing, and mastering.',
            },
            portfolioLabels: {
              branding: ['Branding', 'Bold Brew Identity'],
              motion: ['Video', 'Urban Motion Campaign'],
              product: ['Photography', 'Product Shot Collection'],
              sound: ['Audio', 'Soundtrack Production'],
              event: ['Event Coverage', 'Live Event Highlights'],
            },
            capabilities: {
              graphic: 'Graphic Design',
              branding: 'Branding',
              printing: 'Printing',
              photo: 'Photography',
              video: 'Videography',
              drone: 'Drone Coverage',
              streaming: 'Live Streaming',
              audio: 'Audio Recording',
              music: 'Music Production',
              podcast: 'Podcast Recording',
              marketing: 'Digital Marketing',
              training: 'Instrument Training',
            },
          },
    [locale]
  );

  const heroMedia = [
    sampleMedia.brandingMockups,
    sampleMedia.photographerShooting,
    sampleMedia.videoProductionSetup,
    sampleMedia.studioMicrophone,
  ];
  const archiveMedia = homepageArchiveMediaKeys.map((key) => sampleMedia[key]);

  return (
    <main className="film-desk-page relative flex-grow overflow-x-hidden">
      <section className="film-hero" aria-labelledby="home-hero-title">
        <div className="film-hero__rail" aria-hidden="true">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>REC</span>
        </div>

        <div className="film-hero-grid mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-end gap-8 px-5 pb-10 pt-28 md:px-16 lg:grid-cols-[0.74fr_1.26fr] lg:pt-28">
          <div className="relative z-10 pb-3">
            <p className="film-kicker">
              <span className="film-rec-dot" aria-hidden="true" />
              {copy.heroEyebrow}
            </p>

            <h1 id="home-hero-title" className="film-hero-title">
              <span>{copy.titleTop}</span>
              <span>{copy.titleMid}</span>
              <span className="text-[var(--tripod-orange)]">{copy.titleBottom}</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-[var(--tripod-cream)] md:text-lg">{copy.subtitle}</p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/portfolio" className="focus-ring rounded-sm">
                <Button variant="primary" className="gap-2 px-6 py-3">
                  {copy.primary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <button type="button" onClick={() => setShowreelOpen(true)} className="film-play-button">
                <Play className="h-4 w-4" aria-hidden="true" />
                {copy.secondary}
              </button>
            </div>
          </div>

          <div className="film-hero-strip">
            <div className="film-camera-hud" aria-hidden="true">
              <span>REC 00:12:08</span>
              <span>ISO 800</span>
              <span>4K / 25FPS</span>
              <span>DAR ES SALAAM</span>
            </div>
            <div className="film-hero-note">
              <p>{copy.heroNote}</p>
              <Link href="/contact" className="film-mini-cta">
                {copy.navCta}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="film-strip" aria-label="Tripod Creatives production frames">
              {heroMedia.map((media, index) => (
                <button
                  key={media.key}
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="film-strip__frame"
                  aria-label={`Open showreel frame ${index + 1}`}
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 48vw, 16vw"
                    className="object-cover"
                  />
                  <span className="film-strip__number">0{index + 1}</span>
                  <span className="film-strip__label">
                    {['Design', 'Photo', 'Video', 'Audio'][index]}
                  </span>
                </button>
              ))}
            </div>

            <div className="film-barcode" aria-hidden="true">
              <Barcode className="h-9 w-24" />
              <span>FRAME 001</span>
            </div>
            <div className="film-focus-corners" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="film-light-section" aria-labelledby="home-services-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-16 lg:grid-cols-[0.85fr_2.45fr] lg:py-14">
          <ScrollReveal>
            <div className="film-section-intro">
              <p className="film-light-kicker">{copy.servicesEyebrow}</p>
              <h2 id="home-services-title">{copy.servicesTitle}</h2>
              <p>{copy.servicesIntro}</p>
              <Link href="/services" className="film-text-link">
                Explore All Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceBlocks.map((block, index) => {
              const media = sampleMedia[block.mediaKey];
              return (
                <ScrollReveal key={block.key} delay={0.05 * index}>
                  <article className="film-service-card">
                    <div className="film-service-card__media">
                      <Image src={media.src} alt={media.alt} fill sizes="(max-width: 1280px) 50vw, 20vw" className="object-cover" />
                    </div>
                    <span className="film-card-number">0{index + 1}</span>
                    <h3>{copy.serviceLabels[block.key]}</h3>
                    <p>{copy.serviceDetails[block.key]}</p>
                    <Link href="/services" aria-label={`${copy.serviceLabels[block.key]} services`} className="film-card-arrow">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="film-portfolio-section" aria-labelledby="home-portfolio-title">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 md:px-16 lg:grid-cols-[0.7fr_2.8fr]">
          <ScrollReveal>
            <div className="film-section-intro film-section-intro--dark">
              <p className="film-kicker">{copy.portfolioEyebrow}</p>
              <h2 id="home-portfolio-title">{copy.portfolioTitle}</h2>
              <p>{copy.portfolioIntro}</p>
              <Link href="/portfolio" className="film-text-link film-text-link--light">
                View Full Portfolio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="film-portfolio-track">
            {portfolioBlocks.map((block, index) => {
              const media = sampleMedia[block.mediaKey];
              const [label, title] = copy.portfolioLabels[block.key];
              return (
                <ScrollReveal key={block.key} delay={0.05 * index}>
                  <article className="film-portfolio-card">
                    <Image src={media.src} alt={media.alt} fill sizes="(max-width: 1024px) 66vw, 20vw" className="object-cover" />
                    <div className="film-portfolio-card__overlay">
                      <p>{label}</p>
                      <h3>{title}</h3>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="film-studio-section" aria-labelledby="home-studio-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <div>
              <p className="film-light-kicker">Studio Desk</p>
              <h2 id="home-studio-title" className="film-editorial-heading">{copy.studioTitle}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#3a332c]">{copy.studioBody}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.process.map((step, index) => (
                  <div key={step} className="film-timeline-step">
                    <span>0{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="film-archive-grid">
              {archiveMedia.slice(0, 4).map((media, index) => (
                <div key={media.key} className={`film-archive-frame film-archive-frame--${index + 1}`}>
                  <Image src={media.src} alt={media.alt} fill sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="film-capability-band" aria-label="Tripod Creatives capabilities">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-10 md:px-16">
          {capabilities.map((key, index) => (
            <span key={key} className="film-capability-pill">
              <Circle className="h-2 w-2 fill-current" aria-hidden="true" />
              <span>{String(index + 1).padStart(2, '0')}</span>
              {copy.capabilities[key]}
            </span>
          ))}
        </div>
      </section>

      <section className="film-cta-section" aria-labelledby="home-cta-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-16 lg:grid-cols-[1.1fr_0.7fr_0.6fr] lg:items-center">
          <ScrollReveal>
            <h2 id="home-cta-title">{copy.ctaTitle}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p>{copy.ctaBody}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex focus-ring rounded-full">
              <Button variant="primary" className="gap-2 px-6 py-3">
                {copy.cta}
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md">
          <div className="film-modal">
            <button
              type="button"
              onClick={() => setShowreelOpen(false)}
              aria-label={copy.close}
              className="film-modal__close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid md:grid-cols-[1.2fr_0.8fr]">
              <div className="relative aspect-video min-h-[18rem]">
                <Image
                  src={sampleMedia.videoProductionSetup.src}
                  alt={sampleMedia.videoProductionSetup.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-8 border border-white/20"
                    animate={{ opacity: [0.25, 0.9, 0.25] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </div>
              <div className="p-6 sm:p-8">
                <p className="film-kicker">REC 00:00:12</p>
                <h2>{copy.modalTitle}</h2>
                <p>{copy.modalBody}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
