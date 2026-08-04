import React from 'react';
import { getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { CoreServicesGrid } from '@/components/services/CoreServicesGrid';
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
          serviceMap: {
            graphicDesign:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Graphic Design.',
            branding:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Branding.',
            printing:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Printing.',
            photography:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Photography.',
            videography:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Videography.',
            droneCoverage:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Drone Coverage.',
            liveStreaming:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Live Streaming.',
            audioRecording:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Audio Recording.',
            musicProduction:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Music Production.',
            podcastRecording:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Podcast Recording.',
            digitalMarketing:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Digital Marketing.',
            instrumentTraining:
              'Habari Tripod! Ninaomba maelezo kuhusu huduma ya Instrument Training.',
            digitalSupport:
              'Habari Tripod! Ningependa kujadili digital support ya campaign yangu.',
          },
        }
      : {
          hero: 'Hello Tripod! I would like to discuss your creative services.',
          serviceMap: {
            graphicDesign:
              'Hello Tripod! I would like to ask about graphic design services.',
            branding:
              'Hello Tripod! I would like to ask about branding services.',
            printing:
              'Hello Tripod! I would like to ask about printing services.',
            photography:
              'Hello Tripod! I would like to ask about photography services.',
            videography:
              'Hello Tripod! I would like to ask about videography services.',
            droneCoverage:
              'Hello Tripod! I would like to ask about drone coverage services.',
            liveStreaming:
              'Hello Tripod! I would like to ask about live streaming services.',
            audioRecording:
              'Hello Tripod! I would like to ask about audio recording services.',
            musicProduction:
              'Hello Tripod! I would like to ask about music production services.',
            podcastRecording:
              'Hello Tripod! I would like to ask about podcast recording services.',
            digitalMarketing:
              'Hello Tripod! I would like to ask about digital marketing services.',
            instrumentTraining:
              'Hello Tripod! I would like to ask about instrument training services.',
            digitalSupport:
              'Hello Tripod! I would like to discuss digital support for my campaign.',
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
      <CoreServicesGrid serviceUrls={serviceUrls} />
      <ServicesProcess />
      <ServicesWhatsAppCta serviceUrls={serviceUrls} />
    </main>
  );
}
