'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Circle, MessageCircle, Play, X } from 'lucide-react';
import { useBooking } from '@/components/booking/BookingProvider';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import {
  productionPathCards,
  type ProductionPathCard,
  type ProductionPathId,
} from '@/data/productionPaths';
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

const whatWeDoMinimumCopyCount = 4;
const featuredWorkCopyCount = 5;
const featuredWorkCenterCopyIndex = Math.floor(featuredWorkCopyCount / 2);

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

const productionPathFanPositions = [
  { x: -270, y: 55, rotate: -18, zIndex: 1 },
  { x: -90, y: 0, rotate: -6, zIndex: 3 },
  { x: 90, y: 0, rotate: 6, zIndex: 3 },
  { x: 270, y: 55, rotate: 18, zIndex: 1 },
] as const;

function wrapIndex(index: number, count: number) {
  return ((index % count) + count) % count;
}

interface RapidImageCycleOptions {
  imageCount: number;
  interval: number;
  initialDelay: number;
  enabled: boolean;
  resetKey?: string;
}

function useRapidImageCycle({
  imageCount,
  interval,
  initialDelay,
  enabled,
  resetKey,
}: RapidImageCycleOptions) {
  const [cycleState, setCycleState] = useState({ resetKey, activeIndex: 0 });
  const activeIndex = cycleState.resetKey === resetKey ? cycleState.activeIndex : 0;

  useEffect(() => {
    if (!enabled || imageCount <= 1) {
      return undefined;
    }

    let intervalId: number | null = null;
    let delayId: number | null = null;

    const startCycle = () => {
      if (document.visibilityState === 'hidden') {
        return;
      }

      delayId = window.setTimeout(() => {
        setCycleState((currentState) => ({
          resetKey,
          activeIndex:
            currentState.resetKey === resetKey
              ? (currentState.activeIndex + 1) % imageCount
              : 1 % imageCount,
        }));
        intervalId = window.setInterval(() => {
          setCycleState((currentState) => ({
            resetKey,
            activeIndex:
              currentState.resetKey === resetKey
                ? (currentState.activeIndex + 1) % imageCount
                : 1 % imageCount,
          }));
        }, interval);
      }, initialDelay);
    };

    const stopCycle = () => {
      if (delayId) window.clearTimeout(delayId);
      if (intervalId) window.clearInterval(intervalId);
      delayId = null;
      intervalId = null;
    };

    const handleVisibilityChange = () => {
      stopCycle();
      if (document.visibilityState === 'visible') {
        startCycle();
      }
    };

    startCycle();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopCycle();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled, imageCount, initialDelay, interval, resetKey]);

  return activeIndex % imageCount;
}

function getImagePanelState(imageIndex: number, activeIndex: number, imageCount: number) {
  if (imageIndex === activeIndex) {
    return 'is-active';
  }

  if (imageIndex === (activeIndex - 1 + imageCount) % imageCount) {
    return 'is-previous';
  }

  if (imageIndex === (activeIndex + 1) % imageCount) {
    return 'is-next';
  }

  return 'is-far';
}

interface ProductionPathFanCardProps {
  card: ProductionPathCard;
  index: number;
  isFlipped: boolean;
  isPaused: boolean;
  isSectionActive: boolean;
  prefersReducedMotion: boolean;
  onToggle: (cardId: ProductionPathId) => void;
  onPause: (cardId: ProductionPathId) => void;
  onResume: () => void;
  onClose: () => void;
  onBooking: () => void;
}

