'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function ServicesProcess() {
  const tServices = useTranslations('ServicesPage');
  const steps = tServices.raw('process.steps') as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5f1e9_0%,#ffb48d_42%,#050505_100%)] py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%,rgba(0,0,0,0.08)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <ScrollReveal>
            <div className="space-y-3">
              <p className="film-light-kicker">{tServices('process.eyebrow')}</p>
              <h2 className="film-editorial-heading max-w-xl text-[var(--tripod-text-dark)]">
                {tServices('process.title')}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(23,21,18,0.72)] sm:text-base">
              {tServices('process.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[rgba(23,21,18,0.12)] bg-[rgba(245,241,233,0.76)] shadow-[0_22px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <div className="grid gap-px bg-[rgba(23,21,18,0.12)] lg:grid-cols-5">
            {steps.map((step, index) => (
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
