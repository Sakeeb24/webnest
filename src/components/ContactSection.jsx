import React, { useState } from 'react';
import { Send, AlertCircle, MessageCircle, Mail, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppLink } from '../config/business';
import './ContactSection.css';

export default function ContactSection({ defaultRequirement = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    websiteRequirement: defaultRequirement || '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your WhatsApp or phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. you@example.com).';
    }
    if (!formData.websiteRequirement || !formData.websiteRequirement.trim()) {
      newErrors.websiteRequirement = 'Please select a website requirement.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setSubmittedData({ ...formData });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      businessType: '',
      websiteRequirement: '',
      message: ''
    });
    setErrors({});
  };

  const buildEnquiryWhatsAppMessage = (data) => {
    const lines = [
      'Hi WebNest,',
      '',
      "I'd like to discuss a website for my business.",
      '',
      `Name: ${data.name.trim()}`,
      `Business: ${data.businessName.trim()}`,
      `Phone: ${data.phone.trim()}`,
      `Email: ${data.email.trim()}`
    ];
    if (data.businessType && data.businessType.trim()) {
      lines.push(`Business Type: ${data.businessType.trim()}`);
    }
    lines.push(`Website Requirement: ${data.websiteRequirement.trim()}`);

    if (data.message && data.message.trim()) {
      lines.push('', 'Message:', data.message.trim());
    }
    return lines.join('\n');
  };

  const handleWhatsAppWithForm = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    const text = buildEnquiryWhatsAppMessage(formData);
    const url = createWhatsAppLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const primaryWhatsAppUrl = createWhatsAppLink(BUSINESS_CONFIG.messages.contact);

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Details & Direct WhatsApp Actions */}
          <div className="contact-info-col">
            <div className="section-badge">
              <MessageCircle size={14} aria-hidden="true" />
              <span>Direct Conversation</span>
            </div>

            <h2 id="contact-heading" className="heading-xl" style={{ marginBottom: '16px' }}>
              Let's talk about your website.
            </h2>

            <p className="body-lg" style={{ marginBottom: '28px' }}>
              Tell us about your business and what you need. We can start with a simple conversation.
            </p>

            {/* Primary Contact Action: Start a Conversation */}
            <div style={{ marginBottom: '32px' }}>
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                aria-label="Start a Conversation with WebNest on WhatsApp"
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span>Start a Conversation ↗</span>
              </a>
              <span className="caption" style={{ display: 'block', marginTop: '8px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                WhatsApp · {BUSINESS_CONFIG.whatsapp.displayNumber}
              </span>
            </div>

            <div className="contact-channels">
              <div className="channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="caption">Primary Method</span>
                  <p className="channel-value">WhatsApp · {BUSINESS_CONFIG.whatsapp.displayNumber}</p>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="caption">Studio Email</span>
                  <p className="channel-value">{BUSINESS_CONFIG.email}</p>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="caption">Response Commitment</span>
                  <p className="channel-value">We'll get back to you as soon as possible.</p>
                </div>
              </div>
            </div>

            <div className="contact-assurance-card">
              <span className="assurance-title">No Technical Jargon</span>
              <p className="body-sm" style={{ marginTop: '4px' }}>
                You don't need to know anything about servers, hosting, or code. We guide you through straightforward questions and handle all technical execution.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-col">
            <div className="card contact-form-card">
              {/* Ready to Send State (No Fake Backend Confirmation) */}
              {submitted && submittedData ? (
                <div className="ready-to-send-card" role="status" aria-live="polite">
                  <div className="ready-to-send-header">
                    <div className="ready-to-send-icon" aria-hidden="true">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="ready-to-send-title">Ready to Send</h3>
                      <p className="ready-to-send-copy">
                        Your enquiry is ready. Continue through WhatsApp to send it directly to WebNest.
                      </p>
                    </div>
                  </div>

                  <div className="enquiry-summary-box">
                    <div className="enquiry-summary-row">
                      <span className="enquiry-summary-label">Name</span>
                      <span className="enquiry-summary-val">{submittedData.name}</span>
                    </div>
                    <div className="enquiry-summary-row">
                      <span className="enquiry-summary-label">Business</span>
                      <span className="enquiry-summary-val">{submittedData.businessName}</span>
                    </div>
                    {submittedData.businessType && (
                      <div className="enquiry-summary-row">
                        <span className="enquiry-summary-label">Business Type</span>
                        <span className="enquiry-summary-val">{submittedData.businessType}</span>
                      </div>
                    )}
                    <div className="enquiry-summary-row">
                      <span className="enquiry-summary-label">Website Requirement</span>
                      <span className="enquiry-summary-val">{submittedData.websiteRequirement}</span>
                    </div>
                    <div className="enquiry-summary-row">
                      <span className="enquiry-summary-label">WhatsApp / Phone</span>
                      <span className="enquiry-summary-val">{submittedData.phone}</span>
                    </div>
                    <div className="enquiry-summary-row">
                      <span className="enquiry-summary-label">Email</span>
                      <span className="enquiry-summary-val">{submittedData.email}</span>
                    </div>
                    {submittedData.message && (
                      <div className="enquiry-summary-row" style={{ flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                        <span className="enquiry-summary-label">Message</span>
                        <span className="enquiry-summary-val" style={{ textAlign: 'left', fontStyle: 'italic' }}>
                          "{submittedData.message}"
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Primary CTA */}
                  <a
                    href={createWhatsAppLink(buildEnquiryWhatsAppMessage(submittedData))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                    aria-label="Continue on WhatsApp to send enquiry"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    <span>Continue on WhatsApp →</span>
                  </a>

                  {/* Clean Form Reset */}
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                    onClick={handleReset}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Website enquiry form">
                  <div className="form-row-2">
                    {/* Name Field */}
                    <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                      <label htmlFor="field-name" className="form-label">
                        Name <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <input
                        id="field-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="form-input"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                      />
                      {errors.name && (
                        <div id="err-name" className="form-error-msg" role="alert">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Business Name Field */}
                    <div className={`form-group ${errors.businessName ? 'has-error' : ''}`}>
                      <label htmlFor="field-businessName" className="form-label">
                        Business Name <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <input
                        id="field-businessName"
                        name="businessName"
                        type="text"
                        autoComplete="organization"
                        className="form-input"
                        placeholder="Your business name"
                        value={formData.businessName}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={errors.businessName ? 'true' : 'false'}
                        aria-describedby={errors.businessName ? 'err-business' : undefined}
                      />
                      {errors.businessName && (
                        <div id="err-business" className="form-error-msg" role="alert">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.businessName}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-row-2">
                    {/* Phone/WhatsApp */}
                    <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                      <label htmlFor="field-phone" className="form-label">
                        WhatsApp / Phone <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <input
                        id="field-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? 'err-phone' : undefined}
                      />
                      {errors.phone && (
                        <div id="err-phone" className="form-error-msg" role="alert">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                      <label htmlFor="field-email" className="form-label">
                        Email <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <input
                        id="field-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="form-input"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                      />
                      {errors.email && (
                        <div id="err-email" className="form-error-msg" role="alert">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-row-2">
                    {/* Business Type */}
                    <div className="form-group">
                      <label htmlFor="field-businessType" className="form-label">
                        Business Type
                      </label>
                      <select
                        id="field-businessType"
                        name="businessType"
                        className="form-select"
                        value={formData.businessType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select business type</option>
                        <option value="Restaurant / Food Service">Restaurant / Food Service</option>
                        <option value="Gym / Fitness Club">Gym / Fitness Club</option>
                        <option value="Salon / Grooming Atelier">Salon / Grooming Atelier</option>
                        <option value="Doctor / Clinic / Healthcare">Doctor / Clinic / Healthcare</option>
                        <option value="Professional Services / Consulting">Professional Services / Consulting</option>
                        <option value="Retail / Local Shop">Retail / Local Shop</option>
                        <option value="Startup / Technology">Startup / Technology</option>
                        <option value="General Business">Other Local Business</option>
                      </select>
                    </div>

                    {/* Website Requirement */}
                    <div className={`form-group ${errors.websiteRequirement ? 'has-error' : ''}`}>
                      <label htmlFor="field-requirement" className="form-label">
                        Website Requirement <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <select
                        id="field-requirement"
                        name="websiteRequirement"
                        className="form-select"
                        value={formData.websiteRequirement}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={errors.websiteRequirement ? 'true' : 'false'}
                        aria-describedby={errors.websiteRequirement ? 'err-requirement' : undefined}
                      >
                        <option value="" disabled>Select website requirement</option>
                        <option value="Starter Plan (₹4,999)">Starter Plan (₹4,999)</option>
                        <option value="Business Plan (₹9,999)">Business Plan (₹9,999)</option>
                        <option value="Premium Plan (₹19,999+)">Premium Plan (₹19,999+)</option>
                        <option value="Business Website">Business Website</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Restaurant & Hospitality Website">Restaurant & Hospitality Website</option>
                        <option value="Gym & Fitness Website">Gym & Fitness Website</option>
                        <option value="Salon & Grooming Website">Salon & Grooming Website</option>
                        <option value="Portfolio & Consulting Website">Portfolio & Consulting Website</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Custom Web Application">Custom Web Application</option>
                        <option value="Not Sure Yet">Not Sure Yet (Need Advice)</option>
                      </select>
                      {errors.websiteRequirement && (
                        <div id="err-requirement" className="form-error-msg" role="alert">
                          <AlertCircle size={14} aria-hidden="true" />
                          <span>{errors.websiteRequirement}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="field-message" className="form-label">
                      Message <span className="caption" style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      rows={3}
                      className="form-textarea"
                      placeholder="Briefly tell us what your business does and what you'd like..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Actions: Send Enquiry & WhatsApp Direct */}
                  <div className="form-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%' }}
                    >
                      <span>Send Enquiry</span>
                      <Send size={16} aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      style={{ width: '100%', color: 'var(--color-text-secondary)' }}
                      onClick={handleWhatsAppWithForm}
                      aria-label="Send this enquiry directly over WhatsApp"
                    >
                      <MessageCircle size={15} aria-hidden="true" />
                      <span>Or send this enquiry via WhatsApp</span>
                      <ArrowRight size={13} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
