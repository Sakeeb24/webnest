import React, { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  X,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Utensils,
  CheckCircle2,
  Sparkles,
  Navigation,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import DemoHeader from '../common/DemoHeader';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../../config/business';
import './OnlyFish.css';



export default function OnlyFishDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Official Business Details (strictly based on factual input)
  const RESTAURANT = {
    name: 'Only Fish',
    cuisine: 'Seafood Restaurant',
    location: '3rd Floor, Only Fish, Dharwad Business Center, PB Road, Gandhinagar, Dharwad, Karnataka 580004',
    phone: '098867 69398',
    phoneRaw: '919886769398',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Only+Fish+Dharwad+Business+Center+PB+Road+Gandhinagar+Dharwad+Karnataka+580004',
    services: ['Dine-in', 'Takeaway', 'No-contact delivery'],
  };

  // WhatsApp link for Only Fish directly
  const onlyFishWhatsAppUrl = `https://wa.me/${RESTAURANT.phoneRaw}?text=${encodeURIComponent(
    "Hi Only Fish, I'd like to know more about your menu and dining options."
  )}`;

  // WebNest Sales Direct Line CTA
  const webNestSalesWhatsAppUrl = createWhatsAppLink(
    "Hi WebNest, I saw the Only Fish website concept and I'd like to discuss a similar website for my business.",
    BUSINESS_CONFIG.whatsapp.rawNumber
  );

  useEffect(() => {
    document.title = 'Only Fish — Seafood Restaurant | Dharwad, Karnataka (WebNest Demo)';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape key closes mobile navigation
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

  // Factual Menu Data (strictly supported dishes, zero invented prices)
  const menuItems = [
    {
      id: 'bangda-thali',
      name: 'Bangda Fish Thali',
      category: 'thali',
      categoryLabel: 'Thali',
      description: 'Traditional Bangda fish thali served with coastal coconut curry, steamed rice, and authentic coastal accompaniments.',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/bangda-thali.jpg`,
      artType: 'bangda',
      availability: 'Lunch & Dinner • Fresh Daily'
    },
    {
      id: 'belangi-fry',
      name: 'Belangi Fry',
      category: 'seafood',
      categoryLabel: 'Seafood',
      description: 'Fresh Belangi fish coated in coastal masala spices and pan-seared to a crisp, golden finish with curry leaves.',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/belangi-fry.jpg`,
      artType: 'fish',
      availability: 'Dine-In & Takeaway'
    },
    {
      id: 'prawns',
      name: 'Prawns',
      category: 'seafood',
      categoryLabel: 'Seafood',
      description: 'Tender prawns prepared with regional coastal seasoning and aromatic Indian spices.',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/prawns.jpg`,
      artType: 'prawns',
      availability: 'Specialty Selection'
    },
    {
      id: 'fish-thali',
      name: 'Fish Thali',
      category: 'thali',
      categoryLabel: 'Thali',
      description: 'A wholesome seafood thali featuring fresh catch of the day, coastal curry, rice, and traditional side dishes.',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/fish-thali.jpg`,
      artType: 'thali',
      availability: 'Core Dining Feature'
    },
    {
      id: 'chicken-biryani',
      name: 'Chicken Biryani',
      category: 'chicken',
      categoryLabel: 'Chicken',
      description: 'Aromatic layered basmati rice prepared with spiced chicken, whole spices, and comforting Indian flavours.',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/chicken-biryani.jpg`,
      artType: 'biryani',
      availability: 'Lunch & Dinner'
    },
    {
      id: 'egg-bhurji',
      name: 'Egg Bhurji',
      category: 'egg',
      categoryLabel: 'Egg',
      description: 'Homestyle scrambled eggs cooked with chopped onions, green chilies, tomatoes, and ground spices.',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/egg-bhurji.jpg`,
      artType: 'biryani',
      availability: 'Quick Favourite'
    },
    {
      id: 'mutton-curry',
      name: 'Mutton Curry',
      category: 'mutton',
      categoryLabel: 'Mutton',
      description: 'Slow-simmered tender mutton in a rich, deeply spiced traditional Indian curry gravy.',
      image: `${import.meta.env.BASE_URL}portfolio/only-fish/mutton-curry.jpg`,
      artType: 'mutton',
      availability: 'Hearty Classic'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'thali', label: 'Thali' },
    { id: 'chicken', label: 'Chicken' },
    { id: 'egg', label: 'Egg' },
    { id: 'mutton', label: 'Mutton' }
  ];

  return (
    <div className="only-fish-app">
      {/* 1. WebNest Portfolio Header & Return Mechanism */}
      <DemoHeader currentDemo="only-fish" />

      {/* 2. Concept Disclaimer Strip */}
      <aside className="of-concept-disclaimer-strip" aria-label="Demo Disclaimer">
        <span>Website Concept by WebNest</span> • Prepared as a sales demonstration for Only Fish, Dharwad.
      </aside>

      {/* 3. Header & Navigation */}
      <header className={`of-header ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
        <div className="of-container of-nav-inner">
          {/* Brand */}
          <a href="#top" className="of-brand" aria-label="Only Fish Home">
            <span className="of-brand-name">ONLY FISH</span>
            <span className="of-brand-tagline">Seafood Restaurant • Dharwad</span>
          </a>

          {/* Desktop Nav */}
          <nav className="of-desktop-nav" aria-label="Restaurant Navigation">
            <a href="#menu" className="of-nav-link">Menu</a>
            <a href="#about" className="of-nav-link">About</a>
            <a href="#story" className="of-nav-link">Craft</a>
            <a href="#gallery" className="of-nav-link">Gallery</a>
            <a href="#location" className="of-nav-link">Location</a>
          </nav>

          {/* Nav Actions */}
          <div className="of-nav-actions">
            <a
              href={onlyFishWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="of-btn of-btn-primary"
              aria-label="WhatsApp Only Fish at 098867 69398"
            >
              <MessageCircle size={15} aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="of-mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open restaurant menu navigation"
              aria-expanded={mobileMenuOpen}
            >
              <MenuIcon size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="of-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <motion.div
              className="of-mobile-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="of-mobile-content"
              initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="of-mobile-header">
                <div>
                  <span className="of-brand-name" style={{ fontSize: '20px' }}>ONLY FISH</span>
                  <div className="of-brand-tagline">Dharwad, Karnataka</div>
                </div>
                <button
                  type="button"
                  className="of-mobile-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <nav className="of-mobile-nav-links">
                <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#story" onClick={() => setMobileMenuOpen(false)}>Craft</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)}>Location</a>
              </nav>

              <div className="of-mobile-cta">
                <a
                  href={onlyFishWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="of-btn of-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>WhatsApp Only Fish</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main id="top" tabIndex={-1} style={{ outline: 'none' }}>
        {/* 4. Hero Section */}
        <section className="of-hero" aria-labelledby="hero-title">
          <div className="of-container">
            <div className="of-hero-grid">
              {/* Content */}
              <div className="of-hero-content">
                {/* 1. Eyebrow */}
                <motion.div
                  className="of-eyebrow"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Compass size={14} aria-hidden="true" />
                  <span>Seafood Restaurant • Dharwad, Karnataka</span>
                </motion.div>

                {/* 2. Headline */}
                <motion.h1
                  id="hero-title"
                  className="of-hero-title"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  Fresh From the Sea.<br />
                  <em>Straight to Your Table.</em>
                </motion.h1>

                {/* 3. Supporting Text */}
                <motion.p
                  className="of-hero-desc"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  Seafood, thalis and comforting favourites served in Dharwad.
                </motion.p>

                {/* 4. Action Buttons */}
                <motion.div
                  className="of-hero-actions"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a href="#menu" className="of-btn of-btn-primary">
                    <span>Explore Menu</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>

                  <a
                    href={onlyFishWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="of-btn of-btn-outline"
                    aria-label="Contact Only Fish on WhatsApp"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>WhatsApp Us</span>
                  </a>
                </motion.div>

                {/* 5. Supported Fact Badges */}
                <motion.div
                  className="of-hero-meta-strip"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="of-meta-item">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Dine-In Experience</span>
                  </div>
                  <div className="of-meta-item">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Takeaway Counter</span>
                  </div>
                  <div className="of-meta-item">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>No-Contact Delivery</span>
                  </div>
                </motion.div>
              </div>

              {/* 6. Hero Visual (Scales subtly into view) */}
              <motion.div
                className="of-hero-visual"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="of-hero-visual-card">
                  <div className="of-hero-img-wrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}portfolio/only-fish/bangda-thali.jpg`}
                      alt="Only Fish Seafood Restaurant - Fresh Bangda Fish Thali"
                      loading="eager"
                      onError={(e) => {
                        e.currentTarget.src = `${import.meta.env.BASE_URL}portfolio/only-fish.svg`;
                      }}
                    />
                  </div>

                  <div className="of-hero-badge-float">
                    <div>
                      <div className="of-badge-kicker">Featured Specialty</div>
                      <div className="of-badge-title">Fresh Bangda Fish Thali • Daily Catch</div>
                    </div>
                    <a href="#menu" className="of-btn of-btn-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>
                      <span>View Menu</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Why Visit / Service Experience Bar */}
        <section className="of-experience-bar" aria-label="Dining and Service Formats">
          <div className="of-container">
            <div className="of-experience-grid">
              <div className="of-experience-item">
                <div className="of-exp-icon" aria-hidden="true">
                  <Utensils size={20} />
                </div>
                <div>
                  <h3 className="of-exp-title">Dine-In</h3>
                  <p className="of-exp-desc">
                    Welcoming dining room on the 3rd Floor of Dharwad Business Center for families, friends, and seafood enthusiasts.
                  </p>
                </div>
              </div>

              <div className="of-experience-item">
                <div className="of-exp-icon" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="of-exp-title">Takeaway</h3>
                  <p className="of-exp-desc">
                    Freshly packed coastal thalis and crispy fish frys prepared for quick, convenient pick-up.
                  </p>
                </div>
              </div>

              <div className="of-experience-item">
                <div className="of-exp-icon" aria-hidden="true">
                  <Navigation size={20} />
                </div>
                <div>
                  <h3 className="of-exp-title">No-Contact Delivery</h3>
                  <p className="of-exp-desc">
                    Safe, doorstep delivery options to enjoy fresh coastal meals in the comfort of your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Signature Menu Section */}
        <section className="of-section of-menu-section" id="menu" aria-labelledby="menu-heading">
          <div className="of-container">
            <motion.div
              className="of-section-header text-center"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="of-eyebrow">
                <Sparkles size={13} aria-hidden="true" />
                <span>Culinary Selection</span>
              </div>
              <h2 id="menu-heading" className="of-section-title">
                From the Sea to Your Table
              </h2>
              <p className="of-section-subtitle mx-auto">
                Authentic coastal seafood, satisfying thalis, and familiar Indian favourites prepared fresh.
              </p>
            </motion.div>

            {/* Category Filter Tabs */}
            <div className="of-menu-tabs" role="tablist" aria-label="Menu categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`of-menu-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Menu Items Grid with Real Dish Photography */}
            <div className="of-menu-grid">
              {filteredItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  className="of-menu-item"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="of-menu-img-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="of-menu-img"
                      loading="lazy"
                    />
                    <span className="of-menu-badge-pill">{item.categoryLabel}</span>
                  </div>

                  <div className="of-menu-body">
                    <div className="of-menu-item-header">
                      <h3 className="of-dish-name">{item.name}</h3>
                    </div>

                    <p className="of-dish-desc">{item.description}</p>

                    <div className="of-dish-footer">
                      <span className="of-dish-avail">{item.availability}</span>
                      <a
                        href={`https://wa.me/${RESTAURANT.phoneRaw}?text=${encodeURIComponent(
                          `Hi Only Fish, I'd like to ask about availability for ${item.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="of-dish-inquire"
                        aria-label={`Ask about ${item.name} on WhatsApp`}
                      >
                        <MessageCircle size={14} aria-hidden="true" />
                        <span>Ask on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Note on Menu & Pricing */}
            <div className="text-center" style={{ marginTop: '36px' }}>
              <p style={{ fontSize: '13px', color: 'var(--of-text-muted)' }}>
                * Daily fresh catch may vary by availability. Connect directly on WhatsApp with Only Fish for today’s special preparations.
              </p>
            </div>
          </div>
        </section>

        {/* 7. About Section */}
        <section className="of-section of-about-section" id="about" aria-labelledby="about-heading">
          <div className="of-container">
            <div className="of-about-grid">
              {/* Narrative */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="of-eyebrow">
                  <span>About Only Fish</span>
                </div>
                <h2 id="about-heading" className="of-section-title">
                  Simple Food. A Seafood-Focused Experience.
                </h2>
                <p className="of-about-lead">
                  Only Fish brings seafood and familiar Indian favourites together in a welcoming restaurant setting in Dharwad.
                </p>
                <p className="of-about-p">
                  Situated conveniently on PB Road at Gandhinagar, Only Fish caters to diners seeking authentic regional flavours — from comforting Bangda Fish Thalis and crisp Belangi Fry to satisfying biryanis and classic curries.
                </p>
                <p className="of-about-p">
                  Whether joining for an afternoon lunch, ordering takeaway, or having food brought to your door with no-contact delivery, our focus remains on fresh ingredients, comforting coastal spices, and attentive service.
                </p>
              </motion.div>

              {/* Factual Highlight Box */}
              <motion.div
                className="of-about-highlight-box"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="of-about-badge">Restaurant Summary</div>
                <h3 className="of-about-box-title">Dharwad Dining Information</h3>
                <ul className="of-about-list">
                  <li>
                    <MapPin size={16} aria-hidden="true" />
                    <span>3rd Floor, Dharwad Business Center, PB Road</span>
                  </li>
                  <li>
                    <Phone size={16} aria-hidden="true" />
                    <span>Direct Telephone: {RESTAURANT.phone}</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Full Dine-In Seating</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Fresh Takeaway Counter</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>No-Contact Delivery Service</span>
                  </li>
                </ul>

                <div style={{ marginTop: '24px' }}>
                  <a
                    href={onlyFishWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="of-btn of-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>Message Restaurant on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. Food Story Editorial Full-Width Banner */}
        <section className="of-food-story" id="story" aria-label="Editorial Food Statement">
          <div className="of-container">
            <motion.div
              className="of-story-inner"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="of-eyebrow" style={{ backgroundColor: 'rgba(216, 199, 165, 0.1)' }}>
                <span>The Only Fish Identity</span>
              </div>
              <h2 className="of-story-statement">
                Made for <em>seafood lovers.</em>
              </h2>
              <p className="of-story-sub">
                From crispy Belangi pan frys to rich coastal fish curries and wholesome thalis, each preparation is crafted around authentic coastal character and fresh seafood.
              </p>
              <a href="#menu" className="of-btn of-btn-primary">
                <span>View Full Menu Selection</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 9. Visual Gallery Section */}
        <section className="of-section of-gallery-section" id="gallery" aria-labelledby="gallery-heading">
          <div className="of-container">
            <motion.div
              className="of-section-header text-center"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="of-eyebrow">
                <span>Visual Gallery</span>
              </div>
              <h2 id="gallery-heading" className="of-section-title">
                Seafood & Dining Showcase
              </h2>
              <p className="of-section-subtitle mx-auto">
                An editorial look at authentic coastal dishes and dining preparations at Only Fish.
              </p>
            </motion.div>

            <div className="of-gallery-grid">
              <motion.div
                className="of-gallery-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="of-gallery-visual">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/only-fish/bangda-thali.jpg`}
                    alt="Bangda Fish Thali prepared at Only Fish"
                    loading="lazy"
                  />
                </div>
                <div className="of-gallery-info">
                  <h3 className="of-gallery-dish-title">Bangda Fish Thali</h3>
                  <span className="of-gallery-dish-sub">Traditional Coastal Curry, Rice & Accompaniments</span>
                </div>
              </motion.div>

              <motion.div
                className="of-gallery-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
              >
                <div className="of-gallery-visual">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/only-fish/belangi-fry.jpg`}
                    alt="Crispy Belangi Fry prepared at Only Fish"
                    loading="lazy"
                  />
                </div>
                <div className="of-gallery-info">
                  <h3 className="of-gallery-dish-title">Belangi Fry</h3>
                  <span className="of-gallery-dish-sub">Spiced Pan-Seared Fresh Fish</span>
                </div>
              </motion.div>

              <motion.div
                className="of-gallery-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.16 }}
              >
                <div className="of-gallery-visual">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/only-fish/prawns.jpg`}
                    alt="Pan-fried coastal prawns prepared at Only Fish"
                    loading="lazy"
                  />
                </div>
                <div className="of-gallery-info">
                  <h3 className="of-gallery-dish-title">Coastal Prawns</h3>
                  <span className="of-gallery-dish-sub">Regional Masala Seasoning & Herbs</span>
                </div>
              </motion.div>

              <motion.div
                className="of-gallery-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
              >
                <div className="of-gallery-visual">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/only-fish/fish-thali.jpg`}
                    alt="Fish Thali prepared at Only Fish"
                    loading="lazy"
                  />
                </div>
                <div className="of-gallery-info">
                  <h3 className="of-gallery-dish-title">Fish Thali</h3>
                  <span className="of-gallery-dish-sub">Fresh Catch of the Day with Coastal Gravy</span>
                </div>
              </motion.div>

              <motion.div
                className="of-gallery-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.24 }}
              >
                <div className="of-gallery-visual">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/only-fish/chicken-biryani.jpg`}
                    alt="Chicken Biryani prepared at Only Fish"
                    loading="lazy"
                  />
                </div>
                <div className="of-gallery-info">
                  <h3 className="of-gallery-dish-title">Chicken Biryani</h3>
                  <span className="of-gallery-dish-sub">Aromatic Layered Basmati Rice & Spiced Chicken</span>
                </div>
              </motion.div>

              <motion.div
                className="of-gallery-card"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.28 }}
              >
                <div className="of-gallery-visual">
                  <img
                    src={`${import.meta.env.BASE_URL}portfolio/only-fish/mutton-curry.jpg`}
                    alt="Mutton Curry prepared at Only Fish"
                    loading="lazy"
                  />
                </div>
                <div className="of-gallery-info">
                  <h3 className="of-gallery-dish-title">Mutton Curry</h3>
                  <span className="of-gallery-dish-sub">Slow-Simmered Traditional Gravy</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 10. Location Section */}
        <section className="of-section of-location-section" id="location" aria-labelledby="location-heading">
          <div className="of-container">
            <motion.div
              className="of-section-header"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="of-eyebrow">
                <MapPin size={13} aria-hidden="true" />
                <span>Find Us</span>
              </div>
              <h2 id="location-heading" className="of-section-title">
                Visit Only Fish in Dharwad
              </h2>
              <p className="of-section-subtitle">
                Located on the 3rd floor of Dharwad Business Center on PB Road, Gandhinagar.
              </p>
            </motion.div>

            <div className="of-location-grid">
              {/* Left Column: Address & Details */}
              <motion.div
                className="of-location-details"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <div className="of-loc-badge">Restaurant Address</div>
                  <h3 className="of-loc-name">Only Fish</h3>

                  <div className="of-loc-address-block">
                    <MapPin size={20} aria-hidden="true" />
                    <div className="of-loc-address-text">
                      <strong>3rd Floor, Only Fish,</strong><br />
                      Dharwad Business Center,<br />
                      PB Road, Gandhinagar,<br />
                      Dharwad, Karnataka 580004
                    </div>
                  </div>

                  <div className="of-loc-phone-block">
                    <Phone size={20} aria-hidden="true" />
                    <div>
                      <span style={{ fontSize: '12px', color: 'var(--of-text-muted)', display: 'block' }}>Direct Telephone</span>
                      <a href={`tel:${RESTAURANT.phone.replace(/\s+/g, '')}`} className="of-loc-phone-num">
                        {RESTAURANT.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="of-loc-actions">
                  <a
                    href={RESTAURANT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="of-btn of-btn-primary"
                    aria-label="Get Directions to Only Fish on Google Maps"
                  >
                    <Navigation size={16} aria-hidden="true" />
                    <span>Get Directions</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>

                  <a
                    href={onlyFishWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="of-btn of-btn-outline"
                    aria-label="WhatsApp Only Fish"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>WhatsApp Only Fish</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Direction Assistance */}
              <motion.div
                className="of-location-card-helper"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="of-directions-guide-title">How to Reach Only Fish</h3>
                <p className="of-directions-guide-text">
                  Dharwad Business Center is situated prominently along PB Road in Gandhinagar, making it easy to access by car, auto, or two-wheeler.
                </p>

                <ul className="of-landmarks-list">
                  <li>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Located on the 3rd Floor of Dharwad Business Center</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Direct access along PB Road, Gandhinagar</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>Convenient for Dine-In, Quick Pickups & Delivery Drivers</span>
                  </li>
                </ul>

                <a
                  href={RESTAURANT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="of-btn of-btn-outline"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <span>Open in Google Maps Navigation</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <motion.div
              className="of-whatsapp-banner"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="of-wa-content">
                <h3>Connecting with Only Fish is Easy</h3>
                <p>Have questions about today's fresh fish thali, timing, or takeaway orders? Chat directly on WhatsApp.</p>
              </div>
              <a
                href={onlyFishWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="of-btn of-btn-whatsapp"
                aria-label="WhatsApp Only Fish at 098867 69398"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>WhatsApp Only Fish</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 11. WebNest Sales CTA Section (Crucial Client-Facing WebNest Pitch) */}
        <section className="of-webnest-sales-section" aria-labelledby="webnest-sales-heading">
          <div className="of-container">
            <motion.div
              className="of-webnest-sales-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="of-sales-badge">
                <Sparkles size={13} aria-hidden="true" />
                <span>WebNest Studio Demo</span>
              </div>

              <h2 id="webnest-sales-heading" className="of-sales-title">
                Want a website like this for your business?
              </h2>

              <p className="of-sales-desc">
                This website concept was designed by WebNest to demonstrate how a tailored digital identity, mobile speed, and direct WhatsApp communication can attract more dining customers.
              </p>

              <a
                href={webNestSalesWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="of-sales-cta-btn"
                aria-label="Talk to WebNest on WhatsApp about getting a website like this"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Talk to WebNest →</span>
              </a>

              <p className="of-sales-note">
                Direct founder consultation with Sakeeb I Mulla • {BUSINESS_CONFIG.whatsapp.displayNumber}
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <footer className="of-footer" role="contentinfo">
        <div className="of-container">
          <div className="of-footer-grid">
            {/* Restaurant Info */}
            <div className="of-footer-brand">
              <h4>ONLY FISH</h4>
              <p>Seafood Restaurant • Dharwad, Karnataka</p>
              <p style={{ color: 'var(--of-text-secondary)', fontSize: '13px' }}>
                3rd Floor, Only Fish, Dharwad Business Center,<br />
                PB Road, Gandhinagar, Dharwad 580004
              </p>
              <p>
                <strong>Telephone:</strong>{' '}
                <a href={`tel:${RESTAURANT.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--of-accent-sand)' }}>
                  {RESTAURANT.phone}
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="of-footer-col">
              <h5>Navigation</h5>
              <ul>
                <li><a href="#menu">Menu Selection</a></li>
                <li><a href="#about">About the Restaurant</a></li>
                <li><a href="#story">Craft & Identity</a></li>
                <li><a href="#gallery">Food Gallery</a></li>
                <li><a href="#location">Find Location</a></li>
              </ul>
            </div>

            {/* WebNest Sales Contact */}
            <div className="of-footer-col">
              <h5>WebNest Studio</h5>
              <ul>
                <li>
                  <a href={webNestSalesWhatsAppUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD' }}>
                    Need a website? Talk to WebNest →
                  </a>
                </li>
                <li>
                  <span style={{ fontSize: '12px' }}>
                    Concept demonstration by WebNest for commercial presentation.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="of-footer-bottom">
            <span className="of-footer-concept-note">
              Website Concept by WebNest • Not an official website of Only Fish.
            </span>
            <a
              href={webNestSalesWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="of-footer-webnest-link"
            >
              Need a website for your business? Talk to WebNest →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
