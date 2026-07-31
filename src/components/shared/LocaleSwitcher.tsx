'use client';

import React from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleLocaleChange = (nextLocale: 'en' | 'sw') => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="locale-switcher-shell flex items-center gap-1 rounded-full border border-outline-variant/20 bg-surface-container/60 p-1 backdrop-blur-md">
      <button
        onClick={() => handleLocaleChange('en')}
        className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 focus-ring cursor-pointer ${
          currentLocale === 'en'
            ? 'bg-primary text-black shadow-sm'
            : 'text-on-surface/75 hover:text-white'
        }`}
        aria-label="Switch to English locale"
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange('sw')}
        className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 focus-ring cursor-pointer ${
          currentLocale === 'sw'
            ? 'bg-primary text-black shadow-sm'
            : 'text-on-surface/75 hover:text-white'
        }`}
        aria-label="Badilisha kwenda Kiswahili"
      >
        SW
      </button>
    </div>
  );
}
