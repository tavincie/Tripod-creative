'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcher } from './LocaleSwitcher';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('Navigation');

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('studioAcademy'), href: '/studio-academy' },
    { name: t('contact'), href: '/contact' },
  ];

  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000';
  const whatsappNumber = rawNumber.replace(/[^0-9]/g, '');
  const message =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kuweka nafasi ya huduma za ubunifu.'
      : 'Hello Tripod! I would like to book a creative session.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-outline-variant/10 bg-background/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-5 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus-ring rounded-md">
          <span className="font-display text-xl md:text-2xl font-black tracking-tight text-white transition-all duration-300 group-hover:tracking-normal">
            TRIPOD<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-on-surface/85 hover:text-white transition-colors animated-underline focus-ring"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <LocaleSwitcher />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full"
          >
            <Button variant="primary" className="flex items-center gap-2 py-2 px-5">
              <MessageCircle className="w-4 h-4" />
              <span>{t('cta')}</span>
            </Button>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <LocaleSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-on-surface/90 hover:text-white focus-ring rounded-lg cursor-pointer transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background/95 border-b border-outline-variant/15 py-8 px-6 flex flex-col gap-6 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-on-surface hover:text-white border-b border-outline-variant/10 pb-2 focus-ring"
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
