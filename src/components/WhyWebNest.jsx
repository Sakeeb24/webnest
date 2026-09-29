import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import './WhyWebNest.css';

export default function WhyWebNest() {
  const shouldReduceMotion = useReducedMotion();

  const qualities = [
    {
      code: '01',
      title: 'Modern Design',
      description: 'Clean typography, balanced whitespace, and visual prestige tailored to your specific brand identity.',
    },
    {
      code: '02',
      title: 'Mobile First',
      description: 'Built and tested for phone screens where over 80% of local customers discover services.',
    },
    {
      code: '03',
      title: 'Responsive',
      description: 'Seamless viewing and interaction across laptops, iPads, tablets, and smartphones.',
    },
    {
      code: '04',
      title: 'WhatsApp Ready',
      description: 'Direct 1-tap customer conversation links with tailored inquiry prefilled messages.',
    },
    {
      code: '05',
      title: 'Google Maps',
      description: 'Integrated location pins and direction routing so local customers find your venue immediately.',
    },
    {
      code: '06',
      title: 'Custom Built',
      description: 'Engineered specifically for your business model with clean code, sub-second speed, and zero templates.',
    },
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
          <div className="why-eyebrow">
            <ShieldCheck size={13} className="text-brand" aria-hidden="true" />
            <span>STUDIO STANDARDS</span>
          </div>
          <h2 id="why-heading" className="display-sm why-title">
            Built for Businesses. Designed to Be Remembered.
          </h2>
          <p className="body-lg why-subtitle">
            We focus on clear design, responsive experiences and websites that make it easy for customers to discover and contact your business.
          </p>
        </motion.div>

        {/* 6 Concise Qualities Grid (No fake claims or stats) */}
        <div className="why-qualities-grid">
          {qualities.map((item, idx) => (
            <motion.article
              key={item.code}
              className="why-quality-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : (idx % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="quality-card-top">
                <span className="quality-code">[ {item.code} ]</span>
                <span className="quality-dot" aria-hidden="true" />
              </div>
              <h3 className="quality-title">{item.title}</h3>
              <p className="quality-desc">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
