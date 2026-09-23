import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Services.css';

export default function Services({ onOpenEnquiry }) {
  const capabilities = [
    {
      num: '01',
      title: 'Business Websites',
      description: 'Professional multi-section websites for local and growing businesses looking to establish credibility and capture inbound customer inquiries.',
      tags: ['Local SEO Ready', 'Mobile Optimized', 'Contact & Maps']
    },
    {
      num: '02',
      title: 'Landing Pages',
      description: 'High-focus single-page sites engineered around a specific campaign outcome, promotional launch, or high-intent advertising funnel.',
      tags: ['Frictionless CTAs', 'Fast Load Times', 'Direct WhatsApp Leads']
    },
    {
      num: '03',
      title: 'Restaurant & Hospitality',
      description: 'Sensory dining websites featuring visual digital menus, operating hours, seamless table reservation inquiries, and direction routing.',
      tags: ['Visual Menus', 'Reservation Inquiries', 'Directions & Valet']
    },
    {
      num: '04',
      title: 'Gym & Fitness Studios',
      description: 'Performance-focused fitness websites showcasing membership plans, coach credentials, facility tours, and qualified membership inquiries.',
      tags: ['Membership Tiers', 'Timetable Architecture', 'Membership Inquiries']
    },
    {
      num: '05',
      title: 'Portfolios & Consulting',
      description: 'Refined presentation of work, credentials, and client case studies for independent professionals, consultants, and creative studios.',
      tags: ['Editorial Case Studies', 'Client Inquiry Flows', 'Credentials Showcase']
    },
    {
      num: '06',
      title: 'Custom Applications',
      description: 'Bespoke web applications with custom calculation tools, specialized enquiry workflows, or third-party service integrations.',
      tags: ['Custom Workflows', 'Tailored UI Logic', 'API Integrations']
    }
  ];

  const whatsappGeneralUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.main);

  return (
    <section className="section services-editorial-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-editorial-layout">
          {/* Left Column: Sticky Editorial Introduction */}
          <div className="services-sticky-sidebar reveal-init">
            <div className="section-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>Studio Capabilities</span>
            </div>
            
            <h2 id="services-heading" className="display-sm services-editorial-title">
              Websites built for commercial impact.
            </h2>
            
            <p className="body-lg services-editorial-desc">
              Every website we build is tailored around your business model — whether that means booking salon chairs, filling restaurant tables, or generating steady local customer calls.
            </p>

            <div className="services-sidebar-cta">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label={`Discuss your website requirement on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <span className="services-cta-subtext">
                Direct founder response · {BUSINESS_CONFIG.whatsapp.displayNumber}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Numbered Capability Rows */}
          <div className="services-capabilities-list">
            {capabilities.map((cap, idx) => (
              <article
                key={cap.num}
                className={`capability-row reveal-init stagger-${(idx % 3) + 1}`}
              >
                <div className="capability-num" aria-hidden="true">
                  {cap.num}
                </div>

                <div className="capability-content">
                  <div className="capability-header">
                    <h3 className="heading-md capability-title">{cap.title}</h3>
                    <button
                      type="button"
                      className="capability-enquire-btn"
                      onClick={() => onOpenEnquiry(cap.title)}
                      aria-label={`Enquire about ${cap.title}`}
                    >
                      <span>Enquire</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  </div>

                  <p className="body-md capability-desc">
                    {cap.description}
                  </p>

                  <div className="capability-tags">
                    {cap.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="capability-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
