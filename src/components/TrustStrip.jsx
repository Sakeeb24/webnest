import React from 'react';
import { Smartphone, Palette, Clock, BadgePercent } from 'lucide-react';

export default function TrustStrip() {
  const values = [
    {
      icon: <Smartphone size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Mobile-First Design',
      description: 'Engineered for seamless experience on smartphones and tablets'
    },
    {
      icon: <Palette size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Modern Architecture',
      description: 'Clean typography, fast load speeds, and bespoke branding'
    },
    {
      icon: <Clock size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Fast Turnaround',
      description: 'From initial briefing to live deployment in days'
    },
    {
      icon: <BadgePercent size={20} className="trust-icon" aria-hidden="true" />,
      title: 'Affordable Pricing',
      description: 'Transparent flat packages with zero hidden fees'
    }
  ];

  return (
    <section className="trust-strip-section" aria-label="WebNest Studio Highlights">
      <div className="container">
        <div className="trust-strip-grid">
          {values.map((val, idx) => (
            <div key={idx} className={`trust-item reveal-init stagger-${idx + 1}`}>
              <div className="trust-icon-wrapper">
                {val.icon}
              </div>
              <div className="trust-text">
                <h2 className="trust-title">{val.title}</h2>
                <p className="trust-desc">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
