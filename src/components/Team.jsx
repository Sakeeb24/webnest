import React from 'react';
import { Users, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './Team.css';

function GitHubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Team() {
  const { founder, sales } = BUSINESS_CONFIG.team;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section team-section" id="team" aria-labelledby="team-heading">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-badge">
            <Users size={14} aria-hidden="true" />
            <span>The Team</span>
          </div>
          <h2 id="team-heading" className="section-title heading-xl">
            Built directly by founders.
          </h2>
          <p className="body-lg">
            Direct communication with the specialists building and launching your website. No account managers, middle layers, or agency markup.
          </p>
        </motion.div>

        <div className="team-grid">
          {/* Founder / Developer Card */}
          <motion.article
            className="team-card"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="team-card-header">
              <div className="team-avatar-placeholder" aria-hidden="true">
                SM
              </div>
              <div>
                <h3 className="team-name">{founder.name}</h3>
                <span className="team-role">{founder.role}</span>
              </div>
            </div>

            <p className="team-details">
              Focuses on technical architecture, performance engineering, mobile optimization, and custom web applications for growing businesses.
            </p>

            <div className="team-contacts">
              <a
                href={createWhatsAppLink("Hi Sakeeb, I'd like to discuss building a website with WebNest.", founder.whatsappRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="team-contact-link"
                aria-label={`Message ${founder.name} on WhatsApp at ${founder.whatsappDisplay}`}
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>WhatsApp: {founder.whatsappDisplay}</span>
              </a>

              {founder.githubUrl && (
                <a
                  href={founder.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-contact-link"
                  aria-label={`View ${founder.name}'s GitHub profile: ${founder.githubUsername}`}
                >
                  <GitHubIcon size={16} />
                  <span>GitHub: {founder.githubUsername}</span>
                </a>
              )}
            </div>
          </motion.article>

          {/* Sales / Client Communication Card */}
          <motion.article
            className="team-card"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="team-card-header">
              <div className="team-avatar-placeholder" aria-hidden="true">
                MJ
              </div>
              <div>
                <h3 className="team-name">{sales.name}</h3>
                <span className="team-role">{sales.role}</span>
              </div>
            </div>

            <p className="team-details">
              Manages client discovery, scope consultation, delivery timelines, and ongoing support to ensure transparent, reliable collaboration.
            </p>

            <div className="team-contacts">
              <a
                href={createWhatsAppLink("Hi Manikanth, I'd like to understand WebNest services and packages.", sales.whatsappRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="team-contact-link"
                aria-label={`Message ${sales.name} on WhatsApp at ${sales.whatsappDisplay}`}
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>WhatsApp: {sales.whatsappDisplay}</span>
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
