import React from 'react';
import ScrambleText from './ScrambleText';
import { Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      num: '001',
      title: 'Design That Compiles',
      icon: Layers,
      desc: 'Zero disconnect between Figma tokens and code. UI components are built to handle real data and edge cases, not just static artboards.',
    },
    {
      num: '002',
      title: 'Zero Handoff Friction',
      icon: Cpu,
      desc: 'When the designer writes the frontend logic, handoff debates disappear. Ideas move from whiteboard sketches to working code at lightning speed.',
    },
    {
      num: '003',
      title: 'Tactile Motion & Physics',
      icon: Zap,
      desc: 'Interfaces should feel alive. Leveraging GSAP and CSS animations to create smooth, responsive micro-interactions that elevate the user experience.',
    },
    {
      num: '004',
      title: 'Full-Stack Grounding',
      icon: ShieldCheck,
      desc: 'Understanding APIs, databases, and server lifecycles means designing interfaces that respect latency, data structures, and real-world system constraints.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#e5e7eb] gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>ABOUT & APPROACH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              The Autodidact Advantage.{' '}
              <span className="block text-[#0055ff] font-medium">Design Taste + Code Reality</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
            I taught myself product design and full-stack engineering out of pure curiosity. 
            That means I approach every project holistically—from user journey and aesthetics to component logic and deployment.
          </p>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#e5e7eb]">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative border-r border-b border-[#e5e7eb] p-5 sm:p-7 bg-white hover:bg-[#fafafa] transition-all flex flex-col justify-between min-h-[auto] sm:min-h-[260px]"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#e5e7eb] bg-[#f9f9fb] group-hover:bg-[#0055ff] group-hover:text-white group-hover:border-[#0055ff] transition-all flex items-center justify-center text-[#121316]">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#9ca3af] group-hover:text-[#0055ff]">
                      +{item.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-sans font-semibold text-[#121316] tracking-tight group-hover:text-[#0055ff] transition-colors">
                    <ScrambleText text={item.title} speed={20} duration={300} />
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f3f4f6] text-[10px] font-mono text-[#9ca3af] mt-4">
                  CORE PRINCIPLE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
