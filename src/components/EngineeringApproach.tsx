'use client';

const EngineeringApproach = () => {
  return (
    <section className="eng-approach">
      <div className="container approach-container">
        <h3 className="eng-title">Engineering Philosophy</h3>
        <div className="eng-points">
          <div className="eng-item">
            <span className="bullet">•</span>
            <span><strong>Scalable Architecture:</strong> Component-driven, App Router optimized Next.js structure.</span>
          </div>
          <div className="eng-item">
            <span className="bullet">•</span>
            <span><strong>Clean UI/UX Systems:</strong> Refined micro-interactions with consistent 8px/4px spacing scales.</span>
          </div>
          <div className="eng-item">
            <span className="bullet">•</span>
            <span><strong>Robust Data Flow:</strong> Controlled state management with native API integration and validation.</span>
          </div>
        </div>
        <p className="eng-footer">Built with a focus on performance, maintainability, and user-centric design.</p>
      </div>

      <style jsx>{`
        .eng-approach {
          background: #0F172A; /* Slate 900 */
          color: #0F172A; /* Slate 50 */
          padding: 3rem 0;
          font-family: var(--font-inter, 'Inter', sans-serif);
          border-top: 1px solid #1E293B;
          border-bottom: 4px solid var(--primary-green);
        }
        .approach-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .eng-title {
          font-size: 1.15rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #94A3B8; /* Slate 400 */
          margin-bottom: 2rem;
          font-weight: 700;
        }
        .eng-points {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .eng-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.25rem 1.75rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.95rem;
          max-width: 320px;
          text-align: left;
          transition: all 0.3s ease;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .eng-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary-green);
          transform: translateY(-2px);
        }
        .bullet {
          color: var(--primary-green);
          font-size: 1.5rem;
          line-height: 1;
        }
        .eng-item strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }
        .eng-item span:last-child {
          color: #CBD5E1; /* Slate 300 */
          line-height: 1.5;
        }
        .eng-footer {
          font-size: 0.85rem;
          color: #64748B; /* Slate 500 */
          font-style: italic;
        }
        @media (max-width: 1024px) {
          .eng-points { flex-direction: column; align-items: center; }
          .eng-item { max-width: 100%; width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default EngineeringApproach;
