import React from 'react';
import { Sparkles, Smartphone, Gauge, MessageCircle, Code2, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import './WhyWebNest.css';

export default function WhyWebNest() {
  const shouldReduceMotion = useReducedMotion();

  const supportingPoints = [
    {
      id: 'design',
      title: 'Design',
      icon: Sparkles,
      description: 'Curated typography, balanced whitespace, and visual prestige tailored to make your business look its absolute best.',
    },
    {
      id: 'mobile',
      title: 'Mobile',
      icon: Smartphone,
      description: 'Engineered and tested for phone screens where over 80% of local customers discover restaurants, gyms, and services.',
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: Gauge,
      description: 'Clean, lean web architecture that loads in milliseconds, keeping prospective customers engaged without delays.',
    },
    {
      id: 'integration',
      title: 'Integration',
      icon: MessageCircle,
      description: 'Direct 1-tap WhatsApp communication and Google Maps directions built in for frictionless customer action.',
    },
    {
      id: 'custom-build',
      title: 'Custom Build',
      icon: Code2,
      description: 'Engineered specifically for your business model with tailored code, robust structure, and zero generic templates.',
    },
  ];

  return (
    <section className="section why-statement-section" id="why" aria-labelledby="why-heading">
      <div className="container">
        {/* Split Statement Editorial Layout */}
        <div className="why-split-layout">
          {/* Left Column: Large Editorial Statement */}
          <motion.div
            className="why-statement-col"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="why-eyebrow">
              <ShieldCheck size={13} className="text-brand" aria-hidden="true" />
              <span>STUDIO PHILOSOPHY</span>
            </div>

            <h2 id="why-heading" className="display-sm why-statement-headline">
              Good websites don’t just look good. <br />
              <span className="statement-highlight">They make your business easier to discover.</span>
            </h2>

            <p className="body-lg why-statement-sub">
              Your website is often the first impression a prospective client has of your business. We engineer digital experiences that immediately establish legitimacy, communicate value, and remove every barrier between discovery and conversion.
            </p>

            <div className="why-statement-quote-box">
              <span className="quote-mark">“</span>
              <p className="quote-text">
                Every design choice is intentional — from how fast your page loads on mobile to how easy it is to find your location and chat on WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 5 Supporting Points with Icons */}
          <div className="why-pillars-col">
            {supportingPoints.map((point, idx) => {
              const PillarIcon = point.icon;

              return (
                <motion.div
                  key={point.id}
                  className="why-pillar-item"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="pillar-icon-box" aria-hidden="true">
                    <PillarIcon size={18} className="pillar-icon text-brand" />
                  </div>

                  <div className="pillar-content">
                    <h3 className="pillar-title">{point.title}</h3>
                    <p className="pillar-desc">{point.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
