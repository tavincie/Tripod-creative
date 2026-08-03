import React from 'react';
import { Inter, Montserrat, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { AppProviders } from './providers';
import '@/app/globals.css';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

// Build SEO metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const titleText =
    locale === 'sw'
      ? 'Tripod Creative Agency - Ubora wa Picha na Kidijitali'
      : 'Tripod Creative Agency - Cinematic & Digital Excellence';
  const descText =
    locale === 'sw'
      ? 'Tripod ni creative studio inayotoa huduma za picha na video, chapa, masoko ya kidijitali, na studio pamoja na mafunzo ya ubunifu.'
      : 'Tripod is a creative studio offering photography and video, branding, digital marketing, studio services, and creative training.';

  return {
    title: {
      default: titleText,
      template: '%s | Tripod Creative',
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
      siteName: 'Tripod Creative',
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
              <WhatsAppButton />
            </div>
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
