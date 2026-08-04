import localFont from 'next/font/local';

export const inter = localFont({
  src: '../assets/fonts/GeistLatin.woff2',
  variable: '--font-inter',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

export const montserrat = localFont({
  src: '../assets/fonts/GeistLatin.woff2',
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

export const geistMono = localFont({
  src: '../assets/fonts/GeistMonoLatin.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
  fallback: ['Courier New', 'Courier', 'monospace'],
});
