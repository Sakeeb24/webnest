import React from 'react';
import { Check, ArrowRight, Tag, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';

export default function Pricing({ onSelectTier }) {
  const tiers = [
    {
      id: 'starter',
      name: 'Starter',
      price: '₹4,999',
      period: 'flat package',
      description: 'For businesses that need a simple, high-impact online presence.',
      popular: false,
      whatsappMsg: BUSINESS_CONFIG.messages.starter,
      features: [
        '1-page website',
        'Responsive design',
        'WhatsApp button',
        'Contact form',
        'Google Maps integration',
        'Deployment & live launch'
      ]
    },
    {
      id: 'business',
      name: 'Business',
      price: '₹9,999',
      period: 'flat package',
      description: 'For businesses that need a complete, authoritative professional website.',
      popular: true,
      badgeText: 'Most Popular',
      whatsappMsg: BUSINESS_CONFIG.messages.business,
      features: [
        '5–7 custom structured pages',
        'Custom branding & typography',
        'Responsive design',
        'Dedicated services section',
        'Photo gallery / work showcase',
        'Testimonials section (if client provides legitimate reviews)',
        'Contact & enquiry form',
        'WhatsApp lead capture',
        'Google Maps & business hours',
        'Basic SEO setup',
        'Live deployment',
        '2 revision rounds included'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹19,999+',
      period: 'custom scope',
      description: 'For businesses that need bespoke workflows and custom functionality.',
      popular: false,
      whatsappMsg: BUSINESS_CONFIG.messages.premium,
      features: [
        'Custom UI/UX architecture',
        'Advanced interactions & animations',
        'Booking / enquiry functionality',
        'Custom multi-step forms',
        'Analytics & tracking setup',
        'Comprehensive SEO configuration',
        'Third-party software integrations',
        'Custom business logic & support'
      ]
    }
  ];

  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="section-header text-center reveal-init">
          <div className="section-badge">
            <Tag size={14} aria-hidden="true" />
            <span>Transparent Rates</span>
          </div>
          <h2 id="pricing-heading" className="section-title heading-xl">
            Simple pricing. No surprises.
          </h2>
          <p className="body-lg">
            WebNest starting packages designed for small and local businesses. Flat pricing, direct founder execution, and zero monthly agency retainers.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, idx) => (
            <div
              key={tier.id}
              className={`card pricing-card ${tier.popular ? 'pricing-card-popular' : ''} reveal-init stagger-${idx + 1}`}
            >
              {tier.popular && (
                <div className="popular-badge-wrap">
                  <span className="badge badge-popular">{tier.badgeText}</span>
                </div>
              )}

              <div className="pricing-card-header">
                <h3 className="heading-md tier-name">{tier.name}</h3>
                <p className="body-sm tier-desc">{tier.description}</p>
                <div className="price-wrap">
                  <span className="price-amount">{tier.price}</span>
                  <span className="price-period">{tier.period}</span>
                </div>
              </div>

              <div className="pricing-card-divider" />

              <div className="pricing-features">
                <span className="features-label">What's included:</span>
                <ul className="tier-feature-list" aria-label={`Features included in ${tier.name} tier`}>
                  {tier.features.map((feat, i) => (
                    <li key={i} className="tier-feature-item">
                      <span className="check-icon-wrap" aria-hidden="true">
                        <Check size={14} className={tier.popular ? 'text-brand' : 'text-secondary'} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-cta" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Primary WhatsApp CTA per Section 55 & 67 */}
                <a
                  href={createWhatsAppLink(tier.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}
                  aria-label={`Inquire about ${tier.name} package on WhatsApp`}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>Inquire on WhatsApp ↗</span>
                </a>

                {/* Secondary Option: Scroll to contact form */}
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  style={{ width: '100%', fontSize: '12px' }}
                  onClick={() => onSelectTier(tier.name)}
                  aria-label={`Fill inquiry form for ${tier.name} plan`}
                >
                  <span>Or fill inquiry form</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="pricing-footnote reveal-init">
          <p className="caption">
            * These represent WebNest's starting package rates. Domain registration and third-party hosting fees may be billed directly by the registrar based on client preference.
          </p>
        </div>
      </div>
    </section>
  );
}
