'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const AudiencePanels = () => {
  const cards = [
    {
      title: 'Tech Professionals',
      desc: 'Upskill engineers in AI, Cloud, and Data Architecture.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <polyline points="8 21 12 17 16 21"/>
          <polyline points="9 9 11 11 15 7"/>
        </svg>
      )
    },
    {
      title: 'Non-Tech Professionals',
      desc: 'Master product management, design, and digital ops.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="9" y1="7" x2="15" y2="13"/>
          <line x1="15" y1="7" x2="9" y2="13"/>
          <polyline points="8 21 12 17 16 21"/>
        </svg>
      )
    },
    {
      title: 'Emerging Professionals',
      desc: 'Jumpstart careers with industry-ready certifications.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      )
    },
    {
      title: 'Senior Professionals',
      desc: 'Strategic leadership and executive management training.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    }
  ];

  return (
    <section className="audience-section" id="audience">
      <div className="container audience-container">
        <div className="audience-left">
          <h2 className="sub-title">Strategic Skill Enhancement</h2>
          <h1 className="main-title">Who Should Join?</h1>
          
          <div className="audience-img-wrapper">
             <Image 
              src={IMAGES.strategicSkillBanner}
              alt="Who Should Join" 
              className="audience-img"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="audience-checklist">
            <div className="check-item">
              <span className="check-icon">✓</span>
              <span>Tailored Solutions</span>
            </div>
            <div className="check-item">
              <span className="check-icon">✓</span>
              <span>Industry Insights</span>
            </div>
            <div className="check-item">
              <span className="check-icon">✓</span>
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>

        <div className="audience-right">
          <div className="icon-grid">
            {cards.map((card, index) => (
              <div key={index} className="icon-card">
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .audience-section {
          padding: 100px 0;
          background: #000000;
        }
        .audience-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .audience-left .sub-title {
          color: #10B981;
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .audience-left .main-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2.5rem;
        }
        .audience-img-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 60%;
          margin-bottom: 2.5rem;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .audience-img {
          object-fit: cover;
          object-position: center;
        }
        .audience-checklist {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .check-icon {
          color: #34A853;
          font-weight: 900;
          font-size: 1.25rem;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .icon-card {
          padding: 2.5rem 1.5rem;
          background: #000000;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .icon-card:hover {
          border-color: #10B981;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.1);
        }
        .card-icon {
          color: #10B981;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #10B981;
        }
        .card-desc {
          font-size: 0.95rem;
          color: #D1D5DB;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .audience-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .audience-left { text-align: center; }
          .audience-checklist { align-items: center; }
        }
        @media (max-width: 640px) {
          .icon-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default AudiencePanels;
