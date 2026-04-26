'use client';

import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, tags }) => {
  return (
    <div className="card">
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <button className="learn-more">Learn More →</button>

      <style jsx>{`
        .card {
          padding: 2rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          background: #000000;
        }
        .icon-box {
          font-size: 2.25rem;
          margin-bottom: 1.5rem;
        }
        h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 700;
        }
        p {
          color: #4B5563;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tag {
          font-size: 0.7rem;
          background: #F3F4F6;
          color: #4B5563;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          font-weight: 500;
        }
        .learn-more {
          background: none;
          color: #10B981;
          font-weight: 600;
          text-align: left;
          padding: 0;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default ProgramCard;
