'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
  const [isVisible, setIsVisible] = useState(true);
  const tNav = useTranslations('Navigation');
  const tServices = useTranslations('ServicesPage');
  const pathname = usePathname();
  const whatsappNumber = getWhatsAppNumber();
  const message = tServices('metadataMessages.hero');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const items = [
    { name: tNav('home'), href: '/' },
    { name: tNav('services'), href: '/services' },
    { name: tNav('portfolio'), href: '/portfolio' },
    { name: tNav('studioShort'), href: '/studio-academy' },
    { name: tNav('about'), href: '/about' },
    { name: tNav('contact'), href: '/contact' },
  ].map((item) => ({
    ...item,
    active: isActiveRoute(pathname, item.href),
  }));

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY <= 24) {
        setIsVisible(true);
      } else if (delta > 6) {
        setIsVisible(false);
      } else if (delta < -6) {
        setIsVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="camera-film-header"
      data-visible={isVisible}
      animate={{
        y: isVisible ? 0 : -180,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <CameraShutterTransition />

      <div className="camera-film-header__inner">
        <div className="camera-film-header__desktop">
          <div className="camera-film-assembly">
            <div className="camera-film-assembly__brand">
              <CameraBrand />
            </div>
            <div className="camera-film-assembly__feed">
              <FilmNavigation
                items={items}
                ctaHref={whatsappUrl}
                ctaLabel={tNav('startProject')}
                onNavigate={() => setIsOpen(false)}
              />
            </div>
          </div>
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
              ctaLabel={tNav('startProject')}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
