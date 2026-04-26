'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const AccredianEdge = () => {
  return (
    <section className="edge-section" id="accredian-edge">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Accredian Edge</h2>
          <p className="section-subtitle">Key Aspects of Our Strategic Training</p>
        </div>

        <div className="diagram-container">
          <div className="diagram-image-wrapper">
            <Image
              src={IMAGES.accredianEdge}
              alt="The Accredian Edge"
              fill
              className="diagram-img"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .edge-section {
          padding: 100px 0;
          background: #000000;
          overflow: hidden;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 2.5rem;
          color: var(--text-primary);
          margin-bottom: 10px;
          font-weight: 800;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-gray);
        }

        .diagram-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          background: var(--bg-dark-accent);
          padding: 3rem 4rem;
          border-radius: 30px;
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 60px rgba(16, 185, 129, 0.15), inset 0 0 40px rgba(16, 185, 129, 0.05);
        }
        .diagram-image-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 33.33%;
          border-radius: 20px;
          overflow: hidden;
        }
        .diagram-img {
          object-fit: contain;
          object-position: center;
        }
      `}</style>
    </section>
  );
};

export default AccredianEdge;
