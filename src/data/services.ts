export type ServiceIconName =
  | 'Layers'
  | 'Compass'
  | 'Printer'
  | 'LineChart'
  | 'Camera'
  | 'Music'
  | 'Code';

export interface ServiceItem {
  key: string;
  iconName: ServiceIconName;
}

export interface ServiceProcessStep {
  key: string;
}

export const servicesData: ServiceItem[] = [
  { key: 'brandStrategy', iconName: 'Layers' },
  { key: 'creativeDesign', iconName: 'Compass' },
  { key: 'printingProduction', iconName: 'Printer' },
  { key: 'digitalMarketing', iconName: 'LineChart' },
  { key: 'photographyVideography', iconName: 'Camera' },
  { key: 'musicStudioAcademy', iconName: 'Music' },
  { key: 'webAppDevelopment', iconName: 'Code' },
];

export const coreServices = servicesData.slice(0, 6);

export const serviceProcessSteps: ServiceProcessStep[] = [
  { key: 'discover' },
  { key: 'shape' },
  { key: 'produce' },
  { key: 'deliver' },
];
