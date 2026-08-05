export const BOOKING_WHATSAPP_NUMBER = '255689430743';
export const BOOKING_WHATSAPP_URL = `https://wa.me/${BOOKING_WHATSAPP_NUMBER}`;

export const bookingServiceIds = [
  'weddingCoverage',
  'graphicDesign',
  'branding',
  'printing',
  'photography',
  'videography',
  'droneCoverage',
  'liveStreaming',
  'audioRecording',
  'musicProduction',
  'podcastRecording',
  'digitalMarketing',
  'instrumentTraining',
  'customProject',
] as const;

export type BookingServiceId = (typeof bookingServiceIds)[number];

export const budgetRangeIds = [
  'below300',
  'range300To800',
  'range800To1500',
  'range1500To2500',
  'above2500',
  'customNotSure',
] as const;

export type BudgetRangeId = (typeof budgetRangeIds)[number];

export type BookingPrice =
  | { kind: 'fixed'; amount: string }
  | { kind: 'from'; amount: string }
  | { kind: 'each'; amount: string }
  | { kind: 'perHour'; amount: string }
  | { kind: 'perYear'; amount: string }
  | { kind: 'fromPerCard'; amount: string }
  | { kind: 'custom' };

export interface BookingPackage {
  id: string;
  price: BookingPrice;
  includeIds?: readonly string[];
}

export const bookingPackagesByService = {
  weddingCoverage: [
    {
      id: 'weddingBronze',
      price: { kind: 'fixed', amount: 'TZS 800,000' },
      includeIds: [
        'album100PrintedPictures',
        'fullVideoCoverage',
        'softCopies200',
        'a3WoodFrame',
        'flashDiskVideoPhotos',
        'twoHdTelevisions',
        'preWeddingCoverage',
        'digitalCardFrom1500',
      ],
    },
    {
      id: 'weddingSilver',
      price: { kind: 'fixed', amount: 'TZS 1,500,000' },
      includeIds: [
        'photobookPrintedPackage',
        'fullVideoCoverage',
        'oneMinuteHighlight',
        'unlimitedSoftCopies',
        'a2WoodFrame',
        'twoFlashDisks',
        'fourLiveScreens',
        'preWeddingCoverage',
        'droneCoverage',
        'digitalCardsFrom1500',
        'oneYearOnlineStorage',
      ],
    },
    {
      id: 'weddingGold',
      price: { kind: 'fixed', amount: 'TZS 2,200,000' },
      includeIds: [
        'photobookPrintedPackage',
        'fullVideoCoverage',
        'oneToFiveMinuteHighlight',
        'unlimitedSoftCopies',
        'a1WoodFrame',
        'fourFlashDisks',
        'sixLiveScreens',
        'preWeddingCoverage',
        'documentary',
        'droneCoverage',
        'booth360',
        'digitalCardsFrom2200',
        'twoYearsOnlineStorage',
      ],
    },
    { id: 'weddingCustom', price: { kind: 'custom' } },
  ],
  graphicDesign: [
    { id: 'graphicSingleDesign', price: { kind: 'fixed', amount: 'TZS 50,000' } },
    { id: 'graphicSocialMediaPack', price: { kind: 'fixed', amount: 'TZS 180,000' } },
    { id: 'graphicCampaignDesignPack', price: { kind: 'fixed', amount: 'TZS 350,000' } },
  ],
  branding: [
    { id: 'brandingLogoStarter', price: { kind: 'fixed', amount: 'TZS 250,000' } },
    { id: 'brandingIdentityKit', price: { kind: 'fixed', amount: 'TZS 600,000' } },
    { id: 'brandingFullLaunchKit', price: { kind: 'fixed', amount: 'TZS 1,200,000' } },
  ],
  printing: [
    { id: 'printingStarter', price: { kind: 'from', amount: 'TZS 150,000' } },
    { id: 'printingEventKit', price: { kind: 'from', amount: 'TZS 500,000' } },
    { id: 'printingFullProduction', price: { kind: 'from', amount: 'TZS 1,000,000' } },
  ],
  photography: [
    { id: 'photographyStudioPortrait', price: { kind: 'fixed', amount: 'TZS 150,000' } },
    { id: 'photographyEvent', price: { kind: 'from', amount: 'TZS 500,000' } },
    { id: 'photographyCommercial', price: { kind: 'from', amount: 'TZS 700,000' } },
  ],
  videography: [
    { id: 'videographyShortForm', price: { kind: 'fixed', amount: 'TZS 500,000' } },
    { id: 'videographyEventCoverage', price: { kind: 'from', amount: 'TZS 800,000' } },
    { id: 'videographyCommercialDocumentary', price: { kind: 'from', amount: 'TZS 1,500,000' } },
  ],
  droneCoverage: [
    { id: 'droneBasicAerial', price: { kind: 'fixed', amount: 'TZS 300,000' } },
    { id: 'droneEventAddon', price: { kind: 'fixed', amount: 'TZS 400,000' } },
    { id: 'droneFullCoverage', price: { kind: 'fixed', amount: 'TZS 700,000' } },
  ],
  liveStreaming: [
    { id: 'liveStreamingBasic', price: { kind: 'fixed', amount: 'TZS 600,000' } },
    { id: 'liveStreamingStandard', price: { kind: 'fixed', amount: 'TZS 1,200,000' } },
    { id: 'liveStreamingPremium', price: { kind: 'fixed', amount: 'TZS 2,000,000' } },
  ],
  audioRecording: [
    { id: 'audioVoiceover', price: { kind: 'fixed', amount: 'TZS 100,000' } },
    { id: 'audioStudioSession', price: { kind: 'fixed', amount: 'TZS 150,000' } },
    { id: 'audioFullProduction', price: { kind: 'fixed', amount: 'TZS 300,000' } },
  ],
  musicProduction: [
    { id: 'musicBeatProduction', price: { kind: 'fixed', amount: 'TZS 300,000' } },
    { id: 'musicRecordingMixing', price: { kind: 'fixed', amount: 'TZS 500,000' } },
    { id: 'musicFullProduction', price: { kind: 'fixed', amount: 'TZS 800,000' } },
  ],
  podcastRecording: [
    { id: 'podcastStarter', price: { kind: 'fixed', amount: 'TZS 250,000' } },
    { id: 'podcastProduction', price: { kind: 'fixed', amount: 'TZS 450,000' } },
    { id: 'podcastMonthlyPack', price: { kind: 'fixed', amount: 'TZS 1,200,000' } },
  ],
  digitalMarketing: [
    { id: 'digitalSocialPromo', price: { kind: 'fixed', amount: 'TZS 300,000' } },
    { id: 'digitalCampaignContent', price: { kind: 'fixed', amount: 'TZS 700,000' } },
    { id: 'digitalMonthlyCampaign', price: { kind: 'fixed', amount: 'TZS 1,500,000' } },
  ],
  instrumentTraining: [
    { id: 'trainingSinglePractice', price: { kind: 'fixed', amount: 'TZS 50,000' } },
    { id: 'trainingMonthlyPack', price: { kind: 'fixed', amount: 'TZS 250,000' } },
    { id: 'trainingPrivateIntensive', price: { kind: 'fixed', amount: 'TZS 500,000' } },
  ],
  customProject: [
    { id: 'customQuote', price: { kind: 'custom' } },
  ],
} as const satisfies Record<BookingServiceId, readonly BookingPackage[]>;

