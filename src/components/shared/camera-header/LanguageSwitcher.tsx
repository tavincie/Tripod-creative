'use client';

import React from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  function handleLocaleChange(nextLocale: 'en' | 'sw') {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="film-language-switcher" role="group" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => handleLocaleChange('en')}
        aria-pressed={locale === 'en'}
        className={locale === 'en' ? 'is-active' : ''}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleLocaleChange('sw')}
        aria-pressed={locale === 'sw'}
        className={locale === 'sw' ? 'is-active' : ''}
      >
        SW
      </button>
    </div>
  );
}
