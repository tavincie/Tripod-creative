'use client';

import React, { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

type ThemeMode = 'dark' | 'light';

function getThemeSnapshot(): ThemeMode {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  const handleThemeChange = () => callback();

  window.addEventListener('storage', handleThemeChange);
  window.addEventListener('tripod-theme-change', handleThemeChange);

  return () => {
    window.removeEventListener('storage', handleThemeChange);
    window.removeEventListener('tripod-theme-change', handleThemeChange);
  };
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  root.classList.add(theme);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => 'dark');

  function handleThemeChange(nextTheme: ThemeMode) {
    applyTheme(nextTheme);
    localStorage.setItem('tripod-theme', nextTheme);
    window.dispatchEvent(new Event('tripod-theme-change'));
  }

  return (
    <div suppressHydrationWarning className="theme-toggle-shell flex items-center gap-1 rounded-full p-1">
      <button
        type="button"
        onClick={() => handleThemeChange('dark')}
        aria-label="Switch to dark theme"
        aria-pressed={theme === 'dark'}
        className={`theme-toggle-option focus-ring inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
          theme === 'dark' ? 'active' : ''
        }`}
      >
        <Moon className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Dark</span>
      </button>
      <button
        type="button"
        onClick={() => handleThemeChange('light')}
        aria-label="Switch to light theme"
        aria-pressed={theme === 'light'}
        className={`theme-toggle-option focus-ring inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
          theme === 'light' ? 'active' : ''
        }`}
      >
        <Sun className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Light</span>
      </button>
    </div>
  );
}
