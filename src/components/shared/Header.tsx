'use client';

import React, { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcher } from './LocaleSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Circle, Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getWhatsAppNumber } from '@/config/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: locale === 'sw' ? 'Studio' : 'Studio', href: '/studio-academy' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const whatsappNumber = getWhatsAppNumber();
  const message =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kuweka nafasi ya huduma za ubunifu.'
      : 'Hello Tripod! I would like to book a creative session.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="film-site-header sticky top-0 z-40 w-full transition-all duration-300">
      <div className="mx-auto max-w-7xl px-5 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus-ring rounded-sm">
          <span className="film-logo-mark">
            TRIP<span className="film-logo-o">O<Circle className="absolute h-2.5 w-2.5 fill-[var(--tripod-orange)] text-[var(--tripod-orange)]" aria-hidden="true" /></span>D
            <small>Creatives</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="film-nav-link focus-ring"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <LocaleSwitcher />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full"
          >
            <Button variant="primary" className="flex items-center gap-2 py-2 px-5 uppercase tracking-[0.14em]">
              <MessageCircle className="w-4 h-4" />
              <span>{locale === 'sw' ? 'Start a Project' : 'Start a Project'}</span>
            </Button>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <LocaleSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/90 hover:text-[var(--tripod-orange)] focus-ring rounded-sm cursor-pointer transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="film-mobile-drawer lg:hidden absolute top-20 left-0 w-full py-8 px-6 flex flex-col gap-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="text-lg font-black uppercase tracking-[0.08em] text-white hover:text-[var(--tripod-orange)] border-b border-white/10 pb-3 focus-ring"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full focus-ring rounded-full"
          >
            <Button
              variant="primary"
              className="w-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('cta')}</span>
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
