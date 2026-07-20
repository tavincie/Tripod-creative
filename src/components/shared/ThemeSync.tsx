'use client';

import { useEffect } from 'react';
import { usePathname } from '@/i18n/routing';

type ThemeMode = 'dark' | 'light';

function resolveTheme(): ThemeMode {
  try {
    const savedTheme = localStorage.getItem('tripod-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  } catch {
    return 'dark';
  }
}

export function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    const theme = resolveTheme();
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [pathname]);

  return null;
}
