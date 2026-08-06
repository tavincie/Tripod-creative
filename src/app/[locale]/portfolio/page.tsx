import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PortfolioExperience } from '@/components/portfolio/PortfolioExperience';
import { getSiteUrl } from '@/config/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: 'Seo.portfolio' });
  const siteUrl = getSiteUrl();
  const title = tSeo('title');
  const description = tSeo('description');
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

export default async function PortfolioPage() {
  return <PortfolioExperience />;
}
