import React from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export default function Testimonials() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="skills pt-0 pb-20" id="testimonials" aria-label="Endorsements and Recommendations">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="pill mb-4 text-[10px] uppercase tracking-wider">
          Peer Endorsements
        </span>
        <h2 className="sec">
          Recommendations &amp; <em>feedback</em>
        </h2>
        <p className="sec-sub">
          Testimonials from engineering leads and product managers on code quality and UI fidelity.
        </p>
      </div>

      {/* 3 Columns Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
        {TESTIMONIALS_DATA.map((t, idx) => (
          <div
            key={idx}
            className="glass p-6 flex flex-col justify-between gap-6 border border-[var(--line)]"
            onMouseMove={handleMouseMove}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-[var(--accent)] font-semibold">ENDORSEMENT 0{idx + 1}</span>
                <span className="text-[var(--mute)]">VERIFIED LEAD</span>
              </div>

              {/* Quotation text */}
              <p className="text-[12.5px] leading-relaxed text-[var(--ink)] font-normal italic opacity-90">
                "{t.quote}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-[var(--line)] flex flex-col gap-1">
              <div className="text-[13px] font-medium text-[var(--ink)] tracking-tight">
                {t.name}
              </div>
              <div className="text-[10.5px] text-[var(--mute)]">
                {t.role}
              </div>
              <div className="text-[9.5px] text-[var(--accent)] font-mono mt-1 font-medium">
                FOCUS: {t.collaboration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
