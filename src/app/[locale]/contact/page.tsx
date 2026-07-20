import React from 'react';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { ContactBookingExperience } from '@/components/contact/ContactBookingExperience';

function createWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const title =
    locale === 'sw'
      ? 'Wasiliana na Tripod Creative | Book Design, Production, Marketing na Studio'
      : 'Contact Tripod Creative | Book Design, Production, Marketing & Studio Services';
  const description =
    locale === 'sw'
      ? 'Wasiliana na Tripod Creative kuweka nafasi ya design, production, marketing, studio, web, na huduma nyingine za ubunifu kupitia form au WhatsApp.'
      : 'Contact Tripod Creative to book design, production, marketing, studio, web, and other creative services through the booking form or WhatsApp.';
  const canonical = `${siteUrl}/${locale}/contact`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        'en-US': `${siteUrl}/en/contact`,
        'sw-TZ': `${siteUrl}/sw/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Tripod Creative',
      locale: locale === 'sw' ? 'sw_TZ' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000'
  ).replace(/[^0-9]/g, '');

  const message =
    locale === 'sw'
      ? 'Habari Tripod Creative. Ningependa kuweka nafasi ya huduma ya ubunifu.'
      : 'Hello Tripod Creative. I would like to book a creative service.';

  return (
    <ContactBookingExperience
      whatsappNumber={whatsappNumber}
      fallbackBookingUrl={createWhatsAppUrl(whatsappNumber, message)}
    />
  );
}
