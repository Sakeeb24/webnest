import React from 'react';
import { ArrowRight, CheckCircle2, Zap, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';

export default function Hero({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const whatsappHeroUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.hero);

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Content */}
          <div className="hero-content">
            <div className="hero-badge hero-animate-eyebrow">
              <span className="badge-dot" aria-hidden="true" />
              <span>Two-Person Modern Web Studio</span>
            </div>

            <h1 id="hero-heading" className="hero-title display-lg hero-animate-title">
              Build Your Business Online.
            </h1>

            <p className="hero-description body-lg hero-animate-desc">
              Modern, fast and professional websites designed for businesses that want more customers.
            </p>

            <div className="hero-actions hero-animate-actions">
              {/* Primary CTA: WhatsApp direct enquiry flow */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                aria-label="Get Your Website - Start a conversation on WhatsApp"
              >
                <span>Get Your Website</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a href="#work" className="btn btn-secondary btn-lg">
                <span>View Our Work</span>
              </a>
            </div>

            {/* Micro value reassurance & WhatsApp contact notice */}
            <div className="hero-micro-reassurance hero-animate-reassurance">
              <div className="reassurance-item">
                <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                <span>Starts at ₹4,999</span>
              </div>
              <div className="reassurance-item">
                <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                <span>Fast Delivery</span>
              </div>
              <div className="reassurance-item">
                <MessageCircle size={16} className="text-brand" aria-hidden="true" />
                <span>WhatsApp Direct Line</span>
              </div>
            </div>
          </div>

          {/* Hero Visual: Layered browser & mobile preview */}
          <div className="hero-visual hero-animate-visual" aria-hidden="true">
            <div className="mockup-frame hero-mockup-float">
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
            </div>

            {/* Floating Mobile Companion Card */}
            <div className="hero-mobile-float">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
