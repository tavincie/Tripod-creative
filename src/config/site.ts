import { BOOKING_WHATSAPP_NUMBER } from '@/data/bookingPackages';

export const siteConfig = {
  name: 'Tripod Creatives',
  whatsappNumber: BOOKING_WHATSAPP_NUMBER,
  instagramUrl: 'https://www.instagram.com/tripodcreative_/?hl=en',
  email: '',
  phone: '',
  location: '',
};

export function getWhatsAppNumber() {
  return siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
}
