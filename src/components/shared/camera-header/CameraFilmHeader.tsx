'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { getWhatsAppNumber } from '@/config/site';
import { CameraBrand } from './CameraBrand';
import { FilmNavigation } from './FilmNavigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CameraMobileMenu } from './CameraMobileMenu';
import { CameraShutterTransition } from './CameraShutterTransition';

function isActiveRoute(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href === '/studio-academy') {
    return pathname === href || pathname.startsWith('/studio');
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function CameraFilmHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const whatsappNumber = getWhatsAppNumber();
  const message =
    locale === 'sw'
      ? 'Habari Tripod Creatives. Nina mradi mpya na ningependa kuanza nao.'
      : 'Hello Tripod Creatives. I have a new project and would like to get started.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const items = [
    { name: locale === 'sw' ? 'Home' : 'Home', href: '/' },
    { name: locale === 'sw' ? 'Services' : 'Services', href: '/services' },
    { name: locale === 'sw' ? 'Portfolio' : 'Portfolio', href: '/portfolio' },
    { name: locale === 'sw' ? 'Studio' : 'Studio', href: '/studio-academy' },
    { name: locale === 'sw' ? 'About' : 'About', href: '/about' },
    { name: locale === 'sw' ? 'Contact' : 'Contact', href: '/contact' },
  ].map((item) => ({
    ...item,
    active: isActiveRoute(pathname, item.href),
  }));

  return (
    <header className="camera-film-header">
      <CameraShutterTransition />

      <div className="camera-film-header__inner">
        <div className="camera-film-header__desktop">
          <CameraBrand />
          <FilmNavigation
            items={items}
            ctaHref={whatsappUrl}
            ctaLabel={locale === 'sw' ? 'Start a Project' : 'Start a Project'}
            onNavigate={() => setIsOpen(false)}
          />
        </div>

        <div className="camera-film-header__mobile">
          <CameraBrand />
          <div className="camera-film-header__mobile-controls">
            <LanguageSwitcher />
            <CameraMobileMenu
              isOpen={isOpen}
              onToggle={() => setIsOpen((prev) => !prev)}
              items={items}
              ctaHref={whatsappUrl}
              ctaLabel={locale === 'sw' ? 'Start a Project' : 'Start a Project'}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
