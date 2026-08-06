import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { AppProviders } from './providers';
import '@/app/globals.css';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { geistMono, inter, montserrat } from '@/app/fonts';
import { getSiteUrl } from '@/config/site';

// Build SEO metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const tSeo = await getTranslations({ locale, namespace: 'Seo.layout' });
  const titleText = tSeo('title');
  const descText = tSeo('description');

  return {
    title: {
      default: titleText,
      template: '%s | Tripod Creative Agency',
    },
    description: descText,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en-US': `${siteUrl}/en`,
        'sw-TZ': `${siteUrl}/sw`,
      },
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: `${siteUrl}/${locale}`,
      siteName: 'Tripod Creative Agency',
      locale: locale === 'sw' ? 'sw_TZ' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titleText,
      description: descText,
    },
  };
}

function isValidLocale(locale: string): locale is 'en' | 'sw' {
  return (routing.locales as readonly string[]).includes(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!isValidLocale(locale)) {
    notFound();
  }


  // Provide messages to the client
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${montserrat.variable} ${geistMono.variable} dark`}
    >
      <body className="tripod-site-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <div className="tripod-site-shell">
              <Header />
              {children}
              <Footer />
            </div>
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
