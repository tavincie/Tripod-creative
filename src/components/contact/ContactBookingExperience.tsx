'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { sampleMedia } from '@/data/sampleMedia';
import { siteConfig } from '@/config/site';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
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
      'brandingDesign',
      'printingCreativeProduction',
      'digitalMarketing',
      'photography',
      'videoDroneLiveStreaming',
      'musicProduction',
      'recordingSession',
      'instrumentTraining',
      'webAppDevelopment',
      'generalInquiry',
    ] as const,
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
    const budgetLabel = tContact(`form.budgets.${values.budget}`);
    const message = tContact('form.whatsappTemplate', {
      name: values.name,
      service: serviceLabel,
      budget: budgetLabel,
      phone: values.phone,
      email: values.email,
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

  return (
    <main className="relative flex-grow overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/6 pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(255,126,0,0.28),transparent_24%),radial-gradient(circle_at_86%_28%,rgba(253,208,0,0.1),transparent_22%),linear-gradient(180deg,rgba(8,10,12,0.95),rgba(8,10,12,0.74))]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,1.1fr)] lg:items-center">
            <div className="space-y-5">
              <ScrollReveal>
                <span className="label-sm inline-flex rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-primary">
                  {tContact('hero.eyebrow')}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="display-lg text-white">{tContact('hero.title')}</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="body-lg max-w-2xl text-on-surface-variant">
                  {tContact('hero.subtitle')}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.16}>
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src={sampleMedia.creativeTeamBts.src}
                    alt={tCommon(sampleMedia.creativeTeamBts.altKey)}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))]" />
                </div>
                <div className="grid gap-4">
                  {[sampleMedia.socialCampaignVisuals, sampleMedia.studioMicrophone].map((media) => (
                    <div key={media.key} className="relative min-h-[12rem] overflow-hidden rounded-[1.6rem] border border-white/10">
                      <Image
                        src={media.src}
                        alt={tCommon(media.altKey)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 22vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="tripod-page-light py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <ScrollReveal>
            <div className="rounded-[2rem] tripod-dark-panel p-6 sm:p-8">
              <div className="mb-6">
                <span className="label-sm text-primary">{tContact('form.eyebrow')}</span>
                <h2 className="headline-lg mt-4 text-white">{tContact('form.title')}</h2>
                <p className="body-md mt-3 text-on-surface-variant">{tContact('form.subtitle')}</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
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
                      {errors[field] ? <p className="mt-2 text-sm text-primary" role="alert">{errors[field]}</p> : null}
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
                    {errors.service ? <p className="mt-2 text-sm text-primary" role="alert">{errors.service}</p> : null}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
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
                    {errors.budget ? <p className="mt-2 text-sm text-primary" role="alert">{errors.budget}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                      {tContact('form.fields.message')} <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      className="theme-textarea focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                      placeholder={tContact('form.placeholders.message')}
                    />
                    {errors.message ? <p className="mt-2 text-sm text-primary" role="alert">{errors.message}</p> : null}
                  </div>
                </div>

                <Button type="submit" variant="primary" className="gap-2 px-7 py-3.5">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {tContact('form.submit')}
                </Button>
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
                  <h2 className="headline-md text-[var(--tripod-text-dark)]">{tContact('instant.title')}</h2>
                  <p className="body-md mt-3 text-[var(--tripod-text-muted-dark)]">{tContact('instant.body')}</p>
                  <a href={fallbackBookingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full">
                    <Button variant="primary" className="gap-2 px-6 py-3.5">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {tContact('instant.button')}
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="rounded-[2rem] tripod-editorial-panel p-6">
                <p className="label-sm text-primary">{tContact('quick.title')}</p>
                <div className="mt-5 space-y-4">
                  {[
                    {
                      icon: MessageCircle,
                      title: tContact('quick.whatsappTitle'),
                      value: tContact('quick.whatsappValue'),
                    },
                    {
                      icon: Phone,
                      title: tContact('quick.phoneTitle'),
                      value: siteConfig.phone || tContact('quick.phoneFallback'),
                    },
                    {
                      icon: Mail,
                      title: tContact('quick.emailTitle'),
                      value: siteConfig.email || tContact('quick.emailFallback'),
                    },
                  ].map(({ icon: Icon, title, value }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-[var(--tripod-text-dark)]">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--tripod-text-muted-dark)]">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="rounded-[2rem] tripod-editorial-panel p-6">
                <h3 className="text-lg font-semibold text-[var(--tripod-text-dark)]">{tContact('location.title')}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--tripod-text-muted-dark)]">{tContact('location.body')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="tripod-page-dark py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-16">
          <ScrollReveal>
            <h2 className="headline-lg text-white">{tContact('final.title')}</h2>
            <p className="body-md mx-auto mt-4 max-w-2xl text-on-surface-variant">{tContact('final.body')}</p>
            <a href={fallbackBookingUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full">
              <Button variant="primary" className="px-7 py-3.5">
                {tContact('form.submit')}
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
