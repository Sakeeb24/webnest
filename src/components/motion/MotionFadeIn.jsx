import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Standard reusable scroll reveal component.
 * Adheres to Section 6 (opacity: 0 -> 1, y: 24-40px -> 0, duration: 0.45-0.7s)
 * Automatically respects prefers-reduced-motion (Section 12 & 13: zero movement when reduced motion is preferred).
 */
export default function MotionFadeIn({
  children,
  delay = 0,
  y = 28,
  duration = 0.55,
  className = '',
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
