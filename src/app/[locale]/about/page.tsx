import React from 'react';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { AboutExperience } from '@/components/about/AboutExperience';

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
      ? 'Kuhusu Tripod Creative | Kampuni ya Multimedia Production na Ubunifu'
      : 'About Tripod Creative | Multimedia Production & Creative Agency';
  const description =
    locale === 'sw'
      ? 'Fahamu Tripod Creative kama creative agency inayounganisha multimedia production, brand storytelling, visual communication, na practical creative execution.'
      : 'Learn about Tripod Creative as a creative agency connecting multimedia production, brand storytelling, visual communication, and practical creative execution.';
  const canonical = `${siteUrl}/${locale}/about`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        'en-US': `${siteUrl}/en/about`,
        'sw-TZ': `${siteUrl}/sw/about`,
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

export default async function AboutPage() {
  const locale = await getLocale();
  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000'
  ).replace(/[^0-9]/g, '');

  const message =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kujifunza zaidi kuhusu timu na njia yenu ya kazi.'
      : 'Hello Tripod! I would like to learn more about your team culture and creative approach.';

  return (
    <AboutExperience
      ctaUrl={createWhatsAppUrl(whatsappNumber, message)}
    />
  );
}
