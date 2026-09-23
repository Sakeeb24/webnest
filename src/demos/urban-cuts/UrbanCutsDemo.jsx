import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Scissors,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Check,
  Menu,
  X,
  ArrowRight,
  Award,
  Phone,
  MessageCircle
} from 'lucide-react';
import DemoHeader from '../common/DemoHeader';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../../config/business';
import './UrbanCuts.css';

export default function UrbanCutsDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  
  // Interactive booking state
  const [selectedService, setSelectedService] = useState('Signature Precision Cut & Finish (₹1,200)');
  const [selectedStylist, setSelectedStylist] = useState('Elena Vance (Creative Director)');
  const [bookingDate, setBookingDate] = useState('2026-09-26');
  const [bookingTime, setBookingTime] = useState('11:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  useEffect(() => {
    document.title = 'Urban Cuts — WebNest Portfolio Concept';
  }, []);

  // Keyboard accessibility: Escape closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const services = [
    {
      title: 'Signature Precision Cut & Finish',
      price: '₹1,200',
      duration: '45 MIN',
      desc: 'Bespoke consultation, clarifying botanical wash, razor perimeter detailing, precision shears, blow-dry styling.'
    },
    {
      title: 'Traditional Hot Towel Razor Shave',
      price: '₹900',
      duration: '35 MIN',
      desc: 'Pre-shave sandalwood essential oils, steamed towels, badger hair lather, straight-edge blade glide, cold compress.'
    },
    {
      title: 'The Atelier Complete Grooming',
      price: '₹1,950',
      duration: '75 MIN',
      desc: 'Our flagship service: signature haircut, beard sculpting, herbal steam treatment, neck massage, matte styling.'
    },
    {
      title: 'Balayage & Dimensional Color Craft',
      price: '₹3,800',
      duration: '120 MIN',
      desc: 'Hand-painted surface lightening, custom ammonia-free gloss formulation, bond-building treatment.'
    },
    {
      title: 'Restorative Scalp & Follicle Therapy',
      price: '₹1,400',
      duration: '45 MIN',
      desc: 'Micro-exfoliating scalp detox, tea tree oil steam infusion, pressure-point cranial stimulation massage.'
    },
    {
      title: 'Beard Sculpting & Perimeter Line-Up',
      price: '₹650',
      duration: '30 MIN',
      desc: 'Freehand clipper graduation, straight-razor cheekbone and neckline definition, nourishing beard butter.'
    }
  ];

  const stylists = [
    {
      name: 'Elena Vance',
      role: 'Creative Director',
      spec: 'Architectural bobs • French layering • Creative cuts',
      bio: 'Former Sassoon London educator with 11 years of international salon direction. Known for geometric structural cuts that grow out seamlessly.'
    },
    {
      name: 'Marcus Cole',
      role: 'Master Barber',
      spec: 'Straight-edge shaves • Low skin tapers • Beard craft',
      bio: 'Trained in classic Italian barbershop traditions. Obsessed with razor glide geometry, hot towel ceremonies, and immaculate line-ups.'
    },
    {
      name: 'Sofia Lin',
      role: 'Senior Colorist',
      spec: 'Subtle balayage • Lived-in blonde • Color corrections',
      bio: 'Specializes in low-maintenance, dimensional color formulations that harmonize with natural skin undertones and texture.'
    },
    {
      name: 'Liam Hayes',
      role: 'Texture & Modern Scissor Specialist',
      spec: 'Mid-length shears • Curly & wavy flow • Mullets',
      bio: 'Focuses on dry-cutting techniques that unlock natural hair movement, wave definition, and effortless wash-and-wear silhouettes.'
    }
  ];

  return (
    <div className="urban-page">
      {/* Persistent WebNest Concept Banner */}
      <DemoHeader currentDemo="urban-cuts" />

      {/* Accessibility Skip Link */}
      <a href="#urban-main" className="skip-link">
        Skip to salon content
      </a>

      {/* Salon Header */}
      <header className="uc-header">
        <div className="uc-container uc-header-inner">
          <a href="#hero" className="uc-brand" aria-label="Urban Cuts Atelier Home">
            <div className="uc-brand-mark" aria-hidden="true">
              <Scissors size={20} />
            </div>
            <div className="uc-brand-text">
              <span className="uc-brand-title">URBAN CUTS</span>
              <span className="uc-brand-sub">Editorial Atelier</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="uc-nav" aria-label="Urban Cuts Primary Navigation">
            <a href="#services" className="uc-nav-link">Services</a>
            <a href="#stylists" className="uc-nav-link">Stylists</a>
            <a href="#rates" className="uc-nav-link">Rate Card</a>
            <a href="#booking" className="uc-nav-link">Appointments</a>
            <a href="#studio" className="uc-nav-link">Studio</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="#booking" className="uc-btn uc-btn-primary" style={{ padding: '10px 20px', minHeight: '44px' }}>
              <span>Book Appointment</span>
            </a>

            <button
              type="button"
              className="uc-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`uc-mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          <a href="#services" className="uc-mobile-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#stylists" className="uc-mobile-link" onClick={() => setMobileMenuOpen(false)}>Stylists</a>
          <a href="#rates" className="uc-mobile-link" onClick={() => setMobileMenuOpen(false)}>Rate Card</a>
          <a href="#booking" className="uc-mobile-link" onClick={() => setMobileMenuOpen(false)}>Appointments</a>
          <a href="#studio" className="uc-mobile-link" onClick={() => setMobileMenuOpen(false)}>Studio</a>
        </div>
      </header>

      {/* Main Content */}
      <main id="urban-main" tabIndex={-1} style={{ outline: 'none' }}>
        {/* Hero Section */}
        <section id="hero" className="uc-hero" aria-labelledby="urban-hero-title">
          <div className="uc-container uc-hero-grid">
            <div className="uc-hero-content">
              <div className="uc-kicker">
                <Sparkles size={14} aria-hidden="true" />
                <span>Lavelle Road, Bengaluru • Boutique Hair & Grooming</span>
              </div>
              <h1 id="urban-hero-title" className="uc-heading-xl">
                Your Style. Your Statement.
              </h1>
              <p className="uc-lead">
                An architectural grooming atelier where precision tailoring, straight-edge artistry, and contemporary aesthetics converge. Designed for those who treat personal grooming as an uncompromising standard of craft.
              </p>
              <div className="uc-hero-ctas">
                <a href="#booking" className="uc-btn uc-btn-primary">
                  <span>Book Appointment</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#services" className="uc-btn uc-btn-outline">
                  <span>Explore Services</span>
                </a>
              </div>
            </div>

            <div className="uc-hero-visual">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UrnVlHYKOByBkZF1kMEMGavtJGWF0diqd_KKyosr_yW05YR6CSazJ6CQN4S_WXVEUDAFDg6pTBAKFOAu8NvNvfyGP-i73cj3RRe6pyP7MsumugqAXofKv2ykDn-3j4B3D1iOXIVXkBFa99cp-FtIukRoLbUIRCFKNa1BTQOTtqU0_0zlsGypz86cj8yX4GbHT3lpYBAGPvrduLzoaL0T2ZaccQn5Y_0M230KU-J-TxWwTrGPF_h7mfCXlS"
                alt="Urban Cuts travertine stone interior with brass mirrors and leather chairs"
                className="uc-hero-img"
                onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}portfolio/urban-cuts.jpg`; }}
              />
              <div className="uc-hero-badge">
                <div className="uc-hero-badge-title">The Atelier Sanctuary</div>
                <div className="uc-hero-badge-sub">Single-chair private stations • Complimentary espresso</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="uc-section uc-section-alt" aria-labelledby="services-heading">
          <div className="uc-container">
            <div className="uc-section-header">
              <div className="uc-kicker">
                <Scissors size={14} aria-hidden="true" />
                <span>Craft & Precision</span>
              </div>
              <h2 id="services-heading" className="uc-heading-lg">Atelier Services</h2>
              <div className="uc-divider" />
              <p className="uc-lead" style={{ margin: '0 auto' }}>
                Every appointment begins with an in-depth dialogue about bone structure, hair density, growth patterns, and daily styling routines.
              </p>
            </div>

            <div className="uc-services-grid">
              {services.map((svc, idx) => (
                <article key={idx} className="uc-service-card">
                  <div className="uc-service-card-top">
                    <h3 className="uc-service-title">{svc.title}</h3>
                    <span className="uc-service-price">{svc.price}</span>
                  </div>
                  <p className="uc-service-desc">{svc.desc}</p>
                  <div className="uc-service-meta">
                    <span>{svc.duration}</span>
                    <button
                      type="button"
                      className="uc-btn uc-btn-outline"
                      style={{ padding: '6px 14px', minHeight: '36px', fontSize: '11px' }}
                      onClick={() => {
                        setSelectedService(`${svc.title} (${svc.price})`);
                        const el = document.getElementById('booking');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Select
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stylists Section */}
        <section id="stylists" className="uc-section" aria-labelledby="stylists-heading">
          <div className="uc-container">
            <div className="uc-section-header">
              <div className="uc-kicker">
                <Award size={14} aria-hidden="true" />
                <span>The Faculty</span>
              </div>
              <h2 id="stylists-heading" className="uc-heading-lg">Resident Craftsmen</h2>
              <div className="uc-divider" />
              <p className="uc-lead" style={{ margin: '0 auto' }}>
                Our team brings multidisciplinary training from London, Milan, and Tokyo, united by an architectural dedication to straight-edge precision.
              </p>
            </div>

            <div className="uc-stylists-grid">
              {stylists.map((st, idx) => (
                <article key={idx} className="uc-stylist-card">
                  <span className="uc-stylist-role">{st.role}</span>
                  <h3 className="uc-stylist-name">{st.name}</h3>
                  <div className="uc-stylist-spec">{st.spec}</div>
                  <p className="uc-stylist-bio">{st.bio}</p>
                  <button
                    type="button"
                    className="uc-btn uc-btn-outline"
                    style={{ marginTop: 'auto', padding: '8px 12px', minHeight: '38px', fontSize: '11px' }}
                    onClick={() => {
                      setSelectedStylist(`${st.name} (${st.role})`);
                      const el = document.getElementById('booking');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book with {st.name.split(' ')[0]}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Card Section */}
        <section id="rates" className="uc-section uc-section-alt" aria-labelledby="rates-heading">
          <div className="uc-container">
            <div className="uc-section-header">
              <div className="uc-kicker">
                <Sparkles size={14} aria-hidden="true" />
                <span>Transparent Pricing</span>
              </div>
              <h2 id="rates-heading" className="uc-heading-lg">The Rate Card</h2>
              <div className="uc-divider" />
            </div>

            <div className="uc-rate-table-wrap">
              {services.map((svc, idx) => (
                <div key={idx} className="uc-rate-row">
                  <div>
                    <span className="uc-rate-name">{svc.title}</span>
                  </div>
                  <span className="uc-rate-dots" aria-hidden="true" />
                  <span className="uc-rate-duration">{svc.duration}</span>
                  <span className="uc-rate-price">{svc.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Booking Section */}
        <section id="booking" className="uc-section" aria-labelledby="booking-heading">
          <div className="uc-container">
            <div className="uc-section-header">
              <div className="uc-kicker">
                <Calendar size={14} aria-hidden="true" />
                <span>Reserve Your Chair</span>
              </div>
              <h2 id="booking-heading" className="uc-heading-lg">Schedule Your Session</h2>
              <div className="uc-divider" />
            </div>

            <div className="uc-booking-card">
              {/* Explicit WebNest Demo Notice */}
              <div className="uc-demo-alert" style={{ textAlign: 'left', marginBottom: '20px' }}>
                <div style={{ fontWeight: '700', color: '#1a1816', marginBottom: '4px' }}>WebNest Concept Demo</div>
                <div>This interactive form demonstrates how a salon or grooming atelier website handles stylist scheduling and service selections. No booking or payment will be processed.</div>
              </div>

              {bookingSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                  <div style={{ width: '56px', height: '56px', border: '1px solid #1a1816', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#1a1816' }}>
                    <Check size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#1a1816', marginBottom: '8px' }}>
                    Appointment Enquiry Submitted
                  </h3>
                  <p style={{ color: '#4b4640', fontSize: '14px', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto 16px' }}>
                    Thank you for testing the stylist scheduling workflow for <strong>{selectedService}</strong> with <strong>{selectedStylist}</strong> on <strong>{bookingDate} at {bookingTime}</strong>. This interactive module demonstrates how WebNest builds smooth appointment flows for salons and personal care studios.
                  </p>
                  <div className="uc-demo-alert" style={{ textAlign: 'left', maxWidth: '480px', margin: '0 auto 20px' }}>
                    <div style={{ fontWeight: '700', color: '#1a1816', marginBottom: '4px' }}>WebNest Portfolio Demonstration</div>
                    <div>No charges made. No actual appointment scheduled. No salon booking was logged.</div>
                  </div>

                  {/* Subtle WebNest Conversion CTA */}
                  <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(26, 24, 22, 0.15)', maxWidth: '480px', margin: '0 auto' }}>
                    <p style={{ fontSize: '14px', color: '#1a1816', fontWeight: '600', marginBottom: '4px' }}>
                      Want a website like this?
                    </p>
                    <p style={{ fontSize: '12px', color: '#66615b', marginBottom: '14px' }}>
                      WebNest designs and develops bespoke booking websites for grooming studios and service businesses.
                    </p>
                    <a
                      href={createWhatsAppLink(BUSINESS_CONFIG.messages.urbanCuts)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uc-btn uc-btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '14px', textDecoration: 'none' }}
                      aria-label={`Start a conversation with WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
                    >
                      <span>Start a Conversation →</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    className="uc-btn uc-btn-outline"
                    style={{ marginTop: '20px' }}
                    onClick={() => setBookingSubmitted(false)}
                  >
                    Schedule Another Demo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit}>
                  <div className="uc-booking-form-grid">
                    <div className="uc-form-group">
                      <label htmlFor="uc-service" className="uc-label">Selected Craft Service</label>
                      <select
                        id="uc-service"
                        className="uc-select"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        {services.map((s, idx) => (
                          <option key={idx} value={`${s.title} (${s.price})`}>
                            {s.title} — {s.price} ({s.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="uc-form-group">
                      <label htmlFor="uc-stylist" className="uc-label">Preferred Stylist</label>
                      <select
                        id="uc-stylist"
                        className="uc-select"
                        value={selectedStylist}
                        onChange={(e) => setSelectedStylist(e.target.value)}
                      >
                        {stylists.map((st, idx) => (
                          <option key={idx} value={`${st.name} (${st.role})`}>
                            {st.name} — {st.role}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="uc-form-group">
                      <label htmlFor="uc-date" className="uc-label">Appointment Date</label>
                      <input
                        id="uc-date"
                        type="date"
                        required
                        className="uc-input"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                      />
                    </div>

                    <div className="uc-form-group">
                      <label htmlFor="uc-time" className="uc-label">Available Time Slot</label>
                      <select
                        id="uc-time"
                        className="uc-select"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                      >
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:15 PM</option>
                        <option>2:00 PM</option>
                        <option>3:30 PM</option>
                        <option>4:45 PM</option>
                        <option>6:00 PM</option>
                        <option>7:15 PM</option>
                      </select>
                    </div>

                    <div className="uc-form-group">
                      <label htmlFor="uc-name" className="uc-label">Your Full Name</label>
                      <input
                        id="uc-name"
                        type="text"
                        required
                        className="uc-input"
                        placeholder="Your name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                      />
                    </div>

                    <div className="uc-form-group">
                      <label htmlFor="uc-phone" className="uc-label">Phone (Appointment SMS)</label>
                      <input
                        id="uc-phone"
                        type="tel"
                        required
                        className="uc-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <button type="submit" className="uc-btn uc-btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                    <span>Submit Appointment Enquiry</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Studio Location & Hours */}
        <section id="studio" className="uc-section uc-section-alt" aria-labelledby="studio-heading">
          <div className="uc-container">
            <div className="uc-section-header">
              <div className="uc-kicker">
                <MapPin size={14} aria-hidden="true" />
                <span>Visit The Atelier</span>
              </div>
              <h2 id="studio-heading" className="uc-heading-lg">Location & Studio Policy</h2>
              <div className="uc-divider" />
            </div>

            <div className="uc-location-grid">
              <div className="uc-location-box">
                <div className="uc-loc-row">
                  <MapPin size={24} className="uc-loc-icon" />
                  <div className="uc-loc-content">
                    <h4>Address</h4>
                    <p>
                      18 Lavelle Road, Shanthala Nagar, Ashok Nagar<br />
                      Bengaluru, Karnataka 560001
                    </p>
                  </div>
                </div>

                <div className="uc-loc-row">
                  <Phone size={24} className="uc-loc-icon" />
                  <div className="uc-loc-content">
                    <h4>Concierge Inquiries</h4>
                    <p>
                      +91 98450 67890 (Demo Number)<br />
                      concierge@urbancuts.demo
                    </p>
                  </div>
                </div>
              </div>

              <div className="uc-location-box">
                <div className="uc-loc-row">
                  <Clock size={24} className="uc-loc-icon" />
                  <div className="uc-loc-content">
                    <h4>Studio Hours</h4>
                    <p>
                      <strong>Tuesday – Sunday:</strong> 9:00 AM – 8:30 PM<br />
                      <strong>Monday:</strong> Reserved for Masterclasses & Private Styling
                    </p>
                  </div>
                </div>

                <div className="uc-loc-row">
                  <Award size={24} className="uc-loc-icon" />
                  <div className="uc-loc-content">
                    <h4>Punctuality & Walk-ins</h4>
                    <p>
                      Appointments are prioritized to ensure zero waiting. Walk-in availability depends on chair vacancy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WebNest Studio Conversion Strip (Section 43 & 67) */}
        <section className="demo-conversion-strip" aria-label="WebNest Studio Service Callout">
          <div className="demo-conversion-inner">
            <div className="demo-conversion-text">
              <div className="demo-conversion-kicker">
                <Sparkles size={14} aria-hidden="true" />
                <span>Concept Website Engineered by WebNest</span>
              </div>
              <h3 className="demo-conversion-title">
                Want a modern booking website like Urban Cuts for your salon or studio?
              </h3>
              <p className="demo-conversion-desc">
                WebNest creates architectural editorial websites with clear service menus, live booking modules, and zero monthly agency retainers.
              </p>
            </div>
            <div className="demo-conversion-action">
              <a
                href={createWhatsAppLink(BUSINESS_CONFIG.messages.urbanCuts)}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-whatsapp-btn"
                aria-label={`Chat on WhatsApp with WebNest about a salon website at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
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
      <footer className="uc-footer">
        <div className="uc-container">
          <div className="uc-footer-grid">
            <div className="uc-footer-col">
              <div className="uc-brand" style={{ color: '#faf8f5', marginBottom: '16px' }}>
                <div className="uc-brand-mark" style={{ borderColor: '#faf8f5', color: '#faf8f5' }} aria-hidden="true">
                  <Scissors size={18} />
                </div>
                <div className="uc-brand-text">
                  <span className="uc-brand-title" style={{ color: '#faf8f5' }}>URBAN CUTS</span>
                  <span className="uc-brand-sub">Editorial Atelier</span>
                </div>
              </div>
              <p style={{ color: '#cbc5c2', fontSize: '13px', lineHeight: '1.7', maxWidth: '300px' }}>
                A modern sanctuary dedicated to structural haircutting, straight-edge barbering, and dimensional color craft.
              </p>
            </div>

            <div className="uc-footer-col">
              <h4>Craft</h4>
              <ul>
                <li><a href="#services">Haircut & Styling</a></li>
                <li><a href="#services">Hot Towel Shave</a></li>
                <li><a href="#services">Balayage & Color</a></li>
                <li><a href="#services">Scalp Therapy</a></li>
              </ul>
            </div>

            <div className="uc-footer-col">
              <h4>Atelier</h4>
              <ul>
                <li><a href="#stylists">Resident Stylists</a></li>
                <li><a href="#rates">Rate Card</a></li>
                <li><a href="#booking">Appointments</a></li>
                <li><a href="#studio">Studio Hours</a></li>
              </ul>
            </div>

            <div className="uc-footer-col">
              <h4>Studio Concept</h4>
              <p style={{ color: '#cbc5c2', fontSize: '13px', lineHeight: '1.6' }}>
                This is a live interactive concept website engineered by WebNest to showcase modern salon branding, service menus, live appointment widgets, and high performance.
              </p>
            </div>
          </div>

          <div className="uc-footer-bottom">
            <span>© {new Date().getFullYear()} Urban Cuts (Portfolio Concept). All rights reserved.</span>
            <Link to="/" className="uc-footer-back-link">
              ← Return to WebNest Studio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
