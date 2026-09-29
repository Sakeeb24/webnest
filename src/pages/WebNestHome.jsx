import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Process from '../components/Process';
import WhyWebNest from '../components/WhyWebNest';
import ContactSection from '../components/ContactSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function WebNestHome() {
  const [selectedRequirement, setSelectedRequirement] = useState('');

  // SEO Document Title and Meta Description
  useEffect(() => {
    document.title = 'WebNest — Architectural Digital Experiences & Web Engineering';
  }, []);

  const handleOpenEnquiry = (requirement = '') => {
    if (requirement) {
      setSelectedRequirement(requirement);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      // Accessibility: focus name field after scroll
      setTimeout(() => {
        const nameField = document.getElementById('field-name');
        if (nameField) {
          nameField.focus();
        }
      }, 500);
    }
  };

  return (
    <div className="webnest-app">
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 1. Header & Navigation: Compact, premium, accessible */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('General Business Website')} />

      {/* Main Content Landmarks in Client-Focused Conversion Order */}
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        {/* 2. Hero: Immediate Value Proposition + Editorial Composed Project Previews */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry('General Business Website')} />

        {/* 3. Portfolio: MOVED HIGHER — Immediate visual proof with alternating magazine layouts */}
        <Portfolio onOpenEnquiry={(projectTitle) => handleOpenEnquiry(`Concept: ${projectTitle}`)} />

        {/* 4. Services: Editorial "What We Build" with 4 clear categories */}
        <Services onOpenEnquiry={(serviceTitle) => handleOpenEnquiry(serviceTitle)} />

        {/* 5. Website Options: 3 Tiers (STARTER, BUSINESS, PREMIUM) with ZERO pricing numbers */}
        <Packages onSelectPackage={(pkgName) => handleOpenEnquiry(`${pkgName} Package`)} />

        {/* 6. Process: Structured 4-stage horizontal methodology */}
        <Process />

        {/* 7. Why WebNest: 6 concise studio qualities with zero fake statistics */}
        <WhyWebNest />

        {/* 8. Contact Section: Direct WhatsApp conversion + honest enquiry brief */}
        <ContactSection
          key={selectedRequirement || 'default'}
          defaultRequirement={selectedRequirement}
        />

        {/* 9. Final CTA: Editorial closing section */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry('Start Your Website')} />
      </main>

      {/* 10. Footer: Minimal studio footer */}
      <Footer />
    </div>
  );
}
