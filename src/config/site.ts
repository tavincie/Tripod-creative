const whatsappNumber = '255689430743';

export const siteConfig = {
  name: 'Tripod Creative Agency',
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
