import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Info, Layers, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import ProjectModal from './ProjectModal';
import './Portfolio.css';

export default function Portfolio({ onOpenEnquiry = () => {} }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: 'ironcore',
      title: 'IronCore Fitness',
      kicker: 'Fitness & Strength Club',
      category: 'Fitness Website Concept',
      businessType: 'Strength & Conditioning Facility',
      route: '/demo/ironcore',
      image: `${import.meta.env.BASE_URL}portfolio/ironcore.jpg`,
      headline: 'A performance-focused gym website built around strong typography, membership presentation, and qualified lead conversion.',
      fullDescription: 'Designed for a high-intensity boutique training facility. The structure prioritizes easy schedule exploration, trainer credentials, membership plan comparisons, and a frictionless membership enquiry workflow.',
      features: [
        'Interactive membership tier selection',
        'Weekly training discipline breakdowns',
        'Certified coach credential showcases',
        '1-tap membership enquiry WhatsApp flow'
      ]
    },
    {
      id: 'spice-avenue',
      title: 'Spice Avenue',
      kicker: 'Artisan Contemporary Dining',
      category: 'Restaurant Website Concept',
      businessType: 'Modern Italian & Contemporary Dining',
      route: '/demo/spice-avenue',
      image: `${import.meta.env.BASE_URL}portfolio/spice-avenue.jpg`,
      headline: 'A warm, editorial dining website featuring sensory food photography, digital menus, and table reservation enquiries.',
      fullDescription: 'Crafted for an upscale dining establishment to make table enquiries and menu browsing delightful on mobile screens. Built with warm ambient tones, allergen flags, and direct Google Maps routing.',
      features: [
        'Categorized digital dinner & cocktail menu',
        'Interactive table reservation enquiry module',
        'Chef signature dish showcases & story',
        'One-click Google Maps location & valet directions'
      ]
    },
    {
      id: 'urban-cuts',
      title: 'Urban Cuts',
      kicker: 'Editorial Grooming Atelier',
      category: 'Salon Website Concept',
      businessType: 'Modern Grooming & Hair Studio',
      route: '/demo/urban-cuts',
      image: `${import.meta.env.BASE_URL}portfolio/urban-cuts.jpg`,
      headline: 'An editorial salon website with architectural travertine styling, clear service cards, and stylist scheduling.',
      fullDescription: 'Engineered for a modern boutique grooming studio. Emphasizes visual style consistency, transparent service menus, stylist portfolios, and interactive appointment scheduling.',
      features: [
        'Clear haircut, styling & grooming service lists',
        'Stylist lookbook gallery with portfolio previews',
        'Mobile-first appointment scheduling module',
        'Operating schedule with real-time status'
      ]
    },
    {
      id: 'only-fish',
      title: 'Only Fish',
      kicker: 'Coastal Seafood Restaurant',
      category: 'Seafood Restaurant Website Concept',
      businessType: 'Seafood Restaurant • Dharwad',
      route: '/demo/only-fish',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish.svg`,
      headline: 'A dedicated restaurant website concept designed around menu, food and dining experience.',
      fullDescription: 'Crafted for a local coastal seafood restaurant in Dharwad. Prioritizes fresh catch showcases, regional fish thalis, direct WhatsApp communication, and clear location directions without complex ordering apps.',
      features: [
        'Curated coastal seafood & regional thali menu',
        'Direct WhatsApp contact with restaurant',
        'Google Maps location routing for Dharwad diners',
        'Clear Dine-in, Takeaway & No-Contact delivery options'
      ]
    }
  ];

  return (
    <section className="section portfolio-showcase-section" id="work" aria-labelledby="portfolio-heading">
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
            <span>Interactive Portfolio</span>
          </div>
          <h2 id="portfolio-heading" className="display-sm portfolio-heading-title">
            Built for businesses like yours.
          </h2>
          <p className="body-lg portfolio-heading-desc">
            Experience our work firsthand. Click <strong>View Demo</strong> to test complete, interactive websites crafted for real-world commercial scenarios.
          </p>
        </motion.div>

        {/* Large Editorial Project Previews */}
        <div className="case-studies-list">
          {projects.map((proj, idx) => (
            <motion.article
              key={proj.id}
              className={`case-study-item ${idx % 2 !== 0 ? 'is-reversed' : ''}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image Showcase Column with clip-path masked reveal */}
              <motion.div
                className="case-study-visual"
                initial={
                  shouldReduceMotion
                    ? false
                    : { clipPath: 'inset(6% 0% 6% 0%)', opacity: 0.85 }
                }
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={proj.route}
                  className="case-study-img-link"
                  aria-label={`Open live demo website for ${proj.title}`}
                >
                  <div className="case-study-browser-bar">
                    <div className="case-study-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <span className="case-study-url">{proj.id}.demo</span>
                    <span className="case-study-status">Live Demo</span>
                  </div>

                  <div className="case-study-img-wrapper">
                    <img
                      src={proj.image}
                      alt={`${proj.title} website preview`}
                      className="case-study-thumb"
                      loading="lazy"
                    />
                    <div className="case-study-hover-overlay">
                      <span className="case-study-hover-btn">
                        <span>Launch Live Demo</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Text & Meta Column */}
              <motion.div
                className="case-study-details"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="case-study-badges">
                  <span className="badge badge-brand">{proj.category}</span>
                  <span className="badge badge-neutral">Interactive Demo</span>
                </div>

                <div className="case-study-brand-kicker">{proj.kicker}</div>
                <h3 className="display-xs case-study-title">{proj.title}</h3>
                
                <p className="body-lg case-study-headline">
                  {proj.headline}
                </p>

                <ul className="case-study-features" aria-label={`Key features of ${proj.title}`}>
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx} className="case-study-feat-item">
                      <Check size={16} className="text-brand" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="case-study-actions">
                  <Link
                    to={proj.route}
                    className="btn btn-primary"
                    aria-label={`View Demo of ${proj.title}`}
                  >
                    <span>View Demo</span>
                    <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
                  </Link>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedProject(proj)}
                    aria-label={`View architectural details of ${proj.title}`}
                  >
                    <Info size={15} aria-hidden="true" />
                    <span>Specs</span>
                  </button>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Authenticity Disclaimer (No Pricing Reference) */}
        <div className="portfolio-concept-note text-center">
          <p className="caption">
            * Note: These are complete, browsable web applications engineered by WebNest as demonstration concepts. All business entities, staff, menus, and service scopes are representations to showcase digital design, speed, and conversion workflows.
          </p>
        </div>
      </div>

      {/* Detail Specs Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={(projectTitle) => onOpenEnquiry(projectTitle)}
        />
      )}
    </section>
  );
}
