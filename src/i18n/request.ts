import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import { getLocaleMessages, type AppLocale } from './messages';

function isValidLocale(locale: string): locale is 'en' | 'sw' {
  return (routing.locales as readonly string[]).includes(locale);
}

export default getRequestConfig(async ({requestLocale}) => {
  // This will typically correspond to the [locale] segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !isValidLocale(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: getLocaleMessages(locale as AppLocale)
  };
});
