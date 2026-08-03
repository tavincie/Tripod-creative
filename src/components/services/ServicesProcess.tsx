'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const processRows = {
  en: [
    {
      number: '01',
      title: 'Brief and Direction',
      description: 'We lock the message, audience, deliverables, and campaign priorities.',
      output: 'Output: approved creative brief',
    },
    {
      number: '02',
      title: 'Pre-production',
      description: 'We map production needs, schedules, references, locations, and talent.',
      output: 'Output: shot list, design route, and schedule',
    },
    {
      number: '03',
      title: 'Production',
      description: 'Design, cameras, studio sessions, print prep, and coverage move together.',
      output: 'Output: captured and created production assets',
    },
    {
      number: '04',
      title: 'Editing and Delivery',
      description: 'We edit, package, export, and prepare every asset for launch or rollout.',
      output: 'Output: release-ready campaign package',
    },
  ],
  sw: [
    {
      number: '01',
      title: 'Brief na Direction',
      description: 'Tunafunga message, audience, deliverables, na campaign priorities mapema.',
      output: 'Output: creative brief iliyokubaliwa',
    },
    {
      number: '02',
      title: 'Pre-production',
      description: 'Tunapanga production needs, schedule, references, locations, na talent.',
      output: 'Output: shot list, design route, na schedule',
    },
    {
      number: '03',
      title: 'Production',
      description: 'Design, cameras, studio sessions, print prep, na coverage husogea pamoja.',
      output: 'Output: production assets zilizoundwa na kurekodiwa',
    },
    {
      number: '04',
      title: 'Editing na Delivery',
      description: 'Tunahariri, kufunga, ku-export, na kuandaa assets kwa launch au rollout.',
      output: 'Output: campaign package tayari kwa release',
    },
  ],
};

export function ServicesProcess() {
  const locale = useLocale();
  const copy = locale === 'sw' ? processRows.sw : processRows.en;

  return (
    <section className="bg-[linear-gradient(180deg,#050505_0%,#050505_76%,#000000_100%)] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <div className="space-y-3">
              <p className="label-sm text-[var(--tripod-orange)]">{locale === 'sw' ? 'Production Process' : 'Production Process'}</p>
              <h2 className="headline-lg max-w-xl text-[var(--tripod-warm-white)]">
                {locale === 'sw' ? 'Kutoka brief hadi delivery kwa timeline moja yenye nidhamu.' : 'From brief to delivery on one disciplined production timeline.'}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="max-w-md text-sm leading-7 text-[var(--tripod-text-muted-light)]">
              {locale === 'sw'
                ? 'Kila stage ina maamuzi wazi, outputs zinazoonekana, na handoff isiyopoteza direction.'
                : 'Each stage has clear decisions, visible outputs, and a handoff that does not lose direction.'}
            </p>
          </ScrollReveal>
        </div>

        <div className="hidden gap-0 border-t border-white/10 lg:grid lg:grid-cols-4">
          {copy.map((step, index) => (
            <ScrollReveal key={step.number} delay={0.06 * index}>
              <article className="relative border-l border-white/10 px-6 py-8 first:border-l-0">
                <span className="absolute -top-[0.55rem] left-6 inline-flex bg-[var(--tripod-black)] px-2 font-mono text-[0.62rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-orange)]">
                  {step.number}
                </span>
                <h3 className="text-xl font-black uppercase leading-tight text-[var(--tripod-warm-white)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--tripod-text-muted-light)]">
                  {step.description}
                </p>
                <p className="mt-6 font-mono text-[0.62rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-orange)]">
                  {step.output}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-4 lg:hidden">
          {copy.map((step, index) => (
            <ScrollReveal key={step.number} delay={0.06 * index}>
              <article className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-5">
                <p className="font-mono text-[0.62rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-orange)]">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-black uppercase leading-tight text-[var(--tripod-warm-white)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--tripod-text-muted-light)]">
                  {step.description}
                </p>
                <p className="mt-4 font-mono text-[0.62rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-orange)]">
                  {step.output}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
