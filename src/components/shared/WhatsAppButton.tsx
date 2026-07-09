'use client';

import React from 'react';
import { useLocale } from 'next-intl';

export function WhatsAppButton() {
  const locale = useLocale();
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255000000000';
  const whatsappNumber = rawNumber.replace(/[^0-9]/g, '');

  const message =
    locale === 'sw'
      ? 'Habari Tripod! Ningependa kuweka nafasi ya huduma za ubunifu.'
      : 'Hello Tripod! I would like to book a creative session.';

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus-ring focus-visible:ring-[#25D366]"
      aria-label="Contact Tripod Creative on WhatsApp"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.933 1.504 5.485 0 9.948-4.468 9.95-9.958.002-2.66-1.019-5.162-2.87-7.017C16.852 1.83 14.368.809 11.998.809c-5.49 0-9.952 4.467-9.955 9.958-.002 1.832.493 3.62 1.43 5.2l-.946 3.456 3.53-.926zm11.233-5.592c-.22-.11-.1.3-.807-.63-.447-.552-.336-.45-.447-.63-.11-.18-.11-.3-.055-.41.055-.11.22-.26.33-.39.11-.13.146-.22.22-.36.074-.14.037-.26-.018-.37-.055-.11-.533-1.284-.73-1.758-.19-.462-.383-.4-.53-.408-.137-.006-.294-.007-.451-.007-.157 0-.413.06-.63.294-.216.235-.826.808-.826 1.97 0 1.162.846 2.28.963 2.44.118.16 1.664 2.54 4.03 3.559.564.24 1.004.384 1.348.493.567.18 1.083.155 1.492.094.456-.068 1.4-.572 1.596-1.127.197-.555.197-1.03.137-1.127-.059-.098-.22-.153-.44-.263z" />
      </svg>
      {/* Decorative pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none -z-10" />
    </a>
  );
}
