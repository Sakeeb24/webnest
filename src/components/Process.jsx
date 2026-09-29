import React from 'react';
import { ListOrdered } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import './Process.css';

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Tell us about your business.',
      subtitle: 'Discovery & Goals',
      description: 'We learn about your business, target customers, and core offerings through a simple, focused briefing conversation.',
    },
    {
      num: '02',
      title: 'We design the experience.',
      subtitle: 'Architecture & Design',
      description: 'We engineer a custom digital presence built around your brand, mobile speed, and customer enquiry paths.',
    },
    {
      num: '03',
      title: 'You review and refine.',
      subtitle: 'Staging & Feedback',
      description: 'You test the private staging site directly on your phone and laptop, request adjustments, and approve.',
    },
    {
      num: '04',
      title: 'We launch.',
      subtitle: 'Domain & Go-Live',
      description: 'We configure your domain, verify WhatsApp integration, submit search metadata, and hand over your live site.',
    },
  ];

  return (
    <section className="section process-editorial-section" id="process" aria-labelledby="process-heading">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="process-eyebrow">
            <ListOrdered size={13} className="text-brand" aria-hidden="true" />
            <span>SIMPLE WORKFLOW</span>
          </div>
          <h2 id="process-heading" className="display-sm process-title">
            From Idea to Live Website.
          </h2>
          <p className="body-lg process-subtitle">
            A clear, four-step path to getting your business online with zero guesswork.
          </p>
        </motion.div>

        {/* Editorial Horizontal Timeline on Desktop, Vertical on Mobile */}
        <div className="process-timeline">
          <div className="process-timeline-line" aria-hidden="true" />

          <div className="process-grid">
            {steps.map((st, idx) => (
              <motion.article
                key={st.num}
                className="process-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="process-card-top">
                  <span className="process-node" aria-hidden="true" />
                  <span className="process-num">[ {st.num} ]</span>
                </div>

                <span className="process-kicker">{st.subtitle}</span>
                <h3 className="process-card-title">{st.title}</h3>
                <p className="process-card-text">{st.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
