import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import LocalSeoSection from './components/LocalSeoSection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Experience from './components/Experience';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    // Subtle GSAP scroll trigger reveals on key section headings
    const ctx = gsap.context(() => {
      gsap.utils.toArray('section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.96, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleExploreWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={mainRef}
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-[#121316] font-sans selection:bg-[#0055ff] selection:text-white"
    >
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero onExploreWork={handleExploreWork} />

        {/* Technical Marquee Strip */}
        <Marquee dark={false} />

        {/* About & Approach (Philosophy) */}
        <Philosophy />

        {/* Selected Projects */}
        <Projects />

        {/* Skills & Capabilities Matrix */}
        <Capabilities />

        {/* Local Software Development & UI/UX Leadership in Kozhikode */}
        <LocalSeoSection onOpenContact={() => setContactModalOpen(true)} />

        {/* Verified Endorsements & Peer Validations */}
        <Testimonials />

        {/* Frequently Asked Questions (FAQPage Schema Synced) */}
        <FaqSection />

        {/* Career Journey & Milestones */}
        <Experience />

        {/* Framed Contact / CTA Box */}
        <div id="contact">
          <CtaSection onOpenContact={() => setContactModalOpen(true)} />
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
