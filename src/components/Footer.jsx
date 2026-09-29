import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.default);

  return (
    <footer className="footer-studio" role="contentinfo">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Colophon */}
          <div className="footer-brand-block">
            <a href="#top" className="footer-logo" aria-label="WebNest Home">
              <span className="footer-brand-mark" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="#3B82F6" />
                  <path d="M6 16L12 8L18 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 16L12 12L15 16" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="footer-brand-name">WebNest</span>
            </a>
            <p className="footer-tagline">
              Modern websites for modern businesses.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>DIGITAL STUDIO // DIRECT FOUNDER ACCESS</span>
            </div>
          </div>

          {/* Navigation Links: Work, Services, Process, Contact */}
          <div className="footer-links-group">
            <span className="footer-group-title">EXPLORE</span>
            <ul className="footer-nav-list">
              <li><a href="#work" className="footer-link">Work</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#process" className="footer-link">Process</a></li>
              <li><a href="#why" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="footer-action-group">
            <span className="footer-group-title">CONVERSATION</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-link"
              aria-label={`Talk to WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>Talk to WebNest →</span>
            </a>
            <span className="footer-phone-note">
              Direct: {BUSINESS_CONFIG.whatsapp.displayNumber}
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} WebNest. Engineered with precision.
          </p>

          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
