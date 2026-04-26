'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    [
      {
        logo: IMAGES.clientLogos[1].url, // HCL
        name: 'HCL',
        quote: 'The training programs provided by Accredian are exceptional. The CAT framework has significantly improved our team\'s productivity.'
      },
      {
        logo: IMAGES.clientLogos[3].url, // CRIF
        name: 'CRIF',
        quote: 'Partnering with Accredian has been a game-changer for our digital transformation initiatives.'
      }
    ],
    [
      {
        logo: IMAGES.clientLogos[0].url, // Reliance
        name: 'Reliance',
        quote: 'The depth of expertise and the flexible delivery models make Accredian our preferred partner for skill enhancement.'
      },
      {
        logo: IMAGES.clientLogos[4].url, // ADP
        name: 'ADP',
        quote: 'We have seen measurable growth in our workforce\'s technical competencies since we started our collaboration with Accredian.'
      }
    ]
  ];

  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Testimonials from Our Partners</h2>
          <p className="section-subtitle">What Our Clients Are Saying</p>
        </div>

        <div className="slider-wrapper">
          <div className="testimonials-grid">
            {testimonials[currentPage].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="card-header">
                  <Image src={t.logo} alt={t.name} width={120} height={40} className="client-logo" />
                </div>
                <div className="card-body">
                  <p className="quote">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination-dots">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${currentPage === i ? 'active' : ''}`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--bg-base);
        }
        .slider-wrapper {
          max-width: 1100px;
          margin: 0 auto;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
          transition: opacity 0.3s ease;
        }
        .testimonial-card {
          background: var(--bg-base);
          border-radius: 20px;
          padding: 3.5rem;
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-height: 280px;
          transition: var(--transition);
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .client-logo {
          height: 40px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.7;
          transition: var(--transition);
        }
        .testimonial-card:hover .client-logo {
          filter: grayscale(0);
          opacity: 1;
        }
        .quote {
          font-size: 1.1rem;
          color: var(--text-primary);
          line-height: 1.7;
          font-style: italic;
          font-weight: 500;
        }
        .pagination-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #E0E0E0;
          cursor: pointer;
          transition: var(--transition);
        }
        .dot.active {
          background: var(--primary-green);
          width: 28px;
          border-radius: 10px;
        }

        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;

