import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  UtensilsCrossed,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Check,
  Menu,
  X,
  ArrowRight,
  Car,
  MessageCircle
} from 'lucide-react';
import DemoHeader from '../common/DemoHeader';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../../config/business';
import './SpiceAvenue.css';

export default function SpiceAvenueDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('mains');
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  const [resData, setResData] = useState({
    name: '',
    phone: '',
    date: '2026-09-25',
    time: '8:00 PM',
    guests: '2 Guests',
    seating: 'Main Dining Salon',
    notes: ''
  });

  useEffect(() => {
    document.title = 'Spice Avenue — WebNest Portfolio Concept';
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

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setReservationSubmitted(true);
  };

  const menuCategories = {
    starters: [
      {
        name: 'Truffle & Morel Kulcha',
        price: '₹750',
        desc: 'Charred leavened bread stuffed with wild Himalayan morels, fresh black truffle butter, and micro-chervil.',
        tags: ['Vegetarian', 'Signature']
      },
      {
        name: 'Smoked Duck Samosette',
        price: '₹950',
        desc: 'Slow-smoked duck confit wrapped in delicate pastry crisps, plum-tamarind gastrique, pickled mustard seeds.',
        tags: ['Chef Selection']
      },
      {
        name: 'Kashmiri Saffron Soup',
        price: '₹680',
        desc: 'Silken broth of sweet corn, wild Kashmiri saffron stamens, toasted pine nuts, and herb emulsion.',
        tags: ['Gluten Free', 'Vegetarian']
      },
      {
        name: 'Cured Scallop Carpaccio',
        price: '₹1,150',
        desc: 'Hokkaido diver scallops, raw mango vinaigrette, toasted cumin oil, sea asparagus, pink peppercorns.',
        tags: ['Gluten Free', 'Seafood']
      }
    ],
    mains: [
      {
        name: 'Saffron Lobster Tagliatelle',
        price: '₹2,450',
        desc: 'Butter-poached lobster medallions over hand-cut squid ink pasta, rich wild Kashmiri saffron velouté, 24k gold leaf.',
        tags: ['Chef Signature', 'Seafood']
      },
      {
        name: 'Herb-Crusted Rack of Lamb',
        price: '₹2,650',
        desc: 'New Zealand lamb cooked medium-rare, smoked parsnip puree, glazed baby heirloom carrots, glossy dark red wine reduction.',
        tags: ['Gluten Free', 'Signature']
      },
      {
        name: '48-Hour Braised Short Rib',
        price: '₹2,250',
        desc: 'Prime Angus short rib slow-braised in black cardamom broth, marrow jus, shallot crisps, potato mousseline.',
        tags: ['Gluten Free']
      },
      {
        name: 'Paneer Mille-Feuille',
        price: '₹1,450',
        desc: 'Handmade organic cottage cheese layered with spiced sun-dried tomato chutney, charred asparagus, smoked tomato emulsion.',
        tags: ['Vegetarian', 'Gluten Free']
      }
    ],
    desserts: [
      {
        name: 'Cardamom Chocolate Dome',
        price: '₹850',
        desc: 'Valrhona 70% dark chocolate mirror glaze, spun sugar nest, warm spiced cardamom caramel drizzle, crushed pistachios.',
        tags: ['Chef Signature']
      },
      {
        name: 'Saffron & Pistachio Kulfi Terrine',
        price: '₹750',
        desc: 'Slow-reduced milk terrine infused with saffron, rose petal reduction, dehydrated rabri crisp, silver leaf.',
        tags: ['Gluten Free', 'Vegetarian']
      },
      {
        name: 'Compressed Guava & Pink Pepper Sorbet',
        price: '₹650',
        desc: 'Chilled palate cleanser of Allahabad pink guava, infused with black salt and crushed Madagascar pink peppercorns.',
        tags: ['Vegan', 'Gluten Free']
      }
    ],
    cellar: [
      {
        name: 'Smoked Clove Old Fashioned',
        price: '₹1,200',
        desc: 'Bourbon infused with toasted Zanzibar cloves, raw demerara syrup, angostura bitters, applewood smoke.',
        tags: ['House Cocktail']
      },
      {
        name: 'Tamarind Mezcalita',
        price: '₹1,150',
        desc: 'Artisanal mezcal, roasted tamarind cordial, lime juice, black volcanic chili rim, dehydrated citrus.',
        tags: ['House Cocktail']
      },
      {
        name: 'Sommelier Wine Flight',
        price: '₹2,800',
        desc: 'Curated 4-glass tasting journey paired with your courses, featuring Old World estates and biodynamic vintages.',
        tags: ['Cellar Reserve']
      }
    ]
  };

  return (
    <div className="spice-page">
      {/* Persistent WebNest Concept Banner */}
      <DemoHeader currentDemo="spice-avenue" />

      {/* Accessibility Skip Link */}
      <a href="#spice-main" className="skip-link">
        Skip to restaurant content
      </a>

      {/* Restaurant Header */}
      <header className="sa-header">
        <div className="sa-container sa-header-inner">
          <a href="#hero" className="sa-brand" aria-label="Spice Avenue Restaurant Home">
            <div className="sa-brand-mark" aria-hidden="true">S</div>
            <div className="sa-brand-text">
              <span className="sa-brand-title">SPICE AVENUE</span>
              <span className="sa-brand-sub">Contemporary Dining</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="sa-nav" aria-label="Spice Avenue Primary Navigation">
            <a href="#story" className="sa-nav-link">Our Story</a>
            <a href="#signatures" className="sa-nav-link">Signatures</a>
            <a href="#menu" className="sa-nav-link">Menu</a>
            <a href="#chef" className="sa-nav-link">The Chef</a>
            <a href="#reservations" className="sa-nav-link">Reservations</a>
            <a href="#location" className="sa-nav-link">Location</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="#reservations" className="sa-btn sa-btn-primary" style={{ padding: '10px 20px', minHeight: '44px' }}>
              <span>Reserve a Table</span>
            </a>

            <button
              type="button"
              className="sa-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle restaurant menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`sa-mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          <a href="#story" className="sa-mobile-link" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
          <a href="#signatures" className="sa-mobile-link" onClick={() => setMobileMenuOpen(false)}>Signatures</a>
          <a href="#menu" className="sa-mobile-link" onClick={() => setMobileMenuOpen(false)}>Menu</a>
          <a href="#chef" className="sa-mobile-link" onClick={() => setMobileMenuOpen(false)}>The Chef</a>
          <a href="#reservations" className="sa-mobile-link" onClick={() => setMobileMenuOpen(false)}>Reservations</a>
          <a href="#location" className="sa-mobile-link" onClick={() => setMobileMenuOpen(false)}>Location</a>
        </div>
      </header>

      {/* Main Content */}
      <main id="spice-main" tabIndex={-1} style={{ outline: 'none' }}>
        {/* Hero Section */}
        <section id="hero" className="sa-hero" aria-labelledby="hero-title">
          <div className="sa-container sa-hero-grid">
            <div className="sa-hero-content">
              <div className="sa-kicker">
                <Sparkles size={14} aria-hidden="true" />
                <span>Indiranagar, Bengaluru • Contemporary Gastronomy</span>
              </div>
              <h1 id="hero-title" className="sa-heading-xl">
                Taste Something Extraordinary.
              </h1>
              <p className="sa-lead">
                An intimate culinary sanctuary blending ancient aromatic heritage with contemporary Michelin-level technique. Every course is a choreographed exploration of flavor, texture, and fragrance.
              </p>
              <div className="sa-hero-ctas">
                <a href="#reservations" className="sa-btn sa-btn-primary">
                  <span>Reserve Table</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#menu" className="sa-btn sa-btn-outline">
                  <span>Explore Tasting Menu</span>
                </a>
              </div>
            </div>

            <div className="sa-hero-visual">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VZ4GvamcbQ00UI8qGbzItOxduD2Hw4FdtpxaTj4ROt14hP1poK6v7Nn7O__aZvtpNm0vWu_EbbrNeondje4Q3oFLYlNj9Oj8694ZBQheG0Ty4cTzv6fWrf5Eks-K4t5K5SNvkTZl1K_JBvKuwQlkJ_2Q9V036de6H101wksSqbd5DmiomVMKiymHD-6UTsdmWFlrsETeKGwUG-ZQ1UuNwD7LL7IZTqPMSv9jyMlRE74WFwX_3-1Ua-a6Ec"
                alt="Intimate candlelit dining salon at Spice Avenue restaurant"
                className="sa-hero-img"
                onError={(e) => { e.currentTarget.src = '/portfolio/spice-avenue.jpg'; }}
              />
              <div className="sa-hero-card-meta">
                <div className="sa-hero-card-title">Evening Service at The Main Salon</div>
                <div className="sa-hero-card-sub">Dinner 6:30 PM — 11:30 PM • Valet Parking</div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Story */}
        <section id="story" className="sa-section sa-section-alt">
          <div className="sa-container">
            <div className="sa-section-header">
              <div className="sa-kicker">
                <UtensilsCrossed size={14} aria-hidden="true" />
                <span>The Culinary Journey</span>
              </div>
              <h2 className="sa-heading-lg">Ancient Aromatics Reimagined</h2>
              <div className="sa-divider" />
              <p className="sa-lead" style={{ margin: '0 auto' }}>
                Spice Avenue was conceived around a singular obsession: the transformative alchemy of toasted spices. We source hand-harvested wild saffron from Pampore, green cardamom from the Western Ghats, and Tellicherry black peppercorns, balancing them with disciplined French pastry and savory gastronomy.
              </p>
            </div>
          </div>
        </section>

        {/* Chef Signatures Section */}
        <section id="signatures" className="sa-section" aria-labelledby="signatures-heading">
          <div className="sa-container">
            <div className="sa-section-header">
              <div className="sa-kicker">
                <Sparkles size={14} aria-hidden="true" />
                <span>Culinary Masterpieces</span>
              </div>
              <h2 id="signatures-heading" className="sa-heading-lg">Chef Signatures</h2>
              <div className="sa-divider" />
              <p className="sa-lead" style={{ margin: '0 auto' }}>
                Each signature course reflects over 120 hours of culinary testing, honoring seasonality, sustainable provenance, and sensory balance.
              </p>
            </div>

            <div className="sa-signatures-grid">
              {/* Dish 1 */}
              <article className="sa-dish-card">
                <div className="sa-dish-photo-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WieK__gnlSU7oybIPkh7KYL-4iwG4SDCeOHXKxhVcJslWM74XTc0E81SJdOQHtlIQ_zaATClUoauFasJeITPwkMvZ64zkKJmXy30S2YI4KD9IC9q9mIlk2asEXWlA1jj8FiNarVN6_nRNZ8o0n3Mj_cJKVjYK3iQ0boGrWFBYcVO2NF-zG8Fm2u06TBReVV-1rRRGc7uU5ILCXEyCpYTSAjHIrAizvV1wn-UHJJ23ptsbA43-YkegyBFTL"
                    alt="Saffron Lobster Tagliatelle on dark artisan ceramic plate"
                    className="sa-dish-img"
                    onError={(e) => { e.currentTarget.src = '/portfolio/spice-avenue.jpg'; }}
                  />
                  <span className="sa-dish-badge">Signature Course</span>
                </div>
                <div className="sa-dish-content">
                  <div className="sa-dish-header">
                    <h3 className="sa-dish-title">Saffron Lobster Tagliatelle</h3>
                    <span className="sa-dish-price">₹2,450</span>
                  </div>
                  <p className="sa-dish-notes">
                    Butter-poached lobster medallions over hand-cut squid ink tagliatelle, wild Kashmiri saffron velouté, finished with 24k edible gold leaf.
                  </p>
                  <div className="sa-dish-meta">
                    <span>Course IV</span>
                    <span>•</span>
                    <span>Pairing: Chablis Premier Cru</span>
                  </div>
                </div>
              </article>

              {/* Dish 2 */}
              <article className="sa-dish-card">
                <div className="sa-dish-photo-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VEPrPHuHw41NAZf2K5zXcLMY3vtsFe4DrS6j77f7qnX4mfkst8xii-PV7X-tR5y68Dnhg-HRcz99lL1gRpEUWtpiR_IXe4gPKNqjZPs2xoDlxUMXDMp2n6QeGdLgfSk2wzuXTZg_GRsgugZg6G8EwhdE1axTbkCJelDGXeY6pw_YpkARAP6xIVyd9Usspvgxx2i6ZT_mnDYnVKedjkbEpcLKok53Y7yfjmKsK9Zx_ceV4fYKNElW5aQW4"
                    alt="Herb-crusted rack of lamb with dark red wine reduction"
                    className="sa-dish-img"
                    onError={(e) => { e.currentTarget.src = '/portfolio/spice-avenue.jpg'; }}
                  />
                  <span className="sa-dish-badge">Seasonal Feature</span>
                </div>
                <div className="sa-dish-content">
                  <div className="sa-dish-header">
                    <h3 className="sa-dish-title">Herb-Crusted Rack of Lamb</h3>
                    <span className="sa-dish-price">₹2,650</span>
                  </div>
                  <p className="sa-dish-notes">
                    New Zealand pasture-raised lamb in rosemary-thyme crumb crust, smoked parsnip puree, glazed baby heirloom carrots, glossy dark red wine reduction.
                  </p>
                  <div className="sa-dish-meta">
                    <span>Course V</span>
                    <span>•</span>
                    <span>Pairing: Barolo DOCG 2018</span>
                  </div>
                </div>
              </article>

              {/* Dish 3 */}
              <article className="sa-dish-card">
                <div className="sa-dish-photo-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1X2OmsIzv7BQq5e38Wd-b5xv54F03JrKunsJ9XtjKLkE2UWs-7m7yqLJWNpjYNVh0R7Viu9H0iqPrtRsvUNOtATjXEGed9cFVPrq1x3msvrsbK3K4S4-KqVuUGYzDnbGLVEND1E5dh59C2foL-iJA7oDHl6ipYuT9qU6DikaK3gsy6dEELAARuLk0rpusXhWO2b6Gl3WFFQIk9eDEtk5FXnMtFsu4cyTtUak_jAYOQM_XoCSn1IpsxxQMhk"
                    alt="Cardamom Chocolate Dome with spun sugar and gold dust"
                    className="sa-dish-img"
                    onError={(e) => { e.currentTarget.src = '/portfolio/spice-avenue.jpg'; }}
                  />
                  <span className="sa-dish-badge">Dessert Showcase</span>
                </div>
                <div className="sa-dish-content">
                  <div className="sa-dish-header">
                    <h3 className="sa-dish-title">Cardamom Chocolate Dome</h3>
                    <span className="sa-dish-price">₹850</span>
                  </div>
                  <p className="sa-dish-notes">
                    Valrhona 70% dark chocolate mirror glaze, spun sugar nest, warm spiced cardamom caramel drizzle, crushed pistachios and gold leaf.
                  </p>
                  <div className="sa-dish-meta">
                    <span>Course VII</span>
                    <span>•</span>
                    <span>Pairing: Vintage Tawny Port 20 Yrs</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Full Menu Section */}
        <section id="menu" className="sa-section sa-section-alt" aria-labelledby="menu-heading">
          <div className="sa-container">
            <div className="sa-section-header">
              <div className="sa-kicker">
                <UtensilsCrossed size={14} aria-hidden="true" />
                <span>The A La Carte Collection</span>
              </div>
              <h2 id="menu-heading" className="sa-heading-lg">Seasonal Dining Menu</h2>
              <div className="sa-divider" />
            </div>

            {/* Menu Tabs */}
            <div className="sa-menu-tabs" role="tablist">
              <button
                type="button"
                className={`sa-menu-tab ${activeMenuTab === 'starters' ? 'is-active' : ''}`}
                onClick={() => setActiveMenuTab('starters')}
                role="tab"
                aria-selected={activeMenuTab === 'starters'}
              >
                Small Plates & Starters
              </button>
              <button
                type="button"
                className={`sa-menu-tab ${activeMenuTab === 'mains' ? 'is-active' : ''}`}
                onClick={() => setActiveMenuTab('mains')}
                role="tab"
                aria-selected={activeMenuTab === 'mains'}
              >
                Mains & Specialties
              </button>
              <button
                type="button"
                className={`sa-menu-tab ${activeMenuTab === 'desserts' ? 'is-active' : ''}`}
                onClick={() => setActiveMenuTab('desserts')}
                role="tab"
                aria-selected={activeMenuTab === 'desserts'}
              >
                Artisan Desserts
              </button>
              <button
                type="button"
                className={`sa-menu-tab ${activeMenuTab === 'cellar' ? 'is-active' : ''}`}
                onClick={() => setActiveMenuTab('cellar')}
                role="tab"
                aria-selected={activeMenuTab === 'cellar'}
              >
                Cellar & Cocktails
              </button>
            </div>

            {/* Menu List */}
            <div className="sa-menu-grid">
              {menuCategories[activeMenuTab].map((item, idx) => (
                <article key={idx} className="sa-menu-item">
                  <div className="sa-menu-item-top">
                    <span className="sa-menu-item-name">{item.name}</span>
                    <span className="sa-menu-item-dots" aria-hidden="true" />
                    <span className="sa-menu-item-price">{item.price}</span>
                  </div>
                  <p className="sa-menu-item-desc">{item.desc}</p>
                  <div className="sa-menu-item-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="sa-chip">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Chef Section */}
        <section id="chef" className="sa-section">
          <div className="sa-container">
            <div className="sa-chef-grid">
              <div className="sa-chef-photo-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Xi62iiUASLUJvAnKsVZtSdKg47Jlo14OzZKmArZucQ4rwQ9Yhzg-Kh2ZjJVRDO0gFxbP1QcSsbwbYklBqXfTOCznjF_2k_RNZ-gAVVtAJY3Z6noKWHY4DxAI5l_znuD2PbZMtbvEcDmOs6tSoaP23fURK0At7ZemuRiL1nH3pOmshtuhhqy--lGLF-O1d_0e713-Q0Ox2ScUFczpXTE0cKtV3tS_SOQ_5yObJAgJUXJ_We0mQMB4McRYUZ"
                  alt="Executive Chef Antoine Dubois garnishing a dish in open kitchen"
                  className="sa-chef-img"
                  onError={(e) => { e.currentTarget.src = '/portfolio/spice-avenue.jpg'; }}
                />
              </div>

              <div>
                <div className="sa-kicker">
                  <Sparkles size={14} aria-hidden="true" />
                  <span>The Culinary Visionary</span>
                </div>
                <h2 className="sa-heading-lg">Executive Chef Antoine Dubois</h2>
                <div className="sa-divider left" />
                
                <blockquote className="sa-chef-quote">
                  "Spices are not merely heat; they are melody, harmony, and ancient history. In every dish, our role is to elevate individual aromatics without drowning the purity of the core ingredient."
                </blockquote>

                <p className="sa-lead" style={{ fontSize: '15px', color: '#c2b8ae', marginBottom: '24px' }}>
                  Trained in Lyon and Paris before spending five years traversing the spice markets of Kochi, Kashmir, and Old Delhi, Chef Antoine marries classic French brigade rigor with Indian botanical mastery.
                </p>

                <div style={{ display: 'flex', gap: '32px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '24px', color: '#d4af37', fontFamily: 'Playfair Display, serif' }}>18+</div>
                    <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8c7e72' }}>Years Culinary Mastery</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', color: '#d4af37', fontFamily: 'Playfair Display, serif' }}>100%</div>
                    <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8c7e72' }}>Traceable Origin Spices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table Reservation Module */}
        <section id="reservations" className="sa-section sa-section-alt" aria-labelledby="reservation-heading">
          <div className="sa-container">
            <div className="sa-section-header">
              <div className="sa-kicker">
                <Calendar size={14} aria-hidden="true" />
                <span>Private Dining & Tables</span>
              </div>
              <h2 id="reservation-heading" className="sa-heading-lg">Reserve Your Experience</h2>
              <div className="sa-divider" />
              <p className="sa-lead" style={{ margin: '0 auto' }}>
                We release reservations 30 days in advance. For parties exceeding 6 guests or private salon dining, please note your preference below.
              </p>
            </div>

            <div className="sa-reservation-card">
              {/* Explicit WebNest Demo Notice */}
              <div className="sa-demo-alert" style={{ textAlign: 'left', marginBottom: '20px' }}>
                <div style={{ fontWeight: '700', color: '#d4af37', marginBottom: '4px' }}>WebNest Concept Demo</div>
                <div>This interactive form demonstrates how a restaurant website can handle table reservations and guest preferences. No booking or payment will be processed.</div>
              </div>

              {reservationSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#d4af37' }}>
                    <Check size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#f7f4ee', marginBottom: '8px' }}>
                    Reservation Enquiry Submitted
                  </h3>
                  <p style={{ color: '#c2b8ae', fontSize: '14px', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto 16px' }}>
                    Thank you for testing the table reservation flow for <strong>{resData.guests}</strong> on <strong>{resData.date} at {resData.time}</strong>. This is a WebNest portfolio demonstration showcasing tailored digital booking experiences for dining establishments.
                  </p>
                  <div className="sa-demo-alert" style={{ textAlign: 'left', maxWidth: '480px', margin: '0 auto 20px' }}>
                    <div style={{ fontWeight: '700', color: '#d4af37', marginBottom: '4px' }}>WebNest Portfolio Demonstration</div>
                    <div>No charges made. No actual restaurant table has been reserved.</div>
                  </div>

                  {/* Subtle WebNest Conversion CTA */}
                  <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(212, 175, 55, 0.2)', maxWidth: '480px', margin: '0 auto' }}>
                    <p style={{ fontSize: '14px', color: '#f7f4ee', fontWeight: '600', marginBottom: '4px' }}>
                      Want a website like this?
                    </p>
                    <p style={{ fontSize: '12px', color: '#c2b8ae', marginBottom: '14px' }}>
                      WebNest designs and builds high-speed, sensory websites for dining establishments.
                    </p>
                    <a
                      href={createWhatsAppLink(BUSINESS_CONFIG.messages.spiceAvenue)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sa-btn sa-btn-gold"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '14px', textDecoration: 'none' }}
                      aria-label={`Start a conversation with WebNest on WhatsApp at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
                    >
                      <span>Start a Conversation →</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    className="sa-btn sa-btn-outline"
                    style={{ marginTop: '20px' }}
                    onClick={() => setReservationSubmitted(false)}
                  >
                    Make Another Demo Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReservationSubmit}>
                  <div className="sa-form-grid">
                    <div className="sa-form-group">
                      <label htmlFor="sa-date" className="sa-label">Reservation Date</label>
                      <input
                        id="sa-date"
                        type="date"
                        required
                        className="sa-input"
                        value={resData.date}
                        onChange={(e) => setResData({ ...resData, date: e.target.value })}
                      />
                    </div>

                    <div className="sa-form-group">
                      <label htmlFor="sa-time" className="sa-label">Seating Time</label>
                      <select
                        id="sa-time"
                        className="sa-select"
                        value={resData.time}
                        onChange={(e) => setResData({ ...resData, time: e.target.value })}
                      >
                        <option>6:30 PM (Early Service)</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM (Prime Dinner)</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                        <option>9:30 PM (Late Seating)</option>
                      </select>
                    </div>

                    <div className="sa-form-group">
                      <label htmlFor="sa-guests" className="sa-label">Party Size</label>
                      <select
                        id="sa-guests"
                        className="sa-select"
                        value={resData.guests}
                        onChange={(e) => setResData({ ...resData, guests: e.target.value })}
                      >
                        <option>1 Guest</option>
                        <option>2 Guests (Intimate Table)</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                        <option>5 Guests</option>
                        <option>6 Guests</option>
                        <option>Private Dining (7-12 Guests)</option>
                      </select>
                    </div>

                    <div className="sa-form-group">
                      <label htmlFor="sa-seating" className="sa-label">Seating Atmosphere</label>
                      <select
                        id="sa-seating"
                        className="sa-select"
                        value={resData.seating}
                        onChange={(e) => setResData({ ...resData, seating: e.target.value })}
                      >
                        <option>Main Dining Salon</option>
                        <option>Chef's Tasting Counter</option>
                        <option>Private Mezzanine</option>
                      </select>
                    </div>

                    <div className="sa-form-group">
                      <label htmlFor="sa-name" className="sa-label">Full Name</label>
                      <input
                        id="sa-name"
                        type="text"
                        required
                        className="sa-input"
                        placeholder="Your name"
                        value={resData.name}
                        onChange={(e) => setResData({ ...resData, name: e.target.value })}
                      />
                    </div>

                    <div className="sa-form-group">
                      <label htmlFor="sa-phone" className="sa-label">Phone (WhatsApp Confirmation)</label>
                      <input
                        id="sa-phone"
                        type="tel"
                        required
                        className="sa-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={resData.phone}
                        onChange={(e) => setResData({ ...resData, phone: e.target.value })}
                      />
                    </div>

                    <div className="sa-form-group full">
                      <label htmlFor="sa-notes" className="sa-label">Dietary Restrictions or Special Occasion</label>
                      <textarea
                        id="sa-notes"
                        rows={3}
                        className="sa-textarea"
                        placeholder="Dietary requirements or special requests (optional)..."
                        value={resData.notes}
                        onChange={(e) => setResData({ ...resData, notes: e.target.value })}
                      />
                    </div>
                  </div>

                  <button type="submit" className="sa-btn sa-btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                    <span>Submit Reservation Enquiry</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Location & Operating Hours */}
        <section id="location" className="sa-section" aria-labelledby="location-heading">
          <div className="sa-container">
            <div className="sa-section-header">
              <div className="sa-kicker">
                <MapPin size={14} aria-hidden="true" />
                <span>Visit Us</span>
              </div>
              <h2 id="location-heading" className="sa-heading-lg">Location & Service Hours</h2>
              <div className="sa-divider" />
            </div>

            <div className="sa-location-grid">
              <div className="sa-location-box">
                <div className="sa-loc-row">
                  <MapPin size={24} className="sa-loc-icon" />
                  <div className="sa-loc-content">
                    <h4>Address & Arrival</h4>
                    <p>
                      42, 12th Main Road, HAL 2nd Stage, Indiranagar<br />
                      Bengaluru, Karnataka 560038
                    </p>
                  </div>
                </div>

                <div className="sa-loc-row">
                  <Car size={24} className="sa-loc-icon" />
                  <div className="sa-loc-content">
                    <h4>Valet Parking</h4>
                    <p>
                      Complimentary valet parking available at the porte-cochère entrance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sa-location-box">
                <div className="sa-loc-row">
                  <Clock size={24} className="sa-loc-icon" />
                  <div className="sa-loc-content">
                    <h4>Service Schedule</h4>
                    <p>
                      <strong>Tuesday – Sunday:</strong> 6:30 PM – 11:30 PM<br />
                      <strong>Sunday Long Lunch:</strong> 12:30 PM – 3:30 PM<br />
                      <em>Closed on Mondays for culinary development</em>
                    </p>
                  </div>
                </div>

                <div className="sa-loc-row">
                  <Sparkles size={24} className="sa-loc-icon" />
                  <div className="sa-loc-content">
                    <h4>Dress Code</h4>
                    <p>
                      Smart Casual. We kindly ask guests to refrain from athletic sportswear and beachwear.
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
                Want an elegant culinary website like Spice Avenue for your restaurant?
              </h3>
              <p className="demo-conversion-desc">
                WebNest builds sensory-rich dining websites featuring digital menus, interactive table booking flows, and high mobile speed.
              </p>
            </div>
            <div className="demo-conversion-action">
              <a
                href={createWhatsAppLink(BUSINESS_CONFIG.messages.spiceAvenue)}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-whatsapp-btn"
                aria-label={`Chat on WhatsApp with WebNest about a restaurant website at ${BUSINESS_CONFIG.whatsapp.displayNumber}`}
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
      <footer className="sa-footer">
        <div className="sa-container">
          <div className="sa-footer-grid">
            <div className="sa-footer-col">
              <div className="sa-brand" style={{ marginBottom: '16px' }}>
                <div className="sa-brand-mark" aria-hidden="true">S</div>
                <div className="sa-brand-text">
                  <span className="sa-brand-title">SPICE AVENUE</span>
                  <span className="sa-brand-sub">Contemporary Dining</span>
                </div>
              </div>
              <p style={{ color: '#a89f95', fontSize: '13px', lineHeight: '1.7', maxWidth: '300px' }}>
                A culinary tribute to the ancient spice routes, rendered through modern technique, seasonal ingredients, and intimate hospitality.
              </p>
            </div>

            <div className="sa-footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#signatures">Chef Signatures</a></li>
                <li><a href="#menu">Dinner Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
              </ul>
            </div>

            <div className="sa-footer-col">
              <h4>Experience</h4>
              <ul>
                <li><a href="#chef">The Chef</a></li>
                <li><a href="#menu">Wine & Cellar</a></li>
                <li><a href="#location">Private Dining</a></li>
                <li><a href="#location">Valet Parking</a></li>
              </ul>
            </div>

            <div className="sa-footer-col">
              <h4>Studio Concept</h4>
              <p style={{ color: '#a89f95', fontSize: '13px', lineHeight: '1.6' }}>
                This is a live interactive concept website engineered by WebNest to showcase luxury restaurant branding, typography, mobile booking flows, and high performance.
              </p>
            </div>
          </div>

          <div className="sa-footer-bottom">
            <span>© {new Date().getFullYear()} Spice Avenue (Portfolio Concept). All rights reserved.</span>
            <Link to="/" className="sa-footer-back-link">
              ← Return to WebNest Studio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
