'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const CATFramework = () => {
  return (
    <section className="cat-section section" id="cat">
      <div className="container">
        <div className="diagram-container">
          {/* Aspect-ratio wrapper: 1460 × 630 ≈ ~2.32:1 */}
          <div className="img-ratio-box">
            <Image
              src={IMAGES.catFramework}
              alt="The CAT Framework"
              fill
              className="diagram-img"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .cat-section {
          background: var(--bg-base);
          padding: 80px 0;
        }
        .diagram-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          background: var(--bg-dark-accent);
          padding: 2.5rem 3rem;
          border-radius: 30px;
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 60px rgba(16, 185, 129, 0.15),
            inset 0 0 40px rgba(16, 185, 129, 0.05);
          box-sizing: border-box;
        }
        /* Maintain the natural aspect ratio of the CAT framework image (~2.32:1) */
        .img-ratio-box {
          position: relative;
          width: 100%;
          /* padding-top = (height / width) * 100 = (630 / 1460) * 100 ≈ 43.15% */
          padding-top: 43.15%;
          border-radius: 16px;
          overflow: hidden;
        }
        .diagram-img {
          object-fit: contain;
          object-position: center;
        }
        @media (max-width: 768px) {
          .diagram-container {
            padding: 1.5rem;
            border-radius: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default CATFramework;
