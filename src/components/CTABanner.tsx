'use client';

import React from 'react';

const CTABanner = () => {
  return (
    <section className="cta-banner-section section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">Want to Learn More About Our Training Solutions?</h2>
            <p className="cta-subtitle">Get Expert Guidance for Your Team's Success!</p>
          </div>
          <div className="cta-action">
            <button className="btn-primary cta-btn" aria-label="Talk to an expert about enterprise training">
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-banner-section {
          padding: 60px 0;
          background: var(--bg-base, #0B0F0C);
        }
        .cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-dark-accent, #141A19);
          padding: 4rem 5rem;
          border-radius: 24px;
          border: 1px solid rgba(34, 197, 94, 0.2);
          box-shadow: 0 10px 40px rgba(34, 197, 94, 0.05), inset 0 0 40px rgba(34, 197, 94, 0.02);
          gap: 2rem;
          position: relative;
          overflow: hidden;
        }
        .cta-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
          z-index: 0;
        }
        .cta-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .cta-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text-primary, #E5E7EB);
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }
        .cta-subtitle {
          font-size: 1.15rem;
          color: var(--text-gray, #9CA3AF);
        }
        .cta-action {
          position: relative;
          z-index: 1;
        }
        .cta-btn {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          background: var(--primary-green, #22C55E);
          color: #0B0F0C;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .cta-btn:hover {
          background: #4ADE80;
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
        }

        @media (max-width: 900px) {
          .cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 3rem 2rem;
          }
        }
        @media (max-width: 480px) {
          .cta-title {
            font-size: 1.7rem;
          }
          .cta-subtitle {
            font-size: 1rem;
          }
          .cta-btn {
            width: 100%;
            padding: 0.9rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CTABanner;
