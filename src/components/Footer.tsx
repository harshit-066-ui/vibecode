'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="brand-section">
            <Link href="/" className="logo-group">
              <span className="wordmark">
                <span className="wordmark-accent">Accredian</span>
                <span className="wordmark-sub">Enterprise</span>
              </span>
            </Link>
            <div className="social-links">
              <Link href="https://www.facebook.com/accredianlearn" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Accredian on Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/school/accredianedu/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Accredian on LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="https://x.com/accredianedu" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Accredian on X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="cta-section">
            <button className="btn-primary footer-btn" aria-label="Explore enterprise programs">
              Explore Programs
            </button>
            <p className="advisor-text">Speak with our Advisor</p>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-middle">
          <div className="footer-col">
            <h4>Accredian</h4>
            <ul>
              <li><Link href="https://accredian.com/About" target="_blank" rel="noopener noreferrer">About</Link></li>
              <li><Link href="https://blog.accredian.com/" target="_blank" rel="noopener noreferrer">Blog</Link></li>
              <li><Link href="https://accredian.com/whyaccredian" target="_blank" rel="noopener noreferrer">Why Accredian?</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <span className="contact-prefix">Email us:</span> <Link href="mailto:enterprise@accredian.com" className="email-link">enterprise@accredian.com</Link>
              </li>
              <li>
                <p className="address">
                  <span className="contact-prefix">Office Address:</span> 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>

      <style jsx>{`
        .main-footer {
          background: var(--bg-base);
          color: var(--text-primary);
          padding: 80px 0 40px;
          border-top: 1px solid #F0F0F0;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.5rem;
        }
        .footer-divider {
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin: 0;
        }
        .brand-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .wordmark {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-decoration: none;
        }
        .wordmark-accent {
          font-size: 1.75rem;
          font-weight: 900;
          font-style: italic;
          color: #10B981;
          letter-spacing: -0.03em;
        }
        .wordmark-sub {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-top: 1px;
          opacity: 0.7;
        }
        .social-links {
          display: flex;
          gap: 1.25rem;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: #adb5bd;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          text-decoration: none;
        }
        .social-icon:hover {
          background: rgba(34, 197, 94, 0.1);
          color: var(--primary-green);
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.1);
        }
        
        .cta-section {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .footer-btn {
          padding: 0.85rem 2.5rem;
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
        }
        .advisor-text {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .footer-middle {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          padding: 3rem 0;
        }
        h4 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 0.85rem;
        }
        a {
          color: var(--text-gray);
          text-decoration: none;
          transition: var(--transition);
          font-size: 0.95rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 4px;
          display: inline-block;
        }
        a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--primary-green);
          transition: var(--transition);
        }
        a:hover {
          color: var(--primary-green);
        }
        a:hover:after {
          width: 100%;
        }
        .contact-prefix {
          color: var(--text-primary);
          font-weight: 600;
          margin-right: 0.5rem;
        }
        .email-link {
          color: #3b82f6 !important; /* Force blue for email as seen in image */
        }
        .email-link:after {
          background-color: #3b82f6 !important;
        }
        .address {
          color: var(--text-gray);
          line-height: 1.6;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .footer-bottom {
          padding: 30px 0 10px;
          text-align: center;
          color: #adb5bd;
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .footer-top { flex-direction: column; align-items: center; text-align: center; gap: 2rem; }
          .cta-section { align-items: center; }
          .footer-middle { grid-template-columns: 1fr; text-align: center; }
          .social-links { justify-content: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

