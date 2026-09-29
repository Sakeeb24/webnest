import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export default function ProjectModal({ project, onClose, onRequestSimilar }) {
  const closeButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const previousActiveElement = document.activeElement;

    // Focus close button on mount
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Keyboard accessibility: Close modal on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="modal-header">
            <div className="modal-title-wrap">
              <span className="badge badge-brand">{project.category}</span>
              <span className="badge badge-neutral">Demo Concept</span>
              <h3 id="modal-project-title" className="heading-md" style={{ marginTop: '8px' }}>
                {project.title}
              </h3>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close project preview"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Mockup Display */}
            <div className="modal-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} website concept screenshot`}
                className="modal-preview-img"
              />
            </div>

            <div className="modal-details-grid">
              <div>
                <h4 className="heading-sm" style={{ marginBottom: '8px' }}>Concept Overview</h4>
                <p className="body-md" style={{ marginBottom: '16px' }}>
                  {project.fullDescription || project.description}
                </p>

                <h4 className="heading-sm" style={{ marginBottom: '8px' }}>Features Included</h4>
                <ul className="modal-features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="modal-feature-item">
                      <CheckCircle2 size={16} className="text-brand" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-action-card">
                <h4 className="heading-sm" style={{ marginBottom: '8px' }}>Ready for your business?</h4>
                <p className="body-sm" style={{ marginBottom: '16px' }}>
                  We can customize this structure, color palette, and layout specifically for your brand.
                </p>

                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', marginBottom: '12px' }}
                  onClick={() => {
                    onClose();
                    onRequestSimilar(project.title);
                  }}
                >
                  <span>Request Similar Website</span>
                  <ArrowRight size={16} aria-hidden="true" className="arrow-icon" />
                </button>

                <div className="modal-stats-pill">
                  <Zap size={14} className="text-brand" aria-hidden="true" />
                  <span>Sub-second load times & 100% mobile-friendly</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
