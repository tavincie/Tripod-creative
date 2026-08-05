'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  amount?: number;
}

const motionOffset = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -24 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.72,
  className = '',
  amount = 0.24,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = motionOffset[direction];

  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount }}
        transition={{ duration: 0.2, delay: Math.min(delay, 0.08), ease: 'linear' }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount, margin: '0px 0px -12% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        filter: { duration: Math.min(duration, 0.52), delay, ease: 'easeOut' },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
