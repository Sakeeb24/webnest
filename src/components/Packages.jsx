import React from 'react';
import { Check, ArrowRight, Layers } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Packages.css';

export default function Packages({ onSelectPackage = () => {} }) {
  const shouldReduceMotion = useReducedMotion();

  const packages = [
    {
      id: 'starter',
      code: 'LEVEL 01',
      name: 'STARTER',
      tagline: 'Focused presence for emerging businesses',
      featured: false,
      ctaText: 'Get Started',
      whatsappMsg: BUSINESS_CONFIG.messages.starter,
      features: [
        '1-page professional website',
        'WhatsApp integration',
        'Google Maps integration',
        'Mobile-responsive design',
        'Contact / enquiry section',
      ],
    },
    {
      id: 'business',
      code: 'LEVEL 02',
      name: 'BUSINESS',
      tagline: 'Complete presence tailored to your clientele',
      featured: true,
      badgeText: 'MOST POPULAR',
      ctaText: 'Get Started',
      whatsappMsg: BUSINESS_CONFIG.messages.business,
      features: [
        '5–7 page professional website',
        'Custom design tailored to your business',
        'WhatsApp integration',
        'Google Maps integration',
        'Basic SEO setup',
        'Contact / enquiry functionality',
      ],
    },
    {
      id: 'premium',
      code: 'LEVEL 03',
      name: 'PREMIUM',
      tagline: 'Bespoke architecture with tailored features',
      featured: false,
      ctaText: 'Discuss Your Project',
      whatsappMsg: BUSINESS_CONFIG.messages.premium,
      features: [
        'Fully custom website',
        'Advanced features and interactions',
        'Booking / enquiry functionality',
        'Third-party integrations',
        'Analytics setup',
        'Custom functionality',
      ],
    },
  ];

  const handleCtaClick = (pkg) => {
    onSelectPackage(pkg.name);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section packages-editorial-section" id="packages" aria-labelledby="packages-heading">
      {/* Fallback anchor for backward compatibility */}
      <span id="pricing" className="sr-only" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="packages-eyebrow">
            <Layers size={13} className="text-brand" aria-hidden="true" />
            <span>WEBSITE OPTIONS</span>
          </div>
          <h2 id="packages-heading" className="display-sm packages-title">
            Built Around Your Business
          </h2>
          <p className="body-lg packages-subtitle">
            Choose the level of website that matches what you need.
          </p>
        </motion.div>

        {/* 3 Scope Cards (Zero Pricing Numbers or Currency) */}
        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.featured ? 'is-featured' : ''}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {pkg.featured && (
                <div className="package-featured-badge" aria-hidden="true">
                  <span>{pkg.badgeText}</span>
                </div>
              )}

              <div className="package-card-header">
                <div className="package-card-meta">
                  <span className="package-code">[ {pkg.code} ]</span>
                </div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-tagline">{pkg.tagline}</p>
              </div>

              <div className="package-features-block">
                <span className="package-scope-label">DELIVERABLES INCLUDED</span>
                <ul className="package-features-list">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={15} className="text-brand" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="package-card-footer">
                <button
                  type="button"
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'} package-cta-btn`}
                  onClick={() => handleCtaClick(pkg)}
                  aria-label={`${pkg.ctaText} with the ${pkg.name} package`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
                </button>

                <a
                  href={createWhatsAppLink(pkg.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-whatsapp-direct"
                  aria-label={`Inquire about ${pkg.name} directly on WhatsApp`}
                >
                  <span>or ask about this on WhatsApp</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
