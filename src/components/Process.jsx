import React from 'react';
import { ListOrdered } from 'lucide-react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Tell us',
      subtitle: 'Discovery & Goals',
      description: 'We learn about your business, target customers, and core offerings through a simple briefing conversation.'
    },
    {
      num: '02',
      title: 'We design',
      subtitle: 'Architecture & Build',
      description: 'We engineer the website around your brand — prioritizing mobile speed, clean typography, and clear customer enquiry paths.'
    },
    {
      num: '03',
      title: 'You review',
      subtitle: 'Staging & Feedback',
      description: 'You test the private staging link directly on your phone and laptop, request adjustments, and approve the finished site.'
    },
    {
      num: '04',
      title: 'We launch',
      subtitle: 'Domain & Go Live',
      description: 'We point your domain, configure search metadata, verify WhatsApp connectivity, and hand over a live, working website.'
    }
  ];

  return (
    <section className="section process-editorial-section" id="process" aria-labelledby="process-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center reveal-init">
          <div className="section-badge">
            <ListOrdered size={14} aria-hidden="true" />
            <span>Workflow</span>
          </div>
          <h2 id="process-heading" className="display-sm process-title">
            Simple from start to launch.
          </h2>
          <p className="body-lg process-subtitle">
            No endless meetings, no technical jargon. A structured 4-step path to getting your business online.
          </p>
        </div>

        {/* Editorial Linear Roadmap */}
        <div className="process-timeline">
          <div className="process-timeline-track" aria-hidden="true" />
          
          <div className="process-steps-grid">
            {steps.map((st, idx) => (
              <div key={st.num} className={`process-step-item reveal-init stagger-${idx + 1}`}>
                <div className="process-step-top">
                  <span className="process-step-num" aria-label={`Step ${st.num}`}>{st.num}</span>
                  <span className="process-step-node" aria-hidden="true" />
                </div>

                <div className="process-step-body">
                  <span className="process-step-kicker">{st.subtitle}</span>
                  <h3 className="heading-md process-step-heading">{st.title}</h3>
                  <p className="body-sm process-step-text">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
