'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavItem {
  name: string;
  href: string;
  active: boolean;
}

interface CameraMobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
}

export function CameraMobileMenu({
  isOpen,
  onToggle,
  items,
  ctaHref,
  ctaLabel,
}: CameraMobileMenuProps) {
  return (
    <div className="camera-mobile-menu lg:hidden">
      <button
        type="button"
        onClick={onToggle}
        className="camera-mobile-menu__toggle focus-ring"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="camera-mobile-menu__panel"
          >
            <div className="camera-mobile-menu__controls">
              <LanguageSwitcher />
            </div>

            <nav className="camera-mobile-menu__nav">
              {items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onToggle}
                  aria-current={item.active ? 'page' : undefined}
                  className={`camera-mobile-menu__item focus-ring ${item.active ? 'is-active' : ''}`}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.name}</strong>
                </Link>
              ))}
            </nav>

            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onToggle}
              className="camera-mobile-menu__cta focus-ring"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
