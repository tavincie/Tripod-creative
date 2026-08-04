'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppNumber, siteConfig } from '@/config/site';

export function Footer() {
  const tNav = useTranslations('Navigation');
  const tFooter = useTranslations('Footer');
  const tCommon = useTranslations('Common');
  const whatsappNumber = getWhatsAppNumber();
  const whatsappMessage = tFooter('whatsappMessage');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const navLinks = [
    { label: tNav('home'), href: '/' },
    { label: tNav('services'), href: '/services' },
    { label: tNav('portfolio'), href: '/portfolio' },
    { label: tNav('studioShort'), href: '/studio-academy' },
    { label: tNav('about'), href: '/about' },
    { label: tNav('contact'), href: '/contact' },
  ];

  const services = tFooter.raw('services') as string[];

  return (
    <footer className="film-footer">
      <div className="tripod-shell--wide grid gap-9 py-12 md:grid-cols-[1.15fr_0.8fr_0.9fr_0.9fr] md:py-14">
        <div>
          <Link href="/" className="film-logo-mark focus-ring rounded-sm">
            TRIP<span className="film-logo-o">O</span>D
            <small>Creatives</small>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(245,241,233,0.72)]">
            {tFooter('description')}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] font-black uppercase tracking-[0.22em] text-[var(--tripod-orange)]">
            {tFooter('recLine')}
          </p>
        </div>

        <div>
          <h2 className="film-footer-heading">{tFooter('navHeading')}</h2>
          <nav className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="film-footer-link focus-ring">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="film-footer-heading">{tFooter('servicesHeading')}</h2>
          <div className="mt-4 grid gap-2">
            {services.map((service) => (
              <Link key={service} href="/services" className="film-footer-link focus-ring">
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="film-footer-heading">{tFooter('contactHeading')}</h2>
          <div className="mt-4 grid gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="film-footer-link focus-ring">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {tCommon('whatsApp')}
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="film-footer-link focus-ring">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
              {tCommon('instagram')}
            </a>
            {siteConfig.location ? (
              <span className="film-footer-link">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {siteConfig.location}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="tripod-shell--wide flex flex-col gap-3 border-t border-white/10 py-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/45 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Tripod Creatives</span>
        <span>{tFooter('tagline')}</span>
      </div>
    </footer>
  );
}
