import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Globe, Utensils, Dumbbell, Sparkles, Layers } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Services.css';

export default function Services({ onOpenEnquiry = () => {} }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      num: '01',
      title: 'Business Websites',
      icon: Globe,
      tagline: 'Professional digital presence engineered to build trust and generate inquiries.',
      details: 'Tailored digital headquarters that solidify your commercial legitimacy, position your brand above competitors, and make contacting you effortless across phone and WhatsApp.',
      tags: ['Local SEO Setup', 'Mobile First', 'WhatsApp Integration', 'Google Maps Route'],
    },
    {
      num: '02',
      title: 'Restaurant & Café Websites',
      icon: Utensils,
      tagline: 'Sensory menus, dish showcases, dining hours, and direct location routing.',
      details: 'Digital extensions of your physical dining experience. Showcase fresh specialties, dietary options, signature thalis or bistro menus, with 1-tap directions for hungry patrons.',
      tags: ['Visual Digital Menu', 'Table Inquiry Flow', 'Google Maps Directions', 'Instagram Integration'],
    },
    {
      num: '03',
      title: 'Fitness & Service Websites',
      icon: Dumbbell,
      tagline: 'Training programs, stylist lookbooks, transparent service menus, and schedules.',
      details: 'High-clarity platforms designed for client booking, coach credentials, transparent service tiers, and zero-friction client onboarding for gyms, salons, and studios.',
      tags: ['Service Menus', 'Trainer/Stylist Profiles', '1-Tap Booking Inquiry', 'Operating Timetable'],
    },
    {
      num: '04',
      title: 'Custom Websites',
      icon: Sparkles,
      tagline: 'Unique digital experiences engineered around your specific operational workflows.',
      details: 'Bespoke web engineering with tailored interactive logic, specialized customer journeys, domain setup, third-party hooks, and fluid motion designed from scratch.',
      tags: ['Bespoke Interactions', 'Custom Workflows', 'Domain & Analytics', 'Sub-second Speed'],
    },
  ];

  const handleRowClick = (srv) => {
    onOpenEnquiry(srv.title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappGeneralUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.main);

  return (
    <section className="section services-editorial-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="services-section-header">
          <div className="services-eyebrow">
            <Layers size={13} className="text-brand" aria-hidden="true" />
            <span>STUDIO CAPABILITIES</span>
          </div>
          <div className="services-header-split">
            <h2 id="services-heading" className="display-sm services-title">
              What We Build
            </h2>
            <p className="body-lg services-subtitle">
              From focused local business websites to bespoke digital experiences.
            </p>
          </div>
        </div>

        {/* Interactive Studio Rows (Editorial Studio Layout) */}
        <div className="services-interactive-list" role="list">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.article
                key={srv.num}
                className={`service-studio-row ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleRowClick(srv)}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleRowClick(srv);
                  }
                }}
                aria-label={`${srv.num} ${srv.title} - Click to discuss this project`}
              >
                {/* Main Row Bar */}
                <div className="row-main-bar">
                  <div className="row-left">
                    <span className="row-num">{srv.num}</span>
                    <div className="row-icon-wrap" aria-hidden="true">
                      <Icon size={20} className="row-icon text-brand" />
                    </div>
                    <h3 className="row-title">{srv.title}</h3>
                  </div>

                  <div className="row-center">
                    <p className="row-tagline">{srv.tagline}</p>
                  </div>

                  <div className="row-right">
                    <span className="row-cta-label">Discuss Project</span>
                    <ArrowUpRight size={18} className="row-arrow" aria-hidden="true" />
                  </div>
                </div>

                {/* Expanded Details and Tags */}
                <div className="row-expanded-content">
                  <p className="row-detail-text">{srv.details}</p>
                  <div className="row-tags-list">
                    {srv.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="row-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Studio Consultation Footer */}
        <motion.div
          className="services-footer-bar"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="services-footer-text">
            Have a unique business requirement not listed above?
          </span>
          <a
            href={whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="services-footer-link"
            aria-label="Discuss custom website requirement on WhatsApp with our founders"
          >
            <span>Discuss your custom project with our founders</span>
            <ArrowRight size={15} aria-hidden="true" className="arrow-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
