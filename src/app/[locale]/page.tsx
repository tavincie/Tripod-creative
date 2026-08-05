'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Circle, MessageCircle, Play, X } from 'lucide-react';
import { BookingModal } from '@/components/booking/BookingModal';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { getWhatsAppNumber } from '@/config/site';
import { packageTeaserIds } from '@/data/bookingPackages';
import { homepageArchiveMediaKeys, sampleMedia } from '@/data/sampleMedia';

const serviceBlocks = [
  { key: 'video', mediaKey: 'videoProductionSetup' },
  { key: 'design', mediaKey: 'brandingMockups' },
  { key: 'photo', mediaKey: 'photographerShooting' },
  { key: 'printing', mediaKey: 'printProduction' },
  { key: 'digital', mediaKey: 'socialCampaignVisuals' },
  { key: 'music', mediaKey: 'studioMicrophone' },
] as const;

const portfolioBlocks = [
  { key: 'branding', mediaKey: 'brandingMockups' },
  { key: 'motion', mediaKey: 'videoProductionSetup' },
  { key: 'product', mediaKey: 'printProduction' },
  { key: 'sound', mediaKey: 'musicProducerWorkstation' },
  { key: 'event', mediaKey: 'eventPhotography' },
] as const;

const capabilities = [
  'graphic',
  'branding',
  'printing',
  'photo',
  'video',
  'drone',
  'streaming',
  'audio',
  'music',
  'podcast',
  'marketing',
  'training',
] as const;

