'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const ProgramsSection = () => {
  const cards = [
    {
      title: 'Program Specific',
      desc: 'Certificate, Executive, Post Graduate Certificate',
      image: IMAGES.programSpecific
    },
    {
      title: 'Industry Specific',
      desc: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      image: IMAGES.industrySpecific
    },
    {
      title: 'Topic Specific',
      desc: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      image: IMAGES.topicSpecific
    },
    {
      title: 'Level Specific',
      desc: 'Senior Leadership, Mid-Career Professionals, Freshers',
      image: IMAGES.levelSpecific
    }
  ];

  return (
    <section className="programs-section section" id="programs">
      <div className="container">
        <div className="section-header">

          <h2 className="section-title">Tailored Course Segmentation</h2>
          <p className="section-subtitle">Explore Custom-fit Courses Designed to Address Every Professional Focus</p>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="program-card card">
              <div className="image-wrapper">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill
                  className="card-img"
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .programs-section {
          background: var(--bg-dark-accent);
        }
        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .program-card {
           border-radius: 12px;
        }
        .image-wrapper {
          height: 200px;
          overflow: hidden;
          position: relative;
          border-radius: 12px 12px 0 0;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        
        .card-body {
          padding: 1.5rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-green);
          margin-bottom: 0.75rem;
        }
        .card-desc {
          font-size: 0.9rem;
          color: var(--text-gray);
          line-height: 1.5;
        }

        @media (max-width: 1200px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default ProgramsSection;

