'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('course');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tabs = [
    { id: 'course', label: 'About the Course' },
    { id: 'delivery', label: 'About the Delivery' },
    { id: 'miscellaneous', label: 'Miscellaneous' }
  ];

  const faqData: Record<string, { q: string, a: string }[]> = {
    course: [
      { 
        q: 'What types of corporate training programs does Accredian offer?', 
        a: 'Accredian provides industry-specific, customizable training programs tailored to meet your organization\'s unique needs, covering domains like leadership, tech, data, and fintech.' 
      },
      { 
        q: 'What domain specializations are available?', 
        a: 'We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.' 
      }
    ],
    delivery: [
      { 
        q: 'Can the courses be customized for specific industries or teams?', 
        a: 'Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.' 
      },
      { 
        q: 'Who are the instructors for these programs?', 
        a: 'Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.' 
      },
      { 
        q: 'What formats are the programs delivered in?', 
        a: 'Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team’s preferences and requirements.' 
      }
    ],
    miscellaneous: [
      { 
        q: 'What is the ideal team size for corporate training?', 
        a: 'Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.' 
      },
      { 
        q: 'How do we get started with Accredian?', 
        a: 'Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.' 
      }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section" id="faqs">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="faq-container">
          <div className="faq-sidebar">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => { setActiveTab(tab.id); setOpenIndex(null); }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="faq-content">
            <div className="faq-list">
              {faqData[activeTab].map((faq, index) => (
                <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`${activeTab}-faq-panel-${index}`}
                    id={`${activeTab}-faq-trigger-${index}`}
                  >
                    <span>{faq.q}</span>
                    <span className="arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    className="faq-answer-wrapper"
                    id={`${activeTab}-faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`${activeTab}-faq-trigger-${index}`}
                  >
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="faq-cta-wrapper">
              <button className="btn-primary enquire-now-btn" aria-label="Explore programs for your team">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background: var(--bg-base);
        }
        .faq-container {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 4rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .faq-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .tab-btn {
          text-align: left;
          padding: 1.25rem 1.5rem;
          background: transparent;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-gray);
          cursor: pointer;
          transition: var(--transition);
          position: relative;
        }
        .tab-btn.active {
          background: var(--bg-base);
          color: var(--primary-green);
          border-color: transparent;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border-left: 6px solid var(--primary-green);
          border-radius: 4px 12px 12px 4px;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          border-bottom: 1px solid var(--border-light);
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          padding: 1.25rem 0;
          cursor: pointer;
          transition: color 0.2s;
        }
        .open .faq-question {
          color: var(--primary-green);
        }
        .arrow {
          transition: transform 0.4s ease;
          color: var(--text-gray);
        }
        .open .arrow {
          transform: rotate(180deg);
          color: var(--primary-green);
        }
        .faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease;
        }
        .open .faq-answer-wrapper {
          grid-template-rows: 1fr;
        }
        .faq-answer {
          overflow: hidden;
        }
        .faq-answer p {
          color: var(--text-gray);
          line-height: 1.7;
          font-size: 1rem;
          padding-bottom: 1.5rem;
        }
        .faq-cta-wrapper {
          margin-top: 3.5rem;
        }
        .enquire-now-btn {
          padding: 1rem 3rem;
        }

        @media (max-width: 900px) {
          .faq-container { grid-template-columns: 1fr; gap: 2rem; }
          .faq-sidebar { flex-direction: row; overflow-x: auto; padding-bottom: 0.5rem; }
          .tab-btn { white-space: nowrap; }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
