'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { sampleMedia } from '@/data/sampleMedia';

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
  const locale = useLocale();
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const copy =
    locale === 'sw'
      ? {
          heroEyebrow: 'Creative Brief Intake',
          heroTitle: 'Leta brief yako ndani ya studio.',
          heroSubtitle:
            'Tueleze tunatengeneza nini, itaonekana wapi, na ni service gani unahitaji. Kisha tutume moja kwa moja kwenye WhatsApp.',
          formEyebrow: 'Send to Studio',
          formTitle: 'Project intake',
          formSubtitle: 'Form hii hubaki client-side na huandaa WhatsApp message yenye brief yako.',
          fields: {
            name: 'Jina lako',
            phone: 'Namba ya simu',
            email: 'Email yako',
            service: 'Tunatengeneza nini?',
            budget: 'Project size',
            message: 'Ujumbe wako',
          },
          placeholders: {
            name: 'Jina lako',
            phone: 'Namba yako ya simu',
            email: 'your@email.com',
            service: 'Chagua service',
            budget: 'Chagua project size',
            message: 'Eleza idea, platform, au campaign unayotaka.',
          },
          services: {
            brandingDesign: 'Branding & Design',
            printingCreativeProduction: 'Printing & Creative Production',
            digitalMarketing: 'Digital Campaigns',
            photography: 'Photography',
            videoDroneLiveStreaming: 'Video, Drone & Live Streaming',
            musicProduction: 'Music Production',
            recordingSession: 'Recording Session',
            instrumentTraining: 'Instrument Training',
            webAppDevelopment: 'Web & App Development',
            generalInquiry: 'General Inquiry',
          },
          budgets: {
            smallProject: 'Small Project',
            mediumProject: 'Medium Project',
            largeProject: 'Large Project',
            notSureYet: 'Not Sure Yet',
          },
          errors: {
            name: 'Tafadhali andika jina lako.',
            phone: 'Tafadhali andika namba yako ya simu.',
            email: 'Tafadhali andika email yako.',
            emailInvalid: 'Tafadhali andika email sahihi.',
            service: 'Tafadhali chagua service.',
            budget: 'Tafadhali chagua project size.',
            message: 'Tafadhali andika brief fupi.',
          },
          submit: 'SEND TO STUDIO',
          instantTitle: 'Anza moja kwa moja kwenye WhatsApp',
          instantBody: 'Ikiwa tayari unajua unachotaka, fungua chat ya haraka na utume brief hapo.',
          quickTitle: 'Quick contact',
          locationTitle: 'Location details coming soon',
          locationBody: 'Anwani rasmi bado haijawekwa. Sehemu hii inabaki wazi kama placeholder tu.',
          finalTitle: 'Bring your next project into the studio.',
          finalBody: 'Tuma brief, uliza swali, au anza na idea moja kali.',
        }
      : {
          heroEyebrow: 'Creative Brief Intake',
          heroTitle: 'Bring the brief into the studio.',
          heroSubtitle:
            'Tell us what we are creating, where it will appear, and which service you need. Then we send it straight to WhatsApp.',
          formEyebrow: 'Send to Studio',
          formTitle: 'Project intake',
          formSubtitle: 'This form stays client-side and prepares a WhatsApp message with your brief.',
          fields: {
            name: 'Your name',
            phone: 'Phone number',
            email: 'Your email',
            service: 'What are we creating?',
            budget: 'Project size',
            message: 'Your message',
          },
          placeholders: {
            name: 'Your name',
            phone: 'Your phone number',
            email: 'your@email.com',
            service: 'Select a service',
            budget: 'Select a project size',
            message: 'Describe the idea, platform, or campaign you want to build.',
          },
          services: {
            brandingDesign: 'Branding & Design',
            printingCreativeProduction: 'Printing & Creative Production',
            digitalMarketing: 'Digital Campaigns',
            photography: 'Photography',
            videoDroneLiveStreaming: 'Video, Drone & Live Streaming',
            musicProduction: 'Music Production',
            recordingSession: 'Recording Session',
            instrumentTraining: 'Instrument Training',
            webAppDevelopment: 'Web & App Development',
            generalInquiry: 'General Inquiry',
          },
          budgets: {
            smallProject: 'Small Project',
            mediumProject: 'Medium Project',
            largeProject: 'Large Project',
            notSureYet: 'Not Sure Yet',
          },
          errors: {
            name: 'Please enter your name.',
            phone: 'Please enter your phone number.',
            email: 'Please enter your email address.',
            emailInvalid: 'Please enter a valid email address.',
            service: 'Please choose a service.',
            budget: 'Please choose a project size.',
            message: 'Please enter a short brief.',
          },
          submit: 'SEND TO STUDIO',
          instantTitle: 'Jump straight into WhatsApp',
          instantBody: 'If you already know what you need, open a direct chat and send the brief there.',
          quickTitle: 'Quick contact',
          locationTitle: 'Location details coming soon',
          locationBody: 'A confirmed address has not been added yet. This section stays clearly marked as a placeholder.',
          finalTitle: 'Bring your next project into the studio.',
          finalBody: 'Send the brief, ask a question, or start with one sharp idea.',
        };

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
    ],
    [],
  );

  const budgetOptions = useMemo(
    () => ['smallProject', 'mediumProject', 'largeProject', 'notSureYet'],
    [],
  );

  function validate(values: FormData): FormErrors {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = copy.errors.name;
    if (!values.phone.trim()) nextErrors.phone = copy.errors.phone;
    if (!values.email.trim()) nextErrors.email = copy.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = copy.errors.emailInvalid;
    }
    if (!values.service) nextErrors.service = copy.errors.service;
    if (!values.budget) nextErrors.budget = copy.errors.budget;
    if (!values.message.trim()) nextErrors.message = copy.errors.message;
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
    const serviceLabel = copy.services[values.service as keyof typeof copy.services];
    const budgetLabel = copy.budgets[values.budget as keyof typeof copy.budgets];
    const message =
      locale === 'sw'
        ? `Habari Tripod Creative. Jina langu ni ${values.name}. Ningependa kuweka nafasi ya huduma ya ${serviceLabel}. Ukubwa wa project ni ${budgetLabel}. Simu yangu ni ${values.phone}. Email yangu ni ${values.email}. Ujumbe: ${values.message}.`
        : `Hello Tripod Creative. My name is ${values.name}. I would like to book ${serviceLabel}. My project size is ${budgetLabel}. My phone is ${values.phone}. My email is ${values.email}. Message: ${values.message}.`;
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
                  {copy.heroEyebrow}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h1 className="display-lg text-white">{copy.heroTitle}</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="body-lg max-w-2xl text-on-surface-variant">{copy.heroSubtitle}</p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.16}>
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image
                    src={sampleMedia.creativeTeamBts.src}
                    alt={sampleMedia.creativeTeamBts.alt}
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
                        alt={media.alt}
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

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <ScrollReveal>
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 sm:p-8">
              <div className="mb-6">
                <span className="label-sm text-primary">{copy.formEyebrow}</span>
                <h2 className="headline-lg mt-4 text-white">{copy.formTitle}</h2>
                <p className="body-md mt-3 text-on-surface-variant">{copy.formSubtitle}</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  {(['name', 'phone', 'email'] as const).map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="mb-2 block text-sm font-medium text-white">
                        {copy.fields[field]} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors[field])}
                        className="theme-input focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                        placeholder={copy.placeholders[field]}
                      />
                      {errors[field] ? <p className="mt-2 text-sm text-primary" role="alert">{errors[field]}</p> : null}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
                      {copy.fields.service} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.service)}
                      className="theme-select focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="">{copy.placeholders.service}</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {copy.services[option as keyof typeof copy.services]}
                        </option>
                      ))}
                    </select>
                    {errors.service ? <p className="mt-2 text-sm text-primary" role="alert">{errors.service}</p> : null}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white">
                      {copy.fields.budget} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.budget)}
                      className="theme-select focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                    >
                      <option value="">{copy.placeholders.budget}</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {copy.budgets[option as keyof typeof copy.budgets]}
                        </option>
                      ))}
                    </select>
                    {errors.budget ? <p className="mt-2 text-sm text-primary" role="alert">{errors.budget}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                      {copy.fields.message} <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      className="theme-textarea focus-ring w-full rounded-2xl px-4 py-3 text-sm"
                      placeholder={copy.placeholders.message}
                    />
                    {errors.message ? <p className="mt-2 text-sm text-primary" role="alert">{errors.message}</p> : null}
                  </div>
                </div>

                <Button type="submit" variant="primary" className="gap-2 px-7 py-3.5">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {copy.submit}
                </Button>
              </form>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            <ScrollReveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
                <div className="relative min-h-[14rem]">
                  <Image
                    src={sampleMedia.liveStreamingSetup.src}
                    alt={sampleMedia.liveStreamingSetup.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
                </div>
                <div className="p-6">
                  <h2 className="headline-md text-white">{copy.instantTitle}</h2>
                  <p className="body-md mt-3 text-on-surface-variant">{copy.instantBody}</p>
                  <a href={fallbackBookingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full">
                    <Button variant="primary" className="gap-2 px-6 py-3.5">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
                <p className="label-sm text-primary">{copy.quickTitle}</p>
                <div className="mt-5 space-y-4">
                  {[
                    { icon: MessageCircle, title: 'WhatsApp', value: locale === 'sw' ? 'Anza mazungumzo ya moja kwa moja' : 'Start a direct conversation' },
                    { icon: Phone, title: locale === 'sw' ? 'Simu' : 'Phone', value: '[Contact Phone Placeholder]' },
                    { icon: Mail, title: 'Email', value: '[Contact Email Placeholder]' },
                  ].map(({ icon: Icon, title, value }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-on-surface-variant">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
                <h3 className="text-lg font-semibold text-white">{copy.locationTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">{copy.locationBody}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-16">
          <ScrollReveal>
            <h2 className="headline-lg text-white">{copy.finalTitle}</h2>
            <p className="body-md mx-auto mt-4 max-w-2xl text-on-surface-variant">{copy.finalBody}</p>
            <a href={fallbackBookingUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full">
              <Button variant="primary" className="px-7 py-3.5">
                {copy.submit}
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
