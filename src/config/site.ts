const whatsappNumber = '255689430743';

export const siteConfig = {
  name: 'Tripod Creatives',
  whatsappNumber,
  instagramUrl: 'https://www.instagram.com/tripodcreative_/?hl=en',
  email: '',
  phone: '',
  location: '',
};

export function getWhatsAppNumber() {
  return siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
}
