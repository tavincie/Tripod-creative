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
  void direction;

  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={false}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.21, 1.02, 0.43, 1.01] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
