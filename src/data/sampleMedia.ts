// Shared visual references used across public marketing pages.
// Keep media references centralized here so content updates stay coordinated.

export interface SampleMediaItem {
  key: string;
  src: string;
  altKey: string;
  width: number;
  height: number;
}

export const sampleMedia: Record<string, SampleMediaItem> = {
  cameraOperator: {
    key: 'cameraOperator',
    src: '/images/services/fan/custom/camera-operator.jpg',
    altKey: 'media.cameraOperator',
    width: 1200,
    height: 900,
  },
  videoProductionSetup: {
    key: 'videoProductionSetup',
    src: '/images/services/fan/custom/video-production.jpg',
    altKey: 'media.videoProductionSetup',
    width: 1200,
    height: 900,
  },
  photographerShooting: {
    key: 'photographerShooting',
    src: '/images/services/fan/studio/portrait-camera.jpg',
    altKey: 'media.photographerShooting',
    width: 1200,
    height: 900,
  },
  droneProduction: {
    key: 'droneProduction',
    src: '/images/services/fan/custom/drone-production.jpg',
    altKey: 'media.droneProduction',
    width: 1200,
    height: 900,
  },
  liveStreamingSetup: {
    key: 'liveStreamingSetup',
    src: '/images/services/fan/custom/live-production.jpg',
    altKey: 'media.liveStreamingSetup',
    width: 1200,
    height: 900,
  },
  editingTimeline: {
    key: 'editingTimeline',
    src: '/images/services/fan/custom/editing-timeline.jpg',
    altKey: 'media.editingTimeline',
    width: 1200,
    height: 900,
  },
  graphicDesignerWorkspace: {
    key: 'graphicDesignerWorkspace',
    src: '/images/services/fan/brand/design-workspace.jpg',
    altKey: 'media.graphicDesignerWorkspace',
    width: 1200,
    height: 900,
  },
  printProduction: {
    key: 'printProduction',
    src: '/images/services/fan/brand/print-production.jpg',
    altKey: 'media.printProduction',
    width: 1200,
    height: 900,
  },
  brandingMockups: {
    key: 'brandingMockups',
    src: '/images/services/fan/brand/brand-mockups.jpg',
    altKey: 'media.brandingMockups',
    width: 1200,
    height: 900,
  },
  studioMicrophone: {
    key: 'studioMicrophone',
    src: '/images/services/fan/studio/studio-microphone.jpg',
    altKey: 'media.studioMicrophone',
    width: 1200,
    height: 900,
  },
  musicProducerWorkstation: {
    key: 'musicProducerWorkstation',
    src: '/images/services/fan/studio/music-workstation.jpg',
    altKey: 'media.musicProducerWorkstation',
    width: 1200,
    height: 900,
  },
  instrumentTraining: {
    key: 'instrumentTraining',
    src: '/images/services/fan/studio/production-lights.jpg',
    altKey: 'media.instrumentTraining',
    width: 1200,
    height: 900,
  },
  eventPhotography: {
    key: 'eventPhotography',
    src: '/images/services/fan/wedding/event-coverage.jpg',
    altKey: 'media.eventPhotography',
    width: 1200,
    height: 900,
  },
  socialCampaignVisuals: {
    key: 'socialCampaignVisuals',
    src: '/images/services/fan/brand/campaign-dashboard.jpg',
    altKey: 'media.socialCampaignVisuals',
    width: 1200,
    height: 900,
  },
  creativeTeamBts: {
    key: 'creativeTeamBts',
    src: '/images/services/fan/brand/creative-team.jpg',
    altKey: 'media.creativeTeamBts',
    width: 1200,
    height: 900,
  },
};

export const homepageHeroMediaKeys = [
  'cameraOperator',
  'studioMicrophone',
  'graphicDesignerWorkspace',
  'printProduction',
  'editingTimeline',
  'brandingMockups',
] as const;

export const homepageServiceMediaKeys = [
  'brandingMockups',
  'graphicDesignerWorkspace',
  'printProduction',
  'socialCampaignVisuals',
  'photographerShooting',
  'cameraOperator',
  'droneProduction',
  'liveStreamingSetup',
  'editingTimeline',
  'musicProducerWorkstation',
  'studioMicrophone',
  'instrumentTraining',
  'videoProductionSetup',
] as const;

export const homepageArchiveMediaKeys = [
  'creativeTeamBts',
  'brandingMockups',
  'printProduction',
  'editingTimeline',
  'socialCampaignVisuals',
  'eventPhotography',
] as const;
