const whatsappNumber = '255689430743';
const productionFallbackUrl = 'https://tripod-creative.vercel.app';

export const siteConfig = {
  name: 'Tripod Creative Agency',
  url: productionFallbackUrl,
  whatsappNumber,
  instagramUrl: 'https://www.instagram.com/tripodcreative_/?hl=en',
  instagramHandle: '@tripodcreative_',
  email: '',
  phone: '+255 689 430 743',
  location: 'Dar es Salaam, Tanzania',
};

export function getWhatsAppNumber() {
  return siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
}

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercelDeploymentUrl = process.env.VERCEL_URL;
  const rawUrl =
    explicitUrl || vercelProductionUrl || vercelDeploymentUrl || siteConfig.url;
  const url = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;

  return url.replace(/\/$/, '');
}
