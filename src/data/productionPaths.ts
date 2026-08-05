import type { BookingPackageId, BookingServiceId } from './bookingPackages';

export type ProductionPathId = 'wedding' | 'studio' | 'brand' | 'custom';

export interface ProductionPathCard {
  id: ProductionPathId;
  shortTitleKey: string;
  fullTitleKey: string;
  summaryKey: string;
  priceKey: string;
  highlightsKey: string;
  imagePaths: readonly string[];
  cycleIntervalMs: number;
  initialDelayMs: number;
  bookingServiceId: BookingServiceId;
  bookingPackageId: BookingPackageId;
}

const imageBasePath = '/images/services/fan';

export const productionPathCards = [
  {
    id: 'wedding',
    shortTitleKey: 'wedding.shortTitle',
    fullTitleKey: 'wedding.fullTitle',
    summaryKey: 'wedding.summary',
    priceKey: 'wedding.price',
    highlightsKey: 'wedding.highlights',
    imagePaths: [
      `${imageBasePath}/wedding/couple-portrait.jpg`,
      `${imageBasePath}/wedding/ceremony-aisle.jpg`,
      `${imageBasePath}/wedding/reception-dance.jpg`,
      `${imageBasePath}/wedding/wedding-details.jpg`,
      `${imageBasePath}/wedding/event-coverage.jpg`,
    ],
    cycleIntervalMs: 620,
    initialDelayMs: 0,
    bookingServiceId: 'weddingCoverage',
    bookingPackageId: 'weddingBronze',
  },
  {
    id: 'studio',
    shortTitleKey: 'studio.shortTitle',
    fullTitleKey: 'studio.fullTitle',
    summaryKey: 'studio.summary',
    priceKey: 'studio.price',
    highlightsKey: 'studio.highlights',
    imagePaths: [
      `${imageBasePath}/studio/portrait-camera.jpg`,
      `${imageBasePath}/studio/studio-microphone.jpg`,
      `${imageBasePath}/studio/music-workstation.jpg`,
      `${imageBasePath}/studio/editing-workstation.jpg`,
      `${imageBasePath}/studio/production-lights.jpg`,
    ],
    cycleIntervalMs: 530,
    initialDelayMs: 120,
    bookingServiceId: 'audioRecording',
    bookingPackageId: 'audioVoiceover',
  },
  {
    id: 'brand',
    shortTitleKey: 'brand.shortTitle',
    fullTitleKey: 'brand.fullTitle',
    summaryKey: 'brand.summary',
    priceKey: 'brand.price',
    highlightsKey: 'brand.highlights',
    imagePaths: [
      `${imageBasePath}/brand/brand-mockups.jpg`,
      `${imageBasePath}/brand/print-production.jpg`,
      `${imageBasePath}/brand/campaign-dashboard.jpg`,
      `${imageBasePath}/brand/design-workspace.jpg`,
      `${imageBasePath}/brand/creative-team.jpg`,
    ],
    cycleIntervalMs: 690,
    initialDelayMs: 240,
    bookingServiceId: 'graphicDesign',
    bookingPackageId: 'graphicSingleDesign',
  },
  {
    id: 'custom',
    shortTitleKey: 'custom.shortTitle',
    fullTitleKey: 'custom.fullTitle',
    summaryKey: 'custom.summary',
    priceKey: 'custom.price',
    highlightsKey: 'custom.highlights',
    imagePaths: [
      `${imageBasePath}/custom/camera-operator.jpg`,
      `${imageBasePath}/custom/drone-production.jpg`,
      `${imageBasePath}/custom/live-production.jpg`,
      `${imageBasePath}/custom/editing-timeline.jpg`,
      `${imageBasePath}/custom/video-production.jpg`,
    ],
    cycleIntervalMs: 580,
    initialDelayMs: 360,
    bookingServiceId: 'customProject',
    bookingPackageId: 'customQuote',
  },
] as const satisfies readonly ProductionPathCard[];
