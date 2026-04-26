'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const DomainExpertise = () => {
  const domains = [
    { title: 'Product & Innovation Hub', icon: IMAGES.icons.file },
    { title: 'Gen-AI Mastery', icon: IMAGES.icons.globe },
    { title: 'Leadership Elevation', icon: IMAGES.icons.window },
    { title: 'Tech & Data Insights', icon: IMAGES.icons.file },
    { title: 'Operations Excellence', icon: IMAGES.icons.window },
    { title: 'Digital Enterprise', icon: IMAGES.icons.globe },
    { title: 'Fintech Innovation Lab', icon: IMAGES.icons.file }
  ];

  return (
    <section className="domain-section" id="domain-expertise">
      <div className="container">
        <div className="section-header">

          <h2 className="section-title">Our Domain Expertise</h2>
          <p className="section-subtitle">Specialized Programs Designed to Fuel Innovation</p>
        </div>

        <div className="domain-grid">
          {domains.map((d, i) => (
            <div key={i} className={`domain-card ${i === 6 ? 'centered-last' : ''}`}>
              <div className="domain-icon">
                <Image src={d.icon} alt={d.title} width={32} height={32} />
              </div>
              <h3 className="domain-title">{d.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .domain-section {
          padding: 100px 0;
          background: #0F172A;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-gray);
        }
        .domain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .domain-card {
          background: var(--bg-dark-accent);
          border: 1px solid var(--border-light);
          padding: 2.5rem 1.5rem;
          border-radius: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        .domain-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-green);
        }
        .domain-icon {
          font-size: 2.5rem;
          background: var(--bg-base);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .domain-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .centered-last {
          grid-column: 2 / 3;
        }

        @media (max-width: 900px) {
          .domain-grid { grid-template-columns: repeat(2, 1fr); }
          .centered-last { grid-column: auto; }
        }
        @media (max-width: 600px) {
          .domain-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default DomainExpertise;
