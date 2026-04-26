'use client';

import React from 'react';

const ProcessTimeline = () => {
  const steps = [
    {
      number: '1',
      title: 'Skill Gap Analysis',
      desc: 'Assess team skill gaps and developmental needs.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      number: '2',
      title: 'Customized Training Plan',
      desc: 'Create a tailored roadmap addressing organizational goals.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      number: '3',
      title: 'Flexible Program Delivery',
      desc: 'Deliver adaptable programs aligned with industry and organizational needs.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      )
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How We Deliver Results That Matter?</h2>
          <p className="section-subtitle">A Structured Three-Step Approach to Skill Development</p>
        </div>

        <div className="steps-row">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-header">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">{step.number}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how-it-works {
          padding: 100px 0;
          background: #000000;
        }
        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: var(--text-primary);
        }
        .section-subtitle {
          font-size: 1.15rem;
          color: var(--text-gray);
        }
        .steps-row {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .step-card {
          background: var(--bg-dark-accent);
          border-radius: 20px;
          padding: 3rem 2rem;
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease;
          position: relative;
          border: 1px solid var(--border-light);
        }
        .step-card:hover {
          transform: translateY(-10px);
        }
        .step-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }
        .step-icon {
          color: #10B981;
          margin-bottom: 1rem;
        }
        .step-number {
          background: #10B981;
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
        }
        .step-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .step-desc {
          font-size: 1.05rem;
          color: var(--text-gray);
          line-height: 1.5;
        }
        
        @media (max-width: 1200px) {
          .step-card { width: 340px; }
        }
        @media (max-width: 768px) {
          .step-card { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ProcessTimeline;
