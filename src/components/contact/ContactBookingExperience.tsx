'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Globe, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SecondaryPageHero } from '@/components/shared/SecondaryPageHero';
import { Link } from '@/i18n/routing';
import { sampleMedia } from '@/data/sampleMedia';
import { siteConfig } from '@/config/site';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  feeling: string;
  usage: string;
  timeline: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

interface ContactBookingExperienceProps {
  whatsappNumber: string;
  fallbackBookingUrl: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  feeling: '',
  usage: '',
  timeline: '',
  budget: '',
  message: '',
};

export function ContactBookingExperience({
  whatsappNumber,
  fallbackBookingUrl,
}: ContactBookingExperienceProps) {
  const tContact = useTranslations('ContactPage');
  const tCommon = useTranslations('Common');
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const serviceOptions = useMemo(
    () => [
      'graphicDesign',
      'branding',
      'printing',
      'photography',
      'videography',
      'droneCoverage',
      'liveStreaming',
      'audioRecording',
      'musicProduction',
      'podcastRecording',
      'digitalMarketing',
      'instrumentTraining',
      'fullCampaign',
    ] as const,
    [],
  );

  const feelingOptions = useMemo(
    () => ['attention', 'trust', 'energy', 'emotion', 'authority', 'notSureYet'] as const,
    [],
  );

  const usageOptions = useMemo(
    () => ['socialMedia', 'print', 'event', 'website', 'campaign', 'studioRelease'] as const,
    [],
  );

  const timelineOptions = useMemo(
    () => ['urgent', 'thisWeek', 'thisMonth', 'flexible'] as const,
    [],
  );

  const budgetOptions = useMemo(
    () => ['smallProject', 'mediumProject', 'largeProject', 'notSureYet'] as const,
    [],
  );

  function validate(values: FormData): FormErrors {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = tContact('form.errors.name');
    if (!values.phone.trim()) nextErrors.phone = tContact('form.errors.phone');
    if (!values.email.trim()) nextErrors.email = tContact('form.errors.email');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = tContact('form.errors.emailInvalid');
    }
    if (!values.service) nextErrors.service = tContact('form.errors.service');
    if (!values.feeling) nextErrors.feeling = tContact('form.errors.feeling');
    if (!values.usage) nextErrors.usage = tContact('form.errors.usage');
    if (!values.timeline) nextErrors.timeline = tContact('form.errors.timeline');
    if (!values.budget) nextErrors.budget = tContact('form.errors.budget');
    if (!values.message.trim()) nextErrors.message = tContact('form.errors.message');
    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function buildWhatsAppUrl(values: FormData) {
    const serviceLabel = tContact(`form.services.${values.service}`);
    const feelingLabel = tContact(`form.feelings.${values.feeling}`);
    const usageLabel = tContact(`form.usageOptions.${values.usage}`);
    const timelineLabel = tContact(`form.timelines.${values.timeline}`);
    const budgetLabel = tContact(`form.budgets.${values.budget}`);
    const message = tContact('form.whatsappTemplate', {
      name: values.name,
      phone: values.phone,
      email: values.email,
      service: serviceLabel,
      feeling: feelingLabel,
      usage: usageLabel,
      timeline: timelineLabel,
      budget: budgetLabel,
      message: values.message,
    });
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    window.location.href = buildWhatsAppUrl({
      ...formData,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    });
  }

  const contactItems = [
    {
      icon: MessageCircle,
      title: tContact('contacts.items.whatsapp.title'),
      value: tContact('contacts.items.whatsapp.fallback'),
      href: fallbackBookingUrl,
      external: true,
    },
    siteConfig.phone
      ? {
          icon: Phone,
          title: tContact('contacts.items.phone.title'),
          value: siteConfig.phone,
          href: `tel:${siteConfig.phone}`,
          external: false,
        }
      : null,
    siteConfig.email
      ? {
          icon: Mail,
          title: tContact('contacts.items.email.title'),
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          external: false,
        }
      : null,
    siteConfig.instagramUrl
      ? {
          icon: Globe,
          title: tContact('contacts.items.instagram.title'),
          value: siteConfig.instagramHandle,
          href: siteConfig.instagramUrl,
          external: true,
        }
      : null,
    siteConfig.location
      ? {
          icon: MapPin,
          title: tContact('contacts.items.location.title'),
          value: siteConfig.location,
        }
      : null,
  ].filter(Boolean) as Array<{
    icon: typeof MessageCircle;
    title: string;
    value: string;
    href?: string;
    external?: boolean;
  }>;

  return (
    <main className="relative flex-grow overflow-hidden">
      <SecondaryPageHero
        eyebrow={tContact('hero.eyebrow')}
        title={tContact('hero.title')}
        subtitle={tContact('hero.subtitle')}
        titleId="contact-hero-title"
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(18,18,18,0.96))] shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.92fr)]">
            <div className="relative min-h-[14rem] overflow-hidden border-b border-white/10 sm:min-h-[18rem] lg:min-h-[22rem] lg:border-b-0 lg:border-r">
              <Image
                src={sampleMedia.creativeTeamBts.src}
                alt={tCommon(sampleMedia.creativeTeamBts.altKey)}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,124,72,0.06),rgba(0,0,0,0.76))]" />
              <div className="absolute inset-[1rem] border border-white/12" aria-hidden="true" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[rgba(245,241,233,0.76)]">
                <span>{tContact('hero.eyebrow')}</span>
                <span>{tContact('hero.labels.2')}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {(tContact.raw('hero.labels') as string[]).map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/12 bg-black/30 px-3 py-1 font-mono text-[0.56rem] font-black uppercase tracking-[0.16em] text-[var(--tripod-warm-white)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden gap-0 lg:grid">
              {[sampleMedia.socialCampaignVisuals, sampleMedia.studioMicrophone].map(
                (media, index) => (
                  <div
                    key={media.key}
                    className={`relative min-h-[8.5rem] overflow-hidden sm:min-h-[10rem] lg:min-h-[11rem] ${
                      index === 0 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    <Image
                      src={media.src}
                      alt={tCommon(media.altKey)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 22vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </SecondaryPageHero>

      <section className="tripod-page-light py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.88fr)]">
          <ScrollReveal>
            <div className="rounded-[2rem] tripod-dark-panel p-6 sm:p-8">
              <div className="mb-6 space-y-3">
                <p className="film-kicker">
                  <span className="film-rec-dot" aria-hidden="true" />
                  {tContact('form.eyebrow')}
                </p>
                <h2 className="max-w-xl text-[clamp(2.75rem,4.5vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-white">
                  {tContact('form.title')}
                </h2>
                <p className="body-md max-w-2xl text-on-surface-variant">
                  {tContact('form.subtitle')}
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  {(['name', 'phone', 'email'] as const).map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="mb-2 block text-sm font-medium text-white">
                        {tContact(`form.fields.${field}`)} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors[field])}
                        className="theme-input focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                        placeholder={tContact(`form.placeholders.${field}`)}
                      />
                      {errors[field] ? (
                        <p className="mt-2 text-sm text-primary" role="alert">
                          {errors[field]}
                        </p>
                      ) : null}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
                      {tContact('form.fields.service')} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.service)}
                      className="theme-select focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="">{tContact('form.placeholders.service')}</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {tContact(`form.services.${option}`)}
                        </option>
                      ))}
                    </select>
                    {errors.service ? (
                      <p className="mt-2 text-sm text-primary" role="alert">
                        {errors.service}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="feeling" className="mb-2 block text-sm font-medium text-white">
                      {tContact('form.fields.feeling')} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="feeling"
                      name="feeling"
                      value={formData.feeling}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.feeling)}
                      className="theme-select focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="">{tContact('form.placeholders.feeling')}</option>
                      {feelingOptions.map((option) => (
                        <option key={option} value={option}>
                          {tContact(`form.feelings.${option}`)}
                        </option>
                      ))}
                    </select>
                    {errors.feeling ? (
                      <p className="mt-2 text-sm text-primary" role="alert">
                        {errors.feeling}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="usage" className="mb-2 block text-sm font-medium text-white">
                      {tContact('form.fields.usage')} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="usage"
                      name="usage"
                      value={formData.usage}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.usage)}
                      className="theme-select focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="">{tContact('form.placeholders.usage')}</option>
                      {usageOptions.map((option) => (
                        <option key={option} value={option}>
                          {tContact(`form.usageOptions.${option}`)}
                        </option>
                      ))}
                    </select>
                    {errors.usage ? (
                      <p className="mt-2 text-sm text-primary" role="alert">
                        {errors.usage}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-white">
                      {tContact('form.fields.timeline')} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.timeline)}
                      className="theme-select focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="">{tContact('form.placeholders.timeline')}</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {tContact(`form.timelines.${option}`)}
                        </option>
                      ))}
                    </select>
                    {errors.timeline ? (
                      <p className="mt-2 text-sm text-primary" role="alert">
                        {errors.timeline}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white">
                      {tContact('form.fields.budget')} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.budget)}
                      className="theme-select focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="">{tContact('form.placeholders.budget')}</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {tContact(`form.budgets.${option}`)}
                        </option>
                      ))}
                    </select>
                    {errors.budget ? (
                      <p className="mt-2 text-sm text-primary" role="alert">
                        {errors.budget}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                    {tContact('form.fields.message')} <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    className="theme-textarea focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    placeholder={tContact('form.placeholders.message')}
                  />
                  {errors.message ? (
                    <p className="mt-2 text-sm text-primary" role="alert">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" variant="primary" className="gap-2 px-7 py-3.5">
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {tContact('form.submit')}
                  </Button>

                  <Link
                    href="/portfolio"
                    className="focus-ring inline-flex items-center justify-center rounded-sm border border-white/12 px-6 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-warm-white)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
                  >
                    {tContact('cta.viewWork')}
                  </Link>
                </div>
              </form>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            <ScrollReveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] tripod-editorial-panel">
                <div className="relative min-h-[14rem]">
                  <Image
                    src={sampleMedia.liveStreamingSetup.src}
                    alt={tCommon(sampleMedia.liveStreamingSetup.altKey)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                </div>
                <div className="p-6">
                  <p className="film-light-kicker">{tContact('response.eyebrow')}</p>
                  <h2 className="headline-md mt-3 text-[var(--tripod-text-dark)]">
                    {tContact('response.title')}
                  </h2>
                  <p className="body-md mt-3 text-[var(--tripod-text-muted-dark)]">
                    {tContact('response.body')}
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-[1.2rem] border border-[rgba(23,21,18,0.12)] bg-white/55 px-4 py-4">
                      <p className="font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                        {tContact('response.labels.channel')}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[var(--tripod-text-dark)]">
                        {tContact('response.values.channel')}
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-[rgba(23,21,18,0.12)] bg-white/55 px-4 py-4">
                      <p className="font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                        {tContact('response.labels.bestFor')}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[var(--tripod-text-dark)]">
                        {tContact('response.values.bestFor')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.4rem] border border-[rgba(23,21,18,0.12)] bg-black px-4 py-5">
                    <p className="font-mono text-[0.58rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                      {tContact('response.labels.flow')}
                    </p>
                    <div className="mt-4 space-y-3">
                      {(tContact.raw('response.flowSteps') as Array<{ number: string; title: string }>).map((step) => (
                        <div key={step.number} className="grid gap-3 md:grid-cols-[3.6rem_minmax(0,1fr)] md:items-center">
                          <div className="font-mono text-[0.62rem] font-black uppercase tracking-[0.18em] text-[var(--tripod-orange)]">
                            {step.number}
                          </div>
                          <div className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-[var(--tripod-warm-white)]">
                            {step.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={fallbackBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full"
                  >
                    <Button variant="primary" className="gap-2 px-6 py-3.5">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {tContact('cta.primary')}
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="rounded-[2rem] tripod-editorial-panel p-6">
                <p className="film-light-kicker">{tContact('contacts.eyebrow')}</p>
                <div className="mt-5 grid gap-4">
                  {contactItems.map(({ icon: Icon, title, value, href, external }) => {
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-[var(--tripod-text-dark)]">{title}</p>
                          <p className="mt-1 text-sm leading-6 text-[var(--tripod-text-muted-dark)]">{value}</p>
                        </div>
                      </div>
                    );

                    if (href) {
                      return external ? (
                        <a
                          key={title}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-[1.2rem] border border-[rgba(23,21,18,0.12)] bg-white/45 px-4 py-4 transition-colors hover:border-[rgba(255,124,72,0.38)]"
                        >
                          {content}
                        </a>
                      ) : (
                        <a
                          key={title}
                          href={href}
                          className="rounded-[1.2rem] border border-[rgba(23,21,18,0.12)] bg-white/45 px-4 py-4 transition-colors hover:border-[rgba(255,124,72,0.38)]"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={title}
                        className="rounded-[1.2rem] border border-[rgba(23,21,18,0.12)] bg-white/45 px-4 py-4"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="film-cta-section border-t border-white/8 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[1.04fr_0.78fr_0.68fr] lg:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <p className="film-kicker">
                <span className="film-rec-dot" aria-hidden="true" />
                {tContact('cta.eyebrow')}
              </p>
              <h2>{tContact('cta.title')}</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p>{tContact('cta.body')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={fallbackBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full"
              >
                <Button variant="primary" className="gap-2 px-6 py-3">
                  {tContact('cta.primary')}
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <Link
                href="/services"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border border-white/12 px-4 py-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--tripod-warm-white)] transition-colors hover:border-[var(--tripod-orange)] hover:text-[var(--tripod-orange)]"
              >
                {tContact('cta.secondary')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
