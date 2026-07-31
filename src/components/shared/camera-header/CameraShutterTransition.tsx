'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from '@/i18n/routing';

export function CameraShutterTransition() {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      className="camera-shutter-transition"
      initial={{ opacity: 0.18 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.26, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      />
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