function ProductionPathFanCard({
  card,
  index,
  isFlipped,
  isPaused,
  isSectionActive,
  prefersReducedMotion,
  onToggle,
  onPause,
  onResume,
  onClose,
  onBooking,
}: ProductionPathFanCardProps) {
  const tBooking = useTranslations('Booking');
  const activeImageIndex = useRapidImageCycle({
    imageCount: card.imagePaths.length,
    interval: prefersReducedMotion ? 2800 : card.cycleIntervalMs,
    initialDelay: prefersReducedMotion ? 0 : card.initialDelayMs,
    enabled: isSectionActive && !isPaused && !isFlipped && !prefersReducedMotion,
    resetKey: card.id,
  });
  const position = productionPathFanPositions[index] ?? productionPathFanPositions[0];
  const highlights = tBooking.raw(`teaser.productionPaths.${card.highlightsKey}`) as string[];
  const cardStyle = {
    '--fan-x': `${position.x}px`,
    '--fan-y': `${position.y}px`,
    '--fan-rotate': `${position.rotate}deg`,
    '--fan-z': position.zIndex,
    '--float-duration': `${4.8 + index * 0.55}s`,
    '--float-delay': `${index * -0.65}s`,
  } as React.CSSProperties;

  return (
    <article
      className={`booking-package-teaser-card production-path-fan-card--${card.id}${isFlipped ? ' is-flipped' : ''}`}
      data-card-id={card.id}
      style={cardStyle}
    >
      <div className="booking-package-teaser-card__inner">
        <button
          type="button"
          className="booking-package-teaser-card__face booking-package-teaser-card__face--front"
          onClick={() => onToggle(card.id)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onToggle(card.id);
            }
          }}
          onPointerEnter={() => onPause(card.id)}
          onPointerLeave={onResume}
          onFocus={() => onPause(card.id)}
          onBlur={onResume}
          aria-pressed={isFlipped}
          aria-label={tBooking('teaser.cardAria.open', {
            title: tBooking(`teaser.productionPaths.${card.shortTitleKey}`),
          })}
        >
          <span className="booking-package-teaser-card__frame">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="booking-package-teaser-card__slideshow" aria-hidden="true">
            {card.imagePaths.map((imagePath, imageIndex) => (
              <span
                key={`${card.id}-${imagePath}`}
                className={`booking-package-teaser-card__image-panel ${getImagePanelState(
                  imageIndex,
                  activeImageIndex,
                  card.imagePaths.length,
                )}`}
              >
                <Image
                  src={imagePath}
                  alt=""
                  fill
                  priority={index <= 1 && imageIndex === 0}
                  sizes="(max-width: 760px) 78vw, (max-width: 1120px) 34vw, 260px"
                />
              </span>
            ))}
          </span>
          <span className="booking-package-teaser-card__shade" aria-hidden="true" />
          <span className="booking-package-teaser-card__progress" aria-hidden="true">
            {card.imagePaths.map((imagePath, imageIndex) => (
              <span
                key={`${card.id}-progress-${imagePath}`}
                className={imageIndex === activeImageIndex ? 'is-active' : ''}
              />
            ))}
          </span>
          <span className="booking-package-teaser-card__front-copy">
            <span>{tBooking(`teaser.productionPaths.${card.shortTitleKey}`)}</span>
          </span>
        </button>

        <div
          className="booking-package-teaser-card__face booking-package-teaser-card__face--back"
          onClick={onClose}
        >
          <button
            type="button"
            className="booking-package-teaser-card__close"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label={tBooking('teaser.cardAria.close', {
              title: tBooking(`teaser.productionPaths.${card.shortTitleKey}`),
            })}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="booking-package-teaser-card__frame">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3>{tBooking(`teaser.productionPaths.${card.fullTitleKey}`)}</h3>
          <p>{tBooking(`teaser.productionPaths.${card.summaryKey}`)}</p>
          <strong>{tBooking(`teaser.productionPaths.${card.priceKey}`)}</strong>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <Button
            type="button"
            variant="primary"
            className="booking-package-teaser-card__booking"
            onClick={(event) => {
              event.stopPropagation();
              onBooking();
            }}
          >
            {tBooking('teaser.bookSession')}
          </Button>
        </div>
      </div>
    </article>
  );
}

interface MobileProductionPathCarouselProps {
  flippedProductionPathId: ProductionPathId | null;
  isSectionActive: boolean;
  prefersReducedMotion: boolean;
  onToggle: (cardId: ProductionPathId) => void;
  onClose: () => void;
  onBooking: () => void;
}

