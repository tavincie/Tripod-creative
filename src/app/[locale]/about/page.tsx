import React from 'react';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { AboutExperience } from '@/components/about/AboutExperience';
import { getWhatsAppNumber } from '@/config/site';

function createWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: 'Seo.about' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const title = tSeo('title');
  const description = tSeo('description');
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
  const tAbout = await getTranslations({ locale, namespace: 'AboutPage' });
  const whatsappNumber = getWhatsAppNumber();

  return (
    <AboutExperience
      ctaUrl={createWhatsAppUrl(whatsappNumber, tAbout('whatsappMessage'))}
    />
  );
}
