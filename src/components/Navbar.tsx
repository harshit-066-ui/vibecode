'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // Scroll spy logic
      const sections = ['home', 'track-record', 'clients', 'accredian-edge', 'cat', 'how-it-works', 'faqs', 'testimonials'];
      let current = '';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#track-record', label: 'Stats', id: 'track-record' },
    { href: '#clients', label: 'Clients', id: 'clients' },
    { href: '#accredian-edge', label: 'Accredian Edge', id: 'accredian-edge' },
    { href: '#cat', label: 'CAT', id: 'cat' },
    { href: '#how-it-works', label: 'How It Works', id: 'how-it-works' },
    { href: '#faqs', label: 'FAQs', id: 'faqs' },
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <header className={`header-fixed ${scrolled ? 'scrolled' : ''}`}>
      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="container nav-container">
          <Link href="/" className="logo-group">
            <span className="wordmark">
              <span className="wordmark-accent">Accredian</span>
              <span className="wordmark-sub">Enterprise</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links desktop-only">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href} 
                className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>



          {/* Mobile Hamburger */}
          <button 
            className="hamburger-btn mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu" id="mobile-nav-menu">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href} 
                className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}

          </div>
        )}
      </nav>

      <style jsx>{`
        .header-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          background: var(--bg-base);
          transition: var(--transition);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        .header-fixed.scrolled {
          box-shadow: 0 4px 30px rgba(16, 185, 129, 0.15);
        }
        .main-nav {
          padding: 1rem 0;
          position: relative;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-group {
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .wordmark {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-decoration: none;
        }
        .wordmark-accent {
          font-size: 1.55rem;
          font-weight: 900;
          font-style: italic;
          color: #10B981;
          letter-spacing: -0.03em;
        }
        .wordmark-sub {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-top: -1px;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        .nav-item {
          text-decoration: none;
          color: var(--text-gray);
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition);
          position: relative;
          padding-bottom: 4px;
        }
        .nav-item:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--primary-green);
          transition: var(--transition);
        }
        .nav-item:hover, .nav-item.active {
          color: var(--primary-green);
        }
        .nav-item:hover:after, .nav-item.active:after {
          width: 100%;
        }
        .nav-cta {
          padding: 0.65rem 1.75rem;
          font-size: 0.9rem;
        }
        
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }
        .mobile-menu {
          display: none;
        }

        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .hamburger-btn { display: block; }
          
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-base);
            padding: 1rem 1.5rem 2rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-top: 1px solid var(--border-light);
          }
          .mobile-nav-item {
            padding: 1rem 0;
            text-decoration: none;
            color: var(--text-gray);
            font-weight: 600;
            border-bottom: 1px solid var(--border-light);
          }
          .mobile-nav-item.active {
            color: var(--primary-green);
          }
          .mobile-cta {
            margin-top: 1.5rem;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
