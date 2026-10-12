import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { FACETS, ME } from '../data/portfolioData';

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

export default function Facets() {
  const [activeIdx, setActiveIdx] = useState(2); // Center 'Ashmin' by default
  const vpRef = useRef(null);
  const trackRef = useRef(null);
  const isFirstRender = useRef(true);

  const getPosition = (idx) => {
    if (!trackRef.current || !vpRef.current || !trackRef.current.children[0]) return 0;
    const card = trackRef.current.children[0];
    const gap = parseFloat(getComputedStyle(trackRef.current).columnGap) || 20;
    return vpRef.current.clientWidth / 2 - card.offsetWidth / 2 - idx * (card.offsetWidth + gap);
  };

  useLayoutEffect(() => {
    if (!trackRef.current || !vpRef.current) return;
    const duration = isFirstRender.current ? 0 : 0.95;
    isFirstRender.current = false;

    gsap.to(trackRef.current, {
      x: getPosition(activeIdx),
      duration,
      ease: 'power3.out',
      overwrite: true,
    });

    gsap.to(trackRef.current.children, {
      opacity: (k) => (k === activeIdx ? 1 : 0.42),
      scale: (k) => (k === activeIdx ? 1 : 0.93),
      duration: duration ? 0.7 : 0,
      ease: 'power2.out',
    });
  }, [activeIdx]);

  useEffect(() => {
    const handleResize = () => {
      if (!trackRef.current) return;
      gsap.set(trackRef.current, { x: getPosition(activeIdx) });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIdx]);

  const socialLabels = [
    { label: 'GH', href: ME.links.github },
    { label: 'Be', href: ME.links.behance },
    { label: 'IG', href: ME.links.linkedin },
  ];

  return (
    <div className="facets-vp" id="sides" aria-label="Facets Carousel">
      {/* Left Arrow Button */}
      <button
        type="button"
        className="arrow l"
        aria-label="Previous facet"
        disabled={activeIdx === 0}
        onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
      >
        <Arrow d="M8 1.5 3.5 6 8 10.5" />
      </button>

      {/* Viewport Clip with Fade Masks */}
      <div className="facets-clip" ref={vpRef}>
        <div className="facets-track" ref={trackRef}>
          {FACETS.map((facet, idx) => {
            const isActive = idx === activeIdx;
            return (
              <article
                key={facet.name}
                className={`fcard ${isActive ? 'act' : ''}`}
                style={{ '--glow': facet.glow }}
                onClick={() => setActiveIdx(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveIdx(idx);
                }}
                aria-pressed={isActive}
              >
                {/* Social Badges */}
                <div className="socials">
                  {socialLabels.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soc"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${facet.name} ${s.label}`}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>

                {/* Avatar Glyph with Ambient Gradient */}
                <div className="avatar" style={{ background: facet.bg }}>
                  {facet.glyph}
                </div>

                {/* Name & Handle */}
                <h3 className="fname">{facet.name}</h3>
                <div className="fhandle">{facet.handle}</div>

                {/* Description */}
                <p className="fdesc">{facet.desc}</p>

                {/* Statistics Chips */}
                <div className="stats">
                  {facet.stats.map(([val, label]) => (
                    <span className="stat" key={label}>
                      <b>{val}</b> {label}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        type="button"
        className="arrow r"
        aria-label="Next facet"
        disabled={activeIdx === FACETS.length - 1}
        onClick={() => setActiveIdx((prev) => Math.min(FACETS.length - 1, prev + 1))}
      >
        <Arrow d="M4 1.5 8.5 6 4 10.5" />
      </button>
    </div>
  );
}
