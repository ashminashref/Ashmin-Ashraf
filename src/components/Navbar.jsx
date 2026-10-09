import React, { useState, useEffect } from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRight, Menu, X, MapPin } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const calLink = 'https://cal.com/ashmin-ashraf/schedule-meeting?user=ashmin-ashraf';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Journey' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-[#e5e7eb] shadow-xs'
          : 'bg-white border-[#e5e7eb]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-2 sm:gap-3 group min-w-0"
        >
          {/* Stylized Crosshair Emblem from Aeye */}
          <div className="relative w-8 h-8 shrink-0 flex items-center justify-center bg-black text-white group-hover:bg-[#0055ff] transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 2h2v7h7v2h-7v7h-2v-7H4v-2h7V2z" />
              <circle cx="12" cy="12" r="1.5" fill="#0055ff" className="group-hover:fill-white" />
            </svg>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-black uppercase truncate">
                ASHMIN ASHRAF
              </span>
              <span className="hidden sm:inline text-[10px] font-mono px-1.5 py-0.2 bg-[#f3f4f6] text-[#4b5563] border border-[#e5e7eb]">
                PORTFOLIO
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#6b7280] tracking-tight truncate">
              DESIGNER • FULL-STACK DEVELOPER
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 border border-[#e5e7eb] bg-[#fafafa] p-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-[#4b5563] hover:text-black hover:bg-white'
                }`}
              >
                {isActive && <span className="text-[#0055ff]">&lt;</span>}
                <ScrambleText text={link.label} speed={25} duration={350} />
                {isActive && <span className="text-[#0055ff]">&gt;</span>}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Let's Connect Button via Cal.com & Location */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-[#6b7280]">
            <MapPin className="w-3 h-3 text-[#0055ff]" />
            <span>KOZHIKODE, KERALA</span>
          </div>

          <a
            href={calLink}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold border border-black bg-black text-white hover:bg-[#0055ff] hover:border-[#0055ff] transition-all"
          >
            <ScrambleText text="LET'S CONNECT" speed={25} duration={400} />
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-black text-black hover:bg-[#f3f4f6] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-white px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-[#f3f4f6] text-xs font-mono text-[#6b7280]">
            <span>LOCATION</span>
            <span className="text-black font-semibold">KOZHIKODE, KERALA</span>
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2.5 text-xs font-mono uppercase tracking-wider flex items-center justify-between cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-black text-white font-semibold'
                    : 'text-[#1a1a1a] hover:bg-[#f3f4f6]'
                }`}
              >
                <span>{link.label}</span>
                <span className={isActive ? 'text-white' : 'text-[#0055ff]'}>&gt;</span>
              </button>
            );
          })}
          <div className="pt-2 grid grid-cols-1 gap-2">
            <a
              href={calLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#0055ff] text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <span>SCHEDULE CALL (CAL.COM)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            {onOpenContact && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 border border-black bg-white text-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#f3f4f6] transition-colors cursor-pointer"
              >
                <span>SEND DIRECT INQUIRY</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
