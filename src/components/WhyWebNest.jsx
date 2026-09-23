import React from 'react';
import { HeartHandshake } from 'lucide-react';
import './WhyWebNest.css';

export default function WhyWebNest() {
  const principles = [
    {
      num: '01',
      title: 'Fast Turnaround',
      description: 'Modern development tools and streamlined workflows allow us to build, test, and launch your website without months of bureaucratic delays.'
    },
    {
      num: '02',
      title: 'Custom Brand Identity',
      description: 'Every site is tailored specifically to your business, clientele, and service model — avoiding recycled template looks.'
    },
    {
      num: '03',
      title: 'Mobile-First Architecture',
      description: 'Over 80% of local customers discover services on their phones. We prioritize thumb-friendly navigation, instant tap-to-call, and speed.'
    },
    {
      num: '04',
      title: 'Direct Founder Communication',
      description: 'No account managers, sales intermediaries, or agency runaround. You work directly with the developers building your site.'
    },
    {
      num: '05',
      title: 'Transparent Pricing',
      description: 'Clear, honest starting packages with zero hidden fees, locking contracts, or unexpected recurring subscription traps.'
    },
    {
      num: '06',
      title: 'Reliable Post-Launch Support',
      description: 'We don’t disappear after go-live. We assist with domain setup, menu/hours updates, and technical adjustments as your business grows.'
    }
  ];

  return (
    <section className="section why-editorial-section" id="why" aria-labelledby="why-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal-init">
          <div className="section-badge">
            <HeartHandshake size={14} aria-hidden="true" />
            <span>Studio Principles</span>
          </div>
          <h2 id="why-heading" className="display-sm why-editorial-heading">
            Why businesses choose WebNest
          </h2>
          <p className="body-lg why-editorial-sub">
            We are an independent two-person web studio. We focus on craft, performance, and commercial utility for real businesses.
          </p>
        </div>

        {/* Editorial Feature Grid (No heavy cards) */}
        <div className="why-principles-grid">
          {principles.map((p, idx) => (
            <div key={p.num} className={`why-principle-item reveal-init stagger-${(idx % 3) + 1}`}>
              <span className="why-principle-num" aria-hidden="true">{p.num}</span>
              <h3 className="heading-sm why-principle-title">{p.title}</h3>
              <p className="body-sm why-principle-desc">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
