export type PortfolioPreviewKey =
  | 'project1'
  | 'project2'
  | 'project3'
  | 'project4';

export type PortfolioCategoryKey =
  | 'all'
  | 'branding'
  | 'graphics'
  | 'printing'
  | 'photography'
  | 'video'
  | 'events'
  | 'music'
  | 'digitalCampaigns';

export type PortfolioAspectRatio =
  | 'aspect-[4/5]'
  | 'aspect-[1/1]'
  | 'aspect-[16/9]';

export interface PortfolioItem {
  key: string;
  previewKey?: PortfolioPreviewKey;
  categoryKey: Exclude<PortfolioCategoryKey, 'all'>;
  gradient: string;
  aspectRatio: PortfolioAspectRatio;
  tagKeys: string[];
  placeholderType: 'image' | 'video';
  featured?: boolean;
}

export const portfolioCategories: PortfolioCategoryKey[] = [
  'all',
  'branding',
  'graphics',
  'printing',
  'photography',
  'video',
  'events',
  'music',
  'digitalCampaigns',
];

export const portfolioData: PortfolioItem[] = [
  {
    key: 'project1',
    previewKey: 'project1',
    categoryKey: 'branding',
    gradient: 'from-orange-500/20 via-yellow-500/10 to-transparent',
    aspectRatio: 'aspect-[4/5]',
    tagKeys: ['identity', 'artDirection'],
    placeholderType: 'image',
    featured: true,
  },
  {
    key: 'project2',
    previewKey: 'project2',
    categoryKey: 'video',
    gradient: 'from-amber-500/25 via-red-500/15 to-transparent',
    aspectRatio: 'aspect-[16/9]',
    tagKeys: ['videoEdit', 'storyboard'],
    placeholderType: 'video',
  },
  {
    key: 'project3',
    previewKey: 'project3',
    categoryKey: 'digitalCampaigns',
    gradient: 'from-yellow-400/20 via-orange-600/10 to-transparent',
    aspectRatio: 'aspect-[1/1]',
    tagKeys: ['launchAssets', 'contentSystem'],
    placeholderType: 'image',
  },
  {
    key: 'project4',
    previewKey: 'project4',
    categoryKey: 'printing',
    gradient: 'from-primary/20 via-secondary-container/10 to-transparent',
    aspectRatio: 'aspect-[4/5]',
    tagKeys: ['printLayout', 'productionPrep'],
    placeholderType: 'image',
  },
  {
    key: 'project5',
    categoryKey: 'graphics',
    gradient: 'from-orange-400/20 via-amber-500/10 to-transparent',
    aspectRatio: 'aspect-[1/1]',
    tagKeys: ['socialDesign', 'campaignGraphics'],
    placeholderType: 'image',
  },
  {
    key: 'project6',
    categoryKey: 'photography',
    gradient: 'from-yellow-300/20 via-orange-500/10 to-transparent',
    aspectRatio: 'aspect-[4/5]',
    tagKeys: ['brandShoot', 'productFrames'],
    placeholderType: 'image',
  },
  {
    key: 'project7',
    categoryKey: 'events',
    gradient: 'from-orange-600/20 via-yellow-500/10 to-transparent',
    aspectRatio: 'aspect-[16/9]',
    tagKeys: ['eventCoverage', 'recapAssets'],
    placeholderType: 'video',
  },
  {
    key: 'project8',
    categoryKey: 'music',
    gradient: 'from-yellow-500/20 via-orange-700/10 to-transparent',
    aspectRatio: 'aspect-[1/1]',
    tagKeys: ['coverArt', 'studioVisuals'],
    placeholderType: 'image',
  },
  {
    key: 'project9',
    categoryKey: 'branding',
    gradient: 'from-orange-500/20 via-primary/10 to-transparent',
    aspectRatio: 'aspect-[16/9]',
    tagKeys: ['brandSystem', 'launchDeck'],
    placeholderType: 'image',
  },
];
