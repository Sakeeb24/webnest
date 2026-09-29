import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * High-performance, lightweight route transition wrapper.
 * Conforms to Section 11:
 * - Uses opacity + subtle vertical translation (y: 6px)
 * - Ultra-short duration (180ms) ensuring instant feel without cinematic loading lag.
 * - Strictly respects prefers-reduced-motion (Section 12).
 */
export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.div>
  );
}
