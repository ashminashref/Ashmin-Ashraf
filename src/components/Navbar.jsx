import React, { useState } from 'react';
import { ME } from '../data/portfolioData';

export default function Navbar({
  currentPage = 'home',
  activeSection = 'home',
  theme = 'dark',
  onToggleTheme,
  onNavigate,
  onOpenContact,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page, sectionId = null) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <header className="fixed-nav-bar">
      <div className="fixed-nav-inner">
        {/* Left: Minimal Brand Logo */}
        <div className="flex items-center">
          <button
            type="button"
            className="logo flex items-baseline select-none focus:outline-none hover:opacity-80 transition-opacity"
            onClick={() => handleNavClick('home', 'home')}
            aria-label="Ashmin Home"
          >
            <span>ash</span>
            <i className="ml-0.5">min</i>
          </button>
        </div>

        {/* Center: Minimal Navigation Links (Normal Case, Rounded Pill Hover, Simple Animation) */}
        <nav
          className="hidden md:flex items-center gap-1.5"
          aria-label="Main Navigation"
        >
          {/* Home */}
          <button
            type="button"
            className={`nav-link ${
              currentPage === 'home' && activeSection === 'home' ? 'active' : ''
            }`}
            onClick={() => handleNavClick('home', 'home')}
          >
            Home
          </button>

          {/* Projects */}
          <button
            type="button"
            className={`nav-link flex items-center gap-1.5 ${
              currentPage === 'projects' ? 'active' : ''
            }`}
            onClick={() => handleNavClick('projects')}
          >
            <span>Projects</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[var(--accent-faint)] text-[var(--accent)] border border-[var(--accent-border)] leading-tight">
              9+
            </span>
          </button>

          {/* About (Clean & Minimal, only 'About') */}
          <button
            type="button"
            className={`nav-link ${
              currentPage === 'about' ? 'active' : ''
            }`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>

          {/* Quick Section Jumps on Home */}
          {currentPage === 'home' && (
            <>
              <button
                type="button"
                className={`nav-link ${
                  activeSection === 'skills' ? 'active' : ''
                }`}
                onClick={() => handleNavClick('home', 'skills')}
              >
                Skills
              </button>

              <button
                type="button"
                className={`nav-link ${
                  activeSection === 'experience' ? 'active' : ''
                }`}
                onClick={() => handleNavClick('home', 'experience')}
              >
                Experience
              </button>
            </>
          )}

          {/* Contact */}
          <button
            type="button"
            className={`nav-link ${
              activeSection === 'contact' ? 'active' : ''
            }`}
            onClick={() => handleNavClick('home', 'contact')}
          >
            Contact
          </button>
        </nav>

        {/* Right: Rounded Corner Buttons & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button (Rounded Full) */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--line)] bg-[var(--glass)] hover:border-[var(--accent-border)] hover:bg-[var(--glass-hover)] transition-all duration-200 cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e7c98a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f8b44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Download Resume (Rounded Corner Button) */}
          <a
            href={ME.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[var(--line)] bg-[var(--glass)] text-[var(--ink)] hover:border-[var(--accent-border)] hover:bg-[var(--glass-hover)] transition-all duration-200"
            aria-label="Download resume PDF"
          >
            <span>Resume</span>
            <span className="text-[10px] text-[var(--accent)]">↓</span>
          </a>

          {/* Hire Me CTA (Rounded Corner Button) */}
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent)] text-black hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
            aria-label="Open contact inquiry modal"
          >
            <span>Hire me →</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="md:hidden w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--glass)] flex items-center justify-center text-[var(--ink)] hover:bg-[var(--glass-hover)] transition-all duration-200 cursor-pointer"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Rounded Clean Design) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--line)] bg-[var(--bg)] px-4 py-4 flex flex-col gap-2 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--line)] text-xs text-[var(--faint)]">
            <span>Navigation</span>
            <span className="text-[var(--accent)] font-medium">Available</span>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-1">
            <button
              type="button"
              className={`nav-link w-full justify-between py-2 px-3 rounded-xl ${
                currentPage === 'home' && activeSection === 'home' ? 'active' : ''
              }`}
              onClick={() => handleNavClick('home', 'home')}
            >
              <span>Home</span>
              <span className="text-xs text-[var(--faint)]">01</span>
            </button>

            <button
              type="button"
              className={`nav-link w-full justify-between py-2 px-3 rounded-xl ${
                currentPage === 'projects' ? 'active' : ''
              }`}
              onClick={() => handleNavClick('projects')}
            >
              <span>Projects (9+)</span>
              <span className="text-xs text-[var(--accent)]">Work</span>
            </button>

            <button
              type="button"
              className={`nav-link w-full justify-between py-2 px-3 rounded-xl ${
                currentPage === 'about' ? 'active' : ''
              }`}
              onClick={() => handleNavClick('about')}
            >
              <span>About</span>
              <span className="text-xs text-[var(--faint)]">03</span>
            </button>

            <button
              type="button"
              className={`nav-link w-full justify-between py-2 px-3 rounded-xl ${
                activeSection === 'contact' ? 'active' : ''
              }`}
              onClick={() => handleNavClick('home', 'contact')}
            >
              <span>Contact</span>
              <span className="text-xs text-[var(--faint)]">04</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[var(--line)] grid grid-cols-2 gap-2 mt-1">
            <a
              href={ME.resumeUrl}
              download
              className="py-2 px-3 rounded-full border border-[var(--line)] bg-[var(--glass)] text-xs text-center font-medium text-[var(--ink)] hover:bg-[var(--glass-hover)] transition-all"
            >
              Resume (PDF)
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="py-2 px-3 rounded-full bg-[var(--accent)] text-black text-xs text-center font-semibold hover:opacity-90 transition-all"
            >
              Hire me →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
