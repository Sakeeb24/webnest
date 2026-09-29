import React from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './ProblemSection.css';

export default function ProblemSection({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const shouldReduceMotion = useReducedMotion();

  const points = [
    {
      title: 'First Impressions & Credibility',
      desc: 'A fast, polished digital presence signals that your business is established, active, and trustworthy.'
    },
    {
      title: 'Frictionless Customer Contact',
      desc: 'Direct WhatsApp integration, instant tap-to-call, and simple inquiry paths turn passive visitors into real clients.'
    },
    {
      title: 'Clear Service & Menu Presentation',
      desc: 'Detailed service lists, visual menus, and photo galleries give customers the exact clarity they need before deciding.'
    },
    {
      title: 'Integrated Location & Operating Hours',
      desc: 'Accurate maps, directions, and live schedules make it effortless for nearby customers to visit your door.'
    }
  ];

  const whatsappUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.main);

  return (
    <section className="section problem-editorial-section" id="why-online" aria-labelledby="problem-heading">
      <div className="container">
        <div className="problem-editorial-grid">
          {/* Left Column: The Commercial Reality */}
          <motion.div
            className="problem-narrative"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-badge">
              <Search size={14} aria-hidden="true" />
              <span>The Local Reality</span>
            </div>

            <h2 id="problem-heading" className="display-sm problem-editorial-title">
              Your customers are already searching on their phones.
            </h2>

            <p className="body-lg problem-editorial-lead">
              When someone hears a recommendation or searches for your services nearby, the first thing they do is look up your business on their phone.
            </p>

            <p className="body-md problem-editorial-body">
              If they find an outdated page, broken links, or no website at all, they don't call to ask questions — they simply choose your competitor. WebNest gives your business an immediate, credible digital front door.
            </p>

            <div className="problem-editorial-cta">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label={`Get Your Website with WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
              >
                <span>Get Your Website</span>
                <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Value Stack */}
          <motion.div
            className="problem-commitments"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.55,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="commitments-header">
              <span className="commitments-eyebrow">The WebNest Standard</span>
              <h3 className="heading-md commitments-title">
                What a well-engineered website accomplishes for you
              </h3>
            </div>

            <div className="commitments-list">
              {points.map((pt, i) => (
                <div key={i} className="commitment-item">
                  <div className="commitment-icon-wrap" aria-hidden="true">
                    <CheckCircle2 size={18} className="text-brand" />
                  </div>
                  <div className="commitment-text">
                    <h4 className="heading-xs commitment-heading">{pt.title}</h4>
                    <p className="body-sm commitment-desc">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
