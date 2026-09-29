import React from 'react';
import { ArrowRight, CheckCircle2, Zap, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';

export default function Hero({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const whatsappHeroUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.hero);
  const shouldReduceMotion = useReducedMotion();

  // Entrance variants
  const fadeInVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Content Column */}
          <div className="hero-content">
            {/* 1. Small eyebrow/label fades upward */}
            <motion.div
              className="hero-badge"
              custom={0.05}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <span className="badge-dot" aria-hidden="true" />
              <span>Two-Person Modern Web Studio</span>
            </motion.div>

            {/* 2. Main heading reveals upward */}
            <motion.h1
              id="hero-heading"
              className="hero-title display-lg"
              custom={0.16}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              Build Your Business Online.
            </motion.h1>

            {/* 3. Supporting text follows */}
            <motion.p
              className="hero-description body-lg"
              custom={0.26}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              Modern, fast and professional websites designed for businesses that want more customers.
            </motion.p>

            {/* 4. CTA buttons appear shortly afterward */}
            <motion.div
              className="hero-actions"
              custom={0.36}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              {/* Primary CTA: WhatsApp direct enquiry flow */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                aria-label="Get Your Website - Start a conversation on WhatsApp"
              >
                <span>Get Your Website</span>
                <ArrowRight size={18} aria-hidden="true" className="arrow-icon" />
              </a>

              <a href="#work" className="btn btn-secondary btn-lg">
                <span>View Our Work</span>
              </a>
            </motion.div>

            {/* 5. Micro-reassurance items (Strictly NO prices) */}
            <motion.div
              className="hero-micro-reassurance"
              custom={0.46}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <div className="reassurance-item">
                <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                <span>Founder-Crafted Quality</span>
              </div>
              <div className="reassurance-item">
                <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                <span>Fast Delivery</span>
              </div>
              <div className="reassurance-item">
                <MessageCircle size={16} className="text-brand" aria-hidden="true" />
                <span>WhatsApp Direct Line</span>
              </div>
            </motion.div>
          </div>

          {/* 6. Hero Visual: Layered browser & mobile preview with subtle scale/opacity & floating */}
          <motion.div
            className="hero-visual"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            {/* Desktop Mockup Frame with subtle floating effect */}
            <motion.div
              className="mockup-frame"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }
              }
            >
              {/* Browser chrome header */}
              <div className="mockup-chrome">
                <div className="mockup-dots">
                  <span className="mockup-dot red" />
                  <span className="mockup-dot yellow" />
                  <span className="mockup-dot green" />
                </div>
                <div className="mockup-address-bar">
                  <span className="secure-icon">🔒</span>
                  <span className="address-text">ironcorefitness.demo</span>
                </div>
                <div className="mockup-controls">
                  <span className="speed-badge">
                    <Zap size={13} fill="#16A34A" color="#16A34A" />
                    <span>Fast Performance</span>
                  </span>
                </div>
              </div>

              {/* Mockup screen preview */}
              <div className="mockup-screen">
                <img
                  src={`${import.meta.env.BASE_URL}portfolio/ironcore.jpg`}
                  alt="IronCore Fitness concept preview"
                  className="mockup-image"
                  loading="eager"
                />
                
                {/* Overlay pill showing studio craftsmanship */}
                <div className="mockup-badge-pill">
                  <span className="pulse-indicator" />
                  <span>Engineered by WebNest</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Mobile Companion Card */}
            <motion.div
              className="hero-mobile-float"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                      transition: {
                        duration: 5.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.6,
                      },
                    }
              }
            >
              <div className="hero-mobile-chrome">
                <span className="hero-mobile-notch" />
              </div>
              <div className="hero-mobile-screen">
                <img
                  src={`${import.meta.env.BASE_URL}portfolio/spice-avenue.jpg`}
                  alt="Spice Avenue mobile concept preview"
                  className="hero-mobile-img"
                  loading="eager"
                />
                <div className="hero-mobile-tag">
                  <span>Spice Avenue · Mobile UX</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
