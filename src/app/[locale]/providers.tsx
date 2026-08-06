'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';
import { BookingProvider } from '@/components/booking/BookingProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <BookingProvider>{children}</BookingProvider>
    </MotionConfig>
  );
}
