import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Packages from '../components/Packages';
import Process from '../components/Process';
import ProblemSection from '../components/ProblemSection';
import WhyWebNest from '../components/WhyWebNest';
import Team from '../components/Team';
import ContactSection from '../components/ContactSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function WebNestHome() {
  const [selectedRequirement, setSelectedRequirement] = useState('');

  // Set document title and meta description for SEO
  useEffect(() => {
    document.title = 'WebNest — Modern Websites for Growing Businesses';
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

      {/* Header & Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('General Business Website')} />

      {/* Main Content Landmarks in Client Priority Order */}
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        {/* 1. What WebNest Does */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry('General Business Website')} />
        
        {/* Quick Studio Highlights */}
        <TrustStrip />

        {/* 2. What Kind of Websites We Build */}
        <Services onOpenEnquiry={(serviceTitle) => handleOpenEnquiry(serviceTitle)} />

        {/* 3. Portfolio / Demo Proof (Large previews) */}
        <Portfolio onOpenEnquiry={(projectTitle) => handleOpenEnquiry(`Concept: ${projectTitle}`)} />

        {/* 4. Website Package Scope (Strictly NO pricing numbers) */}
        <Packages onSelectPackage={(pkgName) => handleOpenEnquiry(`${pkgName} Package`)} />

        {/* 5. Simple Process */}
        <Process />

        {/* Context & Studio Principles */}
        <ProblemSection onOpenEnquiry={() => handleOpenEnquiry('Business Growth Website')} />
        <WhyWebNest />

        {/* Founders / Team Direct Verification */}
        <Team />

        {/* 6. Contact & WhatsApp Enquiry Flow */}
        <ContactSection
          key={selectedRequirement || 'default'}
          defaultRequirement={selectedRequirement}
        />

        {/* Final WhatsApp Call to Action */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry('Start Your Website')} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
