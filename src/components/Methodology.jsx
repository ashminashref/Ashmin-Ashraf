import React from 'react';
import ScrambleText from './ScrambleText';
import { Search, Compass, Terminal, Rocket } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Wireframing',
      icon: Search,
      phase: 'PHASE // ARCHITECTURE',
      desc: 'Deconstructing core product constraints, information architecture, and user mental models. Creating low-fidelity functional wireframes that establish structural logic before aesthetic layers.',
      deliverables: ['Information Architecture', 'User Flows', 'Interactive Wireframes'],
    },
    {
      num: '02',
      title: 'Design Systems & Tokens',
      icon: Compass,
      phase: 'PHASE // DESIGN SPEC',
      desc: 'Defining mathematical typography scales, semantic color variables, spacing systems, and reusable Figma components. Every visual attribute is named for seamless translation into CSS tokens.',
      deliverables: ['Figma Token Variables', 'Component States Matrix', 'Micro-interaction Storyboards'],
    },
    {
      num: '03',
      title: 'Full-Stack Implementation',
      icon: Terminal,
      phase: 'PHASE // ENGINEERING',
      desc: 'Writing clean, declarative React 19 interfaces paired with robust Node/Python endpoints and typed PostgreSQL schemas. Crafting buttery GSAP micro-animations that feel physical and tactile.',
      deliverables: ['TypeScript Components', 'REST/GraphQL API Endpoints', 'GSAP Scroll & Hover Physics'],
    },
    {
      num: '04',
      title: 'Profiling & Deployment',
      icon: Rocket,
      phase: 'PHASE // PRODUCTION',
      desc: 'Benchmarking Core Web Vitals, profiling render bottlenecks, optimizing bundle footprints via dynamic imports, and configuring automated CI/CD deployment pipelines on edge infrastructure.',
      deliverables: ['Lighthouse 100/100 Audit', 'Automated CI/CD Workflows', 'Zero-Downtime Edge Deploy'],
    },
  ];

  return (
    <section className="py-24 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#0055ff] font-bold">//////</span>
              <span>WORKFLOW ENGINE // 006</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              / Four-Stage Methodology.{' '}
              <span className="block text-[#0055ff] font-medium">Concept to Production /</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
            A deterministic, systematic process that eliminates ambiguity, reduces revision cycles, and delivers production software on schedule.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#e5e7eb]">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="border-r border-b border-[#e5e7eb] p-8 bg-white hover:bg-[#fafafa] transition-all flex flex-col justify-between group min-h-[380px]"
              >
                <div className="space-y-6">
                  {/* Step Number & Phase */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-2xl font-mono font-bold text-[#0055ff] group-hover:translate-x-1 transition-transform">
                      {step.num}
                    </span>
                    <span className="text-[#9ca3af]">{step.phase}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-sans font-semibold text-[#121316] tracking-tight group-hover:text-[#0055ff] transition-colors">
                      <ScrambleText text={step.title} speed={25} duration={350} />
                    </h3>
                    <p className="text-sm text-[#4b5563] leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Deliverables Box */}
                <div className="pt-6 border-t border-[#f3f4f6] space-y-1.5">
                  <div className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-wider">
                    KEY DELIVERABLES:
                  </div>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="text-xs font-mono text-[#374151] flex items-center gap-1.5">
                      <span className="text-[#0055ff]">›</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
