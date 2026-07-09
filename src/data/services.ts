export interface ServiceItem {
  key: string;
  iconName: 'Layers' | 'Compass' | 'LineChart' | 'Camera' | 'Wind' | 'Music';
}

export const servicesData: ServiceItem[] = [
  { key: 'branding', iconName: 'Layers' },
  { key: 'production', iconName: 'Compass' },
  { key: 'marketing', iconName: 'LineChart' },
  { key: 'photography', iconName: 'Camera' },
  { key: 'drone', iconName: 'Wind' },
  { key: 'music', iconName: 'Music' },
];
