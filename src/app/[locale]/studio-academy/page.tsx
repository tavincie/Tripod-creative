import React from 'react';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { StudioAcademyExperience } from '@/components/studio-academy/StudioAcademyExperience';
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
  const tSeo = await getTranslations({ locale, namespace: 'Seo.studioAcademy' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const title = tSeo('title');
  const description = tSeo('description');
  const canonical = `${siteUrl}/${locale}/studio-academy`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        'en-US': `${siteUrl}/en/studio-academy`,
        'sw-TZ': `${siteUrl}/sw/studio-academy`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Tripod Creative Agency',
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

export default async function StudioAcademyPage() {
  const locale = await getLocale();
  const tContact = await getTranslations({ locale, namespace: 'ContactPage' });
  const whatsappNumber = getWhatsAppNumber();
  const fallbackMessage = tContact('fallbackMessage');

  const serviceUrls = Object.fromEntries(
    ['recordingSession', 'musicProduction', 'pianoTraining', 'guitarTraining', 'drumTraining', 'vocalTraining', 'generalInquiry'].map((key) => [
      key,
      createWhatsAppUrl(whatsappNumber, fallbackMessage),
    ]),
  ) as Record<string, string>;

  return <StudioAcademyExperience serviceUrls={serviceUrls} />;
}
