'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import { BookingModal } from './BookingModal';

interface BookingContextValue {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  const value = useMemo<BookingContextValue>(
    () => ({
      openBooking: () => setBookingOpen(true),
    }),
    [],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }

  return context;
}