export default function HomePage() {
  const tBooking = useTranslations('Booking');
  const tHome = useTranslations('HomePage');
  const tCommon = useTranslations('Common');
  const prefersReducedMotion = useReducedMotion();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isServiceTapePaused, setIsServiceTapePaused] = useState(false);
  const [isCapabilityTapePaused, setIsCapabilityTapePaused] = useState(false);
  const heroShowreelVideoRef = useRef<HTMLVideoElement | null>(null);
  const showreelModalVideoRef = useRef<HTMLVideoElement | null>(null);
  const packageCardsRef = useRef<HTMLDivElement | null>(null);
  const serviceTapeViewportRef = useRef<HTMLDivElement | null>(null);
  const serviceTapeResumeTimerRef = useRef<number | null>(null);
  const capabilityTapeViewportRef = useRef<HTMLDivElement | null>(null);
  const capabilityTapeResumeTimerRef = useRef<number | null>(null);
  const serviceTapeDragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    dragging: boolean;
  } | null>(null);
  const capabilityTapeDragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    dragging: boolean;
  } | null>(null);
  const heroShowreelLoopSrc = '/assets/showreel/tripod-hero-loop.mp4';

  const whatsappNumber = getWhatsAppNumber();
  const whatsappMessage = tHome('whatsappMessage');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const heroTitleLines = tHome.raw('hero.titleLines') as string[];
  const studioProcess = tHome.raw('studio.process') as string[];
  const capabilitiesCopy = tHome.raw('capabilities') as Record<string, string>;
  const archiveMedia = homepageArchiveMediaKeys.map((key) => sampleMedia[key]);

  useEffect(() => {
    if (!showreelOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowreelOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showreelOpen]);

  useEffect(() => {
    if (prefersReducedMotion || !heroShowreelVideoRef.current) {
      return;
    }

    const video = heroShowreelVideoRef.current;
    video.muted = true;

    void video.play().catch(() => {
      // Ignore autoplay failures and keep the poster/fallback visible.
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!showreelOpen || !showreelModalVideoRef.current) {
      return;
    }

    const video = showreelModalVideoRef.current;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay failures and let the controls handle playback.
    });
  }, [showreelOpen]);

  useEffect(() => () => {
    if (serviceTapeResumeTimerRef.current) {
      window.clearTimeout(serviceTapeResumeTimerRef.current);
    }
    if (capabilityTapeResumeTimerRef.current) {
      window.clearTimeout(capabilityTapeResumeTimerRef.current);
    }
  }, []);

  const clearServiceTapeResume = () => {
    if (serviceTapeResumeTimerRef.current) {
      window.clearTimeout(serviceTapeResumeTimerRef.current);
      serviceTapeResumeTimerRef.current = null;
    }
  };

  const pauseServiceTape = () => {
    clearServiceTapeResume();
    setIsServiceTapePaused(true);
  };

  const scheduleServiceTapeResume = (delay = 1800) => {
    clearServiceTapeResume();

    if (prefersReducedMotion) {
      setIsServiceTapePaused(true);
      return;
    }

    serviceTapeResumeTimerRef.current = window.setTimeout(() => {
      setIsServiceTapePaused(false);
      serviceTapeResumeTimerRef.current = null;
    }, delay);
  };

  const handleServiceTapeWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const viewport = serviceTapeViewportRef.current;

    if (!viewport) {
      return;
    }

    pauseServiceTape();

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    if (maxScrollLeft <= 0) {
      return;
    }

    const dominantDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (dominantDelta === 0) {
      return;
    }

    event.preventDefault();
    viewport.scrollLeft += dominantDelta;
    scheduleServiceTapeResume(1400);
  };

  const handleServiceTapePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pauseServiceTape();

    if (
      event.pointerType === 'mouse' &&
      (event.target instanceof HTMLElement && event.target.closest('a, button'))
    ) {
      return;
    }

    const viewport = serviceTapeViewportRef.current;
    if (!viewport) {
      return;
    }

    serviceTapeDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
      dragging: event.pointerType === 'mouse',
    };

    if (event.pointerType === 'mouse') {
      viewport.setPointerCapture(event.pointerId);
    }
  };

  const handleServiceTapePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = serviceTapeViewportRef.current;
    const dragState = serviceTapeDragRef.current;

    if (!viewport || !dragState || dragState.pointerId !== event.pointerId || !dragState.dragging) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    viewport.scrollLeft = dragState.startScrollLeft - deltaX;
  };

  const finishServiceTapeInteraction = (pointerId?: number) => {
    const viewport = serviceTapeViewportRef.current;
    const dragState = serviceTapeDragRef.current;

    if (viewport && dragState && dragState.pointerId === pointerId && viewport.hasPointerCapture(pointerId!)) {
      viewport.releasePointerCapture(pointerId!);
    }

    serviceTapeDragRef.current = null;
    scheduleServiceTapeResume();
  };

  const clearCapabilityTapeResume = () => {
    if (capabilityTapeResumeTimerRef.current) {
      window.clearTimeout(capabilityTapeResumeTimerRef.current);
      capabilityTapeResumeTimerRef.current = null;
    }
  };

  const pauseCapabilityTape = () => {
    clearCapabilityTapeResume();
    setIsCapabilityTapePaused(true);
  };

  const scheduleCapabilityTapeResume = (delay = 1800) => {
    clearCapabilityTapeResume();

    if (prefersReducedMotion) {
      setIsCapabilityTapePaused(true);
      return;
    }

    capabilityTapeResumeTimerRef.current = window.setTimeout(() => {
      setIsCapabilityTapePaused(false);
      capabilityTapeResumeTimerRef.current = null;
    }, delay);
  };

  const handleCapabilityTapeWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const viewport = capabilityTapeViewportRef.current;

    if (!viewport) {
      return;
    }

    pauseCapabilityTape();

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    if (maxScrollLeft <= 0) {
      return;
    }

    const dominantDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (dominantDelta === 0) {
      return;
    }

    event.preventDefault();
    viewport.scrollLeft += dominantDelta;
    scheduleCapabilityTapeResume(1400);
  };

  const handleCapabilityTapePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pauseCapabilityTape();

    if (
      event.pointerType === 'mouse' &&
      (event.target instanceof HTMLElement && event.target.closest('a, button'))
    ) {
      return;
    }

    const viewport = capabilityTapeViewportRef.current;
    if (!viewport) {
      return;
    }

    capabilityTapeDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
      dragging: event.pointerType === 'mouse',
    };

    if (event.pointerType === 'mouse') {
      viewport.setPointerCapture(event.pointerId);
    }
  };

  const handleCapabilityTapePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = capabilityTapeViewportRef.current;
    const dragState = capabilityTapeDragRef.current;

    if (!viewport || !dragState || dragState.pointerId !== event.pointerId || !dragState.dragging) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    viewport.scrollLeft = dragState.startScrollLeft - deltaX;
  };

  const finishCapabilityTapeInteraction = (pointerId?: number) => {
    const viewport = capabilityTapeViewportRef.current;
    const dragState = capabilityTapeDragRef.current;

    if (viewport && dragState && dragState.pointerId === pointerId && viewport.hasPointerCapture(pointerId!)) {
      viewport.releasePointerCapture(pointerId!);
    }

    capabilityTapeDragRef.current = null;
    scheduleCapabilityTapeResume();
  };

  const openBookingModal = () => setBookingOpen(true);
  const closeBookingModal = () => setBookingOpen(false);
  const handleViewPackages = () => {
    packageCardsRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
    });
  };

  return (
    <main className="film-desk-page relative flex-grow overflow-x-hidden">
      <section className="film-hero" aria-labelledby="home-hero-title">
        <div className="film-hero__rail" aria-hidden="true">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>REC</span>
        </div>

        <div className="film-hero-grid mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-start gap-8 px-5 pb-10 pt-16 md:px-16 lg:grid-cols-[0.74fr_1.26fr] lg:pt-18">
          <div className="film-hero-copy relative z-10 pb-3">
            <div className="film-hero-copy__top">
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {tHome('hero.eyebrow')}
              </p>

              <h1 id="home-hero-title" className="film-hero-title">
                <span>{heroTitleLines[0]}</span>
                <span>{heroTitleLines[1]}</span>
                <span>{heroTitleLines[2]}</span>
                <span className="text-[var(--tripod-orange)]">{heroTitleLines[3]}</span>
                <span className="text-[var(--tripod-orange)]">{heroTitleLines[4]}</span>
              </h1>
            </div>

            <div className="film-hero-copy__bottom">
              <p className="film-hero-subtitle max-w-md text-base leading-7 text-[var(--tripod-cream)] md:text-lg">
                {tHome('hero.subtitle')}
              </p>

              <div className="film-hero-actions flex flex-wrap items-center gap-4">
                <Link href="/portfolio" className="focus-ring rounded-sm">
                  <Button variant="primary" className="gap-2 px-6 py-3">
                    {tHome('hero.primary')}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <button
                  type="button"
                  onClick={openBookingModal}
                  className="film-play-button"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {tHome('hero.secondary')}
                </button>
              </div>
            </div>
          </div>

          <div className="film-hero-strip">
            <div className="film-showreel-stage">
              <div className="film-showreel-frame">
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="film-showreel-monitor"
                  aria-label={tHome('showreel.ariaLabel')}
                >
                  <div className="film-showreel-monitor__screen">
                    {!prefersReducedMotion ? (
                      <video
                        ref={heroShowreelVideoRef}
                        className="film-showreel-monitor__video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={sampleMedia.editingTimeline.src}
                      >
                        <source src={heroShowreelLoopSrc} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={sampleMedia.editingTimeline.src}
                        alt={tCommon(`media.${sampleMedia.editingTimeline.key}`)}
                        fill
                        priority
                        sizes="(max-width: 1024px) 90vw, 42vw"
                        className="object-cover"
                      />
                    )}
                    <div className="film-showreel-monitor__overlay" aria-hidden="true" />
                    <div className="film-showreel-monitor__hud" aria-hidden="true">
                      <span className="film-showreel-monitor__rec">
                        <span className="film-rec-dot" />
                        REC
                      </span>
                      <span>TC 00:12:08</span>
                      <span>4K / 25FPS</span>
                    </div>
                    <span className="film-showreel-monitor__label" aria-hidden="true">
                      {tHome('showreel.label')}
                    </span>
                    <div className="film-showreel-monitor__center">
                      <span className="film-showreel-monitor__play">
                        <Play className="h-7 w-7" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="film-focus-corners" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-package-section" aria-labelledby="booking-packages-title">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-10 md:px-16 lg:grid-cols-[0.78fr_1.72fr] lg:py-12">
          <ScrollReveal>
            <div className="film-section-intro film-section-intro--dark booking-package-section__intro">
              <p className="film-kicker">{tBooking('teaser.eyebrow')}</p>
              <h2 id="booking-packages-title">{tBooking('teaser.title')}</h2>
              <p>{tBooking('teaser.subtitle')}</p>
              <div className="booking-package-section__actions">
                <Button type="button" variant="primary" className="gap-2 px-5 py-3" onClick={handleViewPackages}>
                  {tBooking('teaser.viewPackages')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <button
                  type="button"
                  onClick={openBookingModal}
                  className="film-play-button booking-package-section__book"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {tBooking('teaser.bookSession')}
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div ref={packageCardsRef} className="booking-package-teaser-grid">
            {packageTeaserIds.map((teaserId, index) => (
              <ScrollReveal key={teaserId} delay={0.05 * index}>
                <article className="booking-package-teaser-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{tBooking(`teaser.cards.${teaserId}.title`)}</h3>
                  <p>{tBooking(`teaser.cards.${teaserId}.body`)}</p>
                  <strong>{tBooking(`teaser.cards.${teaserId}.price`)}</strong>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="film-light-section" aria-labelledby="home-services-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-16 lg:grid-cols-[0.85fr_2.45fr] lg:py-14">
          <ScrollReveal>
            <div className="film-section-intro">
              <p className="film-light-kicker">{tHome('services.eyebrow')}</p>
              <h2 id="home-services-title">{tHome('services.title')}</h2>
              <p>{tHome('services.intro')}</p>
              <Link href="/services" className="film-text-link">
                {tCommon('exploreAllServices')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="film-service-tape" aria-label="Tripod Creative services">
            <div
              ref={serviceTapeViewportRef}
              className={`film-service-tape__viewport${prefersReducedMotion ? ' film-service-tape__viewport--reduced' : ''}${isServiceTapePaused || prefersReducedMotion ? ' is-paused' : ''}`}
              onPointerEnter={pauseServiceTape}
              onPointerLeave={() => scheduleServiceTapeResume(250)}
              onPointerDown={handleServiceTapePointerDown}
              onPointerMove={handleServiceTapePointerMove}
              onPointerUp={(event) => finishServiceTapeInteraction(event.pointerId)}
              onPointerCancel={(event) => finishServiceTapeInteraction(event.pointerId)}
              onTouchStart={pauseServiceTape}
              onTouchEnd={() => scheduleServiceTapeResume(2200)}
              onFocusCapture={pauseServiceTape}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  scheduleServiceTapeResume(250);
                }
              }}
              onWheel={handleServiceTapeWheel}
            >
              <div className="film-service-tape__track">
                {[0, 1].map((setIndex) => (
                  <div
                    key={setIndex}
                    className="film-service-tape__set"
                    aria-hidden={setIndex === 1}
                  >
                    {serviceBlocks.map((block, index) => {
                      const media = sampleMedia[block.mediaKey];

                      return (
                        <article
                          key={`${block.key}-${setIndex}`}
                          className="film-service-tape__item"
                        >
                          <div className="film-service-tape__media">
                            <Image
                              src={media.src}
                              alt={tCommon(`media.${media.key}`)}
                              fill
                              sizes="(max-width: 768px) 72vw, 18vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="film-service-tape__body">
                            <p className="film-service-tape__meta">
                              <span className="film-service-tape__dot" aria-hidden="true" />
                              <span>{`0${index + 1}`}</span>
                            </p>
                            <h3>
                              {(tHome.raw(`services.titleLines.${block.key}`) as string[]).map(
                                (line) => (
                                  <span key={line}>{line}</span>
                                ),
                              )}
                            </h3>
                            <p>{tHome(`services.details.${block.key}`)}</p>
                            <Link
                              href="/services"
                              aria-label={`${tHome(`services.labels.${block.key}`)} services`}
                              className="film-service-tape__link"
                            >
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="film-portfolio-section" aria-labelledby="home-portfolio-title">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 md:px-16 lg:grid-cols-[0.7fr_2.8fr]">
          <ScrollReveal>
            <div className="film-section-intro film-section-intro--dark">
              <p className="film-kicker">{tHome('portfolio.eyebrow')}</p>
              <h2 id="home-portfolio-title">{tHome('portfolio.title')}</h2>
              <p>{tHome('portfolio.intro')}</p>
              <Link
                href="/portfolio"
                className="film-text-link film-text-link--light film-portfolio-link"
              >
                {tHome('portfolio.link')}
                <ArrowRight className="film-portfolio-link__arrow h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="film-portfolio-track">
            {portfolioBlocks.map((block, index) => {
              const media = sampleMedia[block.mediaKey];
              const labels = tHome.raw(`portfolio.labels.${block.key}`) as string[];

              return (
                <ScrollReveal key={block.key} delay={0.05 * index}>
                  <article className="film-portfolio-card">
                    <Image
                      src={media.src}
                      alt={tCommon(`media.${media.key}`)}
                      fill
                      sizes="(max-width: 1024px) 66vw, 20vw"
                      className="object-cover"
                    />
                    <div className="film-portfolio-card__overlay">
                      <span className="film-portfolio-card__frame">
                        FRAME {String(index + 1).padStart(2, '0')}
                      </span>
                      <p>{labels[0]}</p>
                      <h3>{labels[1]}</h3>
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
              <p className="film-light-kicker">{tHome('studio.eyebrow')}</p>
              <h2 id="home-studio-title" className="film-editorial-heading">
                {tHome('studio.title')}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#3a332c]">
                {tHome('studio.body')}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {studioProcess.map((step, index) => (
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
                  <Image
                    src={media.src}
                    alt={tCommon(`media.${media.key}`)}
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="film-capability-band" aria-label={tHome('capabilities.ariaLabel')}>
        <div
          className={`mx-auto film-capability-tape max-w-7xl px-5 py-10 md:px-16${prefersReducedMotion ? ' film-capability-tape--reduced' : ''}`}
        >
          <div
            ref={capabilityTapeViewportRef}
            className={`film-capability-tape__viewport${isCapabilityTapePaused || prefersReducedMotion ? ' is-paused' : ''}`}
            onPointerEnter={pauseCapabilityTape}
            onPointerLeave={() => scheduleCapabilityTapeResume(250)}
            onPointerDown={handleCapabilityTapePointerDown}
            onPointerMove={handleCapabilityTapePointerMove}
            onPointerUp={(event) => finishCapabilityTapeInteraction(event.pointerId)}
            onPointerCancel={(event) => finishCapabilityTapeInteraction(event.pointerId)}
            onTouchStart={pauseCapabilityTape}
            onTouchEnd={() => scheduleCapabilityTapeResume(2200)}
            onFocusCapture={pauseCapabilityTape}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                scheduleCapabilityTapeResume(250);
              }
            }}
            onWheel={handleCapabilityTapeWheel}
          >
            <div className="film-capability-tape__track" role="list">
              <div className="film-capability-tape__set">
                {capabilities.map((key, index) => (
                  <div key={key} className="film-capability-pill" role="listitem" tabIndex={0}>
                    <Circle className="h-2 w-2 fill-current" aria-hidden="true" />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {capabilitiesCopy[key]}
                  </div>
                ))}
              </div>

              <div className="film-capability-tape__set" aria-hidden="true">
                {capabilities.map((key, index) => (
                  <div key={`${key}-duplicate`} className="film-capability-pill">
                    <Circle className="h-2 w-2 fill-current" aria-hidden="true" />
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {capabilitiesCopy[key]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="film-cta-section" aria-labelledby="home-cta-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-16 lg:grid-cols-[1.1fr_0.7fr_0.6fr] lg:items-center">
          <ScrollReveal>
            <h2 id="home-cta-title">{tHome('cta.title')}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p>{tHome('cta.body')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex focus-ring rounded-full"
            >
              <Button variant="primary" className="gap-2 px-6 py-3">
                {tHome('cta.button')}
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {showreelOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
          onClick={() => setShowreelOpen(false)}
        >
          <div className="film-modal film-showreel-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setShowreelOpen(false)}
              aria-label={tCommon('close')}
              className="film-modal__close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="film-showreel-modal__player">
              <div className="film-showreel-modal__header">
                <p className="film-kicker">{tHome('showreel.modalEyebrow')}</p>
                <span>{tHome('showreel.modalLabel')}</span>
              </div>
              <div className="film-showreel-modal__media-wrap">
                <video
                  ref={showreelModalVideoRef}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  poster={sampleMedia.editingTimeline.src}
                >
                  <source src={heroShowreelLoopSrc} type="video/mp4" />
                </video>
                {!prefersReducedMotion && (
                  <motion.div
                    className="film-showreel-modal__pulse"
                    animate={{ opacity: [0.18, 0.55, 0.18] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <BookingModal isOpen={bookingOpen} onClose={closeBookingModal} />
    </main>
  );
}
