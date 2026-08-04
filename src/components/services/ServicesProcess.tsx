'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const processRows = {
  en: [
    {
      number: '01',
      title: 'Brief Lock',
      description: 'We set the message, audience, deliverables, and production priority.',
    },
    {
      number: '02',
      title: 'Creative Direction',
      description: 'References, formats, timing, and visual or sound direction are aligned.',
    },
    {
      number: '03',
      title: 'Production / Design / Record',
      description: 'Cameras, layouts, print prep, or studio sessions move on one board.',
    },
    {
      number: '04',
      title: 'Edit / Print / Package',
      description: 'Assets are refined, exported, printed, or prepared for campaign use.',
    },
    {
      number: '05',
      title: 'Launch / Deliver',
      description: 'The final work is handed over ready for posting, screening, printing, or rollout.',
    },
  ],
  sw: [
    {
      number: '01',
      title: 'Brief Lock',
      description: 'Tunafunga message, audience, deliverables, na production priority mapema.',
    },
    {
      number: '02',
      title: 'Creative Direction',
      description: 'References, formats, timing, na visual au sound direction vinawekwa sawa.',
    },
    {
      number: '03',
      title: 'Production / Design / Record',
      description: 'Cameras, layouts, print prep, au studio sessions husogea kwenye board moja.',
    },
    {
      number: '04',
      title: 'Edit / Print / Package',
      description: 'Assets zinaboreshwa, ku-exportiwa, kuchapishwa, au kuandaliwa kwa campaign.',
    },
    {
      number: '05',
      title: 'Launch / Deliver',
      description: 'Kazi ya mwisho hukabidhiwa ikiwa tayari kwa posting, screening, printing, au rollout.',
    },
  ],
};

export function ServicesProcess() {
  const locale = useLocale();
  const copy = locale === 'sw' ? processRows.sw : processRows.en;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5f1e9_0%,#ffb48d_42%,#050505_100%)] py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%,rgba(0,0,0,0.08)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <ScrollReveal>
            <div className="space-y-3">
              <p className="film-light-kicker">{locale === 'sw' ? 'Production Board' : 'Production Board'}</p>
              <h2 className="film-editorial-heading max-w-xl text-[var(--tripod-text-dark)]">
                {locale === 'sw'
                  ? 'Kutoka brief hadi delivery kwa timeline moja ya studio.'
                  : 'From brief to delivery on one studio timeline.'}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(23,21,18,0.72)] sm:text-base">
              {locale === 'sw'
                ? 'Sehemu hii inakaa kama production board ya Tripod: hatua wazi, numbering thabiti, na handoff isiyovunja direction.'
                : 'This section stays close to a Tripod production board: clear stages, disciplined numbering, and a handoff that keeps direction intact.'}
            </p>
          </ScrollReveal>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[rgba(23,21,18,0.12)] bg-[rgba(245,241,233,0.76)] shadow-[0_22px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <div className="grid gap-px bg-[rgba(23,21,18,0.12)] lg:grid-cols-5">
            {copy.map((step, index) => (
              <ScrollReveal key={step.number} delay={0.05 * index}>
                <article className="h-full bg-[linear-gradient(180deg,rgba(245,241,233,0.96),rgba(230,220,205,0.96))] px-5 py-6 sm:px-6">
                  <p className="font-mono text-[0.64rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 text-[1.1rem] font-black uppercase leading-tight tracking-[-0.02em] text-[var(--tripod-text-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(23,21,18,0.72)]">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
