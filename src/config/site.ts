export const siteConfig = {
  name: 'Tripod Creatives',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000',
  instagramUrl: 'https://www.instagram.com/tripodcreative_/?hl=en',
  youtubeUrl: '',
  email: '',
  phone: '',
  location: '',
};

export function getWhatsAppNumber() {
  return siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
}
