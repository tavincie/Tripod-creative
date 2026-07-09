export interface PortfolioItem {
  key: 'project1' | 'project2' | 'project3' | 'project4';
  categoryKey: string;
  gradient: string;
  aspectRatio: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    key: 'project1',
    categoryKey: 'branding',
    gradient: 'from-orange-500/20 via-yellow-500/10 to-transparent',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    key: 'project2',
    categoryKey: 'video',
    gradient: 'from-amber-500/25 via-red-500/15 to-transparent',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    key: 'project3',
    categoryKey: 'production',
    gradient: 'from-yellow-400/20 via-orange-600/10 to-transparent',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    key: 'project4',
    categoryKey: 'branding',
    gradient: 'from-primary/20 via-secondary-container/10 to-transparent',
    aspectRatio: 'aspect-[4/5]',
  },
];
