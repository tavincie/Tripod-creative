import enAbout from '../../messages/en/about.json';
import enBooking from '../../messages/en/booking.json';
import enCommon from '../../messages/en/common.json';
import enContact from '../../messages/en/contact.json';
import enFooter from '../../messages/en/footer.json';
import enHome from '../../messages/en/home.json';
import enNavigation from '../../messages/en/navigation.json';
import enPortfolio from '../../messages/en/portfolio.json';
import enSeo from '../../messages/en/seo.json';
import enServices from '../../messages/en/services.json';
import enStudioAcademy from '../../messages/en/studio-academy.json';
import swAbout from '../../messages/sw/about.json';
import swBooking from '../../messages/sw/booking.json';
import swCommon from '../../messages/sw/common.json';
import swContact from '../../messages/sw/contact.json';
import swFooter from '../../messages/sw/footer.json';
import swHome from '../../messages/sw/home.json';
import swNavigation from '../../messages/sw/navigation.json';
import swPortfolio from '../../messages/sw/portfolio.json';
import swSeo from '../../messages/sw/seo.json';
import swServices from '../../messages/sw/services.json';
import swStudioAcademy from '../../messages/sw/studio-academy.json';

import { routing } from './routing';

export type AppLocale = (typeof routing.locales)[number];

const localeMessages = {
  en: {
    Navigation: enNavigation,
    Common: enCommon,
    Footer: enFooter,
    Booking: enBooking,
    HomePage: enHome,
    ServicesPage: enServices,
    PortfolioPage: enPortfolio,
    StudioAcademyPage: enStudioAcademy,
    AboutPage: enAbout,
    ContactPage: enContact,
    Seo: enSeo,
  },
  sw: {
    Navigation: swNavigation,
    Common: swCommon,
    Footer: swFooter,
    Booking: swBooking,
    HomePage: swHome,
    ServicesPage: swServices,
    PortfolioPage: swPortfolio,
    StudioAcademyPage: swStudioAcademy,
    AboutPage: swAbout,
    ContactPage: swContact,
    Seo: swSeo,
  },
} as const;

export function getLocaleMessages(locale: AppLocale) {
  return localeMessages[locale];
}
