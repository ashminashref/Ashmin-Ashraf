import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facets from './components/Facets';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import { scrollToSection } from './utils/scroll';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'projects' | 'about'
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Synchronize theme with document element classes
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync state with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#/projects' || hash === '#projects') {
        setCurrentPage('projects');
      } else if (hash === '#/about' || hash === '#about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Page routing handler
  const handleNavigate = useCallback((page, sectionId = null) => {
    setCurrentPage(page);

    if (page === 'projects') {
      window.location.hash = '#/projects';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.location.hash = '#/about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '#/';
      if (sectionId) {
        setTimeout(() => {
          scrollToSection(null, sectionId);
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  // Initialize Lenis smooth scroll and GSAP entrance animations
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenisInstance = null;
    let rafCallback = null;

    if (!prefersReducedMotion) {
      try {
        lenisInstance = new Lenis({
          lerp: 0.085,
          smoothWheel: true,
        });
        window.__lenis = lenisInstance;

        lenisInstance.on('scroll', ScrollTrigger.update);
        rafCallback = (time) => lenisInstance.raf(time * 1000);
        gsap.ticker.add(rafCallback);
        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        console.warn('Lenis smooth scroll failed to initialize:', err);
        lenisInstance = null;
      }
    }

    // GSAP Entrance Timeline Animation on initial load
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('.fixed-nav-bar', { y: -24, opacity: 0, duration: 1 })
        .from('.badge', { opacity: 0, y: 10, duration: 0.8 }, '<0.1')
        .from('.hw > span', { yPercent: 118, duration: 1.25, stagger: 0.06 }, '<0.1')
        .from('.hero-sub', { opacity: 0, y: 14, duration: 0.9 }, '-=0.7')
        .from('.facets-vp', { opacity: 0, y: 80, duration: 1.4 }, '-=0.9')
        .from('.row-wrap', { opacity: 0, duration: 1.2, stagger: 0.15 }, '-=0.9');
    }, rootRef);

    return () => {
      ctx.revert();
      if (lenisInstance) {
        if (rafCallback) gsap.ticker.remove(rafCallback);
        lenisInstance.destroy();
        window.__lenis = null;
      }
    };
  }, []);

  // IntersectionObserver for tracking active section on Home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sectionIds = ['home', 'sides', 'work', 'skills', 'experience', 'testimonials', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -45% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  // Global mousemove for .glass radial cursor spotlight
  useEffect(() => {
    const handlePointerMove = (e) => {
      const glassCard = e.target.closest && e.target.closest('.glass');
      if (!glassCard) return;
      const rect = glassCard.getBoundingClientRect();
      glassCard.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      glassCard.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    document.addEventListener('pointermove', handlePointerMove);
    return () => document.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <main
      ref={rootRef}
      className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--selection-bg)] pt-[60px]"
    >
      {/* Fixed Top Unrounded Minimalist Navbar with Theme Switcher */}
      <Navbar
        currentPage={currentPage}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* PAGE VIEW: HOME */}
      {currentPage === 'home' && (
        <>
          {/* Hero Frame containing Hero Headline & Facets Carousel */}
          <div className="frame hero-frame">
            <Hero />
            <Facets />
          </div>

          {/* Infinite Work Marquee Grid */}
          <Work onSelectTile={(tile) => setSelectedProject(tile)} />

          {/* Skills & Dual Craft Section with SVG tool icons */}
          <Skills onExploreArsenal={() => handleNavigate('about', 'arsenal')} />

          {/* Career Journey & Milestones */}
          <Experience />

          {/* Peer & Lead Recommendations */}
          <Testimonials />

          {/* Contact & Footer Frame */}
          <Contact onOpenContact={() => setContactModalOpen(true)} />
        </>
      )}

      {/* PAGE VIEW: DEDICATED PROJECTS PAGE */}
      {currentPage === 'projects' && (
        <>
          <ProjectsPage
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenContact={() => setContactModalOpen(true)}
          />
          <Contact onOpenContact={() => setContactModalOpen(true)} />
        </>
      )}

      {/* PAGE VIEW: DEDICATED ABOUT & ARSENAL PAGE */}
      {currentPage === 'about' && (
        <>
          <AboutPage onOpenContact={() => setContactModalOpen(true)} />
          <Contact onOpenContact={() => setContactModalOpen(true)} />
        </>
      )}

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Quick Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </main>
  );
}
