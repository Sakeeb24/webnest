import React from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  Layers, 
  Globe, 
  MessageCircle, 
  MapPin, 
  Smartphone, 
  Sparkles, 
  Search, 
  BarChart3, 
  Code2, 
  Check,
  Layout,
  SlidersHorizontal,
  Mail
} from 'lucide-react';
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
      tagline: 'Business website essentials',
      featured: false,
      ctaText: 'Get Started',
      whatsappMsg: BUSINESS_CONFIG.messages.starter,
      features: [
        { label: '1-page professional website', icon: Globe },
        { label: 'WhatsApp integration', icon: MessageCircle },
        { label: 'Google Maps integration', icon: MapPin },
        { label: 'Mobile-responsive design', icon: Smartphone },
        { label: 'Contact / enquiry section', icon: Mail },
      ],
    },
    {
      id: 'business',
      code: 'LEVEL 02',
      name: 'BUSINESS',
      tagline: 'A complete professional presence',
      featured: true,
      badgeText: 'MOST POPULAR',
      ctaText: 'Get Started',
      whatsappMsg: BUSINESS_CONFIG.messages.business,
      features: [
        { label: '5–7 page professional website', icon: Layout },
        { label: 'Custom design tailored to your business', icon: Sparkles },
        { label: 'WhatsApp integration', icon: MessageCircle },
        { label: 'Google Maps integration', icon: MapPin },
        { label: 'Basic SEO setup', icon: Search },
        { label: 'Contact / enquiry functionality', icon: Mail },
      ],
    },
    {
      id: 'premium',
      code: 'LEVEL 03',
      name: 'PREMIUM',
      tagline: 'A fully custom digital experience',
      featured: false,
      ctaText: 'Discuss Your Project',
      whatsappMsg: BUSINESS_CONFIG.messages.premium,
      features: [
        { label: 'Fully custom website', icon: Sparkles },
        { label: 'Advanced features and interactions', icon: SlidersHorizontal },
        { label: 'Booking / enquiry functionality', icon: MessageCircle },
        { label: 'Third-party integrations', icon: Layers },
        { label: 'Analytics setup', icon: BarChart3 },
        { label: 'Custom functionality', icon: Code2 },
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

        {/* 3 Scope Columns (Editorial Columns - Zero Pricing Numbers or Currency) */}
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
                  <span className="package-code">{pkg.code}</span>
                </div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-tagline">{pkg.tagline}</p>
              </div>

              <div className="package-features-block">
                <span className="package-scope-label">DELIVERABLES INCLUDED</span>
                <ul className="package-features-list">
                  {pkg.features.map((feat, fIdx) => {
                    const FeatIcon = feat.icon || Check;
                    return (
                      <li key={fIdx}>
                        <div className="feat-icon-wrap" aria-hidden="true">
                          <FeatIcon size={14} className="feat-icon text-brand" />
                        </div>
                        <span>{feat.label}</span>
                      </li>
                    );
                  })}
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
                  <ArrowUpRight size={14} aria-hidden="true" className="cta-arrow" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
