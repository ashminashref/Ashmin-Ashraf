import React, { useState, useEffect } from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRight, Menu, X, FileText, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const githubLink = 'https://github.com/ashminashref/';
  const linkedinLink = 'https://www.linkedin.com/in/ashmin-ashraf/';
  const resumeLink = '/resume.pdf';
  const emailLink = 'mailto:ashminashraf07@gmail.com';

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
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
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
        
        {/* Brand: Logo + Name ("ASH") & Portfolio */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-2.5 group min-w-0 cursor-pointer"
        >
          {/* Modern Geometric Logo Mark */}
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center border border-black group-hover:bg-[#0055ff] group-hover:border-[#0055ff] transition-all relative shrink-0 shadow-xs">
            <svg
              className="w-4.5 h-4.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3.5L4.5 19.5H8.5L10.5 15H13.5L15.5 19.5H19.5L12 3.5Z"
                fill="currentColor"
              />
              <path
                d="M11.2 12.5L12 9.5L12.8 12.5H11.2Z"
                fill="#121316"
                className="group-hover:fill-[#0055ff] transition-colors"
              />
              <rect x="18" y="3.5" width="2.5" height="2.5" fill="#0055ff" className="group-hover:fill-white transition-colors" />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-black uppercase group-hover:text-[#0055ff] transition-colors">
              ASH
            </span>
            <span className="text-[#9ca3af] font-mono text-xs">/</span>
            <span className="text-xs font-mono text-[#6b7280] uppercase tracking-wider">
              PORTFOLIO
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 border border-[#e5e7eb] bg-[#fafafa] p-1">
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

        {/* Right Action Area: Social Links + Resume + Connect Now */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
          {/* Direct Social Links: GitHub & LinkedIn */}
          <div className="flex items-center gap-1 border border-[#e5e7eb] bg-[#fafafa] p-1">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-[#4b5563] hover:text-black hover:bg-white border border-transparent hover:border-[#e5e7eb] transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-[#4b5563] hover:text-[#0055ff] hover:bg-white border border-transparent hover:border-[#e5e7eb] transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href={resumeLink}
            download="Ashmin_Ashraf_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold border border-[#e5e7eb] bg-[#fafafa] hover:bg-white hover:border-black text-[#121316] transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#0055ff]" />
            <span>RESUME</span>
          </a>

          {/* Connect Now Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold bg-black text-white hover:bg-[#0055ff] transition-all cursor-pointer shadow-xs"
          >
            <span>CONNECT NOW</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={resumeLink}
            download="Ashmin_Ashraf_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold bg-black text-white hover:bg-[#0055ff] transition-colors flex items-center gap-1"
          >
            <FileText className="w-3 h-3" />
            <span>RESUME</span>
          </a>

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
        <div className="lg:hidden border-t border-[#e5e7eb] bg-white px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#f3f4f6]">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 border border-[#e5e7eb] bg-[#f9f9fb] text-[#121316] text-xs font-mono flex items-center justify-center gap-2 hover:border-black"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 border border-[#e5e7eb] bg-[#f9f9fb] text-[#121316] text-xs font-mono flex items-center justify-center gap-2 hover:border-[#0055ff] hover:text-[#0055ff]"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0055ff]" />
              <span>LINKEDIN</span>
            </a>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-3 py-2 text-xs font-mono uppercase tracking-wider flex items-center justify-between cursor-pointer transition-colors ${
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-[#0055ff] transition-colors cursor-pointer"
            >
              <span>CONNECT NOW</span>
            </button>

            <a
              href={emailLink}
              className="w-full py-2.5 border border-[#d1d5db] bg-[#fafafa] text-[#121316] text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-white hover:border-black transition-colors"
            >
              <span>EMAIL</span>
              <ArrowUpRight className="w-4 h-4 text-[#0055ff]" />
            </a>

            <a
              href={resumeLink}
              download="Ashmin_Ashraf_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 border border-[#e5e7eb] text-[#4b5563] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 hover:text-black transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
