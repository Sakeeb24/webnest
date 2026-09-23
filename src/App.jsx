import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import WebNestHome from './pages/WebNestHome';
import IronCoreDemo from './demos/ironcore/IronCoreDemo';
import SpiceAvenueDemo from './demos/spice-avenue/SpiceAvenueDemo';
import UrbanCutsDemo from './demos/urban-cuts/UrbanCutsDemo';

// Centralized CSS & Design Tokens
import './tokens.css';
import './index.css';
import './components/Navbar.css';
import './components/Hero.css';
import './components/TrustStrip.css';
import './components/ProblemSection.css';
import './components/Services.css';
import './components/Portfolio.css';
import './components/Process.css';
import './components/Pricing.css';
import './components/WhyWebNest.css';
import './components/Team.css';
import './components/ContactSection.css';
import './components/FinalCTA.css';
import './components/Footer.css';

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration helper: resets scroll to top or jumps to hash anchor on route changes */}
      <ScrollToTop />

      <Routes>
        {/* WebNest Official Marketing Website */}
        <Route path="/" element={<WebNestHome />} />

        {/* Portfolio Live Demos (Locked Architecture - Clean Routes) */}
        <Route path="/demo/ironcore" element={<IronCoreDemo />} />
        <Route path="/demo/spice-avenue" element={<SpiceAvenueDemo />} />
        <Route path="/demo/urban-cuts" element={<UrbanCutsDemo />} />

        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
