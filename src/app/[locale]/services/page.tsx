import React from 'react';
import { getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { CoreServicesGrid } from '@/components/services/CoreServicesGrid';
import { FeaturedDevelopmentCard } from '@/components/services/FeaturedDevelopmentCard';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesProcess } from '@/components/services/ServicesProcess';
import { ServicesWhatsAppCta } from '@/components/services/ServicesWhatsAppCta';

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
      ? 'Huduma za Tripod Creative | Ubunifu, Production, Masoko na Studio'
      : 'Tripod Creative Services | Branding, Production, Digital Marketing & Studio';
  const description =
    locale === 'sw'
      ? 'Chunguza huduma za Tripod Creative kuanzia chapa, production, masoko ya kidijitali, studio, picha, video, na utengenezaji wa tovuti.'
      : 'Explore Tripod Creative services across branding, production, digital marketing, studio work, photography, videography, and web development.';
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
  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000'
  ).replace(/[^0-9]/g, '');

  const messages =
    locale === 'sw'
      ? {
          hero: 'Habari Tripod! Ningependa kujadili huduma zenu za ubunifu.',
          web: 'Habari Tripod! Ningependa kujadili mradi wa tovuti au programu.',
          serviceMap: {
            brandStrategy:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya mkakati wa chapa na utambulisho.',
            creativeDesign:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya ubunifu wa kisanii.',
            printingProduction:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya uchapishaji na uzalishaji.',
            digitalMarketing:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya masoko ya kidijitali.',
            photographyVideography:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya picha na video.',
            musicStudioAcademy:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya studio ya muziki na chuo.',
            webAppDevelopment:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya utengenezaji wa tovuti na programu.',
          },
        }
      : {
          hero: 'Hello Tripod! I would like to discuss your creative services.',
          web: 'Hello Tripod! I would like to discuss a web or app project.',
          serviceMap: {
            brandStrategy:
              'Hello Tripod! I would like to ask about brand strategy and identity services.',
            creativeDesign:
              'Hello Tripod! I would like to ask about creative design services.',
            printingProduction:
              'Hello Tripod! I would like to ask about printing and production services.',
            digitalMarketing:
              'Hello Tripod! I would like to ask about digital marketing services.',
            photographyVideography:
              'Hello Tripod! I would like to ask about photography and videography services.',
            musicStudioAcademy:
              'Hello Tripod! I would like to ask about music studio and academy services.',
            webAppDevelopment:
              'Hello Tripod! I would like to ask about web and app development services.',
          },
        };

  const serviceUrls = Object.fromEntries(
    Object.entries(messages.serviceMap).map(([key, message]) => [
      key,
      createWhatsAppUrl(whatsappNumber, message),
    ]),
  ) as Record<string, string>;

  return (
    <main className="relative overflow-hidden">
      <ServicesHero whatsappUrl={createWhatsAppUrl(whatsappNumber, messages.hero)} />
      <CoreServicesGrid />
      <FeaturedDevelopmentCard
        whatsappUrl={createWhatsAppUrl(whatsappNumber, messages.web)}
      />
      <ServicesProcess />
      <ServicesWhatsAppCta serviceUrls={serviceUrls} />
    </main>
  );
}
