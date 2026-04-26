'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Next-Gen Expertise <br />
            <span className="text-primary-color">For Your Enterprise</span>
          </h1>
          <p className="hero-subtitle">
            Cultivate high-performance teams through expert learning.
          </p>
          
          <div className="hero-checklist">
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

          <button className="hero-btn btn-primary" aria-label="Book a demo for enterprise training">
            Book a Demo
          </button>
        </div>

        <div className="hero-image-container">
          <Image 
            src={IMAGES.heroVisual} 
            alt="Corporate Professionals" 
            className="hero-img"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding-top: 88px;
          padding-bottom: 60px;
          background: var(--bg-base);
          overflow: hidden;
          min-height: calc(100vh - 68px);
          display: flex;
          align-items: center;
        }
        .hero-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 4rem;
          width: calc(100% - 3rem);
          max-width: 1200px;
          margin: 0 auto;
          background: var(--bg-dark-accent);
          padding: 3rem 4rem;
          border-radius: 30px;
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 60px rgba(16, 185, 129, 0.15), inset 0 0 40px rgba(16, 185, 129, 0.05);
        }
        .hero-content {
          flex: 1.1;
          text-align: left;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .text-primary-color {
          color: var(--primary-green);
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-gray);
          margin-bottom: 2.5rem;
          max-width: 550px;
        }
        .hero-checklist {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .check-icon {
          color: #34A853;
          font-weight: 800;
          font-size: 1.1rem;
        }
        .hero-btn {
          padding: 0.85rem 2.5rem;
          font-size: 1.05rem;
        }
        .hero-image-container {
          flex: 0.9;
          position: relative;
          width: 100%;
          min-height: 320px;
          border-radius: 20px;
          overflow: hidden;
        }
        .hero-img {
          object-fit: cover;
          object-position: center;
        }

        @media (min-width: 1280px) {
          .hero-container {
            max-width: 1520px;
          }
        }
        @media (max-width: 1024px) {
          .hero { padding-top: 88px; min-height: auto; }
          .hero-container {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-image-container {
            order: -1;
            width: 100%;
            max-width: 500px;
            min-height: 300px;
          }
          .hero-checklist {
            align-items: center;
          }
        }
        @media (max-width: 480px) {
          .hero {
            padding-top: 76px;
            padding-bottom: 40px;
          }
          .hero-container {
            border-radius: 18px;
            padding: 1.5rem 1rem;
            gap: 1.5rem;
          }
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          .hero-checklist {
            margin-bottom: 1.8rem;
          }
          .check-item {
            font-size: 0.95rem;
          }
          .hero-btn {
            width: 100%;
          }
          .hero-image-container {
            min-height: 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;


