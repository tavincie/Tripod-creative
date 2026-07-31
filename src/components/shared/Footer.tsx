'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppNumber, siteConfig } from '@/config/site';

export function Footer() {
  const locale = useLocale();
  const tNav = useTranslations('Navigation');
  const whatsappNumber = getWhatsAppNumber();
  const whatsappMessage =
    locale === 'sw'
      ? 'Habari Tripod Creatives. Ningependa kujadili project mpya.'
      : 'Hello Tripod Creatives. I would like to discuss a new project.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const navLinks = [
    { label: tNav('home'), href: '/' },
    { label: tNav('services'), href: '/services' },
    { label: tNav('portfolio'), href: '/portfolio' },
    { label: locale === 'sw' ? 'Studio' : 'Studio', href: '/studio-academy' },
    { label: tNav('about'), href: '/about' },
    { label: tNav('contact'), href: '/contact' },
  ];

  const services =
    locale === 'sw'
      ? ['Branding', 'Photography', 'Video Production', 'Audio Studio', 'Printing', 'Digital Campaigns']
      : ['Branding', 'Photography', 'Video Production', 'Audio Studio', 'Printing', 'Digital Campaigns'];

  return (
    <footer className="film-footer">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-12 md:px-16 lg:grid-cols-[1.15fr_0.8fr_0.9fr_0.9fr]">
        <div>
          <Link href="/" className="film-logo-mark focus-ring rounded-sm">
            TRIP<span className="film-logo-o">O</span>D
            <small>Creatives</small>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(245,241,233,0.72)]">
            {locale === 'sw'
              ? 'Graphics. Photography. Video. Audio. Kila kitu chini ya roof moja ya ubunifu.'
              : 'Graphics. Photography. Video. Audio. All under one creative production roof.'}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] font-black uppercase tracking-[0.22em] text-[var(--tripod-orange)]">
            REC / DAR ES SALAAM / FRAME 006
          </p>
        </div>

        <div>
          <h2 className="film-footer-heading">{locale === 'sw' ? 'Navigation' : 'Navigation'}</h2>
          <nav className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="film-footer-link focus-ring">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="film-footer-heading">{locale === 'sw' ? 'Services' : 'Services'}</h2>
          <div className="mt-4 grid gap-2">
            {services.map((service) => (
              <Link key={service} href="/services" className="film-footer-link focus-ring">
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="film-footer-heading">{locale === 'sw' ? 'Contact' : 'Contact'}</h2>
          <div className="mt-4 grid gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="film-footer-link focus-ring">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="film-footer-link focus-ring">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
              Instagram
            </a>
            {siteConfig.youtubeUrl ? (
              <a href={siteConfig.youtubeUrl} target="_blank" rel="noopener noreferrer" className="film-footer-link focus-ring">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 8.5c0-1.4 1.1-2.5 2.5-2.5h11C18.9 6 20 7.1 20 8.5v7c0 1.4-1.1 2.5-2.5 2.5h-11C5.1 18 4 16.9 4 15.5z" />
                  <path d="m10 9 5 3-5 3z" />
                </svg>
                YouTube
              </a>
            ) : (
              <span className="film-footer-missing">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 8.5c0-1.4 1.1-2.5 2.5-2.5h11C18.9 6 20 7.1 20 8.5v7c0 1.4-1.1 2.5-2.5 2.5h-11C5.1 18 4 16.9 4 15.5z" />
                  <path d="m10 9 5 3-5 3z" />
                </svg>
                YouTube not configured
              </span>
            )}
            {siteConfig.location ? (
              <span className="film-footer-link">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {siteConfig.location}
              </span>
            ) : (
              <span className="film-footer-missing">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Location not configured
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/45 md:flex-row md:items-center md:justify-between md:px-16">
        <span>© {new Date().getFullYear()} Tripod Creatives</span>
        <span>Seen. Heard. Remembered.</span>
      </div>
    </footer>
  );
}