export type BookingPackageId =
  (typeof bookingPackagesByService)[BookingServiceId][number]['id'];

export const serviceNoteIdsByService = {
  printing: 'printing',
  digitalMarketing: 'digitalMarketing',
} as const satisfies Partial<Record<BookingServiceId, string>>;

export const bookingAddOns = [
  { id: 'droneCoverage', price: { kind: 'fixed', amount: 'TZS 400,000' } },
  { id: 'booth360', price: { kind: 'fixed', amount: 'TZS 500,000' } },
  { id: 'documentaryEdit', price: { kind: 'fixed', amount: 'TZS 500,000' } },
  { id: 'extraLiveScreen', price: { kind: 'each', amount: 'TZS 150,000' } },
  { id: 'extraFlashDisk', price: { kind: 'each', amount: 'TZS 30,000' } },
  { id: 'extraPhotoFrame', price: { kind: 'from', amount: 'TZS 50,000' } },
  { id: 'extraHighlightVideo', price: { kind: 'fixed', amount: 'TZS 250,000' } },
  { id: 'sameDayEdit', price: { kind: 'fixed', amount: 'TZS 300,000' } },
  { id: 'livestreamSetupAddon', price: { kind: 'from', amount: 'TZS 600,000' } },
  { id: 'extraShootingHour', price: { kind: 'perHour', amount: 'TZS 100,000' } },
  { id: 'onlineStorageExtension', price: { kind: 'perYear', amount: 'TZS 100,000' } },
  { id: 'digitalInvitationCard', price: { kind: 'fromPerCard', amount: 'TZS 1,500' } },
  { id: 'printedAlbumUpgrade', price: { kind: 'from', amount: 'TZS 150,000' } },
] as const;

export type BookingAddOnId = (typeof bookingAddOns)[number]['id'];

export const paymentPolicyIds = [
  'deposit',
  'balance',
  'smallServices',
  'productionCosts',
  'finalDetails',
] as const;

export const packageTeaserIds = [
  'weddingPackages',
  'studioSessions',
  'brandCampaigns',
  'customProduction',
] as const;

export type PackageTeaserId = (typeof packageTeaserIds)[number];
