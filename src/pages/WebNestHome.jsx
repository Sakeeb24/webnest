import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ProblemSection from '../components/ProblemSection';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import WhyWebNest from '../components/WhyWebNest';
import Team from '../components/Team';
import ContactSection from '../components/ContactSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WebNestHome() {
  const [selectedRequirement, setSelectedRequirement] = useState('');

  // Set document title and meta description for SEO
  useEffect(() => {
    document.title = 'WebNest — Modern Websites for Growing Businesses';
  }, []);

  // Initialize GPU-friendly scroll reveal animations
  useScrollReveal();

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

      {/* Main Content Landmarks */}
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <Hero onOpenEnquiry={() => handleOpenEnquiry('General Business Website')} />
        
        <TrustStrip />

        <ProblemSection onOpenEnquiry={() => handleOpenEnquiry('Business Growth Website')} />

        <Services onOpenEnquiry={(serviceTitle) => handleOpenEnquiry(serviceTitle)} />

        <Portfolio onOpenEnquiry={(projectTitle) => handleOpenEnquiry(`Concept: ${projectTitle}`)} />

        <Process />

        <WhyWebNest />

        <Pricing onSelectTier={(tierName) => handleOpenEnquiry(`${tierName} Plan`)} />

        {/* Founders / Team Section (Section 5 & 53) */}
        <Team />

        <ContactSection
          key={selectedRequirement || 'default'}
          defaultRequirement={selectedRequirement}
        />

        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry('Start Your Website')} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
