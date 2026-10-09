import React from 'react';

export default function Marquee({
  items = [
    'PRODUCT DESIGN',
    'PYTHON FULL-STACK',
    'GSAP MICRO-INTERACTIONS',
    'AI DEVELOPER TOOLS',
    'SYSTEM TOKENS',
    'REACT 19 & NEXT.JS',
    'RESTFUL APIS',
    'SUB-SECOND TTFB',
    'SELF-TAUGHT CRAFT',
  ],
  dark = false,
}) {
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y py-3.5 select-none ${
        dark
          ? 'bg-[#121316] border-[#26282e] text-white'
          : 'bg-[#fafafa] border-[#e5e7eb] text-[#121316]'
      }`}
    >
      <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 text-xs sm:text-sm font-mono tracking-widest uppercase">
            <span className="text-[#0055ff]">✦</span>
            <span className="font-semibold">{item}</span>
            <span className="text-[#9ca3af]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
