import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Services.css';

export default function Services({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      num: '01',
      title: 'Business Websites',
      description: 'Professional websites designed around your business.',
      detail: 'Tailored digital headquarters that solidify your commercial legitimacy, build immediate trust with prospective customers, and make contacting you effortless.',
      highlights: ['Local Search Optimization', 'Mobile-First Layout', 'Direct WhatsApp Enquiry Integration'],
    },
    {
      num: '02',
      title: 'Restaurant & Café Websites',
      description: 'Menus, galleries, locations and enquiry experiences.',
      detail: 'Sensory digital extensions of your physical venue. Highlight fresh culinary specialties, seasonal menus, and clear location directions for hungry diners.',
      highlights: ['Visual Digital Menus', 'Table Reservation Inquiries', 'One-Tap Google Maps Directions'],
    },
    {
      num: '03',
      title: 'Fitness & Service Websites',
      description: 'Services, programs, enquiries and customer information.',
      detail: 'High-clarity platforms designed for active appointment scheduling, transparent service options, trainer portfolios, and frictionless client intake.',
      highlights: ['Service Schedules & Timetables', 'Stylist & Trainer Spotlights', 'Frictionless Booking Inquiries'],
    },
    {
      num: '04',
      title: 'Custom Websites',
      description: 'Unique digital experiences built around your requirements.',
      detail: 'Bespoke web architecture engineered to your exact operational specifications, featuring tailored interactive logic, third-party integrations, and unique brand motion.',
      highlights: ['Bespoke Interactions & Motion', 'Specialized Workflows', 'Domain & Analytics Setup'],
    },
  ];

  const whatsappUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.main);

  return (
    <section className="section services-editorial-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="services-section-header">
          <div className="services-eyebrow">
            <Sparkles size={13} className="text-brand" aria-hidden="true" />
            <span>STUDIO CAPABILITIES</span>
          </div>
          <div className="services-header-split">
            <h2 id="services-heading" className="display-sm services-title">
              What We Build
            </h2>
            <p className="body-lg services-subtitle">
              From focused business websites to fully custom digital experiences.
            </p>
          </div>
        </div>

        {/* Editorial Services Grid */}
        <div className="services-grid">
          {services.map((srv, idx) => (
            <motion.article
              key={srv.num}
              className="service-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="service-card-top">
                <span className="service-num">[ {srv.num} ]</span>
                <span className="service-card-indicator" aria-hidden="true" />
              </div>

              <h3 className="service-card-title">{srv.title}</h3>
              <p className="service-card-desc">{srv.description}</p>
              <p className="service-card-detail">{srv.detail}</p>

              <div className="service-highlights">
                <ul>
                  {srv.highlights.map((item, hIdx) => (
                    <li key={hIdx}>
                      <span className="bullet text-brand" aria-hidden="true">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Fast Track Bar */}
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
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="services-footer-link"
            aria-label="Discuss custom website requirement on WhatsApp"
          >
            <span>Discuss your custom project with our founders</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
