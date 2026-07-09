'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const tNav = useTranslations('Navigation');
  const tFoot = useTranslations('Footer');
  const tCommon = useTranslations('Common');

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
        
        {/* Brand section */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-display text-xl font-black tracking-tight text-white focus-ring rounded">
            TRIPOD<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-on-surface-variant/80 max-w-xs">
            We shape digital ecosystems and visual narratives with cinematic precision and engineering craft.
          </p>
        </div>

        {/* Links section */}
        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-white">Navigation</span>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm text-on-surface-variant hover:text-white transition-colors focus-ring">
              {tNav('home')}
            </Link>
            <Link href="/about" className="text-sm text-on-surface-variant hover:text-white transition-colors focus-ring">
              {tNav('about')}
            </Link>
            <Link href="/services" className="text-sm text-on-surface-variant hover:text-white transition-colors focus-ring">
              {tNav('services')}
            </Link>
            <Link href="/portfolio" className="text-sm text-on-surface-variant hover:text-white transition-colors focus-ring">
              {tNav('portfolio')}
            </Link>
            <Link href="/studio-academy" className="text-sm text-on-surface-variant hover:text-white transition-colors focus-ring">
              {tNav('studioAcademy')}
            </Link>
            <Link href="/contact" className="text-sm text-on-surface-variant hover:text-white transition-colors focus-ring">
              {tNav('contact')}
            </Link>
          </nav>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</span>
          <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>{tCommon('contactEmail')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>{tCommon('contactPhone')}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{tCommon('officeLocation')}</span>
            </div>
          </div>
        </div>

        {/* Social presence */}
        <div className="flex flex-col gap-4">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-white">Socials</span>
          <a
            href="https://www.instagram.com/tripodcreative_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-white transition-colors group focus-ring rounded"
            aria-label="Visit Tripod Creative Instagram profile"
          >
            <svg
              className="w-5 h-5 text-primary group-hover:scale-110 transition-transform fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Footer Bottom copyright and policies */}
      <div className="mx-auto max-w-7xl px-5 md:px-16 mt-12 pt-8 border-t border-outline-variant/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant/60">
        <span>{tFoot('copyright')}</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors focus-ring">{tFoot('privacy')}</a>
          <a href="#" className="hover:text-white transition-colors focus-ring">{tFoot('terms')}</a>
        </div>
      </div>
    </footer>
  );
}
