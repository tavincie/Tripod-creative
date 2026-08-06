'use client';

import React from 'react';
import Image from 'next/image';
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
      <div className="tripod-shell--wide film-footer__container">
        <div className="film-footer__grid">
          <div className="film-footer-brand">
            <Link href="/" prefetch={false} className="film-footer-logo focus-ring rounded-sm" aria-label="Tripod Creative Agency home">
              <Image
                src="/branding/tripod-creative-footer-logo.png"
                alt="Tripod Creative Agency logo"
                width={420}
                height={233}
              />
            </Link>
            <p className="film-footer-brand__description max-w-sm text-sm leading-7 text-[rgba(245,241,233,0.72)]">
              {tFooter('description')}
            </p>
            <p className="film-footer-brand__rec font-mono text-[0.62rem] font-black uppercase tracking-[0.22em] text-[var(--tripod-orange)]">
              {tFooter('recLine')}
            </p>
          </div>

          <div className="film-footer-column">
            <h2 className="film-footer-heading">{tFooter('navHeading')}</h2>
            <nav className="film-footer-list">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} prefetch={false} className="film-footer-link focus-ring">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="film-footer-column">
            <h2 className="film-footer-heading">{tFooter('servicesHeading')}</h2>
            <div className="film-footer-list">
              {services.map((service) => (
                <Link key={service} href="/services" prefetch={false} className="film-footer-link focus-ring">
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div className="film-footer-column">
            <h2 className="film-footer-heading">{tFooter('contactHeading')}</h2>
            <div className="film-footer-list film-footer-list--contact">
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
      </div>

      <div className="tripod-shell--wide film-footer-bottom">
        <span>© {new Date().getFullYear()} Tripod Creative Agency</span>
        <span>{tFooter('tagline')}</span>
      </div>
    </footer>
  );
}
