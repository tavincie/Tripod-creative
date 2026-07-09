'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { ThreeCanvas } from '@/components/3d/ThreeCanvas';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import {
  Layers,
  Compass,
  LineChart,
  Camera,
  Wind,
  Music,
  Play,
  ArrowRight,
  Zap,
  Cpu,
  Users,
  Award,
  Volume2,
  CheckCircle,
  X,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { portfolioData } from '@/data/portfolio';

export default function HomePage() {
  const t = useTranslations('Home');
  const tCommon = useTranslations('Common');
  const locale = useLocale();

  const [showreelOpen, setShowreelOpen] = useState(false);

  // Compile WhatsApp URL
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000';
  const whatsappNumber = rawNumber.replace(/[^0-9]/g, '');
  const contactMsg =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kuweka nafasi ya huduma za ubunifu.'
      : 'Hello Tripod! I would like to book a creative session.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMsg)}`;

  // Service Icon Mapper
  const renderServiceIcon = (iconName: string) => {
    const classStyle = 'w-8 h-8 text-primary';
    switch (iconName) {
      case 'Layers':
        return <Layers className={classStyle} />;
      case 'Compass':
        return <Compass className={classStyle} />;
      case 'LineChart':
        return <LineChart className={classStyle} />;
      case 'Camera':
        return <Camera className={classStyle} />;
      case 'Wind':
        return <Wind className={classStyle} />;
      case 'Music':
        return <Music className={classStyle} />;
      default:
        return <Layers className={classStyle} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-white">
      {/* Top Navbar */}
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden pt-12 pb-24 md:py-32 flex items-center">
          <div className="absolute inset-0 hot-spot opacity-75 -z-10" />
          <div className="mx-auto max-w-7xl px-5 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/15 text-xs font-mono tracking-wider text-primary">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>ONLINE CONSULTATION ACTIVE</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="display-lg text-white">
                  {t('Hero.title')}
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="body-lg text-on-surface-variant max-w-2xl">
                  {t('Hero.subtitle')}
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded-full"
                  >
                    <Button variant="primary" className="px-8 py-4">
                      {tCommon('bookWhatsApp')}
                    </Button>
                  </a>
                  <Link href="/portfolio" className="focus-ring rounded-full">
                    <Button variant="outline" className="px-8 py-4">
                      {tCommon('viewPortfolio')}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* 3D Animated canvas container */}
            <div className="lg:col-span-5 w-full flex justify-center items-center">
              <ScrollReveal direction="none" delay={0.3}>
                <div className="w-full relative aspect-square max-w-md">
                  <ThreeCanvas />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 2: Showreel Preview */}
        <section className="py-20 bg-surface-container-lowest border-t border-b border-outline-variant/10">
          <div className="mx-auto max-w-7xl px-5 md:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
              <ScrollReveal direction="up">
                <span className="label-sm text-primary">{t('Showreel.tag')}</span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="headline-lg text-white">{t('Showreel.title')}</h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="body-md text-on-surface-variant">
                  {t('Showreel.description')}
                </p>
              </ScrollReveal>
            </div>

            {/* Video Preview Glass Container */}
            <ScrollReveal direction="up" delay={0.3}>
              <div
                onClick={() => setShowreelOpen(true)}
                className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer group border border-outline-variant/20 shadow-2xl transition-all duration-500 hover:border-primary/45"
              >
                {/* Visual lens reflection layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Animated static backdrop elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-container/5 z-0" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-full bg-white/10 group-hover:bg-primary/20 flex items-center justify-center border border-white/20 group-hover:border-primary/50 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <Play className="w-8 h-8 text-white group-hover:text-primary transition-colors fill-current ml-1" />
                  </div>
                </div>

                {/* Aesthetic HUD brackets */}
                <div className="absolute top-6 left-6 border-t-2 border-l-2 border-white/30 w-6 h-6 z-10 pointer-events-none" />
                <div className="absolute top-6 right-6 border-t-2 border-r-2 border-white/30 w-6 h-6 z-10 pointer-events-none" />
                <div className="absolute bottom-6 left-6 border-b-2 border-l-2 border-white/30 w-6 h-6 z-10 pointer-events-none" />
                <div className="absolute bottom-6 right-6 border-b-2 border-r-2 border-white/30 w-6 h-6 z-10 pointer-events-none" />

                <div className="absolute bottom-6 left-16 z-10 hidden sm:flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>REC 00:00:24</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Services Preview */}
        <section className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 md:px-16">
            <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
              <ScrollReveal direction="up">
                <span className="label-sm text-primary">{t('Services.tag')}</span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="headline-lg text-white">{t('Services.title')}</h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="body-md text-on-surface-variant">
                  {t('Services.description')}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <ScrollReveal
                  key={service.key}
                  direction="up"
                  delay={0.1 * (index % 3)}
                >
                  <GlassCard className="p-8 h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-5">
                      <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant/15">
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <h3 className="headline-md text-white font-bold">
                        {t(`Services.pillars.${service.key}.title`)}
                      </h3>
                      <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                        {t(`Services.pillars.${service.key}.desc`)}
                      </p>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Portfolio Preview */}
        <section className="py-24 bg-surface-container-lowest border-t border-b border-outline-variant/10">
          <div className="mx-auto max-w-7xl px-5 md:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="flex flex-col gap-4 text-left max-w-2xl">
                <ScrollReveal direction="up">
                  <span className="label-sm text-primary">{t('Portfolio.tag')}</span>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.1}>
                  <h2 className="headline-lg text-white">{t('Portfolio.title')}</h2>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="body-md text-on-surface-variant">
                    {t('Portfolio.description')}
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="left" delay={0.2}>
                <Link href="/portfolio" className="focus-ring rounded-full shrink-0">
                  <Button variant="secondary" className="flex items-center gap-2 group">
                    <span>{tCommon('viewPortfolio')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.map((project, index) => (
                <ScrollReveal
                  key={project.key}
                  direction="up"
                  delay={0.1 * index}
                >
                  <GlassCard className="p-0 overflow-hidden h-full flex flex-col justify-between group">
                    <div className="flex flex-col">
                      {/* Prism Style Gradient box simulating portfolio items */}
                      <div className={`w-full ${project.aspectRatio} bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105 relative`}>
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-mono text-white tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/20">
                            VIEW CASE
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col gap-2">
                        <span className="text-xs font-mono uppercase text-primary tracking-widest">
                          {project.categoryKey}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                          {t(`Portfolio.${project.key}`)}
                        </h3>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Why Choose Tripod */}
        <section className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <ScrollReveal direction="up">
                  <span className="label-sm text-primary">{t('WhyChoose.tag')}</span>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.1}>
                  <h2 className="headline-lg text-white">{t('WhyChoose.title')}</h2>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="body-md text-on-surface-variant leading-relaxed">
                    {t('WhyChoose.description')}
                  </p>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm font-semibold">Tanzania-friendly budget options</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm font-semibold">Flexible design milestones</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(['precision', 'speed', 'stack', 'partnership'] as const).map(
                  (metricKey, index) => (
                    <ScrollReveal
                      key={metricKey}
                      direction="up"
                      delay={0.1 * index}
                    >
                      <GlassCard className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant/10 text-primary">
                            {metricKey === 'precision' && <Award className="w-5 h-5" />}
                            {metricKey === 'speed' && <Zap className="w-5 h-5" />}
                            {metricKey === 'stack' && <Cpu className="w-5 h-5" />}
                            {metricKey === 'partnership' && <Users className="w-5 h-5" />}
                          </div>
                          <h3 className="text-base font-bold text-white">
                            {t(`WhyChoose.metrics.${metricKey}.title`)}
                          </h3>
                          <p className="text-xs text-on-surface-variant leading-relaxed">
                            {t(`WhyChoose.metrics.${metricKey}.desc`)}
                          </p>
                        </div>
                      </GlassCard>
                    </ScrollReveal>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Music Studio Teaser */}
        <section className="py-24 bg-surface-container-lowest border-t border-b border-outline-variant/10 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <ScrollReveal direction="up">
                <span className="label-sm text-primary">{t('Teaser.tag')}</span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="headline-lg text-white">{t('Teaser.title')}</h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="body-md text-on-surface-variant max-w-xl">
                  {t('Teaser.description')}
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="mt-4">
                  <Link href="/studio-academy" className="focus-ring rounded-full inline-block">
                    <Button variant="primary" className="flex items-center gap-2 group">
                      <span>{t('Teaser.cta')}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column Waveform Animation */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <ScrollReveal direction="none" delay={0.3}>
                <div className="w-full max-w-sm p-8 rounded-2xl glass-card flex flex-col gap-6 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-primary" />
                      <span className="text-xs font-mono text-primary tracking-widest">
                        INPUT SIGNAL
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-green-500">ACTIVE</span>
                  </div>
                  
                  {/* Acoustic Waveform Simulation bars */}
                  <div className="h-28 flex items-end justify-center gap-1.5 px-4 bg-background/50 rounded-xl border border-outline-variant/10 overflow-hidden">
                    {Array.from({ length: 18 }).map((_, i) => {
                      // Staggered heights
                      const initialHeights = [20, 45, 60, 30, 75, 90, 55, 30, 40, 70, 85, 45, 25, 60, 80, 50, 35, 15];
                      return (
                        <div
                          key={i}
                          className="w-[6px] bg-gradient-to-t from-primary to-secondary-container rounded-t-full waveform-bar"
                          style={{
                            height: `${initialHeights[i] || 40}%`,
                            animationDelay: `${i * 0.08}s`,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 7: Final Booking CTA */}
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

      {/* Showreel Video Modal Overlay */}
      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl bg-black">
            <button
              onClick={() => setShowreelOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 border border-white/20 text-white rounded-full hover:bg-white/15 focus-ring cursor-pointer"
              aria-label="Close Showreel Video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Tripod Creative Showreel Playback
              </h3>
              <p className="text-sm text-on-surface-variant max-w-md">
                This is a simulated video playback overlay. The actual production showreel video files will be integrated in Phase 2.
              </p>
              <Button
                variant="secondary"
                onClick={() => setShowreelOpen(false)}
                className="mt-2"
              >
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
