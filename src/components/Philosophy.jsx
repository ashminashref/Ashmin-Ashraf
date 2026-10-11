import React from 'react';
import ScrambleText from './ScrambleText';
import { Layers, Server, Palette, Code2 } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      num: '01',
      title: 'Python & Django APIs',
      icon: Server,
      desc: 'Architecting secure RESTful endpoints, clean relational database schemas in MySQL, and reliable server-side workflows.',
    },
    {
      num: '02',
      title: 'Dynamic React Interfaces',
      icon: Code2,
      desc: 'Building responsive web apps with React.js, React Hooks, React Router, and modular component state management.',
    },
    {
      num: '03',
      title: 'Intentional UI/UX Design',
      icon: Palette,
      desc: 'Bridging Figma designs directly into pixel-perfect CSS and responsive layouts with zero handoff friction.',
    },
    {
      num: '04',
      title: 'Clean & Scalable Code',
      icon: Layers,
      desc: 'Writing maintainable, Git-versioned code focused on database performance, reusability, and seamless user experiences.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-5 border-b border-[#e5e7eb] gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>ENGINEERING APPROACH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal tracking-tight text-[#121316]">
              How I Build.{' '}
              <span className="block text-[#0055ff] font-medium">Full Stack Python + UI Craft</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
            Combining backend rigor with modern frontend engineering and intuitive design taste.
          </p>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#e5e7eb]">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative border-r border-b border-[#e5e7eb] p-5 sm:p-6 bg-white hover:bg-[#fafafa] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 border border-[#e5e7eb] bg-[#f9f9fb] group-hover:bg-[#0055ff] group-hover:text-white group-hover:border-[#0055ff] transition-all flex items-center justify-center text-[#121316]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-[#9ca3af] group-hover:text-[#0055ff]">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-sans font-semibold text-[#121316] tracking-tight group-hover:text-[#0055ff] transition-colors">
                    <ScrambleText text={item.title} speed={20} duration={300} />
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
