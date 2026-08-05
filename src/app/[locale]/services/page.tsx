import React from 'react';
import { getLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { CoreServicesGrid } from '@/components/services/CoreServicesGrid';
import { ServicesProcess } from '@/components/services/ServicesProcess';
import { ServicesWhatsAppCta } from '@/components/services/ServicesWhatsAppCta';
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
  const tSeo = await getTranslations({ locale, namespace: 'Seo.services' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const title = tSeo('title');
  const description = tSeo('description');
  const canonical = `${siteUrl}/${locale}/services`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        'en-US': `${siteUrl}/en/services`,
        'sw-TZ': `${siteUrl}/sw/services`,
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

export default async function ServicesPage() {
  const locale = await getLocale();
  const tServices = await getTranslations({
    locale,
    namespace: 'ServicesPage.metadataMessages',
  });
  const whatsappNumber = getWhatsAppNumber();
  const serviceMap = tServices.raw('serviceMap') as Record<string, string>;

  const serviceUrls = Object.fromEntries(
    Object.entries(serviceMap).map(([key, message]) => [
      key,
      createWhatsAppUrl(whatsappNumber, message),
    ]),
  ) as Record<string, string>;

  return (
    <main className="relative overflow-hidden">
      <ServicesHero whatsappUrl={createWhatsAppUrl(whatsappNumber, tServices('hero'))} />
      <CoreServicesGrid serviceUrls={serviceUrls} />
      <ServicesProcess />
      <ServicesWhatsAppCta serviceUrls={serviceUrls} />
    </main>
  );
}
