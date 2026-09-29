import React, { useRef } from 'react';
import { ArrowRight, ArrowUpRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Hero.css';

export default function Hero({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const whatsappHeroUrl = createWhatsAppLink(
    "Hi WebNest, I'm interested in getting a website for my business. I'd like to know more about your services."
  );
  const shouldReduceMotion = useReducedMotion();
  const visualRef = useRef(null);

  // Mouse spring physics for subtle interactive layer shift (4-8px max)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 140 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle transforms: 4-6px for primary, 6-8px for companions
  const primaryX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const primaryY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const primaryRotate = useTransform(smoothX, [-0.5, 0.5], [-0.4, 0.4]);

  const compTopX = useTransform(smoothX, [-0.5, 0.5], [7, -7]);
  const compTopY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  const compBottomX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const compBottomY = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  const compCutsX = useTransform(smoothX, [-0.5, 0.5], [6, -6]);
  const compCutsY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Entrance variants adhering to 0.5-0.8s duration and 0.06-0.12s stagger
  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-heading">
      {/* Background Subtle Studio Grid & Atmosphere */}
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-radial-glow" aria-hidden="true" />

      <div className="container relative-z">
        <div className="hero-grid">
          {/* Hero Content Column */}
          <div className="hero-content">
            {/* 1. Eyebrow */}
            <motion.div
              className="hero-badge"
              custom={0.04}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <span className="badge-dot" aria-hidden="true" />
              <span>WEB DESIGN FOR MODERN BUSINESSES</span>
            </motion.div>

            {/* 2. Main Headline */}
            <motion.h1
              id="hero-heading"
              className="hero-title display-lg"
              custom={0.12}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              Websites That Make Your Business Look Its Best.
            </motion.h1>

            {/* 3. Supporting Text */}
            <motion.p
              className="hero-description body-lg"
              custom={0.20}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              Modern, responsive websites designed around your business, your customers and the way you want to grow.
            </motion.p>

            {/* 4. Action CTAs */}
            <motion.div
              className="hero-actions"
              custom={0.28}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              {/* Primary CTA: View Our Work -> Scrolls to Portfolio */}
              <a
                href="#work"
                className="btn btn-primary btn-lg hero-cta-primary"
                aria-label="View Our Work - Explore realistic website concepts"
              >
                <span>View Our Work</span>
                <ArrowRight size={18} aria-hidden="true" className="arrow-icon" />
              </a>

              {/* Secondary CTA: Talk to WebNest -> WhatsApp direct */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg hero-cta-secondary"
                aria-label={`Talk to WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
              >
                <MessageCircle size={17} aria-hidden="true" />
                <span>Talk to WebNest</span>
                <ArrowUpRight size={16} aria-hidden="true" className="cta-arrow" />
              </a>
            </motion.div>

            {/* 5. Concise Business Qualities (Strictly NO prices, NO fake stats) */}
            <motion.div
              className="hero-micro-reassurance"
              custom={0.36}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className="reassurance-item">
                <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                <span>Custom Built</span>
              </div>
              <div className="reassurance-item">
                <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                <span>Mobile First &amp; Responsive</span>
              </div>
              <div className="reassurance-item">
                <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                <span>WhatsApp &amp; Maps Ready</span>
              </div>
            </motion.div>
          </div>

          {/* 6. Hero Visual: Editorial Composed Project Showcase with Spring Physics */}
          <motion.div
            ref={visualRef}
            className="hero-visual-editorial"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: shouldReduceMotion ? 0 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-label="Showcase preview of WebNest client websites"
          >
            {/* Primary Featured Project Frame: Only Fish */}
            <motion.div
              className="hero-main-card"
              style={
                shouldReduceMotion
                  ? undefined
                  : { x: primaryX, y: primaryY, rotateZ: primaryRotate }
              }
            >
              <div className="hero-card-header">
                <div className="hero-card-dots" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="hero-card-address">
                  <span className="secure-badge">🔒</span>
                  <span>onlyfish.restaurant</span>
                </div>
                <span className="hero-card-tag">NEW DEMO</span>
              </div>

              <div className="hero-card-screen">
                <img
                  src={`${import.meta.env.BASE_URL}portfolio/only-fish/bangda-thali.jpg`}
                  alt="Only Fish seafood restaurant website preview"
                  className="hero-card-img"
                  loading="eager"
                />
                <div className="hero-card-overlay">
                  <div className="hero-card-meta">
                    <span className="hero-meta-kicker">FEATURED SHOWCASE</span>
                    <h3 className="hero-meta-title">Only Fish</h3>
                    <p className="hero-meta-sub">Coastal Seafood Restaurant • Dharwad</p>
                  </div>
                  <Link
                    to="/demo/only-fish"
                    className="hero-card-link-btn"
                    aria-label="View Only Fish live demo website"
                  >
                    <span>View Demo</span>
                    <ArrowRight size={14} aria-hidden="true" className="link-arrow" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Companion Card 1: IronCore Fitness */}
            <motion.div
              className="hero-companion-card companion-top"
              style={
                shouldReduceMotion
                  ? undefined
                  : { x: compTopX, y: compTopY }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                      transition: {
                        duration: 5.6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }
              }
            >
              <Link to="/demo/ironcore" className="companion-inner" aria-label="Explore IronCore Fitness demo">
                <div className="companion-img-wrap">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/ironcore.jpg`}
                    alt="IronCore Fitness website concept"
                    className="companion-img"
                    loading="eager"
                  />
                </div>
                <div className="companion-info">
                  <span className="companion-badge">FITNESS &amp; GYM</span>
                  <span className="companion-title">IronCore Fitness</span>
                  <span className="companion-arrow">→</span>
                </div>
              </Link>
            </motion.div>

            {/* Overlapping Companion Card 2: Spice Avenue Dining */}
            <motion.div
              className="hero-companion-card companion-bottom"
              style={
                shouldReduceMotion
                  ? undefined
                  : { x: compBottomX, y: compBottomY }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                      transition: {
                        duration: 6.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.8,
                      },
                    }
              }
            >
              <Link to="/demo/spice-avenue" className="companion-inner" aria-label="Explore Spice Avenue restaurant demo">
                <div className="companion-img-wrap">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/spice-avenue.jpg`}
                    alt="Spice Avenue restaurant website concept"
                    className="companion-img"
                    loading="eager"
                  />
                </div>
                <div className="companion-info">
                  <span className="companion-badge">CONTEMPORARY BISTRO</span>
                  <span className="companion-title">Spice Avenue</span>
                  <span className="companion-arrow">→</span>
                </div>
              </Link>
            </motion.div>

            {/* Overlapping Companion Card 3: Urban Cuts Grooming Studio */}
            <motion.div
              className="hero-companion-card companion-side"
              style={
                shouldReduceMotion
                  ? undefined
                  : { x: compCutsX, y: compCutsY }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                      transition: {
                        duration: 5.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.4,
                      },
                    }
              }
            >
              <Link to="/demo/urban-cuts" className="companion-inner" aria-label="Explore Urban Cuts demo">
                <div className="companion-img-wrap">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/urban-cuts.jpg`}
                    alt="Urban Cuts salon website concept"
                    className="companion-img"
                    loading="eager"
                  />
                </div>
                <div className="companion-info">
                  <span className="companion-badge">SALON &amp; GROOMING</span>
                  <span className="companion-title">Urban Cuts</span>
                  <span className="companion-arrow">→</span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
