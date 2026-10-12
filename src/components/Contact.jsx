import React, { useState } from 'react';
import { ME } from '../data/portfolioData';
import { scrollToSection } from '../utils/scroll';

const Arrow = ({ d }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

export default function Contact({ onOpenContact }) {
  const [emailInput, setEmailInput] = useState('');

  const handleSend = () => {
    const subject = encodeURIComponent('Hello from your portfolio');
    const body = encodeURIComponent(
      `Hi Ashmin,\n\nI would love to connect with you regarding a project.\nMy email is: ${emailInput || '[your email]'}`
    );
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
  };

  const socials = [
    { label: 'GH', href: ME.links.github, aria: 'GitHub' },
    { label: 'Be', href: ME.links.behance, aria: 'Behance' },
    { label: 'in', href: ME.links.linkedin, aria: 'LinkedIn' },
    { label: 'X', href: ME.links.x, aria: 'X Twitter' },
  ];

  const footerNav = [
    { label: 'Home', id: 'home' },
    { label: 'Sides', id: 'sides' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div className="frame contact-frame" id="contact" aria-label="Contact Section">
      {/* Top Contact Row */}
      <div className="contact">
        {/* Left Side: Monogram Label & Clean Availability Pill */}
        <div className="cl">
          <div className="lab">
            <b>(am)</b> Contact me
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-[var(--mute)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span>Open for collaborations &amp; new projects</span>
          </div>
        </div>

        {/* Right Side: Lead Text, Big Headline & Interactive Touch Button */}
        <div className="cr">
          <div className="lead">Let's start</div>
          <h2 className="big">
            Build it<em>Together</em>
          </h2>
          <a
            className="touch"
            href={`mailto:${ME.email}`}
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
          >
            Get in touch{' '}
            <span className="go">
              <Arrow d="M3 6h6M6.5 3.5 9 6 6.5 8.5" />
            </span>
          </a>
        </div>
      </div>

      {/* Metadata Row */}
      <div className="meta border-none">
        <span>• Design + Development</span>
        <span>• Available worldwide</span>
      </div>

      {/* Two Glass Footer Cards */}
      <div className="foot">
        {/* Left Glass Card */}
        <div
          className="glass fl"
          onMouseMove={handleMouseMove}
        >
          <div>
            <a
              className="logo"
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              aria-label="Back to top"
            >
              ash<i>min</i>
            </a>
            <p>
              I design and build for the web. Open for freelance projects and <em>collaborations.</em>
            </p>
          </div>

          {/* Giant Monogram Watermark Background */}
          <div className="mono-bg" aria-hidden="true">
            am
          </div>

          {/* Bottom Row */}
          <div className="fbot">
            <small>Ashmin © 2026. All Rights Reserved</small>
            <div className="fnav">
              {footerNav.map((item) => (
                <a
                  key={item.id}
                  className="pill"
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Glass Card */}
        <div
          className="glass fr"
          onMouseMove={handleMouseMove}
        >
          <div>
            <h4>
              Find me <br />online
            </h4>
            <div className="socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="soc"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.aria}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Email Field */}
          <div className="news">
            <label htmlFor="newsletter-email">✉ Say hello</label>
            <div className="field">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                aria-label="Your email"
              />
              <button
                type="button"
                aria-label="Send email"
                onClick={handleSend}
              >
                <Arrow d="M3 6h6M6.5 3.5 9 6 6.5 8.5" />
              </button>
            </div>
            <small>This opens your mail app with a message to me.</small>
          </div>
        </div>
      </div>
    </div>
  );
}
