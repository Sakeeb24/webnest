import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Info, Layers, Check } from 'lucide-react';
import ProjectModal from './ProjectModal';
import './Portfolio.css';

export default function Portfolio({ onOpenEnquiry }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'ironcore',
      title: 'IronCore Fitness',
      kicker: 'Fitness & Strength Club',
      category: 'Gym Website',
      businessType: 'Strength & Conditioning Facility',
      route: '/demo/ironcore',
      image: '/portfolio/ironcore.jpg',
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
      category: 'Restaurant Website',
      businessType: 'Modern Italian & Contemporary Dining',
      route: '/demo/spice-avenue',
      image: '/portfolio/spice-avenue.jpg',
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
      category: 'Salon Website',
      businessType: 'Modern Grooming & Hair Studio',
      route: '/demo/urban-cuts',
      image: '/portfolio/urban-cuts.jpg',
      headline: 'An editorial salon website with architectural travertine styling, transparent rate cards, and stylist scheduling.',
      fullDescription: 'Engineered for a modern boutique grooming studio. Emphasizes visual style consistency, transparent pricing tables, stylist portfolios, and interactive appointment scheduling.',
      features: [
        'Clear haircut, styling & grooming price sheets',
        'Stylist lookbook gallery with portfolio previews',
        'Mobile-first appointment scheduling module',
        'Operating schedule with real-time status'
      ]
    }
  ];

  return (
    <section className="section portfolio-showcase-section" id="work" aria-labelledby="portfolio-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal-init">
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
        </div>

        {/* Case Studies Stacked Showcase */}
        <div className="case-studies-list">
          {projects.map((proj, idx) => (
            <article
              key={proj.id}
              className={`case-study-item ${idx % 2 !== 0 ? 'is-reversed' : ''} reveal-init stagger-${idx + 1}`}
            >
              {/* Image Showcase Column */}
              <div className="case-study-visual">
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
              </div>

              {/* Text & Meta Column */}
              <div className="case-study-details">
                <div className="case-study-badges">
                  <span className="badge badge-brand">{proj.category}</span>
                  <span className="badge badge-neutral">WebNest Portfolio Concept</span>
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
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>

                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSelectedProject(proj)}
                    aria-label={`View architectural details of ${proj.title}`}
                  >
                    <Info size={15} aria-hidden="true" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Authenticity Disclaimer */}
        <div className="portfolio-concept-note reveal-init">
          <p className="caption">
            * Note: These are complete, browsable web applications engineered by WebNest as demonstration concepts. All business entities, staff, menus, and pricing are fictional representations to showcase digital design, speed, and conversion workflows.
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
