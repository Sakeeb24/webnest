import React, { useRef } from 'react';
import { ListOrdered, MessageCircle, PenTool, Eye, Rocket } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import './Process.css';

export default function Process() {
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef(null);

  // Framer Motion scroll progress tracking across the timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 35%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 160,
  });

  const steps = [
    {
      num: '01',
      title: 'Tell us',
      subtitle: 'Discovery & Goals',
      icon: MessageCircle,
      description: 'We learn about your business, target customers, and core offerings through a focused, zero-hassle conversation.',
    },
    {
      num: '02',
      title: 'We design',
      subtitle: 'Architecture & Craft',
      icon: PenTool,
      description: 'We engineer a custom digital presence built around your brand identity, mobile speed, and customer enquiry paths.',
    },
    {
      num: '03',
      title: 'You review',
      subtitle: 'Staging & Feedback',
      icon: Eye,
      description: 'You test the private staging link directly on your phone and laptop, request adjustments, and give approval.',
    },
    {
      num: '04',
      title: 'We launch',
      subtitle: 'Domain & Go-Live',
      icon: Rocket,
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

        {/* Visual Timeline with Framer Motion scroll progress */}
        <div ref={timelineRef} className="process-timeline">
          {/* Base timeline track */}
          <div className="process-timeline-track" aria-hidden="true">
            {/* Animated progress bar */}
            {!shouldReduceMotion && (
              <motion.div
                className="process-timeline-progress"
                style={{ scaleX: smoothProgress }}
              />
            )}
          </div>

          <div className="process-grid">
            {steps.map((st, idx) => {
              const StepIcon = st.icon;

              return (
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
                    <div className="process-node-wrap">
                      <span className="process-node" aria-hidden="true" />
                      <div className="process-icon-bubble" aria-hidden="true">
                        <StepIcon size={16} className="text-brand step-icon" />
                      </div>
                    </div>
                    <span className="process-num">{st.num}</span>
                  </div>

                  <span className="process-kicker">{st.subtitle}</span>
                  <h3 className="process-card-title">{st.title}</h3>
                  <p className="process-card-text">{st.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
