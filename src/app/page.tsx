'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import TrustBar from '@/components/TrustBar';
import AccredianEdge from '@/components/AccredianEdge';
import CATFramework from '@/components/CATFramework';
import ProcessTimeline from '@/components/ProcessTimeline';
import ProgramsSection from '@/components/ProgramsSection';
import AudiencePanels from '@/components/AudiencePanels';
import DomainExpertise from '@/components/DomainExpertise';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const finishLoading = () => setIsPageLoading(false);

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
    }

    return () => {
      window.removeEventListener('load', finishLoading);
    };
  }, []);

  useEffect(() => {
    if (isPageLoading) return;

    const sections = Array.from(document.querySelectorAll('main section'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => {
      section.classList.add('reveal-section');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isPageLoading]);

  if (isPageLoading) {
    return (
      <main className="loading-screen" aria-live="polite" aria-busy="true">
        <p className="loading-text">website is loading please wait</p>
      </main>
    );
  }

  return (
    <main 
      className="main-layout" 
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const trigger = target.closest('.btn-primary, [data-open-lead-modal="true"]') as HTMLElement | null;
        if (trigger && !('disabled' in trigger && (trigger as HTMLButtonElement).disabled)) {
          openModal();
        }
      }}
    >
      <Navbar />
      
      <Hero />
      <StatsSection />
      <TrustBar />
      <AccredianEdge />
      <DomainExpertise />
      <CATFramework />
      <ProcessTimeline />
      
      {/* Additional sections not explicitly in nav but important for page structure */}
      <ProgramsSection />
      <AudiencePanels />

      <FAQSection />
      <TestimonialsSection />
      <CTABanner />

      <Footer />

      <button
        type="button"
        className="floating-cta"
        data-open-lead-modal="true"
        aria-label="Talk to us about enterprise training"
      >
        Talk to Us
      </button>

      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
