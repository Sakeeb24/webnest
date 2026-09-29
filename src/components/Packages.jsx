import React from 'react';
import { Check, ArrowRight, Layers, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Packages.css';

export default function Packages({ onSelectPackage = () => {} }) {
  const shouldReduceMotion = useReducedMotion();

  const packages = [
    {
      id: 'starter',
      name: 'STARTER',
      tagline: 'Focused presence for emerging businesses',
      popular: false,
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
      name: 'BUSINESS',
      tagline: 'Complete presence tailored to your clientele',
      popular: true,
      badgeText: 'Most Popular',
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
      name: 'PREMIUM',
      tagline: 'Bespoke architecture with tailored features',
      popular: false,
      ctaText: 'Discuss Your Project',
      whatsappMsg: BUSINESS_CONFIG.messages.premium,
      features: [
        'Fully custom website',
        'Advanced features and interactions',
        'Booking / enquiry functionality',
        'Third-party integrations',
        'Analytics setup',
        'Custom functionality based on your requirements',
      ],
    },
  ];

  return (
    <section className="section packages-section" id="packages" aria-labelledby="packages-heading">
      {/* Fallback anchor for backward compatibility */}
      <span id="pricing" className="visually-hidden" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge">
            <Layers size={14} aria-hidden="true" />
            <span>Website Packages</span>
          </div>
          <h2 id="packages-heading" className="section-title heading-xl">
            Choose the Website That Fits Your Business
          </h2>
          <p className="body-lg packages-subtitle">
            From a focused business website to a fully custom digital experience, we build around what your business needs.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.popular ? 'package-card-popular' : ''}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                    }
              }
            >
              {pkg.popular && (
                <div className="package-popular-badge-wrap">
                  <span className="badge badge-popular">{pkg.badgeText}</span>
                </div>
              )}

              <div className="package-card-header">
                <h3 className="heading-md package-tier-name">{pkg.name}</h3>
                <p className="body-sm package-tier-tagline">{pkg.tagline}</p>
              </div>

              <div className="package-card-divider" />

              <div className="package-features">
                <span className="package-features-label">What's included:</span>
                <ul className="package-feature-list" aria-label={`Features included in ${pkg.name} package`}>
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="package-feature-item">
                      <span className="check-icon-wrap" aria-hidden="true">
                        <Check size={14} className={pkg.popular ? 'text-brand' : 'text-secondary'} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="package-card-cta">
                <a
                  href={createWhatsAppLink(pkg.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} package-cta-btn`}
                  aria-label={`${pkg.ctaText} for ${pkg.name} package on WhatsApp`}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>{pkg.ctaText}</span>
                  <ArrowRight size={15} aria-hidden="true" className="arrow-icon" />
                </a>

                <button
                  type="button"
                  className="btn btn-ghost btn-sm package-form-btn"
                  onClick={() => onSelectPackage(pkg.name)}
                  aria-label={`Select ${pkg.name} package in inquiry form`}
                >
                  <span>Or fill inquiry form</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scope Assurance Note (zero pricing) */}
        <div className="packages-footnote text-center">
          <p className="caption">
            * All packages include founder-directed delivery, mobile optimization, cross-browser testing, and post-launch launch assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
