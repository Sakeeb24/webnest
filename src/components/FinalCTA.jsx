import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';

export default function FinalCTA({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const whatsappUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.main);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section final-cta-section" aria-labelledby="final-cta-heading">
      <div className="container">
        <motion.div
          className="final-cta-card"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="final-cta-badge">
            <Sparkles size={14} aria-hidden="true" />
            <span>Start Today</span>
          </div>

          <h2 id="final-cta-heading" className="display-md final-cta-title">
            Ready to build your website?
          </h2>

          <p className="body-lg final-cta-text">
            Tell us what you're building. We'll help turn it into a professional online presence.
          </p>

          <div className="final-cta-actions">
            {/* Primary CTA: Get Your Website -> WhatsApp conversation */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              aria-label="Get Your Website on WhatsApp"
            >
              <span>Get Your Website</span>
              <ArrowRight size={18} aria-hidden="true" className="arrow-icon" />
            </a>

            {/* Secondary CTA: WhatsApp Us */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label={`Chat on WhatsApp with WebNest at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
