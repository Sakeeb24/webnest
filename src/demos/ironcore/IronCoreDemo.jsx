import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Check,
  Clock,
  MapPin,
  Phone,
  Shield,
  Zap,
  Flame,
  Award,
  Users,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  MessageSquare
} from 'lucide-react';
import DemoHeader from '../common/DemoHeader';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../../config/business';
import './IronCore.css';

export default function IronCoreDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Athletic Pro (₹3,499/mo)');
  const [membershipSubmitted, setMembershipSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const triggerRef = useRef(null);
  const modalCloseRef = useRef(null);

  // SEO document title
  useEffect(() => {
    document.title = 'IronCore Fitness — WebNest Portfolio Concept';
  }, []);

  // Keyboard accessibility: Escape closes modal and mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (membershipModalOpen) {
          setMembershipModalOpen(false);
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [membershipModalOpen, mobileMenuOpen]);

  // Lock body scroll when modal or mobile menu is active
  useEffect(() => {
    if (membershipModalOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [membershipModalOpen, mobileMenuOpen]);

  // Focus management: focus modal close on open, restore trigger focus on close
  useEffect(() => {
    if (membershipModalOpen) {
      setTimeout(() => {
        if (modalCloseRef.current) {
          modalCloseRef.current.focus();
        }
      }, 50);
    } else if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
      triggerRef.current.focus();
    }
  }, [membershipModalOpen]);

  const handleOpenMembership = (planName = 'Athletic Pro (₹3,499/mo)') => {
    triggerRef.current = document.activeElement;
    setSelectedPlan(planName);
    setMembershipSubmitted(false);
    setMembershipModalOpen(true);
  };

  const handleMembershipSubmit = (e) => {
    e.preventDefault();
    setMembershipSubmitted(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="ironcore-page">
      {/* Persistent WebNest Concept Banner */}
      <DemoHeader currentDemo="ironcore" />

      {/* Accessibility Skip Link */}
      <a href="#ironcore-main" className="skip-link">
        Skip to gym content
      </a>

      {/* Demo Gym Header */}
      <header className="ic-header">
        <div className="ic-container ic-header-inner">
          <a href="#hero" className="ic-brand" aria-label="IronCore Fitness Home">
            <div className="ic-brand-icon" aria-hidden="true">
              <Dumbbell size={22} />
            </div>
            <div className="ic-brand-text">
              <span className="ic-brand-title">IRONCORE</span>
              <span className="ic-brand-sub">Fitness & Strength</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="ic-nav" aria-label="IronCore Primary Navigation">
            <a href="#about" className="ic-nav-link">About</a>
            <a href="#programs" className="ic-nav-link">Programs</a>
            <a href="#facilities" className="ic-nav-link">Facilities</a>
            <a href="#trainers" className="ic-nav-link">Trainers</a>
            <a href="#membership" className="ic-nav-link">Membership</a>
            <a href="#contact" className="ic-nav-link">Contact</a>
          </nav>

          <div className="ic-nav-actions">
            <button
              type="button"
              className="ic-btn ic-btn-primary"
              onClick={() => handleOpenMembership('Athletic Pro (₹3,499/mo)')}
              aria-label="Submit Membership Enquiry"
            >
              <span>Membership Enquiry</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="ic-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`ic-mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          <a href="#about" className="ic-mobile-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#programs" className="ic-mobile-link" onClick={() => setMobileMenuOpen(false)}>Programs</a>
          <a href="#facilities" className="ic-mobile-link" onClick={() => setMobileMenuOpen(false)}>Facilities</a>
          <a href="#trainers" className="ic-mobile-link" onClick={() => setMobileMenuOpen(false)}>Trainers</a>
          <a href="#membership" className="ic-mobile-link" onClick={() => setMobileMenuOpen(false)}>Membership</a>
          <a href="#contact" className="ic-mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button
            type="button"
            className="ic-btn ic-btn-primary"
            style={{ marginTop: '12px', width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              handleOpenMembership('Athletic Pro (₹3,499/mo)');
            }}
          >
            Membership Enquiry
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main id="ironcore-main" tabIndex={-1} style={{ outline: 'none' }}>
        {/* Hero Section */}
        <section id="hero" className="ic-hero" aria-labelledby="hero-headline">
          <div className="ic-container ic-hero-grid">
            <div className="ic-hero-content">
              <div className="ic-kicker">
                <Flame size={14} aria-hidden="true" />
                <span>Koramangala, Bengaluru • Elite Strength & Conditioning</span>
              </div>
              <h1 id="hero-headline" className="ic-heading-xl">
                Train Strong. Live Stronger.
              </h1>
              <p className="ic-lead">
                A modern training space built for strength, fitness and consistency. Precision calibrated equipment, certified coaching, and an uncompromising standard of athletic physical culture.
              </p>
              <div className="ic-hero-ctas">
                <a href="#membership" className="ic-btn ic-btn-primary">
                  <span>View Memberships</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#programs" className="ic-btn ic-btn-secondary">
                  <span>Explore Programs</span>
                </a>
              </div>
            </div>

            <div className="ic-hero-visual">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VKjydQAGW4GUSpV99j_n7m1mI96iEkWRh7QTEy3UJNSo9Gk3bcjsEed5UfvOCwFW9CeEbA_CmFTKuEGZu7MEJR_AW-hVgZGRZiNORrzYaWQsj7JBM1YqEON00JvSZ2u0K63pttzRM9MOwfBaxyd8zm8NojPggDdUqQ3aFO-7dGsnu_jkYT4JZ8zhvepfRo1nL_yJjQEV_XzU22OE-s_fFhRLiANlOMXRvHLI2uTWcDp0f3ZvXx619NtR4"
                alt="Athlete performing barbell deadlift training inside IronCore Fitness gym"
                className="ic-hero-img"
                onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}portfolio/ironcore.jpg`; }}
              />
              <div className="ic-hero-badge">
                <div>
                  <div className="ic-hero-badge-title">Performance Training Facility</div>
                  <div className="ic-hero-badge-sub">Competition standard power racks & platforms</div>
                </div>
                <Award size={20} color="#3b82f6" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="ic-stats-strip" aria-label="Facility statistics">
          <div className="ic-container ic-stats-grid">
            <div className="ic-stat-item">
              <span className="ic-stat-num">12,000</span>
              <span className="ic-stat-label">Sq Ft Dedicated Training Space</span>
            </div>
            <div className="ic-stat-item">
              <span className="ic-stat-num">1 : 8</span>
              <span className="ic-stat-label">Max Coach to Member Ratio</span>
            </div>
            <div className="ic-stat-item">
              <span className="ic-stat-num">100%</span>
              <span className="ic-stat-label">Precision Steel & Calibrated Racks</span>
            </div>
            <div className="ic-stat-item">
              <span className="ic-stat-num">6 AM – 10 PM</span>
              <span className="ic-stat-label">Monday to Saturday Access</span>
            </div>
          </div>
        </section>

        {/* About Mission Section */}
        <section id="about" className="ic-section">
          <div className="ic-container">
            <div className="ic-section-header">
              <div className="ic-kicker">
                <Shield size={14} aria-hidden="true" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="ic-heading-lg">Built for Sustainable Human Strength</h2>
              <p className="ic-lead" style={{ margin: '16px auto 0' }}>
                We believe fitness should be grounded in biomechanics, progressive strength, and genuine community support — not commercial sales gimmicks or crowded queues.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="ic-section ic-section-alt" aria-labelledby="programs-heading">
          <div className="ic-container">
            <div className="ic-section-header">
              <div className="ic-kicker">
                <Zap size={14} aria-hidden="true" />
                <span>Training Disciplines</span>
              </div>
              <h2 id="programs-heading" className="ic-heading-lg">Programs Tailored for Your Goals</h2>
              <p className="ic-lead" style={{ margin: '16px auto 0' }}>
                Whether you want to build raw barbell strength, maximize athletic conditioning, or recover mobility, our structured programs provide clear progression.
              </p>
            </div>

            <div className="ic-programs-grid">
              <article className="ic-program-card">
                <div className="ic-program-icon" aria-hidden="true">
                  <Dumbbell size={24} />
                </div>
                <h3 className="ic-program-title">Strength & Hypertrophy</h3>
                <p className="ic-program-desc">
                  Focused barbell cycles across squat, bench, deadlift, and overhead press paired with evidence-based hypertrophy accessories.
                </p>
                <div className="ic-program-tags">
                  <span className="ic-tag">Barbell Focus</span>
                  <span className="ic-tag">Progressive Overload</span>
                  <span className="ic-tag">App Tracking</span>
                </div>
              </article>

              <article className="ic-program-card">
                <div className="ic-program-icon" aria-hidden="true">
                  <Flame size={24} />
                </div>
                <h3 className="ic-program-title">Functional Conditioning</h3>
                <p className="ic-program-desc">
                  High-velocity sled pushes, ski-ergs, assault bikes, and kettlebell circuits designed to build an unbreakable cardiovascular engine.
                </p>
                <div className="ic-program-tags">
                  <span className="ic-tag">Turf Sleds</span>
                  <span className="ic-tag">HIIT & Aerobic</span>
                  <span className="ic-tag">45-min Sessions</span>
                </div>
              </article>

              <article className="ic-program-card">
                <div className="ic-program-icon" aria-hidden="true">
                  <Users size={24} />
                </div>
                <h3 className="ic-program-title">1-on-1 Personal Coaching</h3>
                <p className="ic-program-desc">
                  Dedicated biomechanics assessment, customized periodized programming, form video breakdowns, and tailored nutritional guidelines.
                </p>
                <div className="ic-program-tags">
                  <span className="ic-tag">Private Racks</span>
                  <span className="ic-tag">Nutrition Roadmap</span>
                  <span className="ic-tag">Weekly Review</span>
                </div>
              </article>

              <article className="ic-program-card">
                <div className="ic-program-icon" aria-hidden="true">
                  <Shield size={24} />
                </div>
                <h3 className="ic-program-title">Mobility & Longevity</h3>
                <p className="ic-program-desc">
                  Joint decompressions, active flexibility protocols, and posterior chain restoration to bulletproof your joints against injury.
                </p>
                <div className="ic-program-tags">
                  <span className="ic-tag">Injury Prevention</span>
                  <span className="ic-tag">Joint Health</span>
                  <span className="ic-tag">Recovery Lab</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="ic-section" aria-labelledby="facilities-heading">
          <div className="ic-container">
            <div className="ic-facilities-grid">
              <div className="ic-facilities-img-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1U4eyzKSs2CiBVbhkPl3M_NID7SJ79lfOxKVVuPEpY90mL5QGAPYo6j3eNxqC-pOeDI3kgQ-ntKr-k1NG8FYudme1fftnllCuxFj5Fm5iHfa50dCVvRjqwTPus3jlYSLysI6HPPmYm0LJL15CUYZUkQAoL3SN3ri0Z1GRs5nWQYPxNzViiCof8hKru1njQyIJKikm2EOCTZUPj8GB4Cid_6wgp4FjB2cuZ58tg2YyKYGbz71qwxP7CBDWk"
                  alt="State of the art power racks and lifting platforms at IronCore Fitness"
                  className="ic-facilities-img"
                  onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}portfolio/ironcore.jpg`; }}
                />
              </div>

              <div className="ic-facilities-list">
                <div className="ic-kicker">
                  <Award size={14} aria-hidden="true" />
                  <span>The IronCore Standard</span>
                </div>
                <h2 id="facilities-heading" className="ic-heading-lg">Engineered for Serious Lifters</h2>
                
                <div className="ic-facility-point">
                  <Check size={20} className="ic-facility-point-icon" aria-hidden="true" />
                  <div>
                    <h4>10 Dedicated Matte Black Power Cages</h4>
                    <p>No waiting in line for squat racks. Each station is equipped with calibrated steel plates and premium knurled bars.</p>
                  </div>
                </div>

                <div className="ic-facility-point">
                  <Check size={20} className="ic-facility-point-icon" aria-hidden="true" />
                  <div>
                    <h4>30-Meter Sled & Sprint Turf Track</h4>
                    <p>High-traction indoor turf built for heavy sled drives, farmer carries, and explosive bounding drills.</p>
                  </div>
                </div>

                <div className="ic-facility-point">
                  <Check size={20} className="ic-facility-point-icon" aria-hidden="true" />
                  <div>
                    <h4>Infrared Sauna & Recovery Lounge</h4>
                    <p>Post-training recovery facilities including contrast therapy, infrared saunas, and private locker showers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section id="trainers" className="ic-section ic-section-alt" aria-labelledby="trainers-heading">
          <div className="ic-container">
            <div className="ic-section-header">
              <div className="ic-kicker">
                <Users size={14} aria-hidden="true" />
                <span>Elite Faculty</span>
              </div>
              <h2 id="trainers-heading" className="ic-heading-lg">Coached by Career Specialists</h2>
              <p className="ic-lead" style={{ margin: '16px auto 0' }}>
                Our coaches hold international strength certifications and follow rigorous continuing education in exercise physiology.
              </p>
            </div>

            <div className="ic-trainers-grid">
              <article className="ic-trainer-card">
                <div className="ic-trainer-photo-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1UdgCDXo4GapB3P4PsO7GfMD5SrH0u7hkGTf_tZkIbC6cA87-4tc-R4S3V97Ggx997PTyBu7EsZXSLFkiuDJbVVqe9VU4lr4mY9IZZL9McBKHUpwV5CM3FjW4iadojwK0647hzh1btlVXs67UeQj710Ujdly398l_d7IgZJEjH_jvPaND7I1GZxy3WDrKHIAqQaSkLEAAtsSsr4Yh2qA0IwWDcPlWyd4pCILNHZN1LBvUwB30BEkpmMR-E"
                    alt="Arjun Mehta, Head Strength Coach"
                    className="ic-trainer-img"
                    onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}portfolio/ironcore.jpg`; }}
                  />
                </div>
                <div className="ic-trainer-info">
                  <span className="ic-trainer-role">Head of Strength & Conditioning</span>
                  <h3 className="ic-trainer-name">Arjun Mehta</h3>
                  <div className="ic-trainer-creds">CSCS • EXOS Performance Specialist • 9+ Yrs</div>
                  <p className="ic-trainer-bio">
                    Specializes in barbell mechanics, rate of force development, and customized periodization cycles for intermediate and advanced lifters.
                  </p>
                </div>
              </article>

              <article className="ic-trainer-card">
                <div className="ic-trainer-photo-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1W3nGv6LcRrGuEUT2jJ0TaCb5ptAvb1byKQeGwAhhH_MnJWutCKbtWULrLMLIQBLcI0jQX2lCniveRYfNArjFjGemr3wvsdsjKcFGsafZ1NWd0xaoDPSvUPEBdja_TTicXSWwGQvIlVaolntSxEOUzheLdo8NW5lCqSDRT8qqlpvL7zUP9x3TjbrJ3dH6QDdVaJ5SxNexeI2YEKY83rwqOe7y2Vr9AJBPj_ilBqPZ5P9rbjBiczV5J-pFA"
                    alt="Priya Sharma, Mobility & Functional Lead"
                    className="ic-trainer-img"
                    onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}portfolio/ironcore.jpg`; }}
                  />
                </div>
                <div className="ic-trainer-info">
                  <span className="ic-trainer-role">Mobility & Functional Movement Lead</span>
                  <h3 className="ic-trainer-name">Priya Sharma</h3>
                  <div className="ic-trainer-creds">ACE Certified • FRCms Mobility Specialist</div>
                  <p className="ic-trainer-bio">
                    Bridges athletic performance and joint longevity. Helps desk-bound professionals regain thoracic spine, hip, and shoulder mobility.
                  </p>
                </div>
              </article>

              <article className="ic-trainer-card">
                <div className="ic-trainer-photo-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VVgw5CDdWlKV_3xRMZ9qj2duzc0cv64i2SvM9Y9bP8Dt415FUuxHCTRK1IBlWuZWlFAKEVTIZok8A_gz98nKrlkM9vd7-pVUCCOl0wtVl6H7EoFrWn_uViNBTOJG5Der_avpHjFKCasp71V_lC7ZmCfrANtHT7L4jmUhbroOMtCiVrIToyxPVNhX2FvMkPhOOrYJ-G1hrKsEl8o7LUwXRtd7MhUoUNfHntFsLKM3Ctv9hy6RLPC4xqcoI"
                    alt="Rohan Patil, Conditioning & Sprint Coach"
                    className="ic-trainer-img"
                    onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}portfolio/ironcore.jpg`; }}
                  />
                </div>
                <div className="ic-trainer-info">
                  <span className="ic-trainer-role">Performance & Conditioning Coach</span>
                  <h3 className="ic-trainer-name">Rohan Patil</h3>
                  <div className="ic-trainer-creds">ISSA Elite Coach • Olympic Weightlifting L2</div>
                  <p className="ic-trainer-bio">
                    Commands the turf track and conditioning circuits. Expert in metabolic conditioning, acceleration, and Olympic clean & jerk technique.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Membership Pricing Section */}
        <section id="membership" className="ic-section" aria-labelledby="membership-heading">
          <div className="ic-container">
            <div className="ic-section-header">
              <div className="ic-kicker">
                <Award size={14} aria-hidden="true" />
                <span>Transparent Memberships</span>
              </div>
              <h2 id="membership-heading" className="ic-heading-lg">Choose Your Commitment</h2>
              <p className="ic-lead" style={{ margin: '16px auto 0' }}>
                No hidden initiation fees, no locking contracts. Upgrade, pause, or cancel with 14 days notice.
              </p>
            </div>

            <div className="ic-pricing-grid">
              {/* Basic Plan */}
              <div className="ic-pricing-card">
                <div className="ic-pricing-header">
                  <h3 className="ic-tier-name">Floor Access</h3>
                  <p className="ic-tier-desc">For experienced lifters who need world-class equipment and open training space.</p>
                </div>
                <div className="ic-pricing-cost">
                  <span className="ic-currency">₹</span>
                  <span className="ic-amount">1,999</span>
                  <span className="ic-period">/ month</span>
                </div>
                <ul className="ic-features-list">
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Full open gym floor & power racks</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Off-peak hours (10 AM – 5 PM)</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Locker and shower facilities</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Mobile check-in app</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="ic-btn ic-btn-outline"
                  onClick={() => handleOpenMembership('Floor Access (₹1,999/mo)')}
                >
                  Select Plan
                </button>
              </div>

              {/* Pro Plan (Featured) */}
              <div className="ic-pricing-card is-popular">
                <span className="ic-pricing-badge">Most Popular</span>
                <div className="ic-pricing-header">
                  <h3 className="ic-tier-name">Athletic Pro</h3>
                  <p className="ic-tier-desc">Our flagship membership with all-hours access and structured group conditioning.</p>
                </div>
                <div className="ic-pricing-cost">
                  <span className="ic-currency">₹</span>
                  <span className="ic-amount">3,499</span>
                  <span className="ic-period">/ month</span>
                </div>
                <ul className="ic-features-list">
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span><strong>Unrestricted 6 AM – 10 PM</strong> access</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>All functional conditioning group sessions</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Monthly coach form review & InBody scan</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>2 guest passes included each month</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Complimentary towel & sauna access</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="ic-btn ic-btn-primary"
                  onClick={() => handleOpenMembership('Athletic Pro (₹3,499/mo)')}
                >
                  Join Athletic Pro
                </button>
              </div>

              {/* Elite Plan */}
              <div className="ic-pricing-card">
                <div className="ic-pricing-header">
                  <h3 className="ic-tier-name">Performance Elite</h3>
                  <p className="ic-tier-desc">Complete holistic coaching with dedicated 1-on-1 personal guidance and recovery.</p>
                </div>
                <div className="ic-pricing-cost">
                  <span className="ic-currency">₹</span>
                  <span className="ic-amount">5,999</span>
                  <span className="ic-period">/ month</span>
                </div>
                <ul className="ic-features-list">
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>All Athletic Pro benefits included</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span><strong>4 x 1-on-1 Private Coaching</strong> sessions/mo</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Bespoke nutrition roadmap & weekly review</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Permanent reserved locker</span>
                  </li>
                  <li className="ic-feature-item">
                    <Check size={18} className="ic-feature-icon" />
                    <span>Unlimited infrared recovery sauna</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="ic-btn ic-btn-outline"
                  onClick={() => handleOpenMembership('Performance Elite (₹5,999/mo)')}
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Hours Section */}
        <section id="contact" className="ic-section ic-section-alt" aria-labelledby="contact-heading">
          <div className="ic-container">
            <div className="ic-section-header">
              <div className="ic-kicker">
                <MapPin size={14} aria-hidden="true" />
                <span>Visit The Gym</span>
              </div>
              <h2 id="contact-heading" className="ic-heading-lg">Location & Schedule</h2>
            </div>

            <div className="ic-contact-grid">
              <div className="ic-contact-info-card">
                <div className="ic-contact-row">
                  <MapPin size={24} className="ic-contact-row-icon" />
                  <div className="ic-contact-row-content">
                    <h4>Address</h4>
                    <p>100 Feet Road, 4th Block, Koramangala<br />Bengaluru, Karnataka 560034</p>
                  </div>
                </div>

                <div className="ic-contact-row">
                  <Clock size={24} className="ic-contact-row-icon" />
                  <div className="ic-contact-row-content">
                    <h4>Operating Schedule</h4>
                    <p>
                      <strong>Monday – Saturday:</strong> 6:00 AM – 10:00 PM<br />
                      <strong>Sunday:</strong> 7:00 AM – 2:00 PM (Open Floor Only)
                    </p>
                  </div>
                </div>

                <div className="ic-contact-row">
                  <Phone size={24} className="ic-contact-row-icon" />
                  <div className="ic-contact-row-content">
                    <h4>Direct Inquiries</h4>
                    <p>+91 98450 12345 (Demo Number)<br />hello@ironcorefitness.demo</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="ic-contact-form-wrap">
                <div className="ic-demo-form-alert" style={{ textAlign: 'left', marginBottom: '16px' }}>
                  <div style={{ fontWeight: '700', color: '#38bdf8', marginBottom: '4px' }}>WebNest Concept Demo</div>
                  <div>This interactive form demonstrates how a gym website collects prospective member inquiries. No message will be sent to an actual facility.</div>
                </div>

                {contactSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '24px 16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <Check size={28} />
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>Demo Enquiry Logged</h3>
                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5', marginBottom: '16px' }}>
                      This interaction demonstrates how an enquiry is validated and processed on a modern fitness website. No actual message was dispatched.
                    </p>
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <p style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: '600', marginBottom: '8px' }}>
                        Want a website like this?
                      </p>
                      <a
                        href={createWhatsAppLink(BUSINESS_CONFIG.messages.ironcore)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ic-btn ic-btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '13px', textDecoration: 'none' }}
                        aria-label={`Start a conversation with WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
                      >
                        <span>Start a Conversation →</span>
                      </a>
                    </div>
                    <button
                      type="button"
                      className="ic-btn ic-btn-secondary"
                      style={{ marginTop: '16px', fontSize: '13px' }}
                      onClick={() => setContactSubmitted(false)}
                    >
                      Reset Demo Form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    <div className="ic-form-group">
                      <label htmlFor="ic-name" className="ic-form-label">Full Name</label>
                      <input
                        id="ic-name"
                        type="text"
                        required
                        className="ic-form-input"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="ic-form-group">
                      <label htmlFor="ic-phone" className="ic-form-label">Phone Number</label>
                      <input
                        id="ic-phone"
                        type="tel"
                        required
                        className="ic-form-input"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="ic-form-group">
                      <label htmlFor="ic-interest" className="ic-form-label">Primary Interest</label>
                      <select id="ic-interest" className="ic-form-select">
                        <option>General Gym Membership</option>
                        <option>Barbell Strength Training</option>
                        <option>1-on-1 Personal Coaching</option>
                        <option>Cardiovascular Conditioning</option>
                      </select>
                    </div>

                    <button type="submit" className="ic-btn ic-btn-primary" style={{ width: '100%' }}>
                      <span>Submit Inquiry</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* WebNest Studio Conversion Strip (Section 43 & 67) */}
        <section className="demo-conversion-strip" aria-label="WebNest Studio Service Callout">
          <div className="demo-conversion-inner">
            <div className="demo-conversion-text">
              <div className="demo-conversion-kicker">
                <Zap size={14} aria-hidden="true" />
                <span>Concept Website Engineered by WebNest</span>
              </div>
              <h3 className="demo-conversion-title">
                Want a high-converting website like IronCore Fitness for your business?
              </h3>
              <p className="demo-conversion-desc">
                WebNest designs, builds, and launches tailored websites with transparent pricing, fast turnaround, and zero agency overhead.
              </p>
            </div>
            <div className="demo-conversion-action">
              <a
                href={createWhatsAppLink(BUSINESS_CONFIG.messages.ironcore)}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-whatsapp-btn"
                aria-label={`Chat on WhatsApp with WebNest about a fitness website at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Start a Conversation ↗</span>
              </a>
              <span className="demo-conversion-subtext">
                WhatsApp · {BUSINESS_CONFIG.whatsapp.displayNumber}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ic-footer">
        <div className="ic-container">
          <div className="ic-footer-grid">
            <div className="ic-footer-col">
              <div className="ic-brand" style={{ marginBottom: '16px' }}>
                <div className="ic-brand-icon" aria-hidden="true">
                  <Dumbbell size={20} />
                </div>
                <div className="ic-brand-text">
                  <span className="ic-brand-title">IRONCORE</span>
                  <span className="ic-brand-sub">Fitness & Strength</span>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', maxWidth: '300px' }}>
                A boutique fitness facility committed to progressive barbell strength, athletic conditioning, and evidence-based longevity.
              </p>
            </div>

            <div className="ic-footer-col">
              <h4>Programs</h4>
              <ul>
                <li><a href="#programs">Strength & Hypertrophy</a></li>
                <li><a href="#programs">Functional Conditioning</a></li>
                <li><a href="#programs">1-on-1 Coaching</a></li>
                <li><a href="#programs">Mobility Restoration</a></li>
              </ul>
            </div>

            <div className="ic-footer-col">
              <h4>Facility</h4>
              <ul>
                <li><a href="#facilities">Precision Power Cages</a></li>
                <li><a href="#facilities">Sprint Turf Track</a></li>
                <li><a href="#facilities">Infrared Recovery</a></li>
                <li><a href="#membership">Membership Plans</a></li>
              </ul>
            </div>

            <div className="ic-footer-col">
              <h4>Studio Concept</h4>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6' }}>
                This is a live interactive concept website engineered by WebNest to showcase fitness industry UX, conversion architecture, and high performance.
              </p>
            </div>
          </div>

          <div className="ic-footer-bottom">
            <span>© {new Date().getFullYear()} IronCore Fitness (Portfolio Concept). All rights reserved.</span>
            <Link to="/" className="ic-footer-back-webnest">
              ← Return to WebNest Studio
            </Link>
          </div>
        </div>
      </footer>

      {/* Interactive Membership Enquiry Modal */}
      {membershipModalOpen && (
        <div className="ic-modal-backdrop" onClick={() => setMembershipModalOpen(false)} role="dialog" aria-modal="true" aria-labelledby="membership-modal-title">
          <div className="ic-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              ref={modalCloseRef}
              type="button"
              className="ic-modal-close"
              onClick={() => setMembershipModalOpen(false)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {membershipSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <MessageSquare size={28} />
                </div>
                <h3 id="membership-modal-title" style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                  Membership Enquiry Ready
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                  Your membership enquiry for {selectedPlan || 'Athletic Pro (₹3,499/mo)'} is ready to continue.
                </p>
                <div className="ic-demo-form-alert" style={{ textAlign: 'left', marginBottom: '20px' }}>
                  <div style={{ fontWeight: '700', color: '#38bdf8', marginBottom: '4px' }}>WebNest Portfolio Demonstration</div>
                  <div>This interactive demo shows how a real gym website could handle membership enquiries. No membership, payment, or booking is actually created.</div>
                </div>

                {/* Subtle WebNest Conversion CTA */}
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '600', marginBottom: '4px' }}>
                    Want a website like this?
                  </p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '12px' }}>
                    WebNest designs and launches professional websites for businesses.
                  </p>
                  <a
                    href={createWhatsAppLink(BUSINESS_CONFIG.messages.ironcore)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ic-btn ic-btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '14px', textDecoration: 'none' }}
                    aria-label={`Start a conversation with WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
                  >
                    <span>Start a Conversation →</span>
                  </a>
                </div>

                <button
                  type="button"
                  className="ic-btn ic-btn-secondary"
                  style={{ width: '100%', marginTop: '16px', fontSize: '13px' }}
                  onClick={() => {
                    setMembershipModalOpen(false);
                    setMembershipSubmitted(false);
                  }}
                >
                  Close & Continue Browsing
                </button>
              </div>
            ) : (
              <div>
                <div className="ic-kicker">
                  <Zap size={14} aria-hidden="true" />
                  <span>Membership Enquiry</span>
                </div>
                <h3 id="membership-modal-title" style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                  Join {selectedPlan}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '16px' }}>
                  Selected Plan: <strong style={{ color: '#38bdf8' }}>{selectedPlan}</strong>
                </p>

                {/* Explicit WebNest Demo Notice */}
                <div className="ic-demo-form-alert" style={{ textAlign: 'left', marginBottom: '16px' }}>
                  <div style={{ fontWeight: '700', color: '#38bdf8', marginBottom: '4px' }}>WebNest Concept Demo</div>
                  <div>This interactive form demonstrates how a real gym website could handle membership enquiries. No membership, payment, or booking is actually created.</div>
                </div>

                <form onSubmit={handleMembershipSubmit}>
                  <div className="ic-form-group">
                    <label htmlFor="membership-name" className="ic-form-label">Full Name</label>
                    <input
                      id="membership-name"
                      type="text"
                      required
                      className="ic-form-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="ic-form-group">
                    <label htmlFor="membership-phone" className="ic-form-label">WhatsApp Number</label>
                    <input
                      id="membership-phone"
                      type="tel"
                      required
                      className="ic-form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="ic-form-group">
                    <label htmlFor="membership-plan" className="ic-form-label">Preferred Membership</label>
                    <select
                      id="membership-plan"
                      className="ic-form-select"
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                    >
                      <option value="Floor Access (₹1,999/mo)">Floor Access (₹1,999/mo)</option>
                      <option value="Athletic Pro (₹3,499/mo)">Athletic Pro (₹3,499/mo)</option>
                      <option value="Performance Elite (₹5,999/mo)">Performance Elite (₹5,999/mo)</option>
                    </select>
                  </div>

                  <div className="ic-form-group">
                    <label htmlFor="membership-message" className="ic-form-label">Training Goals or Questions</label>
                    <textarea
                      id="membership-message"
                      rows={3}
                      className="ic-form-input"
                      placeholder="Tell us about your fitness background and goals (optional)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ic-btn ic-btn-primary"
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    <span>Send Membership Enquiry</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
