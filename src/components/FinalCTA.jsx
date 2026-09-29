import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './FinalCTA.css';

export default function FinalCTA({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const whatsappUrl = createWhatsAppLink(
    "Hi WebNest, I'm interested in getting a website for my business. I'd like to know more about your services."
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section final-cta-section" id="final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <motion.div
          className="final-cta-card"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle Background Lines */}
          <div className="final-cta-grid-lines" aria-hidden="true" />
          <div className="final-cta-glow" aria-hidden="true" />

          <div className="final-cta-content relative-z">
            <div className="final-cta-badge">
              <span className="cta-dot" aria-hidden="true" />
              <span>CAPACITY OPEN // START A PROJECT</span>
            </div>

            <h2 id="final-cta-heading" className="display-md final-cta-title">
              Ready to Put Your Business Online?
            </h2>

            <p className="body-lg final-cta-text">
              Tell us what you need. We'll show you what it could look like.
            </p>

            <div className="final-cta-actions">
              {/* Primary CTA: Talk to WebNest -> WhatsApp direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg final-cta-primary"
                aria-label={`Talk to WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Talk to WebNest</span>
                <span className="arrow-icon" aria-hidden="true">→</span>
              </a>

              {/* Secondary CTA: View Our Work -> Scrolls to Portfolio */}
              <a
                href="#work"
                className="btn btn-secondary btn-lg final-cta-secondary"
                aria-label="View Our Work - Explore website concepts"
              >
                <span>View Our Work</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="final-cta-contact-meta">
              <span>Direct WhatsApp Line: {BUSINESS_CONFIG.whatsapp.displayNumber}</span>
              <span className="meta-separator">•</span>
              <span>Fast Founder Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
