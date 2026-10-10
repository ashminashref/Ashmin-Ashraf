import React from 'react';
import ScrambleText from './ScrambleText';
import { MapPin, Code2, Palette, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, Globe2 } from 'lucide-react';

export default function LocalSeoSection({ onOpenContact }) {
  const pillars = [
    {
      code: 'CAPABILITY // 01',
      title: 'Full-Stack Software Engineering',
      desc: 'Building responsive, scalable web applications with React 19, Next.js, Python, and PostgreSQL. Architected for speed, resilience, and clean maintainable code.',
      icon: Code2,
      tags: ['React 19', 'Next.js', 'Python', 'PostgreSQL', 'APIs'],
    },
    {
      code: 'CAPABILITY // 02',
      title: 'UI/UX & Product Design Craft',
      desc: 'Translating complex business workflows into intuitive, beautiful Figma design systems. Every token, typography scale, and micro-interaction is precision engineered.',
      icon: Palette,
      tags: ['Figma', 'Design Systems', 'Micro-Interactions', 'Prototyping'],
    },
    {
      code: 'CAPABILITY // 03',
      title: 'Zero Handoff Friction & Speed',
      desc: 'When the designer is also the full-stack engineer, ideas move from wireframes to deployed production code in days—not months of agency back-and-forth.',
      icon: Zap,
      tags: ['Rapid MVPs', 'Agile Delivery', 'Direct Handoff', '100% Alignment'],
    },
    {
      code: 'CAPABILITY // 04',
      title: 'Core Web Vitals & Local SEO Edge',
      desc: 'Engineered with sub-second page loads, semantic HTML5, schema markup, and responsive physics. Built to rank top-of-search on Google across Kozhikode and global markets.',
      icon: ShieldCheck,
      tags: ['Lighthouse 100/100', 'Schema JSON-LD', 'Semantic HTML', 'SEO Architecture'],
    },
  ];

  const localHighlights = [
    { label: 'Primary Location', value: 'Kozhikode (Calicut), Kerala, India' },
    { label: 'Geo Coordinates', value: '11.2588° N, 75.7804° E' },
    { label: 'Tech Ecosystem', value: 'Kozhikode Startups, Cyberpark & Global Remote' },
    { label: 'Client Reach', value: 'Kerala • India • Middle East • Worldwide' },
    { label: 'Specialization', value: 'Web Applications, MVP Sprints, UI/UX Systems' },
    { label: 'Turnaround Time', value: 'Rapid 2 — 4 Week Turnkey Delivery' },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-[#e5e7eb] bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>KOZHIKODE TECH LEADERSHIP // 004</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              Software Engineering &amp; UI/UX Craft in{' '}
              <span className="block text-[#0055ff] font-medium">Kozhikode, Kerala.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
              Why founders, tech teams, and growing brands in Kozhikode (Calicut) and worldwide partner with 
              <strong className="text-[#121316] font-medium"> Ashmin Ashraf</strong> for high-impact software products.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0055ff]">
              <MapPin className="w-3.5 h-3.5" />
              <span>BASED IN CALICUT • REMOTE WORLDWIDE</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#e5e7eb] mb-12 sm:mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="border-r border-b border-[#e5e7eb] p-6 sm:p-8 bg-white hover:bg-[#fcfcfd] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0055ff] font-semibold">{item.code}</span>
                    <span className="text-[#9ca3af]">0{idx + 1}</span>
                  </div>

                  <div className="w-10 h-10 border border-[#e5e7eb] bg-[#f9f9fb] group-hover:bg-[#0055ff] group-hover:text-white group-hover:border-[#0055ff] transition-all flex items-center justify-center text-[#121316]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-semibold text-[#121316] tracking-tight group-hover:text-[#0055ff] transition-colors">
                      <ScrambleText text={item.title} speed={20} duration={300} />
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#f3f4f6] mt-6">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] border border-[#e5e7eb]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Verification Card */}
        <div className="border border-[#e5e7eb] bg-white p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono bg-[#f0f4ff] border border-[#d6e4ff] text-[#0055ff]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0055ff]" />
                <span>KOZHIKODE’S INDEPENDENT SOFTWARE &amp; DESIGN SPECIALIST</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-normal tracking-tight text-[#121316]">
                Eliminate the Agency Markup.{' '}
                <span className="text-[#0055ff] font-medium">Work Directly With the Builder.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light">
                Whether you are a startup founder in Kozhikode looking to launch an MVP, an established business in Kerala modernizing your digital presence, or an international tech company seeking elite frontend and UI design execution—you get dedicated engineering craft, transparent communication, and rapid turnaround.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://cal.com/ashmin-ashraf/schedule-meeting?user=ashmin-ashraf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-[#0055ff] text-white hover:bg-[#0044cc] text-xs font-mono uppercase tracking-wider font-semibold transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  <span>SCHEDULE STRATEGY CALL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {onOpenContact && (
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-3 bg-white text-black border border-[#d1d5db] hover:border-black text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer"
                  >
                    SEND PROJECT INQUIRY
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Local Specs Box */}
            <div className="lg:col-span-5 bg-[#f9f9fb] border border-[#e5e7eb] p-5 sm:p-6 space-y-3 font-mono">
              <div className="text-xs font-semibold text-[#121316] uppercase pb-2 border-b border-[#e5e7eb] flex items-center justify-between">
                <span>LOCATION &amp; OPERATIONAL SPEC</span>
                <Globe2 className="w-4 h-4 text-[#0055ff]" />
              </div>

              <div className="space-y-2.5 text-xs">
                {localHighlights.map((spec, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#f3f4f6] gap-0.5">
                    <span className="text-[#6b7280]">{spec.label}:</span>
                    <span className="text-[#121316] font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
