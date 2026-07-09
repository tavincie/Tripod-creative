'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  className = '',
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, only fade in
  if (shouldReduceMotion || direction === 'none') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.21, 1.02, 0.43, 1.01] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
