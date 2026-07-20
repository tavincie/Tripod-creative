import React from 'react';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { PortfolioExperience } from '@/components/portfolio/PortfolioExperience';

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
      ? 'Kazi za Tripod Creative | Branding, Picha, Video na Kampeni za Kidijitali'
      : 'Tripod Creative Portfolio | Branding, Photography, Video & Digital Campaigns';
  const description =
    locale === 'sw'
      ? 'Tazama kazi za Tripod Creative katika branding, graphics, printing, picha, video, matukio, muziki, na kampeni za kidijitali.'
      : 'Browse Tripod Creative work across branding, graphics, printing, photography, video, events, music, and digital campaigns.';
  const canonical = `${siteUrl}/${locale}/portfolio`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        'en-US': `${siteUrl}/en/portfolio`,
        'sw-TZ': `${siteUrl}/sw/portfolio`,
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

export default async function PortfolioPage() {
  const locale = await getLocale();
  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000'
  ).replace(/[^0-9]/g, '');

  const featuredMessage =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kujadili mradi wa portfolio unaofanana na kazi zenu za ubunifu.'
      : 'Hello Tripod! I would like to discuss a project inspired by your portfolio work.';
  const bookingMessage =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kuweka mazungumzo kuhusu mradi wangu wa ubunifu.'
      : 'Hello Tripod! I would like to book a conversation about my creative project.';

  return (
    <PortfolioExperience
      featuredUrl={createWhatsAppUrl(whatsappNumber, featuredMessage)}
      bookingUrl={createWhatsAppUrl(whatsappNumber, bookingMessage)}
    />
  );
}
