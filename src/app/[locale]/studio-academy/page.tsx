import React from 'react';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { StudioAcademyExperience } from '@/components/studio-academy/StudioAcademyExperience';

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
      ? 'Studio na Chuo cha Tripod Creative | Utayarishaji wa Muziki, Recording na Mafunzo'
      : 'Tripod Creative Studio & Academy | Music Production, Recording & Instrument Training';
  const description =
    locale === 'sw'
      ? 'Chunguza studio na chuo cha Tripod Creative kwa recording support, music production, vocal recording, beat making, na mafunzo ya ala.'
      : 'Explore Tripod Creative Studio & Academy for recording support, music production, vocal recording, beat making, and instrument training.';
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

export default async function StudioAcademyPage() {
  const locale = await getLocale();
  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000'
  ).replace(/[^0-9]/g, '');

  const messages =
    locale === 'sw'
      ? {
          recordingSession:
            'Habari Tripod! Ningependa kuweka nafasi ya recording session.',
          musicProduction:
            'Habari Tripod! Ningependa kujadili huduma za music production.',
          pianoTraining:
            'Habari Tripod! Ningependa kupata maelezo kuhusu mafunzo ya piano.',
          guitarTraining:
            'Habari Tripod! Ningependa kupata maelezo kuhusu mafunzo ya guitar.',
          drumTraining:
            'Habari Tripod! Ningependa kupata maelezo kuhusu mafunzo ya drums.',
          vocalTraining:
            'Habari Tripod! Ningependa kupata maelezo kuhusu mafunzo ya vocals.',
          generalInquiry:
            'Habari Tripod! Ninaomba maelezo ya jumla kuhusu studio na chuo chenu.',
        }
      : {
          recordingSession:
            'Hello Tripod! I would like to book a recording session.',
          musicProduction:
            'Hello Tripod! I would like to discuss music production services.',
          pianoTraining:
            'Hello Tripod! I would like to ask about piano training.',
          guitarTraining:
            'Hello Tripod! I would like to ask about guitar training.',
          drumTraining:
            'Hello Tripod! I would like to ask about drum training.',
          vocalTraining:
            'Hello Tripod! I would like to ask about vocal training.',
          generalInquiry:
            'Hello Tripod! I would like to ask about your studio and academy services.',
        };

  const serviceUrls = Object.fromEntries(
    Object.entries(messages).map(([key, message]) => [
      key,
      createWhatsAppUrl(whatsappNumber, message),
    ]),
  ) as Record<string, string>;

  return <StudioAcademyExperience serviceUrls={serviceUrls} />;
}
