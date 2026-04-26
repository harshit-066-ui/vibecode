'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const TrustBar = () => {
  const logos = IMAGES.clientLogos;

  return (
    <section className="clients-section" id="clients">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Proven Partnerships</h2>
          <p className="section-subtitle">Successful Collaborations With the Industry’s Best</p>
        </div>
        
        <div className="logos-row">
          {logos.map((l, i) => (
            <div key={i} className="logo-item">
              <Image
                src={l.url}
                alt={l.name}
                width={160}
                height={64}
                className="logo-img"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
        <p className="trust-note">
          Trusted by teams at HCL, IBM, Reliance, ADP and more
        </p>
      </div>
      <style jsx>{`
        .clients-section {
          padding: 80px 0;
          background: #0F172A;
        }
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .section-title {
          font-size: 2.5rem;
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: #4B5563;
        }
        .logos-row {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 2rem;
        }
        .trust-note {
          margin-top: 1.75rem;
          text-align: center;
          color: var(--text-gray);
          font-size: 0.95rem;
        }
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 12px;
          padding: 16px 28px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
        }
        .logo-item:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }
        .logo-img {
          width: auto;
          height: 44px;
          max-width: 140px;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 768px) {
          .logos-row {
            gap: 1.5rem;
          }
          .logo-img {
            height: 32px;
          }
          .logo-item {
            padding: 12px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustBar;

