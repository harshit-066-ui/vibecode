'use client';

export default function Loading() {
  return (
    <main className="loading-screen" aria-live="polite" aria-busy="true">
      <p className="loading-text">Your website is loading, please wait.</p>

      <style jsx>{`
        .loading-screen {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-base);
          padding: 1rem;
        }

        .loading-text {
          color: var(--text-primary);
          font-size: clamp(1rem, 2.4vw, 1.4rem);
          font-weight: 600;
          text-align: center;
        }
      `}</style>
    </main>
  );
}