function MobileProductionPathCarousel({
  flippedProductionPathId,
  isSectionActive,
  prefersReducedMotion,
  onToggle,
  onClose,
  onBooking,
}: MobileProductionPathCarouselProps) {
  const tBooking = useTranslations('Booking');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeCard = productionPathCards[activeCardIndex];
  const isFlipped = flippedProductionPathId === activeCard.id;
  const activeImageIndex = useRapidImageCycle({
    imageCount: activeCard.imagePaths.length,
    interval: prefersReducedMotion ? 3200 : Math.max(activeCard.cycleIntervalMs, 2200),
    initialDelay: prefersReducedMotion ? 0 : 550,
    enabled: isSectionActive && !isFlipped && !prefersReducedMotion,
    resetKey: activeCard.id,
  });
  const highlights = tBooking.raw(
    `teaser.productionPaths.${activeCard.highlightsKey}`,
  ) as string[];

  const selectCard = (nextIndex: number) => {
    const normalizedIndex =
      (nextIndex + productionPathCards.length) % productionPathCards.length;

    setActiveCardIndex(normalizedIndex);
    onClose();
  };

  return (
    <div className="booking-package-mobile-carousel" aria-label={tBooking('teaser.mobile.label')}>
      <div className="booking-package-mobile-carousel__topline">
        <p>{tBooking('teaser.mobile.instruction')}</p>
        <div className="booking-package-mobile-carousel__step" aria-live="polite">
          <span>{String(activeCardIndex + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(productionPathCards.length).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="booking-package-mobile-carousel__tabs" role="tablist">
        {productionPathCards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            role="tab"
            aria-selected={index === activeCardIndex}
            className={index === activeCardIndex ? 'is-active' : ''}
            onClick={() => selectCard(index)}
          >
            {tBooking(`teaser.productionPaths.${card.shortTitleKey}`)}
          </button>
        ))}
      </div>

      <div
        className="booking-package-mobile-carousel__stage"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            selectCard(activeCardIndex + 1);
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            selectCard(activeCardIndex - 1);
          } else if (event.key === 'Home') {
            event.preventDefault();
            selectCard(0);
          } else if (event.key === 'End') {
            event.preventDefault();
            selectCard(productionPathCards.length - 1);
          }
        }}
      >
        <button
          type="button"
          className="booking-package-mobile-carousel__control booking-package-mobile-carousel__control--previous"
          onClick={() => selectCard(activeCardIndex - 1)}
          aria-label={tBooking('teaser.mobile.previous')}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <AnimatePresence initial={false}>
          <motion.article
            key={activeCard.id}
            className={`booking-package-mobile-card${isFlipped ? ' is-flipped' : ''}`}
            data-card-id={activeCard.id}
            drag={prefersReducedMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -48 || info.velocity.x < -360) {
                selectCard(activeCardIndex + 1);
              }

              if (info.offset.x > 48 || info.velocity.x > 360) {
                selectCard(activeCardIndex - 1);
              }
            }}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 34 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -34 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="booking-package-teaser-card__inner">
              <button
                type="button"
                className="booking-package-teaser-card__face booking-package-teaser-card__face--front"
                onClick={() => onToggle(activeCard.id)}
                aria-pressed={isFlipped}
                aria-label={tBooking('teaser.cardAria.open', {
                  title: tBooking(`teaser.productionPaths.${activeCard.shortTitleKey}`),
                })}
              >
                <span className="booking-package-teaser-card__frame">
                  {String(activeCardIndex + 1).padStart(2, '0')}
                </span>
                <span className="booking-package-teaser-card__slideshow" aria-hidden="true">
                  {activeCard.imagePaths.map((imagePath, imageIndex) => (
                    <span
                      key={`${activeCard.id}-mobile-${imagePath}`}
                      className={`booking-package-teaser-card__image-panel ${getImagePanelState(
                        imageIndex,
                        activeImageIndex,
                        activeCard.imagePaths.length,
                      )}`}
                    >
                      <Image
                        src={imagePath}
                        alt=""
                        fill
                        sizes="88vw"
                        priority={activeCardIndex === 0 && imageIndex === 0}
                      />
                    </span>
                  ))}
                </span>
                <span className="booking-package-teaser-card__shade" aria-hidden="true" />
                <span className="booking-package-teaser-card__progress" aria-hidden="true">
                  {activeCard.imagePaths.map((imagePath, imageIndex) => (
                    <span
                      key={`${activeCard.id}-mobile-progress-${imagePath}`}
                      className={imageIndex === activeImageIndex ? 'is-active' : ''}
                    />
                  ))}
                </span>
                <span className="booking-package-teaser-card__front-copy">
                  <span>{tBooking(`teaser.productionPaths.${activeCard.shortTitleKey}`)}</span>
                </span>
              </button>

              <div className="booking-package-teaser-card__face booking-package-teaser-card__face--back">
                <button
                  type="button"
                  className="booking-package-teaser-card__close"
                  onClick={onClose}
                  aria-label={tBooking('teaser.cardAria.close', {
                    title: tBooking(`teaser.productionPaths.${activeCard.shortTitleKey}`),
                  })}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="booking-package-teaser-card__frame">
                  {String(activeCardIndex + 1).padStart(2, '0')}
                </span>
                <h3>{tBooking(`teaser.productionPaths.${activeCard.fullTitleKey}`)}</h3>
                <p>{tBooking(`teaser.productionPaths.${activeCard.summaryKey}`)}</p>
                <strong>{tBooking(`teaser.productionPaths.${activeCard.priceKey}`)}</strong>
                <ul>
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <Button
                  type="button"
                  variant="primary"
                  className="booking-package-teaser-card__booking"
                  onClick={onBooking}
                >
                  {tBooking('teaser.bookSession')}
                </Button>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <button
          type="button"
          className="booking-package-mobile-carousel__control booking-package-mobile-carousel__control--next"
          onClick={() => selectCard(activeCardIndex + 1)}
          aria-label={tBooking('teaser.mobile.next')}
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="booking-package-mobile-carousel__dots" aria-label={tBooking('teaser.mobile.dots')}>
        {productionPathCards.map((card, index) => (
          <button
            key={`${card.id}-dot`}
            type="button"
            className={index === activeCardIndex ? 'is-active' : ''}
            onClick={() => selectCard(index)}
            aria-label={tBooking('teaser.mobile.goTo', {
              title: tBooking(`teaser.productionPaths.${card.shortTitleKey}`),
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const tBooking = useTranslations('Booking');
  const tHome = useTranslations('HomePage');
  const tCommon = useTranslations('Common');
  const prefersReducedMotion = useReducedMotion();
  const { openBooking } = useBooking();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [flippedProductionPathId, setFlippedProductionPathId] =
    useState<ProductionPathId | null>(null);
  const [pausedProductionPathId, setPausedProductionPathId] =
    useState<ProductionPathId | null>(null);
  const [isProductionPathFanActive, setIsProductionPathFanActive] = useState(false);
  const [isServiceTapePaused, setIsServiceTapePaused] = useState(false);
  const [isPortfolioTapePaused, setIsPortfolioTapePaused] = useState(false);
  const [isCapabilityTapePaused, setIsCapabilityTapePaused] = useState(false);
  const heroShowreelVideoRef = useRef<HTMLVideoElement | null>(null);
  const showreelModalVideoRef = useRef<HTMLVideoElement | null>(null);
  const packageCardsRef = useRef<HTMLDivElement | null>(null);
  const serviceTapeViewportRef = useRef<HTMLDivElement | null>(null);
  const whatWeDoTrackRef = useRef<HTMLDivElement | null>(null);
  const serviceTapeResumeTimerRef = useRef<number | null>(null);
  const serviceTapePositionRef = useRef(0);
  const whatWeDoLoopWidthRef = useRef(0);
  const portfolioTapeViewportRef = useRef<HTMLDivElement | null>(null);
  const portfolioTapeResumeTimerRef = useRef<number | null>(null);
  const portfolioTapeTransitionTimerRef = useRef<number | null>(null);
  const featuredWorkInitialRenderIndex = portfolioBlocks.length * featuredWorkCenterCopyIndex;
  const portfolioTapeRenderIndexRef = useRef<number>(featuredWorkInitialRenderIndex);
  const featuredWorkTrackRef = useRef<HTMLDivElement | null>(null);
  const featuredWorkTransitionLockRef = useRef(false);
  const capabilityTapeViewportRef = useRef<HTMLDivElement | null>(null);
  const capabilityTapeResumeTimerRef = useRef<number | null>(null);
  const serviceTapeDragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    dragging: boolean;
  } | null>(null);
  const portfolioTapeDragRef = useRef<{
    pointerId: number;
    startX: number;
    currentX: number;
    dragging: boolean;
  } | null>(null);
  const capabilityTapeDragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    dragging: boolean;
  } | null>(null);
  const heroShowreelLoopSrc = '/assets/showreel/tripod-hero-loop.mp4';

  const heroTitleLines = tHome.raw('hero.titleLines') as string[];
  const studioProcess = tHome.raw('studio.process') as string[];
  const capabilitiesCopy = tHome.raw('capabilities') as Record<string, string>;
  const archiveMedia = homepageArchiveMediaKeys.map((key) => sampleMedia[key]);
  const [whatWeDoCopyCount, setWhatWeDoCopyCount] = useState(whatWeDoMinimumCopyCount);
  const [isWhatWeDoTapeInView, setIsWhatWeDoTapeInView] = useState(true);
  const [portfolioTapeItemWidth, setPortfolioTapeItemWidth] = useState(240);
  const [portfolioTapeRenderIndex, setPortfolioTapeRenderIndex] = useState<number>(featuredWorkInitialRenderIndex);
  const [portfolioTapeDragOffset, setPortfolioTapeDragOffset] = useState(0);
  const [isPortfolioTapeTransitioning, setIsPortfolioTapeTransitioning] = useState(false);
  const portfolioLoopItems = Array.from({ length: featuredWorkCopyCount }, (_, copyIndex) =>
    portfolioBlocks.map((block, itemIndex) => ({
      block,
      copyIndex,
      itemIndex,
    })),
  ).flat();
  const portfolioTranslateX = Math.round(
    -portfolioTapeRenderIndex * portfolioTapeItemWidth +
      portfolioTapeDragOffset,
  );

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
    if (portfolioTapeResumeTimerRef.current) {
      window.clearTimeout(portfolioTapeResumeTimerRef.current);
    }
    if (portfolioTapeTransitionTimerRef.current) {
      window.clearTimeout(portfolioTapeTransitionTimerRef.current);
    }
    featuredWorkTransitionLockRef.current = false;
    if (capabilityTapeResumeTimerRef.current) {
      window.clearTimeout(capabilityTapeResumeTimerRef.current);
    }
  }, []);

  useEffect(() => {
    const viewport = serviceTapeViewportRef.current;
    const track = whatWeDoTrackRef.current;

    if (!viewport || !track) {
      return undefined;
    }

    const updateWhatWeDoGeometry = () => {
      const firstSet = track.querySelector<HTMLElement>('.film-service-tape__set');
      const loopWidth = firstSet?.offsetWidth ?? 0;

      if (loopWidth <= 0) {
        return;
      }

      whatWeDoLoopWidthRef.current = loopWidth;
      setWhatWeDoCopyCount((currentCopyCount) => {
        const requiredCopyCount = Math.max(
          whatWeDoMinimumCopyCount,
          Math.ceil(viewport.clientWidth / loopWidth) + 3,
        );

        return currentCopyCount === requiredCopyCount ? currentCopyCount : requiredCopyCount;
      });

      if (serviceTapePositionRef.current < loopWidth || serviceTapePositionRef.current >= loopWidth * 2) {
        serviceTapePositionRef.current =
          loopWidth + wrapIndex(Math.round(serviceTapePositionRef.current), loopWidth);
        viewport.scrollLeft = serviceTapePositionRef.current;
      }
    };

    updateWhatWeDoGeometry();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateWhatWeDoGeometry);
      return () => window.removeEventListener('resize', updateWhatWeDoGeometry);
    }

    const resizeObserver = new ResizeObserver(updateWhatWeDoGeometry);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [whatWeDoCopyCount]);

  useEffect(() => {
    const viewport = serviceTapeViewportRef.current;

    if (!viewport) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWhatWeDoTapeInView(entry.isIntersecting);
      },
      { rootMargin: '240px 0px', threshold: 0.08 },
    );

    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isServiceTapePaused || prefersReducedMotion || !isWhatWeDoTapeInView) {
      return undefined;
    }

    let intervalId: number | null = null;
    const pixelsPerSecond = 28;
    const tickMs = 32;

    const normalizeScrollPosition = () => {
      const viewport = serviceTapeViewportRef.current;

      if (!viewport) {
        return;
      }

      const loopWidth = whatWeDoLoopWidthRef.current || viewport.scrollWidth / whatWeDoCopyCount;

      if (loopWidth <= 0) {
        return;
      }

      if (serviceTapePositionRef.current >= loopWidth * 2) {
        serviceTapePositionRef.current -= loopWidth;
      } else if (serviceTapePositionRef.current < loopWidth) {
        serviceTapePositionRef.current += loopWidth;
      }

      viewport.scrollLeft = serviceTapePositionRef.current;
    };

    const tick = () => {
      const viewport = serviceTapeViewportRef.current;

      if (viewport) {
        serviceTapePositionRef.current += pixelsPerSecond * (tickMs / 1000);
        normalizeScrollPosition();
      }
    };

    intervalId = window.setInterval(tick, tickMs);

    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [isServiceTapePaused, prefersReducedMotion, isWhatWeDoTapeInView, whatWeDoCopyCount]);

  useEffect(() => {
    if (isPortfolioTapePaused || prefersReducedMotion || isPortfolioTapeTransitioning) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (featuredWorkTransitionLockRef.current) {
        return;
      }

      featuredWorkTransitionLockRef.current = true;
      const nextIndex = portfolioTapeRenderIndexRef.current + 1;
      portfolioTapeRenderIndexRef.current = nextIndex;
      setPortfolioTapeDragOffset(0);
      setIsPortfolioTapeTransitioning(true);
      setPortfolioTapeRenderIndex(nextIndex);

      if (portfolioTapeTransitionTimerRef.current) {
        window.clearTimeout(portfolioTapeTransitionTimerRef.current);
      }

      portfolioTapeTransitionTimerRef.current = window.setTimeout(() => {
        settlePortfolioTapeLoop();
      }, 700);
    }, 3800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPortfolioTapePaused, prefersReducedMotion, isPortfolioTapeTransitioning]);

  useEffect(() => {
    const viewport = portfolioTapeViewportRef.current;
    const card = viewport?.querySelector<HTMLElement>('.film-portfolio-card');

    if (!viewport || !card) {
      return undefined;
    }

    const updateItemWidth = () => {
      setPortfolioTapeItemWidth(card.offsetWidth || 240);
    };

    updateItemWidth();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateItemWidth);
      return () => window.removeEventListener('resize', updateItemWidth);
    }

    const resizeObserver = new ResizeObserver(updateItemWidth);
    resizeObserver.observe(card);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const fanElement = packageCardsRef.current;

    if (!fanElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProductionPathFanActive(entry.isIntersecting);
      },
      { rootMargin: '420px 0px', threshold: 0.08 },
    );

    observer.observe(fanElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!flippedProductionPathId) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFlippedProductionPathId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flippedProductionPathId]);

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

  const normalizeServiceTapeScroll = () => {
    const viewport = serviceTapeViewportRef.current;

    if (!viewport) {
      return;
    }

    const loopWidth = whatWeDoLoopWidthRef.current || viewport.scrollWidth / whatWeDoCopyCount;

    if (loopWidth <= 0) {
      serviceTapePositionRef.current = viewport.scrollLeft;
      return;
    }

    serviceTapePositionRef.current = viewport.scrollLeft;

    if (serviceTapePositionRef.current >= loopWidth * 2) {
      serviceTapePositionRef.current -= loopWidth;
    } else if (serviceTapePositionRef.current < loopWidth) {
      serviceTapePositionRef.current += loopWidth;
    }

    viewport.scrollLeft = serviceTapePositionRef.current;
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
    serviceTapePositionRef.current = viewport.scrollLeft + dominantDelta;
    normalizeServiceTapeScroll();
    scheduleServiceTapeResume(1400);
  };

  const scrollServiceTapeBy = (distance: number) => {
    const viewport = serviceTapeViewportRef.current;

    if (!viewport) {
      return;
    }

    pauseServiceTape();
    serviceTapePositionRef.current = viewport.scrollLeft + distance;
    normalizeServiceTapeScroll();
    scheduleServiceTapeResume(1600);
  };

  const handleServiceTapeKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const viewport = serviceTapeViewportRef.current;

    if (!viewport) {
      return;
    }

    const itemWidth =
      viewport.querySelector<HTMLElement>('.film-service-tape__item')?.offsetWidth ?? 240;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollServiceTapeBy(itemWidth);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollServiceTapeBy(-itemWidth);
    } else if (event.key === 'Home') {
      event.preventDefault();
      pauseServiceTape();
      serviceTapePositionRef.current = whatWeDoLoopWidthRef.current;
      viewport.scrollLeft = serviceTapePositionRef.current;
      scheduleServiceTapeResume(1600);
    } else if (event.key === 'End') {
      event.preventDefault();
      pauseServiceTape();
      const loopWidth = whatWeDoLoopWidthRef.current || viewport.scrollWidth / whatWeDoCopyCount;
      serviceTapePositionRef.current = loopWidth + Math.max(loopWidth - viewport.clientWidth, 0);
      viewport.scrollLeft = serviceTapePositionRef.current;
      scheduleServiceTapeResume(1600);
    }
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
      dragging: true,
    };

    viewport.setPointerCapture(event.pointerId);
  };

  const handleServiceTapePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = serviceTapeViewportRef.current;
    const dragState = serviceTapeDragRef.current;

    if (!viewport || !dragState || dragState.pointerId !== event.pointerId || !dragState.dragging) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    serviceTapePositionRef.current = dragState.startScrollLeft - deltaX;
    viewport.scrollLeft = serviceTapePositionRef.current;
    normalizeServiceTapeScroll();
  };

  const finishServiceTapeInteraction = (pointerId?: number) => {
    const viewport = serviceTapeViewportRef.current;
    const dragState = serviceTapeDragRef.current;

    if (viewport && dragState && dragState.pointerId === pointerId && viewport.hasPointerCapture(pointerId!)) {
      viewport.releasePointerCapture(pointerId!);
    }

    serviceTapeDragRef.current = null;
    normalizeServiceTapeScroll();
    scheduleServiceTapeResume();
  };

  const clearPortfolioTapeResume = () => {
    if (portfolioTapeResumeTimerRef.current) {
      window.clearTimeout(portfolioTapeResumeTimerRef.current);
      portfolioTapeResumeTimerRef.current = null;
    }
  };

  const pausePortfolioTape = () => {
    clearPortfolioTapeResume();
    setIsPortfolioTapePaused(true);
  };

  const schedulePortfolioTapeResume = (delay = 1800) => {
    clearPortfolioTapeResume();

    if (prefersReducedMotion) {
      setIsPortfolioTapePaused(true);
      return;
    }

    portfolioTapeResumeTimerRef.current = window.setTimeout(() => {
      setIsPortfolioTapePaused(false);
      portfolioTapeResumeTimerRef.current = null;
    }, delay);
  };

  function settlePortfolioTapeLoop() {
    const normalizedIndex =
      portfolioBlocks.length * featuredWorkCenterCopyIndex +
      wrapIndex(portfolioTapeRenderIndexRef.current, portfolioBlocks.length);

    portfolioTapeRenderIndexRef.current = normalizedIndex;
    setPortfolioTapeRenderIndex(normalizedIndex);
    setPortfolioTapeDragOffset(0);
    setIsPortfolioTapeTransitioning(false);
    featuredWorkTransitionLockRef.current = false;

    if (portfolioTapeTransitionTimerRef.current) {
      window.clearTimeout(portfolioTapeTransitionTimerRef.current);
      portfolioTapeTransitionTimerRef.current = null;
    }
  }

  function movePortfolioTapeBySteps(steps: number, source: 'manual' | 'autoplay' = 'manual') {
    if (steps === 0 || isPortfolioTapeTransitioning || featuredWorkTransitionLockRef.current) {
      return;
    }

    if (source === 'manual') {
      pausePortfolioTape();
    }

    featuredWorkTransitionLockRef.current = true;
    const nextIndex = portfolioTapeRenderIndexRef.current + steps;
    portfolioTapeRenderIndexRef.current = nextIndex;
    setPortfolioTapeDragOffset(0);
    setIsPortfolioTapeTransitioning(true);
    setPortfolioTapeRenderIndex(nextIndex);

    if (portfolioTapeTransitionTimerRef.current) {
      window.clearTimeout(portfolioTapeTransitionTimerRef.current);
    }

    portfolioTapeTransitionTimerRef.current = window.setTimeout(() => {
      settlePortfolioTapeLoop();
    }, 700);

    if (source === 'manual') {
      schedulePortfolioTapeResume(4500);
    }
  }

  const handlePortfolioTapeTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') {
      return;
    }

    settlePortfolioTapeLoop();
  };

  const scrollPortfolioTapeBy = (distance: number) => {
    const steps = Math.sign(distance) || 1;

    movePortfolioTapeBySteps(steps, 'manual');
  };

  const handlePortfolioTapeWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    pausePortfolioTape();

    const dominantDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (dominantDelta === 0) {
      return;
    }

    event.preventDefault();
    movePortfolioTapeBySteps(dominantDelta > 0 ? 1 : -1, 'manual');
  };

  const handlePortfolioTapeKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      movePortfolioTapeBySteps(1, 'manual');
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      movePortfolioTapeBySteps(-1, 'manual');
    } else if (event.key === 'Home') {
      event.preventDefault();
      pausePortfolioTape();
      const firstIndex = portfolioBlocks.length * featuredWorkCenterCopyIndex;
      portfolioTapeRenderIndexRef.current = firstIndex;
      featuredWorkTransitionLockRef.current = false;
      setIsPortfolioTapeTransitioning(false);
      setPortfolioTapeRenderIndex(firstIndex);
      setPortfolioTapeDragOffset(0);
      schedulePortfolioTapeResume(4500);
    } else if (event.key === 'End') {
      event.preventDefault();
      pausePortfolioTape();
      const lastIndex = portfolioBlocks.length * featuredWorkCenterCopyIndex + portfolioBlocks.length - 1;
      portfolioTapeRenderIndexRef.current = lastIndex;
      featuredWorkTransitionLockRef.current = false;
      setIsPortfolioTapeTransitioning(false);
      setPortfolioTapeRenderIndex(lastIndex);
      setPortfolioTapeDragOffset(0);
      schedulePortfolioTapeResume(4500);
    }
  };

  const handlePortfolioTapePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pausePortfolioTape();

    if (
      event.pointerType === 'mouse' &&
      (event.target instanceof HTMLElement && event.target.closest('a, button'))
    ) {
      return;
    }

    const viewport = portfolioTapeViewportRef.current;

    if (!viewport) {
      return;
    }

    portfolioTapeDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      currentX: event.clientX,
      dragging: true,
    };

    viewport.setPointerCapture(event.pointerId);
  };

  const handlePortfolioTapePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = portfolioTapeViewportRef.current;
    const dragState = portfolioTapeDragRef.current;

    if (!viewport || !dragState || dragState.pointerId !== event.pointerId || !dragState.dragging) {
      return;
    }

    dragState.currentX = event.clientX;
    setPortfolioTapeDragOffset(event.clientX - dragState.startX);
  };

  const finishPortfolioTapeInteraction = (pointerId?: number) => {
    const viewport = portfolioTapeViewportRef.current;
    const dragState = portfolioTapeDragRef.current;

    if (viewport && dragState && dragState.pointerId === pointerId && viewport.hasPointerCapture(pointerId!)) {
      viewport.releasePointerCapture(pointerId!);
    }

    const deltaX = dragState ? dragState.currentX - dragState.startX : 0;
    const threshold = Math.max(48, portfolioTapeItemWidth * 0.18);

    portfolioTapeDragRef.current = null;

    if (Math.abs(deltaX) >= threshold) {
      movePortfolioTapeBySteps(deltaX < 0 ? 1 : -1, 'manual');
      return;
    }

    setPortfolioTapeDragOffset(0);
    schedulePortfolioTapeResume(4500);
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

  const openBookingModal = openBooking;
  const toggleProductionPathCard = (cardId: ProductionPathId) => {
    setFlippedProductionPathId((currentCardId) => (currentCardId === cardId ? null : cardId));
  };
  const closeProductionPathCard = () => setFlippedProductionPathId(null);
  const openBookingFromProductionPath = () => {
    setFlippedProductionPathId(null);
    openBookingModal();
  };
  const handleViewPackages = () => {
    const packageBoard = packageCardsRef.current;

    if (!packageBoard) {
      openBookingModal();
      return;
    }

    const boardBounds = packageBoard.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const boardIsVisible = boardBounds.top >= 0 && boardBounds.bottom <= viewportHeight;

    if (boardIsVisible) {
      openBookingModal();
      return;
    }

    packageBoard.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
    packageBoard.focus({ preventScroll: true });
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
                <Link href="/portfolio" prefetch={false} className="focus-ring rounded-sm">
                  <Button as="span" variant="primary" className="gap-2 px-6 py-3">
                    {tHome('hero.primary')}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <button
                  type="button"
                  onClick={openBookingModal}
                  className="film-play-button film-play-button--secondary"
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

      <section id="production-packages" className="booking-package-section" aria-labelledby="booking-packages-title">
        <div className="mx-auto grid max-w-[88rem] gap-6 px-5 py-12 md:px-16 lg:grid-cols-[0.72fr_1.9fr] lg:py-16">
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

          <div
            ref={packageCardsRef}
            id="packages"
            className="booking-package-teaser-zone"
            tabIndex={-1}
            aria-labelledby="booking-packages-title"
          >
            <div className="booking-package-mobile-shell md:hidden">
              <MobileProductionPathCarousel
                flippedProductionPathId={flippedProductionPathId}
                isSectionActive={isProductionPathFanActive}
                prefersReducedMotion={Boolean(prefersReducedMotion)}
                onToggle={toggleProductionPathCard}
                onClose={closeProductionPathCard}
                onBooking={openBookingFromProductionPath}
              />
            </div>

            <div className="booking-package-teaser-grid hidden md:block">
              <motion.div
                className="booking-package-teaser-grid__motion"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -6, 0], rotate: [-0.8, 0.8, -0.8] }
                }
                transition={{ duration: 8, repeat: prefersReducedMotion ? 0 : Infinity, ease: 'easeInOut' }}
              >
                {productionPathCards.map((card, index) => (
                  <ProductionPathFanCard
                    key={card.id}
                    card={card}
                    index={index}
                    isFlipped={flippedProductionPathId === card.id}
                    isPaused={pausedProductionPathId === card.id}
                    isSectionActive={isProductionPathFanActive}
                    prefersReducedMotion={Boolean(prefersReducedMotion)}
                    onToggle={toggleProductionPathCard}
                    onPause={setPausedProductionPathId}
                    onResume={() => setPausedProductionPathId(null)}
                    onClose={closeProductionPathCard}
                    onBooking={openBookingFromProductionPath}
                  />
                ))}
              </motion.div>
              <div className="booking-package-teaser-grid__mask" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="film-light-section film-light-section--services" aria-labelledby="home-services-title">
        <div className="home-services-layout grid w-full min-w-0 gap-6 py-8 md:gap-8 md:py-10 lg:grid-cols-[38%_62%] lg:items-center lg:py-14">
          <div className="home-services-copy min-w-0">
            <div className="film-section-intro film-section-intro--services min-w-0 max-w-full">
              <p className="film-light-kicker">{tHome('services.eyebrow')}</p>
              <h2 id="home-services-title">{tHome('services.title')}</h2>
              <p>{tHome('services.intro')}</p>
              <Link href="/services" prefetch={false} className="film-text-link">
                {tCommon('exploreAllServices')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="home-services-reel min-w-0">
            <div className="film-service-tape w-full min-w-0 max-w-full" aria-label="Tripod Creative Agency services">
            <button
              type="button"
              className="film-service-tape__control film-service-tape__control--previous focus-ring"
              onClick={() => scrollServiceTapeBy(-240)}
              aria-label="Show previous service cards"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="film-service-tape__control film-service-tape__control--next focus-ring"
              onClick={() => scrollServiceTapeBy(240)}
              aria-label="Show next service cards"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <div
              ref={serviceTapeViewportRef}
              className={`film-service-tape__viewport${prefersReducedMotion ? ' film-service-tape__viewport--reduced' : ''}${isServiceTapePaused || prefersReducedMotion ? ' is-paused' : ''}`}
              tabIndex={0}
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
              onKeyDown={handleServiceTapeKeyDown}
              onScroll={normalizeServiceTapeScroll}
              onWheel={handleServiceTapeWheel}
            >
              <div ref={whatWeDoTrackRef} className="film-service-tape__track">
                {Array.from({ length: whatWeDoCopyCount }, (_, setIndex) => (
                  <div
                    key={setIndex}
                    className="film-service-tape__set"
                    aria-hidden={setIndex !== 1}
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
                              prefetch={false}
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
        </div>
      </section>

      <section className="film-portfolio-section" aria-labelledby="home-portfolio-title">
        <div className="featured-work-layout mx-auto grid w-full max-w-full min-w-0 gap-6 px-5 py-10 sm:px-6 md:max-w-7xl md:gap-7 md:px-16 md:py-12">
          <div className="featured-work-copy film-section-intro film-section-intro--dark film-section-intro--portfolio min-w-0 max-w-full">
            <p className="film-kicker">{tHome('portfolio.eyebrow')}</p>
            <h2 id="home-portfolio-title" className="featured-work-title">
              {tHome('portfolio.title')}
            </h2>
            <p>{tHome('portfolio.intro')}</p>
            <Link
              href="/portfolio"
              prefetch={false}
              className="film-text-link film-text-link--light film-portfolio-link"
            >
              {tHome('portfolio.link')}
              <ArrowRight className="film-portfolio-link__arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="featured-work-carousel-column min-w-0">
          <div className="film-portfolio-strip w-full min-w-0 max-w-full" aria-label={tHome('portfolio.title')}>
            <button
              type="button"
              className="film-portfolio-strip__control film-portfolio-strip__control--previous focus-ring"
              onClick={() => scrollPortfolioTapeBy(-240)}
              aria-label="Show previous featured work"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="film-portfolio-strip__control film-portfolio-strip__control--next focus-ring"
              onClick={() => scrollPortfolioTapeBy(240)}
              aria-label="Show next featured work"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <div
              ref={portfolioTapeViewportRef}
              className={`film-portfolio-strip__viewport${isPortfolioTapePaused || prefersReducedMotion ? ' is-paused' : ''}${prefersReducedMotion ? ' film-portfolio-strip__viewport--reduced' : ''}`}
              tabIndex={0}
              onPointerEnter={pausePortfolioTape}
              onPointerLeave={() => schedulePortfolioTapeResume(250)}
              onPointerDown={handlePortfolioTapePointerDown}
              onPointerMove={handlePortfolioTapePointerMove}
              onPointerUp={(event) => finishPortfolioTapeInteraction(event.pointerId)}
              onPointerCancel={(event) => finishPortfolioTapeInteraction(event.pointerId)}
              onTouchStart={pausePortfolioTape}
              onTouchEnd={() => schedulePortfolioTapeResume(2200)}
              onFocusCapture={pausePortfolioTape}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  schedulePortfolioTapeResume(250);
                }
              }}
              onKeyDown={handlePortfolioTapeKeyDown}
              onWheel={handlePortfolioTapeWheel}
            >
              <div
                ref={featuredWorkTrackRef}
                className="film-portfolio-track"
                style={{
                  transform: `translate3d(${portfolioTranslateX}px, 0, 0)`,
                  transition:
                    isPortfolioTapeTransitioning && portfolioTapeDragOffset === 0
                      ? 'transform 700ms cubic-bezier(0.76, 0, 0.24, 1)'
                      : 'none',
                }}
                onTransitionEnd={handlePortfolioTapeTransitionEnd}
              >
                {portfolioLoopItems.map(({ block, copyIndex, itemIndex }) => {
                      const media = sampleMedia[block.mediaKey];
                      const labels = tHome.raw(`portfolio.labels.${block.key}`) as string[];

                      return (
                        <article
                          key={`${copyIndex}-${block.key}`}
                          className="film-portfolio-card"
                          aria-hidden={copyIndex !== featuredWorkCenterCopyIndex}
                        >
                          <Image
                            src={media.src}
                            alt={tCommon(`media.${media.key}`)}
                            fill
                            sizes="(max-width: 680px) 72vw, (max-width: 1024px) 34vw, 20vw"
                            className="object-cover"
                          />
                          <div className="film-portfolio-card__overlay">
                            <span className="film-portfolio-card__frame">
                              FRAME {String(itemIndex + 1).padStart(2, '0')}
                            </span>
                            <p>{labels[0]}</p>
                            <h3>{labels[1]}</h3>
                          </div>
                        </article>
                      );
                    })}
              </div>
            </div>
          </div>
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
            <Button
              type="button"
              onClick={openBookingModal}
              variant="primary"
              className="gap-2 px-6 py-3"
            >
              {tHome('cta.button')}
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </Button>
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
    </main>
  );
}
