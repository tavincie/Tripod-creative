'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import {
  Layers,
  Compass,
  Printer,
  LineChart,
  Camera,
  Music,
  Code,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface CorePillar {
  key: string;
  icon: React.ReactNode;
}

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const tCommon = useTranslations('Common');
  const locale = useLocale();

  // Core Pillars (6 core grid blocks)
  const corePillars: CorePillar[] = [
    {
      key: 'brand',
      icon: <Layers className="w-8 h-8 text-primary" />,
    },
    {
      key: 'design',
      icon: <Compass className="w-8 h-8 text-primary" />,
    },
    {
      key: 'printing',
      icon: <Printer className="w-8 h-8 text-primary" />,
    },
    {
      key: 'marketing',
      icon: <LineChart className="w-8 h-8 text-primary" />,
    },
    {
      key: 'photography',
      icon: <Camera className="w-8 h-8 text-primary" />,
    },
    {
      key: 'music',
      icon: <Music className="w-8 h-8 text-primary" />,
    },
  ];

  // Process Steps
  const processSteps = ['step1', 'step2', 'step3', 'step4'] as const;

  // WhatsApp Booking URL generator
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000';
  const whatsappNumber = rawNumber.replace(/[^0-9]/g, '');
  const serviceMsg =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kuomba maelezo kuhusu huduma zenu za ubunifu.'
      : 'Hello Tripod! I would like to inquire about your creative services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(serviceMsg)}`;

  // Specialty Tech Stack message
  const devMsg =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kujadili mradi wa kutengeneza Tovuti au Programu.'
      : 'Hello Tripod! I would like to discuss a Web & App Development project.';
  const devWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(devMsg)}`;

  return (
    <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-white">
      {/* Global Header */}
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden pt-16 pb-24 md:py-32 flex items-center">
          <div className="absolute inset-0 hot-spot opacity-75 -z-10" />
          <div className="mx-auto max-w-7xl px-5 md:px-16 w-full text-center">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/15 text-xs font-mono tracking-wider text-primary mb-6">
                <span>{t('Hero.tag')}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="display-lg text-white max-w-4xl mx-auto mb-6">
                {t('Hero.title')}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                {t('Hero.subtitle')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-full"
                  aria-label={tCommon('bookWhatsApp')}
                >
                  <Button variant="primary" className="px-8 py-4">
                    {tCommon('bookWhatsApp')}
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Core Services Grid */}
        <section className="py-24 bg-surface-container-lowest border-t border-b border-outline-variant/10">
          <div className="mx-auto max-w-7xl px-5 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corePillars.map((pillar, index) => (
                <ScrollReveal
                  key={pillar.key}
                  direction="up"
                  delay={0.1 * (index % 3)}
                >
                  <GlassCard className="p-8 h-full flex flex-col justify-between group">
                    <div className="flex flex-col gap-5">
                      <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant/15 transition-transform duration-300 group-hover:scale-105">
                        {pillar.icon}
                      </div>
                      <h2 className="headline-md text-white font-bold">
                        {t(`Pillars.${pillar.key}.title`)}
                      </h2>
                      <p className="body-md text-on-surface-variant/80 leading-relaxed">
                        {t(`Pillars.${pillar.key}.desc`)}
                      </p>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Featured Bento Card (Web & App Development) */}
        <section className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 md:px-16">
            <ScrollReveal direction="up">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-surface-container/50 to-secondary-container/5 border border-outline-variant/25 p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
                <div className="absolute inset-0 hot-spot opacity-40 pointer-events-none" />
                
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-6 text-left relative z-10">
                  <span className="label-sm text-primary">{t('Bento.tag')}</span>
                  <h2 className="headline-lg text-white font-extrabold">
                    {t('Bento.title')}
                  </h2>
                  <p className="body-md text-on-surface-variant/90 leading-relaxed max-w-xl">
                    {t('Bento.desc')}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-2 bg-background/40 border border-outline-variant/10 px-3 py-1.5 rounded-lg text-xs font-mono">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Next.js App Router</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background/40 border border-outline-variant/10 px-3 py-1.5 rounded-lg text-xs font-mono">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Tailwind CSS v4</span>
                    </div>
                    <div className="flex items-center gap-2 bg-background/40 border border-outline-variant/10 px-3 py-1.5 rounded-lg text-xs font-mono">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Framer Motion</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={devWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-full inline-block"
                    >
                      <Button variant="primary" className="flex items-center gap-2 group">
                        <span>{t('Bento.cta')}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Aesthetic Visual Box representing code structure */}
                <div className="w-full lg:w-[380px] bg-background/80 border border-outline-variant/20 rounded-xl p-6 shadow-xl relative z-10 font-mono text-xs text-on-surface/70 flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/10 pb-3">
                    <div className="flex items-center gap-1.5 text-primary">
                      <Code className="w-4 h-4" />
                      <span className="text-[10px]">tripod.config.ts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-blue-400">import <span className="text-white">Tripod</span> from <span className="text-green-300">{"'@/tripod/core'"}</span>;</p>
                    <p className="text-purple-400">const <span className="text-white">studioWorkflow</span> = {"{"}</p>
                    <p className="pl-4 text-on-surface-variant">tech: <span className="text-yellow-300">{"'Next.js App Router'"}</span>,</p>
                    <p className="pl-4 text-on-surface-variant">styling: <span className="text-yellow-300">{"'Tailwind CSS v4'"}</span>,</p>
                    <p className="pl-4 text-on-surface-variant">animations: <span className="text-yellow-300">{"'Framer Motion'"}</span>,</p>
                    <p className="pl-4 text-on-surface-variant">status: <span className="text-green-400">{"'PRODUCTION_READY'"}</span></p>
                    <p className="text-purple-400">{"};"}</p>
                    <p className="text-orange-400 mt-2">{"// Fast Execution guaranteed"}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 4: Process Blueprint */}
        <section className="py-24 bg-surface-container-lowest border-t border-b border-outline-variant/10">
          <div className="mx-auto max-w-7xl px-5 md:px-16">
            <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
              <ScrollReveal direction="up">
                <span className="label-sm text-primary">{t('Process.tag')}</span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="headline-lg text-white">{t('Process.title')}</h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="body-md text-on-surface-variant">
                  {t('Process.desc')}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((stepKey, index) => (
                <ScrollReveal
                  key={stepKey}
                  direction="up"
                  delay={0.1 * index}
                >
                  <div className="flex flex-col gap-4 text-left relative">
                    {/* Visual Connection line for desktop */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-7 left-full w-full h-[1px] bg-gradient-to-r from-outline-variant/40 to-transparent -z-10" />
                    )}
                    <div className="w-14 h-14 rounded-full bg-surface-container border border-outline-variant/15 flex items-center justify-center font-display font-black text-lg text-white">
                      0{index + 1}
                    </div>
                    <h3 className="headline-md text-white text-base font-bold mt-2">
                      {t(`Process.steps.${stepKey}.title`)}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {t(`Process.steps.${stepKey}.desc`)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Service-specific WhatsApp CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 hot-spot opacity-50 -z-10" />
          <div className="mx-auto max-w-4xl px-5 text-center flex flex-col gap-8">
            <ScrollReveal direction="up">
              <h2 className="headline-lg text-white max-w-2xl mx-auto">
                {t('CTA.title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="body-md text-on-surface-variant max-w-xl mx-auto">
                {t('CTA.subtitle')}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex justify-center mt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-full"
                  aria-label={t('CTA.cta')}
                >
                  <Button variant="primary" className="px-10 py-4 text-base">
                    {t('CTA.cta')}
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
}
