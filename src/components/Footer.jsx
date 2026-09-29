import React from 'react';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.default);

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Studio Brand */}
          <div className="footer-brand-col">
            <a href="#top" className="footer-brand-logo" aria-label="WebNest Home">
              <span className="brand-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="#2563EB" />
                  <path d="M6 16L12 8L18 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 16L12 12L15 16" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="brand-text">WebNest</span>
            </a>
            <p className="body-sm footer-positioning">
              {BUSINESS_CONFIG.positioning}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links-list">
              <li><a href="#top" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#work" className="footer-link">Work</a></li>
              <li><a href="#packages" className="footer-link">Packages</a></li>
              <li><a href="#process" className="footer-link">Process</a></li>
              <li><a href="#team" className="footer-link">Team</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Connect / Contact (Section 57) */}
          <div className="footer-connect-col">
            <h3 className="footer-col-title">Contact</h3>
            <ul className="footer-links-list">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link with-icon"
                  aria-label={`Chat on WhatsApp with WebNest at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>WhatsApp · {BUSINESS_CONFIG.whatsapp.displayNumber}</span>
                </a>
              </li>
              {BUSINESS_CONFIG.email && (
                <li>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="footer-link with-icon"
                    aria-label={`Email WebNest at ${BUSINESS_CONFIG.email}`}
                  >
                    <Mail size={16} aria-hidden="true" />
                    <span>Email: {BUSINESS_CONFIG.email}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="caption footer-copy">
            © 2026 WebNest. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
