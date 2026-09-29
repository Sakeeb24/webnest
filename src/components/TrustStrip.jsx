import React from 'react';
import { Smartphone, Palette, Clock, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function TrustStrip() {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      icon: <Smartphone size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Mobile-First Design',
      description: 'Engineered for seamless experience on smartphones and tablets'
    },
    {
      icon: <Palette size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Modern Architecture',
      description: 'Clean typography, fast load speeds, and bespoke branding'
    },
    {
      icon: <Clock size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Fast Turnaround',
      description: 'From initial briefing to live deployment in days'
    },
    {
      icon: <ShieldCheck size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Clear Deliverables',
      description: 'Defined package scopes, fast timelines, and direct founder execution'
    }
  ];

  return (
    <section className="trust-strip-section" aria-label="WebNest Studio Highlights">
      <div className="container">
        <div className="trust-strip-grid">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              className="trust-item"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="trust-icon-wrapper">
                {val.icon}
              </div>
              <div className="trust-text">
                <h2 className="trust-title">{val.title}</h2>
                <p className="trust-desc">{val.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
