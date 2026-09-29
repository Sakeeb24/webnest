import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import ProjectModal from './ProjectModal';
import './Portfolio.css';

export default function Portfolio({ onOpenEnquiry: _onOpenEnquiry = () => {} }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: 'only-fish',
      code: '01',
      title: 'Only Fish',
      category: 'Seafood Restaurant',
      tagline: 'Coastal Seafood Restaurant • Dharwad',
      route: '/demo/only-fish',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/bangda-thali.jpg`,
      headline: 'Authentic coastal seafood dining experience with digital menu, dish showcases, direct WhatsApp ordering, and local directions.',
      deliverables: [
        'Curated coastal seafood & regional thali menu',
        'Direct WhatsApp ordering and availability',
        'Google Maps location routing for Dharwad diners',
        'Dine-in, Takeaway & No-Contact delivery options',
      ],
      layout: 'image-left',
    },
    {
      id: 'ironcore',
      code: '02',
      title: 'IronCore Fitness',
      category: 'Fitness & Gym',
      tagline: 'Strength & Conditioning Facility',
      route: '/demo/ironcore',
      image: `${import.meta.env.BASE_URL}portfolio/ironcore.jpg`,
      headline: 'High-octane athletic dark mode website featuring real-time training schedules, trainer credentials, and membership enquiry funnels.',
      deliverables: [
        'Interactive membership tier selection',
        'Weekly training discipline breakdowns',
        'Certified coach credential showcases',
        '1-tap membership enquiry WhatsApp flow',
      ],
      layout: 'image-right',
    },
    {
      id: 'spice-avenue',
      code: '03',
      title: 'Spice Avenue',
      category: 'Restaurant & Dining',
      tagline: 'Contemporary Italian & Artisan Dining',
      route: '/demo/spice-avenue',
      image: `${import.meta.env.BASE_URL}portfolio/spice-avenue.jpg`,
      headline: 'Warm, sensory culinary dining website celebrating vibrant spices, curated tasting menus, and seamless table reservation enquiries.',
      deliverables: [
        'Categorized digital dinner & cocktail menu',
        'Interactive table reservation enquiry module',
        'Chef signature dish showcases & story',
        'One-click Google Maps location & valet directions',
      ],
      layout: 'image-left',
    },
    {
      id: 'urban-cuts',
      code: '04',
      title: 'Urban Cuts',
      category: 'Salon & Grooming',
      tagline: 'Modern Grooming & Hair Studio',
      route: '/demo/urban-cuts',
      image: `${import.meta.env.BASE_URL}portfolio/urban-cuts.jpg`,
      headline: 'Monochrome architectural grooming studio portal with transparent service menus, stylist lookbooks, and mobile appointment booking.',
      deliverables: [
        'Clear haircut, styling & grooming service lists',
        'Stylist lookbook gallery with portfolio previews',
        'Mobile-first appointment scheduling module',
        'Operating schedule with real-time status',
      ],
      layout: 'image-right',
    },
  ];

  return (
    <section className="section portfolio-editorial-section" id="work" aria-labelledby="portfolio-heading">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portfolio-section-eyebrow">
            <span className="eyebrow-indicator" aria-hidden="true" />
            <span>SELECTED WORKS [04]</span>
          </div>
          <h2 id="portfolio-heading" className="display-sm portfolio-heading-title">
            See What We Build.
          </h2>
          <p className="body-lg portfolio-subtitle">
            Realistic website concepts designed for real businesses.
          </p>
        </motion.div>

        {/* Alternating Editorial Project Showcases */}
        <div className="portfolio-projects-stack">
          {projects.map((project, idx) => {
            const isImageLeft = project.layout === 'image-left';

            return (
              <motion.article
                key={project.id}
                className={`portfolio-item ${isImageLeft ? 'layout-image-left' : 'layout-image-right'}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Visual Column */}
                <div className="portfolio-visual-col">
                  <div className="portfolio-browser-mockup">
                    <div className="portfolio-mockup-bar">
                      <div className="mockup-bar-dots" aria-hidden="true">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                      </div>
                      <span className="mockup-url-label">webnest.studio{project.route}</span>
                      <span className="mockup-live-pill">LIVE CONCEPT</span>
                    </div>

                    <div className="portfolio-image-container">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.category} website preview`}
                        className="portfolio-project-image"
                        loading="lazy"
                      />
                      <div className="portfolio-image-scrim" />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="portfolio-content-col">
                  <div className="portfolio-meta-header">
                    <span className="portfolio-code">[ {project.code} // PROJECT ]</span>
                    <span className="portfolio-category-pill">{project.category}</span>
                  </div>

                  <h3 className="portfolio-project-title">{project.title}</h3>
                  <p className="portfolio-project-tagline">{project.tagline}</p>

                  <p className="portfolio-project-desc">{project.headline}</p>

                  {/* Key Deliverables */}
                  <div className="portfolio-deliverables-list">
                    <span className="deliverables-heading">CORE CAPABILITIES</span>
                    <ul>
                      {project.deliverables.map((item, dIdx) => (
                        <li key={dIdx}>
                          <Check size={14} className="text-brand" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="portfolio-actions">
                    <Link
                      to={project.route}
                      className="btn btn-primary portfolio-demo-btn"
                      aria-label={`View live demo website for ${project.title}`}
                    >
                      <span>View Demo</span>
                      <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
                    </Link>

                    <button
                      type="button"
                      className="btn btn-secondary portfolio-details-btn"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View detailed project scope for ${project.title}`}
                    >
                      <Info size={15} aria-hidden="true" />
                      <span>Project Scope</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={{
            ...selectedProject,
            kicker: selectedProject.category,
            businessType: selectedProject.tagline,
            features: selectedProject.deliverables,
            fullDescription: selectedProject.headline,
          }}
          onClose={() => setSelectedProject(null)}
          onOpenEnquiry={(_title) => {
            setSelectedProject(null);
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      )}
    </section>
  );
}
