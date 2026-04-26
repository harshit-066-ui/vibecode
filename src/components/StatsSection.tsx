'use client';

import React from 'react';

const StatsSection = () => {
  const stats = [
    { 
      value: '10K+', 
      label: 'Professionals Trained For Exceptional Career Success' 
    },
    { 
      value: '200+', 
      label: 'Sessions Delivered With Unmatched Learning Excellence' 
    },
    { 
      value: '5K+', 
      label: 'Active Learners Engaged In Dynamic Courses' 
    }
  ];

  return (
    <section className="stats-section section" id="track-record">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Track Record</h2>
          <p className="section-subtitle">The Numbers Behind Our Success</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <h3 className="stat-value">{s.value}</h3>
              <p className="stat-desc">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .stats-section {
          background: var(--bg-base);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .stat-card {
          background: var(--bg-dark-accent);
          border-radius: 24px;
          padding: 3.5rem 2rem;
          text-align: center;
          transition: var(--transition);
        }
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.1);
        }
        .stat-value {
          font-size: 4rem;
          font-weight: 800;
          color: var(--primary-green);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .stat-desc {
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 600;
          line-height: 1.4;
          max-width: 250px;
          margin: 0 auto;
        }
        @media (max-width: 991px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-value { font-size: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;


