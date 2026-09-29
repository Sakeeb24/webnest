import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/motion/PageTransition';
import WebNestHome from './pages/WebNestHome';
import IronCoreDemo from './demos/ironcore/IronCoreDemo';
import SpiceAvenueDemo from './demos/spice-avenue/SpiceAvenueDemo';
import UrbanCutsDemo from './demos/urban-cuts/UrbanCutsDemo';
import OnlyFishDemo from './demos/only-fish/OnlyFishDemo';

// Centralized CSS & Design Tokens
import './tokens.css';
import './index.css';
import './components/Navbar.css';
import './components/Hero.css';
import './components/TrustStrip.css';
import './components/ProblemSection.css';
import './components/Services.css';
import './components/Portfolio.css';
import './components/Packages.css';
import './components/Process.css';
import './components/WhyWebNest.css';
import './components/Team.css';
import './components/ContactSection.css';
import './components/FinalCTA.css';
import './components/Footer.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* WebNest Official Marketing Website */}
        <Route
          path="/"
          element={
            <PageTransition>
              <WebNestHome />
            </PageTransition>
          }
        />

        {/* Portfolio Live Demos (Locked Architecture - Clean Routes) */}
        <Route
          path="/demo/ironcore"
          element={
            <PageTransition>
              <IronCoreDemo />
            </PageTransition>
          }
        />
        <Route
          path="/demo/spice-avenue"
          element={
            <PageTransition>
              <SpiceAvenueDemo />
            </PageTransition>
          }
        />
        <Route
          path="/demo/urban-cuts"
          element={
            <PageTransition>
              <UrbanCutsDemo />
            </PageTransition>
          }
        />
        <Route
          path="/demo/only-fish"
          element={
            <PageTransition>
              <OnlyFishDemo />
            </PageTransition>
          }
        />

        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/webnest">
      {/* Scroll restoration helper */}
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
