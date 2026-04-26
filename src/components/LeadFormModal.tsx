'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    domain: '',
    delivery: '',
    candidates: '',
    location: '',
    companyWebsite: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const blockedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    setTimeout(() => {
      const firstInput = modalRef.current?.querySelector<HTMLElement>('input, select, button');
      firstInput?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const email = formData.email.trim().toLowerCase();
    const emailDomain = email.split('@')[1] ?? '';
    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (blockedDomains.includes(emailDomain)) {
      errors.email = 'Please use your work email address.';
    }
    if (!/^\d{10}$/.test(phoneDigits)) {
      errors.phone = 'Phone number must be exactly 10 digits.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading' || status === 'success') return;

    if (!validateForm()) return;

    if (formData.companyWebsite.trim()) {
      setStatus('success');
      setErrorMessage('');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone.replace(/\D/g, ''),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Reset form
        setFormData({
          name: '', email: '', company: '', phone: '', domain: '', delivery: '', candidates: '', location: '', companyWebsite: ''
        });
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 2000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="lead-form-title">
        <button className="close-btn" onClick={onClose} aria-label="Close lead form">×</button>
        
        {/* Left panel: Stylised Accredian branding */}
        <div className="modal-left">
          <div className="brand-content">
            <h1 className="brand-name">Accredian</h1>
            <div className="brand-divider"></div>
            <p className="brand-tagline">Enterprise Learning Solutions</p>
            <div className="brand-features">
              <div className="brand-feature">
                <span className="feature-icon">✦</span>
                <span>Expert-Led Programs</span>
              </div>
              <div className="brand-feature">
                <span className="feature-icon">✦</span>
                <span>Industry-Ready Skills</span>
              </div>
              <div className="brand-feature">
                <span className="feature-icon">✦</span>
                <span>Measurable ROI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-right">
          <h2 className="form-title" id="lead-form-title">Enquire <span className="title-accent">Now</span></h2>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <div className="form-group">
              <label htmlFor="lead-name">Full Name</label>
              <input 
                id="lead-name"
                type="text" 
                placeholder="Enter Name" 
                required 
                aria-label="Full name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="lead-email">Professional Email</label>
                <input 
                  id="lead-email"
                  type="email" 
                  placeholder="Enter Email" 
                  required 
                  aria-label="Professional email"
                  aria-invalid={Boolean(fieldErrors.email)}
                  value={formData.email}
                  onChange={e => {
                    setFieldErrors((prev) => ({ ...prev, email: '' }));
                    setFormData({...formData, email: e.target.value});
                  }}
                />
                {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lead-company">Company Name</label>
                <input 
                  id="lead-company"
                  type="text" 
                  placeholder="Company name" 
                  required 
                  aria-label="Company name"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="lead-phone">Phone Number</label>
                <div className="phone-wrapper">
                  <span className="code">+91</span>
                  <input 
                    id="lead-phone"
                    type="tel" 
                    placeholder="Mobile number" 
                    required 
                    aria-label="Phone number"
                    inputMode="numeric"
                    maxLength={10}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    value={formData.phone}
                    onChange={e => {
                      setFieldErrors((prev) => ({ ...prev, phone: '' }));
                      setFormData({...formData, phone: e.target.value.replace(/\D/g, '')});
                    }}
                  />
                </div>
                {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lead-domain">Select Domain</label>
                <select 
                  id="lead-domain"
                  required 
                  aria-label="Select domain"
                  value={formData.domain}
                  onChange={e => setFormData({...formData, domain: e.target.value})}
                >
                  <option value="">Choose Domain</option>
                  <option value="AI">AI & Machine Learning</option>
                  <option value="Product">Product Management</option>
                  <option value="Leadership">Leadership</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="lead-delivery">Mode of Delivery</label>
                <select 
                  id="lead-delivery"
                  required 
                  aria-label="Mode of delivery"
                  value={formData.delivery}
                  onChange={e => setFormData({...formData, delivery: e.target.value})}
                >
                  <option value="">Select Mode *</option>
                  <option value="Online">Online / Virtual</option>
                  <option value="Onsite">On-site Workshop</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="lead-candidates">No. of candidates</label>
                <input 
                  id="lead-candidates"
                  type="number" 
                  placeholder="Count" 
                  required 
                  min={1}
                  aria-label="Number of candidates"
                  value={formData.candidates}
                  onChange={e => setFormData({...formData, candidates: e.target.value})}
                />
              </div>
            </div>

            <input
              type="text"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={formData.companyWebsite}
              onChange={e => setFormData({ ...formData, companyWebsite: e.target.value })}
            />

            {status === 'error' && (
              <div className="error-message">{errorMessage}</div>
            )}
            
            {status === 'success' ? (
              <div className="success-message">
                <strong>Thanks! Your enquiry has been submitted.</strong>
                <p>Our enterprise advisor will reach out shortly with next steps.</p>
              </div>
            ) : (
              <button 
                type="submit" 
                className="submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Form'}
              </button>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(8px);
        }
        .modal-container {
          background: #ffffff;
          width: 95%;
          max-width: 950px;
          border-radius: 20px;
          display: flex;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
          animation: modalScale 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes modalScale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .close-btn {
          position: absolute;
          top: 12px;
          right: 16px;
          font-size: 2.25rem;
          color: #6B7280;
          z-index: 10;
          background: none;
          cursor: pointer;
          border: none;
          transition: color 0.2s;
        }
        .close-btn:hover {
          color: #059669;
        }

        /* ── Left Branded Panel ── */
        .modal-left {
          flex: 0.85;
          background: linear-gradient(160deg, #059669 0%, #10B981 40%, #34D399 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .modal-left::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }
        .modal-left::after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }
        .brand-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .brand-name {
          font-size: 2.75rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 1rem;
          font-style: italic;
        }
        .brand-divider {
          width: 50px;
          height: 3px;
          background: rgba(255,255,255,0.6);
          margin: 0 auto 1rem;
          border-radius: 2px;
        }
        .brand-tagline {
          color: rgba(255,255,255,0.9);
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 2.5rem;
          letter-spacing: 0.02em;
        }
        .brand-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }
        .brand-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 500;
        }
        .feature-icon {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        /* ── Right Form Panel ── */
        .modal-right {
          flex: 1.4;
          padding: 2.5rem 3rem;
          background: #ffffff;
        }
        .form-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.75rem;
          text-align: center;
          letter-spacing: -0.02em;
          color: #1F2937;
        }
        .title-accent {
          color: #059669;
        }
        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #059669;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .form-group input, .form-group select {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #F0FDF4;
          border: 1.5px solid #D1FAE5;
          border-radius: 10px;
          font-size: 0.9rem;
          color: #1F2937;
          outline: none;
          transition: all 0.2s ease;
        }
        .form-group input::placeholder {
          color: #9CA3AF;
        }
        .form-group input:focus, .form-group select:focus {
          background: #ffffff;
          border-color: #10B981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
        }
        .phone-wrapper {
          display: flex;
          align-items: center;
          background: #F0FDF4;
          border: 1.5px solid #D1FAE5;
          border-radius: 10px;
          padding-left: 1rem;
          transition: all 0.2s ease;
        }
        .phone-wrapper:focus-within {
          background: #ffffff;
          border-color: #10B981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
        }
        .phone-wrapper input {
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
        }
        .code {
          font-weight: 700;
          color: #059669;
          border-right: 1.5px solid #D1FAE5;
          padding-right: 0.75rem;
          font-size: 0.9rem;
        }
        
        .submit-btn {
          width: 100%;
          padding: 0.9rem;
          font-size: 1.05rem;
          font-weight: 700;
          margin-top: 0.75rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          background: linear-gradient(135deg, #059669 0%, #10B981 100%);
          color: #ffffff;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .field-error {
          color: #DC2626;
          font-size: 0.8rem;
          margin-top: -0.1rem;
        }
        .error-message {
          color: #DC2626;
          background: #FEE2E2;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.9rem;
          text-align: center;
          font-weight: 500;
        }
        .success-message {
          color: #059669;
          background: #D1FAE5;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
          margin-top: 0.75rem;
        }
        .success-message p {
          margin-top: 0.35rem;
          font-size: 0.94rem;
        }
        .honeypot {
          position: absolute;
          left: -9999px;
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 800px) {
          .modal-left { display: none; }
          .modal-right { padding: 2rem 1.5rem; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default LeadFormModal;
