import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import './WhyWebNest.css';

export default function WhyWebNest() {
  const shouldReduceMotion = useReducedMotion();

  const principles = [
    {
      num: '01',
      title: 'Fast Turnaround',
      description: 'Modern development tools and streamlined workflows allow us to build, test, and launch your website without months of bureaucratic delays.'
    },
    {
      num: '02',
      title: 'Custom Brand Identity',
      description: 'Every site is tailored specifically to your business, clientele, and service model — avoiding recycled template looks.'
    },
    {
      num: '03',
      title: 'Mobile-First Architecture',
      description: 'Over 80% of local customers discover services on their phones. We prioritize thumb-friendly navigation, instant tap-to-call, and speed.'
    },
    {
      num: '04',
      title: 'Direct Founder Communication',
      description: 'No account managers, sales intermediaries, or agency runaround. You work directly with the developers building your site.'
    },
    {
      num: '05',
      title: 'Clear Scope & Milestones',
      description: 'Well-defined deliverables with zero ambiguity, locking contracts, or unexpected recurring subscription traps.'
    },
    {
      num: '06',
      title: 'Reliable Post-Launch Support',
      description: 'We don’t disappear after go-live. We assist with domain setup, menu/hours updates, and technical adjustments as your business grows.'
    }
  ];

  return (
    <section className="section why-editorial-section" id="why" aria-labelledby="why-heading">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge">
            <HeartHandshake size={14} aria-hidden="true" />
            <span>Studio Principles</span>
          </div>
          <h2 id="why-heading" className="display-sm why-editorial-heading">
            Why businesses choose WebNest
          </h2>
          <p className="body-lg why-editorial-sub">
            We are an independent two-person web studio. We focus on craft, performance, and commercial utility for real businesses.
          </p>
        </motion.div>

        {/* Editorial Feature Grid */}
        <div className="why-principles-grid">
          {principles.map((p, idx) => (
            <motion.div
              key={p.num}
              className="why-principle-item"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : (idx % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="why-principle-num" aria-hidden="true">{p.num}</span>
              <h3 className="heading-sm why-principle-title">{p.title}</h3>
              <p className="body-sm why-principle-desc">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
