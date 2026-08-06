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
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.cameraOperator',
    width: 1200,
    height: 900,
  },
  videoProductionSetup: {
    key: 'videoProductionSetup',
    src: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.videoProductionSetup',
    width: 1200,
    height: 900,
  },
  photographerShooting: {
    key: 'photographerShooting',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.photographerShooting',
    width: 1200,
    height: 900,
  },
  droneProduction: {
    key: 'droneProduction',
    src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.droneProduction',
    width: 1200,
    height: 900,
  },
  liveStreamingSetup: {
    key: 'liveStreamingSetup',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.liveStreamingSetup',
    width: 1200,
    height: 900,
  },
  editingTimeline: {
    key: 'editingTimeline',
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.editingTimeline',
    width: 1200,
    height: 900,
  },
  graphicDesignerWorkspace: {
    key: 'graphicDesignerWorkspace',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.graphicDesignerWorkspace',
    width: 1200,
    height: 900,
  },
  printProduction: {
    key: 'printProduction',
    src: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.printProduction',
    width: 1200,
    height: 900,
  },
  brandingMockups: {
    key: 'brandingMockups',
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.brandingMockups',
    width: 1200,
    height: 900,
  },
  studioMicrophone: {
    key: 'studioMicrophone',
    src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.studioMicrophone',
    width: 1200,
    height: 900,
  },
  musicProducerWorkstation: {
    key: 'musicProducerWorkstation',
    src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.musicProducerWorkstation',
    width: 1200,
    height: 900,
  },
  instrumentTraining: {
    key: 'instrumentTraining',
    src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.instrumentTraining',
    width: 1200,
    height: 900,
  },
  eventPhotography: {
    key: 'eventPhotography',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.eventPhotography',
    width: 1200,
    height: 900,
  },
  socialCampaignVisuals: {
    key: 'socialCampaignVisuals',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    altKey: 'media.socialCampaignVisuals',
    width: 1200,
    height: 900,
  },
  creativeTeamBts: {
    key: 'creativeTeamBts',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
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
