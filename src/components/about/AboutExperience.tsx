'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRight, Clapperboard, Palette, RadioTower, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import {
  sampleMedia,
} from '@/data/sampleMedia';

interface AboutExperienceProps {
  ctaUrl: string;
}

export function AboutExperience({ ctaUrl }: AboutExperienceProps) {
  const locale = useLocale();
  const copy =
    locale === 'sw'
      ? {
          eyebrow: 'Kuhusu Tripod',
          title: 'Tripod ni studio ya ubunifu inayobadilisha ideas kuwa visuals, motion, na campaign assets.',
          subtitle:
            'Tunafanya kazi kwenye branding, design, production, photography, music, print, na digital rollout kwa studio energy inayolenga attention.',
          statementTitle: 'Studio moja. Disciplines nyingi. Mwelekeo mmoja.',
          statementBody:
            'Kutoka concept hadi camera hadi campaign, Tripod huunganisha creative direction na production execution bila kuonekana kama brochure au NGO profile.',
          capabilitiesTitle: 'Tripod hufanya nini',
          capabilitiesBody:
            'Design ya chapa, visual production, studio content, na digital delivery hujengwa pamoja ili kazi ionekane ya kisasa na tayari kwa screens, stages, streets, na stories.',
          capabilities: [
            'Branding na design systems',
            'Film, photography, na event coverage',
            'Print production, music studio, na digital campaigns',
          ],
          cultureEyebrow: 'Creative Culture',
          cultureTitle: 'Behind the scenes, the work stays visual, fast, and collaborative.',
          cultureBody:
            'Tunatumia sample media hapa kuonyesha aina ya production atmosphere inayofaa Tripod mpaka media halisi ya timu iwe tayari.',
          processEyebrow: 'Process',
          processTitle: 'Concept. Production. Delivery.',
          process: [
            {
              title: 'Concept',
              description: 'Brief, direction, references, na visual angle huwekwa wazi mapema.',
            },
            {
              title: 'Production',
              description: 'Camera, design, print, studio, na campaign assets hutengenezwa kwa pace moja yenye focus.',
            },
            {
              title: 'Delivery',
              description: 'Kazi huandaliwa kwa launch, posting, printing, presentation, au campaign rollout.',
            },
          ],
          ctaTitle: 'Leta project yako inayofuata ndani ya studio.',
          ctaBody: 'Ikiwa direction hii inafaa, tuanze mazungumzo kwa WhatsApp.',
          ctaButton: 'Send to Studio',
        }
      : {
          eyebrow: 'About Tripod',
          title: 'Tripod is a creative studio turning ideas into visuals, motion, and campaign assets.',
          subtitle:
            'We work across branding, design, production, photography, music, print, and digital rollout with studio energy built for attention.',
          statementTitle: 'One studio. Multiple disciplines. One direction.',
          statementBody:
            'From concept to camera to campaign, Tripod connects creative direction with production execution without feeling like a brochure or NGO profile.',
          capabilitiesTitle: 'What Tripod creates',
          capabilitiesBody:
            'Brand design, visual production, studio content, and digital delivery are built together so the work feels current and ready for screens, stages, streets, and stories.',
          capabilities: [
            'Branding and design systems',
            'Film, photography, and event coverage',
            'Print production, music studio, and digital campaigns',
          ],
          cultureEyebrow: 'Creative Culture',
          cultureTitle: 'Behind the scenes, the work stays visual, fast, and collaborative.',
          cultureBody:
            'Sample media is used here to show the kind of production atmosphere that fits Tripod until real team media is ready.',
          processEyebrow: 'Process',
          processTitle: 'Concept. Production. Delivery.',
          process: [
            {
              title: 'Concept',
              description: 'The brief, direction, references, and visual angle are set early.',
            },
            {
              title: 'Production',
              description: 'Camera, design, print, studio, and campaign assets move with one focused pace.',
            },
            {
              title: 'Delivery',
              description: 'The work is prepared for launch, posting, printing, presentation, or rollout.',
            },
          ],
          ctaTitle: 'Bring your next project into the studio.',
          ctaBody: 'If this direction fits, let’s start the conversation on WhatsApp.',
          ctaButton: 'Send to Studio',
        };

  const cultureMedia = [
    sampleMedia.creativeTeamBts,
    sampleMedia.cameraOperator,
    sampleMedia.graphicDesignerWorkspace,
  ];

  return (
    <main className="relative flex-grow overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/6 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,126,0,0.28),transparent_26%),radial-gradient(circle_at_82%_30%,rgba(253,208,0,0.1),transparent_22%),linear-gradient(180deg,rgba(8,10,12,0.92),rgba(8,10,12,0.72))]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,1.1fr)] lg:items-center">
            <div className="space-y-5">
              <ScrollReveal>
                <span className="label-sm inline-flex rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-primary">
                  {copy.eyebrow}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="display-lg max-w-4xl text-white">{copy.title}</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p className="body-lg max-w-2xl text-on-surface-variant">
                  {copy.subtitle}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.16}>
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src={sampleMedia.cameraOperator.src}
                    alt={sampleMedia.cameraOperator.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,126,0,0.12),rgba(0,0,0,0.66))]" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">Tripod Creative</p>
                    <p className="mt-3 max-w-sm text-lg font-semibold text-white">
                      {copy.statementTitle}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {[sampleMedia.brandingMockups, sampleMedia.studioMicrophone].map((media, index) => (
                    <div key={media.key} className="relative min-h-[12rem] overflow-hidden rounded-[1.6rem] border border-white/10">
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 22vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                      <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80">
                        {index === 0 ? 'Branding' : 'Studio'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="headline-lg text-white">{copy.statementTitle}</h2>
              <p className="body-md max-w-xl text-on-surface-variant">
                {copy.statementBody}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src={sampleMedia.videoProductionSetup.src}
                alt={sampleMedia.videoProductionSetup.alt}
                width={sampleMedia.videoProductionSetup.width}
                height={sampleMedia.videoProductionSetup.height}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.64),rgba(0,0,0,0.18))]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/6 bg-surface-container-lowest/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={sampleMedia.creativeTeamBts.src}
                  alt={sampleMedia.creativeTeamBts.alt}
                  width={sampleMedia.creativeTeamBts.width}
                  height={sampleMedia.creativeTeamBts.height}
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="space-y-5">
                <p className="label-sm text-primary">{copy.capabilitiesTitle}</p>
                <p className="headline-lg text-white">{copy.capabilitiesBody}</p>
                <div className="space-y-4">
                  {[
                    { icon: Palette, text: copy.capabilities[0] },
                    { icon: Clapperboard, text: copy.capabilities[1] },
                    { icon: RadioTower, text: copy.capabilities[2] },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-base leading-7 text-on-surface-variant">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{copy.cultureEyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg max-w-3xl text-white">{copy.cultureTitle}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="body-md max-w-2xl text-on-surface-variant">{copy.cultureBody}</p>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {cultureMedia.map((media, index) => (
              <ScrollReveal key={media.key} delay={0.08 * index}>
                <div className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 ${index === 0 ? 'md:row-span-2 min-h-[28rem]' : 'min-h-[13.5rem]'}`}>
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/80">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {index === 0 ? 'BTS' : index === 1 ? 'Direction' : 'Design'}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-surface-container-lowest/70 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mb-8 space-y-3">
            <ScrollReveal>
              <span className="label-sm text-primary">{copy.processEyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="headline-lg text-white">{copy.processTitle}</h2>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {copy.process.map((step, index) => (
              <ScrollReveal key={step.title} delay={0.08 * index}>
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/20 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">0{index + 1}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-16">
          <ScrollReveal>
            <h2 className="headline-lg text-white">{copy.ctaTitle}</h2>
            <p className="body-md mx-auto mt-4 max-w-2xl text-on-surface-variant">{copy.ctaBody}</p>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full"
            >
              <Button variant="primary" className="gap-2 px-7 py-3.5">
                {copy.ctaButton}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
