import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="skills pt-0 pb-16" id="experience" aria-label="Career Journey and Milestones">
      {/* Section Header */}
      <div className="text-center mb-8">
        <span className="pill mb-4 text-[10px] uppercase tracking-wider">
          Experience &amp; Education
        </span>
        <h2 className="sec">
          Career milestones &amp; <em>journey</em>
        </h2>
        <p className="sec-sub">
          Continuous hands-on delivery across backend architectures, frontend engineering, and product design.
        </p>
      </div>

      {/* Accordion / Cards Container */}
      <div className="flex flex-col gap-3.5 max-w-[940px] mx-auto">
        {EXPERIENCE_DATA.map((item, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <div
              key={idx}
              className={`glass p-5 md:p-6 transition-all duration-300 border ${
                isExpanded ? 'border-[var(--accent-border)] shadow-md' : 'border-[var(--line)]'
              }`}
              onMouseMove={handleMouseMove}
            >
              {/* Card Header Header Row */}
              <div
                className="flex items-center justify-between cursor-pointer gap-4 select-none"
                onClick={() => setExpandedIdx(isExpanded ? -1 : idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setExpandedIdx(isExpanded ? -1 : idx);
                }}
                aria-expanded={isExpanded}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-[11px] font-mono text-[var(--accent)] font-medium whitespace-nowrap">
                    {item.period}
                  </span>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-[var(--ink)] tracking-tight">
                    {item.role}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-[11px] text-[var(--mute)]">
                    {item.entity}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border border-[var(--line)] flex items-center justify-center text-xs transition-transform duration-300 ${
                      isExpanded ? 'rotate-45 bg-[var(--accent-faint)] text-[var(--accent)]' : 'text-[var(--ink)]'
                    }`}
                  >
                    +
                  </div>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-[var(--line)] flex flex-col gap-3 animate-fadeIn">
                  <div className="text-xs text-[var(--mute)] flex items-center gap-2">
                    <span className="text-[var(--accent)] font-medium">📍 {item.location}</span>
                    <span>•</span>
                    <span className="italic text-[var(--ink)]">{item.entity}</span>
                  </div>

                  <p className="text-[12.5px] leading-relaxed text-[var(--mute)]">
                    {item.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="flex flex-col gap-1.5 mt-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-[11.5px] text-[var(--mute)] flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack Chips */}
                  <div className="chips mt-2 pt-2">
                    {item.stack.map((s) => (
                      <span className="chip text-[10px] py-1 px-2.5" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
